# syntax=docker/dockerfile:1

# ----------
# Stage: Deps builder
FROM node:16-alpine AS deps-builder

# Required by node-sass
RUN apk update && apk add yarn python3 g++ make && rm -rf /var/cache/apk/*

WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install

# ----------
# Stage: Deps runner
FROM node:16-alpine AS deps-runner

WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install --production

# ----------
# Stage: Builder, SSG (server-side generated)
FROM node:16-alpine AS builder-ssg

WORKDIR /usr/src/app
COPY --from=deps-builder /usr/src/app/node_modules ./node_modules
COPY additional.d.ts jest.config.js next.config.js next-env.d.ts package.json \
  tsconfig* ./
COPY tsconfigs ./tsconfigs
COPY public ./public
COPY src ./src
RUN yarn build:ssg

# TODO:enable steps once we have unit tests
# COPY jest.config.js ./
# RUN yarn test

# ----------
# Stage: Runner, multi-layer
FROM node:16-alpine AS runner-ssg-multi-layer

WORKDIR /usr/src/app
COPY --chown=app --from=deps-runner  /usr/src/app/node_modules ./node_modules
COPY --chown=app --from=builder-ssg /usr/src/app/build ./build
COPY additional.d.ts jest.config.js next.config.js next-env.d.ts package.json \
  server.js tsconfig* ./
COPY tsconfigs ./tsconfigs
COPY public ./public
COPY src ./src

# ----------
# Stage: Runner, optimized for size into a single layer
FROM node:16-alpine AS runner-ssg

WORKDIR /usr/src/app
RUN adduser -D app && chown -R app ./
USER app

COPY --chown=app --from=runner-ssg-multi-layer  /usr/src/app .

EXPOSE 8080
CMD ["yarn", "start"]

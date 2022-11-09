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

# Required by node-sass
RUN apk update && apk add yarn python3 g++ make && rm -rf /var/cache/apk/*

WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install --production

# ----------
# Stage: Builder
FROM node:16-alpine AS builder

COPY --from=deps-builder /usr/src/app/node_modules ./node_modules
COPY additional.d.ts jest.config.js next.config.js next-env.d.ts package.json \
  tsconfig* ./
COPY tsconfigs ./tsconfigs
COPY public ./public
COPY src ./src
RUN yarn build

# TODO:enable steps once we have unit tests
# COPY jest.config.js ./
# RUN yarn test

# ----------
# Stage: Runner
FROM node:16-alpine AS runner

WORKDIR /usr/src/app
RUN adduser -D app && chown -R app ./
USER app

COPY --chown=app --from=deps-runner  /usr/src/app/node_modules ./node_modules
COPY --chown=app --from=builder /.next ./.next
COPY additional.d.ts jest.config.js next.config.js next-env.d.ts package.json \
  tsconfig* ./
COPY tsconfigs ./tsconfigs
COPY public ./public
COPY src ./src
COPY .env* package.json ./

EXPOSE 8080
CMD ["yarn", "start:prod"]

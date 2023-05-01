# Copyright rigélblu inc.
# All rights reserved.

# syntax=docker/dockerfile:1

# ----------
# Stage: Deps builder
FROM node:16-alpine AS deps-builder

# WORKAROUND: Install packages required by node-sass
RUN apk update && apk add yarn python3 g++ make && rm -rf /var/cache/apk/*

WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# ----------
# Stage: Deps runner
FROM node:16-alpine AS deps-runner

WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install --production --frozen-lockfile

# ----------
# Stage: Builder using SSG (server-side generated)
FROM node:16-alpine AS builder-ssg

ARG NEXT_PUBLIC_ANALYTICS_ID
ARG NEXT_PUBLIC_STRIPE_PAYMENT_URL
ARG NODE_ENV

WORKDIR /usr/src/app
COPY --from=deps-builder /usr/src/app/node_modules ./node_modules
COPY . .
RUN yarn build:ssg

# TODO:enable steps once we have unit tests
# COPY jest.config.js ./
# RUN yarn test

# ----------
# Stage: Runner using SSG, multi-layered
FROM node:16-alpine AS runner-ssg-multi-layer

WORKDIR /usr/src/app
COPY --from=deps-runner  /usr/src/app/node_modules ./node_modules
COPY --from=builder-ssg /usr/src/app/build ./build
COPY . .

# ----------
# Stage: Runner using SSG, optimized for size into a single layer
FROM node:16-alpine AS runner-ssg

WORKDIR /usr/src/app
RUN adduser -D app && chown -R app ./
USER app

COPY --chown=app --from=runner-ssg-multi-layer  /usr/src/app .

EXPOSE 8080
CMD exec yarn start

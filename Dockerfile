# Copyright rigélblu inc.
# All rights reserved.

# syntax=docker/dockerfile:1

# ----------
# Stage: Base builder
FROM node:18-slim AS base

RUN npm install -g pnpm

# ----------
# Stage: Deps builder
FROM base AS deps-builder

WORKDIR /usr/src/app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# ----------
# Stage: Deps runner
FROM base AS deps-runner

WORKDIR /usr/src/app
COPY package.json pnpm-lock.yaml ./

# --ignore-script is required to fix "husky not found error". use to avoid running
RUN pnpm install --prod --frozen-lockfile --ignore-scripts

# ----------
# Stage: Builder using SSG (server-side generated)
FROM base AS builder-ssg

ARG NEXT_PUBLIC_ANALYTICS_ID
ARG NEXT_PUBLIC_STRIPE_PAYMENT_URL
ARG NODE_ENV

WORKDIR /usr/src/app
COPY --from=deps-builder /usr/src/app/node_modules ./node_modules
COPY . .
RUN pnpm build:ssg
RUN pnpm compile

# TODO:enable steps once we have unit tests
# COPY jest.config.js ./
# RUN pnpm test

# ----------
# Stage: Runner using SSG, multi-layered
FROM base AS runner-ssg-multi-layer

WORKDIR /usr/src/app
COPY --from=deps-runner  /usr/src/app/node_modules ./node_modules
COPY --from=builder-ssg /usr/src/app/build ./build
COPY . .

# ----------
# Stage: Runner using SSG, optimized for size into a single layer
FROM base AS runner-ssg

WORKDIR /usr/src/app
RUN adduser --system --no-create-home --group app && chown -R app ./
USER app

COPY --chown=app --from=runner-ssg-multi-layer  /usr/src/app .

EXPOSE 8080
CMD exec pnpm start

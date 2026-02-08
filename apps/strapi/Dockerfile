FROM node:18-alpine

# Installing libvips-dev for sharp Compatibility
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Accept Coolify injected ARGs
ARG NODE_ENV=development
ARG COOLIFY_URL
ARG COOLIFY_FQDN
ARG SERVICE_FQDN_HYFY_AGENCY_BACKEND
ARG SERVICE_FQDN_HYFY_AGENCY_BACKENDADMINER
ARG SERVICE_URL_HYFY_AGENCY_BACKEND
ARG SERVICE_URL_HYFY_AGENCY_BACKENDADMINER
ARG ADMIN_JWT_SECRET
ARG DATABASE_CLIENT
ARG DATABASE_NAME
ARG DATABASE_PASSWORD
ARG DATABASE_PORT
ARG DATABASE_USERNAME
ARG JWT_SECRET
ARG COOLIFY_BUILD_SECRETS_HASH

ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

# Copy monorepo configuration
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Verify files exist
RUN echo "=== Files in /app ===" && ls -la && \
    echo "=== pnpm version ===" && pnpm --version && \
    echo "=== Checking workspace config ===" && cat pnpm-workspace.yaml

# Copy workspace packages (only what Strapi needs)
COPY packages ./packages
COPY apps/strapi ./apps/strapi

# Verify directory structure
RUN echo "=== Apps directory ===" && ls -la apps/ && \
    echo "=== Strapi directory ===" && ls -la apps/strapi/ && \
    echo "=== Packages directory ===" && ls -la packages/

# Install dependencies - show actual error if it fails
RUN pnpm install --frozen-lockfile --filter strapi... 2>&1 || \
    (echo "=== PNPM INSTALL FAILED - Full error above ===" && exit 1)

WORKDIR /app/apps/strapi

RUN chown -R node:node /app
USER node

RUN pnpm build

EXPOSE 1337
CMD ["pnpm", "develop"]

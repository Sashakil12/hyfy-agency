FROM node:18-alpine

# Install system dependencies for sharp and Strapi
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev

# Enable and install pnpm
RUN corepack enable && corepack prepare pnpm@8.15.0 --activate

# Accept build arguments from Coolify
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

# Copy workspace configuration
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Copy all workspace packages
COPY packages ./packages
COPY apps/strapi ./apps/strapi

# Install all dependencies (simpler, more reliable)
RUN pnpm install --frozen-lockfile

# Move to strapi directory
WORKDIR /app/apps/strapi

# Set ownership
RUN chown -R node:node /app
USER node

# Build Strapi
RUN pnpm build

EXPOSE 1337
CMD ["pnpm", "develop"]

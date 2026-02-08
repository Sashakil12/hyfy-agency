FROM node:18-alpine

# Install system dependencies for sharp and Strapi
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev

# Enable and install pnpm
RUN corepack enable && corepack prepare pnpm@8.15.0 --activate

# Accept build arguments from Coolify (but don't use NODE_ENV yet)
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

# Force development mode for dependency installation
ENV NODE_ENV=development

WORKDIR /app

# Copy workspace configuration
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Copy all workspace packages
COPY packages ./packages
COPY apps/strapi ./apps/strapi

# Install all dependencies with verbose output
RUN echo "Installing dependencies with NODE_ENV=$NODE_ENV" && \
    pnpm install --frozen-lockfile || \
    (echo "Frozen lockfile failed, trying without --frozen-lockfile" && \
     pnpm install)

# Move to strapi directory
WORKDIR /app/apps/strapi

# Build Strapi (still in development mode)
RUN pnpm build

# Now accept runtime NODE_ENV
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# Set ownership
RUN chown -R node:node /app
USER node

EXPOSE 1337
CMD ["pnpm", "start"]

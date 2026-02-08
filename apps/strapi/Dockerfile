FROM node:18-alpine

# Installing libvips-dev for sharp Compatibility
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

# Copy monorepo configuration
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Copy workspace packages (only what Strapi needs)
COPY packages ./packages
COPY apps/strapi ./apps/strapi

# Install dependencies using pnpm
RUN pnpm install --frozen-lockfile

WORKDIR /app/apps/strapi

RUN chown -R node:node /app
USER node

RUN pnpm build

EXPOSE 1337
CMD ["pnpm", "develop"]

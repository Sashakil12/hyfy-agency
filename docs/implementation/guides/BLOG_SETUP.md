# Blog Setup Guide

This guide will help you set up and use the Nexus-Glass Blog system.

## Overview

The blog system consists of:
- **Backend:** Strapi CMS with Blog Post content type
- **Frontend:** Astro SSR pages with Nexus-Glass design
- **Features:** Pagination, SEO optimization, structured data, social sharing

## Initial Setup

### 1. Start Strapi CMS

```bash
cd apps/strapi
pnpm develop
```

Access Strapi admin at: `http://localhost:1337/admin`

### 2. Create Admin User

On first launch, Strapi will prompt you to create an admin account.

### 3. Configure Blog Post Permissions

1. Go to **Settings** > **Users & Permissions Plugin** > **Roles** > **Public**
2. Under **Blog-post**, enable:
   - `find` (to list blog posts)
   - `findOne` (to view individual posts)
3. Click **Save**

### 4. Generate API Token

1. Go to **Settings** > **API Tokens**
2. Click **Create new API Token**
3. Set:
   - **Name:** `Frontend`
   - **Token type:** `Read-only`
   - **Token duration:** `Unlimited`
4. Copy the generated token

### 5. Configure Frontend Environment

Create or update `apps/web/.env.local`:

```env
STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=your_token_here
PUBLIC_SITE_URL=http://localhost:4321
```

### 6. Start Frontend

```bash
# From project root
pnpm dev

# Or just the web app
pnpm dev --filter=web
```

Access the blog at: `http://localhost:4321/blog`

## Creating Blog Posts

### In Strapi Admin

1. Go to **Content Manager** > **Blog Post**
2. Click **Create new entry**
3. Fill in the required fields:

#### Required Fields
- **Title:** Post title (auto-generates slug)
- **Excerpt:** Short description (max 300 characters)
- **Content:** Full article content (rich text)
- **Author:** Author name
- **Published Date:** Publication date

#### Optional Fields
- **Featured Image:** Upload hero image (recommended: 1200x630px)
- **Reading Time:** Estimated minutes to read (auto-calculated if left blank)
- **Tags:** Array of tags (e.g., ["design", "technology"])
- **SEO:** Expand for advanced SEO settings
  - Meta Title (max 60 characters)
  - Meta Description (max 160 characters)
  - Meta Image (for social sharing)
  - Keywords
  - Canonical URL

4. Click **Save**
5. Click **Publish** to make it live

## Blog Features

### Design Philosophy: Nexus-Glass

- **Color Scheme:**
  - Background: Deep Obsidian (`#050505`)
  - Accent: Electric Lime (`#88FF66`)
  - Text: Pure White (`#FFFFFF`) / Slate Grey (`#828282`)

- **Visual Effects:**
  - Glassmorphism panels with backdrop blur
  - Glow effects on accents
  - Parallax scrolling on hero sections
  - Staggered fade-in animations
  - Light sweep on hover

- **Typography:**
  - Headings: Orbitron (bold, uppercase)
  - Body: Exo 2 (clean, readable)

### Bento Grid Layout

Blog cards use a dynamic bento grid:
- Every 7th card: Large (2 columns × 2 rows)
- Every 5th card: Medium (2 columns × 1 row)
- Others: Standard (1 column × 1 row)

### Pagination

- 9 posts per page (default)
- SEO-friendly URLs: `/blog?page=2`
- Accessible navigation with ARIA labels
- Smart ellipsis for many pages

### SEO Optimization

#### Automatic Features
- Server-side rendering (SSR) for all blog pages
- Structured data (Schema.org Article, Breadcrumbs)
- Open Graph tags for social sharing
- Twitter Card metadata
- Canonical URLs
- Meta descriptions from excerpts
- Optimized image alt text

#### Manual Optimization
Use the SEO component in Strapi to override:
- Custom meta titles
- Custom meta descriptions
- Social sharing images
- Canonical URLs
- Keywords

#### Best Practices
1. **Meta Title:** Keep under 60 characters
2. **Meta Description:** Keep under 160 characters
3. **Featured Image:** Use 1200x630px for optimal social sharing
4. **Slug:** Auto-generated but can be customized
5. **Tags:** Use 3-5 relevant tags per post

## Content Guidelines

### Writing for Nexus-Glass

1. **Title:** Short, impactful, tech-forward
   - ✅ "The Future of Glassmorphic Design"
   - ❌ "Some thoughts about design trends"

2. **Excerpt:** Hook readers in 1-2 sentences
   - Focus on value proposition
   - Include keywords naturally

3. **Content Structure:**
   - Use H2 for main sections
   - Use H3 for subsections
   - Keep paragraphs short (3-4 lines)
   - Use bullet points for lists
   - Add code blocks for technical content

4. **Images:**
   - Featured image is required for visual appeal
   - Use high-quality, relevant images
   - Add descriptive alt text

5. **Tags:**
   - Use lowercase
   - Be consistent (e.g., "design" not "Design")
   - Recommended tags: design, technology, ai, web3, innovation

## API Endpoints

### List Blog Posts
```
GET /api/blog-posts?page=1&pageSize=9
```

### Get Single Post
```
GET /api/blog-posts?filters[slug][$eq]=your-post-slug
```

### Response Format
```json
{
  "data": [
    {
      "id": 1,
      "documentId": "...",
      "title": "Post Title",
      "slug": "post-title",
      "excerpt": "Short description...",
      "content": "Full content...",
      "author": "Author Name",
      "publishedDate": "2025-01-15T10:00:00.000Z",
      "readingTime": 5,
      "tags": ["design", "tech"],
      "featuredImage": {
        "url": "/uploads/...",
        "alternativeText": "..."
      },
      "seo": {...}
    }
  ],
  "meta": {
    "pagination": {
      "page": 1,
      "pageSize": 9,
      "pageCount": 3,
      "total": 25
    }
  }
}
```

## Troubleshooting

### Posts Not Showing

1. Check Strapi is running: `http://localhost:1337/admin`
2. Verify posts are **Published** (not just Saved)
3. Check Public role permissions in Strapi
4. Verify API token in `.env.local`

### Images Not Loading

1. Check image URL in Strapi (should be `/uploads/...`)
2. Verify `STRAPI_URL` is correct in `.env.local`
3. Check image was uploaded successfully

### SSR Not Working

1. Verify `astro.config.mjs` has:
   ```js
   output: 'hybrid'
   adapter: node({ mode: 'standalone' })
   ```
2. Check `export const prerender = false` in blog pages

### TypeScript Errors

Run type checking:
```bash
pnpm type-check
```

If Strapi types are missing, restart your dev server.

## Production Deployment

### Environment Variables

Set these in your hosting platform:

```env
STRAPI_URL=https://your-strapi-domain.com
STRAPI_API_TOKEN=your_production_token
PUBLIC_SITE_URL=https://your-site.com
```

### Build Commands

```bash
# Build all apps
pnpm build

# Build individually
pnpm build --filter=web
pnpm build --filter=strapi
```

### Strapi Production

For production, switch to PostgreSQL:

1. Update `apps/strapi/.env`:
```env
DATABASE_CLIENT=postgres
DATABASE_HOST=your_db_host
DATABASE_PORT=5432
DATABASE_NAME=strapi
DATABASE_USERNAME=strapi
DATABASE_PASSWORD=your_password
DATABASE_SSL=false
```

2. Install PostgreSQL driver:
```bash
cd apps/strapi
pnpm add pg
```

## Advanced Customization

### Change Posts Per Page

Edit `apps/web/src/pages/blog/index.astro`:
```js
const pageSize = 12; // Change from 9 to 12
```

### Customize Colors

Override the Nexus-Glass colors in your Tailwind config or components:
- Primary: `#88FF66` → Your color
- Background: `#050505` → Your color

### Add Blog Categories

1. Create a Category content type in Strapi
2. Add a relation to Blog Post
3. Update frontend to filter by category

### Custom Blog Layout

Modify `apps/web/src/components/blog/BlogCard.astro` to change:
- Card size logic
- Hover effects
- Information displayed

## Need Help?

- Strapi Docs: https://docs.strapi.io/
- Astro Docs: https://docs.astro.build/
- Nexus-Glass Design Specs: See `CLAUDE.md`

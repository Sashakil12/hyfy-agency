# Blog System Testing Guide

## Quick Start Test

### 1. Start Both Services
```bash
# Terminal 1: Start Strapi
cd apps/strapi
pnpm develop

# Terminal 2: Start Astro (from project root)
pnpm dev --filter=web
```

### 2. Initial Setup (First Time Only)

**Strapi Setup:**
1. Open http://localhost:1337/admin
2. Create admin account (remember credentials!)
3. Go to Settings → Users & Permissions Plugin → Roles → Public
4. Expand **Blog-post** permissions
5. Check boxes for:
   - ☑️ `find`
   - ☑️ `findOne`
6. Click **Save**

**API Token:**
1. Settings → API Tokens → Create new API Token
2. Name: `Frontend`
3. Token type: `Read-only`
4. Duration: `Unlimited`
5. Copy the generated token
6. Create `apps/web/.env.local`:
   ```env
   STRAPI_URL=http://localhost:1337
   STRAPI_API_TOKEN=paste_your_token_here
   PUBLIC_SITE_URL=http://localhost:4321
   ```
7. Restart Astro dev server

### 3. Create Test Blog Posts

Create at least 3 blog posts to test pagination and layout:

**Post 1: "The Future of Glassmorphic Design"**
```
Title: The Future of Glassmorphic Design
Excerpt: Exploring how transparent, layered interfaces are reshaping modern UI design with depth and elegance.
Author: Design Team
Published Date: [Today's date]
Reading Time: 5
Tags: ["design", "ui", "glassmorphism"]

Content:
# Introduction
Glassmorphism has emerged as one of the most influential design trends...

# Key Principles
- Transparency and blur effects
- Subtle borders and shadows
- Layered depth perception

# Implementation
Modern CSS makes glassmorphism easier than ever...

[Add a few more paragraphs]

Featured Image: Upload any high-quality tech/design image (1200x630px recommended)

SEO:
- Meta Title: Future of Glassmorphic Design | Nexus-Glass
- Meta Description: Learn how glassmorphism is revolutionizing UI design with transparent layers and elegant depth effects.
```

**Post 2: "Building AI-Native Applications"**
```
Title: Building AI-Native Applications
Excerpt: A comprehensive guide to architecting applications with AI at their core, not as an afterthought.
Author: Engineering Team
Published Date: [Today minus 1 day]
Reading Time: 8
Tags: ["ai", "technology", "development"]

Content: [Similar structure to Post 1]
```

**Post 3: "Neo-Futuristic Design Trends 2026"**
```
Title: Neo-Futuristic Design Trends 2026
Excerpt: Discover the cutting-edge design trends defining the digital landscape of tomorrow.
Author: Design Team
Published Date: [Today minus 2 days]
Reading Time: 6
Tags: ["design", "trends", "futurism"]

Content: [Similar structure]
```

**Continue creating more posts** (aim for 10-12 total) to test:
- Pagination (9 per page, so you'll have 2 pages)
- Bento grid layout variations
- Different content types

## Test Checklist

### Visual Tests

#### Blog Listing Page (http://localhost:4321/blog)

**Hero Section:**
- [ ] Background grid pattern visible
- [ ] "BLOG" watermark text at 3-5% opacity
- [ ] "Latest Insights" badge with glass effect
- [ ] "Nexus-Glass Blog" title with Electric Lime glow
- [ ] Subtitle in slate grey
- [ ] Green glow orb behind content

**Blog Grid:**
- [ ] Cards arranged in bento grid (1-3 columns responsive)
- [ ] Every 7th card is large (2x2 on desktop)
- [ ] Every 5th card is medium (2x1 on desktop)
- [ ] Glass panel effect on all cards
- [ ] Featured images load and fill container
- [ ] Gradient overlay on images
- [ ] Reading time badge in top-right (Electric Lime)
- [ ] Date, author meta info visible
- [ ] Title in Orbitron, uppercase
- [ ] Excerpt text in Slate Grey
- [ ] Tags displayed as pills
- [ ] "Read Article" link with arrow

**Card Interactions:**
- [ ] Hover increases glow (border turns lime green)
- [ ] Image scales up on hover (zoom effect)
- [ ] Light sweep gradient passes across card
- [ ] Title changes to lime green
- [ ] Arrow moves right slightly
- [ ] Smooth transitions (~200-300ms)

**Pagination:**
- [ ] Appears when more than 9 posts
- [ ] Shows current page in Electric Lime
- [ ] Previous/Next buttons functional
- [ ] Ellipsis (...) for many pages
- [ ] Disabled state for first/last pages
- [ ] Hover glow on page numbers

**CTA Section:**
- [ ] Glass panel with border glow
- [ ] Background gradient orbs (lime + amber)
- [ ] Email input with glass styling
- [ ] Subscribe button in Electric Lime
- [ ] Button glow intensifies on hover

**Animations:**
- [ ] Cards fade in with stagger (100ms delay each)
- [ ] Hero text parallax scrolls slower than page
- [ ] Smooth scroll to top
- [ ] Respects prefers-reduced-motion

#### Individual Blog Post (http://localhost:4321/blog/post-slug)

**Navigation:**
- [ ] Back button in top-left corner
- [ ] Hover effect on back button
- [ ] Breadcrumb navigation below hero
- [ ] Breadcrumb links work

**Hero Section:**
- [ ] Full-width featured image (60vh)
- [ ] Image parallax scrolls
- [ ] Dark gradient overlay from bottom
- [ ] Glow orb behind image

**Post Header:**
- [ ] Date, author, reading time meta
- [ ] Reading time in glass badge (lime accent)
- [ ] Title in Orbitron, large and bold
- [ ] Excerpt below title
- [ ] Tags as interactive pills
- [ ] All text readable over background

**Content:**
- [ ] Prose styling applied
- [ ] Headings in Orbitron, uppercase
- [ ] Body text in Exo 2, readable grey
- [ ] Links in Electric Lime
- [ ] Code blocks with glass background
- [ ] Blockquotes with lime left border
- [ ] Lists with lime markers
- [ ] Images rounded with subtle glow

**Share Section:**
- [ ] Glass panel with border
- [ ] Twitter, Facebook, LinkedIn buttons
- [ ] Icons visible and correct
- [ ] Buttons have hover effect
- [ ] Links open in new tab

**Back to Blog Button:**
- [ ] Centered at bottom
- [ ] Electric Lime background
- [ ] Shadow glow effect
- [ ] Hover increases glow

### Functional Tests

**SSR (Server-Side Rendering):**
```bash
# View page source, should see:
curl http://localhost:4321/blog | grep -o "<h1.*</h1>" | head -5
curl http://localhost:4321/blog/your-post-slug | grep -o "<title>.*</title>"
```
- [ ] HTML includes blog post data (not loading client-side)
- [ ] Meta tags present in source
- [ ] Structured data (JSON-LD) in source

**SEO Tags:**

View source and verify:
- [ ] `<title>` tag unique per page
- [ ] Meta description present
- [ ] Open Graph tags (og:title, og:description, og:image)
- [ ] Twitter Card tags
- [ ] Canonical URL
- [ ] Structured data (Article schema)
- [ ] Breadcrumb schema

**Pagination:**
- [ ] `/blog` shows posts 1-9
- [ ] `/blog?page=2` shows posts 10-18
- [ ] Direct URL access works
- [ ] Browser back/forward work
- [ ] Page numbers update in UI

**API Integration:**
- [ ] Posts load from Strapi
- [ ] Images resolve correctly
- [ ] Error handling (stop Strapi and reload page)
- [ ] Empty state shows when no posts
- [ ] Loading states if network slow

**Responsive Design:**

Test at these breakpoints:
- [ ] **Mobile (375px):** Single column, touch-friendly
- [ ] **Tablet (768px):** Two columns
- [ ] **Desktop (1024px):** Three columns
- [ ] **Large (1440px):** Three columns, max-width container

**Typography:**
- [ ] Orbitron loads for headings
- [ ] Exo 2 loads for body
- [ ] Fonts fallback gracefully if CDN fails
- [ ] No FOIT (Flash of Invisible Text)
- [ ] Readable contrast ratios

### Accessibility Tests

**Keyboard Navigation:**
- [ ] Tab through all interactive elements
- [ ] Focus states visible (outline/glow)
- [ ] Enter activates links/buttons
- [ ] Tab order logical (top to bottom)

**Screen Reader:**
```bash
# Test with screen reader or check HTML structure
```
- [ ] Images have alt text
- [ ] ARIA labels on navigation
- [ ] Landmarks (nav, main, article)
- [ ] Heading hierarchy (h1 → h2 → h3)
- [ ] Link purposes clear

**Color Contrast:**
- [ ] White text on dark background: ✅ (21:1)
- [ ] Slate grey readable: ✅ (4.5:1+)
- [ ] Lime green readable on dark: ✅
- [ ] Test in high contrast mode

### Performance Tests

**Lighthouse (Chrome DevTools):**
```bash
# Run in Incognito mode
# Open DevTools → Lighthouse → Generate report
```

Target Scores:
- [ ] Performance: 90+
- [ ] Accessibility: 95+
- [ ] Best Practices: 90+
- [ ] SEO: 95+

**Network:**
- [ ] Images lazy load (check Network tab)
- [ ] Fonts load with swap
- [ ] No render-blocking resources
- [ ] Total page size < 2MB

**Core Web Vitals:**
- [ ] LCP (Largest Contentful Paint): < 2.5s
- [ ] FID (First Input Delay): < 100ms
- [ ] CLS (Cumulative Layout Shift): < 0.1

### Browser Compatibility

Test in:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

Check:
- [ ] Glassmorphism (backdrop-filter) support or fallback
- [ ] Grid layout
- [ ] Flexbox
- [ ] CSS custom properties
- [ ] Smooth scrolling

### Edge Cases

**Empty States:**
- [ ] No posts: Shows "No Posts Yet" message
- [ ] No featured image: Shows placeholder
- [ ] No tags: Section hidden
- [ ] Missing SEO data: Falls back to defaults

**Long Content:**
- [ ] Very long title (wraps properly)
- [ ] Very long excerpt (truncates)
- [ ] Many tags (limits to 3 on card)
- [ ] Large images (resize properly)

**Special Characters:**
- [ ] Title with quotes: "The "Best" Design"
- [ ] Slug generation: handles spaces, special chars
- [ ] URL encoding: works in links

## Common Issues & Fixes

### Posts Not Showing

**Symptom:** Empty blog page or "No Posts Yet"

**Checks:**
1. Is Strapi running? `http://localhost:1337/admin`
2. Are posts Published? (not just Saved)
3. API token in `.env.local`?
4. Public permissions enabled in Strapi?

**Debug:**
```bash
# Check API directly
curl http://localhost:1337/api/blog-posts

# Should return JSON with posts
```

### Images Not Loading

**Symptom:** Broken image icons

**Checks:**
1. Image uploaded in Strapi?
2. `STRAPI_URL` correct in `.env.local`?
3. Image URL in API response?

**Debug:**
```bash
# Check image URL
curl http://localhost:1337/api/blog-posts | jq '.[0].featuredImage.url'
```

### TypeScript Errors

**Symptom:** Build fails with type errors

**Fix:**
```bash
pnpm type-check
# Fix errors shown
```

### Pagination Not Working

**Symptom:** All posts on one page

**Checks:**
1. More than 9 posts created?
2. URL updates when clicking pages?
3. Check browser console for errors

### Styling Issues

**Symptom:** No glassmorphism, fonts wrong

**Checks:**
1. Tailwind generating classes?
2. Google Fonts loading?
3. Browser supports backdrop-filter?

**Debug:**
```bash
# Check computed styles in DevTools
# Look for backdrop-filter in Elements panel
```

## Production Testing

### Build Test
```bash
pnpm build --filter=web
```

Should complete without errors.

### Preview Production Build
```bash
cd apps/web
pnpm preview
```

Test at: http://localhost:4321

### Environment Variables
Ensure production `.env` has:
```env
STRAPI_URL=https://your-strapi-domain.com
STRAPI_API_TOKEN=production_token_here
PUBLIC_SITE_URL=https://your-site.com
```

### SEO Validation

**Google Search Console:**
- Submit sitemap
- Test URL indexing
- Check mobile usability

**Social Preview:**
- https://www.opengraph.xyz/ (test OG tags)
- https://cards-dev.twitter.com/validator (test Twitter cards)

## Performance Benchmarks

**Development:**
- Initial load: < 3s
- Navigation: < 500ms
- Image load: < 2s (lazy)

**Production:**
- Initial load: < 1.5s
- Navigation: < 200ms
- Time to Interactive: < 3s

## Success Criteria

✅ All visual elements match Nexus-Glass design
✅ Blog posts load from Strapi
✅ Pagination works correctly
✅ Individual posts accessible via slug
✅ SEO tags present and correct
✅ Responsive on all breakpoints
✅ Accessible (keyboard, screen reader)
✅ Performance scores > 90
✅ No console errors
✅ Build completes successfully

---

**Testing Complete!** 🎉

Ready for production deployment.

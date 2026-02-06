# Blog SSR Styling Fix

## Issue
Blog pages using SSR (`prerender = false`) were not loading Tailwind CSS styles, showing unstyled HTML with white background instead of the Nexus-Glass design.

## Root Cause
Astro SSR pages need to explicitly import the global CSS file. Unlike static pages that may auto-include global styles, SSR pages require manual import.

## Solution
Added CSS import to both blog pages:

**`/src/pages/blog/index.astro`:**
```typescript
---
import '../../styles/global.css'; // ← Added this
import type { BlogPost } from '../../lib/strapi';
// ... rest of imports
---
```

**`/src/pages/blog/[slug].astro`:**
```typescript
---
import '../../styles/global.css'; // ← Added this
import { getBlogPost, getImageUrl, formatDate } from '../../lib/strapi';
// ... rest of imports
---
```

## Verification
After the fix, all Nexus-Glass design elements now render correctly:
- ✅ Deep Obsidian background (#050505)
- ✅ Electric Lime accents (#88FF66)
- ✅ Glassmorphism panels with backdrop blur
- ✅ Orbitron typography
- ✅ All Tailwind utility classes working
- ✅ Custom design system colors applied

## Important Note
**Always import global.css** in any new SSR pages (`export const prerender = false`) to ensure styling is applied.

## Files Modified
- `/apps/web/src/pages/blog/index.astro`
- `/apps/web/src/pages/blog/[slug].astro`

## Testing
Navigate to `http://localhost:4321/blog` and verify:
1. Dark background (not white)
2. Electric lime accents visible
3. Glass panels with blur effect
4. Orbitron headings rendering
5. Subscribe button with lime green background

---

**Status:** ✅ Fixed and verified
**Date:** 2026-02-06

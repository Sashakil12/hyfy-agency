# Global Header Integration Guide

## Overview

A premium global header with mega menu has been created following the Nexus-Glass design system. This header features:

- **Glassmorphism effects** with Electric Lime (#88FF66) accents
- **Mega Menu** showcasing all 6 expertise areas with visual cards
- **Smooth animations** and hover effects
- **Mobile responsive** with hamburger menu
- **Accessibility** features (keyboard navigation, focus states, ARIA labels)

## Files Created

### 1. Components

- **`apps/web/src/components/GlobalHeader.tsx`** - Main header component
  - Fixed position header with scroll-based backdrop blur
  - Desktop and mobile navigation
  - Mega menu trigger

- **`apps/web/src/components/MegaMenu.tsx`** - Mega menu overlay
  - 3-column grid showcasing expertise items
  - Glassmorphic card design with glow effects
  - Active state indicators for current page
  - CTA footer with "Talk to an Expert" button

### 2. Layouts

- **`apps/web/src/layouts/GlobalLayout.astro`** - Reusable layout wrapper
  - Includes GlobalHeader
  - Sets up fonts (Inter Tight + Plus Jakarta Sans)
  - Handles `pt-20` padding for fixed header

### 3. Styles

- **Updated `apps/web/src/styles/global.css`**
  - Added mega menu animations (`slideDown`, `fadeInUp`)
  - All animations respect `prefers-reduced-motion`

## Integration Methods

### Method 1: Using GlobalLayout (Recommended for New Pages)

```astro
---
import GlobalLayout from '../layouts/GlobalLayout.astro'
---

<GlobalLayout title="Page Title" description="Page description">
  <!-- Your page content here -->
  <section class="py-20">
    <!-- Content automatically has pt-20 from layout -->
  </section>
</GlobalLayout>
```

### Method 2: Manual Integration (For Existing Pages)

For pages with existing HTML structure (like `erp.astro`, `blog/index.astro`):

1. **Add the component import:**
```astro
---
import GlobalHeader from '../components/GlobalHeader'
---
```

2. **Add header in body (before other content):**
```astro
<body>
  <GlobalHeader client:load currentPath={Astro.url.pathname} />

  <!-- Add top padding to first section -->
  <section class="pt-20">
    <!-- Existing content -->
  </section>
</body>
```

3. **Add fonts to `<head>` (if not already present):**
```astro
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

## Design Specifications

### Colors (From Nexus-Glass System)

- **Background:** `#050505` (Deep Obsidian)
- **Card Background:** `rgba(255, 255, 255, 0.03)` with `backdrop-blur(24px)`
- **Accent:** `#88FF66` (Electric Lime) with glow effects
- **Text Primary:** `#FFFFFF` (Pure White)
- **Text Secondary:** `#828282` (Slate Grey)

### Typography

- **Headings:** Inter Tight (Extra Bold, 700-900 weights)
- **Body/UI:** Plus Jakarta Sans (400-700 weights)

### Effects

- **Glass Cards:** `rgba(255,255,255,0.03)` fill + `backdrop-blur(24px)` + gradient borders
- **Glow Effect:** `box-shadow: 0 0 15px rgba(136, 255, 102, 0.4)` on lime accents
- **Animations:** 300ms cubic-bezier(0.22, 1, 0.36, 1) for smooth "Power-Up" feel

## Features

### Desktop Mega Menu

- Opens on hover or click
- Shows all 6 expertise areas in a 3-column grid
- Each card displays:
  - Icon with glow effect
  - Service title and description
  - Top 2 details as bullet points
  - Active indicator for current page
  - Hover animations with mouse-tracking glow
- Footer CTA: "Talk to an Expert" button

### Mobile Menu

- Hamburger icon toggles full-screen overlay
- All navigation items accessible
- Expertise section with direct links
- Mobile-optimized CTA button

### Accessibility

- ✅ Keyboard navigation (Tab, Escape to close)
- ✅ ARIA labels on buttons
- ✅ Focus states visible
- ✅ `cursor-pointer` on all clickable elements
- ✅ `prefers-reduced-motion` respected

## Expertise Pages Routing

The mega menu links to these pages:

| Expertise ID | Page Path | Display Name |
|-------------|-----------|--------------|
| erp | `/erp` | Custom ERPs |
| ai-tools | `/ai-native-apps` | AI-Native Apps |
| n8n | `/n8n` | N8n Workflows |
| ecommerce | `/ecommerce` | Custom Ecommerce |
| saas | `/saas` | SaaS / RaaS |
| cms | `/cms-prototypes` | CMS Prototypes |

## Example: Updating `erp.astro`

```astro
---
import '../styles/global.css'
import GlobalHeader from '../components/GlobalHeader'
import { ErpHeroSection } from '@/components/sections/ErpHeroSection'
// ... other imports
---

<html lang="en">
  <head>
    <!-- ... existing meta tags ... -->

    <!-- Add fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
  </head>
  <body>
    <!-- Add GlobalHeader -->
    <GlobalHeader client:load currentPath="/erp" />

    <!-- Add padding to hero -->
    <div class="pt-20">
      <ErpHeroSection client:load />
      <ErpFeaturesSection client:load />
      <ErpIndustriesSection client:load />
      <ErpCTASection client:load />
      <Footer client:load />
    </div>
  </body>
</html>
```

## Testing Checklist

Before deploying, verify:

- [ ] Header appears on all pages
- [ ] Mega menu opens/closes properly
- [ ] Active states highlight current page
- [ ] Mobile menu works correctly
- [ ] All expertise links navigate correctly
- [ ] Blog link works
- [ ] CTA buttons link to `/contact`
- [ ] Keyboard navigation works (Tab, Escape)
- [ ] Hover effects are smooth
- [ ] No content hidden behind fixed header

## Performance Notes

- Header uses `position: fixed` with `backdrop-filter` (GPU-accelerated)
- Mega menu renders on mount but hidden until triggered
- Animations use `transform` and `opacity` for 60fps performance
- All fonts preconnected for faster loading

## Next Steps

1. **Integrate into all expertise pages** (`erp.astro`, `ai-native-apps.astro`, etc.)
2. **Integrate into blog pages** (`blog/index.astro`, `blog/[slug].astro`)
3. **Test mobile responsiveness** across devices
4. **Verify accessibility** with screen readers
5. **Optional:** Add header to homepage if desired

## Questions?

The header is fully self-contained and follows the Nexus-Glass design system. All animations respect user motion preferences, and the component is production-ready.

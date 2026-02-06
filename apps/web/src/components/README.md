# Global Header & Mega Menu Components

## Components Overview

### 🎯 GlobalHeader.tsx
The main navigation header component with premium glassmorphism effects.

**Features:**
- Fixed positioning with scroll-based backdrop blur
- Responsive mobile hamburger menu
- Active state tracking for current page
- Smooth transitions and hover effects
- Electric Lime (#88FF66) accent color with glow
- Accessibility: keyboard navigation, ARIA labels, focus states

**Props:**
```typescript
interface GlobalHeaderProps {
  currentPath?: string // Current page path for active state
}
```

**Usage:**
```astro
---
import GlobalHeader from '../components/GlobalHeader'
---

<GlobalHeader client:load currentPath={Astro.url.pathname} />
```

---

### 🚀 MegaMenu.tsx
Animated mega menu overlay showcasing all expertise areas.

**Features:**
- Glassmorphic overlay with 24px backdrop blur
- 3-column responsive grid (1 col mobile → 3 cols desktop)
- Staggered fade-in animation (50ms delays per card)
- Mouse-tracking hover glow effect
- Active page indicator with pulsing dot
- Footer CTA section
- Click outside or ESC key to close

**Props:**
```typescript
interface MegaMenuProps {
  isOpen: boolean
  onClose: () => void
  currentPath?: string
}
```

**Card Features:**
- Icon with glow effect on hover
- Service title and description
- Top 2 detail points with bullet indicators
- Arrow animation that slides in on hover
- Bottom accent line with gradient animation
- Active state with green pulsing indicator

---

## Design System Compliance

### Colors (Nexus-Glass)
- **Background**: `#050505` (Deep Obsidian)
- **Glass**: `rgba(255, 255, 255, 0.03)` with `backdrop-blur(24px)`
- **Accent**: `#88FF66` (Electric Lime)
- **Text Primary**: `#FFFFFF` (Pure White)
- **Text Secondary**: `#828282` (Slate Grey)

### Typography
- **Headings**: Inter Tight (700-900 weights)
- **UI/Body**: Plus Jakarta Sans (400-700 weights)

### Effects
- **Glow**: `box-shadow: 0 0 15px rgba(136, 255, 102, 0.4)`
- **Blur**: `backdrop-filter: blur(24px)`
- **Transitions**: `300ms cubic-bezier(0.22, 1, 0.36, 1)`

### Animations
```css
/* Mega menu slide down */
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Card fade in up */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

---

## Integration Examples

### Method 1: Using GlobalLayout (Recommended)
```astro
---
import GlobalLayout from '../layouts/GlobalLayout.astro'
---

<GlobalLayout title="Page Title" description="Page description">
  <section class="py-20">
    <!-- Your content here -->
  </section>
</GlobalLayout>
```

### Method 2: Manual Integration
```astro
---
import GlobalHeader from '../components/GlobalHeader'
---

<html>
  <head>
    <link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
  </head>
  <body>
    <GlobalHeader client:load currentPath={Astro.url.pathname} />

    <div class="pt-20">
      <!-- Content with padding for fixed header -->
    </div>
  </body>
</html>
```

---

## Navigation Structure

```
GlobalHeader
├── Logo → /
├── Home → /
├── About → /about
├── Contact → /contact
├── Expertise (Mega Menu)
│   ├── Custom ERPs → /erp
│   ├── AI-Native Apps → /ai-native-apps
│   ├── N8n Workflows → /n8n
│   ├── Custom Ecommerce → /ecommerce
│   ├── SaaS / RaaS → /saas
│   └── CMS Prototypes → /cms-prototypes
├── Blog → /blog
└── [Get Started] → /contact
```

---

## Responsive Behavior

### Desktop (1024px+)
- Fixed header with full navigation
- Mega menu on hover/click
- 3-column expertise grid
- Smooth hover effects

### Tablet (768px - 1023px)
- Same as desktop
- 2-column mega menu grid

### Mobile (< 768px)
- Hamburger icon
- Full-screen overlay menu
- Vertical navigation
- Expertise section with direct links
- 1-column layout

---

## Accessibility Features

✅ **Keyboard Navigation**
- Tab through all interactive elements
- ESC key closes mega menu
- Focus states clearly visible

✅ **Screen Reader Support**
- ARIA labels on buttons
- Semantic HTML structure
- Proper heading hierarchy

✅ **Motion Preferences**
- Respects `prefers-reduced-motion`
- Animations disabled if user prefers

✅ **Touch Targets**
- Minimum 44x44px on mobile
- Generous padding on interactive elements

✅ **Color Contrast**
- 4.5:1 minimum contrast ratio
- Electric Lime passes WCAG AA

---

## Performance Optimizations

### GPU Acceleration
- Uses `transform` and `opacity` for animations
- `backdrop-filter` for glass effects
- `will-change` hints for smooth transitions

### Lazy Rendering
- Mega menu DOM present but hidden
- Rendered on first open
- No layout thrashing

### Font Loading
- Preconnect to Google Fonts
- `font-display: swap` for FOUT prevention

---

## Browser Support

| Browser | Version | Notes |
|---------|---------|-------|
| Chrome | 76+ | Full support |
| Firefox | 103+ | Full support |
| Safari | 15.4+ | Full support (backdrop-filter) |
| Edge | 79+ | Full support |
| Mobile Safari | 15.4+ | Full support |
| Chrome Mobile | 76+ | Full support |

⚠️ **Backdrop Filter**: Requires modern browsers. Older browsers will see solid background instead.

---

## Testing Checklist

- [ ] Header appears on all pages
- [ ] Mega menu opens on hover (desktop)
- [ ] Mega menu opens on click (desktop)
- [ ] Mobile menu toggles correctly
- [ ] All links navigate properly
- [ ] Active states highlight current page
- [ ] Keyboard navigation works (Tab, ESC)
- [ ] Focus states visible
- [ ] Hover effects smooth
- [ ] No content hidden behind fixed header
- [ ] Works on mobile devices
- [ ] Works with screen readers

---

## Customization Guide

### Change Logo
Edit `GlobalHeader.tsx` lines 47-62:
```tsx
<a href="/" className="flex items-center space-x-2">
  {/* Replace with your logo */}
</a>
```

### Change Navigation Items
Edit `GlobalHeader.tsx` lines 27-31:
```tsx
const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]
```

### Change Colors
All colors use Tailwind classes. Search and replace:
- `#88FF66` → Your accent color
- `#050505` → Your background color
- `#828282` → Your secondary text color

### Modify Expertise Data
Edit `apps/web/src/data/expertise.ts`:
```typescript
export const expertiseItems: ExpertiseItem[] = [
  {
    id: 'unique-id',
    title: 'Full Title',
    shortTitle: 'Short Title',
    description: 'Description...',
    details: ['Detail 1', 'Detail 2', 'Detail 3'],
    icon: IconComponent,
  },
]
```

---

## Troubleshooting

### Issue: Header not appearing
**Solution**: Ensure `client:load` directive is used
```astro
<GlobalHeader client:load currentPath={Astro.url.pathname} />
```

### Issue: Content hidden behind header
**Solution**: Add `pt-20` to first section or wrap in GlobalLayout

### Issue: Mega menu not closing
**Solution**: Click outside, press ESC, or check console for JS errors

### Issue: Fonts not loading
**Solution**: Verify font import in `<head>` and check network tab

### Issue: Hover not working on mobile
**Solution**: Expected behavior - mobile uses click/tap instead

---

## Demo Page

Visit `/header-demo` to see the header in action with:
- Live mega menu demo
- Feature showcase
- Integration examples
- Responsive preview

---

## Documentation

- **`INTEGRATION_GUIDE.md`** - Step-by-step integration instructions
- **`HEADER_SUMMARY.md`** - Complete feature overview
- **This file** - Technical component documentation

---

## Support

For questions or issues:
1. Check `INTEGRATION_GUIDE.md` for detailed instructions
2. Review `/header-demo` for live examples
3. Inspect browser console for error messages
4. Verify all dependencies are installed (`lucide-react`, `@astrojs/react`)

---

## Version History

**v1.0.0** - Initial release
- GlobalHeader component
- MegaMenu component
- GlobalLayout wrapper
- Full documentation
- Demo page
- Nexus-Glass design system compliance

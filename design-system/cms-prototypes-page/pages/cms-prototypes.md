# CMS Prototypes Page Overrides

> **PROJECT:** CMS Prototypes Page
> **Generated:** 2026-02-04
> **Page Type:** Service Landing Page

> ⚠️ **IMPORTANT:** Rules in this file **override** the Master file (`design-system/MASTER.md`).
> Only deviations from the Master are documented here. For all other rules, refer to the Master.

---

## Color Overrides

**Use existing Nexus-Glass palette:**

| Role             | Hex                      | CSS Variable   | Usage                                |
| ---------------- | ------------------------ | -------------- | ------------------------------------ |
| Primary          | `#88FF66`                | Electric Lime  | Active states, CTA buttons           |
| Secondary        | `#F2994A`                | Internal Amber | Processing states, secondary accents |
| Background       | `#050505`                | Deep Obsidian  | Page background                      |
| Card Background  | `rgba(255,255,255,0.03)` | Glass          | Cards and panels                     |
| Text (Primary)   | `#FFFFFF`                | Pure White     | Headings and high-emphasis labels    |
| Text (Secondary) | `#828282`                | Slate Grey     | Metadata, body text, disabled states |

---

## Typography Overrides

**Use existing Orbitron + Rajdhani fonts:**

```css
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&display=swap');
```

- **Heading Font:** Orbitron (Display)
- **Body Font:** Rajdhani
- **Mood:** futuristic, technology, precision, content-driven

---

## Key Effects (CMS-Specific Style Integration)

### Content Grid Animation

For content type visualization:

```css
@keyframes grid-expand {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
.content-grid-item {
  animation: grid-expand 0.5s ease-out forwards;
}
```

### API Stream Animation

For API-first visualization:

```css
@keyframes api-flow {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
}
.api-stream {
  animation: api-flow 2s infinite ease-in-out;
}
```

### Content Pulse

For active content states:

```css
@keyframes content-pulse {
  0%,
  100% {
    border-color: rgba(136, 255, 102, 0.3);
  }
  50% {
    border-color: rgba(136, 255, 102, 0.6);
  }
}
.content-pulse {
  animation: content-pulse 2s infinite ease-in-out;
}
```

---

## Layout Overrides

- **Max Width:** 1200px (standard)
- **Layout:** Full-width sections, centered content
- **Section Pattern:** Hero > Features > CMS Stack > CTA

---

## Component Specifics

### CMS Platform Cards

- Show Strapi, Directus, Payload logos/badges
- Glass cards with light-sweep on hover
- Cursor pointer on all interactive elements
- Smooth transitions (150-300ms)

### Content Type Cards

- Visual representation of content schemas
- Grid layout showing relationships
- Animated connections between content types

### API Visualization

- Show API-first architecture
- Animated data flow lines
- Terminal-style responses

---

## Recommendations

- **Effects:** Backdrop blur (16-24px), subtle border (1px solid rgba white 0.2), light reflection, Z-depth
- **CMS Elements:** Content grids, API streams, admin panel previews, schema visualizations
- **Motion:** Power-up snap easing (cubic-bezier(0.22, 1, 0.36, 1))
- **Anti-Patterns:** Static diagrams, complex navigation, unclear CTA

# Homepage Design Specification
**Project:** Hyfy Agency Website
**Date:** 2026-01-17
**Design System:** Nexus-Glass DLS (Neo-Futuristic / Bio-Digital / Glassmorphism)

---

## Overview

The Hyfy Agency homepage tells a story-driven narrative that positions the company as a premium, AI-native full-stack development agency. The design emphasizes speed (65% faster to MVP), technical sophistication, and versatility across domains.

**Core Positioning:**
- Full-stack development agency with AI-assisted workflows
- Specializes in hyper-rapid prototyping (Ideation → MVP in 65% less time)
- Demonstrates technical excellence through premium UI/UX
- Versatile capabilities with 6 highlighted expertise areas

**Tech Stack:**
- Astro 4 (SSG)
- React 18 (for interactive components)
- shadcn/ui component library
- Three.js (3D graphics)
- Tailwind CSS
- Motion libraries (Framer Motion or similar)

---

## Design System Reference

### Color Palette
- **Deep Obsidian** (#050505) - Page background
- **Charcoal Tint** (#0F1210) - Section backgrounds
- **Electric Lime** (#88FF66) - Primary accent, CTAs, active states
- **Internal Amber** (#F2994A) - Secondary accent, processing states
- **Pure White** (#FFFFFF) - Headings, high-emphasis text
- **Slate Grey** (#828282) - Body text, metadata, disabled states

### Glass Effect Specs
- **Fill:** `rgba(255, 255, 255, 0.03)`
- **Backdrop Blur:** 16px - 24px
- **Border:** 1px solid gradient (Top-Left: `#FFFFFF33` → Bottom-Right: `#FFFFFF05`)
- **Glow (Electric Lime elements):** `0px 0px 15px rgba(136, 255, 102, 0.4)`

### Typography
- **Display/Headers:** Monument Extended or Inter Tight (Extra Bold)
  - Uppercase, letter-spacing: +2% to +5%
  - Watermark layer: 5-8% opacity
- **UI/Data Labels:** Plus Jakarta Sans or Satoshi
  - Medium weight for numbers, Regular for descriptors

### Animation Principles
- **Parallax Stack:** Back (20%), Mid (50%), Front (100%)
- **Entrance:** Staggered fade + slide with `cubic-bezier(0.22, 1, 0.36, 1)` easing
- **Hover:** 45° light sweep gradient
- **Idle:** Breathing pulse (3s cycle, opacity 70% ↔ 100%)
- **Mobile:** Reduced motion, simplified parallax, static 3D poses

---

## Section-by-Section Breakdown

### Section 1: Hero Section
**Height:** Full viewport (100vh)
**Goal:** Immediate impact, establish premium positioning

#### 3-Layer Parallax Stack

**Back Layer (20% scroll speed):**
- Oversized "HYPER PROTOTYPING" text
- Font: Monument Extended, uppercase
- Opacity: 5-8% (#FFFFFF0D)
- Watermark effect behind all content

**Mid Layer (50% scroll speed):**
- Three.js 3D model (translucent bio-digital neural network or abstract brain)
- Model specs:
  - Glass/frosted material with refraction
  - Electric Lime (#88FF66) rim lighting on edges
  - Idle rotation: 0.1deg/sec on Y-axis
  - Mouse parallax: follows cursor with dampening
- Responsive scaling:
  - Desktop: 100%
  - Tablet: 60%
  - Mobile: 40% with static position
- Free model source: Sketchfab, Poly Haven, or similar

**Front Layer (100% scroll speed):**
- Glassmorphic content container (centered)
- Company logo/name
- **H1:** "From Idea to MVP in 65% Less Time"
  - Font: Monument Extended, #FFFFFF
- **Subheading:** "Full-stack development. AI-native workflows. Hyper-speed execution."
  - Font: Plus Jakarta Sans, #828282
- **Primary CTA:** "Start Your Project" button
  - Glassmorphic with Electric Lime glow
  - Hover: intensified glow + light sweep
- **Scroll indicator:** Animated down arrow with breathing pulse

---

### Section 2: The Journey Visualization
**Goal:** Visualize the transformation from idea to MVP with data-driven aesthetics

#### Layout
Two-column split (desktop), stacks vertically on mobile

**Left Column: Animated Timeline**
- Vertical line with 3 glassmorphic nodes:
  1. Ideation
  2. Development
  3. Launch
- Electric Lime glow on each node
- Animated progress bar fills on scroll
- Floating particles/data points move along timeline

**Right Column: Speed Comparison**
- **Eyebrow:** "THE HYFY DIFFERENCE" (uppercase, Slate Grey)
- **H2:** "Traditional Development vs. AI-Native Speed" (Monument Extended)
- **Comparison Stats** (glassmorphic cards):
  - "Traditional: 6-12 months" → "Hyfy: 6-8 weeks" (Electric Lime)
  - "Waterfall process" → "Iterative AI-assisted sprints"
  - "Fixed scope, rigid timelines" → "Adaptive, rapid prototyping"

#### Scroll Animations
- Section fades in with staggered slide (left → right)
- Timeline progress animates 0% → 100% on viewport entry
- Stats counter-up animation

---

### Section 3: Expertise Carousel
**Goal:** Showcase 6 core capabilities with cinematic focus while establishing versatility

#### Header
- **Eyebrow:** "CORE EXPERTISE" (uppercase, Slate Grey)
- **H2:** "Full-Stack Mastery Across Every Domain" (Monument Extended)
- **Subheading:** "From ERPs to AI-native tools—we build it all. Here's where we shine brightest." (#828282)

#### Carousel Structure
- **Center spotlight:** Large glassmorphic card (800px × 500px desktop)
- **Side cards:** 2 visible each side, progressively blurred/scaled (80%, 60%)
- **Depth effect:** Non-focused cards at 30% opacity with blur
- **Navigation:** Arrow buttons + dot indicators (swipe/drag on touch)
- **Auto-rotation:** Every 4 seconds (pauses on hover/interaction)
- **Transitions:** Smooth with `cubic-bezier(0.22, 1, 0.36, 1)` easing
- **Accessibility:** Keyboard navigation (arrow keys)

#### Card Design
- Glass container (rgba(255,255,255,0.03), 16-24px backdrop blur)
- Icon/graphic at top
- Title: Monument Extended
- Description: 2-3 sentences, Plus Jakarta Sans
- "Learn More →" link (Electric Lime accent)
- **Hover:** 45° light sweep passes across
- **Active (centered):** Electric Lime glow border

#### The 6 Expertise Areas
1. **Intuitive ERPs for Blue-Collar Teams**
   - Custom, highly customizable systems
   - UI/UX designed for easy adoption by non-technical workers

2. **AI-Native Apps & Internal Tools**
   - Built to boost existing workflows
   - Intelligence baked into the core architecture

3. **N8n Workflow Automation**
   - Complex process orchestration
   - Integration expertise

4. **Custom Ecommerce Experiences**
   - Tailored storefront solutions
   - Beyond template limitations

5. **Idea to SaaS / RaaS**
   - AI-powered "Result as a Service" applications
   - Concept to launch velocity

6. **CMS Rapid Prototypes**
   - Strapi, Directus, Payload expertise
   - Content-driven development at speed

---

### Section 4: Real Results / Social Proof
**Goal:** Validate speed claims with concrete evidence

#### Primary Stats Bar (Full Width)
Three large metrics in glassmorphic containers:
- **"65% Faster to MVP"** (Electric Lime, counter animation)
- **"50+ Projects Delivered"**
- **"100% Client Satisfaction"**
- Each has breathing pulse glow effect

#### Case Study Bento Grid (2-Column)

**Left Tile (Larger - Featured Case Study):**
- Client logo or industry icon
- Before/After: "8 months → 10 weeks"
- Quote snippet: "Hyfy turned our concept into reality faster than we thought possible."
- Project type badge: "AI-Native SaaS"

**Right Column (2 Stacked Smaller Cards):**
- Mini case studies with same structure but condensed
- Show range: "ERP for Manufacturing", "E-commerce Platform"

#### Visual Treatment
- All tiles: glass effect with gradient borders
- Hover: slight expansion + increased glow
- Staggered entrance on scroll
- Counter-up animation for stats
- Background: Faded grid pattern at 3% opacity

---

### Section 5: Process Overview
**Goal:** Demystify the AI-assisted workflow, show how speed happens

#### Header
- **Eyebrow:** "OUR METHODOLOGY" (uppercase, Slate Grey)
- **H2:** "AI-Augmented Development at Light Speed" (Monument Extended)
- **Subheading:** "Human creativity meets machine precision. Here's how we compress timelines without compromising quality."

#### 4 Process Phases (Horizontal Timeline)

**1. Discovery & Ideation**
- Icon: Brain/lightbulb
- Description: "We map your vision using AI-assisted requirement gathering"
- Tools: Collaborative workshops, AI spec generation

**2. Rapid Prototyping**
- Icon: Rocket/prototype
- Description: "CMS-driven prototypes in days, not months"
- Tools: Strapi, Directus, Payload + AI code generation

**3. Iterative Development**
- Icon: Cycle/iteration
- Description: "Weekly sprints with AI pair programming for velocity"
- Tools: Modern frameworks, N8n automation, AI assistants

**4. Launch & Scale**
- Icon: Graph/growth
- Description: "Production-ready MVP with built-in scalability"
- Tools: Cloud deployment, monitoring, ongoing optimization

#### Visual Design
- Each card: glassmorphic vertical container
- Connected by animated Electric Lime progress line
- Sequential reveal on scroll (fade + slide)
- Line draws/animates as user scrolls
- Each card: icon (top), title, description, expandable "Details" section

---

### Section 6: Final CTA
**Goal:** Convert visitors to consultations with low-friction CTA

#### Visual Background
- Subtle animated grid or particle system
- Deep Obsidian (#050505) with slight gradient overlay

#### Content (Centered)
- **H2:** "Ready to Build Your MVP?" (Monument Extended, large)
- **Subheading:** "Let's turn your idea into reality—fast. Book a free consultation to map your project."
- **Primary CTA Button:** "Schedule Your Strategy Call"
  - Large glassmorphic with Electric Lime glow
  - Hover: intensified glow + light sweep
- **Secondary:** "Or email us at hello@hyfy.agency" (Slate Grey, smaller)

#### Trust Signals
Small glassmorphic pill badges:
- "Free Consultation"
- "No Commitment Required"
- "30-Min Strategy Session"

#### Footer Navigation
- Logo
- Quick links: Services (→ 6 expertise pages), About, Contact, Blog
- Social media icons
- Copyright notice
- Styling: Slate Grey, Electric Lime on hover

#### Scroll Animation
- CTA fades in with scale (95% → 100%)
- Button glow pulsing (subtle urgency)

---

## Technical Implementation Notes

### Responsiveness
- **Desktop (1440px+):** Full parallax, 3D interactions, all animations
- **Tablet (768px - 1439px):** Reduced parallax, 3D scaled to 60%, simplified hover states
- **Mobile (<768px):** Static 3D pose, minimal parallax, reduced motion, touch-optimized carousel

### Performance Considerations
- Lazy load 3D model with loading state
- Use `IntersectionObserver` for scroll-triggered animations
- Implement `will-change` for animated elements
- Consider `prefers-reduced-motion` media query for accessibility
- Optimize glassmorphic blur with hardware acceleration

### shadcn/ui Components to Use
- Button (CTA buttons)
- Card (expertise cards, case studies)
- Carousel (expertise section)
- Badge (trust signals, project type badges)

### Animation Libraries
- Framer Motion for React component animations
- GSAP or similar for complex scroll-triggered sequences
- Three.js for 3D rendering

### Free 3D Model Sources
- Sketchfab (CC-licensed models)
- Poly Haven
- TurboSquid (free section)
- Search terms: "abstract brain", "neural network", "bio digital", "translucent data visualization"

---

## Next Steps for Implementation

1. **Setup Phase:**
   - Initialize shadcn/ui in Astro project
   - Configure Tailwind with custom DLS colors
   - Set up Three.js integration for Astro

2. **Component Development:**
   - Create base glassmorphic card component
   - Build reusable button with glow effect
   - Develop parallax container component

3. **Section Implementation (recommended order):**
   - Start with Hero (establishes visual language)
   - Add static sections first (content/layout)
   - Layer in animations progressively
   - Integrate 3D model last (can use placeholder initially)

4. **Testing:**
   - Cross-browser testing (Chrome, Firefox, Safari)
   - Responsive testing across devices
   - Performance profiling (Lighthouse)
   - Accessibility audit (keyboard nav, screen readers)

---

## Open Questions / Future Considerations

- **3D Model:** Need to source or commission the bio-digital model. Budget/timeline?
- **Case Studies:** Need real client data for social proof section. Available?
- **Content:** Need final copy for all sections (currently using placeholder headlines)
- **Analytics:** What events should we track? (CTA clicks, carousel interactions, scroll depth)
- **Blog:** Is blog section required for launch, or phase 2?

---

**Design Status:** ✅ Validated
**Ready for:** Implementation planning

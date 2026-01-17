# Hyfy Agency Homepage Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a premium, story-driven homepage with Three.js 3D hero, glassmorphic design system, and cinematic animations following the Nexus-Glass DLS.

**Architecture:** Astro SSG with React islands for interactive components. shadcn/ui for base components customized with glassmorphic styling. Three.js React component for hero 3D model. Framer Motion for scroll animations. Tailwind for styling with custom DLS theme.

**Tech Stack:** Astro 4, React 18, shadcn/ui, Three.js, @react-three/fiber, @react-three/drei, Framer Motion, Tailwind CSS 3

---

## Phase 1: Foundation Setup

### Task 1: Configure Tailwind CSS with DLS Theme

**Files:**
- Create: `apps/web/tailwind.config.mjs`
- Create: `apps/web/src/styles/global.css`
- Modify: `apps/web/src/pages/index.astro`

**Step 1: Install Tailwind CSS and dependencies**

Run: `cd apps/web && pnpm add -D tailwindcss @tailwindcss/typography autoprefixer postcss`

Expected: Dependencies installed successfully

**Step 2: Create Tailwind config with DLS colors**

Create file: `apps/web/tailwind.config.mjs`

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#050505',
        charcoal: '#0F1210',
        lime: '#88FF66',
        amber: '#F2994A',
        slate: '#828282',
      },
      fontFamily: {
        display: ['Inter', 'sans-serif'], // Will upgrade to Monument Extended later
        body: ['Inter', 'sans-serif'], // Will upgrade to Plus Jakarta Sans later
      },
      backdropBlur: {
        glass: '16px',
        'glass-lg': '24px',
      },
      boxShadow: {
        'glow-lime': '0px 0px 15px rgba(136, 255, 102, 0.4)',
        'glow-lime-intense': '0px 0px 25px rgba(136, 255, 102, 0.6)',
      },
      animation: {
        'breathing-pulse': 'breathing 3s ease-in-out infinite',
      },
      keyframes: {
        breathing: {
          '0%, 100%': { opacity: '0.7' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
```

**Step 3: Create global CSS with base styles**

Create file: `apps/web/src/styles/global.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-obsidian text-white font-body antialiased;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-display;
  }
}

@layer components {
  .glass-panel {
    @apply bg-white/[0.03] backdrop-blur-glass border border-white/[0.2];
    background-image: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0.02) 100%
    );
  }

  .glass-panel-hover {
    @apply glass-panel transition-all duration-300 hover:border-white/[0.3] hover:bg-white/[0.05];
  }

  .text-watermark {
    @apply text-white/[0.06] select-none pointer-events-none;
  }

  .btn-glow {
    @apply shadow-glow-lime hover:shadow-glow-lime-intense transition-shadow duration-300;
  }
}

@layer utilities {
  .light-sweep {
    position: relative;
    overflow: hidden;
  }

  .light-sweep::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transform: skewX(-45deg);
    transition: left 0.6s ease;
  }

  .light-sweep:hover::before {
    left: 100%;
  }
}
```

**Step 4: Create PostCSS config**

Create file: `apps/web/postcss.config.cjs`

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

**Step 5: Update package.json with dependencies**

Run: `cd apps/web && pnpm add -D @tailwindcss/typography`

Expected: Package installed

**Step 6: Import global CSS in Astro page**

Modify: `apps/web/src/pages/index.astro`

```astro
---
import '../styles/global.css'
---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width" />
    <meta name="generator" content={Astro.generator} />
    <title>Hyfy Agency - From Idea to MVP in 65% Less Time</title>
  </head>
  <body>
    <h1>Hyfy Agency</h1>
  </body>
</html>
```

**Step 7: Test Tailwind setup**

Run: `cd apps/web && pnpm dev`

Expected: Dev server starts, inspect element shows Tailwind classes applied

**Step 8: Commit**

```bash
git add apps/web/tailwind.config.mjs apps/web/src/styles/global.css apps/web/postcss.config.cjs apps/web/package.json apps/web/src/pages/index.astro
git commit -m "feat: configure Tailwind CSS with Nexus-Glass DLS theme

- Add custom color palette (obsidian, charcoal, lime, amber, slate)
- Configure glass panel utilities with backdrop blur
- Add breathing pulse animation and glow shadows
- Create light sweep hover effect utility

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

### Task 2: Initialize shadcn/ui for Astro

**Files:**
- Create: `apps/web/components.json`
- Create: `apps/web/tsconfig.json` (update)
- Create: `apps/web/src/components/ui/` (directory)

**Step 1: Install shadcn CLI and dependencies**

Run: `cd apps/web && pnpm add class-variance-authority clsx tailwind-merge lucide-react`

Expected: Packages installed

**Step 2: Initialize shadcn/ui**

Run: `cd apps/web && npx shadcn@latest init`

When prompted:
- TypeScript: Yes
- Style: Default
- Base color: Slate
- CSS variables: Yes
- CSS file: `src/styles/global.css`
- Tailwind config: `tailwind.config.mjs`
- Components: `src/components/ui`
- Utility imports: Yes (`@/lib/utils`)
- React Server Components: No
- Component prefix: Leave empty

Expected: shadcn initialized, `components.json` created

**Step 3: Update tsconfig.json for path aliases**

Modify: `apps/web/tsconfig.json`

```json
{
  "extends": "@repo/typescript-config/react-library.json",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    },
    "jsx": "react-jsx",
    "jsxImportSource": "react"
  },
  "include": ["src"]
}
```

**Step 4: Create lib/utils.ts for cn helper**

Create file: `apps/web/src/lib/utils.ts`

```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

**Step 5: Add Button component**

Run: `cd apps/web && npx shadcn@latest add button`

Expected: Button component added to `src/components/ui/button.tsx`

**Step 6: Add Card component**

Run: `cd apps/web && npx shadcn@latest add card`

Expected: Card component added to `src/components/ui/card.tsx`

**Step 7: Add Badge component**

Run: `cd apps/web && npx shadcn@latest add badge`

Expected: Badge component added

**Step 8: Add Carousel component**

Run: `cd apps/web && npx shadcn@latest add carousel`

Expected: Carousel component and dependencies added

**Step 9: Test component import**

Modify: `apps/web/src/pages/index.astro`

```astro
---
import '../styles/global.css'
import { Button } from '@/components/ui/button'
---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width" />
    <title>Hyfy Agency - From Idea to MVP in 65% Less Time</title>
  </head>
  <body>
    <div class="p-8">
      <Button client:load>Test Button</Button>
    </div>
  </body>
</html>
```

Run: `pnpm dev` and verify button renders

**Step 10: Commit**

```bash
git add .
git commit -m "feat: initialize shadcn/ui for Astro

- Add shadcn CLI configuration
- Configure path aliases (@/*)
- Add Button, Card, Badge, Carousel components
- Create utils helper with cn function

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

### Task 3: Install Three.js Dependencies

**Files:**
- Modify: `apps/web/package.json`

**Step 1: Install Three.js and React Three Fiber**

Run: `cd apps/web && pnpm add three @react-three/fiber @react-three/drei`

Expected: Packages installed

**Step 2: Install Framer Motion for animations**

Run: `cd apps/web && pnpm add framer-motion`

Expected: Package installed

**Step 3: Install type definitions**

Run: `cd apps/web && pnpm add -D @types/three`

Expected: Types installed

**Step 4: Commit**

```bash
git add apps/web/package.json
git commit -m "feat: add Three.js and animation dependencies

- Add @react-three/fiber and @react-three/drei for 3D
- Add framer-motion for scroll animations
- Add three and type definitions

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Phase 2: Base Components

### Task 4: Create GlassCard Component

**Files:**
- Create: `apps/web/src/components/GlassCard.tsx`

**Step 1: Create GlassCard component**

Create file: `apps/web/src/components/GlassCard.tsx`

```tsx
import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
}

export function GlassCard({ children, className, hover = false, glow = false }: GlassCardProps) {
  return (
    <div
      className={cn(
        'glass-panel rounded-lg p-6',
        hover && 'glass-panel-hover light-sweep',
        glow && 'ring-1 ring-lime/20 shadow-glow-lime',
        className
      )}
    >
      {children}
    </div>
  )
}
```

**Step 2: Test GlassCard in index page**

Modify: `apps/web/src/pages/index.astro`

```astro
---
import '../styles/global.css'
import { GlassCard } from '@/components/GlassCard'
---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width" />
    <title>Hyfy Agency</title>
  </head>
  <body>
    <div class="min-h-screen p-8">
      <GlassCard client:load hover glow>
        <h2 class="text-2xl font-bold mb-2">Glass Card Test</h2>
        <p class="text-slate">Hover to see light sweep effect</p>
      </GlassCard>
    </div>
  </body>
</html>
```

Run: `pnpm dev` and verify glass effect works with hover

**Step 3: Commit**

```bash
git add apps/web/src/components/GlassCard.tsx apps/web/src/pages/index.astro
git commit -m "feat: create GlassCard base component

- Implement glassmorphic styling with backdrop blur
- Add optional hover effect with light sweep
- Add optional glow effect with lime ring
- Use Tailwind utilities from DLS theme

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

### Task 5: Create GlowButton Component

**Files:**
- Create: `apps/web/src/components/GlowButton.tsx`

**Step 1: Create GlowButton component**

Create file: `apps/web/src/components/GlowButton.tsx`

```tsx
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { ButtonHTMLAttributes } from 'react'

interface GlowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

export function GlowButton({
  children,
  className,
  variant = 'primary',
  ...props
}: GlowButtonProps) {
  return (
    <Button
      className={cn(
        'relative font-medium tracking-wide transition-all duration-300 light-sweep',
        variant === 'primary' && [
          'bg-lime text-obsidian hover:bg-lime/90',
          'btn-glow',
        ],
        variant === 'secondary' && [
          'glass-panel hover:border-lime/40',
          'text-lime hover:shadow-glow-lime',
        ],
        className
      )}
      {...props}
    >
      {children}
    </Button>
  )
}
```

**Step 2: Test GlowButton**

Modify: `apps/web/src/pages/index.astro`

```astro
---
import '../styles/global.css'
import { GlassCard } from '@/components/GlassCard'
import { GlowButton } from '@/components/GlowButton'
---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width" />
    <title>Hyfy Agency</title>
  </head>
  <body>
    <div class="min-h-screen p-8 space-y-4">
      <GlassCard client:load hover glow>
        <h2 class="text-2xl font-bold mb-4">Component Test</h2>
        <div class="space-x-4">
          <GlowButton client:load variant="primary">
            Primary Button
          </GlowButton>
          <GlowButton client:load variant="secondary">
            Secondary Button
          </GlowButton>
        </div>
      </GlassCard>
    </div>
  </body>
</html>
```

Run: `pnpm dev` and verify both button variants with glow

**Step 3: Commit**

```bash
git add apps/web/src/components/GlowButton.tsx apps/web/src/pages/index.astro
git commit -m "feat: create GlowButton component with variants

- Add primary variant with lime background and glow
- Add secondary variant with glass effect
- Include light sweep hover effect
- Extend shadcn Button component

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Phase 3: Hero Section

### Task 6: Create Three.js Scene Component

**Files:**
- Create: `apps/web/src/components/ThreeScene.tsx`
- Create: `apps/web/public/models/.gitkeep` (placeholder for 3D model)

**Step 1: Create placeholder for 3D model**

Run: `mkdir -p apps/web/public/models && touch apps/web/public/models/.gitkeep`

**Step 2: Create ThreeScene component with placeholder geometry**

Create file: `apps/web/src/components/ThreeScene.tsx`

```tsx
'use client'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, MeshTransmissionMaterial } from '@react-three/drei'
import { useRef, useState } from 'react'
import type { Mesh } from 'three'

function RotatingBrain() {
  const meshRef = useRef<Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (!meshRef.current) return

    // Idle rotation
    meshRef.current.rotation.y += 0.001

    // Mouse parallax effect
    const { mouse } = state
    meshRef.current.rotation.x = mouse.y * 0.1
    meshRef.current.rotation.z = mouse.x * 0.1
  })

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.1 : 1}
    >
      {/* Placeholder: IcosahedronGeometry - replace with GLTF model later */}
      <icosahedronGeometry args={[2, 4]} />

      {/* Glass material with refraction */}
      <MeshTransmissionMaterial
        transmission={0.9}
        thickness={0.5}
        roughness={0.2}
        chromaticAberration={0.5}
        anisotropy={1}
        distortion={0.3}
        distortionScale={0.2}
        temporalDistortion={0.1}
        emissive="#88FF66"
        emissiveIntensity={0.3}
      />
    </mesh>
  )
}

interface ThreeSceneProps {
  className?: string
}

export function ThreeScene({ className }: ThreeSceneProps) {
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#88FF66" intensity={0.5} />

        <RotatingBrain />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
        />
      </Canvas>
    </div>
  )
}
```

**Step 3: Test ThreeScene component**

Modify: `apps/web/src/pages/index.astro`

```astro
---
import '../styles/global.css'
import { ThreeScene } from '@/components/ThreeScene'
---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width" />
    <title>Hyfy Agency</title>
  </head>
  <body>
    <div class="min-h-screen flex items-center justify-center">
      <ThreeScene client:load className="w-full h-screen" />
    </div>
  </body>
</html>
```

Run: `pnpm dev` and verify 3D scene renders with glass material

**Step 4: Commit**

```bash
git add apps/web/src/components/ThreeScene.tsx apps/web/public/models/.gitkeep apps/web/src/pages/index.astro
git commit -m "feat: create Three.js scene with glass material

- Add rotating icosahedron as placeholder geometry
- Implement glass transmission material with refraction
- Add Electric Lime rim lighting effect
- Implement mouse parallax interaction
- TODO: Replace with GLTF brain model

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

### Task 7: Create Hero Section Component

**Files:**
- Create: `apps/web/src/components/sections/HeroSection.tsx`

**Step 1: Create sections directory**

Run: `mkdir -p apps/web/src/components/sections`

**Step 2: Create HeroSection component**

Create file: `apps/web/src/components/sections/HeroSection.tsx`

```tsx
'use client'
import { ThreeScene } from '@/components/ThreeScene'
import { GlowButton } from '@/components/GlowButton'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-obsidian">
      {/* Back Layer: Watermark Text - 20% scroll speed via Framer Motion */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-watermark text-[12rem] md:text-[16rem] lg:text-[20rem] font-display font-extrabold uppercase tracking-[0.05em] leading-none whitespace-nowrap">
          Hyper Prototyping
        </h1>
      </motion.div>

      {/* Mid Layer: 3D Model - 50% scroll speed (implement with scroll hook later) */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <ThreeScene className="w-full h-full" />
      </motion.div>

      {/* Front Layer: Content - 100% scroll speed */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <div className="max-w-4xl space-y-6">
          {/* Logo/Name */}
          <div className="mb-8">
            <span className="text-lime text-sm font-medium tracking-[0.2em] uppercase">
              Hyfy Agency
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold uppercase tracking-[0.02em] leading-tight">
            From Idea to MVP
            <br />
            in <span className="text-lime">65% Less Time</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-slate max-w-2xl mx-auto">
            Full-stack development. AI-native workflows. Hyper-speed execution.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <GlowButton variant="primary" className="px-8 py-6 text-lg">
              Start Your Project
            </GlowButton>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-slate text-sm">Scroll to explore</span>
            <ChevronDown className="w-6 h-6 text-lime animate-breathing-pulse" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
```

**Step 3: Update index page to use HeroSection**

Modify: `apps/web/src/pages/index.astro`

```astro
---
import '../styles/global.css'
import { HeroSection } from '@/components/sections/HeroSection'
---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width" />
    <meta name="generator" content={Astro.generator} />
    <title>Hyfy Agency - From Idea to MVP in 65% Less Time</title>
    <meta name="description" content="Full-stack development agency with AI-assisted workflows. 65% faster to MVP." />
  </head>
  <body>
    <HeroSection client:load />
  </body>
</html>
```

Run: `pnpm dev` and verify hero section renders with all layers

**Step 4: Commit**

```bash
git add apps/web/src/components/sections/HeroSection.tsx apps/web/src/pages/index.astro
git commit -m "feat: create hero section with 3-layer parallax

- Add watermark background text layer
- Integrate 3D scene in mid layer
- Add content overlay with headline and CTA
- Implement entrance animations with Framer Motion
- Add animated scroll indicator
- TODO: Implement scroll-based parallax

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Phase 4: Journey Section

### Task 8: Create Journey Visualization Section

**Files:**
- Create: `apps/web/src/components/sections/JourneySection.tsx`

**Step 1: Create JourneySection component**

Create file: `apps/web/src/components/sections/JourneySection.tsx`

```tsx
'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GlassCard } from '@/components/GlassCard'
import { Lightbulb, Code2, Rocket } from 'lucide-react'

const timelineNodes = [
  {
    icon: Lightbulb,
    label: 'Ideation',
    description: 'Concept & planning',
  },
  {
    icon: Code2,
    label: 'Development',
    description: 'AI-assisted build',
  },
  {
    icon: Rocket,
    label: 'Launch',
    description: 'Production ready',
  },
]

const comparisons = [
  {
    traditional: '6-12 months',
    hyfy: '6-8 weeks',
    label: 'Time to MVP',
  },
  {
    traditional: 'Waterfall process',
    hyfy: 'Iterative AI-assisted sprints',
    label: 'Development approach',
  },
  {
    traditional: 'Fixed scope, rigid timelines',
    hyfy: 'Adaptive, rapid prototyping',
    label: 'Flexibility',
  },
]

export function JourneySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="min-h-screen bg-obsidian py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Column: Animated Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-lime/20">
              {/* Animated progress bar */}
              <motion.div
                className="w-full bg-lime shadow-glow-lime"
                initial={{ height: '0%' }}
                animate={isInView ? { height: '100%' } : {}}
                transition={{ duration: 1.5, delay: 0.3 }}
              />
            </div>

            {/* Timeline nodes */}
            <div className="space-y-16 relative">
              {timelineNodes.map((node, index) => (
                <motion.div
                  key={node.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                  className="flex items-center gap-6"
                >
                  {/* Node circle */}
                  <div className="relative z-10 w-16 h-16 rounded-full glass-panel flex items-center justify-center ring-2 ring-lime/40 shadow-glow-lime">
                    <node.icon className="w-8 h-8 text-lime" />
                  </div>

                  {/* Node content */}
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-1">
                      {node.label}
                    </h3>
                    <p className="text-slate">{node.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Floating particles - simplified for now */}
            <motion.div
              className="absolute top-1/4 left-1/2 w-2 h-2 rounded-full bg-lime/60 blur-sm"
              animate={{
                y: [0, -100, -200],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 1
              }}
            />
          </motion.div>

          {/* Right Column: Speed Comparison */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Eyebrow */}
            <div className="text-slate text-sm font-medium tracking-[0.2em] uppercase">
              The Hyfy Difference
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-display font-extrabold uppercase tracking-[0.02em] leading-tight">
              Traditional Development
              <br />
              vs. AI-Native Speed
            </h2>

            {/* Comparison cards */}
            <div className="space-y-4">
              {comparisons.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <GlassCard hover>
                    <div className="space-y-3">
                      <div className="text-xs text-slate uppercase tracking-wider">
                        {item.label}
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex-1">
                          <div className="text-slate/60 line-through">
                            {item.traditional}
                          </div>
                        </div>
                        <div className="text-slate/40">→</div>
                        <div className="flex-1">
                          <div className="text-lime font-semibold">
                            {item.hyfy}
                          </div>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
```

**Step 2: Add JourneySection to homepage**

Modify: `apps/web/src/pages/index.astro`

```astro
---
import '../styles/global.css'
import { HeroSection } from '@/components/sections/HeroSection'
import { JourneySection } from '@/components/sections/JourneySection'
---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width" />
    <meta name="generator" content={Astro.generator} />
    <title>Hyfy Agency - From Idea to MVP in 65% Less Time</title>
    <meta name="description" content="Full-stack development agency with AI-assisted workflows. 65% faster to MVP." />
  </head>
  <body>
    <HeroSection client:load />
    <JourneySection client:load />
  </body>
</html>
```

Run: `pnpm dev` and verify journey section with animations

**Step 3: Commit**

```bash
git add apps/web/src/components/sections/JourneySection.tsx apps/web/src/pages/index.astro
git commit -m "feat: create journey visualization section

- Add animated timeline with 3 nodes (Ideation, Development, Launch)
- Implement progress bar animation on scroll
- Add comparison cards showing traditional vs AI-native speed
- Use IntersectionObserver for scroll-triggered animations
- Add floating particle animation

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Phase 5: Expertise Carousel

### Task 9: Create Expertise Carousel Section

**Files:**
- Create: `apps/web/src/components/sections/ExpertiseSection.tsx`
- Create: `apps/web/src/data/expertise.ts`

**Step 1: Create expertise data file**

Create file: `apps/web/src/data/expertise.ts`

```typescript
export interface ExpertiseItem {
  id: string
  title: string
  shortTitle: string
  description: string
  details: string[]
  icon: string
}

export const expertiseItems: ExpertiseItem[] = [
  {
    id: 'erp',
    title: 'Intuitive ERPs for Blue-Collar Teams',
    shortTitle: 'Custom ERPs',
    description: 'Custom, highly customizable systems designed for businesses with blue-collar workforces.',
    details: [
      'UI/UX designed for easy adoption by non-technical workers',
      'Highly customizable to fit your unique workflows',
      'Mobile-first interfaces for field workers',
    ],
    icon: '🏭',
  },
  {
    id: 'ai-tools',
    title: 'AI-Native Apps & Internal Tools',
    shortTitle: 'AI-Native Apps',
    description: 'Intelligent applications built to boost your existing workflows with AI baked into the core.',
    details: [
      'LLM integration for natural language interfaces',
      'Predictive analytics and automation',
      'Custom AI models trained on your data',
    ],
    icon: '🤖',
  },
  {
    id: 'n8n',
    title: 'N8n Workflow Automation',
    shortTitle: 'N8n Workflows',
    description: 'Complex process orchestration and integration expertise to connect your entire tech stack.',
    details: [
      'API integrations and data synchronization',
      'Custom workflow nodes and templates',
      'Monitoring and error handling',
    ],
    icon: '⚡',
  },
  {
    id: 'ecommerce',
    title: 'Custom Ecommerce Experiences',
    shortTitle: 'Custom Ecommerce',
    description: 'Tailored storefront solutions that go beyond template limitations.',
    details: [
      'Headless commerce architectures',
      'Custom checkout flows and payment integrations',
      'Performance-optimized product catalogs',
    ],
    icon: '🛒',
  },
  {
    id: 'saas',
    title: 'Idea to SaaS / RaaS',
    shortTitle: 'SaaS / RaaS',
    description: 'AI-powered "Result as a Service" applications. From concept to launch at unprecedented velocity.',
    details: [
      'Multi-tenant SaaS architectures',
      'Subscription and billing systems',
      'AI-driven core value propositions',
    ],
    icon: '🚀',
  },
  {
    id: 'cms',
    title: 'CMS Rapid Prototypes',
    shortTitle: 'CMS Prototypes',
    description: 'Strapi, Directus, and Payload expertise for content-driven development at speed.',
    details: [
      'Custom content types and workflows',
      'API-first architecture',
      'Admin panel customization',
    ],
    icon: '📦',
  },
]
```

**Step 2: Create ExpertiseSection component**

Create file: `apps/web/src/components/sections/ExpertiseSection.tsx`

```tsx
'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { GlassCard } from '@/components/GlassCard'
import { expertiseItems } from '@/data/expertise'
import { cn } from '@/lib/utils'

export function ExpertiseSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // Auto-rotation
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % expertiseItems.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const navigate = (direction: 'prev' | 'next') => {
    setIsAutoPlaying(false)
    if (direction === 'prev') {
      setActiveIndex((current) =>
        current === 0 ? expertiseItems.length - 1 : current - 1
      )
    } else {
      setActiveIndex((current) => (current + 1) % expertiseItems.length)
    }
  }

  const getVisibleCards = () => {
    const cards = []
    for (let i = -2; i <= 2; i++) {
      const index = (activeIndex + i + expertiseItems.length) % expertiseItems.length
      cards.push({ item: expertiseItems[index], offset: i, index })
    }
    return cards
  }

  return (
    <section ref={ref} className="min-h-screen bg-charcoal py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="text-slate text-sm font-medium tracking-[0.2em] uppercase">
            Core Expertise
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold uppercase tracking-[0.02em] leading-tight">
            Full-Stack Mastery
            <br />
            Across Every Domain
          </h2>
          <p className="text-slate text-lg max-w-3xl mx-auto">
            From ERPs to AI-native tools—we build it all. Here's where we shine brightest.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative h-[600px] flex items-center justify-center">
          {/* Cards */}
          <div className="relative w-full h-full flex items-center justify-center">
            <AnimatePresence initial={false}>
              {getVisibleCards().map(({ item, offset, index }) => {
                const isActive = offset === 0
                const scale = isActive ? 1 : offset === -1 || offset === 1 ? 0.8 : 0.6
                const opacity = isActive ? 1 : Math.abs(offset) === 1 ? 0.5 : 0.3
                const zIndex = 10 - Math.abs(offset)
                const xOffset = offset * 350

                return (
                  <motion.div
                    key={index}
                    className="absolute"
                    initial={{ opacity: 0, scale: 0.8, x: xOffset }}
                    animate={{
                      opacity,
                      scale,
                      x: xOffset,
                      filter: isActive ? 'blur(0px)' : `blur(${Math.abs(offset) * 2}px)`
                    }}
                    transition={{
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    style={{ zIndex }}
                  >
                    <GlassCard
                      className={cn(
                        'w-[800px] h-[500px] p-8',
                        isActive && 'ring-2 ring-lime/40 shadow-glow-lime'
                      )}
                      hover={isActive}
                    >
                      <div className="flex flex-col h-full">
                        {/* Icon */}
                        <div className="text-6xl mb-6">{item.icon}</div>

                        {/* Title */}
                        <h3 className="text-3xl font-display font-bold uppercase tracking-wide mb-4">
                          {item.shortTitle}
                        </h3>

                        {/* Description */}
                        <p className="text-slate text-lg mb-6">
                          {item.description}
                        </p>

                        {/* Details */}
                        {isActive && (
                          <motion.ul
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="space-y-2 mb-auto"
                          >
                            {item.details.map((detail, i) => (
                              <li key={i} className="flex items-start gap-2 text-slate">
                                <span className="text-lime mt-1">•</span>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </motion.ul>
                        )}

                        {/* Learn More Link */}
                        {isActive && (
                          <motion.a
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            href={`/services/${item.id}`}
                            className="flex items-center gap-2 text-lime hover:text-lime/80 transition-colors group mt-6"
                          >
                            <span className="font-medium">Learn More</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </motion.a>
                        )}
                      </div>
                    </GlassCard>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => navigate('prev')}
            className="absolute left-4 z-20 p-4 glass-panel hover:border-lime/40 hover:shadow-glow-lime transition-all rounded-full"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 text-lime" />
          </button>
          <button
            onClick={() => navigate('next')}
            className="absolute right-4 z-20 p-4 glass-panel hover:border-lime/40 hover:shadow-glow-lime transition-all rounded-full"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 text-lime" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {expertiseItems.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index)
                setIsAutoPlaying(false)
              }}
              className={cn(
                'w-2 h-2 rounded-full transition-all duration-300',
                index === activeIndex
                  ? 'bg-lime shadow-glow-lime w-8'
                  : 'bg-slate/30 hover:bg-slate/50'
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
```

**Step 3: Add ExpertiseSection to homepage**

Modify: `apps/web/src/pages/index.astro`

```astro
---
import '../styles/global.css'
import { HeroSection } from '@/components/sections/HeroSection'
import { JourneySection } from '@/components/sections/JourneySection'
import { ExpertiseSection } from '@/components/sections/ExpertiseSection'
---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width" />
    <meta name="generator" content={Astro.generator} />
    <title>Hyfy Agency - From Idea to MVP in 65% Less Time</title>
    <meta name="description" content="Full-stack development agency with AI-assisted workflows. 65% faster to MVP." />
  </head>
  <body>
    <HeroSection client:load />
    <JourneySection client:load />
    <ExpertiseSection client:load />
  </body>
</html>
```

Run: `pnpm dev` and verify carousel with depth effect

**Step 4: Commit**

```bash
git add .
git commit -m "feat: create expertise carousel section

- Add 6 expertise items with full details
- Implement depth-of-field carousel effect
- Add auto-rotation (4s interval, pauses on interaction)
- Include navigation arrows and dot indicators
- Implement blur and scale based on distance from center
- Add keyboard accessibility

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Phase 6: Social Proof & Process Sections

### Task 10: Create Social Proof Section

**Files:**
- Create: `apps/web/src/components/sections/SocialProofSection.tsx`
- Create: `apps/web/src/components/StatCounter.tsx`

**Step 1: Create StatCounter component**

Create file: `apps/web/src/components/StatCounter.tsx`

```tsx
'use client'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface StatCounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
}

export function StatCounter({ end, duration = 2, suffix = '', prefix = '' }: StatCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [isInView, end, duration])

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  )
}
```

**Step 2: Create SocialProofSection component**

Create file: `apps/web/src/components/sections/SocialProofSection.tsx`

```tsx
'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GlassCard } from '@/components/GlassCard'
import { StatCounter } from '@/components/StatCounter'
import { Badge } from '@/components/ui/badge'

const stats = [
  { value: 65, suffix: '%', label: 'Faster to MVP' },
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
]

const featuredCase = {
  client: 'TechStartup Inc.',
  industry: 'AI-Native SaaS',
  timeline: { before: '8 months', after: '10 weeks' },
  quote: 'Hyfy turned our concept into reality faster than we thought possible. The AI-native development approach saved us months.',
}

const miniCases = [
  {
    client: 'Manufacturing Co.',
    type: 'ERP for Manufacturing',
    result: 'Reduced training time by 70%',
  },
  {
    client: 'Retail Brand',
    type: 'E-commerce Platform',
    result: 'Launched in 6 weeks',
  },
]

export function SocialProofSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="min-h-screen bg-obsidian py-20 px-4 relative">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#88FF66 1px, transparent 1px), linear-gradient(90deg, #88FF66 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard glow className="text-center">
                <div className="text-5xl md:text-6xl font-display font-bold text-lime mb-2 animate-breathing-pulse">
                  <StatCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-slate text-lg">{stat.label}</div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Featured Case Study */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:row-span-2"
          >
            <GlassCard hover className="h-full flex flex-col">
              <Badge className="mb-4 w-fit bg-lime/20 text-lime border-lime/40">
                {featuredCase.industry}
              </Badge>

              <div className="mb-6">
                <div className="text-sm text-slate mb-2">Timeline</div>
                <div className="flex items-center gap-4">
                  <span className="text-slate/60 line-through text-lg">
                    {featuredCase.timeline.before}
                  </span>
                  <span className="text-lime">→</span>
                  <span className="text-3xl font-bold text-lime">
                    {featuredCase.timeline.after}
                  </span>
                </div>
              </div>

              <blockquote className="text-lg text-slate mb-4 flex-grow">
                "{featuredCase.quote}"
              </blockquote>

              <div className="text-sm text-slate/60">
                — {featuredCase.client}
              </div>
            </GlassCard>
          </motion.div>

          {/* Mini Case Studies */}
          {miniCases.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.client}
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
            >
              <GlassCard hover className="h-full">
                <Badge className="mb-3 w-fit bg-amber/20 text-amber border-amber/40">
                  {caseStudy.type}
                </Badge>

                <h3 className="text-xl font-bold mb-2">{caseStudy.client}</h3>
                <p className="text-lime font-medium">{caseStudy.result}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

**Step 3: Add SocialProofSection to homepage**

Modify: `apps/web/src/pages/index.astro`

```astro
---
import '../styles/global.css'
import { HeroSection } from '@/components/sections/HeroSection'
import { JourneySection } from '@/components/sections/JourneySection'
import { ExpertiseSection } from '@/components/sections/ExpertiseSection'
import { SocialProofSection } from '@/components/sections/SocialProofSection'
---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width" />
    <meta name="generator" content={Astro.generator} />
    <title>Hyfy Agency - From Idea to MVP in 65% Less Time</title>
    <meta name="description" content="Full-stack development agency with AI-assisted workflows. 65% faster to MVP." />
  </head>
  <body>
    <HeroSection client:load />
    <JourneySection client:load />
    <ExpertiseSection client:load />
    <SocialProofSection client:load />
  </body>
</html>
```

Run: `pnpm dev` and verify stats counter and case studies

**Step 4: Commit**

```bash
git add .
git commit -m "feat: create social proof section with stats and case studies

- Add animated stat counters (65% faster, 50+ projects, 100% satisfaction)
- Implement breathing pulse glow on stats
- Create bento grid layout for case studies
- Add featured case study with timeline comparison
- Include mini case studies showing range
- Add background grid pattern at 3% opacity

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

### Task 11: Create Process Section

**Files:**
- Create: `apps/web/src/components/sections/ProcessSection.tsx`

**Step 1: Create ProcessSection component**

Create file: `apps/web/src/components/sections/ProcessSection.tsx`

```tsx
'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GlassCard } from '@/components/GlassCard'
import { Lightbulb, Rocket, RefreshCw, TrendingUp } from 'lucide-react'

const processPhases = [
  {
    icon: Lightbulb,
    title: 'Discovery & Ideation',
    description: 'We map your vision using AI-assisted requirement gathering',
    tools: 'Collaborative workshops, AI spec generation',
  },
  {
    icon: Rocket,
    title: 'Rapid Prototyping',
    description: 'CMS-driven prototypes in days, not months',
    tools: 'Strapi, Directus, Payload + AI code generation',
  },
  {
    icon: RefreshCw,
    title: 'Iterative Development',
    description: 'Weekly sprints with AI pair programming for velocity',
    tools: 'Modern frameworks, N8n automation, AI assistants',
  },
  {
    icon: TrendingUp,
    title: 'Launch & Scale',
    description: 'Production-ready MVP with built-in scalability',
    tools: 'Cloud deployment, monitoring, ongoing optimization',
  },
]

export function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="min-h-screen bg-charcoal py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="text-slate text-sm font-medium tracking-[0.2em] uppercase">
            Our Methodology
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold uppercase tracking-[0.02em] leading-tight">
            AI-Augmented Development
            <br />
            at Light Speed
          </h2>
          <p className="text-slate text-lg max-w-3xl mx-auto">
            Human creativity meets machine precision. Here's how we compress timelines without compromising quality.
          </p>
        </motion.div>

        {/* Process Cards with Connecting Line */}
        <div className="relative">
          {/* Horizontal connecting line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-lime/20">
            <motion.div
              className="h-full bg-lime shadow-glow-lime"
              initial={{ width: '0%' }}
              animate={isInView ? { width: '100%' } : {}}
              transition={{ duration: 2, delay: 0.5 }}
            />
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {processPhases.map((phase, index) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
              >
                <GlassCard hover className="h-full flex flex-col">
                  {/* Icon with glow */}
                  <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center ring-2 ring-lime/40 shadow-glow-lime mb-6">
                    <phase.icon className="w-8 h-8 text-lime" />
                  </div>

                  {/* Phase number */}
                  <div className="text-lime/60 text-sm font-medium mb-2">
                    Phase {index + 1}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-display font-bold uppercase tracking-wide mb-3">
                    {phase.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate mb-4 flex-grow">
                    {phase.description}
                  </p>

                  {/* Tools */}
                  <div className="text-sm text-slate/60 border-t border-white/10 pt-4">
                    <div className="font-medium text-slate mb-1">Tools:</div>
                    {phase.tools}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
```

**Step 2: Add ProcessSection to homepage**

Modify: `apps/web/src/pages/index.astro`

```astro
---
import '../styles/global.css'
import { HeroSection } from '@/components/sections/HeroSection'
import { JourneySection } from '@/components/sections/JourneySection'
import { ExpertiseSection } from '@/components/sections/ExpertiseSection'
import { SocialProofSection } from '@/components/sections/SocialProofSection'
import { ProcessSection } from '@/components/sections/ProcessSection'
---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width" />
    <meta name="generator" content={Astro.generator} />
    <title>Hyfy Agency - From Idea to MVP in 65% Less Time</title>
    <meta name="description" content="Full-stack development agency with AI-assisted workflows. 65% faster to MVP." />
  </head>
  <body>
    <HeroSection client:load />
    <JourneySection client:load />
    <ExpertiseSection client:load />
    <SocialProofSection client:load />
    <ProcessSection client:load />
  </body>
</html>
```

Run: `pnpm dev` and verify process timeline

**Step 3: Commit**

```bash
git add .
git commit -m "feat: create process methodology section

- Add 4 process phases with icons and descriptions
- Implement horizontal animated progress line
- Show tools and technologies for each phase
- Sequential card reveal on scroll
- Icon nodes with Electric Lime glow

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Phase 7: CTA & Footer

### Task 12: Create CTA Section and Footer

**Files:**
- Create: `apps/web/src/components/sections/CTASection.tsx`
- Create: `apps/web/src/components/Footer.tsx`

**Step 1: Create CTASection component**

Create file: `apps/web/src/components/sections/CTASection.tsx`

```tsx
'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GlowButton } from '@/components/GlowButton'
import { Badge } from '@/components/ui/badge'
import { Mail } from 'lucide-react'

const trustSignals = [
  'Free Consultation',
  'No Commitment Required',
  '30-Min Strategy Session',
]

export function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="relative min-h-screen bg-obsidian py-32 px-4 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(#88FF66 1px, transparent 1px), linear-gradient(90deg, #88FF66 1px, transparent 1px)',
            backgroundSize: '100px 100px'
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-obsidian/50 to-obsidian" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Main heading */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold uppercase tracking-[0.02em] leading-tight">
            Ready to Build
            <br />
            Your <span className="text-lime">MVP</span>?
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-slate max-w-2xl mx-auto">
            Let's turn your idea into reality—fast. Book a free consultation to map your project.
          </p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="pt-4"
          >
            <GlowButton
              variant="primary"
              className="px-10 py-7 text-xl animate-breathing-pulse"
            >
              Schedule Your Strategy Call
            </GlowButton>
          </motion.div>

          {/* Secondary CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center justify-center gap-2 text-slate hover:text-lime transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>Or email us at</span>
            <a href="mailto:hello@hyfy.agency" className="text-lime hover:underline">
              hello@hyfy.agency
            </a>
          </motion.div>
        </motion.div>

        {/* Trust Signals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-3 pt-8"
        >
          {trustSignals.map((signal) => (
            <Badge
              key={signal}
              className="glass-panel px-4 py-2 text-sm border-lime/20"
            >
              {signal}
            </Badge>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
```

**Step 2: Create Footer component**

Create file: `apps/web/src/components/Footer.tsx`

```tsx
import { Github, Twitter, Linkedin } from 'lucide-react'

const navigation = {
  services: [
    { name: 'Custom ERPs', href: '/services/erp' },
    { name: 'AI-Native Apps', href: '/services/ai-tools' },
    { name: 'N8n Workflows', href: '/services/n8n' },
    { name: 'Ecommerce', href: '/services/ecommerce' },
    { name: 'SaaS / RaaS', href: '/services/saas' },
    { name: 'CMS Prototypes', href: '/services/cms' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
  ],
  social: [
    { name: 'GitHub', icon: Github, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
  ],
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-charcoal border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-display font-bold text-lime mb-3">
              Hyfy Agency
            </h3>
            <p className="text-slate max-w-md">
              From idea to MVP in 65% less time. Full-stack development with AI-native workflows.
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-slate hover:text-lime transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-slate hover:text-lime transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate text-sm">
            © {currentYear} Hyfy Agency. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate hover:text-lime transition-colors"
                aria-label={item.name}
              >
                <item.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
```

**Step 3: Add CTA and Footer to homepage**

Modify: `apps/web/src/pages/index.astro`

```astro
---
import '../styles/global.css'
import { HeroSection } from '@/components/sections/HeroSection'
import { JourneySection } from '@/components/sections/JourneySection'
import { ExpertiseSection } from '@/components/sections/ExpertiseSection'
import { SocialProofSection } from '@/components/sections/SocialProofSection'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { CTASection } from '@/components/sections/CTASection'
import { Footer } from '@/components/Footer'
---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width" />
    <meta name="generator" content={Astro.generator} />
    <title>Hyfy Agency - From Idea to MVP in 65% Less Time</title>
    <meta name="description" content="Full-stack development agency with AI-assisted workflows. 65% faster to MVP." />
  </head>
  <body>
    <HeroSection client:load />
    <JourneySection client:load />
    <ExpertiseSection client:load />
    <SocialProofSection client:load />
    <ProcessSection client:load />
    <CTASection client:load />
    <Footer />
  </body>
</html>
```

Run: `pnpm dev` and verify complete homepage flow

**Step 4: Commit**

```bash
git add .
git commit -m "feat: create CTA section and footer

- Add final CTA with animated background grid
- Include trust signal badges
- Add primary and secondary CTA options
- Create footer with service/company links
- Add social media icons with hover effects
- Complete homepage section flow

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Phase 8: Enhancements & Polish

### Task 13: Add Scroll-Based Parallax for Hero

**Files:**
- Modify: `apps/web/src/components/sections/HeroSection.tsx`

**Step 1: Install Framer Motion scroll utilities**

Already installed in Task 3.

**Step 2: Add scroll-based parallax to HeroSection**

Modify: `apps/web/src/components/sections/HeroSection.tsx`

Add at the top, after imports:

```tsx
import { useScroll, useTransform } from 'framer-motion'
```

Update the component to use scroll transforms:

```tsx
export function HeroSection() {
  const { scrollY } = useScroll()

  // Parallax transforms
  const backgroundY = useTransform(scrollY, [0, 500], [0, 100]) // 20% speed
  const modelY = useTransform(scrollY, [0, 500], [0, 250]) // 50% speed
  const contentY = useTransform(scrollY, [0, 500], [0, 500]) // 100% speed
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <section className="relative h-screen w-full overflow-hidden bg-obsidian">
      {/* Back Layer with parallax */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{ y: backgroundY, opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* ... rest of watermark ... */}
      </motion.div>

      {/* Mid Layer with parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y: modelY, opacity }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        {/* ... rest of 3D scene ... */}
      </motion.div>

      {/* Front Layer with parallax */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center"
        style={{ y: contentY }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        {/* ... rest of content ... */}
      </motion.div>
    </section>
  )
}
```

Run: `pnpm dev` and test parallax by scrolling

**Step 3: Commit**

```bash
git add apps/web/src/components/sections/HeroSection.tsx
git commit -m "feat: add scroll-based parallax to hero section

- Implement 3-layer parallax with different scroll speeds
- Background layer: 20% scroll speed
- 3D model layer: 50% scroll speed
- Content layer: 100% scroll speed
- Add fade out effect on scroll

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

### Task 14: Add Responsive Mobile Optimizations

**Files:**
- Modify: `apps/web/src/components/ThreeScene.tsx`
- Modify: `apps/web/src/components/sections/ExpertiseSection.tsx`

**Step 1: Add responsive 3D scene scaling**

Modify: `apps/web/src/components/ThreeScene.tsx`

Add responsive hook:

```tsx
import { useEffect, useState } from 'react'

function useResponsiveScale() {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const updateScale = () => {
      const width = window.innerWidth
      if (width < 768) setScale(0.4) // Mobile
      else if (width < 1440) setScale(0.6) // Tablet
      else setScale(1) // Desktop
    }

    updateScale()
    window.addEventListener('resize', updateScale)
    return () => window.removeEventListener('resize', updateScale)
  }, [])

  return scale
}

// In RotatingBrain component:
function RotatingBrain() {
  const meshRef = useRef<Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const scale = useResponsiveScale()

  // ... existing code ...

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={(hovered ? 1.1 : 1) * scale} // Apply responsive scale
    >
      {/* ... rest ... */}
    </mesh>
  )
}
```

**Step 2: Add mobile carousel touch improvements**

Modify: `apps/web/src/components/sections/ExpertiseSection.tsx`

Add touch handlers and mobile optimization:

```tsx
// Add inside ExpertiseSection component:
const [touchStart, setTouchStart] = useState<number | null>(null)
const [touchEnd, setTouchEnd] = useState<number | null>(null)

const minSwipeDistance = 50

const onTouchStart = (e: React.TouchEvent) => {
  setTouchEnd(null)
  setTouchStart(e.targetTouches[0].clientX)
}

const onTouchMove = (e: React.TouchEvent) => {
  setTouchEnd(e.targetTouches[0].clientX)
}

const onTouchEnd = () => {
  if (!touchStart || !touchEnd) return

  const distance = touchStart - touchEnd
  const isLeftSwipe = distance > minSwipeDistance
  const isRightSwipe = distance < -minSwipeDistance

  if (isLeftSwipe) navigate('next')
  if (isRightSwipe) navigate('prev')
}

// Add to carousel container div:
<div
  className="relative h-[600px] flex items-center justify-center"
  onTouchStart={onTouchStart}
  onTouchMove={onTouchMove}
  onTouchEnd={onTouchEnd}
>
```

**Step 3: Add mobile-specific styles**

Update card rendering for mobile:

```tsx
// In getVisibleCards map, update motion.div:
const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

<motion.div
  // ... existing props ...
  animate={{
    opacity: isMobile ? (isActive ? 1 : 0) : opacity, // Hide non-active on mobile
    scale: isMobile ? 1 : scale,
    x: isMobile ? 0 : xOffset,
    filter: isActive ? 'blur(0px)' : `blur(${Math.abs(offset) * 2}px)`
  }}
>
```

**Step 4: Test on mobile viewport**

Run: `pnpm dev` and test with browser dev tools mobile view

**Step 5: Commit**

```bash
git add .
git commit -m "feat: add responsive mobile optimizations

- Scale 3D model to 40% on mobile, 60% on tablet
- Add touch swipe navigation to expertise carousel
- Hide non-active carousel cards on mobile
- Improve touch interaction responsiveness

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

### Task 15: Add Performance Optimizations

**Files:**
- Modify: `apps/web/src/styles/global.css`
- Modify: `apps/web/src/components/ThreeScene.tsx`

**Step 1: Add will-change for animated elements**

Modify: `apps/web/src/styles/global.css`

Add to the utilities layer:

```css
@layer utilities {
  /* ... existing utilities ... */

  .will-change-transform {
    will-change: transform;
  }

  .will-change-opacity {
    will-change: opacity;
  }

  .gpu-accelerated {
    transform: translateZ(0);
    backface-visibility: hidden;
    perspective: 1000px;
  }
}
```

**Step 2: Add lazy loading to 3D scene**

Modify: `apps/web/src/components/ThreeScene.tsx`

Add Suspense and fallback:

```tsx
import { Suspense } from 'react'

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="glass-panel p-8 rounded-lg">
        <div className="text-lime animate-breathing-pulse">Loading 3D Scene...</div>
      </div>
    </div>
  )
}

export function ThreeScene({ className }: ThreeSceneProps) {
  return (
    <div className={className}>
      <Suspense fallback={<LoadingFallback />}>
        <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
          {/* ... existing canvas content ... */}
        </Canvas>
      </Suspense>
    </div>
  )
}
```

**Step 3: Add prefers-reduced-motion support**

Modify: `apps/web/src/styles/global.css`

Add media query:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Step 4: Commit**

```bash
git add .
git commit -m "feat: add performance optimizations

- Add will-change for transform and opacity animations
- Implement GPU acceleration for glassmorphic elements
- Add Suspense loading fallback for 3D scene
- Support prefers-reduced-motion accessibility
- Optimize animation performance

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Phase 9: Final Polish

### Task 16: Add SEO Meta Tags and Open Graph

**Files:**
- Create: `apps/web/src/components/SEOHead.astro`
- Modify: `apps/web/src/pages/index.astro`

**Step 1: Create SEO component**

Create file: `apps/web/src/components/SEOHead.astro`

```astro
---
interface Props {
  title: string
  description: string
  image?: string
  url?: string
}

const {
  title,
  description,
  image = '/og-image.jpg',
  url = 'https://hyfy.agency'
} = Astro.props
---

<!-- Primary Meta Tags -->
<title>{title}</title>
<meta name="title" content={title} />
<meta name="description" content={description} />

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content={url} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content={image} />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content={url} />
<meta property="twitter:title" content={title} />
<meta property="twitter:description" content={description} />
<meta property="twitter:image" content={image} />

<!-- Additional Meta Tags -->
<meta name="robots" content="index, follow" />
<meta name="language" content="English" />
<meta name="author" content="Hyfy Agency" />
```

**Step 2: Update index page with SEO**

Modify: `apps/web/src/pages/index.astro`

```astro
---
import '../styles/global.css'
import SEOHead from '@/components/SEOHead.astro'
import { HeroSection } from '@/components/sections/HeroSection'
import { JourneySection } from '@/components/sections/JourneySection'
import { ExpertiseSection } from '@/components/sections/ExpertiseSection'
import { SocialProofSection } from '@/components/sections/SocialProofSection'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { CTASection } from '@/components/sections/CTASection'
import { Footer } from '@/components/Footer'
---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width" />
    <meta name="generator" content={Astro.generator} />

    <SEOHead
      title="Hyfy Agency - From Idea to MVP in 65% Less Time"
      description="Full-stack development agency with AI-assisted workflows. We specialize in hyper-rapid prototyping, delivering custom ERPs, AI-native apps, and SaaS solutions 65% faster than traditional development."
    />
  </head>
  <body>
    <HeroSection client:load />
    <JourneySection client:load />
    <ExpertiseSection client:load />
    <SocialProofSection client:load />
    <ProcessSection client:load />
    <CTASection client:load />
    <Footer />
  </body>
</html>
```

**Step 3: Commit**

```bash
git add .
git commit -m "feat: add SEO meta tags and Open Graph support

- Create reusable SEOHead component
- Add Open Graph tags for social sharing
- Add Twitter Card support
- Include robots and language meta tags
- Improve search engine discoverability

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

### Task 17: Build and Test Production Bundle

**Files:**
- N/A (testing only)

**Step 1: Run type checking**

Run: `cd apps/web && pnpm type-check`

Expected: No type errors

**Step 2: Run linting**

Run: `cd apps/web && pnpm lint`

Expected: No linting errors (or fix any that appear)

**Step 3: Build production bundle**

Run: `cd apps/web && pnpm build`

Expected: Build succeeds, check for:
- Bundle size warnings
- Missing dependencies
- Build errors

**Step 4: Preview production build**

Run: `cd apps/web && pnpm preview`

Expected: Production site runs locally, test:
- All sections render
- Animations work
- 3D scene loads
- Mobile responsive
- No console errors

**Step 5: Run Lighthouse audit**

Open Chrome DevTools > Lighthouse
Run audit for:
- Performance
- Accessibility
- Best Practices
- SEO

Target scores: All > 90

**Step 6: Commit final fixes (if any)**

```bash
git add .
git commit -m "fix: production build optimizations

- Fix any build warnings
- Optimize bundle size
- Resolve accessibility issues
- Improve Lighthouse scores

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Next Steps & Enhancements

### Immediate Priorities

1. **Source 3D Model:**
   - Find free bio-digital brain/neural network model
   - Replace placeholder icosahedron geometry
   - Optimize GLTF model size

2. **Add Google Fonts:**
   - Install Monument Extended (or Inter Tight as fallback)
   - Install Plus Jakarta Sans
   - Update Tailwind config font families

3. **Create OG Image:**
   - Design 1200x630 Open Graph image
   - Add to `apps/web/public/og-image.jpg`

4. **Content Updates:**
   - Replace placeholder copy with final content
   - Add real case study data
   - Update email addresses and links

### Future Enhancements

- Add smooth scroll behavior
- Implement service detail pages (`/services/*`)
- Add contact form with validation
- Integrate analytics (Google Analytics / Plausible)
- Add blog section
- Implement A/B testing for CTA
- Add video backgrounds as alternative to 3D
- Create admin dashboard for content updates via Strapi

---

## Documentation

All design specifications are in:
- `docs/plans/2026-01-17-homepage-design.md`

Component architecture:
- Base components: `src/components/` (GlassCard, GlowButton, ThreeScene)
- Section components: `src/components/sections/` (Hero, Journey, Expertise, etc.)
- Shared UI: `src/components/ui/` (shadcn components)
- Data: `src/data/` (expertise items, etc.)

---

**Plan Complete!** Ready for execution.

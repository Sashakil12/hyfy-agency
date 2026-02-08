# CTA Buttons Inventory

**Project**: Hyfy Agency Website
**Date**: 2026-02-08
**Analysis**: Complete audit of all CTA button types and variations

---

## 🎨 BUTTON TYPES & COMPONENTS

### 1. **GlowButton Component** (`@/components/GlowButton`)

**Variants**:
- **Primary**: `variant="primary"`
  - Background: Electric Lime (#88FF66)
  - Text: Deep Obsidian (#050505)
  - Effect: `btn-glow` class (glow animation)
  - Hover: Lime opacity 90%

- **Secondary**: `variant="secondary"`
  - Style: Glass panel with lime border
  - Text: Electric Lime (#88FF66)
  - Effect: `glass-panel-hover` + `shadow-glow-lime`

**Base Features**:
- Light sweep effect on hover
- Framer Motion animations
- Responsive sizing
- Icon support

---

## 📋 CTA BUTTON TEXT VARIATIONS

### **Primary Action Buttons** (GlowButton Primary)

#### Hero Sections
1. **Main Hero** (`HeroSection.tsx`)
   - "Start Your Project" (Rocket icon)

2. **AI Native Hero** (`AiNativeHeroSection.tsx`)
   - "See Our AI Work" (Sparkles icon)

3. **CMS Hero** (`CmsPrototypesHeroSection.tsx`)
   - "Schedule Consultation" (Database icon)

4. **Ecommerce Hero** (`EcommerceHeroSection.tsx`)
   - "Start Your Store" (Sparkles icon)

5. **ERP Hero** (`ErpHeroSection.tsx`)
   - "Schedule Demo" (Shield icon)

6. **n8n Hero** (`N8nHeroSection.tsx`)
   - "Let's Build Your Workflows" (Zap icon)

7. **SaaS Hero** (`SaasHeroSection.tsx`)
   - "Start Your SaaS" (Sparkles icon)

#### CTA Sections
8. **Main CTA** (`CTASection.tsx`)
   - "Book Your Free Strategy Call" (Calendar icon)

9. **About CTA** (`AboutCTASection.tsx`)
   - "Book Your Free Call" (Calendar icon)

10. **AI Native CTA** (`AiNativeCTASection.tsx`)
    - "Book Strategy Call" (Calendar icon)

11. **CMS CTA** (`CmsPrototypesCTASection.tsx`)
    - "Schedule Consultation" (Calendar icon)

12. **Ecommerce CTA** (`EcommerceCTASection.tsx`)
    - "Book Consultation" (Calendar icon)

13. **ERP CTA** (`ErpCTASection.tsx`)
    - "Schedule Demo" (Calendar icon)

14. **n8n CTA** (`N8nCTASection.tsx`)
    - "Free Consultation" (Calendar icon)

15. **SaaS CTA** (`SaasCTASection.tsx`)
    - "Book Strategy Call" (Calendar icon)

#### Other Sections
16. **Contact Form** (`ContactFormSection.tsx`)
    - "Send Message" / "Sending..." (Send icon)
    - Dynamic state: disabled while submitting

---

### **Secondary Action Buttons** (Ghost/Outline Style)

**Component**: `motion.button` with glass panel styling

**Style Specs**:
- Border: `border border-lime/30`
- Background: `glass-panel-hover`
- Hover: `hover:bg-lime/10`
- Text: Lime color
- Animation: `whileHover={{ scale: 1.02 }}`
- Animation: `whileTap={{ scale: 0.98 }}`

**Variations**:

1. **Main Hero** (`HeroSection.tsx`)
   - "See Our Work" (ChevronDown rotated icon)
   - Link: `#expertise`

2. **AI Native Hero** (`AiNativeHeroSection.tsx`)
   - "Book Consultation" (ArrowRight icon)

3. **CMS Hero** (`CmsPrototypesHeroSection.tsx`)
   - "See CMS Stack" (ArrowRight icon)

4. **Ecommerce Hero** (`EcommerceHeroSection.tsx`)
   - "View Examples" (ArrowRight icon)

5. **ERP Hero** (`ErpHeroSection.tsx`)
   - "View Case Studies" (ArrowRight icon)

6. **n8n Hero** (`N8nHeroSection.tsx`)
   - "See Our Work" (ArrowRight icon)

7. **SaaS Hero** (`SaasHeroSection.tsx`)
   - "View Roadmap" (ArrowRight icon)

8. **About CTA** (`AboutCTASection.tsx`)
   - "Contact Us" (ArrowRight icon)
   - Link: `/contact`

---

### **Email Link CTAs**

**Component**: `<a>` tag styled as inline link

**Style Specs**:
- Icon: Mail icon (w-4 h-4)
- Text: Lime color
- Hover: `hover:text-lime/80`
- Display: `inline-flex items-center gap-2`

**Text Variations**:
1. **Main CTA Section**
   - Label: "Prefer email?"
   - Email: sales@hyfy.ltd
   - Context: Below primary CTA

2. **All Service CTA Sections** (AI, CMS, Ecommerce, ERP, n8n, SaaS)
   - Label: "Or reach out directly:"
   - Email: sales@hyfy.ltd
   - Context: Below button CTAs, above border

---

### **Header/Navigation CTAs**

#### Desktop Header
**File**: `GlobalHeader.tsx` (Line 142-155)

**Component**: Custom `<a>` tag with glow effect
- Text: "Get Started"
- Background: Electric Lime (#88FF66)
- Text Color: Deep Obsidian (#050505)
- Glow: Blur-xl opacity animation
- Link: `/contact`
- Style: `px-6 py-2.5 rounded-lg`

#### Mobile Header
**File**: `GlobalHeader.tsx` (Line 286-297)

**Component**: Same as desktop, full-width
- Text: "Get Started"
- Style: `w-full px-6 py-3 text-center`
- Link: `/contact`

#### MegaMenu Footer CTA
**File**: `MegaMenu.tsx` (Line 266-275)

**Component**: Custom `<a>` with group/cta class
- Text: "Talk to an Expert"
- Description: "Ready to transform your business?"
- Background: Electric Lime (#88FF66)
- Link: `/contact`

---

## 📊 BUTTON STATISTICS

### By Category

**Primary Action Buttons (GlowButton)**: 16 total
- Hero sections: 7
- CTA sections: 8
- Forms: 1

**Secondary Action Buttons (Ghost)**: 8 total
- All in hero sections
- All use ArrowRight icon (except main hero)

**Email Links**: 9 total
- Main CTA: 1
- Service CTAs: 6
- About CTA: 1
- Contact Info: 1

**Navigation CTAs**: 3 total
- Desktop header: 1
- Mobile header: 1
- MegaMenu footer: 1

---

## 🎯 BUTTON TEXT PATTERNS

### Action Verbs Used
1. **Book** (7 instances) - Most common
   - "Book Your Free Call"
   - "Book Strategy Call"
   - "Book Consultation"

2. **Schedule** (4 instances)
   - "Schedule Consultation"
   - "Schedule Demo"
   - "Schedule Free Strategy Session"

3. **Start** (3 instances)
   - "Start Your Project"
   - "Start Your Store"
   - "Start Your SaaS"

4. **See/View** (5 instances)
   - "See Our Work" (2x)
   - "See Our AI Work"
   - "See CMS Stack"
   - "View Examples"
   - "View Case Studies"
   - "View Roadmap"

5. **Let's Build** (2 instances)
   - "Let's Build Your Workflows"

6. **Get** (1 instance)
   - "Get Started"

7. **Talk** (1 instance)
   - "Talk to an Expert"

---

## 🔧 SIZING VARIATIONS

### GlowButton Sizes

**Extra Large** (Homepage CTA):
- `px-12 py-7 text-xl`
- Used in: Main CTA Section, About CTA

**Large** (Service CTAs):
- `px-10 py-5 text-lg`
- Used in: All service CTA sections

**Large Hero** (Main Hero):
- `px-10 py-6 text-lg`
- Used in: Main Hero Section

**Medium** (Service Heroes):
- `px-8 py-4 text-base`
- Used in: All service hero sections

### Ghost Button Sizes

**Medium** (Most common):
- `px-8 py-4 text-base`
- Used in: All hero sections

**Large** (About page):
- `px-8 py-6 text-base`
- Used in: About CTA Section

---

## 🎨 ICON USAGE

### Icons by Button Type

**Calendar Icon** (8 instances):
- Book/Schedule CTAs
- Most common CTA icon

**Rocket Icon** (2 instances):
- "Start Your Project"
- Badge: "Ready_To_Launch"

**Sparkles Icon** (3 instances):
- "See Our AI Work"
- "Start Your Store"
- "Start Your SaaS"

**ArrowRight Icon** (7 instances):
- All secondary "See/View" CTAs
- "Contact Us"

**Database Icon** (1 instance):
- "Schedule Consultation" (CMS)

**Shield Icon** (1 instance):
- "Schedule Demo" (ERP)

**Zap Icon** (1 instance):
- "Let's Build Your Workflows" (n8n)

**Mail Icon** (9 instances):
- All email link CTAs

**Send Icon** (1 instance):
- Contact form submit

**ChevronDown Icon** (1 instance):
- "See Our Work" (main hero)

---

## 💡 DESIGN PATTERNS & CONSISTENCY

### Consistent Patterns

✅ **Primary CTAs always use**:
- GlowButton component
- Calendar icon (for booking/scheduling)
- UPPERCASE text
- Bold font weight
- "Book" or "Schedule" verbs

✅ **Secondary CTAs always use**:
- Ghost/outline style
- ArrowRight icon (except main hero)
- Glass panel hover effect
- Scale animation (1.02 on hover)

✅ **Email CTAs always show**:
- Mail icon
- "sales@hyfy.ltd" email
- Inline flex layout
- Lime color scheme

### Button Hierarchy

1. **Primary** (GlowButton): Main conversion action
2. **Secondary** (Ghost): Alternative action / exploration
3. **Email Link**: Fallback contact method

---

## 🔄 ANIMATION PATTERNS

### GlowButton Animations

**Pulse Effect** (Main CTA):
```typescript
animate={{
  scale: [1, 1.1, 1],
  opacity: [0.5, 0, 0.5]
}}
transition={{ duration: 2, repeat: Infinity }}
```

**Ring Effect** (Main CTA):
```typescript
animate={{
  scale: [1, 1.15, 1],
  opacity: [0.8, 0, 0.8]
}}
transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
```

### Ghost Button Animations

**Hover Scale**:
```typescript
whileHover={{ scale: 1.02 }}
whileTap={{ scale: 0.98 }}
```

**Icon Translate** (About CTA):
```typescript
whileHover={{ x: 5 }} // ArrowRight shifts right
```

---

## 📝 RECOMMENDATIONS

### Current State Summary
- ✅ Consistent use of GlowButton component
- ✅ Clear hierarchy (primary/secondary/email)
- ✅ Uniform icon usage
- ✅ Responsive sizing
- ✅ Accessibility (proper semantic HTML)

### Areas for Consideration
1. **Button Text Consistency**: Consider standardizing between "Book" vs "Schedule"
2. **Icon Consistency**: Secondary buttons could use uniform ArrowRight icon
3. **Email Placement**: All CTAs now consistently use sales@hyfy.ltd
4. **Mobile Optimization**: All buttons responsive and touch-friendly

---

**Document Generated**: 2026-02-08
**Last Updated**: 2026-02-08
**Total Button Variations Documented**: 36+

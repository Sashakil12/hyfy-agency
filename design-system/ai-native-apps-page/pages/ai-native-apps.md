# AI Native Apps Page Overrides

> **PROJECT:** AI Native Apps Page
> **Generated:** 2026-02-04
> **Page Type:** Service Landing Page

> ⚠️ **IMPORTANT:** Rules in this file **override** the Master file (`design-system/MASTER.md`).
> Only deviations from the Master are documented here. For all other rules, refer to the Master.

---

## Color Overrides

**Use existing Nexus-Glass palette instead of generated colors:**

| Role             | Hex                      | CSS Variable   | Usage                                    |
| ---------------- | ------------------------ | -------------- | ---------------------------------------- |
| Primary          | `#88FF66`                | Electric Lime  | AI responses, active states, CTA buttons |
| Secondary        | `#F2994A`                | Internal Amber | Processing states, secondary accents     |
| Background       | `#050505`                | Deep Obsidian  | Page background                          |
| Card Background  | `rgba(255,255,255,0.03)` | Glass          | Cards and panels                         |
| Text (Primary)   | `#FFFFFF`                | Pure White     | Headings and high-emphasis labels        |
| Text (Secondary) | `#828282`                | Slate Grey     | Metadata, body text, disabled states     |

---

## Typography Overrides

**Use existing Orbitron + Rajdhani fonts:**

```css
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&display=swap');
```

- **Heading Font:** Orbitron (Display)
- **Body Font:** Rajdhani
- **Mood:** futuristic, AI, technology, precision, data-driven

---

## Key Effects (AI-Native Style Integration)

### Typing Indicators

Use 3-dot pulse animation for AI thinking states:

```css
.typing-indicator {
  display: flex;
  gap: 4px;
}
.typing-indicator span {
  width: 8px;
  height: 8px;
  background: #88ff66;
  border-radius: 50%;
  animation: typing-pulse 1.4s infinite ease-in-out;
}
.typing-indicator span:nth-child(2) {
  animation-delay: 0.2s;
}
.typing-indicator span:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes typing-pulse {
  0%,
  80%,
  100% {
    opacity: 0.3;
    transform: scale(0.8);
  }
  40% {
    opacity: 1;
    transform: scale(1);
  }
}
```

### Streaming Text Animation

For AI response simulation:

```css
@keyframes stream-reveal {
  from {
    max-height: 0;
    opacity: 0;
  }
  to {
    max-height: 500px;
    opacity: 1;
  }
}
.streaming-text {
  animation: stream-reveal 0.8s ease-out forwards;
}
```

### Pulse Animations

For active AI states:

```css
.ai-pulse {
  animation: ai-pulse-glow 2s infinite ease-in-out;
}
@keyframes ai-pulse-glow {
  0%,
  100% {
    box-shadow: 0 0 15px rgba(136, 255, 102, 0.4);
  }
  50% {
    box-shadow: 0 0 30px rgba(136, 255, 102, 0.7);
  }
}
```

---

## Layout Overrides

- **Max Width:** 1200px (standard)
- **Layout:** Full-width sections, centered content
- **Section Pattern:** Hero > Features > Use Cases > CTA

---

## Component Specifics

### AI Chat Interface Cards

- Use glass-panel with glassmorphic blur
- Add terminal-text class for AI responses
- Include typing indicator for "thinking" state
- Streaming reveal animation for content

### Feature Cards

- Glass cards with light-sweep on hover
- Cursor pointer on all interactive elements
- Smooth transitions (150-300ms)
- Border-lime/30 default, border-lime/50 on hover

---

## Recommendations

- **Effects:** Backdrop blur (16-24px), subtle border (1px solid rgba white 0.2), light reflection, Z-depth
- **AI Elements:** Typing indicators, streaming text, context cards, smooth reveals
- **Motion:** Power-up snap easing (cubic-bezier(0.22, 1, 0.36, 1))
- **Anti-Patterns:** Heavy chrome, slow response feedback

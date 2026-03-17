# Design Document: Multi-Page 3D Stage Strategy

**Project**: Hyfy Agency (Nexus-Glass DLS)
**Date**: 2026-03-17
**Objective**: Create distinct, high-performance 3D environments ("Stages") for each page that morph to match the specific text and aspirational value.

---

## 🏗️ Core Architecture: The "Nexus-Glass" Engine
All stages utilize a shared technical foundation for performance and brand consistency:
- **Base Material**: `MeshTransmissionMaterial` (Glassmorphism, Chromatic Aberration).
- **Primary Palette**: Deep Obsidian (#050505) + Electric Lime (#88FF66).
- **Interaction Model**: "The Cockpit" (Fixed-Pivot camera with damped mouse-follow).
- **Performance**: Instanced Rendering for high-density geometry (60+ FPS).

---

## 🎭 The 9 Stage Setups

### 1. Main Hero: "The Slipstream" (Velocity & Precision)
- **Visual**: Infinite tunnel of sharp glass shards rushing toward the camera.
- **Value**: "Launch in Half the Time."
- **Hook**: The "Sound Barrier" pulse on CTA hover.

### 2. AI Native: "The Synapse" (Organic Intelligence)
- **Visual**: Fluid, bioluminescent glass ribbons that move like neural pathways.
- **Value**: "Intelligent Apps Built to Scale."
- **Interaction**: Ribbons "charge" and pulse faster near the mouse cursor.

### 3. ERP: "The Assembly Line" (Intuitive Systems)
- **Visual**: Interlocking frosted-glass gears and conveyor ribbons.
- **Value**: "For Your Workforce / Operational Harmony."
- **Interaction**: Gears "click" into alignment and speed up with mouse movement.

### 4. SaaS: "The Stack" (Infinite Scaling)
- **Visual**: A vertical shaft where glass modules fly in to form an infinite stack.
- **Value**: "Idea to SaaS in Record Time."
- **Interaction**: Vertical mouse move triggers "Ascent" through the growing platform.

### 5. Ecommerce: "The Conversion Track" (Optimized Flow)
- **Visual**: A high-speed, 3D "highway" of perfectly polished glass segments.
- **Value**: "Beyond Template Limitations / Frictionless."
- **Interaction**: Track segments "light up" sequentially as the user "moves" toward checkout.

### 6. n8n: "The Node Network" (Automated Logic)
- **Visual**: Floating glass spheres (Nodes) connected by razor-sharp neon wires (Edges).
- **Value**: "We Build Your Workflows."
- **Interaction**: Hovering a node triggers a "Chain Reaction" pulse through the network.

### 7. CMS: "The Data Monolith" (API-First Content)
- **Visual**: A central, massive glass pillar emitting "Data-Voxels" into the void.
- **Value**: "Content-Driven At Speed."
- **Interaction**: Voxels magnetically "snap" to the cursor, representing an API fetch.

### 8. About: "The Digital Architect" (Visionary Foundry)
- **Visual**: A living 3D wireframe being constructed by a swarm of glass drones.
- **Value**: "Architects of the Digital Age."
- **Interaction**: Camera "orbits" the structure to show the depth and solidity of the build.

### 9. Contact: "The Portal" (Active Communication)
- **Visual**: Five concentric, counter-rotating glass rings around a bright lime core.
- **Value**: "Start Your Project Today."
- **Interaction**: Rings "Align" into a focused lens when the user starts the contact process.

---

## 📈 Integration & Sync
Each 3D stage is "linked" to the 2D UI through:
1. **Pulse Sync**: 3D light events trigger CSS/Framer-Motion animations on UI badges/cards.
2. **Material Sync**: 2D glass panels use the same blur/transparency values as 3D shards.
3. **Motion Sync**: Scroll-triggered velocity shifts in 3D match the page's entry animations.

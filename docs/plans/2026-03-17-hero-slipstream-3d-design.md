# Design Document: Hero "Slipstream" 3D Experience

**Project**: Hyfy Agency (Nexus-Glass DLS)
**Date**: 2026-03-17
**Aspirational Value**: Velocity & Precision ("Launch in Half the Time")
**Tech Stack**: React Three Fiber (R3F), Drei, @react-three/postprocessing, Framer Motion

---

## 🌌 1. The Visual Environment: "The Engine Room"
The hero background is an infinite, non-linear tunnel constructed from **Nexus-Glass** materials.

- **The Slipstream**: Thousands of high-fidelity, semi-transparent glass shards and data-ribbons rushing toward the camera from a distant vanishing point.
- **Materiality**: Shards use `MeshTransmissionMaterial` with high chromatic aberration (rainbow edges) and anisotropy (stretched reflections), simulating high-end optical glass.
- **The "Clear Zone"**: A focal stability area in the screen center (behind headlines) where motion is calm and sharp, representing clarity amidst high-velocity development.
- **Color Palette**: Deep Obsidian (#050505) shadows with Electric Lime (#88FF66) light-streaks and Digital Teal highlights.

## 🕹️ 2. Camera Interaction: "The Cockpit" (Fixed-Pivot)
The user is positioned as the "Pilot" of their project, establishing total control and focus.

- **Passive Rotation**: Moving the mouse only **rotates** the camera view. The camera is locked in the center of the tunnel.
- **Damped Leaning**: As the mouse moves, the camera "banks" or "tilts" slightly (using `lerp` for smooth physics).
- **Result**: The user feels like they are steering a high-speed projectile through a data-tunnel without losing their focal target (the CTA).

## ⚡ 3. The "Sound Barrier" Event (CTA Hover)
When the user hovers over the "Start Your Project" CTA, the environment "transcends" to signal a launch.

- **The Optical Snap**: For 150ms, the chaotic shards instantly "lock" into a perfectly symmetrical grid (vertical/horizontal lines of light). This symbolizes Hyfy's **Precision**.
- **The Kinetic Tear**: Immediately after the snap, shards stretch into infinity-lines (`z-scale` boost).
- **Warp Drive Effect**: Post-processing triggers a radial blur and chromatic aberration pulse, creating a visual "sonic boom."
- **The Core Pulse**: The Electric Lime core at the vanishing point expands into a massive ring of light that rushes past the camera, "clearing" the screen before settling back.

## 💎 4. Digital-Physical Materiality
The glass itself reinforces the agency's authority through high-performance "hardening."

- **Shader Hardening**: During the "Snap," glass `roughness` drops to 0.0 (mirror) and `transmission` hits 1.0 (pure clarity).
- **3D HUD**: A faint, 3D wireframe grid appears in the depth of the scene, aligning with the glass shards to represent the "Agency Architecture."
- **Pre-Flight Entrance**: On page load, shards start as long, blurred light-streaks that slowly materialize into sharp, physical glass over 2.5 seconds.

## 🛠️ 5. UX Performance & Technical Elegance
- **Instanced Rendering**: Render 1,000+ shards as a single GPU draw call for locked 60+ FPS performance.
- **Depth-of-Field (DoF)**: Focus plane is locked to the 2D Headline layer; shards near the camera and in the deep distance are blurred to create a "3D sandwich" effect.
- **Dopamine Loop**: The interaction sequence (Snap -> Warp -> Pulse) provides high-authority feedback for the primary conversion point.

# DESIGN.md — My Nail Paradise proposal

## Token frontmatter
- canvas: #FAF7F2 (paper) · ink: #101210 · accent: #D7F74B (signal lime, <5% screen, CTA-only)
- deep: #14231A (botanical dark sections) · line: rgba(16,18,16,.14)
- Type: Space Grotesk 500/600/700 (display) · Inter 400/500/600 (body) · IBM Plex Mono (labels 11px, +0.28em)
- Radius: 14px cards · pill buttons/CTAs · arch (200px top) on hero art frame
- Motion: cubic-bezier(0.16,1,0.3,1) entrances, stagger 0.1s, 0.8s; hover ≤1.05/150–300ms; prefers-reduced-motion branch

## Overview
Premium neighbourhood nail-salon proposal for a real Hougang one-stop beauty salon.
Mood (3 words): serene, botanical, editorial. The "paradise" name becomes a garden
visual language — layered botanical SVG, arch frames, editorial Space Grotesk headlines.

## Colors
Paper canvas with near-black ink; ONE chromatic accent (lime) reserved for CTAs,
badges, marquee stars and focus states. Dark botanical-green sections alternate for rhythm.

## Typography
Display H1 clamp(44px,7.2vw,96px), lh 1.02, tracking −0.03em, hand-broken 2 lines.
Italic serif-style emphasis via font-style on display (no bold emphasis in copy).
Mono eyebrow labels 11px uppercase +0.28em at 60% ink.

## Layout
- index: asymmetric hero (text left / arch art right) → marquee strip → 3 service cards →
  dark 3-speed split → 3-step how-it-works → dark centered final CTA
- services: tabbed ritual selector (Express/Classic/Spa/Art) + 9-card dark menu grid
- gallery: 4-col masonry-style art tiles with hover lift + shade reveal
- pricing: Hands/Feet/All filter tabs + 9 price cards (1 featured dark)
- about: editorial split + dark 3-step ritual + centered visit CTA
- booking: 3-step flow (service grid → date/time → details) with progress bar + success state
- contact: big-type address/phone + hours table + walk-ins card + dark CTA

## Components
btn (lime, 2px ink border, 4px hard shadow, pill), ghost btn, card (2px ink border,
hover lift+shadow), tag pill, tab-btn, steps (numbered top-border), opt (selectable),
field (label + input + inline error), consent checkbox, sample-note (dashed),
demo-ribbon (honesty banner), marquee.

## Shapes / Elevation
Hard offset shadows (4–8px solid ink) instead of blurs; arch frame on hero art;
no gradient meshes, no glow orbs (banned).

## Do's and Don'ts
- DO: one accent only; real business facts (address/hours/phones from listing);
  sample-label every illustrative price; consent on the booking form.
- DON'T: pink-salon cliché, fake reviews, invented stats, stock-photo endorsements.

## Known Gaps (honesty section)
- No real photography: hero/gallery use SVG/CSS illustration, clearly labeled as style samples.
- Prices are illustrative samples (except the advertised $59.90 lash rate) — salon confirms real menu.
- Booking form is a front-end concept flow; live site needs a real submission endpoint + PDPA review.
- No screenshots taken (no screenshot pipeline in this environment) — QA was static + code-checked.
- Chinese/Malay/Tamil localization not included (English-first proposal).

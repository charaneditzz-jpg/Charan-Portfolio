---
version: 1.0.0
name: Rowdy Cinema & Stills
description: Design tokens and specification for Charan Golkonda's Cinematography and Photography Portfolio, inspired by rowdy.co.
colors:
  bg: "#090C0E"
  bg-subtle: "#0F1418"
  surface: "#141B20"
  surface-hover: "#1D262E"
  surface-glass: "rgba(20, 27, 32, 0.75)"
  border: "rgba(255, 255, 255, 0.08)"
  border-strong: "rgba(255, 255, 255, 0.2)"
  border-amber: "rgba(234, 160, 54, 0.4)"
  text: "#FFFFFF"
  text-muted: "#8B99A4"
  text-dim: "#55636E"
  amber: "#EAA036"
  amber-glow: "rgba(234, 160, 54, 0.25)"
  amber-soft: "rgba(234, 160, 54, 0.12)"
  cyan: "#7FA8C4"
typography:
  display-hero:
    fontFamily: "Fjalla One, -apple-system, sans-serif"
    fontSize: "clamp(3.4rem, 10vw, 9.2rem)"
    fontWeight: 400
    lineHeight: 0.88
    letterSpacing: "0.02em"
    textTransform: "uppercase"
  display-h2:
    fontFamily: "Fjalla One, -apple-system, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3.8rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "0.03em"
    textTransform: "uppercase"
  mono-badge:
    fontFamily: "Fragment Mono, monospace"
    fontSize: "0.74rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.08em"
    textTransform: "uppercase"
  body-md:
    fontFamily: "Inter, -apple-system, sans-serif"
    fontSize: "clamp(14px, 1.05vw, 16px)"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: "4px"
  md: "8px"
  full: "9999px"
spacing:
  gutter: "clamp(16px, 4vw, 64px)"
  band: "clamp(64px, 8vw, 130px)"
components:
  pill-nav:
    backgroundColor: "rgba(9, 12, 14, 0.85)"
    backdropFilter: "blur(16px)"
    border: "1px solid {colors.border}"
    rounded: "{rounded.full}"
    padding: "6px 16px"
  reel-card:
    backgroundColor: "{colors.surface}"
    border: "1px solid {colors.border}"
    rounded: "{rounded.md}"
    aspectRatio: "2.39 / 1"
  project-card:
    backgroundColor: "{colors.surface}"
    border: "1px solid {colors.border}"
    rounded: "{rounded.md}"
    overflow: "hidden"
  cta-button:
    backgroundColor: "{colors.text}"
    textColor: "{colors.bg}"
    rounded: "{rounded.sm}"
    padding: "10px 20px"
---

# Charan Golkonda — Rowdy Cinema & Stills Design Specification

## Overview
A hyper-refined, high-energy portfolio for **Charan Golkonda**, Director of Photography and Commercial/Editorial Photographer based in Hyderabad. The visual language is directly adapted from the award-winning **rowdy.co** creative studio format:
- Deep obsidian pitch background (`#090C0E`).
- Kinetic condensed typography (`Fjalla One`) for all-caps titles.
- Strict technical metadata styling (`Fragment Mono`) for camera specs, coordinates, aspect ratios, and disciplines.
- Electric amber (`#EAA036`) accents simulating anamorphic lens flares and recording indicators.
- Seamless marquee ticker tape and 9:16 vertical video shorts for digital and broadcast reels.

## Colors
- **Canvas Base (`#090C0E`):** Pure deep charcoal-black that allows photographic color temperatures and cinematographic skin tones to pop without background glare.
- **Surfaces (`#141B20` to `#1D262E`):** Multi-layered card backgrounds with subtle borders to establish depth.
- **Electric Amber (`#EAA036`):** The primary interactive accent. Used for live recording beacons, playheads, category highlights, and cursor hover reactions.
- **Slate Text Hierarchy (`#FFFFFF`, `#8B99A4`, `#55636E`):** 3-tier typographic contrast ensuring maximum legibility.

## Typography
- **Headlines:** `Fjalla One` (Google Fonts). Uncompromising vertical tension and editorial authority.
- **Telemetry & Labels:** `Fragment Mono` (Google Fonts). Precision camera and timecode readouts.
- **Editorial Body:** `Inter` (Google Fonts). Clean, legible descriptions for project case studies.

## Layout & Composition
- Max container width: `1560px` with fluid responsive padding `clamp(16px, 4vw, 64px)`.
- Vertical rhythm: `clamp(64px, 8vw, 130px)` between major content sections.
- Dynamic 2-column project grid with asymmetric heights for editorial pacing.
- Mobile-first 9:16 vertical grid (`320px` minimum column width) for short reels.

## Components
- **Floating Header:** Glassmorphic navigation bar with real-time status pill (`AVAILABLE FOR BOOKINGS`), sound toggle, and high-contrast "LET'S TALK" CTA.
- **Hero Cinema Reel:** 2.39:1 widescreen viewport with play trigger, timecode telemetry, and animated gradient scrim.
- **Marquee Band:** Continuous marquee ticker with diagonal dividers.
- **Discipline Sections:** Structured around Charan's 4 core disciplines (01 Fashion, 02 Architecture, 03 Product, 04 Commercial).
- **Interactive Lightbox & Case Study:** Full-screen modal with image magnification, EXIF camera specs, and swipeable carousel.
- **Work With Me Suite:** Quick-copy contact badges with toast notifications, Behance showcase link, and direct WhatsApp/Phone launch.

## Do's and Don'ts
- **DO** keep lines sharp and borders crisp (1px with translucent white).
- **DO** use real camera telemetry (e.g. 2.39:1, 4K UHD, ARRI Alexa Mini LF, Cooke Anamorphic, 24 FPS).
- **DON'T** use soft rounded bubbly corners. Keep corners architectural (`4px` to `8px`).
- **DON'T** use purple gradients or generic SaaS aesthetics. Respect the cinematic Rowdy dark room atmosphere.

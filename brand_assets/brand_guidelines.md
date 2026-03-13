# Hartwood Landscapes — Brand Guidelines

## Brand Name
**Hartwood Landscapes**
Tagline: "Crafting outdoor spaces that inspire"

## Brand Personality
Premium but approachable. British heritage with modern sensibility. Professional, warm, trustworthy. Think: your trusted landscape architect who happens to have impeccable taste.

## Color Palette

### Primary Colors
| Name | Hex | Usage |
|------|-----|-------|
| Sage Green | `#B5BFB0` | Backgrounds, accents, CTAs |
| Dark Sage | `#8A9A84` | CTA buttons, active states |
| Forest | `#3D5A3E` | Dark accents, hover states |

### Neutral Colors
| Name | Hex | Usage |
|------|-----|-------|
| Charcoal | `#2C2C2C` | Primary text, headings |
| Warm Grey | `#6B6B6B` | Body text |
| Light Grey | `#F5F3EF` | Off-white backgrounds |
| White | `#FFFFFF` | Clean backgrounds |
| Cream | `#F9F7F4` | Alternating section bg |

### Accent
| Name | Hex | Usage |
|------|-----|-------|
| Warm Gold | `#C9A96E` | Premium accents, badges |

## Typography

### Headings
- **Font**: Playfair Display (Google Fonts)
- **Weight**: 400 (Regular), 500 (Medium)
- **Style**: Elegant serif — matches Luxury Gardens' editorial feel
- **Transform**: Sentence case (not all-caps like GreenScape)

### Body
- **Font**: DM Sans (Google Fonts)
- **Weight**: 400 (Regular), 500 (Medium)
- **Size**: 16px base
- **Line Height**: 1.7

### Accent/Labels
- **Font**: DM Sans
- **Weight**: 500
- **Transform**: UPPERCASE with wide letter-spacing (3px)
- **Size**: 12-13px

## Typography Scale
```
Hero Title:     clamp(36px, 5vw, 72px) — Playfair Display 400
Section Title:  clamp(28px, 3.5vw, 48px) — Playfair Display 400
Card Title:     clamp(20px, 2vw, 28px) — Playfair Display 400
Body:           16px — DM Sans 400
Small:          14px — DM Sans 400
Label:          12-13px — DM Sans 500 uppercase tracking-wider
```

## Button Styles
- **Primary CTA**: Sage green bg (#B5BFB0), dark text (#2C2C2C), rounded-full, arrow icon
- **Secondary CTA**: Transparent border, dark text, rounded-full
- **Hover**: Darken to Dark Sage (#8A9A84), smooth transition

## Layout Principles
- **Max width**: 1280px container
- **Section padding**: 80px-120px vertical
- **Grid gaps**: 32-48px
- **No sidebar strip** (unlike GreenScape)
- **Standard sticky navbar** with dropdowns
- **Clean whitespace** — generous breathing room
- **Alternating backgrounds**: White → Cream → White → Sage

## Image Treatment
- High-quality garden/landscape photography
- Natural, warm tones
- Aspect ratios: 16:10 for heroes, 4:3 for cards, 1:1 for team
- Subtle hover zoom on cards (scale 1.05)

## Animation Guidelines (Subtle)
- Fade-up reveals on scroll (opacity + translateY)
- Smooth image zoom on hover
- No custom cursor
- No sidebar strip
- No complex GSAP carousels — simple, clean transitions
- Duration: 0.6-0.8s, ease: power2.out

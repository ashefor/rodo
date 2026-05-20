# Rodo Lens · design system

A locked design system for the Rodo Lens website (Next.js 16 · Tailwind v4 · framer-motion). This is the source of truth — subsequent design work on this project should defer to this file. The diversification rule is *inverted* on a system-managed project: pages share the system, not differ from each other.

---

## Identity

- **Brand** · Rodo Lens — visual storyteller working in reels, short film, and event content. Operator: Divine. Based in Abuja & Lagos, available worldwide.
- **Audience** · Prospective clients hiring for weddings, birthdays, real estate, brand days, fashion shoots.
- **Use case** · Browse the work. Portfolio-led. The whole site funnels into case-work; the contact form is a secondary destination.
- **Tone** · Atmospheric-cinematic. Restrained. Mobile-first. Honest about scope (one person, two phones, a small kit).
- **Voice** · First-person *inside* the brand frame — "At Rodo Lens, I…". Signed by Divine.

## Genre

`atmospheric-cinematic` — dark paper, sans display, video-led. Type is restrained and serves the footage.

---

## Macrostructure per route

| Route | Macrostructure | What carries the page |
| --- | --- | --- |
| `/` Home | **Marquee Hero** | A silent looping reel under restrained type. Four numbered sections beneath (01 services · 02 selected work · 03 in their words · 04 what next). |
| `/about` | **Letter** | First-person letter from Rodo Lens, signed *Divine*. Three short chapters: I/the brief · II/the method · III/the handover. |
| `/portfolio` | **Catalogue** | Numbered catalogue header (`No. <count>`), filter row, masonry grid with hover-veil + play badge. |
| `/contact` | **Bookend** | Typographic statement panel left; hairline-underlined form right. |
| `404` | Specimen-tight | Single-screen display headline, accent on `out of focus`, one back-link. |

---

## Typography

| Role | Face | Notes |
| --- | --- | --- |
| Display | **Bricolage Grotesque** (variable, via `next/font`) | Hero headlines, section heads, blockquotes. Variable axes: `opsz` 24–96, `wdth` 100. `letter-spacing: -0.02em`. |
| Body | **Inter** (variable, via `next/font`) | Paragraphs, captions, navigation. Feature settings: `"ss01"`, `"cv11"`. |
| Utility | **JetBrains Mono** (via `next/font`) | Small uppercase utility — timecodes, eyebrows, section numbers, meta. `.font-mono-utility`: 11px / 0.08em / uppercase / `--color-ink-dim`. |

### Scale (fluid, locked)

```
--text-display-xl  clamp(3.5rem, 9vw, 8rem)     hero headlines
--text-display     clamp(2.75rem, 6.5vw, 5.5rem)  section heads
--text-display-s   clamp(2rem, 4.5vw, 3.5rem)   pulled quotes
--text-4xl         clamp(1.875rem, 3.5vw, 2.5rem)
--text-3xl         clamp(1.5rem, 2.5vw, 1.875rem)
--text-base        1rem                          body
--text-micro       0.6875rem                     utility caps
```

### Hero-headline sizing rule

≤ 50 chars → `--text-display-xl` · 51–90 chars → `--text-display` · > 90 chars → rewrite shorter or cap at `--text-4xl`. Bricolage Grotesque already has weight contrast — never combine with another bold weight.

### Forbidden type tells

- Archivo Black (retired). Do not reintroduce.
- Plus Jakarta Sans (retired). The brand-utility role belongs to JetBrains Mono now.
- All-caps body type. Caps live only in `.font-mono-utility`.
- Watermark display type (`text-[25vw]` etc.). The reel is the visual; type does not become wallpaper.

---

## Colour (OKLCH-only)

```
--color-paper        oklch(14% 0.008 60)   page background
--color-paper-2      oklch(18% 0.010 60)   cards, image wells
--color-paper-3      oklch(22% 0.012 60)   raised cards
--color-paper-edge   oklch(28% 0.012 60)   hairline rules
--color-ink          oklch(96% 0.008 60)   primary type
--color-ink-dim      oklch(74% 0.010 60)   secondary type, body lede
--color-ink-quiet    oklch(56% 0.010 60)   placeholders, captions
--color-accent       oklch(60% 0.16 39)    terracotta — single accent
--color-accent-hover oklch(67% 0.17 39)
--color-focus        oklch(70% 0.16 39)    focus rings (≥ 3:1 contrast)
--color-danger       oklch(58% 0.18 25)
--color-success      oklch(64% 0.12 145)
```

### Diversification axes (locked for the project)

- **Paper band** · dark (L 14 %)
- **Display style** · sans-grotesque
- **Accent hue** · warm-terracotta (h 39°)

These axes are *the* identity. Do not introduce a second accent. Purple `#5b00df`, orange `#FF8D28`, and pink `#fff5f8` from the previous palette are retired.

### Accent discipline

Terracotta appears only in: hero one-word emphases, CTA button fill, active filter underline, link hover, focus ring, form-validation success/error states (success uses `--color-success`, not terracotta). Cap at ~3 % of any given page's pixel real estate.

---

## Layout & space

- 4-pt scale (`--space-1` through `--space-32`).
- Container max-width 1280 px (`max-w-7xl`), gutters `px-6 md:px-10`.
- Section rhythm: `py-24 md:py-36` for content sections, `py-32 md:py-44` for closing CTA.
- Section transitions: `.hairline-top` between major sections (1 px `--color-paper-edge`). No drop shadows on the page surface itself.
- Image wells: `--radius-figure` (2 px). Cards: `--radius-card` (4 px). Pills: `--radius-pill` (9999 px) — used only on form radio dots.
- Mobile-safe: `html` + `body` have `overflow-x: clip`; display headers carry `overflow-wrap: anywhere`; grid tracks with images use `minmax(0, 1fr)`.

---

## Motion

```
--ease-out    cubic-bezier(0.22, 0.61, 0.36, 1)
--ease-in     cubic-bezier(0.55, 0.06, 0.68, 0.19)
--ease-in-out cubic-bezier(0.65, 0, 0.35, 1)
--dur-fast    150ms
--dur-base    250ms
--dur-slow    400ms
```

**Microinteraction primitives (only three allowed across the site):**

1. **Section reveal** · `opacity 0 → 1` + `translateY(8px) → 0` over `--dur-slow`, `--ease-out`, on `whileInView`. Once per element. Only at section openings — never on every paragraph or every grid tile.
2. **Link / icon hover** · 150 ms color transition on text + 0.5 px arrow translate. No scale, no rotation.
3. **Tile hover** · 700 ms `scale(1.02)` on the image + cross-fade veil. Never on the wrapper card itself.

**Banned motion:**

- `whileHover={{ scale: 1.05 }}` on buttons — buttons change colour, not size.
- Spring-overshoot on UI state. Springs only inside the modal (damping 25, stiffness 200).
- Marquees. The double-row testimonial marquee is gone.
- `animate-pulse-glow`, `animate-float`, `animate-marquee-*` keyframes.
- Background dotted matrices, gradient blobs, decorative blur orbs.

**Reduced motion:** global `prefers-reduced-motion: reduce` collapses durations to 0.01 ms. Honour it — every animated component must keep working at zero motion.

**Focus ring:** instant, never animated. 2 px solid `--color-focus`, offset 3 px, radius 2 px.

---

## Components

### Navbar (`N7`-shaped — quiet bar)

- Top-aligned, transparent until scroll; on `scroll > 16`, fills with `oklch(14% 0.008 60 / 0.78)` + `backdrop-blur-md` + `hairline-bottom`.
- Left: serif-grotesque wordmark `Rodo Lens` + mono-utility `· est. 2020`.
- Right (desktop): three text links separated by mid-dot `·` — `Services · Portfolio · Contact`. No pill, no pulsing dot.
- Mobile: `Menu` icon → full-screen overlay menu (display-sized links).

### Footer (`Ft5` Statement)

- Large display sign-off (`Frames held, then sent.`) → short paragraph → 4-column meta row → 1-line copyright.
- No 4-column link grid.

### Buttons

- Primary: `--color-accent` fill, paper-coloured ink, `--radius-figure` (2 px). Hover = `--color-accent-hover`. Disabled = 50 % opacity.
- Outline: 1 px `--color-paper-edge` border, transparent fill. Hover = accent border + accent ink.
- Ghost: inline-link styling for tertiary actions.

### Hero CTAs (text+arrow)

`<Link className="group inline-flex items-center gap-2">` → `<span border-b>{label}</span>` + `<ArrowUpRight />`. Hover: border colour + 0.5 px arrow translate. No background.

### Section heading

`font-mono-utility` eyebrow → display headline → optional `text-ink-dim` subtitle. Optionally numbered (`01 ·` prefix). **Never** stack eyebrow-left-of-heading; eyebrow always sits *above* the heading in the same column.

### Form fields

Underline-only inputs. Border = `--color-paper-edge`, focus = `--color-focus`, error = `--color-danger`. Labels in mono-utility, hung above. Validation appears inline below the field — never replaces the field.

### Cards

`.card-quiet` = `--color-paper-2` fill + 1 px `--color-paper-edge` border, `--radius-card`. No glassmorphism. No drop shadow.

---

## Copy voice

- First-person, brand-frame ("At Rodo Lens, I…"). Signed by Divine on the About page.
- Verbs over adjectives. *Hold a moment* > *capture an unforgettable experience*.
- No "luxury", "premium", "elevated", "cinematic memories", "exclusive", "unforgettable". Those are slop words.
- No invented metrics. *"+47 % engagement"*, *"trusted by 50 brands"* — banned. If there are no real numbers, use no numbers.
- No invented backstory. The About chapters in `StorySection.tsx` are honest placeholders — replace with Divine's own words before launch. Do not add invented dates, client names, or specific anecdotes.
- Numbered sections use roman or padded-arabic (`I`, `II`, `III` / `01`, `02`, `03`) — never spelled-out (`One`, `Two`).
- Use real testimonials (Amaka, Chidi, Fatima, Kelechi, Tunde, Blessing, Obinna, Zainab) verbatim — do not paraphrase, do not invent more.

---

## What was retired

- Archivo Black + Plus Jakarta Sans display faces.
- Purple `#5b00df` + orange `#FF8D28` accents.
- The marquee testimonial double-row.
- The `services-wrapper` `:has()` grid-shrink hover trick.
- `.glass`, `.shadow-ambient`, `.shadow-float`, `.gradient-primary` decorative classes.
- Invented "Trusted by" logo bar in the hero.
- "Open to work" pulsing-green-dot in the navbar.
- The full-bleed `RODO` background watermark.
- "// HIRE ME" code-comment-styled CTA.
- "Sparkles" lucide icon in the CTA.
- Decorative dot-matrix backgrounds + gradient blobs in story sections.
- `RL` wordmark in the footer.
- The `<TestimonialMarquee>` two-row infinite scroll (component kept, behaviour replaced with one pulled quote + 3-tile attribution stack).

---

## Slop-test stance

Run universal gates (visual / microinteraction / contrast / a11y / typography / mobile-safety). The dark-page Marquee Hero variant of slop-test gates 36, 59, 61, 62, 63, 64 has been validated. No invented metrics (gate 56), no re-drawn chrome (gate 57), tokens are locked (gate 58), no tag-left/heading-right hanging headers (gate 66) — section eyebrows always stack above the heading.

---

## Exports

See [`tokens.css`](./tokens.css) at the project root for a portable OKLCH token block. When this project gains Tailwind v4 `@theme` external use, regenerate per `references/export-formats.md`.

---

*Hallmark · macrostructures: Marquee Hero (/) · Letter (/about) · Catalogue (/portfolio) · Bookend (/contact)*
*genre: atmospheric-cinematic · diversification axes: dark · sans-grotesque · warm-terracotta*
*pre-emit critique: P5 H4 E5 S4 R5 V5*

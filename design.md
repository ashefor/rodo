# Rodo Lens · design system

Locked design system for the Rodo Lens website (Next.js 16 · Tailwind v4 · framer-motion). Source of truth — subsequent design work defers to this file. The diversification rule is *inverted* on system-managed projects: pages share the system, not differ from each other.

**Current direction: Reel · iteration 2** — cinematic, italic-serif display, video on every section it earns. Replaces the earlier sans-grotesque (Bricolage Grotesque) direction. The dark theming, terracotta accent, mobile-first videography focus, and editorial-restraint stance are unchanged from iteration 1.

---

## Identity

- **Brand** · Rodo Lens — visual storyteller working in reels, short film, and event content. Operator: Divine. Based in Abuja & Lagos, available worldwide.
- **Audience** · Prospective clients hiring for weddings, birthdays, real estate, brand days, fashion shoots.
- **Use case** · Browse the work. Portfolio-led. The whole site funnels into case-work; the contact form is a secondary destination.
- **Tone** · Atmospheric-cinematic. Restrained. Mobile-first. Honest about scope.
- **Voice** · First-person *inside* the brand frame — "At Rodo Lens, I…". Signed by Divine.

## Genre

`atmospheric-cinematic` — dark paper, italic-serif display, video-led. Type is restrained and serves the footage.

---

## Macrostructure per route

| Route | Macrostructure | What carries the page |
| --- | --- | --- |
| `/` Home | **Marquee Hero** | Full-bleed silent reel with dark vignette. Top meta strip absolutely-positioned; display-italic headline overlaid in the lower half; CTA stack and a closing hairline bar. Four numbered sections follow (01 services · 02 selected work · 03 in their words · 04 what next). |
| `/about` | **Letter** | First-person letter from Rodo Lens, signed *Divine*. Three short chapters: I / the brief · II / the method · III / the handover. |
| `/portfolio` | **Catalogue** | Editorial display headline (`The work, in motion.`). Filter row + masonry grid of static posters. IG-source items click out to the IG permalink (top-right `ig` chip); self-hosted items open the VideoModal. No hover-to-play — IG embeds + Drive shares don't support it reliably. |
| `/contact` | **Bookend** | Typographic statement panel left; hairline-underlined form right. `?from=<service-id>` prefills the message. |
| `404` | Specimen-tight | Single-screen italic-display headline; one back-link. |

**Navigation:** `Services · Portfolio · Contact` (3 items). About and process content reach via in-page CTAs or the footer.

---

## Typography

| Role | Face | Notes |
| --- | --- | --- |
| Display | **Fraunces** (variable, via `next/font/google`) | Hero headlines, section heads, blockquotes. Variable axes: `opsz` 9–144, `SOFT` 0–100. **Italic is the default emotional voice** — one or two italic words per heading carries the warmth. Letter-spacing tightens to `-0.025em` on display sizes. |
| Body | **Inter** (via `next/font/google`) | Paragraphs, captions, navigation. Feature settings: `"ss01"`, `"cv11"`. |
| Utility | **JetBrains Mono** (via `next/font/google`) | Small uppercase utility — timecodes, eyebrows, section numbers, meta. `.font-mono-utility`: 11px / 0.08em / uppercase / `--color-ink-dim`. |

### Italic-display discipline

The default Fraunces weight is **roman**. Italic is reserved for *one phrase per heading* — the warm emotional fragment, almost always set in `--color-accent`. Examples:

- *"The moment, **then again.**"* (hero)
- *"Five rooms, **one lens.**"* (services)
- *"A few frames **from this year.**"* (portfolio preview)
- *"Tell me about the **moment you want held.**"* (CTA)
- *"Frames held, **then sent.**"* (footer)

Headings with *no* italic feel hollow under this direction; headings with *more than one* italic clause feel decorative. One italic clause per heading. Always in accent colour.

### Scale (fluid, locked)

```
--text-display-xl  clamp(3.5rem, 9.5vw, 8.5rem)     hero headlines (Fraunces opsz 144)
--text-display     clamp(2.75rem, 6.5vw, 5.5rem)    section heads
--text-display-s   clamp(2rem, 4.5vw, 3.5rem)       pulled quotes
--text-4xl         clamp(1.875rem, 3.5vw, 2.5rem)
--text-3xl         clamp(1.5rem, 2.5vw, 1.875rem)
--text-base        1rem                              body
--text-micro       0.6875rem                         utility caps
```

### Hero-headline sizing rule

≤ 50 chars → `--text-display-xl` · 51–90 chars → `--text-display` · > 90 chars → rewrite shorter or cap at `--text-4xl`. Fraunces' opsz axis automatically tightens display weight — use `opsz 144` for hero, `opsz 24` for body sizes.

### Forbidden type tells

- Archivo Black (retired iteration 0).
- Bricolage Grotesque (retired iteration 1).
- Plus Jakarta Sans (retired). The brand-utility role belongs to JetBrains Mono.
- All-caps body type. Caps live only in `.font-mono-utility`.
- Watermark display type (`text-[25vw]` etc.). The reel is the visual; type does not become wallpaper.
- More than one italic clause per heading. The italic is precious; don't dilute it.

---

## Colour (OKLCH-only)

```
--color-paper        oklch(13% 0.010 250)   page background — slight cool tilt
--color-paper-2      oklch(17% 0.012 250)   cards, image wells
--color-paper-3      oklch(21% 0.013 250)   raised cards
--color-paper-edge   oklch(27% 0.013 250)   hairline rules
--color-ink          oklch(96% 0.005 250)   primary type
--color-ink-dim      oklch(73% 0.008 250)   secondary type, body lede
--color-ink-quiet    oklch(55% 0.010 250)   placeholders, captions
--color-accent       oklch(63% 0.165 39)    terracotta — single accent
--color-accent-hover oklch(70% 0.175 39)
--color-focus        oklch(72% 0.165 39)    focus rings (≥ 3:1 contrast)
--color-danger       oklch(60% 0.18 25)
--color-success      oklch(64% 0.12 145)
```

### Diversification axes (locked for the project)

- **Paper band** · dark (L 13 %, slight cool tilt)
- **Display style** · italic-serif (Fraunces)
- **Accent hue** · warm-terracotta (h 39°)

The cool paper × warm accent is intentional — the slight blue-shift of the surface makes the terracotta read warmer without changing its hue value.

### Accent discipline

Terracotta appears only in: hero italic emphasis, section-head italic tails, CTA button fill, active filter underline, link hover, focus ring, form-validation success. Cap at ~3 % of any given page's pixel real estate.

---

## Layout & space

- 4-pt scale (`--space-1` through `--space-32`).
- Container max-width 1280 px (`max-w-7xl`), gutters `px-6 md:px-10`.
- Section rhythm: `py-24 md:py-36` for content sections, `py-32 md:py-44` for closing CTA.
- Section transitions: `.hairline-top` between major sections (1 px `--color-paper-edge`). No drop shadows on the page surface itself.
- Image / video wells: `--radius-figure` (2 px). Cards: `--radius-card` (4 px). Pills: `--radius-pill` (9999 px) — only on form radio dots.
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
--dur-reveal  500ms
```

**Three microinteraction primitives (locked — no fourth):**

1. **Scroll reveal** · `opacity 0 → 1` + `translateY(8px → 0)` over `--dur-slow`, `--ease-out`, on `whileInView` with `margin: "-80px"`. Once per element. At section openings and at hairline-row entries. Stagger by 40–50 ms across grouped items (service rows, portfolio tiles, story chapters).
2. **Link / icon hover** · 150 ms colour transition on text + 0.5 px arrow translate. No scale, no rotation.
3. **Tile hover** · 250 ms cross-fade from poster to autoplay reel (`opacity` only on the video element layered over the still). Plus 700 ms `scale(1.02)` on the poster image. Never on the wrapper card itself.

**Page transition** (separate from microinteractions, lives in `src/app/template.tsx`): 350 ms cross-fade + 8 px translateY on route change. `--ease-out`.

**Banned motion:**

- `whileHover={{ scale: 1.05 }}` on buttons — buttons change colour, not size.
- Spring-overshoot on UI state. Springs only inside the modal (damping 25, stiffness 200).
- Marquees. The double-row testimonial marquee is gone.
- `animate-pulse-glow`, `animate-float`, `animate-marquee-*` keyframes.
- Background dotted matrices, gradient blobs, decorative blur orbs.
- Letter-by-letter kinetic type. (Considered for direction "Cinematic"; out of scope at the chosen "Considered" motion level.)

**Reduced motion:** global `prefers-reduced-motion: reduce` collapses durations to 0.01 ms. Honour it — every animated component must keep working at zero motion.

**Focus ring:** instant, never animated. 2 px solid `--color-focus`, offset 3 px, radius 2 px.

---

## Components

### Navbar (`N7`-shaped — quiet bar)

- Top-aligned, transparent until scroll; on `scroll > 16`, fills with `oklch(13% 0.010 250 / 0.78)` + `backdrop-blur-md` + `hairline-bottom`.
- Left: `<Logo variant="lockup" size={26} />` — SVG aperture mark + Fraunces-italic SVG wordmark.
- Right (desktop): three text links separated by mid-dot `·` — `Services · Portfolio · Contact`. No pill, no pulsing dot.
- Mobile: `Menu` icon → full-screen overlay menu (Fraunces-italic display-sized links).

### Logo

- `src/components/ui/Logo.tsx` — three variants: `mark` (lens-aperture symbol only) · `wordmark` (Fraunces italic SVG text only) · `lockup` (default — both).
- Mark: 32×32 SVG; six-blade aperture iris on a thin lens housing. Uses `currentColor`.
- Favicon: `src/app/icon.svg` — same mark on a dark rounded square.

### Footer (`Ft5` Statement)

- Large display sign-off (`Frames held,` followed by italic `then sent.`) → short paragraph → 4-column meta row → 1-line copyright row with the lens-aperture mark.

### Buttons

- Primary (filled): `--color-accent` fill, paper-coloured ink, `--radius-figure` (2 px). Hover = `--color-accent-hover`. Disabled = 50 % opacity.
- Outline: 1 px `--color-paper-edge` border, transparent fill. Hover = accent border + accent ink.
- Ghost: inline-link styling for tertiary actions.

### Hero CTAs (text+arrow)

`<Link className="group inline-flex items-center gap-2">` → `<span border-b>{label}</span>` + `<ArrowUpRight />`. Hover: border colour + 0.5 px arrow translate. No background.

### Section heading

`<SectionHeading title="Five rooms one lens" />` with `italicTail` default true: splits on the last word and italicises it in accent. Optional eyebrow (`label`) and `number` stack above the heading. **Never** stack eyebrow-left-of-heading; eyebrow always sits *above* the heading in the same column.

### Hero (full-bleed reel)

`src/components/home/HeroSection.tsx` — full-bleed silent reel with a 3-stop vertical vignette (oklch(13% 0.010 250 / 0.65 → 0.50 → 0.95)). Top meta strip absolutely-positioned; display-italic headline overlaid lower-half; CTA stack and closing hairline bar (`reel · loop` / `scroll ↓`). No invented timecode.

### Selected Work (live IG feed grid)

`src/components/home/PortfolioPreview.tsx` — async server component. Pulls the latest 6 video posts from `getInstagramVideos()`; falls back to `PORTFOLIO_ITEMS` when `INSTAGRAM_ACCESS_TOKEN` is unset. 3-up grid (1-col mobile → 2-col sm → 3-col lg) of 4:5 poster tiles. **No hover-to-play** — IG content + Drive shares can't autoplay reliably; the static poster does the work. Click → IG permalink (new tab) for IG-source items, `/portfolio` for fallback items. Header carries a `live from @rodos_lens_` mono label when the feed is live. Closing hairline + 'Open Instagram →' link confirms the feed source.

### Services row (hover-to-play)

`src/components/home/ServicesScroll.tsx` — numbered hairline rows. Each row is a `<Link>` to `/contact?from=<service-id>`. On hover:

- Number + title + arrow all shift to accent.
- If `service.videoUrl` is set, a 280 × 158 reel preview pins right of the row and autoplays muted.
- If `videoUrl` is empty, the hover is typography-only (no broken-looking placeholder).

To add a reel preview per service: set `videoUrl: "/videos/services/<id>.mp4"` in `src/lib/constants.ts`. The commented-out lines are already there.

### Portfolio tile (hover-to-play)

`PortfolioGrid` and home `PortfolioPreview` tiles both layer a `<video>` over the poster `<img>`. On hover: video opacity goes 0 → 1 (250 ms) and `.play()` is called. On leave: video pauses, opacity 0. Works only when `videoUrl` is set on the portfolio item; otherwise the still does the work.

### Form fields

Underline-only inputs. Border = `--color-paper-edge`, focus = `--color-focus`, error = `--color-danger`. Labels in mono-utility, hung above. Validation appears inline below the field. ContactForm reads `?from=<service-id>` and prefills the message with `"I'd like to discuss <service> coverage. "`.

### Cards

`.card-quiet` = `--color-paper-2` fill + 1 px `--color-paper-edge` border, `--radius-card`. No glassmorphism. No drop shadow.

---

## Copy voice

- First-person, brand-frame ("At Rodo Lens, I…"). Signed by Divine on the About page.
- Verbs over adjectives. *Hold a moment* > *capture an unforgettable experience*.
- No "luxury", "premium", "elevated", "cinematic memories", "exclusive", "unforgettable". Those are slop words.
- No invented metrics. *"+47 % engagement"*, *"trusted by 50 brands"* — banned. If no real numbers exist, no numbers.
- No invented backstory. The About chapters in `StorySection.tsx` are honest placeholders — replace with Divine's own words before launch.
- Numbered sections use roman or padded-arabic (`I`, `II`, `III` / `01`, `02`, `03`) — never spelled-out.
- Use real testimonials verbatim — do not paraphrase, do not invent more.

---

## What was retired

- Archivo Black + Plus Jakarta Sans (iteration 0).
- Bricolage Grotesque display (iteration 1).
- Purple `#5b00df` + orange `#FF8D28` decorative accents.
- The marquee testimonial double-row.
- The `services-wrapper` `:has()` grid-shrink hover trick.
- `.glass`, `.shadow-ambient`, `.shadow-float`, `.gradient-primary` decorative classes.
- Invented "Trusted by" logo bar in the hero.
- "Open to work" pulsing-green-dot in the navbar.
- The full-bleed `RODO` background watermark.
- "// HIRE ME" code-comment-styled CTA.
- "Sparkles" lucide icon in the CTA.
- Decorative dot-matrix backgrounds + gradient blobs in story sections.
- `RL` wordmark in the footer (replaced by the Logo mark).
- The static thumbnail "illustrations" pinned to the services rows (replaced by hover-to-play reel previews on a videoUrl-driven slot).

---

## Slop-test stance

Run universal gates (visual / microinteraction / contrast / a11y / typography / mobile-safety). Genre-scoped overrides for `atmospheric`: radial-bloom gate loosened (none used anyway). No invented metrics (gate 56), no re-drawn chrome (gate 57), tokens are locked (gate 58), no tag-left/heading-right hanging headers (gate 66) — section eyebrows always stack above the heading.

---

## Exports

See [`tokens.css`](./tokens.css) at the project root for a portable OKLCH token block.

---

*Hallmark · macrostructures: Marquee Hero (/) · Letter (/about) · Catalogue (/portfolio) · Bookend (/contact)*
*genre: atmospheric-cinematic · direction: Reel · iteration: 2*
*diversification axes: dark · italic-serif · warm-terracotta*
*pre-emit critique: P5 H5 E5 S5 R5 V4*

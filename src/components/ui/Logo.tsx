/* Hallmark · component: logo · genre: atmospheric-cinematic · theme: rodo-custom
 * states: default · hover · focus (inherited from anchor parent)
 * contrast: pass — uses currentColor, inherits from caller
 *
 * Two parts, one component:
 *   <Logo variant="mark" />      — just the lens-aperture symbol (favicon-shape)
 *   <Logo variant="wordmark" />  — just the typographic wordmark
 *   <Logo variant="lockup" />    — mark + wordmark side-by-side (default)
 *
 * All vector. All currentColor. Inherits font from --font-display.
 */

interface LogoProps {
  variant?: "mark" | "wordmark" | "lockup";
  size?: number;
  className?: string;
  title?: string;
}

export function Logo({
  variant = "lockup",
  size = 28,
  className = "",
  title = "Rodo Lens",
}: LogoProps) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 ${className}`}
      aria-label={title}
      role="img"
    >
      {(variant === "mark" || variant === "lockup") && <LogoMark size={size} />}
      {(variant === "wordmark" || variant === "lockup") && (
        <LogoWordmark height={size} />
      )}
    </span>
  );
}

/* ──────────────── Mark ──────────────── *
 * A 6-blade lens aperture, set inside a thin lens body.
 *   · outer circle = the lens housing
 *   · inner hexagon = the iris (the open aperture)
 *   · six radial dashes = the blade leading edges
 *
 * All strokes use currentColor. 32×32 viewBox; scales to any size.
 */
function LogoMark({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      style={{ flexShrink: 0, display: "block" }}
    >
      {/* Lens housing */}
      <circle
        cx="16"
        cy="16"
        r="13"
        stroke="currentColor"
        strokeWidth="1.4"
      />

      {/* Six blade-tip dashes from outer hex vertices toward inner iris */}
      <path
        d="M 16 3   L 16 9
           M 27.26 9.5  L 22.06 12.5
           M 27.26 22.5 L 22.06 19.5
           M 16 29  L 16 23
           M 4.74 22.5  L 9.94 19.5
           M 4.74 9.5   L 9.94 12.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      {/* Inner iris hexagon (the open aperture) */}
      <path
        d="M 16 9 L 22.06 12.5 L 22.06 19.5 L 16 23 L 9.94 19.5 L 9.94 12.5 Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ──────────────── Wordmark ──────────────── *
 * Single-line SVG wordmark in the site display face (Bricolage Grotesque,
 * via --font-display). Scales by height; width auto-sizes via SVG viewBox.
 * Falls back to a serif stack if --font-display fails to load.
 */
function LogoWordmark({ height }: { height: number }) {
  // viewBox tuned so "Rodo Lens" at 22px baseline reads at ~size 28 height.
  // Width 168 ≈ 6:1 aspect for "Rodo Lens" set in Bricolage Grotesque 500.
  return (
    <svg
      height={height}
      viewBox="0 0 168 28"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      style={{ display: "block" }}
    >
      <text
        x="0"
        y="21"
        fill="currentColor"
        style={{
          fontFamily: "var(--font-display), 'Bricolage Grotesque', Georgia, serif",
          fontSize: "22px",
          fontWeight: 500,
          letterSpacing: "-0.02em",
          fontVariationSettings: "'opsz' 24, 'wdth' 100",
        }}
      >
        Rodo Lens
      </text>
    </svg>
  );
}

import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/constants";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="hairline-top mt-32 md:mt-48">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-12">
        {/* Statement line */}
        <p
          className="tracking-tight leading-[0.95] max-w-[20ch]"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-display)",
            color: "var(--color-ink)",
            letterSpacing: "-0.025em",
          }}
        >
          Frames held,
          <br />
          <em style={{ fontStyle: "italic", color: "var(--color-accent)" }}>
            then sent.
          </em>
        </p>

        <p className="mt-8 max-w-md text-ink-dim text-base md:text-lg leading-relaxed">
          Reels, short film, and event content from Abuja and Lagos.
          Available worldwide.{" "}
          <Link
            href="/contact"
            className="text-ink underline decoration-(--color-paper-edge) underline-offset-4 hover:decoration-(--color-accent) hover:text-accent transition-colors duration-(--dur-fast)"
          >
            Start a project →
          </Link>
        </p>

        {/* Meta row */}
        <div className="mt-20 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8">
          <div>
            <p className="font-mono-utility mb-3">based in</p>
            <p className="text-ink text-sm leading-relaxed">Abuja · Lagos</p>
          </div>
          <div>
            <p className="font-mono-utility mb-3">email</p>
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="text-ink text-sm hover:text-accent transition-colors duration-(--dur-fast)"
            >
              {SOCIAL_LINKS.email}
            </a>
          </div>
          <div>
            <p className="font-mono-utility mb-3">instagram</p>
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink text-sm hover:text-accent transition-colors duration-(--dur-fast)"
            >
              @rodos_lens_
            </a>
          </div>
          <div>
            <p className="font-mono-utility mb-3">elsewhere</p>
            <div className="flex flex-col gap-1 text-sm">
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink hover:text-accent transition-colors duration-(--dur-fast)"
              >
                Twitter
              </a>
              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink hover:text-accent transition-colors duration-(--dur-fast)"
              >
                TikTok
              </a>
            </div>
          </div>
        </div>

        {/* Bottom rule */}
        <div className="mt-16 pt-6 hairline-top flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span style={{ color: "var(--color-ink-dim)" }}>
              <Logo variant="mark" size={20} />
            </span>
            <p className="font-mono-utility">© {year} Rodo Lens</p>
          </div>
          <p className="font-mono-utility">All work © its respective clients</p>
        </div>
      </div>
    </footer>
  );
}

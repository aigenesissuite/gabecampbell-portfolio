import Link from "next/link";

import { AnimatedStat } from "@/components/count-up";

/**
 * Nav — ported 1:1 from aiOS SiteNav (genesis-bos site-chrome.tsx):
 * sticky glass bar, scroll-edge mask, 22px radius, same glass stack,
 * same item metrics, brand wordmark with the aiOS blue shimmer, and
 * the lg-btn-blue primary CTA.
 */
export function Nav() {
  return (
    <div className="nav-wrap">
      <div className="nav-mask" aria-hidden="true" />
      <nav className="nav-bar" aria-label="Primary">
        <div className="nav-inner">
          <Link href="/" className="nav-brand" aria-label="Gabe Campbell home">
            <span className="aios-shimmer">Gabe Campbell</span>
            <span className="nav-dot" aria-hidden="true" />
          </Link>
          <div className="nav-center">
            <Link href="/" className="nav-item">Home</Link>
            <Link href="/#work" className="nav-item">Work</Link>
            <Link href="/#about" className="nav-item">About</Link>
            <Link href="/work/aios" className="nav-item">aiOS</Link>
          </div>
          <div className="nav-right">
            <a
              href="https://linkedin.com/in/campbell-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cta-light"
            >
              LinkedIn
            </a>
            <a href="mailto:gabecampbell9@gmail.com" className="lg-btn-blue nav-cta">
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        © 2026 Gabe Campbell · Imagined by Gabe Campbell, designed and coded with
        his AI fleet ·{" "}
        <a href="https://linkedin.com/in/campbell-ai" className="footer-link">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

/** Brand header for work cards — company logo over a brand gradient that
 *  dissolves into the card body (masked fade, no hard edge). */
export function BrandHeader({
  gradient,
  logo,
  alt,
  logoWidth = 60,
  logoHeight,
}: {
  gradient: string;
  logo: string;
  alt: string;
  logoWidth?: number;
  logoHeight?: number;
}) {
  return (
    <div className="brand-header">
      <div className="brand-header-bg" style={{ background: gradient }} aria-hidden="true" />
      <img
        src={logo}
        alt={alt}
        width={logoWidth}
        height={logoHeight ?? logoWidth}
        style={{ width: logoWidth, height: "auto" }}
      />
    </div>
  );
}

export function Stat({ num, label }: { num: string; label: string }) {
  return (
    <div className="glass stat spotlight-card">
      <div className="num">
        <AnimatedStat value={num} />
      </div>
      <div className="label">{label}</div>
    </div>
  );
}

/** Scar — a mistake and the fix that shipped because of it. */
export function Scar({
  broke,
  brokeBody,
  fix,
  fixBody,
}: {
  broke: string;
  brokeBody: string;
  fix: string;
  fixBody: string;
}) {
  return (
    <div className="glass scar spotlight-card">
      <div className="scar-half scar-broke">
        <div className="scar-tag">What broke</div>
        <h3>{broke}</h3>
        <p>{brokeBody}</p>
      </div>
      <div className="scar-half scar-fix">
        <div className="scar-tag">What shipped instead</div>
        <h3>{fix}</h3>
        <p>{fixBody}</p>
      </div>
    </div>
  );
}

export function Learning({ title, body }: { title: string; body: string }) {
  return (
    <div className="glass learning">
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}

/**
 * Layout-law primitive: every body section renders through this, so the
 * nav-width container (.wrap) can never drift out of a page by hand.
 */
export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={className ? `section ${className}` : "section"}>
      <div className="wrap">{children}</div>
    </section>
  );
}

export function NextCase({ href, title }: { href: string; title: string }) {
  return (
    <Section>
      <Link href={href} className="glass next-case">
        <div className="label">Next case study</div>
        <div className="title">{title} →</div>
      </Link>
    </Section>
  );
}

/** Per-brand ambient mesh override for case study pages. */
export function BrandMesh({
  colors,
}: {
  colors: [string, string, string, string];
}) {
  const [c1, c2, c3, c4] = colors;
  return (
    <div
      className="case-mesh"
      aria-hidden="true"
      style={{
        /* Falloffs run to 100% over oversized ellipses so the four corner
           washes overlap mid-viewport — a 72% hard stop left an uncovered
           band of --bg that read as a harsh seam between sections. */
        background: `radial-gradient(88% 78% at 16% 8%, ${c1}, transparent 100%),
          radial-gradient(84% 74% at 86% 16%, ${c2}, transparent 100%),
          radial-gradient(88% 80% at 82% 88%, ${c3}, transparent 100%),
          radial-gradient(84% 74% at 14% 90%, ${c4}, transparent 100%),
          var(--bg)`,
      }}
    />
  );
}

export function CaseHero({
  eyebrow,
  title,
  lede,
  stats,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  stats: [string, string][];
}) {
  return (
    <header className="case-hero">
      <div className="wrap">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p className="lede">{lede}</p>
        <div className="stat-row stagger-children">
          {stats.map(([num, label]) => (
            <Stat key={label} num={num} label={label} />
          ))}
        </div>
      </div>
    </header>
  );
}

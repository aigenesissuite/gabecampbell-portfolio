import Link from "next/link";

export function Nav() {
  return (
    <nav className="nav">
      <Link href="/" className="brand">
        Gabe Campbell
      </Link>
      <Link href="/#work">Work</Link>
      <Link href="/#about">About</Link>
      <a href="mailto:gabecampbell9@gmail.com" className="cta">
        Let&apos;s Talk
      </a>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        © 2026 Gabe Campbell · Imagined by Gabe Campbell, designed and coded with
        his AI fleet ·{" "}
        <a
          href="https://linkedin.com/in/campbell-ai"
          style={{ color: "var(--accent)" }}
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export function Stat({ num, label }: { num: string; label: string }) {
  return (
    <div className="glass stat">
      <div className="num">{num}</div>
      <div className="label">{label}</div>
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

export function NextCase({ href, title }: { href: string; title: string }) {
  return (
    <section className="section">
      <div className="wrap">
        <Link href={href} className="glass next-case">
          <div className="label">Next case study</div>
          <div className="title">{title} →</div>
        </Link>
      </div>
    </section>
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
        <div className="stat-row">
          {stats.map(([num, label]) => (
            <Stat key={label} num={num} label={label} />
          ))}
        </div>
      </div>
    </header>
  );
}

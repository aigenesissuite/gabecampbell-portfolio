import Link from "next/link";
import { Stat } from "@/components/site";

const work = [
  {
    href: "/work/aios",
    kicker: "AI Genesis · 2024 – Present",
    title: "aiOS — an AI employee that runs your business",
    blurb:
      "Founded, designed, and coded an agentic AI platform spanning iMessage, web, and voice — live in production with paying enterprise customers. The RTR Vehicles deployment resolves 92% of support conversations automatically.",
    metrics: ["Live at myaios.app", "92% auto-resolution", "$180K/yr saved for one client"],
  },
  {
    href: "/work/lumin",
    kicker: "Lumin Digital · 2021 – 2025",
    title: "AI-powered banking for 127 credit unions",
    blurb:
      "Conversational onboarding, AI design companions, and an enterprise platform serving 2.1M members — replacing form-wizard banking UX with natural conversation.",
    metrics: ["2.1M members", "90% onboarding completion", "$2.3M revenue"],
  },
  {
    href: "/work/google",
    kicker: "Google · 2020 – 2021",
    title: "Design foundations for AI at scale",
    blurb:
      "Unified five ML/AI product teams onto one design system — 67 foundation components with 85% adoption, built for AI capabilities that didn't exist yet.",
    metrics: ["50M+ users", "85% pattern adoption", "45% faster prototyping"],
  },
  {
    href: "/work/bmw",
    kicker: "BMW · 2018 – 2020",
    title: "Smart EV charging for a smarter grid",
    blurb:
      "BMW's first dynamic charging experience — ML-scheduled charging that cut peak-hour load 87% while guaranteeing a full battery by morning.",
    metrics: ["$4.2M revenue", "87% peak load reduction", "94% satisfaction"],
  },
];

export default function Home() {
  return (
    <main>
      <header className="hero">
        <div className="wrap">
          <span className="eyebrow">Principal AI Product Designer</span>
          <h1>
            I design AI products.
            <br />
            Then I ship them.
          </h1>
          <p className="sub">
            13+ years designing AI-native products at Google, BMW, and enterprise
            fintech — and founder of AI Genesis, where I designed, coded, and
            launched aiOS: a live agentic platform with paying customers. Every
            claim on this site links to something you can use right now.
          </p>
          <div className="proof-links">
            <a className="chip" href="https://myaios.app" target="_blank" rel="noopener noreferrer">
              <span className="dot" /> myaios.app — live product
            </a>
            <a className="chip" href="https://www.rtrvehicles.com" target="_blank" rel="noopener noreferrer">
              <span className="dot" /> rtrvehicles.com — AI employee, bottom right
            </a>
            <a className="chip" href="https://ai-genesis.ai" target="_blank" rel="noopener noreferrer">
              <span className="dot" /> ai-genesis.ai — case study
            </a>
          </div>
          <div className="video-frame">
            <video
              src="/video/aios-walkthrough.mp4"
              poster="/video/poster.jpg"
              controls
              preload="metadata"
            />
          </div>
          <p className="video-caption">
            2-minute walkthrough: the RTR Vehicles AI employee and aiOS, narrated
            by me. Everything shown is live in production.
          </p>
        </div>
      </header>

      <section className="section" id="highlights">
        <div className="wrap">
          <div className="stat-row">
            <Stat num="Live" label="aiOS in production, paying customers" />
            <Stat num="50M+" label="daily users at Google scale" />
            <Stat num="2.1M" label="banking members served at Lumin" />
            <Stat num="$180K/yr" label="support cost saved for one aiOS client" />
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="wrap">
          <div className="section-head">
            <h2>My design philosophy</h2>
          </div>
          <div className="glass challenge-callout">
            It&apos;s less important what AI can do. It&apos;s more important how
            it makes people feel.
          </div>
          <div className="prose" style={{ marginTop: 28 }}>
            <p>
              I believe AI should amplify human capability, not replace it. My
              career has been one continuous thesis: software should feel like a
              conversation, not a form. I prototyped conversational banking at
              Lumin, built design foundations for AI products at Google — and
              then went and built the whole operating system myself.
            </p>
            <p>
              I&apos;m a designer who ships production code. aiOS was designed in
              the same tools it was built with, and I own every layer — design
              tokens to React components to the agent architecture underneath.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="work">
        <div className="wrap">
          <div className="section-head">
            <h2>Selected work</h2>
            <p>
              Four products, one thread: making complex AI feel simple — and
              proving it with shipped outcomes.
            </p>
          </div>
          <div className="grid-2">
            {work.map((w) => (
              <Link key={w.href} href={w.href} className="glass work-card">
                <div className="kicker">{w.kicker}</div>
                <h3>{w.title}</h3>
                <p>{w.blurb}</p>
                <div className="metrics">
                  {w.metrics.map((m) => (
                    <span key={m} className="metric-pill">
                      {m}
                    </span>
                  ))}
                </div>
                <span className="view">View case study →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="wrap">
          <h2>Let&apos;s create something amazing</h2>
          <p>
            I&apos;m passionate about designing AI products that make a real
            difference. If you&apos;re building the next generation of AI-native
            experiences, I&apos;d love to hear about your vision.
          </p>
          <div className="btn-row">
            <a className="btn primary" href="mailto:gabecampbell9@gmail.com">
              Email me
            </a>
            <a
              className="btn ghost"
              href="https://linkedin.com/in/campbell-ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

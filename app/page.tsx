import Link from "next/link";
import { BrandHeader, Stat } from "@/components/site";
import { Walkthrough } from "@/components/walkthrough";
import { AgentConstellation, GenThread } from "@/components/aios-live";
import { HeroStream } from "@/components/hero-stream";
import { RoutingTributaries } from "@/components/routing-tributaries";

const work = [
  {
    href: "/work/aios",
    kicker: "AI Genesis · 2024 – Present",
    title: "aiOS — an AI employee that runs your business",
    blurb:
      "Founded, designed, and coded an agentic AI platform spanning iMessage, web, and voice — live in production with paying enterprise customers. The RTR Vehicles deployment resolves 92% of support conversations automatically.",
    metrics: ["Live at myaios.app", "92% auto-resolution", "$15K/mo saved for one client"],
    gradient:
      "linear-gradient(135deg, #0a84ff 0%, #5e5ce6 55%, #30a5ff 100%)",
    logo: "/logos/aios.svg",
    logoWidth: 76,
  },
  {
    href: "/work/lumin",
    kicker: "Lumin Digital · 2021 – 2025",
    title: "AI-powered banking for 127 credit unions",
    blurb:
      "Conversational onboarding, AI design companions, and an enterprise platform serving 8M+ members — replacing form-wizard banking UX with natural conversation.",
    metrics: ["8M+ members", "90% onboarding completion", "$2.3M revenue"],
    gradient:
      "linear-gradient(135deg, #002429 0%, #00575f 55%, #00a2b8 100%)",
    logo: "/logos/lumin.svg",
    logoWidth: 132,
  },
  {
    href: "/work/google",
    kicker: "Google · 2020 – 2021",
    title: "Design foundations for AI at scale",
    blurb:
      "Unified five ML/AI product teams onto one design system — 67 foundation components with 85% adoption, built for AI capabilities that didn't exist yet.",
    metrics: ["50M+ users", "85% pattern adoption", "45% faster prototyping"],
    gradient:
      "linear-gradient(120deg, rgba(66,133,244,0.55) 0%, rgba(234,67,53,0.42) 34%, rgba(251,188,5,0.46) 66%, rgba(52,168,83,0.5) 100%)",
    logo: "/logos/google.svg",
    logoWidth: 64,
  },
  {
    href: "/work/bmw",
    kicker: "BMW · 2018 – 2020",
    title: "Smart EV charging for a smarter grid",
    blurb:
      "BMW's first dynamic charging experience — ML-scheduled charging that cut peak-hour load 87% while guaranteeing a full battery by morning.",
    metrics: ["$4.2M revenue", "87% peak load reduction", "94% satisfaction"],
    gradient:
      "linear-gradient(135deg, #0653b6 0%, #1c69d4 55%, #81c4ff 100%)",
    logo: "/logos/bmw.svg",
    logoWidth: 72,
  },
];

export default function Home() {
  return (
    <main>
      <header className="hero">
        <div className="wrap">
          <HeroStream />
          <span className="eyebrow">Principal AI Product Designer</span>
          <h1>
            I design AI products.
            <br />
            <span className="shimmer">Then I ship them.</span>
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
            <a
              className="chip"
              href="https://github.com/aigenesissuite/consciousness-os"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="dot" /> consciousness-os — published AI behavior spec
            </a>
            <a className="chip" href="tel:+19494644535">
              <span className="dot" /> (949) 464-4535 — call the AI, it answers
            </a>
          </div>
          <Walkthrough caption="The full walkthrough in four chapters — skip around like stories. Everything shown is live in production, narrated by me." />
        </div>
      </header>

      <section className="section" id="highlights">
        <div className="wrap">
          <div className="stat-row stagger-children">
            <Stat num="Live" label="aiOS in production, paying customers" />
            <Stat num="50M+" label="daily users at Google scale" />
            <Stat num="8M+" label="banking members served at Lumin" />
            <Stat num="$15K/mo" label="support cost saved for one aiOS client" />
          </div>
        </div>
      </section>

      <section className="section apple-spotlight-bg" id="about">
        <div className="wrap">
          <div className="section-head">
            <h2>
              My design <span className="shimmer">philosophy</span>
            </h2>
          </div>
          <div className="philosophy-duo">
            <div className="philosophy-copy">
              <blockquote className="philosophy-quote">
                &ldquo;It&apos;s less important what AI can do. It&apos;s more
                important how it makes people feel.&rdquo;
              </blockquote>
              <div className="prose philosophy-prose">
                <p>
                  I believe AI should amplify human capability, not replace
                  it. My career has been one continuous thesis: software
                  should feel like a conversation, not a form. I prototyped
                  conversational banking at Lumin, built design foundations
                  for AI products at Google — and then went and built the
                  whole operating system myself.
                </p>
                <p>
                  I&apos;m a designer who ships production code. aiOS was
                  designed in the same tools it was built with, and I own
                  every layer — design tokens to React components to the
                  agent architecture underneath.
                </p>
                <p>
                  That philosophy is written down and testable. I published{" "}
                  <a
                    href="https://github.com/aigenesissuite/consciousness-os"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Consciousness OS
                  </a>{" "}
                  — the behavioral spec behind aiOS: an AI should help you
                  think, never start thinking for you. It ships as a
                  falsifiable contract with an eval methodology and published
                  results, failures included.
                </p>
                <div className="philosophy-divider" aria-hidden />
                <p>
                  The philosophy has a backstory. I was homeless at 17 — no
                  family, no money, no safety net. I taught myself to sell,
                  then taught myself to build, and that took me from food
                  banks to shipping products at Toshiba, BMW, Google, and an
                  8M-member banking platform. Years ago I lost a major
                  contract in due diligence for being a one-man operation —
                  so I built the system that makes one person ship like a
                  department.
                </p>
                <p>
                  <strong>Business floats on results, not promises.</strong>{" "}
                  Every claim on this site links to something live you can
                  use right now.
                </p>
              </div>
            </div>
            <div className="philosophy-illo" aria-hidden>
              <RoutingTributaries />
              <p className="illo-caption">
                The aiOS routing layer — every task streams to the best
                provider, orchestrated from iMessage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section apple-spotlight-bg" id="live">
        <div className="wrap">
          <div className="section-head">
            <h2>
              What working with <span className="shimmer">aiOS</span> feels
              like
            </h2>
            <p>
              A real Gen conversation, rendered with the production iMessage
              engine I built — the same renderer behind every live deployment.
            </p>
          </div>
          <div className="live-duo">
            <GenThread />
            <div className="live-copy">
              <p>
                This is the whole product thesis in one thread: the owner sends
                two short texts, and a morning of work happens — leads
                qualified, a follow-up drafted for approval, content queued and
                posted. <strong>The human approves; the machine executes.</strong>
              </p>
              <p>
                No dashboard. No prompt engineering. The most-used surface of
                aiOS is the one every business owner already checks eighty
                times a day.
              </p>
              <p>
                Don&apos;t take the video&apos;s word for it — the product
                answers a real line. Text it, or call and ask it your hardest
                customer question. The demo is the product.
              </p>
              <div className="live-ctas">
                <a className="btn primary" href="sms:+13053390512">
                  Text the AI
                </a>
                <a className="btn ghost" href="tel:+19494644535">
                  Call (949) 464-4535
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section apple-spotlight-bg" id="constellation">
        <div className="wrap">
          <div className="section-head">
            <h2>
              <span className="shimmer">One brain</span>, every department
            </h2>
            <p>
              The agent constellation, lifted straight from the aiOS production
              codebase — six digital employees reporting live activity, the
              same component running on myaios.app right now.
            </p>
          </div>
          <AgentConstellation />
        </div>
      </section>

      <section className="section" id="work">
        <div className="wrap">
          <div className="section-head">
            <h2>
              Selected <span className="shimmer">work</span>
            </h2>
            <p>
              Four products, one thread: making complex AI feel simple — and
              proving it with shipped outcomes.
            </p>
          </div>
          <div className="grid-2 stagger-children">
            {work.map((w) => (
              <Link key={w.href} href={w.href} className="glass work-card">
                <BrandHeader
                  gradient={w.gradient}
                  logo={w.logo}
                  alt={`${w.kicker.split(" ·")[0]} logo`}
                  logoWidth={w.logoWidth}
                />
                <div className="work-card-body">
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
                </div>
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

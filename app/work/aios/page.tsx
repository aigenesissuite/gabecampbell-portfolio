import type { Metadata } from "next";
import { CaseHero, Learning, NextCase } from "@/components/site";
import { Walkthrough } from "@/components/walkthrough";

export const metadata: Metadata = {
  title: "aiOS — Case Study | Gabe Campbell",
  description:
    "Founding, designing, and coding a live agentic AI platform: iMessage-native AI employees with paying enterprise customers.",
};

export default function AiosCase() {
  return (
    <main>
      <CaseHero
        eyebrow="AI Genesis · Founder & Principal Product Designer · 2024 – Present"
        title="aiOS — the AI employee that runs your business"
        lede="I founded AI Genesis to answer one question: what does software look like when the interface is a relationship? aiOS is the answer — an agentic AI platform spanning iMessage, web, and voice, designed and coded end-to-end by me, live in production with paying enterprise customers."
        stats={[
          ["92%", "support conversations auto-resolved (RTR)"],
          ["8 sec", "median response time"],
          ["$180K/yr", "support cost saved for one client"],
        ]}
      />

      <section className="section">
        <div className="wrap">
          <Walkthrough caption="The walkthrough in four chapters — RTR's AI employee, the solo build, onboarding cinema, and AI over iMessage." />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>The challenge</h2>
          </div>
          <div className="glass challenge-callout">
            Small businesses don&apos;t need another dashboard. They need an
            employee who happens to be software.
          </div>
          <div className="prose" style={{ marginTop: 28 }}>
            <p>
              AI tooling in 2024 was powerful and unusable: prompt boxes,
              settings pages, and workflow builders that assumed the user wanted
              to learn AI. Business owners don&apos;t. They want the work done.
            </p>
            <p>
              The design thesis behind aiOS: <strong>the text box is a
              fallback, not the front door.</strong> The product reads intent,
              surfaces what matters, and acts — the way a great employee does.
              That meant designing for iMessage as a first-class surface,
              building onboarding as a conversation instead of a form, and
              making every AI action visible enough to trust.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>Shipped, not staged</h2>
            <p>Three production surfaces, one brain.</p>
          </div>
          <div className="grid-3">
            <div className="glass card">
              <div className="icon">🏁</div>
              <h3>RTR Vehicles — embedded AI employee</h3>
              <p>
                A digital employee on rtrvehicles.com (bottom-right, live now):
                product discovery, fitment answers, order tracking, and smart
                escalation trained on the team&apos;s real support history. It
                replaced the workload of four full-time support hires —
                about $15K/month — while resolving 92% of conversations without
                a human.
              </p>
            </div>
            <div className="glass card">
              <div className="icon">🎬</div>
              <h3>Onboarding as cinema</h3>
              <p>
                Signup is a conversation. aiOS reads your website live on
                screen — scraping your palette, voice, and market position while
                you watch it think. It&apos;s less important what AI can do;
                it&apos;s more important how it makes people feel. Watching the
                system understand your business builds more trust than any
                feature list.
              </p>
            </div>
            <div className="glass card">
              <div className="icon">💬</div>
              <h3>iMessage-native AI</h3>
              <p>
                Gen — the aiOS commander — lives in your texts. Send a thought;
                get carousels, videos, websites, and campaigns back as finished
                deliverables. No app to open, no login, no prompt engineering.
                The most-used surface of the platform is the one users already
                had.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>Designer, engineer, founder — same person</h2>
          </div>
          <div className="prose">
            <p>
              Every layer of aiOS is mine: the liquid-glass design system, the
              React components, the agent architecture, the deployment
              pipeline. This isn&apos;t a designer handing off mockups — the
              design system and the codebase are the same artifact, which is
              why the product ships design improvements daily instead of
              quarterly.
            </p>
            <p>
              It&apos;s also an AI-augmented practice in production: I run a
              fleet of specialized AI agents that handle everything from
              financial analysis to video editing, coordinated through shared
              memory and reviewed by me. The tooling I design for customers is
              the tooling I run my company on.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>What I got wrong along the way</h2>
            <p>Real products earn their scars. Three that taught me the most:</p>
          </div>
          <div className="grid-3">
            <Learning
              title="I over-trusted guardrails."
              body="Early versions wrapped the AI in deterministic middleware for every edge case. It made the product dumber, not safer. The fix was subtraction: one intelligent spine with a strong persona beats fifty patches."
            />
            <Learning
              title="My paywall punished excitement."
              body="The first paywall appeared mid-conversation, right when users were most engaged — and read as a betrayal. Rebuilt it around delivered value: show what's been made for you, then ask."
            />
            <Learning
              title="Onboarding leaked at the top."
              body="Most signups never started the experience. Instrumenting every step revealed the drop wasn't interest — it was friction sequencing. Verification moved up front, everything else became conversational."
            />
          </div>
        </div>
      </section>

      <NextCase href="/work/lumin" title="Lumin: AI banking for 2.1M members" />
    </main>
  );
}

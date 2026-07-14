import type { Metadata } from "next";
import { BrandMesh, CaseHero, Learning, NextCase, Stat } from "@/components/site";
import {
  FigmaBoard,
  Frame,
  WfBtn,
  WfBubble,
  WfChip,
  WfInput,
  WfLine,
  WfRow,
  WfStepper,
} from "@/components/artifacts";

export const metadata: Metadata = {
  title: "Lumin Digital AI Banking — Case Study | Gabe Campbell",
  description:
    "AI-powered banking for 127 credit unions and 8M+ white-label members: conversational onboarding, AI design companions, and an enterprise platform.",
};

export default function LuminCase() {
  return (
    <main>
      {/* Lumin brand wash: violet / teal / indigo */}
      <BrandMesh
        colors={[
          "rgba(108, 92, 231, 0.36)",
          "rgba(0, 194, 168, 0.32)",
          "rgba(64, 120, 255, 0.28)",
          "rgba(151, 71, 255, 0.22)",
        ]}
      />
      <CaseHero
        eyebrow="Lumin Digital · Principal Product Designer · 2021 – 2025"
        title="AI that speaks your design language"
        lede="How I helped transform digital banking for 127 credit unions with AI-powered design systems, conversational interfaces, and intelligent automation — serving 8M+ members across white-label deployments."
        stats={[
          ["8M+", "white-label members served"],
          ["127", "credit union implementations"],
          ["90%", "conversational onboarding completion"],
        ]}
      />

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>The challenge</h2>
          </div>
          <div className="glass challenge-callout">
            Credit unions were bleeding members to digital-first banks. They
            needed enterprise-grade modernization without losing their personal
            touch.
          </div>
          <div className="prose" style={{ marginTop: 28 }}>
            <p>
              Traditional banking UX wasn&apos;t cutting it. Credit union admins
              struggled with legacy tools, while members abandoned onboarding at
              a 73% bounce rate. Design teams spent weeks customizing each
              implementation, and support costs were unsustainable.
            </p>
            <p>
              We needed something radically different — an AI-powered platform
              serving both <strong>B2B clients (credit unions) and their B2C
              members</strong>, scaling across 127 unique implementations.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>The solution</h2>
            <p>Three breakthrough innovations that redefined enterprise banking UX.</p>
          </div>
          <div className="grid-3">
            <div className="glass card">
              <div className="icon">🤖</div>
              <h3>Design Companions</h3>
              <p>
                AI assistants that understood our design system — vector stores
                containing the entire design language, process SOPs, and
                component library. Credit union teams generated brand-compliant
                designs in minutes, not weeks. Sprints ran 43% faster.
              </p>
            </div>
            <div className="glass card">
              <div className="icon">💬</div>
              <h3>Conversational banking</h3>
              <p>
                Replaced wizard flows with natural conversation. Members opened
                accounts like they were chatting with a friend — the AI adapted
                questions to responses, making compliance feel effortless.
                Completion rates hit 90% against a 73%-bounce legacy baseline.
              </p>
            </div>
            <div className="glass card">
              <div className="icon">🏦</div>
              <h3>Enterprise AI platform</h3>
              <p>
                A B2B system credit unions customized without code. The AI
                learned from patterns across all implementations, suggesting
                optimizations and automating routine work. What took 40+ hours
                happened in minutes — $2.3M in new revenue.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>Before / after — account opening</h2>
            <p>
              The legacy wizard lost 73% of applicants. The conversational
              redesign asked the same compliance questions as a chat — and
              completion hit 90%.
            </p>
          </div>
          <FigmaBoard
            file="lumin · conversational-onboarding.fig"
            note="Recreated for this portfolio — original files remain on Lumin Digital hardware under NDA. Flow structure and copy match the shipped product."
          >
            <Frame label="Application wizard — legacy" tag="before" w={250}>
              <WfRow style={{ justifyContent: "space-between" }}>
                <WfLine w="40%" h={9} tone="dark" />
                <WfChip label="Step 3 of 9" tone="neutral" />
              </WfRow>
              <WfStepper total={9} active={3} />
              <WfInput label="Social Security Number" />
              <WfInput label="Employer name" />
              <WfInput label="Annual income" />
              <WfInput label="Employment start date" />
              <WfChip label="73% abandon before step 9" tone="warn" />
              <WfRow gap={8}>
                <WfBtn label="Back" tone="ghost" style={{ flex: 1 }} />
                <WfBtn label="Continue" tone="primary" style={{ flex: 1 }} />
              </WfRow>
            </Frame>
            <Frame label="Conversational — shipped" tag="after" w={260} selected>
              <WfBubble side="bot">
                Nice to meet you, Maya! What kind of account are you opening
                today?
              </WfBubble>
              <WfRow gap={6}>
                <WfChip label="Checking" tone="info" />
                <WfChip label="Savings" tone="info" />
                <WfChip label="Both" tone="info" />
              </WfRow>
              <WfBubble side="user">Both, please</WfBubble>
              <WfBubble side="bot">
                Great choice. I&apos;ll need a couple of quick details for the
                government — takes about 2 minutes.
              </WfBubble>
              <WfChip label="90% completion · compliance intact" tone="good" />
            </Frame>
            <Frame label="Conversation components" w={210}>
              <WfBubble side="bot">
                <WfLine w="90%" h={7} tone="dark" />
                <WfLine w="64%" h={7} tone="dark" />
              </WfBubble>
              <WfRow gap={6}>
                <WfChip label="Quick reply" tone="info" />
                <WfChip label="+ 2 more" tone="neutral" />
              </WfRow>
              <WfInput label="Secure field · SSN masked" />
              <WfChip label="Identity verified ✓" tone="good" />
            </Frame>
          </FigmaBoard>
        </div>
      </section>

      <section className="section apple-spotlight-bg">
        <div className="wrap">
          <div className="section-head">
            <h2>
              Experience it <span className="shimmer">yourself</span>
            </h2>
            <p>
              This is the actual conversational onboarding prototype — live,
              not a video. Open an account the way Lumin&apos;s members do:
              by talking.
            </p>
          </div>
          <div className="typebot-shell reveal-grow">
            <iframe
              src="https://typebot.co/lumin-digital-conversational-onboarding-9q1m2kz"
              title="Lumin Digital conversational onboarding — live demo"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>The process</h2>
            <p>From ambiguous problem to shipped solution in 11 months.</p>
          </div>
          <div className="timeline">
            <div className="glass t-item">
              <div className="t-when">Months 1–2</div>
              <div>
                <h3>Enterprise discovery</h3>
                <p>
                  Interviewed 47 credit union executives and 200+ members.
                  Found the core tension: credit unions needed enterprise tools,
                  members wanted personal touch. Initial wireframes failed — too
                  corporate.
                </p>
              </div>
            </div>
            <div className="glass t-item">
              <div className="t-when">Months 3–4</div>
              <div>
                <h3>Failed first attempt</h3>
                <p>
                  Built a traditional B2B dashboard. Credit unions hated it —
                  &ldquo;feels like the software we&apos;re trying to
                  escape.&rdquo; Pivoted to studying their actual workflows.
                </p>
              </div>
            </div>
            <div className="glass t-item">
              <div className="t-when">Months 5–6</div>
              <div>
                <h3>AI breakthrough</h3>
                <p>
                  Realized AI had to absorb the customization complexity. Built
                  the first Design Companion prototype — credit unions could
                  finally express their brand without technical knowledge.
                </p>
              </div>
            </div>
            <div className="glass t-item">
              <div className="t-when">Months 7–8</div>
              <div>
                <h3>Conversational pivot</h3>
                <p>
                  Member testing revealed form fatigue. Experimented with
                  chat-based onboarding. Compliance resisted until we showed 90%
                  completion rates.
                </p>
              </div>
            </div>
            <div className="glass t-item">
              <div className="t-when">Months 9–11</div>
              <div>
                <h3>Scale &amp; launch</h3>
                <p>
                  Rolled out to the first 10 credit unions. The AI learned from
                  each implementation — by month 11, onboarding new clients took
                  hours, not weeks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>Design leadership</h2>
          </div>
          <div className="grid-2">
            <div className="glass card">
              <div className="icon">🤝</div>
              <h3>Cross-functional alignment</h3>
              <p>
                Led a 12-person team across design, engineering, and AI/ML.
                Established a weekly &ldquo;AI Design Sync&rdquo; — 40% fewer
                revision cycles.
              </p>
            </div>
            <div className="glass card">
              <div className="icon">📚</div>
              <h3>Mentoring AI-first design</h3>
              <p>
                Trained 8 designers in prompt engineering and AI tools. Created
                the internal &ldquo;AI Design Playbook&rdquo; adopted
                company-wide.
              </p>
            </div>
            <div className="glass card">
              <div className="icon">🎯</div>
              <h3>Strategic product decisions</h3>
              <p>
                Convinced the C-suite to invest $1.5M in AI after presenting the
                prototype; defined a roadmap balancing innovation with
                compliance.
              </p>
            </div>
            <div className="glass card">
              <div className="icon">🔬</div>
              <h3>AI-assisted research</h3>
              <p>
                Analyzed patterns across 50,000+ support tickets, uncovering
                insights human research missed and cutting support volume 67%.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>The impact</h2>
          </div>
          <div className="stat-row">
            <Stat num="5×" label="member engagement increase" />
            <Stat num="$2.3M" label="revenue generated" />
            <Stat num="47%" label="mobile adoption" />
            <Stat num="89%" label="member satisfaction" />
          </div>
          <div className="glass pull-quote" style={{ marginTop: 20 }}>
            <p>
              &ldquo;Gabe didn&apos;t just design a platform — he reimagined how
              credit unions operate. The AI integration feels like magic, but
              the real innovation is how human it feels.&rdquo;
            </p>
            <cite>— CEO, partner credit union</cite>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>Key learnings</h2>
          </div>
          <div className="grid-2">
            <Learning
              title="B2B2C requires dual empathy."
              body="Success came from making both credit union administrators and their members feel powerful."
            />
            <Learning
              title="AI scales through patterns, not rules."
              body="Design Companions worked because they learned from usage patterns across implementations, not rigid templates."
            />
            <Learning
              title="Conversation beats configuration."
              body="Natural language revealed user intent in ways forms never could — while making compliance feel effortless."
            />
            <Learning
              title="Enterprise AI needs human guardrails."
              body="Automation accelerated everything, but human oversight ensured quality. The best AI amplifies human judgment."
            />
          </div>
        </div>
      </section>

      <NextCase href="/work/google" title="Google: design foundations for AI at scale" />
    </main>
  );
}

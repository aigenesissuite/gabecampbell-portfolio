import type { Metadata } from "next";
import { BrandMesh, CaseHero, Learning, NextCase, Section, Stat } from "@/components/site";
import {
  FigmaBoard,
  Frame,
  WfBlock,
  WfBtn,
  WfChip,
  WfLine,
  WfRow,
} from "@/components/artifacts";

export const metadata: Metadata = {
  title: "Google AI Design Foundations — Case Study | Gabe Campbell",
  description:
    "Unifying design across Google's ML/AI product teams: 67 foundation components, 85% adoption, built for AI capabilities that didn't exist yet.",
};

export default function GoogleCase() {
  return (
    <main>
      {/* Google brand wash: blue / red / yellow / green */}
      <BrandMesh
        colors={[
          "rgba(66, 133, 244, 0.40)",
          "rgba(234, 67, 53, 0.26)",
          "rgba(251, 188, 5, 0.32)",
          "rgba(52, 168, 83, 0.28)",
        ]}
      />
      <CaseHero
        eyebrow="Google · Product Designer · 2020 – 2021"
        title="Building foundations for AI at scale"
        lede="How I unified design across Google's experimental AI and ML teams — creating foundational patterns that scaled from prototype to production as these products matured."
        stats={[
          ["50M+", "users at scale"],
          ["5", "ML/AI teams unified"],
          ["85%", "pattern adoption"],
        ]}
      />

      <Section>
        <div className="section-head">
          <h2>The challenge</h2>
        </div>
        <div className="glass challenge-callout">
          Five different teams. Five inconsistent approaches. An
          engineering-led org where design took a backseat to functionality.
        </div>
        <div className="prose" style={{ marginTop: 28 }}>
          <p>
            Google&apos;s emerging AI products division was brilliant at
            engineering but struggling with design coherence. Each team had
            developed its own patterns, components, and visual language in
            isolation — users were confused moving between products, and the
            brand experience was fragmented.
          </p>
          <p>
            We needed to prove that great design could{" "}
            <strong>enhance technical excellence, not slow it down</strong> —
            while navigating the ambiguity of AI products still finding their
            market fit.
          </p>
        </div>
      </Section>

      <Section>
        <div className="section-head">
          <h2>Research &amp; discovery</h2>
          <p>Understanding the fragmentation before building unity.</p>
        </div>
        <div className="stat-row" style={{ marginBottom: 20 }}>
          <Stat num="23" label="different button styles found" />
          <Stat num="5" label="conflicting design approaches" />
          <Stat num="25+" label="stakeholder interviews" />
          <Stat num="2 wks" label="embedded shadowing ML teams" />
        </div>
        <div className="grid-2">
          <div className="glass card">
            <div className="icon">📊</div>
            <h3>Component inventory</h3>
            <p>
              Catalogued UI elements across 5 ML products, identifying
              patterns unique to AI interfaces — confidence UI, model states,
              training views, pipeline visualization.
            </p>
          </div>
          <div className="glass card">
            <div className="icon">🔍</div>
            <h3>Workflow analysis</h3>
            <p>
              Shadowed teams for two weeks to understand how ML engineers
              actually interact with their tools, and established baseline
              metrics for design velocity and consistency.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="section-head">
          <h2>The journey</h2>
          <p>Leading through ambiguity to create order from chaos — 14 months.</p>
        </div>
        <div className="timeline">
          <div className="glass t-item">
            <div className="t-when">Months 1–2</div>
            <div>
              <h3>Discovery &amp; alignment</h3>
              <p>
                Interviewed 25+ ML engineers and designers. Discovered deep
                mistrust between design and engineering. First design review
                was brutal — &ldquo;this will slow us down by months.&rdquo;
              </p>
            </div>
          </div>
          <div className="glass t-item">
            <div className="t-when">Months 3–4</div>
            <div>
              <h3>Failed prototype</h3>
              <p>
                Created a rigid design system. Teams rejected it immediately.
                I was solving the wrong problem — they needed flexibility for
                experimental AI features, not rules. Pivoted to a modular
                approach.
              </p>
            </div>
          </div>
          <div className="glass t-item">
            <div className="t-when">Months 5–8</div>
            <div>
              <h3>Building trust</h3>
              <p>
                Embedded with ML engineering teams. Co-created components
                WITH them, not FOR them. First successful implementation in
                the AutoML team.
              </p>
            </div>
          </div>
          <div className="glass t-item">
            <div className="t-when">Months 9–11</div>
            <div>
              <h3>Scaling success</h3>
              <p>
                Other teams saw AutoML&apos;s velocity increase and adopted
                voluntarily. The system evolved from real usage — engineering
                became its biggest advocates.
              </p>
            </div>
          </div>
          <div className="glass t-item">
            <div className="t-when">Months 12–14</div>
            <div>
              <h3>Full implementation</h3>
              <p>
                Rolled out across all 5 teams with a design review process
                and self-service tools. Teams shipped 45% faster with better
                quality.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="section-head">
          <h2>The audit — five teams, five languages</h2>
          <p>
            The component inventory made the fragmentation impossible to
            argue with: 23 button styles across five products, then one
            shared foundation.
          </p>
        </div>
        <FigmaBoard
          file="ml-foundations · audit-and-system.fig"
          note="Recreated for this portfolio — original files remain on Google infrastructure. The audit findings and component set mirror the real system."
        >
          <Frame label="Button audit — 5 products" tag="before" w={250}>
            <WfRow gap={8}>
              <WfBtn label="Train" tone="primary" style={{ borderRadius: 2 }} />
              <WfBtn
                label="TRAIN MODEL"
                tone="ghost"
                style={{ borderRadius: 999, fontSize: 10 }}
              />
            </WfRow>
            <WfRow gap={8}>
              <WfBtn
                label="Run training"
                tone="ghost"
                style={{ borderRadius: 6, borderStyle: "dashed" }}
              />
              <WfBtn label="→ Train" tone="danger" style={{ borderRadius: 12 }} />
            </WfRow>
            <WfRow gap={8}>
              <WfBtn
                label="Start"
                tone="primary"
                style={{ borderRadius: 8, background: "#4285f4" }}
              />
              <WfChip label="…18 more variants" tone="warn" />
            </WfRow>
            <WfLine w="88%" h={7} tone="light" />
            <WfLine w="64%" h={7} tone="light" />
          </Frame>
          <Frame label="Foundation — one system" tag="after" w={250} selected>
            <WfRow gap={8}>
              <WfBtn
                label="Train model"
                tone="primary"
                style={{ background: "#4285f4", borderRadius: 8 }}
              />
              <WfBtn label="Cancel" tone="ghost" style={{ borderRadius: 8 }} />
            </WfRow>
            <WfChip label="1 button · 4 sizes · 3 emphases" tone="good" />
            <WfLine w="88%" h={7} tone="light" />
            <WfLine w="72%" h={7} tone="light" />
            <WfChip label="85% adoption across 5 teams" tone="info" />
          </Frame>
          <Frame label="AI-specific components" w={250}>
            <WfBlock h={40}>Confidence indicator · 87% ▮▮▮▮▯</WfBlock>
            <WfRow gap={6}>
              <WfChip label="● Training" tone="warn" />
              <WfChip label="● Deployed" tone="good" />
              <WfChip label="● Failed" tone="neutral" />
            </WfRow>
            <WfBlock h={40}>Pipeline view · ingest → train → eval</WfBlock>
            <WfBlock h={36}>Threshold slider · precision ⇄ recall</WfBlock>
          </Frame>
        </FigmaBoard>
      </Section>

      <Section>
        <div className="section-head">
          <h2>The <span className="shimmer">transformation</span></h2>
        </div>
        <div className="compare">
          <div className="glass col">
            <h3>Before: 5 design languages</h3>
            <ul>
              <li>5 inconsistent approaches</li>
              <li>Limited component sharing</li>
              <li>Siloed team decisions</li>
              <li>Inconsistent user experience</li>
              <li>2-week design cycles</li>
            </ul>
          </div>
          <div className="glass col after">
            <h3>After: 1 unified system</h3>
            <ul>
              <li>Shared design foundation</li>
              <li>67 foundation components</li>
              <li>Weekly design syncs</li>
              <li>85% core pattern adoption</li>
              <li>1-week design sprints</li>
            </ul>
          </div>
        </div>
        <div className="glass pull-quote" style={{ marginTop: 20 }}>
          <p>
            &ldquo;This design foundation let us experiment rapidly with AI
            interfaces while maintaining quality.&rdquo;
          </p>
          <cite>— Design Lead, Google Cloud AI</cite>
        </div>
      </Section>

      <Section>
        <div className="section-head">
          <h2>Key <span className="shimmer">learnings</span></h2>
        </div>
        <div className="grid-2">
          <Learning
            title="Start with empathy, not enforcement."
            body="Understanding why teams made different choices was crucial. Authority comes from value, not title."
          />
          <Learning
            title="Make it easier, not mandatory."
            body="The system succeeded because it made teams' lives easier. Adoption through attraction beats compliance."
          />
          <Learning
            title="Embrace engineering culture."
            body="By speaking their language and understanding their constraints, design became a valued partner in ML innovation."
          />
          <Learning
            title="Design for the unknown."
            body="Building flexibility into the system let it accommodate AI features we couldn't yet imagine. Ambiguity is a design constraint."
          />
        </div>
      </Section>

      <NextCase href="/work/bmw" title="BMW: smart charging for a smarter grid" />
    </main>
  );
}

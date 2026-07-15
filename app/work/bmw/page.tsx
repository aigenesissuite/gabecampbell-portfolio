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
  title: "BMW Smart Charging — Case Study | Gabe Campbell",
  description:
    "BMW's first dynamic EV charging experience: ML-scheduled charging that cut peak-hour load 87% while guaranteeing a full battery by morning.",
};

const loadData: { hour: string; pct: number; peak?: boolean }[] = [
  { hour: "12am", pct: 15 },
  { hour: "3am", pct: 10 },
  { hour: "6am", pct: 12 },
  { hour: "9am", pct: 20 },
  { hour: "12pm", pct: 18 },
  { hour: "3pm", pct: 22 },
  { hour: "6pm", pct: 87, peak: true },
  { hour: "7pm", pct: 82, peak: true },
  { hour: "8pm", pct: 75, peak: true },
  { hour: "9pm", pct: 25 },
];

export default function BmwCase() {
  return (
    <main>
      {/* BMW brand wash: BMW blue / light blue / deep blue / silver */}
      <BrandMesh
        colors={[
          "rgba(28, 105, 212, 0.42)",
          "rgba(129, 196, 255, 0.36)",
          "rgba(6, 83, 182, 0.28)",
          "rgba(180, 195, 215, 0.32)",
        ]}
      />
      <CaseHero
        eyebrow="BMW · Product Designer · 2018 – 2020"
        title="Smart charging for a smarter grid"
        lede="How I helped pioneer BMW's first dynamic charging system — using machine learning to balance power grid load while creating a delightful experience for electric vehicle drivers."
        stats={[
          ["First", "dynamic charging at BMW"],
          ["$4.2M", "revenue generated"],
          ["87%", "peak load reduction"],
        ]}
      />

      <Section>
        <div className="section-head">
          <h2>The challenge</h2>
        </div>
        <div className="glass challenge-callout">
          Electric vehicles were creating a new problem: everyone charged at
          the same time.
        </div>
        <div className="prose" style={{ marginTop: 28 }}>
          <p>
            As BMW launched their electric vehicle line, we discovered an
            unexpected issue. Most drivers plugged in between 6–8 PM, creating
            massive spikes in power demand that threatened to overwhelm grids
            and raise electricity costs for everyone.
          </p>
          <p>
            We needed charging that intelligently distributed itself through
            the night while ensuring every driver had a full battery by
            morning. The real challenge: making grid optimization feel{" "}
            <strong>magical, not restrictive</strong>.
          </p>
        </div>
      </Section>

      <Section>
        <div className="glass chart">
          <h3>Peak load distribution — before smart charging</h3>
          <div className="bars">
            {loadData.map((d) => (
              <div
                key={d.hour}
                className={d.peak ? "bar peak" : "bar"}
                style={{ height: `${d.pct}%` }}
              >
                <span>{d.pct}%</span>
              </div>
            ))}
          </div>
          <div className="x-labels">
            {loadData.map((d) => (
              <div key={d.hour}>{d.hour}</div>
            ))}
          </div>
          <div className="legend">
            <span>
              <i style={{ background: "#ff6b5e" }} /> Peak hours creating grid
              strain
            </span>
            <span>
              <i style={{ background: "rgba(0,122,255,0.35)" }} /> Normal
              usage
            </span>
          </div>
        </div>
      </Section>

      <Section>
        <div className="section-head">
          <h2>Research &amp; discovery</h2>
          <p>
            Understanding drivers&apos; needs, anxieties, and behaviors around
            EV charging.
          </p>
        </div>
        <div className="grid-3">
          <div className="glass persona">
            <div className="who">
              <span className="avatar">🔧</span>
              <h3>
                Michael, 42
                <span>Software engineer · Palo Alto · 65-mi commute</span>
              </h3>
            </div>
            <ul>
              <li>Granular control over charging parameters</li>
              <li>API access for home automation</li>
              <li>Detailed analytics and usage data</li>
            </ul>
            <blockquote>
              &ldquo;I need my car&apos;s charging to integrate seamlessly
              with my solar panels and time-of-use rates.&rdquo;
            </blockquote>
          </div>
          <div className="glass persona">
            <div className="who">
              <span className="avatar">🌱</span>
              <h3>
                Sarah, 38
                <span>Sustainability director · Berkeley · 28-mi commute</span>
              </h3>
            </div>
            <ul>
              <li>Carbon footprint tracking</li>
              <li>Green energy source preferences</li>
              <li>Community impact visibility</li>
            </ul>
            <blockquote>
              &ldquo;Show me exactly how my charging choices affect the
              grid&apos;s renewable energy usage.&rdquo;
            </blockquote>
          </div>
          <div className="glass persona">
            <div className="who">
              <span className="avatar">👔</span>
              <h3>
                David, 48
                <span>Sales executive · San Jose · variable commute</span>
              </h3>
            </div>
            <ul>
              <li>Guaranteed readiness for unexpected trips</li>
              <li>Cost optimization without complexity</li>
              <li>Set-and-forget reliability</li>
            </ul>
            <blockquote>
              &ldquo;I need my car ready to go, but I don&apos;t want to think
              about it or pay more than necessary.&rdquo;
            </blockquote>
          </div>
        </div>

        <div className="grid-3" style={{ marginTop: 20 }}>
          <Learning
            title="Range anxiety is real."
            body="73% of drivers worried their car wouldn't be charged when needed — even with smart scheduling. Guarantees had to come before optimization."
          />
          <Learning
            title="Transparency builds trust."
            body="Users wanted to see exactly when and why their car would charge at specific times. Visibility was the feature."
          />
          <Learning
            title="Money talks."
            body="Showing actual dollar savings was 3× more effective than environmental benefits alone."
          />
        </div>
      </Section>

      <Section>
        <div className="section-head">
          <h2>The solution</h2>
          <p>
            An intelligent system that makes doing the right thing feel
            effortless.
          </p>
        </div>
        <div className="grid-3">
          <div className="glass card">
            <div className="icon">🧠</div>
            <h3>Predictive algorithm</h3>
            <p>
              Co-developed an ML algorithm that predicted optimal charging
              times from grid load and individual driving patterns.
            </p>
          </div>
          <div className="glass card">
            <div className="icon">⚡</div>
            <h3>Transparent control</h3>
            <p>
              An interface giving drivers full visibility and control over
              their charging schedule — override anytime, no penalty
              mystery.
            </p>
          </div>
          <div className="glass card">
            <div className="icon">🎮</div>
            <h3>Incentive design</h3>
            <p>
              A rewards system that made grid-friendly charging feel like
              winning, not compliance.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="section-head">
          <h2>Before / after — the charging flow</h2>
          <p>
            The shipped v1 charged the moment you plugged in. The redesign
            moved charging into the overnight off-peak window while
            guaranteeing readiness by departure time.
          </p>
        </div>
        <FigmaBoard
          file="bmw-connected · smart-charging.fig"
          note="Recreated for this portfolio — the original Figma files live on BMW hardware under NDA. Flows, states, and copy are faithful to what shipped."
        >
          <Frame label="Charging — v1 shipped" tag="before" w={240}>
            <WfRow style={{ justifyContent: "space-between" }}>
              <WfLine w="44%" h={10} tone="dark" />
              <WfLine w="18%" h={8} tone="light" />
            </WfRow>
            <WfBlock h={72}>Battery ring · 68% → charging now</WfBlock>
            <WfChip label="Started 6:14 PM — peak grid hours" tone="warn" />
            <WfChip label="$0.42/kWh peak rate" tone="warn" />
            <WfLine w="86%" h={7} tone="light" />
            <WfLine w="62%" h={7} tone="light" />
            <WfBtn label="Stop charging" tone="ghost" />
          </Frame>
          <Frame label="Smart schedule — redesign" tag="after" w={240} selected>
            <WfRow style={{ justifyContent: "space-between" }}>
              <WfLine w="44%" h={10} tone="dark" />
              <WfChip label="Ready by 7:30 AM" tone="good" />
            </WfRow>
            <WfBlock h={52}>Overnight timeline · 11:40 PM → 4:10 AM</WfBlock>
            <WfChip label="Off-peak window · $0.11/kWh" tone="info" />
            <WfChip label="Full charge guaranteed" tone="good" />
            <WfRow gap={8}>
              <WfBtn label="Charge now instead" tone="ghost" style={{ flex: 1 }} />
              <WfBtn label="Adjust departure" tone="primary" style={{ flex: 1 }} />
            </WfRow>
          </Frame>
          <Frame label="States — component system" w={200}>
            <WfChip label="● Scheduled · 11:40 PM" tone="info" />
            <WfLine w="90%" h={7} tone="light" />
            <WfChip label="● Charging · off-peak" tone="good" />
            <WfLine w="74%" h={7} tone="light" />
            <WfChip label="● Ready · saved $2.10" tone="good" />
            <WfLine w="82%" h={7} tone="light" />
            <WfChip label="● Override · no penalty" tone="neutral" />
          </Frame>
        </FigmaBoard>
      </Section>

      <Section>
        <div className="section-head">
          <h2>The <span className="shimmer">impact</span></h2>
        </div>
        <div className="stat-row">
          <Stat num="87%" label="peak load reduction" />
          <Stat num="$840" label="average annual driver savings" />
          <Stat num="94%" label="user satisfaction" />
          <Stat num="2.3M kg" label="CO₂ reduced" />
        </div>
      </Section>

      <Section>
        <div className="section-head">
          <h2>Key <span className="shimmer">learnings</span></h2>
        </div>
        <div className="grid-2">
          <Learning
            title="Make the right choice the easy choice."
            body="By optimizing for user convenience first, grid optimization happened as a natural outcome."
          />
          <Learning
            title="Transparency builds trust."
            body="Showing users exactly how the system worked made them far more likely to participate."
          />
          <Learning
            title="Small incentives drive big changes."
            body="Gamification turned charging from a chore into something drivers looked forward to."
          />
          <Learning
            title="Design for the ecosystem."
            body="Considering drivers, utilities, and BMW together produced a solution that worked for everyone."
          />
        </div>
      </Section>

      <NextCase href="/work/aios" title="aiOS: the AI employee, live in production" />
    </main>
  );
}

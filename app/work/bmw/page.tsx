import type { Metadata } from "next";
import { CaseHero, Learning, NextCase, Stat } from "@/components/site";

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

      <section className="section">
        <div className="wrap">
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
        </div>
      </section>

      <section className="section">
        <div className="wrap">
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
        </div>
      </section>

      <section className="section">
        <div className="wrap">
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
        </div>
      </section>

      <section className="section">
        <div className="wrap">
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
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>The impact</h2>
          </div>
          <div className="stat-row">
            <Stat num="87%" label="peak load reduction" />
            <Stat num="$840" label="average annual driver savings" />
            <Stat num="94%" label="user satisfaction" />
            <Stat num="2.3M kg" label="CO₂ reduced" />
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
        </div>
      </section>

      <NextCase href="/work/aios" title="aiOS: the AI employee, live in production" />
    </main>
  );
}

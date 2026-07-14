/* eslint-disable react/no-array-index-key */

/**
 * HeroStream — rising iMessage-style task chips above the hero title,
 * ported from the aiOS homepage fountain (hero-imessage-stream.tsx).
 *
 * Same physics: blue "me" bubbles drift right, glass "them" bubbles
 * drift left, chips emit from the title mouth and rise on a light
 * continuous spray. Pool is design + development tasks (the work this
 * portfolio is about), fully deterministic so SSR output is stable.
 */

type Side = "me" | "them";
type Reaction = "heart" | "thumbsup" | "exclaim";

type Entry = { side: Side; text: string; reaction?: Reaction };

const POOL: Entry[] = [
  { side: "me", text: "Design system shipped 🎨" },
  { side: "them", text: "Component library synced", reaction: "thumbsup" },
  { side: "me", text: "PR merged ✅" },
  { side: "them", text: "Figma → production" },
  { side: "me", text: "Landing page live 🚀" },
  { side: "them", text: "Onboarding flow approved", reaction: "heart" },
  { side: "me", text: "Design tokens updated" },
  { side: "them", text: "Build passing ✅" },
  { side: "me", text: "Prototype sent" },
  { side: "them", text: "Accessibility pass done" },
  { side: "me", text: "Voice agent deployed 📞" },
  { side: "them", text: "Animation polished ✨", reaction: "heart" },
  { side: "me", text: "Case study published" },
  { side: "them", text: "API wired" },
  { side: "me", text: "Carousel rendered 🖼️" },
  { side: "them", text: "Eval results in 📊", reaction: "exclaim" },
];

const DRIFT_RIGHT = [148, 228, 312, 178, 268, 198, 288, 162];
const DRIFT_RIGHT_MOBILE = [58, 92, 128, 72, 108, 82, 118, 64];
const ROT = [-0.4, 0.7, -0.3, 0.8, -0.5, 0.65, -0.35, 0.45];

const STREAM_COUNT = 10;
const STAGGER_SEC = 0.9;
const SPAWN_LANE_FRAC = 0.14;

export function HeroStream() {
  const bubbles = [];
  let meI = 0;
  let themI = 0;
  for (let i = 0; i < STREAM_COUNT; i++) {
    const entry = POOL[(i * 3) % POOL.length];
    const isMe = entry.side === "me";
    const laneIdx = isMe ? meI++ : themI++;
    const idx = laneIdx % DRIFT_RIGHT.length;
    const sign = isMe ? 1 : -1;
    const drift = DRIFT_RIGHT[idx] * sign;
    const driftMobile = DRIFT_RIGHT_MOBILE[idx] * sign;
    const rotEnd = ROT[(i + laneIdx) % ROT.length] * 0.3;
    const duration = 15 + ((i * 13 + laneIdx * 5) % 11) * 0.7;
    const spawnPct = Math.round((i / (STREAM_COUNT - 1)) * 22);
    bubbles.push({
      entry,
      drift,
      driftMobile,
      rotEnd,
      duration,
      spawnPct,
      delay: i * STAGGER_SEC + laneIdx * 0.16,
    });
  }

  return (
    <div className="hero-stream" aria-hidden>
      {bubbles.map((b, i) => (
        <div
          key={i}
          className={`hs-bubble hs-bubble--${b.entry.side}`}
          style={{
            ["--lane-x" as string]: `${Math.round(b.drift * SPAWN_LANE_FRAC)}px`,
            ["--drift-d" as string]: `${b.drift}px`,
            ["--drift-m" as string]: `${b.driftMobile}px`,
            ["--rot-end" as string]: `${b.rotEnd}deg`,
            bottom: `${b.spawnPct}%`,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.duration}s`,
            zIndex: 2 + (i % 9),
          }}
        >
          <span className="hs-text">{b.entry.text}</span>
          {b.entry.reaction ? (
            <span
              className={`hs-tapback hs-tapback--${b.entry.side} hs-tapback--${b.entry.reaction}`}
            >
              {b.entry.reaction === "heart"
                ? "❤️"
                : b.entry.reaction === "thumbsup"
                  ? "👍"
                  : "‼️"}
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}

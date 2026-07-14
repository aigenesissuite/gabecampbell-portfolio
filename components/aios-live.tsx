"use client";

/* eslint-disable @next/next/no-img-element */

import { useCallback, useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/* ConvoRail — real iMessage conversations rendered by the production  */
/* engine that powers aiOS deployments. Muted loops, play in viewport. */
/* ------------------------------------------------------------------ */

const CONVOS = [
  {
    src: "/media/convo-support.mp4",
    poster: "/media/convo-support-poster.jpg",
    title: "A customer, answered and remembered",
    caption:
      "Inventory, shipping cutoffs, and the customer's own purchase history — in one reply.",
  },
  {
    src: "/media/convo-campaign.mp4",
    poster: "/media/convo-campaign-poster.jpg",
    title: "A campaign, from one text",
    caption:
      "Best past creative pulled, new hooks staged, losers auto-paused. The owner approves the headlines.",
  },
  {
    src: "/media/convo-leads.mp4",
    poster: "/media/convo-leads-poster.jpg",
    title: "The morning brief",
    caption:
      "The pipeline was worked overnight. Qualified leads booked, tire kickers routed, brief delivered.",
  },
];

function ConvoPhone({
  src,
  poster,
  title,
  caption,
}: {
  src: string;
  poster: string;
  title: string;
  caption: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.35 }
    );
    io.observe(video);
    return () => io.disconnect();
  }, []);

  return (
    <figure className="convo">
      <div className="convo-frame">
        <video
          ref={ref}
          src={src}
          poster={poster}
          muted
          loop
          playsInline
          preload="none"
          aria-label={title}
        />
      </div>
      <figcaption>
        <strong>{title}</strong>
        <span>{caption}</span>
      </figcaption>
    </figure>
  );
}

export function ConvoRail() {
  return (
    <div className="convo-rail">
      {CONVOS.map((c) => (
        <ConvoPhone key={c.src} {...c} />
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* GenThread — a real Gen conversation, rendered with the production   */
/* iMessage engine (SwiftUI, 60fps) that powers aiOS deployments.      */
/* ------------------------------------------------------------------ */

export function GenThread() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.35 }
    );
    io.observe(video);
    return () => io.disconnect();
  }, []);

  return (
    <div className="convo-frame gen-thread">
      <video
        ref={ref}
        src="/media/gen-thread.mp4"
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="A real conversation with Gen, the aiOS commander, over iMessage"
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* AgentConstellation — lifted 1:1 from the aiOS production codebase   */
/* (genesis-bos/src/components/agent-constellation.tsx). Agent cards   */
/* with typewriter activity streams, live metric counters, radial      */
/* glow + pulse ring on the working agent, dashed connection lines.   */
/* ------------------------------------------------------------------ */

function hexToRgba(hex: string, a: number) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${a})`;
}

const AGENTS = [
  {
    logo: "/logos/imessage.png",
    title: "Support",
    color: "#34C759",
    activities: [
      "Resolving ticket #4821, shipping delay...",
      "Auto-replied to warranty question",
      "Escalated VIP complaint to manager",
      "Processing return for order #9102",
      "Generated FAQ from 50 recent chats",
    ],
    metric: { label: "resolved today", base: 47 },
  },
  {
    logo: "/logos/linkedin.png",
    title: "Sales",
    color: "#0A66C2",
    activities: [
      "Sent follow-up to 12 warm leads",
      "Booked discovery call, Apex HVAC",
      "Qualifying inbound from LinkedIn DM",
      "Drafted proposal for Summit Dental",
      "Updated CRM pipeline, 3 moved to close",
    ],
    metric: { label: "leads contacted", base: 31 },
  },
  {
    logo: "/logos/meta.png",
    title: "Ads",
    color: "#0668E1",
    activities: [
      "Paused underperforming creative set B",
      "Scaled winner ad, ROAS 4.2x",
      "Generated 3 new static variants",
      "A/B testing headlines on Meta Feed",
      "CPL dropped to $18, new low",
    ],
    metric: { label: "ad spend optimized", base: 2400 },
  },
  {
    logo: "/logos/instagram.png",
    title: "Content",
    color: "#E1306C",
    activities: [
      "Published carousel, '5 Signs You Need AI'",
      "Drafting LinkedIn post for tomorrow",
      "Rendered 8 editorial slides",
      "Scheduled 4 posts across 2 accounts",
      "Analyzing engagement on last 10 posts",
    ],
    metric: { label: "posts this week", base: 22 },
  },
  {
    logo: "/logos/shopify.svg",
    title: "Ops",
    color: "#95BF47",
    activities: [
      "Compiled weekly revenue report",
      "Flagged invoice discrepancy, $2,400",
      "Synced Shopify inventory to dashboard",
      "Generated Monday morning brief",
      "Tracked 14 KPIs across 3 departments",
    ],
    metric: { label: "tasks automated", base: 89 },
  },
  {
    logo: "/logos/gmail.png",
    title: "Email",
    color: "#EA4335",
    activities: [
      "Answered after-hours inquiry, booked appt",
      "Auto-drafted reply to support request",
      "Flagged urgent email from VIP client",
      "Sent follow-up sequence to 8 prospects",
      "Sorted 42 emails into priority tiers",
    ],
    metric: { label: "emails handled", base: 18 },
  },
];

function StreamingText({
  texts,
  color,
  interval = 4000,
}: {
  texts: string[];
  color: string;
  interval?: number;
}) {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIdx((p) => (p + 1) % texts.length);
      setCharIdx(0);
      setDisplayed("");
    }, interval);
    return () => clearInterval(t);
  }, [texts, interval]);

  useEffect(() => {
    const text = texts[idx];
    if (charIdx >= text.length) return;
    const t = setTimeout(() => {
      setDisplayed(text.slice(0, charIdx + 1));
      setCharIdx((p) => p + 1);
    }, 18 + Math.random() * 12);
    return () => clearTimeout(t);
  }, [idx, charIdx, texts]);

  return (
    <span
      className="constellation-stream"
      style={{
        color: "rgba(60,60,67,0.75)",
        display: "-webkit-box",
        WebkitLineClamp: 2,
        WebkitBoxOrient: "vertical" as const,
        wordBreak: "break-word",
      }}
    >
      {displayed}
      <span className="constellation-cursor" style={{ color }}>
        |
      </span>
    </span>
  );
}

function MetricCounter({
  base,
  label,
  color,
}: {
  base: number;
  label: string;
  color: string;
}) {
  const [val, setVal] = useState(base);
  useEffect(() => {
    const t = setInterval(() => {
      if (Math.random() > 0.6) setVal((p) => p + 1);
    }, 3000 + Math.random() * 4000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="constellation-metric">
      <span className="constellation-metric-num" style={{ color }}>
        {val.toLocaleString()}
      </span>
      <span className="constellation-metric-label">{label}</span>
    </div>
  );
}

function ActiveCardRadialGlow({
  color,
  visible,
}: {
  color: string;
  visible: boolean;
}) {
  const top = hexToRgba(color, 0.24);
  const mid = hexToRgba(color, 0.09);
  return (
    <div
      aria-hidden
      style={{
        pointerEvents: "none",
        position: "absolute",
        inset: 0,
        zIndex: 0,
        borderRadius: 20,
        opacity: visible ? 1 : 0,
        transition: "opacity 0.8s cubic-bezier(0.22,1,0.36,1)",
        background: `
          radial-gradient(100% 82% at 50% 0%, ${top} 0%, ${mid} 42%, transparent 74%),
          radial-gradient(92% 64% at 82% 100%, ${hexToRgba(color, 0.14)} 0%, transparent 60%)
        `,
      }}
    />
  );
}

function PulseRing({ color }: { color: string }) {
  return (
    <span
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 1,
        borderRadius: 20,
        border: `1px solid ${color}`,
        opacity: 0,
        animation: "constellation-ring 3s ease-out 0s infinite",
      }}
    />
  );
}

function ConnectionLine({
  from,
  to,
  containerRef,
}: {
  from: number;
  to: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const [coords, setCoords] = useState<{
    x1: number;
    y1: number;
    x2: number;
    y2: number;
  } | null>(null);

  const update = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const cards = container.querySelectorAll("[data-agent-card]");
    const fromEl = cards[from] as HTMLElement | undefined;
    const toEl = cards[to] as HTMLElement | undefined;
    if (!fromEl || !toEl) return;
    const cr = container.getBoundingClientRect();
    const fr = fromEl.getBoundingClientRect();
    const tr = toEl.getBoundingClientRect();
    setCoords({
      x1: fr.left + fr.width / 2 - cr.left,
      y1: fr.top + fr.height / 2 - cr.top,
      x2: tr.left + tr.width / 2 - cr.left,
      y2: tr.top + tr.height / 2 - cr.top,
    });
  }, [from, to, containerRef]);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  if (!coords) return null;

  return (
    <line
      x1={coords.x1}
      y1={coords.y1}
      x2={coords.x2}
      y2={coords.y2}
      stroke="rgba(0,0,0,0.06)"
      strokeWidth={1}
      strokeDasharray="4 6"
    >
      <animate
        attributeName="stroke-dashoffset"
        from="0"
        to="-20"
        dur="2s"
        repeatCount="indefinite"
      />
    </line>
  );
}

const CONNECTIONS = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [0, 4],
  [1, 3],
  [2, 5],
];

function pickNextAgent(prev: number): number {
  let next: number;
  do {
    next = Math.floor(Math.random() * AGENTS.length);
  } while (next === prev);
  return next;
}

export function AgentConstellation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeAgent, setActiveAgent] = useState<number | null>(0);
  const prevRef = useRef(0);
  const tickRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const cycle = () => {
      setActiveAgent(null);
      tickRef.current = setTimeout(() => {
        const next = pickNextAgent(prevRef.current);
        prevRef.current = next;
        setActiveAgent(next);
        tickRef.current = setTimeout(cycle, 2200 + Math.random() * 1200);
      }, 600 + Math.random() * 300);
    };

    tickRef.current = setTimeout(cycle, 2800 + Math.random() * 800);
    return () => {
      if (tickRef.current) clearTimeout(tickRef.current);
    };
  }, []);

  return (
    <div ref={containerRef} className="constellation">
      <svg
        className="constellation-lines"
        style={{ overflow: "visible" }}
        aria-hidden
      >
        {CONNECTIONS.map(([f, t], i) => (
          <ConnectionLine key={i} from={f} to={t} containerRef={containerRef} />
        ))}
      </svg>

      <div className="constellation-grid">
        {AGENTS.map((agent, i) => {
          const isActive = activeAgent === i;
          return (
            <div
              key={agent.title}
              data-agent-card
              className="glass-surface constellation-card"
              style={{
                isolation: "isolate",
                border: isActive
                  ? `1.5px solid ${hexToRgba(agent.color, 0.38)}`
                  : "1.5px solid rgba(255,255,255,0.55)",
                boxShadow: isActive
                  ? `inset 0 1px 0 rgba(255,255,255,0.85), inset 0 -0.5px 0 rgba(0,0,0,0.04), inset 0 0 18px rgba(255,255,255,0.30), 0 0 36px ${hexToRgba(agent.color, 0.26)}, 0 0 48px ${hexToRgba(agent.color, 0.22)}, 0 14px 44px rgba(0,0,0,0.06)`
                  : "inset 0 1px 0 rgba(255,255,255,0.85), 0 1px 4px rgba(0,0,0,0.04)",
                transition:
                  "box-shadow 0.8s cubic-bezier(0.22,1,0.36,1), border-color 0.8s cubic-bezier(0.22,1,0.36,1)",
              }}
            >
              <ActiveCardRadialGlow color={agent.color} visible={isActive} />
              {isActive && <PulseRing color={agent.color} />}

              <div className="constellation-head">
                <div
                  className="constellation-logo"
                  style={{ background: hexToRgba(agent.color, 0.12) }}
                >
                  <img src={agent.logo} alt={agent.title} width={20} height={20} />
                </div>
                <div className="constellation-title">
                  <span className="constellation-name">{agent.title}</span>
                  <span className="constellation-status">
                    <span className="constellation-dot-wrap">
                      {isActive && (
                        <span
                          className="constellation-dot-ping"
                          style={{ background: agent.color }}
                        />
                      )}
                      <span
                        className="constellation-dot"
                        style={{
                          background: isActive
                            ? agent.color
                            : "rgba(0,0,0,0.12)",
                        }}
                      />
                    </span>
                    <span
                      className="constellation-status-label"
                      style={{
                        color: isActive ? agent.color : "rgba(60,60,67,0.35)",
                      }}
                    >
                      {isActive ? "working" : "ready"}
                    </span>
                  </span>
                </div>
              </div>

              <div
                className="constellation-activity"
                style={{
                  background: hexToRgba(agent.color, 0.05),
                  border: `1px solid ${hexToRgba(agent.color, 0.08)}`,
                }}
              >
                <div className="constellation-activity-head">
                  <span
                    className="constellation-activity-dot"
                    style={{ background: agent.color }}
                  />
                  <span
                    className="constellation-activity-label"
                    style={{ color: hexToRgba(agent.color, 0.5) }}
                  >
                    Live
                  </span>
                </div>
                <StreamingText
                  texts={agent.activities}
                  color={agent.color}
                  interval={4500 + i * 300}
                />
              </div>

              <MetricCounter
                base={agent.metric.base}
                label={agent.metric.label}
                color={agent.color}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* ConnectorRow — the real integration surface: aiOS operates the      */
/* tools a business already runs on, over secure OAuth.                */
/* ------------------------------------------------------------------ */

const CONNECTORS = [
  { logo: "/logos/gmail.png", name: "Gmail" },
  { logo: "/logos/google-calendar.svg", name: "Google Calendar" },
  { logo: "/logos/slack.png", name: "Slack" },
  { logo: "/logos/notion.svg", name: "Notion" },
  { logo: "/logos/shopify.svg", name: "Shopify" },
  { logo: "/logos/stripe.svg", name: "Stripe" },
  { logo: "/logos/instagram.png", name: "Instagram" },
  { logo: "/logos/meta.png", name: "Meta Ads" },
  { logo: "/logos/whatsapp.svg", name: "WhatsApp" },
  { logo: "/logos/linkedin.png", name: "LinkedIn" },
  { logo: "/logos/github.svg", name: "GitHub" },
  { logo: "/logos/calendly.png", name: "Calendly" },
  { logo: "/logos/hubspot.svg", name: "HubSpot" },
  { logo: "/logos/tiktok.svg", name: "TikTok" },
  { logo: "/logos/youtube.svg", name: "YouTube" },
  { logo: "/logos/twitter-x.svg", name: "X" },
];

export function ConnectorRow() {
  return (
    <div className="connector-row">
      {CONNECTORS.map((c, i) => (
        <div
          key={c.name}
          className="connector-tile glass-surface spotlight-card"
          style={{ animationDelay: `${(i % 8) * 0.35}s` }}
          title={c.name}
        >
          <img src={c.logo} alt={c.name} width={30} height={30} />
          <span>{c.name}</span>
        </div>
      ))}
    </div>
  );
}

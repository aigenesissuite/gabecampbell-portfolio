"use client";

import { useEffect, useRef, useState } from "react";

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
/* AgentRoster — ported from the aiOS design system (myaios.app        */
/* enterprise page): six agents, brand colors, streaming activity.     */
/* ------------------------------------------------------------------ */

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
    ],
    metric: "47 resolved today",
  },
  {
    logo: "/logos/linkedin.png",
    title: "Sales",
    color: "#0A66C2",
    activities: [
      "Sent follow-up to 12 warm leads",
      "Booked discovery call, Apex HVAC",
      "Qualifying inbound from LinkedIn DM",
      "Updated CRM pipeline, 3 moved to close",
    ],
    metric: "31 leads contacted",
  },
  {
    logo: "/logos/meta.png",
    title: "Ads",
    color: "#0668E1",
    activities: [
      "Paused underperforming creative set B",
      "Scaled winner ad, ROAS 4.2x",
      "A/B testing headlines on Meta Feed",
      "CPL dropped to $18, new low",
    ],
    metric: "$2.4K spend optimized",
  },
  {
    logo: "/logos/instagram.png",
    title: "Content",
    color: "#E1306C",
    activities: [
      "Published carousel, '5 Signs You Need AI'",
      "Drafting LinkedIn post for tomorrow",
      "Scheduled 4 posts across 2 accounts",
      "Analyzing engagement on last 10 posts",
    ],
    metric: "22 posts this week",
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
    ],
    metric: "89 tasks automated",
  },
  {
    logo: "/logos/gmail.png",
    title: "Email",
    color: "#EA4335",
    activities: [
      "Answered after-hours inquiry, booked appt",
      "Flagged urgent email from VIP client",
      "Sent follow-up sequence to 8 prospects",
      "Sorted 42 emails into priority tiers",
    ],
    metric: "18 emails handled",
  },
];

function AgentTile({
  logo,
  title,
  color,
  activities,
  metric,
  offset,
}: (typeof AGENTS)[number] & { offset: number }) {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const start = setTimeout(() => {
      const cycle = setInterval(() => {
        setVisible(false);
        setTimeout(() => {
          setIdx((i) => (i + 1) % activities.length);
          setVisible(true);
        }, 350);
      }, 3800);
      return () => clearInterval(cycle);
    }, offset * 700);
    return () => clearTimeout(start);
  }, [activities.length, offset]);

  return (
    <div
      className="agent-tile glass"
      style={{
        // @ts-expect-error CSS custom property
        "--agent-color": color,
      }}
    >
      <div className="agent-head">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo} alt={`${title} agent`} width={28} height={28} />
        <span className="agent-name">{title}</span>
        <span className="agent-live">
          <span className="agent-live-dot" /> live
        </span>
      </div>
      <div className={`agent-activity ${visible ? "on" : ""}`}>
        {activities[idx]}
      </div>
      <div className="agent-metric">{metric}</div>
    </div>
  );
}

export function AgentRoster() {
  return (
    <div className="roster">
      {AGENTS.map((a, i) => (
        <AgentTile key={a.title} {...a} offset={i} />
      ))}
    </div>
  );
}

/**
 * RoutingTributaries — the "One app to Rule Them All" constellation,
 * ported 1:1 from the aiOS production codebase (pricing-section.tsx).
 * Colored streams flow from each provider down into the aiOS hub;
 * every lane is tinted to its brand, with a pulse traveler riding
 * logo → hub on a stagger. Real brand assets, no redraws.
 */

type ProviderNode = { id: string; name: string; x: number };
type Category = { label: string; centerX: number; nodes: ProviderNode[] };

const TRIBUTARY_CATEGORIES: Category[] = [
  {
    label: "Reasoning",
    centerX: 80,
    nodes: [
      { id: "gpt", name: "OpenAI", x: 50 },
      { id: "claude", name: "Claude", x: 110 },
    ],
  },
  {
    label: "Image",
    centerX: 190,
    nodes: [{ id: "nano", name: "Nano Banana 2 (Gemini)", x: 190 }],
  },
  {
    label: "Video",
    centerX: 270,
    nodes: [{ id: "higgs", name: "Higgsfield", x: 270 }],
  },
  {
    label: "Ads",
    centerX: 350,
    nodes: [{ id: "meta", name: "Meta", x: 350 }],
  },
  {
    label: "Outreach",
    centerX: 490,
    nodes: [
      { id: "imsg", name: "iMessage", x: 438 },
      { id: "phone", name: "Phone", x: 490 },
      { id: "gmail", name: "Gmail", x: 542 },
    ],
  },
  {
    label: "Growth",
    centerX: 690,
    nodes: [
      { id: "ig", name: "Instagram", x: 638 },
      { id: "yt", name: "YouTube", x: 690 },
      { id: "linkedin", name: "LinkedIn", x: 742 },
    ],
  },
];

const BRAND_COLOR: Record<string, string> = {
  gpt: "#10A37F",
  claude: "#D97757",
  nano: "#4285F4",
  higgs: "#FF6FA8",
  meta: "#0064E0",
  imsg: "#34C759",
  phone: "#34C759",
  gmail: "#EA4335",
  ig: "#E1306C",
  yt: "#FF0000",
  linkedin: "#0A66C2",
};

const HUB_X = 400;
const HUB_Y = 300;
const LOGO_Y = 74;
const LOGO_R = 24;

function tributaryPath(x0: number): string {
  const startY = LOGO_Y + LOGO_R + 4;
  return `M ${x0} ${startY} C ${x0} ${LOGO_Y + 130}, ${HUB_X} ${HUB_Y - 80}, ${HUB_X} ${HUB_Y}`;
}

const BRAND_ASSETS: Record<string, string> = {
  gpt: "/logos/openai-mark.svg",
  claude: "/logos/claude-mark.svg",
  nano: "/logos/gemini-mark.svg",
  higgs: "/logos/higgsfield.svg",
  meta: "/logos/meta.png",
  imsg: "/logos/imessage.png",
  phone: "/logos/phone.svg",
  gmail: "/logos/gmail.png",
  ig: "/logos/instagram.png",
  yt: "/logos/youtube-play.svg",
  linkedin: "/logos/linkedin.png",
};

const BRAND_TILED: Record<string, boolean> = {
  gpt: true,
  claude: true,
  nano: true,
  higgs: true,
  yt: true,
  phone: true,
  gmail: true,
  meta: true,
  imsg: false,
  ig: false,
  linkedin: false,
};

const BRAND_FULLBLEED: Record<string, boolean> = { higgs: true, phone: true };
const BRAND_FILL_TILE: Record<string, boolean> = { meta: true };
const BRAND_WHITE_UNDERLAY: Record<string, boolean> = {
  gpt: true,
  claude: true,
  nano: true,
  yt: true,
  gmail: true,
  meta: true,
};

function BrandMark({ id }: { id: string }) {
  const src = BRAND_ASSETS[id];
  if (!src) return <circle r={LOGO_R} fill="#86868b" />;

  const tiled = BRAND_TILED[id] === true;
  const fullBleed = BRAND_FULLBLEED[id] === true;
  const fillTile = BRAND_FILL_TILE[id] === true;
  const TILE = 46;
  const TILE_HALF = TILE / 2;
  const TILE_RADIUS = 11;
  const showGlass = tiled && !fullBleed;
  const clipId = `bm-clip-${id}`;

  const INSET = Math.round(TILE * 0.72);
  const ICON = fullBleed || fillTile ? TILE : tiled ? INSET : 48;
  const ICON_HALF = ICON / 2;
  const whiteUnder = BRAND_WHITE_UNDERLAY[id] === true;

  if (showGlass) {
    return (
      <g>
        <defs>
          <clipPath id={clipId}>
            <rect
              x={-TILE_HALF}
              y={-TILE_HALF}
              width={TILE}
              height={TILE}
              rx={TILE_RADIUS}
              ry={TILE_RADIUS}
            />
          </clipPath>
        </defs>
        <g clipPath={`url(#${clipId})`}>
          {whiteUnder && (
            <rect
              x={-TILE_HALF}
              y={-TILE_HALF}
              width={TILE}
              height={TILE}
              fill="#ffffff"
            />
          )}
          <image
            href={src}
            x={-ICON_HALF}
            y={-ICON_HALF}
            width={ICON}
            height={ICON}
            preserveAspectRatio="xMidYMid meet"
          />
        </g>
        <rect
          x={-TILE_HALF}
          y={-TILE_HALF}
          width={TILE}
          height={TILE}
          rx={TILE_RADIUS}
          ry={TILE_RADIUS}
          fill="none"
          stroke="rgba(0,0,0,0.1)"
          strokeWidth={0.75}
          style={{
            filter:
              "drop-shadow(0 1px 1px rgba(0,0,0,0.06)) drop-shadow(0 6px 14px rgba(0,0,0,0.08))",
          }}
        />
      </g>
    );
  }

  return (
    <g>
      <image
        href={src}
        x={-ICON_HALF}
        y={-ICON_HALF}
        width={ICON}
        height={ICON}
        preserveAspectRatio="xMidYMid meet"
        style={
          fullBleed
            ? {
                filter:
                  "drop-shadow(0 1px 1px rgba(0,0,0,0.06)) drop-shadow(0 6px 14px rgba(0,0,0,0.08))",
              }
            : undefined
        }
      />
    </g>
  );
}

export function RoutingTributaries() {
  const allNodes = TRIBUTARY_CATEGORIES.flatMap((c) => c.nodes);

  return (
    <div
      className="routing-tributaries"
      style={{ position: "relative", margin: "0 auto", width: "100%", maxWidth: 760 }}
    >
      <div
        aria-hidden
        className="aios-hub-aura"
        style={{
          pointerEvents: "none",
          position: "absolute",
          left: "16%",
          right: "16%",
          top: "60%",
          bottom: "60%",
          zIndex: 0,
          background:
            "radial-gradient(50% 60% at 50% 50%, rgba(0,122,255,0.10) 0%, rgba(0,122,255,0.02) 60%, rgba(0,122,255,0) 100%)",
        }}
      />

      <svg
        viewBox="0 0 800 360"
        role="img"
        aria-label="aiOS routes each task to the best provider — OpenAI and Claude for reasoning, Gemini for image, Higgsfield for video, Meta for ads, iMessage Phone and Gmail for outreach, Instagram YouTube and LinkedIn for growth."
        style={{ position: "relative", zIndex: 1, display: "block", width: "100%", height: "auto" }}
      >
        <defs>
          <linearGradient
            id="aios-shimmer-grad"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0%" stopColor="#1d1d1f" />
            <stop offset="42%" stopColor="#1d1d1f" />
            <stop offset="50%" stopColor="#5aa9ff" />
            <stop offset="58%" stopColor="#1d1d1f" />
            <stop offset="100%" stopColor="#1d1d1f" />
            <animate attributeName="x1" values="-120%; 100%" dur="3.6s" repeatCount="indefinite" />
            <animate attributeName="x2" values="-20%; 200%" dur="3.6s" repeatCount="indefinite" />
          </linearGradient>
        </defs>

        {TRIBUTARY_CATEGORIES.map((c) => (
          <text
            key={c.label}
            x={c.centerX}
            y={28}
            textAnchor="middle"
            style={{
              fontFamily:
                "-apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.18em",
              fill: "#86868b",
              textTransform: "uppercase",
              userSelect: "none",
            }}
          >
            {c.label.toUpperCase()}
          </text>
        ))}

        {allNodes.map((n) => (
          <path
            key={`base-${n.id}`}
            d={tributaryPath(n.x)}
            fill="none"
            stroke={BRAND_COLOR[n.id] ?? "#0A84FF"}
            strokeOpacity={0.32}
            strokeWidth={0.75}
            strokeLinecap="round"
            pathLength={100}
          />
        ))}
        {allNodes.map((n, i) => (
          <path
            key={`pulse-${n.id}`}
            className="tributary-line-pulse"
            d={tributaryPath(n.x)}
            pathLength={100}
            stroke={BRAND_COLOR[n.id] ?? "#0A84FF"}
            strokeOpacity={0.95}
            style={{ ["--pulse-delay" as string]: `${i * 320}ms` }}
          />
        ))}

        {allNodes.map((n) => (
          <g key={`node-${n.id}`} transform={`translate(${n.x},${LOGO_Y})`}>
            <title>{n.name}</title>
            <BrandMark id={n.id} />
          </g>
        ))}

        <g className="aios-hub-breathing" style={{ transformOrigin: `${HUB_X}px ${HUB_Y}px` }}>
          <rect
            x={HUB_X - 98}
            y={HUB_Y - 28}
            width={196}
            height={56}
            rx={28}
            ry={28}
            fill="rgba(255,255,255,0.94)"
            stroke="rgba(0,122,255,0.22)"
            strokeWidth={0.75}
            style={{ filter: "drop-shadow(0 8px 22px rgba(0,30,90,0.10))" }}
          />
          <image
            href="/logos/imessage.png"
            x={HUB_X - 42.5}
            y={HUB_Y - 18}
            width={26}
            height={26}
            preserveAspectRatio="xMidYMid meet"
            style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.10))" }}
          />
          <text
            x={HUB_X - 9.5}
            y={HUB_Y - 5}
            textAnchor="start"
            dominantBaseline="middle"
            style={{
              fontFamily:
                "-apple-system, BlinkMacSystemFont, 'SF Pro Display', system-ui, sans-serif",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: "-0.015em",
              fill: "url(#aios-shimmer-grad)",
              userSelect: "none",
            }}
          >
            aiOS
          </text>
          <text
            x={HUB_X}
            y={HUB_Y + 19}
            textAnchor="middle"
            style={{
              fontFamily:
                "-apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif",
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: "0.20em",
              fill: "#007AFF",
              textTransform: "uppercase",
              userSelect: "none",
            }}
          >
            ORCHESTRATOR
          </text>
        </g>
      </svg>
    </div>
  );
}

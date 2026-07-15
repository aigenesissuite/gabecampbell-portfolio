import type { CSSProperties, ReactNode } from "react";

/**
 * Design-artifact system: Figma-style boards, frames, and wireframe
 * primitives used to recreate case-study process work (originals live on
 * company hardware under NDA — every board is honestly labeled as a
 * recreation). Pure server components, no JS shipped.
 */

const COLLAB_COLORS = ["#ff7262", "#0fa958", "#699bf7"];

function FigmaMark() {
  return (
    <svg width="12" height="17" viewBox="0 0 38 57" aria-hidden="true">
      <path fill="#ff7262" d="M19 0H9.5a9.5 9.5 0 0 0 0 19H19V0Z" />
      <path fill="#a259ff" d="M19 19H9.5a9.5 9.5 0 0 0 0 19H19V19Z" />
      <path fill="#f24e1e" d="M38 9.5A9.5 9.5 0 0 1 28.5 19H19V0h9.5A9.5 9.5 0 0 1 38 9.5Z" />
      <path fill="#1abcfe" d="M38 28.5a9.5 9.5 0 1 1-19 0 9.5 9.5 0 0 1 19 0Z" />
      <path fill="#0acf83" d="M9.5 57A9.5 9.5 0 0 0 19 47.5V38H9.5a9.5 9.5 0 0 0 0 19Z" />
    </svg>
  );
}

export function FigmaBoard({
  file,
  zoom = "68%",
  note,
  children,
}: {
  file: string;
  zoom?: string;
  note?: string;
  children: ReactNode;
}) {
  return (
    <figure className="fig-board">
      <div className="fig-chrome">
        <div className="fig-file">
          <FigmaMark />
          <span>{file}</span>
          <span className="fig-sub">Drafts · Design</span>
        </div>
        <div className="fig-collab">
          {COLLAB_COLORS.map((c) => (
            <span key={c} className="fig-avatar" style={{ background: c }} />
          ))}
          <span className="fig-zoom">{zoom}</span>
        </div>
      </div>
      <div className="fig-canvas">{children}</div>
      {note ? <figcaption className="artifact-note">{note}</figcaption> : null}
    </figure>
  );
}

export function Frame({
  label,
  tag,
  w = 240,
  selected = false,
  children,
}: {
  label: string;
  tag?: "before" | "after";
  w?: number;
  selected?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="fig-frame-wrap" style={{ width: w }}>
      <div className={selected ? "fig-label sel" : "fig-label"}>
        {tag ? <span className={`ba-tag ${tag}`}>{tag}</span> : null}
        {label}
      </div>
      <div className={selected ? "fig-frame sel" : "fig-frame"}>{children}</div>
    </div>
  );
}

/* ---------- Wireframe primitives ---------- */

export function WfLine({
  w = "100%",
  h = 8,
  tone = "mid",
  style,
}: {
  w?: string | number;
  h?: number;
  tone?: "light" | "mid" | "dark";
  style?: CSSProperties;
}) {
  return <div className={`wf-line ${tone}`} style={{ width: w, height: h, ...style }} />;
}

export function WfBlock({
  h = 56,
  style,
  children,
}: {
  h?: number;
  style?: CSSProperties;
  children?: ReactNode;
}) {
  return (
    <div className="wf-block" style={{ height: h, ...style }}>
      {children}
    </div>
  );
}

export function WfBtn({
  label,
  tone = "primary",
  style,
}: {
  label: string;
  tone?: "primary" | "ghost" | "danger" | "success";
  style?: CSSProperties;
}) {
  return (
    <div className={`wf-btn ${tone}`} style={style}>
      {label}
    </div>
  );
}

export function WfChip({
  label,
  tone = "neutral",
}: {
  label: string;
  tone?: "neutral" | "warn" | "good" | "info";
}) {
  return <span className={`wf-chip ${tone}`}>{label}</span>;
}

export function WfInput({ label }: { label: string }) {
  return <div className="wf-input">{label}</div>;
}

export function WfRow({
  gap = 8,
  style,
  children,
}: {
  gap?: number;
  style?: CSSProperties;
  children: ReactNode;
}) {
  return (
    <div className="wf-row" style={{ gap, ...style }}>
      {children}
    </div>
  );
}

export function WfBubble({
  side,
  children,
}: {
  side: "bot" | "user";
  children: ReactNode;
}) {
  return <div className={`wf-bubble ${side}`}>{children}</div>;
}

export function WfStepper({ total, active }: { total: number; active: number }) {
  return (
    <div className="wf-stepper">
      {Array.from({ length: total }, (_, i) => (
        <span key={i} className={i < active ? "on" : ""} />
      ))}
    </div>
  );
}

/* ---------- Real-product screenshot gallery ---------- */

export function ShotGrid({ children }: { children: ReactNode }) {
  return <div className="shot-grid">{children}</div>;
}

export function Shot({
  src,
  alt,
  caption,
  href,
  width,
  height,
}: {
  src: string;
  alt: string;
  caption: string;
  href?: string;
  width?: number;
  height?: number;
}) {
  const img = (
    <img src={src} alt={alt} loading="lazy" width={width} height={height} />
  );
  return (
    <figure className="shot glass">
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {img}
        </a>
      ) : (
        img
      )}
      <figcaption>
        {caption}
        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer" className="shot-link">
            {" "}
            Open live ↗
          </a>
        ) : null}
      </figcaption>
    </figure>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

/**
 * CountUp — scroll-triggered number counter, ported verbatim from the
 * aiOS enterprise page (genesis-bos rtr-content.tsx): cubic ease-out,
 * runs once when 30% visible.
 */
function fmtFinal(end: number, decimals: number, prefix: string, suffix: string) {
  const formatted =
    decimals > 0 ? end.toFixed(decimals) : Math.round(end).toLocaleString("en-US");
  return `${prefix}${formatted}${suffix}`;
}

export function CountUp({
  end,
  duration = 1800,
  prefix = "",
  suffix = "",
  decimals = 0,
}: {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  // SSR/no-JS renders the real number — the count-up is progressive
  // enhancement, never the source of truth (a "0" stat is a lie).
  const [display, setDisplay] = useState(fmtFinal(end, decimals, prefix, suffix));
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(fmtFinal(end, decimals, prefix, suffix));
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasRun.current) return;
        hasRun.current = true;
        io.disconnect();
        let start: number | null = null;
        const step = (ts: number) => {
          if (start === null) start = ts;
          const progress = Math.min((ts - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = eased * end;
          const formatted =
            decimals > 0
              ? current.toFixed(decimals)
              : Math.round(current).toLocaleString("en-US");
          setDisplay(`${prefix}${formatted}${suffix}`);
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [end, duration, prefix, suffix, decimals]);

  return <span ref={ref}>{display}</span>;
}

/**
 * AnimatedStat — parses display strings like "50M+", "$15K/mo", "427%",
 * "5×", "$2.3M" and animates the numeric part. Strings without a number
 * ("Live") render statically.
 */
export function AnimatedStat({ value }: { value: string }) {
  const m = value.match(/^([^0-9]*)([\d.,]+)(.*)$/);
  if (!m) return <>{value}</>;
  const [, prefix, num, suffix] = m;
  const end = parseFloat(num.replace(/,/g, ""));
  if (Number.isNaN(end)) return <>{value}</>;
  const decimals = num.includes(".") ? num.split(".")[1].length : 0;
  return (
    <CountUp end={end} prefix={prefix} suffix={suffix} decimals={decimals} />
  );
}

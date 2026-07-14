"use client";

import { useEffect } from "react";

/**
 * Progressive-enhancement micro-animations: elements below the fold get a
 * fade-up reveal as they enter the viewport. No-JS or reduced-motion users
 * simply see everything, always visible.
 *
 * Also ports the aiOS Apple-spotlight mechanic 1:1 from genesis-bos
 * (landing-interactive.tsx): one global mousemove listener writes
 * --mx/--my into every visible .spotlight-card / .apple-spotlight-bg,
 * and --page-spot-x/y for the page-level spotlight wash.
 */
export function Fx() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const candidates = document.querySelectorAll<HTMLElement>(
      ".glass, .glass-surface, .section-head, .prose"
    );
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    for (const el of candidates) {
      const r = el.getBoundingClientRect();
      if (r.top > window.innerHeight * 0.9) {
        el.classList.add("reveal");
        io.observe(el);
      }
    }
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    document.body.classList.add("page-spotlight-target");
    let raf = 0;
    const onMove = (ev: MouseEvent) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        document.body.style.setProperty("--page-spot-x", `${ev.clientX}px`);
        document.body.style.setProperty("--page-spot-y", `${ev.clientY}px`);
        const targets = document.querySelectorAll<HTMLElement>(
          ".spotlight-card, .apple-spotlight-bg"
        );
        for (const el of targets) {
          const r = el.getBoundingClientRect();
          if (r.bottom < 0 || r.top > window.innerHeight) continue;
          el.style.setProperty("--mx", `${ev.clientX - r.left}px`);
          el.style.setProperty("--my", `${ev.clientY - r.top}px`);
        }
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
      document.body.classList.remove("page-spotlight-target");
    };
  }, []);

  return null;
}

"use client";

import { useEffect } from "react";

/**
 * Progressive-enhancement micro-animations: elements below the fold get a
 * fade-up reveal as they enter the viewport. No-JS or reduced-motion users
 * simply see everything, always visible.
 */
export function Fx() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const candidates = document.querySelectorAll<HTMLElement>(
      ".glass, .section-head, .prose"
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
  return null;
}

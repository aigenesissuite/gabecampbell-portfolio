"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export type Chapter = {
  src: string;
  poster: string;
  title: string;
  duration: string;
};

export function StoriesPlayer({ chapters }: { chapters: Chapter[] }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [started, setStarted] = useState(false);

  const current = chapters[idx];

  const goTo = useCallback(
    (i: number, autoplay: boolean) => {
      const clamped = Math.max(0, Math.min(chapters.length - 1, i));
      setIdx(clamped);
      setProgress(0);
      const v = videoRef.current;
      if (!v) return;
      // src swap happens via React; play after the new source is ready
      requestAnimationFrame(() => {
        const vid = videoRef.current;
        if (!vid) return;
        vid.load();
        if (autoplay) {
          vid.play().catch(() => setPlaying(false));
          setPlaying(true);
          setStarted(true);
        }
      });
    },
    [chapters.length]
  );

  const togglePlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().catch(() => undefined);
      setPlaying(true);
      setStarted(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onTime = () => {
      if (v.duration) setProgress(v.currentTime / v.duration);
    };
    const onEnded = () => {
      if (idx < chapters.length - 1) {
        goTo(idx + 1, true);
      } else {
        setPlaying(false);
        setProgress(1);
      }
    };
    v.addEventListener("timeupdate", onTime);
    v.addEventListener("ended", onEnded);
    return () => {
      v.removeEventListener("timeupdate", onTime);
      v.removeEventListener("ended", onEnded);
    };
  }, [idx, chapters.length, goTo]);

  return (
    <div className="stories">
      <div className="stories-stage video-frame">
        <div className="stories-bars">
          {chapters.map((c, i) => (
            <button
              key={c.src}
              className="sbar"
              aria-label={`Chapter ${i + 1}: ${c.title}`}
              onClick={() => goTo(i, true)}
            >
              <i
                style={{
                  width:
                    i < idx ? "100%" : i === idx ? `${progress * 100}%` : "0%",
                }}
              />
            </button>
          ))}
        </div>

        <video
          ref={videoRef}
          src={current.src}
          poster={current.poster}
          preload="metadata"
          playsInline
          onClick={togglePlay}
        />

        <div className="stories-label">
          <span className="idx">
            {idx + 1}/{chapters.length}
          </span>
          {current.title}
          <span className="dur">{current.duration}</span>
        </div>

        {idx > 0 && (
          <button
            className="stories-zone prev"
            aria-label="Previous chapter"
            onClick={() => goTo(idx - 1, playing || started)}
          >
            ‹
          </button>
        )}
        {idx < chapters.length - 1 && (
          <button
            className="stories-zone next"
            aria-label="Next chapter"
            onClick={() => goTo(idx + 1, playing || started)}
          >
            ›
          </button>
        )}

        {!playing && (
          <button className="stories-play" aria-label="Play" onClick={togglePlay}>
            <span>▶</span>
          </button>
        )}
      </div>

      <div className="stories-chips">
        {chapters.map((c, i) => (
          <button
            key={c.src}
            className={i === idx ? "chip active" : "chip"}
            onClick={() => goTo(i, true)}
          >
            <b>{i + 1}</b> {c.title} <span className="dur">{c.duration}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

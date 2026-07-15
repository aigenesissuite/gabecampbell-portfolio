"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export type Chapter = {
  src: string;
  poster: string;
  title: string;
  duration: string;
};

const SPEEDS = [1, 1.2, 1.5, 2] as const;
const DEFAULT_SPEED = 1;

function fmt(sec: number) {
  if (!Number.isFinite(sec)) return "0:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function StoriesPlayer({ chapters }: { chapters: Chapter[] }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const speedRef = useRef(DEFAULT_SPEED);
  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [speed, setSpeed] = useState(DEFAULT_SPEED);
  const [started, setStarted] = useState(false);

  const current = chapters[idx];

  const goTo = useCallback(
    (i: number, autoplay: boolean) => {
      const clamped = Math.max(0, Math.min(chapters.length - 1, i));
      setIdx(clamped);
      setProgress(0);
      setTime(0);
      requestAnimationFrame(() => {
        const vid = videoRef.current;
        if (!vid) return;
        vid.load();
        vid.playbackRate = speedRef.current;
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
      v.playbackRate = speedRef.current;
      v.play().catch(() => undefined);
      setPlaying(true);
      setStarted(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  }, []);

  const cycleSpeed = useCallback(() => {
    const next =
      SPEEDS[(SPEEDS.indexOf(speedRef.current as (typeof SPEEDS)[number]) + 1) % SPEEDS.length];
    speedRef.current = next;
    setSpeed(next);
    const v = videoRef.current;
    if (v) v.playbackRate = next;
  }, []);

  const seek = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    const t = (Number(e.target.value) / 1000) * v.duration;
    v.currentTime = t;
    setTime(t);
    setProgress(t / v.duration);
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.playbackRate = speedRef.current;
    const onTime = () => {
      setTime(v.currentTime);
      if (v.duration) setProgress(v.currentTime / v.duration);
    };
    const onMeta = () => {
      setDuration(v.duration || 0);
      v.playbackRate = speedRef.current;
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
    v.addEventListener("loadedmetadata", onMeta);
    v.addEventListener("ended", onEnded);
    return () => {
      v.removeEventListener("timeupdate", onTime);
      v.removeEventListener("loadedmetadata", onMeta);
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

        {started && (
          <div className="stories-controls">
            <button
              className="sc-btn"
              aria-label={playing ? "Pause" : "Play"}
              onClick={togglePlay}
            >
              {playing ? "❚❚" : "▶"}
            </button>
            <input
              className="sc-scrub"
              type="range"
              min={0}
              max={1000}
              value={duration ? Math.round((time / duration) * 1000) : 0}
              onChange={seek}
              aria-label="Seek"
            />
            <span className="sc-time">
              {fmt(time)} / {fmt(duration)}
            </span>
            <button
              className="sc-speed"
              aria-label={`Playback speed ${speed}x`}
              onClick={cycleSpeed}
            >
              {speed}×
            </button>
          </div>
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

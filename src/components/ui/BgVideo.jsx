"use client";
import { useEffect, useRef, useState } from "react";
import manifest from "../../lib/media-manifest.json";
import Picture from "./Picture";
import styles from "./BgVideo.module.css";

function videoAllowed() {
  if (typeof window === "undefined") return false;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const reducedData = window.matchMedia("(prefers-reduced-data: reduce)").matches;
  const saveData = navigator.connection?.saveData === true;
  const small = window.matchMedia("(max-width: 767.98px)").matches;
  return !(reducedMotion || reducedData || saveData || small);
}

/**
 * Muted looping background video with a responsive poster.
 * - SSR renders the poster only; the <video> mounts client-side if allowed
 *   (not on mobile / reduced-motion / reduced-data / save-data).
 * - Plays only while on screen (IntersectionObserver) and while `active`.
 */
export default function BgVideo({ name, alt, sizes = "100vw", active = true, priority = false, className = "" }) {
  const meta = manifest.videos?.[name];
  const ref = useRef(null);
  const wrapRef = useRef(null);
  const [allowed, setAllowed] = useState(false);
  const [playing, setPlaying] = useState(false);
  const inView = useRef(false);

  useEffect(() => {
    setAllowed(videoAllowed());
  }, []);

  useEffect(() => {
    if (!allowed) return undefined;
    const el = wrapRef.current;
    const io = new IntersectionObserver(
      ([entry]) => {
        inView.current = entry.isIntersecting;
        sync();
      },
      { threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allowed]);

  useEffect(() => {
    sync();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, allowed]);

  function sync() {
    const v = ref.current;
    if (!v) return;
    if (inView.current && active) {
      const p = v.play();
      if (p && p.catch) p.catch(() => {});
    } else {
      v.pause();
    }
  }

  if (!meta) {
    return <Picture name={`${name}-poster`} alt={alt} sizes={sizes} className={className} />;
  }

  return (
    <div ref={wrapRef} className={`${styles.wrap} ${className}`}>
      <Picture name={meta.poster} alt={alt} sizes={sizes} priority={priority} />
      {allowed && (
        <video
          ref={ref}
          className={`${styles.video} ${playing ? styles.on : ""}`}
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
          aria-hidden="true"
          tabIndex={-1}
          onPlaying={() => setPlaying(true)}
        >
          <source src={meta.webm} type="video/webm" />
          <source src={meta.mp4} type="video/mp4" />
        </video>
      )}
    </div>
  );
}

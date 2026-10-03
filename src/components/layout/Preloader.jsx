"use client";
import { useEffect, useRef, useState } from "react";
import { gsap, prefersReducedMotion } from "../../lib/gsap";
import { markReady } from "../../lib/ready";
import styles from "./Preloader.module.css";

export default function Preloader() {
  const [complete, setComplete] = useState(false);
  const containerRef = useRef(null);
  const numberRef = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    // Only show once per session or on first visit
    if (sessionStorage.getItem("gue_preloaded") === "1" || prefersReducedMotion()) {
      markReady();
      setComplete(true);
      return;
    }

    const counter = { val: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem("gue_preloaded", "1");
        markReady();
        gsap.to(containerRef.current, {
          yPercent: -100,
          duration: 0.9,
          ease: "wipe",
          onComplete: () => setComplete(true),
        });
      },
    });

    tl.to(counter, {
      val: 100,
      duration: 1.6,
      ease: "power2.inOut",
      onUpdate: () => {
        if (numberRef.current) {
          numberRef.current.textContent = String(Math.floor(counter.val)).padStart(2, "0");
        }
        if (barRef.current) {
          barRef.current.style.width = `${counter.val}%`;
        }
      },
    });

    return () => {
      tl.kill();
    };
  }, []);

  if (complete) return null;

  return (
    <div ref={containerRef} className={styles.preloader} aria-hidden="true">
      <div className={styles.content}>
        <div className={styles.brand}>GUE REALTY</div>
        <div className={styles.counterWrap}>
          <span ref={numberRef} className={styles.number}>00</span>
          <span className={styles.percent}>%</span>
        </div>
        <div className={styles.barTrack}>
          <div ref={barRef} className={styles.barFill} />
        </div>
        <div className={styles.tagline}>OPERATIONAL & ACTIVE · RC 8371222</div>
      </div>
    </div>
  );
}

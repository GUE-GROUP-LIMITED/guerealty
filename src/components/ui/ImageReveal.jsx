"use client";
import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP, prefersReducedMotion } from "../../lib/gsap";
import Picture from "./Picture";
import styles from "./ImageReveal.module.css";

export default function ImageReveal({
  name,
  alt,
  sizes = "100vw",
  priority = false,
  aspectRatio = "16 / 9",
  className = "",
}) {
  const containerRef = useRef(null);
  const innerRef = useRef(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const el = containerRef.current;
      const inner = innerRef.current;
      if (!el || !inner) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          once: true,
        },
      });

      tl.fromTo(
        el,
        { clipPath: "inset(100% 0% 0% 0%)" },
        { clipPath: "inset(0% 0% 0% 0%)", duration: 1.2, ease: "wipe" }
      );

      tl.fromTo(
        inner,
        { scale: 1.3 },
        { scale: 1, duration: 1.4, ease: "power3.out" },
        0
      );
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className={`${styles.container} ${className}`}
      style={{ aspectRatio }}
    >
      <div ref={innerRef} className={styles.inner}>
        <Picture
          name={name}
          alt={alt}
          sizes={sizes}
          priority={priority}
          fill
        />
      </div>
    </div>
  );
}

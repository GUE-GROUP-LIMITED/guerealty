"use client";
import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP, prefersReducedMotion } from "../../lib/gsap";
import Picture from "./Picture";
import styles from "./WordReveal.module.css";

export default function WordReveal({
  text,
  imageName = "balconies",
  imageAlt = "Modern Architecture",
  className = "",
}) {
  const containerRef = useRef(null);
  const wordsRef = useRef([]);

  const words = text.split(" ");

  useGSAP(
    () => {
      if (prefersReducedMotion()) {
        gsap.set(wordsRef.current, { opacity: 1 });
        return;
      }

      const el = containerRef.current;
      if (!el) return;

      gsap.fromTo(
        wordsRef.current,
        { opacity: 0.18 },
        {
          opacity: 1,
          stagger: 0.05,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top 75%",
            end: "bottom 55%",
            scrub: 0.8,
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={`${styles.wrap} ${className}`}>
      <div className={styles.grid}>
        <div className={styles.textCol}>
          <p className={styles.paragraph}>
            {words.map((word, i) => (
              <span
                key={i}
                ref={(el) => (wordsRef.current[i] = el)}
                className={styles.word}
              >
                {word}
              </span>
            ))}
          </p>
        </div>

        <div className={styles.imageCol}>
          <div className={styles.thumbCard}>
            <Picture
              name={imageName}
              alt={imageAlt}
              sizes="(min-width: 1024px) 340px, 40vw"
              fill={false}
              className={styles.picture}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

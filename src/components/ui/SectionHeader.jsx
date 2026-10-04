"use client";
import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "../../lib/gsap";
import styles from "./SectionHeader.module.css";

export default function SectionHeader({
  title,
  descriptor,
  category,
  className = "",
}) {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);

  useGSAP(
    () => {
      const el = containerRef.current;
      if (!el) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      });

      tl.fromTo(
        titleRef.current,
        { yPercent: 40, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.9, ease: "power3.out" }
      );

      if (descRef.current) {
        tl.fromTo(
          descRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
          "-=0.6"
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={`${styles.header} ${className}`}>
      <div className={styles.leftCol}>
        {category && (
          <div className={styles.categoryBadge}>
            <span>{typeof category === "string" ? category.replace(/^\/\/\s*/, "") : category}</span>
          </div>
        )}
        <h2 ref={titleRef} className={styles.title}>
          {title}
        </h2>
      </div>
      {descriptor && (
        <div ref={descRef} className={styles.rightCol}>
          <div className={styles.descriptor}>
            {typeof descriptor === "string" ? (
              <p>{descriptor}</p>
            ) : (
              descriptor
            )}
          </div>
        </div>
      )}
    </div>
  );
}

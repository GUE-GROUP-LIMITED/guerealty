"use client";
import { useRef } from "react";
import { gsap, SplitText, useGSAP, prefersReducedMotion } from "../../lib/gsap";
import styles from "./SplitHeading.module.css";

export default function SplitHeading({
  children,
  as: Tag = "h1",
  className = "",
  trigger = true,
  delay = 0,
}) {
  const textRef = useRef(null);

  useGSAP(
    () => {
      if (!trigger || prefersReducedMotion()) return;
      const el = textRef.current;
      if (!el) return;

      const split = new SplitText(el, { type: "lines,words", linesClass: styles.lineWrap });
      gsap.fromTo(
        split.words,
        { yPercent: 110, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.1,
          stagger: 0.04,
          ease: "power3.out",
          delay,
        }
      );

      return () => {
        split.revert();
      };
    },
    { scope: textRef, dependencies: [trigger, delay] }
  );

  return (
    <Tag ref={textRef} className={`${styles.heading} ${className}`}>
      {children}
    </Tag>
  );
}

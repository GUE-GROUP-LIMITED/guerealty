"use client";
import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP, prefersReducedMotion } from "../../lib/gsap";
import Picture from "./Picture";
import BgVideo from "./BgVideo";
import styles from "./BentoGrid.module.css";

const BENTO_STATS = [
  {
    num: "06",
    value: 6,
    prefix: "0",
    suffix: "",
    label: "Core Services",
    sub: "Marketing, Investment, Development, Appraisal & Management",
    colSpan: 1,
  },
  {
    num: "2025",
    value: 2025,
    prefix: "",
    suffix: "",
    label: "Incorporation",
    sub: "RC 8371222 · Registered 26 March 2025",
    colSpan: 1,
  },
  {
    num: "04",
    value: 4,
    prefix: "0",
    suffix: "",
    label: "Group Entities",
    sub: "Gue Group Limited, Cyber NG, Engineering & Cyber BE",
    colSpan: 1,
  },
  {
    num: "100%",
    value: 100,
    prefix: "",
    suffix: "%",
    label: "Operational",
    sub: "Managing active school assets & development land",
    colSpan: 1,
  },
];

export default function BentoGrid() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(
    () => {
      const el = containerRef.current;
      if (!el) return;

      const reduced = prefersReducedMotion();

      // Cards entrance
      if (!reduced) {
        gsap.fromTo(
          cardsRef.current.filter(Boolean),
          { y: 60, opacity: 0, scale: 0.96 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.9,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              once: true,
            },
          }
        );
      }

      // Numbers count up
      cardsRef.current.filter(Boolean).forEach((card) => {
        const numEl = card.querySelector("[data-num-target]");
        if (!numEl) return;
        const targetVal = parseFloat(numEl.getAttribute("data-num-target"));
        const prefix = numEl.getAttribute("data-prefix") || "";
        const suffix = numEl.getAttribute("data-suffix") || "";

        const obj = { val: 0 };
        gsap.to(obj, {
          val: targetVal,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            once: true,
          },
          onUpdate: () => {
            const current = Math.floor(obj.val);
            const formatted = prefix === "0" && current < 10 ? `0${current}` : `${current}`;
            numEl.textContent = `${prefix !== "0" ? prefix : ""}${formatted}${suffix}`;
          },
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={styles.bentoWrap}>
      <div className={styles.grid}>
        {/* Row 1, Card 1: Stat 1 */}
        <div
          ref={(el) => (cardsRef.current[0] = el)}
          className={`${styles.card} ${styles.statCard}`}
        >
          <div className={styles.statNumber}>
            <span
              data-num-target={BENTO_STATS[0].value}
              data-prefix={BENTO_STATS[0].prefix}
              data-suffix={BENTO_STATS[0].suffix}
            >
              {BENTO_STATS[0].num}
            </span>
          </div>
          <div className={styles.statMeta}>
            <h3 className={styles.statLabel}>{BENTO_STATS[0].label}</h3>
            <p className={styles.statSub}>{BENTO_STATS[0].sub}</p>
          </div>
        </div>

        {/* Row 1, Intentional empty cell / spacer on desktop */}
        <div className={`${styles.emptyCell} ${styles.desktopOnly}`} aria-hidden="true" />

        {/* Row 1, Card 2: Stat 2 */}
        <div
          ref={(el) => (cardsRef.current[1] = el)}
          className={`${styles.card} ${styles.statCard}`}
        >
          <div className={styles.statNumber}>
            <span
              data-num-target={BENTO_STATS[1].value}
              data-prefix={BENTO_STATS[1].prefix}
              data-suffix={BENTO_STATS[1].suffix}
            >
              {BENTO_STATS[1].num}
            </span>
          </div>
          <div className={styles.statMeta}>
            <h3 className={styles.statLabel}>{BENTO_STATS[1].label}</h3>
            <p className={styles.statSub}>{BENTO_STATS[1].sub}</p>
          </div>
        </div>

        {/* Row 1, Card 3: Stat 3 */}
        <div
          ref={(el) => (cardsRef.current[2] = el)}
          className={`${styles.card} ${styles.statCard}`}
        >
          <div className={styles.statNumber}>
            <span
              data-num-target={BENTO_STATS[2].value}
              data-prefix={BENTO_STATS[2].prefix}
              data-suffix={BENTO_STATS[2].suffix}
            >
              {BENTO_STATS[2].num}
            </span>
          </div>
          <div className={styles.statMeta}>
            <h3 className={styles.statLabel}>{BENTO_STATS[2].label}</h3>
            <p className={styles.statSub}>{BENTO_STATS[2].sub}</p>
          </div>
        </div>

        {/* Row 2: Wide Video/Image Card (span 2 cols) */}
        <div
          ref={(el) => (cardsRef.current[3] = el)}
          className={`${styles.card} ${styles.mediaCard}`}
        >
          <BgVideo
            name="film-b"
            alt="Futuristic Real Estate Technology"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className={styles.mediaFill}
          />
          <div className={styles.mediaOverlay}>
            <span className={styles.mediaTag}>NEXT-GEN DELIVERY</span>
            <span className={styles.mediaTitle}>Digital Property Ecosystem</span>
          </div>
        </div>

        {/* Row 2, Card 4: Stat 4 */}
        <div
          ref={(el) => (cardsRef.current[4] = el)}
          className={`${styles.card} ${styles.statCard} ${styles.alignRight}`}
        >
          <div className={styles.statNumber}>
            <span
              data-num-target={BENTO_STATS[3].value}
              data-prefix={BENTO_STATS[3].prefix}
              data-suffix={BENTO_STATS[3].suffix}
            >
              {BENTO_STATS[3].num}
            </span>
          </div>
          <div className={styles.statMeta}>
            <h3 className={styles.statLabel}>{BENTO_STATS[3].label}</h3>
            <p className={styles.statSub}>{BENTO_STATS[3].sub}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

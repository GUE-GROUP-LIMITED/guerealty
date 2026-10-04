"use client";
import { useRef } from "react";
import Link from "next/link";
import { gsap, useGSAP, prefersReducedMotion } from "../../lib/gsap";
import Picture from "../../components/ui/Picture";
import MagneticButton from "../../components/ui/MagneticButton";
import styles from "./About.module.css";

const CREDENTIALS = [
  { label: "Company", value: "GUE REALTY LIMITED" },
  { label: "Parent Group", value: "GUE GROUP LIMITED" },
  { label: "Registration", value: "RC - 8371222" },
  { label: "Date of Registration", value: "Mar 26, 2025" },
  { label: "Nature of Business", value: "Real Estate Activities" },
  { label: "Focus", value: "Marketing, Investment, Development, Appraisal, Management" },
];

export default function AboutClient() {
  const containerRef = useRef(null);
  const heroContentRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(
    () => {
      const reduced = prefersReducedMotion();
      if (reduced) return;

      // Hero reveal
      if (heroContentRef.current) {
        gsap.from(heroContentRef.current.children, {
          y: 40,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          delay: 0.2,
        });
      }

      // Credentials stagger reveal
      if (cardsRef.current.length > 0) {
        gsap.from(cardsRef.current.filter(Boolean), {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current[0],
            start: "top 85%",
            once: true,
          },
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={styles.pageWrap}>
      {/* Cinematic Hero */}
      <section className={styles.hero}>
        <div className={styles.heroMedia}>
          <Picture
            name="tower-dusk"
            alt="GUE Realty Architecture"
            sizes="100vw"
            priority
            className={styles.heroImg}
          />
          <div className={styles.heroOverlay} />
        </div>

        <div ref={heroContentRef} className={styles.heroContent}>
          <div className={styles.eyebrowBadge}>
            <span className={styles.badgeDot} />
            <span>ABOUT · GUE REALTY LIMITED</span>
          </div>

          <h1 className={styles.heroTitle}>
            Building Trust Through Structured Real Estate Delivery
          </h1>

          <p className={styles.heroSub}>
            GUE Realty Limited is an active subsidiary of GUE Group Limited, focused on practical,
            value-driven property services including marketing, investment, development, appraisal, and management.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <div className={styles.container}>
        <section className={styles.mvSection}>
          <div className={styles.mvGrid}>
            <div className={styles.mvCard}>
              <div className={styles.cardGlowMission} />
              <div>
                <div className={`${styles.mvTag} ${styles.missionTag}`}>
                  <span className={styles.badgeDot} />
                  <span>Corporate Mission</span>
                </div>
                <h2 className={styles.mvTitle}>Mission</h2>
              </div>
              <p className={styles.mvText}>
                Deliver innovative real estate marketing, investment, development, appraisal,
                and management solutions that connect buyers, sellers, and investors.
              </p>
            </div>

            <div className={styles.mvCard}>
              <div className={styles.cardGlowVision} />
              <div>
                <div className={`${styles.mvTag} ${styles.visionTag}`}>
                  <span className={styles.badgeDot} />
                  <span>Corporate Vision</span>
                </div>
                <h2 className={styles.mvTitle}>Vision</h2>
              </div>
              <p className={styles.mvText}>
                Build a trusted real estate platform that enhances property value and drives
                sustainable growth in the real estate sector.
              </p>
            </div>
          </div>
        </section>

        {/* Credentials Snapshot */}
        <section className={styles.credentialsSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Credentials Snapshot</h2>
          </div>

          <div className={styles.credGrid}>
            {CREDENTIALS.map((item, idx) => (
              <div
                key={item.label}
                ref={(el) => (cardsRef.current[idx] = el)}
                className={styles.credCard}
              >
                <span className={styles.credLabel}>{item.label}</span>
                <p className={styles.credValue}>{item.value}</p>
              </div>
            ))}
          </div>

          {/* Bottom CTA Strip */}
          <div className={styles.ctaStrip}>
            <div>
              <h3 className={styles.ctaHeading}>GUE Realty Limited · A Gue Group Company</h3>
              <p className={styles.ctaSub}>
                RC 8371222 · Tax ID: 2521508949024 · Registered 26 March 2025 · Nigeria.
                Operating under Gue Group Limited (RC 7501599).
              </p>
            </div>
            <div className={styles.ctaButtons}>
              <MagneticButton strength={0.3}>
                <Link href="/contact" className={styles.primaryBtn}>
                  <span>Get in Touch</span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </MagneticButton>
              <MagneticButton strength={0.2}>
                <Link href="/properties" className={styles.secondaryBtn}>
                  <span>View Properties</span>
                </Link>
              </MagneticButton>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

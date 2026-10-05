"use client";
import { useRef } from "react";
import Link from "next/link";
import { gsap, useGSAP, prefersReducedMotion } from "../../lib/gsap";
import Picture from "../../components/ui/Picture";
import MagneticButton from "../../components/ui/MagneticButton";
import styles from "./Properties.module.css";

const PORTFOLIO_ITEMS = [
  {
    title: "Managed School Properties",
    body: "Operational education-focused properties under active asset management.",
    imageName: "balconies",
  },
  {
    title: "Acquired Development Land",
    body: "Land bank positioned for staged residential and commercial project delivery.",
    imageName: "city-dusk",
  },
  {
    title: "Upcoming Project Releases",
    body: "Opportunities are released with clear marketing, investment, and management pathways.",
    imageName: "glass-towers",
  },
];

export default function PropertiesClient() {
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

      // Portfolio cards stagger reveal
      if (cardsRef.current.length > 0) {
        gsap.from(cardsRef.current.filter(Boolean), {
          y: 60,
          opacity: 0,
          duration: 0.9,
          stagger: 0.12,
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
            name="glass-towers"
            alt="Development pipeline"
            sizes="100vw"
            priority
            className={styles.heroImg}
          />
          <div className={styles.heroOverlay} />
        </div>

        <div ref={heroContentRef} className={styles.heroContent}>
          <div className={styles.eyebrowBadge}>
            <span>PROPERTIES · GUE REALTY</span>
          </div>

          <h1 className={styles.heroTitle}>
            Portfolio Focus and Development Pipeline
          </h1>

          <p className={styles.heroSub}>
            Our portfolio includes managed school assets and acquired land earmarked for
            residential and commercial development, supported by appraisal and management services.
          </p>
        </div>
      </section>

      {/* Portfolio Focus Cards */}
      <div className={styles.container}>
        <section className={styles.portfolioSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Portfolio Focus</h2>
          </div>

          <div className={styles.portfolioGrid}>
            {PORTFOLIO_ITEMS.map((item, idx) => (
              <div
                key={item.title}
                ref={(el) => (cardsRef.current[idx] = el)}
                className={styles.propertyCard}
              >
                <div className={styles.cardMediaWrap}>
                  <Picture
                    name={item.imageName}
                    alt={item.title}
                    sizes="(min-width: 900px) 33vw, 100vw"
                    className={styles.cardImg}
                  />
                  <div className={styles.cardMediaOverlay} />
                  <div className={styles.cardBadge}>0{idx + 1} / 0{PORTFOLIO_ITEMS.length}</div>
                </div>

                <div className={styles.cardContent}>
                  <div>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <p className={styles.cardBody}>{item.body}</p>
                  </div>

                  <div className={styles.cardMetaRow}>
                    <div className={styles.cardStatus}>
                      <span className={styles.statusIndicator} />
                      <span>GUE REALTY</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Request a Portfolio Brief Card */}
          <div className={styles.briefStrip}>
            <h2 className={styles.briefHeading}>Request a portfolio brief</h2>
            <p className={styles.briefSub}>
              Get current availability, location summaries, and engagement options from our team.
            </p>
            <MagneticButton strength={0.3}>
              <Link href="/contact" className={styles.primaryBtn}>
                <span>Request Details</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </MagneticButton>
          </div>
        </section>
      </div>
    </div>
  );
}

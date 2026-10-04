"use client";
import { useRef } from "react";
import Link from "next/link";
import { gsap, useGSAP, prefersReducedMotion } from "../../lib/gsap";
import Picture from "../../components/ui/Picture";
import MagneticButton from "../../components/ui/MagneticButton";
import styles from "./Services.module.css";

const SERVICES_DATA = [
  {
    id: 1,
    title: "Real Estate Marketing",
    description:
      "Connecting buyers and sellers through targeted property marketing — digital listings, site visits, client matching, and negotiation support for residential and commercial properties.",
    features: ["Property Listings", "Buyer & Seller Matching", "Digital Marketing", "Negotiation Support"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
        <path d="M4 11V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
        <path d="M2 11h20v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-2z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Property Investment",
    description:
      "Connecting investors with high-potential real estate assets — land, residential, and commercial properties — with guidance on acquisition, portfolio building, and returns.",
    features: ["Land Acquisition", "Investment Advisory", "Portfolio Management", "ROI Analysis"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Property Development",
    description:
      "End-to-end real estate development from land acquisition through to project completion, focusing on residential and commercial properties that serve real community needs.",
    features: ["Site Planning", "Construction Oversight", "Contractor Management", "Project Delivery"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <line x1="9" y1="22" x2="9" y2="22.01" />
        <line x1="15" y1="22" x2="15" y2="22.01" />
        <line x1="8" y1="6" x2="8" y2="6.01" />
        <line x1="16" y1="6" x2="16" y2="6.01" />
        <line x1="8" y1="10" x2="8" y2="10.01" />
        <line x1="16" y1="10" x2="16" y2="10.01" />
        <line x1="8" y1="14" x2="8" y2="14.01" />
        <line x1="16" y1="14" x2="16" y2="14.01" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Property Appraisal",
    description:
      "Professional valuation and appraisal services for residential, commercial, and land assets — accurate, independent assessments for sales, purchase, finance, and legal purposes.",
    features: ["Market Valuation", "Due Diligence", "Comparative Analysis", "Appraisal Reports"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Property Management",
    description:
      "Professional management of residential and commercial assets — tenant relations, maintenance coordination, rent collection, and compliance — protecting and growing property value.",
    features: ["Tenant Management", "Maintenance Coordination", "Rent Collection", "Asset Reporting"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Diaspora Property Services",
    description:
      "Trusted property acquisition, management, and investment services for Nigerians abroad — giving the diaspora a safe and transparent route to own and grow property at home.",
    features: ["Remote Acquisition", "Title Verification", "Transparent Documentation", "Local Management"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

export default function ServicesClient() {
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

      // Services stagger reveal
      if (cardsRef.current.length > 0) {
        gsap.from(cardsRef.current.filter(Boolean), {
          y: 50,
          opacity: 0,
          duration: 0.85,
          stagger: 0.1,
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
            name="city-dusk"
            alt="Real estate developments"
            sizes="100vw"
            priority
            className={styles.heroImg}
          />
          <div className={styles.heroOverlay} />
        </div>

        <div ref={heroContentRef} className={styles.heroContent}>
          <div className={styles.eyebrowBadge}>
            <span className={styles.badgeDot} />
            <span>// OUR SERVICES</span>
          </div>

          <h1 className={styles.heroTitle}>Complete Real Estate Solutions</h1>

          <p className={styles.heroSub}>
            From marketing a single property to managing a full portfolio — GUE Realty delivers professional
            real estate services rooted in the MEMART objects of the company.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <div className={styles.container}>
        <section className={styles.servicesSection}>
          <div className={styles.servicesGrid}>
            {SERVICES_DATA.map((service, idx) => (
              <div
                key={service.id}
                ref={(el) => (cardsRef.current[idx] = el)}
                className={styles.serviceCard}
              >
                <div>
                  <div className={styles.serviceHeader}>
                    <span className={styles.serviceIndex}>0{service.id}</span>
                    <div className={styles.serviceIconWrap}>{service.icon}</div>
                  </div>

                  <div className={styles.serviceBody} style={{ marginTop: "24px" }}>
                    <h2 className={styles.serviceTitle}>{service.title}</h2>
                    <p className={styles.serviceDesc}>{service.description}</p>
                  </div>
                </div>

                <div className={styles.featureList}>
                  {service.features.map((feature) => (
                    <span key={feature} className={styles.featurePill}>
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Group Strip */}
          <div className={styles.groupStrip}>
            <div className={styles.groupInfo}>
              <h2 className={styles.groupTitle}>GUE Realty Limited · A Gue Group Company</h2>
              <p className={styles.groupLegal}>
                RC 8371222 · Tax ID: 2521508949024 · Registered 26 March 2025 · Nigeria.<br />
                Operating under Gue Group Limited (RC 7501599).
              </p>
            </div>

            <div className={styles.groupActions}>
              <MagneticButton strength={0.3}>
                <Link href="/contact" className={styles.primaryBtn}>
                  <span>Get in Touch</span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </MagneticButton>
              <MagneticButton strength={0.2}>
                <a
                  href="https://www.guegroup.com"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.secondaryBtn}
                >
                  <span>Gue Group →</span>
                </a>
              </MagneticButton>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

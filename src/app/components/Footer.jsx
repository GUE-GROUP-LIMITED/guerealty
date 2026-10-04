"use client";
import Link from "next/link";
import { footerLinks, footerBlurb, footerLegal, brandTagline, copyright } from "../../content/site";
import styles from "./Footer.module.css";

const MARQUEE_ITEMS = [
  "LAGOS",
  "ABUJA",
  "PROPERTY INVESTMENT",
  "DEVELOPMENT PIPELINE",
  "ASSET MANAGEMENT",
  "COMMERCIAL",
  "RESIDENTIAL",
  "DIASPORA SERVICES",
  "GUE GROUP",
  "PORT HARCOURT",
  "VALUATION & APPRAISAL",
];

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      {/* Marquee ticker */}
      <div className={styles.marqueeSection} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          <div className={styles.marqueeGroup}>
            {MARQUEE_ITEMS.map((item, i) => (
              <span key={`m1-${i}`} className={styles.marqueeItem}>
                <span>{item}</span>
                <span className={styles.marqueeDot}>✦</span>
              </span>
            ))}
          </div>
          <div className={styles.marqueeGroup} aria-hidden="true">
            {MARQUEE_ITEMS.map((item, i) => (
              <span key={`m2-${i}`} className={styles.marqueeItem}>
                <span>{item}</span>
                <span className={styles.marqueeDot}>✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className={styles.mainGrid}>
        <div className={styles.brandCol}>
          <Link href="/" className={styles.brandBadge} aria-label="GUE Realty Home">
            <img
              src="/logo.png"
              alt="GUE Realty Limited Logo"
              className={styles.footerLogoImg}
              width={48}
              height={48}
            />
            <div className={styles.brandInfo}>
              <span className={styles.brandName}>GUE REALTY</span>
              <span className={styles.brandSub}>LIMITED · RC 8371222</span>
            </div>
          </Link>
          <p className={styles.blurb}>{footerBlurb}</p>
          <div className={styles.legalBlock}>
            {footerLegal.map((line, i) => (
              <p key={i} className={styles.legalLine}>{line}</p>
            ))}
          </div>
        </div>

        {/* Links columns */}
        <div className={styles.linksGrid}>
          {Object.entries(footerLinks).map(([heading, items]) => (
            <div key={heading} className={styles.linkCol}>
              <h4 className={styles.colHeading}>{heading}</h4>
              <ul className={styles.linkList}>
                {items.map((item) => (
                  <li key={item.label}>
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.linkItem}
                      >
                        <span>{item.label}</span>
                        <span className={styles.extArrow}>↗</span>
                      </a>
                    ) : (
                      <Link href={item.href} className={styles.linkItem}>
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Giant uppercase wordmark with logo emblem */}
      <div className={styles.wordmarkWrap}>
        <div className={styles.wordmarkEmblemWrap}>
          <img
            src="/logo.png"
            alt="GUE Realty Emblem"
            className={styles.wordmarkEmblem}
            width={64}
            height={64}
          />
        </div>
        <div className={styles.wordmark}>GUE REALTY</div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <span className={styles.copyrightText}>{copyright}</span>
        <span className={styles.taglineText}>{brandTagline}</span>
        <a
          href="https://www.guegroup.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.parentLink}
        >
          A GUE GROUP COMPANY ↗
        </a>
      </div>
    </footer>
  );
}
"use client";
import SectionHeader from "./SectionHeader";
import ImageReveal from "./ImageReveal";
import styles from "./TechnologySection.module.css";

export default function TechnologySection() {
  return (
    <section className={styles.section} aria-label="Technology and Development">
      <div className="wrap">
        <SectionHeader
          title="BUILT WITH NEXT-GEN TECHNOLOGY"
          descriptor="We combine structured real estate delivery and digital asset intelligence to create properties that endure, adapt, and appreciate."
          category="Technology & Standards"
        />

        <div className={styles.contentGrid}>
          <div className={styles.mainMediaWrap}>
            <ImageReveal
              name="glass-towers"
              alt="Next-Gen Architecture and Technology"
              aspectRatio="16 / 9"
              sizes="(min-width: 1024px) 70vw, 100vw"
            />
          </div>

          <div className={styles.sideInfo}>
            <div className={styles.sideThumb}>
              <ImageReveal
                name="city-dusk"
                alt="Smart Infrastructure"
                aspectRatio="16 / 10"
                sizes="(min-width: 1024px) 25vw, 50vw"
              />
            </div>
            <p className={styles.sideText}>
              GUE Realty Limited connects buyers, sellers, and investors through innovative real estate marketing,
              investment, development, appraisal, and asset management — enhancing property value and driving
              sustainable growth across Nigeria.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

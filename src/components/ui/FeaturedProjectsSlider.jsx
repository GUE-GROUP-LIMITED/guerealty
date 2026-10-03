"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { gsap, ScrollTrigger, useGSAP, prefersReducedMotion } from "../../lib/gsap";
import SectionHeader from "./SectionHeader";
import Picture from "./Picture";
import { services } from "../../content/services";
import styles from "./FeaturedProjectsSlider.module.css";

const SLIDE_IMAGES = [
  "tower-dusk",
  "city-dusk",
  "glass-towers",
  "balconies",
  "film-a-poster",
  "film-b-poster",
];

const SLIDE_YEARS = ["2025", "2025", "2026", "2025", "2025", "2026"];

export default function FeaturedProjectsSlider() {
  const [activeIndex, setActiveIndex] = useState(2); // start with middle item centered
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const slidesRef = useRef([]);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % services.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch swipe support
  const touchStartX = useRef(0);
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) nextSlide();
    else if (diff < -50) prevSlide();
  };

  useGSAP(
    () => {
      const track = trackRef.current;
      if (!track) return;

      slidesRef.current.forEach((slide, idx) => {
        if (!slide) return;
        const isCenter = idx === activeIndex;
        const dist = Math.abs(idx - activeIndex);

        gsap.to(slide, {
          scale: isCenter ? 1.05 : Math.max(0.85, 0.95 - dist * 0.05),
          opacity: isCenter ? 1 : Math.max(0.4, 0.7 - dist * 0.15),
          duration: 0.6,
          ease: "power3.out",
        });
      });
    },
    { dependencies: [activeIndex], scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className={styles.section}
      data-cursor="Drag"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="Featured Real Estate Projects"
    >
      <div className="wrap">
        <SectionHeader
          title="FEATURED PROJECTS"
          descriptor="Explore our latest developments, portfolio properties, and structured real estate offerings across Nigeria."
          category="// Portfolio Focus"
        />
      </div>

      <div className={styles.sliderOuter}>
        <div
          ref={trackRef}
          className={styles.track}
          style={{
            transform: `translateX(calc(50% - ${activeIndex * 360 + 180}px))`,
          }}
        >
          {services.map((item, idx) => {
            const isCenter = idx === activeIndex;
            return (
              <div
                key={item.id}
                ref={(el) => (slidesRef.current[idx] = el)}
                className={`${styles.slide} ${isCenter ? styles.centerSlide : ""}`}
                onClick={() => setActiveIndex(idx)}
                role="group"
                aria-roledescription="slide"
                aria-label={`${item.title}, ${idx + 1} of ${services.length}`}
              >
                <div className={styles.imageCard}>
                  <Picture
                    name={SLIDE_IMAGES[idx % SLIDE_IMAGES.length]}
                    alt={item.title}
                    sizes="(min-width: 1024px) 420px, 80vw"
                    className={styles.slidePic}
                  />
                  {isCenter && (
                    <div className={styles.activeOverlay}>
                      <span className={styles.serviceTag}>SERVICE FOCUS</span>
                      <p className={styles.serviceDesc}>{item.description}</p>
                    </div>
                  )}
                </div>

                <div className={styles.caption}>
                  <span className={styles.captionTitle}>{item.title}</span>
                  <span className={styles.captionYear}>{SLIDE_YEARS[idx]}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Outlined Circular Navigation Buttons */}
      <div className={styles.controlsRow}>
        <button
          type="button"
          onClick={prevSlide}
          className={styles.circleBtn}
          aria-label="Previous project"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M19 12H5M12 19l-7-7 7-7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <button
          type="button"
          onClick={nextSlide}
          className={styles.circleBtn}
          aria-label="Next project"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  );
}

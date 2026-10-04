"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { gsap, SplitText, useGSAP, prefersReducedMotion } from "../../lib/gsap";
import { onReady } from "../../lib/ready";
import Picture, { warmImage } from "../../components/ui/Picture";
import BgVideo from "../../components/ui/BgVideo";
import MagneticButton from "../../components/ui/MagneticButton";
import styles from "./Hero.module.css";

const HERO_SLIDES = [
  {
    id: "slide-1",
    type: "video",
    name: "film-a",
    line1: "VISIONARY",
    line2: "REALTY",
    tagline: "GUE Realty Limited · Built for Nigeria · RC 8371222",
  },
  {
    id: "slide-2",
    type: "image",
    name: "tower-dusk",
    line1: "STRATEGIC",
    line2: "INVESTMENT",
    tagline: "High-Potential Assets & Strategic Land Acquisition",
  },
  {
    id: "slide-3",
    type: "image",
    name: "city-dusk",
    line1: "STRUCTURED",
    line2: "DEVELOPMENT",
    tagline: "End-to-End Residential & Commercial Project Delivery",
  },
  {
    id: "slide-4",
    type: "image",
    name: "glass-towers",
    line1: "PORTFOLIO",
    line2: "MANAGEMENT",
    tagline: "Valuation, Asset Oversight & Long-Term Capital Growth",
  },
  {
    id: "slide-5",
    type: "image",
    name: "balconies",
    line1: "DIASPORA",
    line2: "ASSURANCE",
    tagline: "Transparent Property Ownership from Anywhere in the World",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [readyToPlay, setReadyToPlay] = useState(false);

  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const progressBarsRef = useRef([]);
  const slidesRef = useRef([]);
  const timerRef = useRef(null);

  const total = HERO_SLIDES.length;

  const goTo = useCallback(
    (index) => {
      setCurrent((index + total) % total);
    },
    [total]
  );

  const next = useCallback(() => {
    goTo(current + 1);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo(current - 1);
  }, [current, goTo]);

  // Preload next image slide in background
  useEffect(() => {
    const nextIdx = (current + 1) % total;
    const nextSlide = HERO_SLIDES[nextIdx];
    if (nextSlide.type === "image") {
      warmImage(nextSlide.name);
    }
  }, [current, total]);

  // Listen for initial ready signal from Preloader
  useEffect(() => {
    const unregister = onReady(() => {
      setReadyToPlay(true);
    });
    return () => unregister();
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [next, prev]);

  // Auto-advance timer (6s per slide)
  useEffect(() => {
    if (isPaused || !readyToPlay) return;

    // Reset progress bars
    progressBarsRef.current.forEach((bar, idx) => {
      if (!bar) return;
      if (idx < current) {
        bar.style.width = "100%";
      } else if (idx === current) {
        bar.style.width = "0%";
      } else {
        bar.style.width = "0%";
      }
    });

    const activeBar = progressBarsRef.current[current];
    let anim;
    if (activeBar) {
      anim = gsap.fromTo(
        activeBar,
        { width: "0%" },
        { width: "100%", duration: 6, ease: "none" }
      );
    }

    timerRef.current = setTimeout(() => {
      next();
    }, 6000);

    return () => {
      clearTimeout(timerRef.current);
      if (anim) anim.kill();
    };
  }, [current, isPaused, next, readyToPlay]);

  // Transition animation when slide changes (SplitText title + image reveal)
  useGSAP(
    () => {
      if (!readyToPlay) return;
      const title = titleRef.current;
      if (!title) return;

      if (!prefersReducedMotion()) {
        const split = new SplitText(title, {
          type: "lines,words,chars",
          charsClass: styles.charAnim,
        });

        gsap.fromTo(
          split.chars,
          { yPercent: 120, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.02,
            ease: "power3.out",
            onComplete: () => split.revert(),
          }
        );
      }
    },
    { dependencies: [current, readyToPlay], scope: containerRef }
  );

  const activeSlide = HERO_SLIDES[current];

  return (
    <section
      ref={containerRef}
      className={styles.heroSection}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Hero Showcase"
    >
      {/* Background Slideshow Layer */}
      <div className={styles.slidesTrack}>
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === current;
          return (
            <div
              key={slide.id}
              ref={(el) => (slidesRef.current[idx] = el)}
              className={`${styles.slideItem} ${isActive ? styles.activeSlide : ""}`}
              aria-hidden={!isActive}
            >
              {slide.type === "video" ? (
                <BgVideo
                  name={slide.name}
                  alt={slide.line1}
                  sizes="100vw"
                  active={isActive}
                  priority={idx === 0}
                  className={styles.mediaFill}
                />
              ) : (
                <Picture
                  name={slide.name}
                  alt={slide.line1}
                  sizes="100vw"
                  priority={idx === 0}
                  className={styles.mediaFill}
                />
              )}
            </div>
          );
        })}
        <div className={styles.vignetteOverlay} />
      </div>

      {/* Corner Micro-descriptor Texts (replicated from reference) */}
      <div className={styles.cornerTL}>
        <span className={styles.statusDot} />
        <p className={styles.microText}>
          GUE REALTY LIMITED · RC 8371222<br />
          A GUE GROUP COMPANY
        </p>
      </div>

      <div className={styles.cornerTR}>
        <p className={styles.microTextRight}>
          Minimal design. Maximum intelligence.<br />
          Absolute standard.
        </p>
      </div>

      <div className={styles.cornerBR}>
        <p className={styles.microTextRight}>
          Premium real estate designed for sustainable growth —<br />
          where asset management and development meet in Nigeria.
        </p>
      </div>

      {/* Center Giant 2-Line Title Overlapping Visuals */}
      <div className={styles.centerTitleWrap}>
        <h1 ref={titleRef} className={styles.displayTitle}>
          <span className={styles.titleLine1}>{activeSlide.line1}</span>
          <span className={styles.titleLine2}>{activeSlide.line2}</span>
        </h1>
      </div>

      {/* Hero Slider Navigation Arrows */}
      <button
        type="button"
        onClick={prev}
        className={`${styles.heroNavArrow} ${styles.heroNavPrev}`}
        aria-label="Previous slide"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M19 12H5M12 19l-7-7 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <button
        type="button"
        onClick={next}
        className={`${styles.heroNavArrow} ${styles.heroNavNext}`}
        aria-label="Next slide"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Bottom Left Frosted Glass Card */}
      <div className={styles.bottomLeftCard}>
        <div className={styles.glassCardInner}>
          <div className={styles.glassCardThumb}>
            <Picture
              name="balconies"
              alt="Homes from the Future"
              sizes="80px"
              fill={false}
              className={styles.thumbPic}
            />
          </div>
          <div className={styles.glassCardContent}>
            <h4 className={styles.glassCardHeading}>
              Real Estate from the Future.<br />
              Built for Nigeria.
            </h4>
            <p className={styles.glassCardSub}>
              Operational & active portfolio: school assets, acquired development land,
              and structured real estate services.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Right Rounded Square "View Projects" Card */}
      <div className={styles.bottomRightCard}>
        <MagneticButton strength={0.25}>
          <Link href="/properties" className={styles.viewProjectsBtn}>
            <span className={styles.viewProjectsLabel}>View Projects</span>
            <div className={styles.arrowCircle}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </Link>
        </MagneticButton>
      </div>

      {/* Progress Bars Indicator */}
      <div className={styles.indicatorsWrap}>
        {HERO_SLIDES.map((slide, idx) => (
          <button
            key={`bar-${slide.id}`}
            type="button"
            className={styles.indicatorTrack}
            onClick={() => goTo(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          >
            <div
              ref={(el) => (progressBarsRef.current[idx] = el)}
              className={styles.indicatorFill}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
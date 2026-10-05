"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap } from "../../lib/gsap";
import { navItems, navCta } from "../../content/site";
import MagneticButton from "../../components/ui/MagneticButton";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const navWrapRef = useRef(null);
  const menuRef = useRef(null);
  const linksRef = useRef([]);

  // Scroll direction detection (hide on scroll down, show on scroll up)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100 && currentScrollY > lastScrollY.current + 8) {
        setHidden(true);
      } else if (currentScrollY < lastScrollY.current - 12 || currentScrollY <= 80) {
        setHidden(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Staggered reveal for mobile menu
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      gsap.to(menuRef.current, {
        opacity: 1,
        visibility: "visible",
        duration: 0.4,
        ease: "power3.out",
      });
      gsap.fromTo(
        linksRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          delay: 0.15,
        }
      );
    } else {
      document.body.style.overflow = "";
      if (menuRef.current) {
        gsap.to(menuRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power3.in",
          onComplete: () => {
            if (menuRef.current) menuRef.current.style.visibility = "hidden";
          },
        });
      }
    }
  }, [mobileOpen]);

  // Close menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        ref={navWrapRef}
        className={`${styles.header} ${hidden && !mobileOpen ? styles.hidden : ""}`}
      >
        <div className={styles.navRow}>
          {/* Top-Left Floating Glass Pill Nav */}
          <nav className={styles.glassPillNav} aria-label="Main Navigation">
            <Link href="/" className={styles.logoBadge} aria-label="GUE Realty Home">
              <img
                src="/logo.png"
                alt="GUE Realty Limited"
                className={styles.navLogoImg}
                width={28}
                height={28}
              />
            </Link>
            <div className={styles.desktopLinks}>
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`${styles.navLink} ${isActive ? styles.active : ""}`}
                  >
                    {item.label}
                    {isActive && <span className={styles.activeDot} />}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Top-Right CTA Pill + Mobile Toggle */}
          <div className={styles.navActions}>
            <MagneticButton strength={0.3}>
              <Link href={navCta.href} className={styles.ctaPill}>
                <span>{navCta.label}</span>
                <span className={styles.ctaIcon}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </Link>
            </MagneticButton>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className={styles.mobileToggle}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <div className={`${styles.burgerIcon} ${mobileOpen ? styles.open : ""}`}>
                <span />
                <span />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Menu */}
      <div
        ref={menuRef}
        className={styles.mobileMenu}
        aria-hidden={!mobileOpen}
      >
        <div className={styles.mobileMenuContent}>
          <div className={styles.mobileBrandHeader}>
            <img
              src="/logo.png"
              alt="GUE Realty Limited"
              width={36}
              height={36}
              className={styles.navLogoImg}
            />
            <span className={styles.mobileBrandText}>GUE REALTY</span>
          </div>

          <div className={styles.mobileNavLinks}>
            {navItems.map((item, idx) => (
              <div
                key={item.label}
                ref={(el) => (linksRef.current[idx] = el)}
                className={styles.mobileLinkItem}
              >
                <Link
                  href={item.href}
                  className={`${styles.mobileLink} ${pathname === item.href ? styles.activeMobile : ""}`}
                  onClick={() => setMobileOpen(false)}
                >
                  <span className={styles.mobileLinkIndex}>0{idx + 1}</span>
                  <span className={styles.mobileLinkLabel}>{item.label}</span>
                </Link>
              </div>
            ))}
          </div>

          <div
            ref={(el) => (linksRef.current[navItems.length] = el)}
            className={styles.mobileCtaWrap}
          >
            <Link
              href={navCta.href}
              className={styles.mobileCtaBtn}
              onClick={() => setMobileOpen(false)}
            >
              <span>{navCta.label}</span>
              <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <p className={styles.mobileGroupNote}>
              GUE REALTY LIMITED · RC 8371222<br />
              A GUE GROUP COMPANY
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { gsap, ScrollTrigger } from "../../lib/gsap";
import { markReady } from "../../lib/ready";
import styles from "./PageTransition.module.css";

/**
 * High-speed route transition indicator.
 * Provides instant feedback on navigation without blocking Next.js client-side routing.
 */
export default function PageTransition() {
  const pathname = usePathname();
  const barRef = useRef(null);
  const [navigating, setNavigating] = useState(false);

  // When pathname changes, complete bar and refresh scroll
  useEffect(() => {
    // Scroll to top instantly on new page
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true, force: true });
    } else {
      window.scrollTo(0, 0);
    }

    markReady();
    ScrollTrigger.refresh();

    // Fast finish animation on top progress bar
    if (barRef.current) {
      gsap.to(barRef.current, {
        scaleX: 1,
        opacity: 0,
        duration: 0.25,
        ease: "power2.out",
        onComplete: () => {
          gsap.set(barRef.current, { scaleX: 0, opacity: 1 });
          setNavigating(false);
        },
      });
    }
  }, [pathname]);

  // Listen for clicks on internal links to start top bar immediately
  useEffect(() => {
    const handleLinkClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = e.target instanceof Element ? e.target.closest("a[href]") : null;
      if (!a) return;
      if (a.target && a.target !== "_self") return;
      if (a.hasAttribute("download") || a.dataset.noTransition !== undefined) return;

      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin) return;

      // Same page anchor
      if (url.pathname === window.location.pathname) {
        if (!url.hash) {
          e.preventDefault();
          window.__lenis ? window.__lenis.scrollTo(0) : window.scrollTo({ top: 0, behavior: "smooth" });
        }
        return;
      }

      // Animate top progress bar quickly
      setNavigating(true);
      if (barRef.current) {
        gsap.killTweensOf(barRef.current);
        gsap.fromTo(
          barRef.current,
          { scaleX: 0, opacity: 1 },
          { scaleX: 0.75, duration: 0.4, ease: "power2.out" }
        );
      }
    };

    document.addEventListener("click", handleLinkClick, { capture: true });
    return () => document.removeEventListener("click", handleLinkClick, { capture: true });
  }, []);

  return (
    <div
      ref={barRef}
      className={styles.topProgress}
      style={{ display: navigating ? "block" : "none" }}
      aria-hidden="true"
    />
  );
}

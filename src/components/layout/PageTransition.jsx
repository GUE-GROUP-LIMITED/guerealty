"use client";
import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { gsap, ScrollTrigger, prefersReducedMotion } from "../../lib/gsap";
import { markReady, resetReady } from "../../lib/ready";
import styles from "./PageTransition.module.css";

/**
 * Curtain route transitions.
 * Intercepts same-origin <a> clicks in the capture phase (so next/link and
 * MUI links on legacy pages are covered too), covers the screen with a black
 * panel, navigates, then wipes the panel away and releases the ready signal
 * so the incoming page's hero can reveal.
 */
export default function PageTransition() {
  const router = useRouter();
  const pathname = usePathname();
  const panelRef = useRef(null);
  const busy = useRef(false);
  const pending = useRef(null);
  const fallback = useRef(null);

  // Reveal after the new route has rendered
  useEffect(() => {
    if (!pending.current) return;
    pending.current = null;
    clearTimeout(fallback.current);
    reveal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  function reveal() {
    const panel = panelRef.current;
    window.__lenis?.scrollTo(0, { immediate: true, force: true });
    window.scrollTo(0, 0);
    ScrollTrigger.refresh();
    const reduced = prefersReducedMotion();
    requestAnimationFrame(() => {
      markReady();
      if (reduced) {
        gsap.to(panel, { autoAlpha: 0, duration: 0.3, onComplete: done });
        return;
      }
      gsap.to(panel, {
        yPercent: -100,
        duration: 0.9,
        ease: "wipe",
        onComplete: done,
      });
    });
    function done() {
      gsap.set(panel, { yPercent: 100, autoAlpha: 0 });
      busy.current = false;
      window.__lenis?.start();
    }
  }

  useEffect(() => {
    gsap.set(panelRef.current, { yPercent: 100, autoAlpha: 0 });

    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = e.target instanceof Element ? e.target.closest("a[href]") : null;
      if (!a) return;
      if (a.target && a.target !== "_self") return;
      if (a.hasAttribute("download") || a.dataset.noTransition !== undefined) return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      const samePath = url.pathname === window.location.pathname;
      if (samePath) {
        if (url.hash) return; // in-page anchor
        e.preventDefault();
        window.__lenis ? window.__lenis.scrollTo(0) : window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      e.preventDefault();
      if (busy.current) return;
      busy.current = true;
      cover(url.pathname + url.search + url.hash);
    };

    const cover = (href) => {
      const panel = panelRef.current;
      resetReady();
      window.__lenis?.stop();
      router.prefetch?.(href);
      const go = () => {
        pending.current = href;
        router.push(href, { scroll: false });
        // Safety: reveal even if the pathname somehow doesn't change
        fallback.current = setTimeout(() => {
          if (pending.current) {
            pending.current = null;
            reveal();
          }
        }, 4000);
      };
      if (prefersReducedMotion()) {
        gsap.fromTo(panel, { yPercent: 0, autoAlpha: 0 }, { autoAlpha: 1, duration: 0.25, onComplete: go });
        return;
      }
      gsap.fromTo(
        panel,
        { yPercent: 100, autoAlpha: 1 },
        { yPercent: 0, duration: 0.75, ease: "wipe", onComplete: go }
      );
    };

    document.addEventListener("click", onClick, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      clearTimeout(fallback.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  return (
    <div ref={panelRef} className={styles.panel} aria-hidden="true">
      <span className={styles.mark}>GUE Realty</span>
    </div>
  );
}

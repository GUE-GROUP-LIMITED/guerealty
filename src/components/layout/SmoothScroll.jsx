"use client";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger, prefersReducedMotion } from "../../lib/gsap";

const LenisContext = createContext(null);

/** Access the Lenis instance (null when reduced-motion / not yet mounted). */
export function useLenis() {
  return useContext(LenisContext);
}

/**
 * Lenis smooth scroll, driven by gsap.ticker and synced with ScrollTrigger.
 * Disabled entirely for prefers-reduced-motion.
 */
export default function SmoothScroll({ children }) {
  const [lenis, setLenis] = useState(null);
  const rafRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;

    const instance = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
    });

    instance.on("scroll", ScrollTrigger.update);
    rafRef.current = (time) => instance.raf(time * 1000);
    gsap.ticker.add(rafRef.current);
    gsap.ticker.lagSmoothing(0);

    setLenis(instance);
    window.__lenis = instance;

    return () => {
      gsap.ticker.remove(rafRef.current);
      instance.destroy();
      window.__lenis = undefined;
      setLenis(null);
    };
  }, []);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}

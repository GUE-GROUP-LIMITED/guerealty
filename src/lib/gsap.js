"use client";
/**
 * Single place where GSAP plugins are registered.
 * Import { gsap, ScrollTrigger, SplitText, Flip, Observer, useGSAP } from here.
 */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { Flip } from "gsap/Flip";
import { Observer } from "gsap/Observer";
import { CustomEase } from "gsap/CustomEase";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText, Flip, Observer, CustomEase, useGSAP);
  // cubic-bezier(0.76, 0, 0.24, 1) — used for every wipe / curtain.
  CustomEase.create("wipe", "M0,0 C0.76,0 0.24,1 1,1");
  gsap.defaults({ ease: "power3.out", duration: 0.9 });
  ScrollTrigger.config({ ignoreMobileResize: true });
}

export const EASE = {
  out: "power3.out",
  expo: "expo.out",
  wipe: "wipe",
};

/** Shared media-query keys for gsap.matchMedia() */
export const MQ = {
  desktop: "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
  mobile: "(max-width: 1023.98px) and (prefers-reduced-motion: no-preference)",
  reduced: "(prefers-reduced-motion: reduce)",
};

export function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia(MQ.reduced).matches;
}

export function isFinePointer() {
  return typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

export { gsap, ScrollTrigger, SplitText, Flip, Observer, useGSAP };

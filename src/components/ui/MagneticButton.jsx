"use client";
import { useRef } from "react";
import { gsap, useGSAP, isFinePointer } from "../../lib/gsap";

/**
 * Wraps any element and pulls it toward the pointer (fine pointers only).
 * Usage: <MagneticButton strength={0.35}><a ...>…</a></MagneticButton>
 */
export default function MagneticButton({ children, strength = 0.35, className = "", as: Tag = "span", ...rest }) {
  const ref = useRef(null);

  useGSAP(
    (ctx, contextSafe) => {
      const el = ref.current;
      if (!el || !isFinePointer() || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const target = el.firstElementChild || el;
      const xTo = gsap.quickTo(target, "x", { duration: 0.6, ease: "power3.out" });
      const yTo = gsap.quickTo(target, "y", { duration: 0.6, ease: "power3.out" });

      const move = contextSafe((e) => {
        const r = el.getBoundingClientRect();
        xTo((e.clientX - (r.left + r.width / 2)) * strength);
        yTo((e.clientY - (r.top + r.height / 2)) * strength);
      });
      const leave = contextSafe(() => {
        gsap.to(target, { x: 0, y: 0, duration: 0.9, ease: "elastic.out(1, 0.4)" });
      });

      el.addEventListener("pointermove", move);
      el.addEventListener("pointerleave", leave);
      return () => {
        el.removeEventListener("pointermove", move);
        el.removeEventListener("pointerleave", leave);
      };
    },
    { scope: ref }
  );

  return (
    <Tag ref={ref} className={className} style={{ display: "inline-block" }} {...rest}>
      {children}
    </Tag>
  );
}

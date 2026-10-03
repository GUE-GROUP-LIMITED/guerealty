"use client";
import { useEffect, useRef, useState } from "react";
import { gsap, isFinePointer } from "../../lib/gsap";
import styles from "./Cursor.module.css";

/**
 * Custom circular cursor (fine pointers only).
 * - grows on links/buttons
 * - shows a label for [data-cursor="drag" | "view" | any text]
 */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [label, setLabel] = useState("");
  const [state, setState] = useState("idle");

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setEnabled(mq.matches && isFinePointer());
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!enabled) return undefined;
    document.documentElement.classList.add("has-cursor");

    const dot = dotRef.current;
    const ring = ringRef.current;
    gsap.set([dot, ring], { xPercent: -50, yPercent: -50, x: -100, y: -100 });
    const dx = gsap.quickTo(dot, "x", { duration: 0.12, ease: "power3.out" });
    const dy = gsap.quickTo(dot, "y", { duration: 0.12, ease: "power3.out" });
    const rx = gsap.quickTo(ring, "x", { duration: 0.5, ease: "power3.out" });
    const ry = gsap.quickTo(ring, "y", { duration: 0.5, ease: "power3.out" });

    let visible = false;
    const move = (e) => {
      if (!visible) {
        visible = true;
        gsap.to([dot, ring], { autoAlpha: 1, duration: 0.3 });
      }
      dx(e.clientX);
      dy(e.clientY);
      rx(e.clientX);
      ry(e.clientY);
    };

    const over = (e) => {
      const target = e.target instanceof Element ? e.target : null;
      if (!target) return;
      const labelled = target.closest("[data-cursor]");
      if (labelled) {
        setState("label");
        setLabel(labelled.getAttribute("data-cursor"));
        return;
      }
      if (target.closest("a, button, [role='button'], input, textarea, select, label")) {
        setState("hover");
        setLabel("");
        return;
      }
      setState("idle");
      setLabel("");
    };

    const leave = () => {
      visible = false;
      gsap.to([dot, ring], { autoAlpha: 0, duration: 0.3 });
    };
    const down = () => gsap.to(ring, { scale: 0.85, duration: 0.2 });
    const up = () => gsap.to(ring, { scale: 1, duration: 0.4, ease: "elastic.out(1, 0.5)" });

    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerover", over, { passive: true });
    document.documentElement.addEventListener("pointerleave", leave);
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);

    return () => {
      document.documentElement.classList.remove("has-cursor");
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", over);
      document.documentElement.removeEventListener("pointerleave", leave);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div className={styles.root} aria-hidden="true">
      <div ref={ringRef} className={styles.ring} data-state={state}>
        <span className={styles.label}>{label}</span>
      </div>
      <div ref={dotRef} className={styles.dot} data-state={state} />
    </div>
  );
}

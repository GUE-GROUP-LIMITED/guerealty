/**
 * Tiny "app ready" signal, re-armed on every route transition.
 * - Preloader (home, first load) holds it until hero assets are loaded.
 * - PageTransition re-arms it before navigating and releases it on reveal.
 * Hero intros subscribe with onReady() so they play exactly when uncovered.
 */
let ready = false;
let held = false;
const subs = new Set();

export function holdReady() {
  held = true;
  ready = false;
}

export function resetReady() {
  ready = false;
}

export function isHeld() {
  return held;
}

export function markReady() {
  held = false;
  ready = true;
  const fns = [...subs];
  subs.clear();
  fns.forEach((fn) => fn());
}

export function onReady(fn) {
  if (ready) {
    fn();
    return () => {};
  }
  subs.add(fn);
  return () => subs.delete(fn);
}

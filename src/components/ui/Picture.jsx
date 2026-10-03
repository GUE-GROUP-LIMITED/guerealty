"use client";
import { useEffect, useRef, useState } from "react";
import { preload } from "react-dom";
import manifest from "../../lib/media-manifest.json";
import styles from "./Picture.module.css";

export function getImage(name) {
  return manifest.images?.[name] || null;
}

export function srcSetFor(img, fmt) {
  return img.sources[fmt].map((s) => `${s.src} ${s.w}w`).join(", ");
}

/** Warm the browser cache for an image (used to preload the next hero slide). */
export function warmImage(name, sizes = "100vw") {
  const img = getImage(name);
  if (!img || typeof window === "undefined") return;
  const probe = new Image();
  probe.decoding = "async";
  probe.sizes = sizes;
  const supportsAvif = document.documentElement.dataset.avif === "1";
  probe.srcset = srcSetFor(img, supportsAvif ? "avif" : "webp");
}

/**
 * Responsive <picture> fed by the sharp manifest:
 * AVIF -> WebP -> JPEG, srcset + sizes, intrinsic width/height (no CLS),
 * blurred LQIP + dominant colour that fades into the sharp image.
 *
 * `priority` = eager + fetchpriority high + <link rel=preload> (first hero only).
 */
export default function Picture({
  name,
  alt,
  sizes = "100vw",
  priority = false,
  className = "",
  imgClassName = "",
  position = "50% 50%",
  fill = true,
  ...rest
}) {
  const img = getImage(name);
  const ref = useRef(null);
  const [loaded, setLoaded] = useState(priority);

  if (img && priority) {
    preload(img.sources.avif[img.sources.avif.length - 1].src, {
      as: "image",
      type: "image/avif",
      imageSrcSet: srcSetFor(img, "avif"),
      imageSizes: sizes,
      fetchPriority: "high",
    });
  }

  useEffect(() => {
    const el = ref.current;
    if (el && el.complete && el.naturalWidth > 0) setLoaded(true);
    if (el && el.currentSrc && !document.documentElement.dataset.avif) {
      document.documentElement.dataset.avif = el.currentSrc.endsWith(".avif") ? "1" : "0";
    }
  }, []);

  if (!img) {
    return (
      <div className={`${styles.missing} ${className}`} role="img" aria-label={alt}>
        <span>Placeholder — image “{name}” missing. Run `node scripts/optimize-media.mjs`.</span>
      </div>
    );
  }

  const fallback = img.sources.jpg[Math.min(2, img.sources.jpg.length - 1)];

  return (
    <picture
      className={`${styles.pic} ${fill ? styles.fill : ""} ${loaded ? styles.loaded : ""} ${className}`}
      style={{ "--lqip": `url(${img.blur})`, "--dominant": img.color }}
      {...rest}
    >
      <source type="image/avif" srcSet={srcSetFor(img, "avif")} sizes={sizes} />
      <source type="image/webp" srcSet={srcSetFor(img, "webp")} sizes={sizes} />
      <img
        ref={ref}
        className={`${styles.img} ${imgClassName}`}
        src={fallback.src}
        srcSet={srcSetFor(img, "jpg")}
        sizes={sizes}
        width={img.width}
        height={img.height}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : undefined}
        style={{ objectPosition: position }}
        onLoad={() => setLoaded(true)}
        draggable={false}
      />
    </picture>
  );
}

"use client";
import Picture from "../ui/Picture";
import styles from "./SiteFrame.module.css";

export default function SiteFrame({ children }) {
  return (
    <div className={styles.outerCanvas}>
      {/* Blurred background image visible outside the frame on desktop */}
      <div className={styles.desktopBackdrop} aria-hidden="true">
        <Picture
          name="tower-dusk"
          alt=""
          sizes="100vw"
          priority
          className={styles.backdropImg}
        />
        <div className={styles.backdropOverlay} />
      </div>

      {/* Main inner rounded container */}
      <div className={styles.frameContainer}>
        <div className={styles.innerFrame}>
          {children}
        </div>
      </div>
    </div>
  );
}

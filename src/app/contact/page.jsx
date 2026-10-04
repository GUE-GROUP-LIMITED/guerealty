"use client";
import { useState, useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "../../lib/gsap";
import Picture from "../../components/ui/Picture";
import styles from "./Contact.module.css";

export default function ContactPage() {
  const formspreeEndpoint =
    process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/mnjgjgbn";
  const endpointConfigured = Boolean(formspreeEndpoint);

  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    phone: "",
    enquiryType: "Partnership",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const containerRef = useRef(null);
  const heroContentRef = useRef(null);
  const formCardRef = useRef(null);
  const faqCardRef = useRef(null);

  useGSAP(
    () => {
      const reduced = prefersReducedMotion();
      if (reduced) return;

      // Hero reveal
      if (heroContentRef.current) {
        gsap.from(heroContentRef.current.children, {
          y: 40,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          delay: 0.2,
        });
      }

      // Cards reveal
      if (formCardRef.current && faqCardRef.current) {
        gsap.from([formCardRef.current, faqCardRef.current], {
          y: 50,
          opacity: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formCardRef.current,
            start: "top 85%",
            once: true,
          },
        });
      }
    },
    { scope: containerRef }
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!endpointConfigured) {
      setStatus({
        type: "warning",
        message:
          "Form endpoint is not configured yet. Set NEXT_PUBLIC_FORMSPREE_ENDPOINT in your environment.",
      });
      return;
    }

    try {
      setSubmitting(true);
      setStatus({ type: "", message: "" });

      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Unable to submit form");
      }

      setStatus({
        type: "success",
        message: "Thank you. Your enquiry has been submitted successfully.",
      });
      setFormData({
        fullName: "",
        company: "",
        phone: "",
        enquiryType: "Partnership",
        message: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: "Submission failed. Please try again shortly.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main data-page="v2">
      <div ref={containerRef} className={styles.pageWrap}>
        {/* Cinematic Hero */}
        <section className={styles.hero}>
          <div className={styles.heroMedia}>
            <Picture
              name="tower-dusk"
              alt="GUE Realty Headquarters"
              sizes="100vw"
              priority
              className={styles.heroImg}
            />
            <div className={styles.heroOverlay} />
          </div>

          <div ref={heroContentRef} className={styles.heroContent}>
            <div className={styles.eyebrowBadge}>
              <span className={styles.badgeDot} />
              <span>CONTACT · GUE REALTY LIMITED</span>
            </div>

            <h1 className={styles.heroTitle}>Let&apos;s Discuss Your Property Goals</h1>

            <p className={styles.heroSub}>
              Submit your enquiry through our secure form for partnerships, portfolio requests,
              and investment discussions.
            </p>
          </div>
        </section>

        {/* Form and FAQ Section */}
        <div className={styles.container}>
          <section className={styles.contactSection}>
            <div className={styles.contactGrid}>
              {/* Form Card */}
              <div ref={formCardRef} className={styles.formCard}>
                <div className={styles.cardHeader}>
                  <h2 className={styles.cardTitle}>Send an Enquiry</h2>
                  <p className={styles.cardSub}>
                    Complete this form and our team will respond with the appropriate next steps.
                  </p>
                </div>

                {status.message && (
                  <div
                    className={
                      status.type === "success"
                        ? styles.alertSuccess
                        : status.type === "error"
                        ? styles.alertError
                        : styles.alertWarning
                    }
                  >
                    <span>{status.message}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.fieldGroup}>
                    <label htmlFor="fullName" className={styles.label}>
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.fieldGroup}>
                    <label htmlFor="company" className={styles.label}>
                      Company / Organization
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.fieldGroup}>
                    <label htmlFor="phone" className={styles.label}>
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.fieldGroup}>
                    <label htmlFor="enquiryType" className={styles.label}>
                      Enquiry Type
                    </label>
                    <select
                      id="enquiryType"
                      name="enquiryType"
                      value={formData.enquiryType}
                      onChange={handleChange}
                      className={styles.select}
                    >
                      <option value="Partnership">Partnership</option>
                      <option value="Property Enquiry">Property Enquiry</option>
                      <option value="Investment">Investment</option>
                      <option value="General">General</option>
                    </select>
                  </div>

                  <div className={styles.fieldGroup}>
                    <label htmlFor="message" className={styles.label}>
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={styles.textarea}
                    />
                  </div>

                  {/* Honeypot anti-spam field */}
                  <input
                    type="text"
                    name="_gotcha"
                    tabIndex={-1}
                    autoComplete="off"
                    style={{ display: "none" }}
                  />

                  <button
                    type="submit"
                    disabled={submitting}
                    className={styles.submitBtn}
                  >
                    <span>{submitting ? "Submitting..." : "Submit Enquiry"}</span>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path
                        d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </form>
              </div>

              {/* FAQ / Verification Panel */}
              <div ref={faqCardRef} className={styles.faqCard}>
                <h3 className={styles.faqTitle}>Before You Submit</h3>

                <div className={styles.faqList}>
                  <div className={styles.faqItem}>
                    <h4 className={styles.faqQuestion}>What should I include in my message?</h4>
                    <p className={styles.faqAnswer}>
                      Yes. We manage operating assets including schools and maintain acquired development land.
                    </p>
                  </div>

                  <div className={styles.faqItem}>
                    <h4 className={styles.faqQuestion}>How quickly will you respond?</h4>
                    <p className={styles.faqAnswer}>
                      Most enquiries are acknowledged within one business day.
                    </p>
                  </div>

                  <div className={styles.faqItem}>
                    <h4 className={styles.faqQuestion}>Do you work with partners and investors?</h4>
                    <p className={styles.faqAnswer}>
                      Yes. We engage development, operating, and investment partners on structured terms.
                    </p>
                  </div>

                  <div className={styles.faqItem}>
                    <h4 className={styles.faqQuestion}>Company Profile</h4>
                    <p className={styles.faqAnswer}>
                      RC: 8371222 · Nature of Business: Real Estate Activities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

import Hero from "./components/Hero";
import SectionHeader from "../components/ui/SectionHeader";
import WordReveal from "../components/ui/WordReveal";
import BentoGrid from "../components/ui/BentoGrid";
import FeaturedProjectsSlider from "../components/ui/FeaturedProjectsSlider";
import TechnologySection from "../components/ui/TechnologySection";
import { SITE_DESCRIPTION, SITE_TITLE } from "../lib/site";

export const metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main data-page="v2">
      {/* 1. Hero Slideshow + Video with 2-line display title and frosted cards */}
      <Hero />

      {/* 2. Redefining Modern Living Statement + Bento Grid */}
      <section className="wrap" style={{ paddingTop: "clamp(80px, 10vw, 140px)" }}>
        <SectionHeader
          title="REDEFINING MODERN LIVING"
          descriptor="From visionary architecture to sustainable design, our projects shape the future of residential and commercial experiences across Nigeria."
          category="// Corporate Overview"
        />

        <WordReveal
          text="We believe the future of living is defined by more than architecture alone. It is the seamless connection between design, functionality, and the people who inhabit these spaces."
          imageName="balconies"
          imageAlt="Modern Architecture"
        />

        <BentoGrid />
      </section>

      {/* 3. Featured Projects Interactive Slider */}
      <FeaturedProjectsSlider />

      {/* 4. Built with Next-Gen Technology */}
      <TechnologySection />
    </main>
  );
}
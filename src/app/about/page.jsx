import AboutClient from "./AboutClient";

export const metadata = {
  title: "About",
  description:
    "Learn about GUE Realty Limited, our mission, vision, and credentials in real estate marketing, investment, development, appraisal, and property management.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main data-page="v2">
      <AboutClient />
    </main>
  );
}

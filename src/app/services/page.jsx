import Services from '../components/Services';

export const metadata = {
  title: "Services",
  description:
    "Explore GUE Realty services including real estate marketing, investment advisory, development, appraisal, and property management.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <main>
      <Services />
    </main>
  );
}

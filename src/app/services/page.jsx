import ServicesClient from "./ServicesClient";

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
    <main data-page="v2">
      <ServicesClient />
    </main>
  );
}

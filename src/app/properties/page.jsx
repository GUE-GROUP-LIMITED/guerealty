import PropertiesClient from "./PropertiesClient";

export const metadata = {
  title: "Properties",
  description:
    "View GUE Realty property focus areas including managed school assets, acquired development land, and upcoming residential and commercial opportunities.",
  alternates: {
    canonical: "/properties",
  },
};

export default function PropertiesPage() {
  return (
    <main data-page="v2">
      <PropertiesClient />
    </main>
  );
}

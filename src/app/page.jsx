import Hero from './components/Hero';
import Services from './components/Services';
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
    <main>
      <Hero />
      <Services />
    </main>
  );
}
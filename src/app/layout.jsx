import "@fontsource/inter-tight/400.css";
import "@fontsource/inter-tight/500.css";
import "@fontsource/inter-tight/600.css";
import "@fontsource/inter-tight/700.css";
import "./globals.css";
import "./accessibility.css";
import Providers from "./Providers";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import SiteFrame from "../components/layout/SiteFrame";
import SmoothScroll from "../components/layout/SmoothScroll";
import Cursor from "../components/layout/Cursor";
import PageTransition from "../components/layout/PageTransition";
import Preloader from "../components/layout/Preloader";
import {
  DEFAULT_OG_IMAGE,
  getBaseUrl,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
} from "../lib/site";

export const metadata = {
  metadataBase: new URL(getBaseUrl()),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_TITLE}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "google2c15aca631c839cd",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "/",
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 512,
        height: 512,
        alt: `${SITE_NAME} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  category: "real estate",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/logo.png",
    apple: [{ url: "/logo.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "icon",
        url: "/logo.png",
      },
    ],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: getBaseUrl(),
    logo: `${getBaseUrl()}${DEFAULT_OG_IMAGE}`,
    sameAs: ["https://www.guegroup.com"],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_TITLE,
    url: getBaseUrl(),
    potentialAction: {
      "@type": "SearchAction",
      target: `${getBaseUrl()}/properties?search={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />

        <Providers>
          <SmoothScroll>
            {/* Interactive Cursor */}
            <Cursor />

            {/* Initial Preloader */}
            <Preloader />

            {/* Curtain Route Transitions */}
            <PageTransition />

            {/* Outer Rounded Frame */}
            <SiteFrame>
              {/* Floating Pill Navigation */}
              <Navigation />

              {/* Main Content Area */}
              <div id="main-content" className="legacy-main" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                {children}
              </div>

              {/* Global Footer */}
              <Footer />
            </SiteFrame>
          </SmoothScroll>
        </Providers>
      </body>
    </html>
  );
}
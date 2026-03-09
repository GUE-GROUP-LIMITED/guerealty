import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./accessibility.css";
import Providers from "./Providers";
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ClientOnly from './components/ClientOnly';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "GUE REALTY LIMITED",
  description: "GUE REALTY LIMITED (RC 8371222), registered on Mar 26, 2025 for Real Estate Activities, delivers real estate marketing, investment, development, appraisal, and management solutions.",
  icons: {
    icon: [
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/logo.png',
    apple: [
      { url: '/logo.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'icon',
        url: '/logo.png',
      },
    ],
  },
  manifest: '/manifest.json',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <ClientOnly>
            <Navigation />
          </ClientOnly>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
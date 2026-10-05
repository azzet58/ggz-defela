import type { Metadata } from "next";
import { Figtree, Fraunces } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { allowIndexing, site, siteUrl } from "@/lib/site";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  robots: allowIndexing
    ? { index: true, follow: true }
    : { index: false, follow: false },
  title: {
    default: `${site.name} | Psychologiepraktijk voor basis-GGZ in ${site.city}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: site.name,
    title: `${site.name} | Psychologiepraktijk voor basis-GGZ in ${site.city}`,
    description: site.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${figtree.variable} ${fraunces.variable}`}>
      <body className="flex min-h-screen flex-col bg-white font-sans text-ink antialiased">
        <a
          href="#inhoud"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-brand focus:px-5 focus:py-3 focus:text-white"
        >
          Naar de inhoud
        </a>
        <Header />
        <main id="inhoud" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

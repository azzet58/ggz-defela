import type { Metadata } from "next";
import { Figtree, Fraunces } from "next/font/google";
import { site } from "@/lib/site";
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
  title: {
    default: `${site.name} | Psychologiepraktijk voor basis-GGZ in ${site.city}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${figtree.variable} ${fraunces.variable}`}>
      <body className="bg-white font-sans text-ink antialiased">{children}</body>
    </html>
  );
}

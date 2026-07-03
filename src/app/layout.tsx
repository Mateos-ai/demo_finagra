import type { Metadata } from "next";
import localFont from "next/font/local";
import { Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { RevealObserver } from "@/components/reveal";

// Satoshi (Fontshare) — self-hosted variable font, used for headings + body.
const satoshi = localFont({
  src: "./fonts/Satoshi-Variable.woff2",
  variable: "--font-display",
  weight: "300 900",
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono-brand",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

// Serif italic accent — used for single emphasized words inside headlines.
const serif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.finagra.com"),
  title: {
    default: "Finagra · Empower Rural Growth",
    template: "%s · Finagra",
  },
  description:
    "Finagra empowers rural representatives and farmers with the tools and systems to build scalable, climate-smart farms that strengthen local economies.",
  openGraph: {
    type: "website",
    url: "https://www.finagra.com",
    title: "Finagra · Empower Rural Growth",
    description:
      "Combining capital, technology, and local representatives to turn conventional farming into efficient, high-yield operations.",
    siteName: "Finagra",
  },
  twitter: {
    card: "summary_large_image",
    title: "Finagra · Empower Rural Growth",
    description:
      "Combining capital, technology, and local representatives to turn conventional farming into efficient, high-yield operations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${satoshi.variable} ${mono.variable} ${serif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <RevealObserver />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const body = Hanken_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono-brand",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.finagra.com"),
  title: {
    default: "Finagra — Empower Rural Growth",
    template: "%s · Finagra",
  },
  description:
    "Finagra empowers rural entrepreneurs and farmers with the tools and systems to build scalable, climate-smart farms that strengthen local economies.",
  openGraph: {
    type: "website",
    url: "https://www.finagra.com",
    title: "Finagra — Empower Rural Growth",
    description:
      "Combining capital, technology, and local entrepreneurs to turn conventional farming into efficient, high-yield operations.",
    siteName: "Finagra",
  },
  twitter: {
    card: "summary_large_image",
    title: "Finagra — Empower Rural Growth",
    description:
      "Combining capital, technology, and local entrepreneurs to turn conventional farming into efficient, high-yield operations.",
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
      className={`${display.variable} ${body.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

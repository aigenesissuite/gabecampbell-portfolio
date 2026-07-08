import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav, Footer } from "@/components/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gabecampbellportfolio.com"),
  title: "Gabe Campbell — Principal AI Product Designer",
  description:
    "Principal product designer who ships. Designed, coded, and launched aiOS — a live agentic AI platform — plus AI products at Google, BMW, and Lumin Digital serving 50M+ users.",
  openGraph: {
    title: "Gabe Campbell — Principal AI Product Designer",
    description:
      "AI-native product design with receipts: live products, real customers, measurable outcomes.",
    images: ["/video/poster.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <div className="mesh" aria-hidden="true" />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}

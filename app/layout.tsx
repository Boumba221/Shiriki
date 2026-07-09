import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shiriki — The connected workspace where teams come together",
  description:
    "Docs, tasks, and knowledge in one place. Shiriki brings your team's work together so everyone can participate, share, and move faster.",
  keywords: [
    "workspace",
    "collaboration",
    "docs",
    "notes",
    "project management",
    "team wiki",
  ],
  openGraph: {
    title: "Shiriki — The connected workspace",
    description:
      "Docs, tasks, and knowledge in one place. Built for teams that share.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

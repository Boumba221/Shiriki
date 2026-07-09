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
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Apply the saved theme before paint to avoid a flash of the wrong mode */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}})();`,
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

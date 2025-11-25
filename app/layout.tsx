import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/styles/prism-themes/dracula.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Galsen UI - Une bibliothèque de composants réutilisables.",
  description: "Une bibliothèque de composants réutilisables.",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="fr">
        <head>
          {/* OG Meta Tags */}
          <meta property="og:url" content="https://ui.galsen.dev" />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/degyjrpjj/image/upload/v1732653153/galsenui/og_share.png"
          />
          <meta property="og:title" content="Galsen UI" />
          <meta
            property="og:description"
            content="Une bibliothèque de composants réutilisables."
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

          {/* Twitter Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="ui.galsen.dev" />
          <meta property="twitter:url" content="https://ui.galsen.dev" />
          <meta name="twitter:title" content="Galsen UI" />
          <meta
            name="twitter:description"
            content="Une bibliothèque de composants réutilisables."
          />
          <meta
            name="twitter:image"
            content="https://res.cloudinary.com/degyjrpjj/image/upload/v1732653153/galsenui/og_share.png"
          />
          {/* Beam Analytics */}
          <script
            src="https://beamanalytics.b-cdn.net/beam.min.js"
            data-token={process.env.BEAM_DATA_TOKEN}
            async
          />
        </head>
        <body className={inter.className}>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </body>
      </html>
    </>
  );
}

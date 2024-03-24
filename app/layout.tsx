import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/styles/prism-themes/dracula.css";

import TheNavbar from "@/components/TheNavbar";
import TheFooter from "@/components/TheFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Galsen UI",
  description: "Découvrez des composants UI époustouflants",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
          <TheNavbar />
          {children}
          <TheFooter />
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
/* THEME FONTS */
import {
  Inter,
  Raleway,
  Poppins,
  Libre_Baskerville,
  Merriweather,
} from "next/font/google";
import "./globals.css";
import head from "./head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pato Bottos Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head></head>
      <body>{children}</body>
    </html>
  );
}

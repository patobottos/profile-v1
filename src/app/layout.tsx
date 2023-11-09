import type { Metadata } from "next";
/* THEME FONTS */
import {
  Inter,
  Raleway,
  Poppins,
  Libre_Baskerville,
  Merriweather,
} from "@next/font/google";
import { Roboto } from "@next/font/google";
import "./globals.css";
import head from "./head";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

const libre = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre",
});

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
      <body className={`${roboto.variable} ${libre.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}

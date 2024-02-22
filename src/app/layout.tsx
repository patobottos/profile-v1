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
  description:
    "React Front End Developer with over a decade of expertise in crafting engaging online experiences. Currently contributing to digital innovation at IT Academy, specializing in ReactJS and JavaScript. Previously, a WordPress Web Content Manager with a track record of diverse web projects. Recently completed a rigorous React Front End Web Developer Coding Bootcamp in Barcelona. Passionate about languages (Catalan, Spanish, English, French) and their power to connect people. Committed to collaborative development, prioritizing mental health, and environmental consciousness. Explore my portfolio for a showcase of creative and technically proficient frontend work. I love the art of transforming ideas into interactive digital experiences! 👋 🚀",
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

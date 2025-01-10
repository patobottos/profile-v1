import FooterPbaudiovisual from "./footer";
import NavbarPbaudiovisual from "./navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "pb Audiovisual",
  description: "pb Audiovisual Page Of Pato Bottos Portfolio Website",
};

export default function PbaudiovisualLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mb-auto mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-8 lg:px-24">
      <NavbarPbaudiovisual />
      {children}
      <FooterPbaudiovisual />
    </div>
  );
}

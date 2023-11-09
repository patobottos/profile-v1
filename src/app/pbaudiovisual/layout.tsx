import NavbarPbaudiovisual from "./navbar";
export default function PbaudiovisualLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mb-auto mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-8 lg:px-24">
      <NavbarPbaudiovisual />
      {children}
    </div>
  );
}

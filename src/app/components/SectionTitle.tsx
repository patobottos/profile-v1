import React from "react";

type SectionTitleProps = {
  title: string;
};

function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="sticky top-0 bg-royal/75 backdrop-blur z-20 w-screen pt-14 pb-6 scroll-mt-8">
      <h2 className="text-base font-bold uppercase tracking-widest text-cream">
        {title}
      </h2>
    </div>
  );
}
export default SectionTitle;

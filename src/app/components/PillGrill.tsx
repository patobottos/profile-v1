import React from "react";
import Pill from "./Pill";

type TechstackProps = {
  techstack: string[];
};

function PillGrill({ techstack }: TechstackProps) {
  const techItems = techstack.map((tech) => (
    <Pill key={tech} title={tech}></Pill>
  ));
  return (
    <div>
      <ul className="mt-2 font-poppins font-medium text-cream text-sm flex flex-wrap justify-start leading-6 tracking-wide">
        {techItems}
      </ul>
    </div>
  );
}

export default PillGrill;

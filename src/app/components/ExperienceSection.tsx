import React from "react";
import ExperienceCard from "./ExperienceCard";
import SectionTitle from "./SectionTitle";
import experiences from "../data/experience.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description: "Experience Section Of Pato Bottos Portfolio Website",
};

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-24 md:mb-24 lg:mb-36"
      aria-label="Experience"
    >
      <SectionTitle title="Experience" />
      <div>
        {experiences.map((item) => (
          <ExperienceCard key={item.id} {...item}></ExperienceCard>
        ))}
      </div>
      <div>
        <div className="flex font-opensans mt-3 text-lg font-semibold text-light-blue sm:text-xl tracking-wide rounded-2xl h-10 p-4 justify-center items-center max-w-max bg-gray-dark hover:text-title-gray hover:drop-shadow-glow">
          <a
            className=""
            href="resume.pdf"
            target="_blank"
            rel="noferrer"
            aria-label="IT Academy"
          >
            <span className="drop-shadow">View Full Résumé</span>
            <span className="ml-4">{"\u2794"}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

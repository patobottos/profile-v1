import React from "react";
import ExperienceCard from "./ExperienceCard";
import SectionTitle from "./SectionTitle";
import experiences from "../data/experience.json";

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
        <div className="flex font-opensans mt-3 text-lg font-semibold text-title-gray sm:text-xl drop-shadow tracking-wide hover:text-pale-lavender">
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

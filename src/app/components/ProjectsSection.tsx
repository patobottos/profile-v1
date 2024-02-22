import React from "react";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";
import projects from "../data/projects.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects Section Of Pato Bottos Portfolio Website",
};

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-24 md:mb-24 lg:mb-36"
      aria-label="Projects"
    >
      <SectionTitle title="Projects" />

      <div>
        {projects.map((item) => (
          <ProjectCard key={item.id} {...item}></ProjectCard>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

import React from "react";
import Pill from "./Pill";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-24 md:mb-24 lg:mb-36"
      aria-label="Projects"
    >
      <SectionTitle title="Projects" />
      <ProjectCard
        project_title="Nim Strategy Game App"
        image_url="/nim1.png"
        project_url="https://playnim.vercel.app/"
        company="· IT Academy"
        description="Online Nim strategy game built with React, styled components, and JavaScript. Seamlessly integrated with Firebase for real-time interactions, dynamic content updates, and a live ranking, enhancing player engagement and competition."
        techstack={[
          "React",
          "Styled Components",cle
          "JavaScript",
          "HTML5",
          "CSS3",
          "Firebase",
          "Git",
          "Visual Studio Code",
        ]}
      />
      <ProjectCard
        project_title="Personal portfolio web"
        image_url="/portfolio.png"
        project_url="https://patobottos.vercel.app/"
        company=""
        description="Personal portfolio webpage that showcases my skills and experience in four sections: About, Experience, Projects, and Contact. Taking inspiration from Hosna Qasmei's workflow and tech stack, I designed it using Figma and coded it with Visual Studio Code, Next.js, and Tailwind CSS. This ensures a visually appealing and responsive display of my work. Hosted on Vercel, my portfolio is easily accessible for those interested in exploring my projects."
        techstack={[
          "Figma",
          "Next.js",
          "Tailwind CSS",
          "TypeScript",
          "HTML",
          "Vercel",
        ]}
      />
      <ProjectCard
        project_title="Distinc WordPress Websites"
        image_url="/pbaudiovisual.png"
        project_url="/pbaudiovisual"
        company="· pbaudiovisual"
        description="Design and development of more than 10 distinct WordPress websites, each one tailored to meet the needs and branding of clients and organizations. My work emphasizes responsive and user-friendly designs, content management with SEO optimization, theme customization, and seamless plugin integration."
        techstack={["WordPress", "UI/UX Design", "SEO", "CSS", "HTML"]}
      />
    </section>
  );
};

export default ProjectsSection;

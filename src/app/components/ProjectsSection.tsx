import React from "react";
import Pill from "./Pill";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Projects"
    >
      <div className="sticky top-0 bg-royal/75 backdrop-blur z-20 mb-4 w-screen py-5 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-cream">
          Projects
        </h2>
      </div>

      <ProjectCard
        project_title="Nim Strategy Game App"
        image_url="/nim1.png"
        project_url="https://patobottos.github.io/playnimgame/"
        company="· IT Academy"
        description="Online Nim strategy game built with React, styled components, and JavaScript. Seamlessly integrated with Firebase for real-time interactions, dynamic content updates, and a live ranking, enhancing player engagement and competition."
        techstack={[
          "React",
          "Styled Components",
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
        description="Personal portfolio webpage that showcases my skills and experience in four sections: About, Experience, Projects, and Contact. It was designed in Figma and coded using Visual Studio Code, Next.js, and Tailwind CSS, ensuring an appealing and responsive display of my work. Hosted on Vercel, it's easily accessible for those interested in exploring my portfolio."
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
        project_url="https://pbaudiovisual.wordpress.com"
        company="· pbaudiovisual"
        description="Design and development of more than 10 distinct WordPress websites, each one tailored to meet the needs and branding of clients and organizations. My work emphasizes responsive and user-friendly designs, content management with SEO optimization, theme customization, and seamless plugin integration."
        techstack={["WordPress", "UI/UX Design", "SEO", "CSS", "HTML"]}
      />
    </section>
  );
};

export default ProjectsSection;

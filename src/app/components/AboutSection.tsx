import React from "react";
import SectionTitle from "./SectionTitle";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Section Of Pato Bottos Portfolio Website",
};

const AboutSection = () => {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-24 md:mb-24 lg:mb-36"
      aria-label="About me"
    >
      <SectionTitle title="About" />
      <div>
        <div className="text-white">
          Embarking on a digital journey over a decade ago, I&#39;ve crafted
          engaging online experiences, refining my skills in ReactJS,
          JavaScript, and web technologies. As a React Front End Developer at IT
          Academy, I bring digital experiences to life, such as the timeless Nim
          game. Before this role, spanning 10 years, I worked as a WordPress Web
          Content Manager, contributing to diverse web projects, including
          personal blogs, entrepreneurs&#39; websites, and non-profit platforms.
          <br />
          <br />
          Beyond coding, I co-directed an indie film festival, attracting 2000+
          cinephiles, and led initiatives to enhance various public services.
          Recently, I successfully completed a rigorous React Front End Web
          Developer Coding Bootcamp at IT Academy in Barcelona, ensuring that I
          stay at the forefront of web development.
          <br />
          <br />
          Proficient in Catalan, Spanish, English, and French, I am passionate
          about languages and their power to connect people.
          <br />
          <br />
          I believe in the transformative potential of groups of people working
          cooperatively with a shared objective, while consistently prioritizing
          mental health and the environment.
          <br />
          <br />
          Away from screens, I send extensive global voice messages, play
          Rummikub with family, tend rooftop radishes, run on Sunday mornings,
          enjoy horror movies, engage in a school association, and participate
          in a Poblenou cohousing project.
          <br />
          <br />
          Welcome to my portfolio! 👋 🚀
          <br />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import React from "react";
import SectionTitle from "./SectionTitle";

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
          Embarking on a digital journey over a decade ago, I discovered a
          passion for crafting immersive online experiences. From tinkering with
          personal blogs to leading impactful projects for non-profits and
          startups, I&#39;ve honed my skills in ReactJS, JavaScript, and web
          technologies.
          <br />
          <br />
          Currently serving as a React Front End Developer at IT Academy, I
          bring digital experiences to life, such as the timeless Nim game.
          Prior to this, over a span of 10 years, I served as a web content
          manager, contributing to diverse web projects, including personal
          blogs, entrepreneurs&#39; websites, and non-profit platforms,
          utilizing WordPress.
          <br />
          <br />
          Beyond coding, I&#39;ve co-directed an indie film festival, attracted
          2000+ cinephiles, and spearheaded public service improvements.
          Recently, I successfully completed a rigorous React Front End Web
          Developer Coding Bootcamp at IT Academy at Barcelona, ensuring that I
          stay at the forefront of web development.
          <br />
          <br />
          Proficient in Catalan, Spanish, English, and French, I am passionate
          about languages and their ability to connect people.
          <br />
          <br />
          I believe in the power of a group of people making substantial changes
          through cooperative work, striving to achieve objectives, while always
          prioritizing mental health and the environment.
          <br />
          <br />
          Away from screens, I send global and extense voice messages, play
          Rummikub with family, tend rooftop radishes, run on Sunday mornings,
          enjoy horror movies, engage in school association, and participate in
          a Poblenou cohousing project.
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

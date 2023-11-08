import React from "react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 bg-royal/75 backdrop-blur z-20 mb-4 w-screen py-5 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-cream">
          About
        </h2>
      </div>
      <div>
        <div className="text-white">
          Embarking on a digital journey over a decade ago, I discovered a
          passion for crafting immersive online experiences. From tinkering with
          personal blogs to leading impactful projects for non-profits and
          startups, I&#39;ve honed my skills in ReactJS, JavaScript, and web
          technologies.
          <br />
          <br />
          As a React Front End Developer at IT Academy, I breathe life into
          digital experiences like the timeless Nim game. I&#39;ve also driven
          digital transformation at CRAC Association.
          <br />
          <br />
          Beyond coding, I&#39;ve co-directed an indie film festival, attracted
          2000+ cinephiles, and spearheaded public service improvements. I
          recently completed a rigorous React Front End Web Developer Coding
          Bootcamp at IT Academy, keeping me at the forefront of web
          development.
          <br />
          <br />
          I&#39;m passionate about languages, fluent in Catalan, Spanish,
          English, and French.
          <br />
          <br />
          I believe in the power of a group of people making substantial changes
          through cooperative work, striving to achieve objectives, while always
          prioritizing mental health and the environment.
          <br />
          <br />
          Away from screens, I send global and extense voice messages, play
          Rummikub with family, tend rooftop radishes, run Sunday mornings,
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
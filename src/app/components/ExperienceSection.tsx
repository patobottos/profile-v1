import React from "react";
import ExperienceCard from "./ExperienceCard";
import SectionTitle from "./SectionTitle";

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-24 md:mb-24 lg:mb-36"
      aria-label="Experience"
    >
      <SectionTitle title="Experience" />
      <div>
        <ExperienceCard
          year="2022 - Present"
          job_title="Front End Developer"
          company_name="IT Academy"
          company_url="https://www.barcelonactiva.cat/en/itacademy-business"
          job_description="Create dynamic web applications, from initial design to coding
                and optimization, ensuring top-notch user experiences."
          job_techstack={[
            "React",
            "Firebase",
            "JavaScript",
            "HTML5",
            "CSS3",
            "Git",
          ]}
        />
        <ExperienceCard
          year="2018 - Present"
          job_title="Wordpress Web Manager"
          company_name="CRAC Association"
          company_url="https://cracpatrimoni.com/"
          job_description="Oversight of the main page, the professional directory and
                Intranet on the association&#39;s WordPress website,
                communication with members through various channels, production
                and distribution of weekly newsletters via Mailchimp, and
                maintenance of the association&#39;s database using FileMaker."
          job_techstack={[
            "WordPress",
            "Elementor",
            "HTML",
            "CSS",
            "Mailchimp",
            "FileMaker",
          ]}
        />

        <ExperienceCard
          year="2013 - 2018"
          job_title="Wordpress Web Developer"
          company_name="pbaudiovisual"
          company_url="https://pbaudiovisual.wordpress.com"
          job_description="Design and develop custom WordPress platforms for clients,
                resulting in responsive, user-friendly websites. Performance
                enhancements were achieved through strategic optimization,
                leading to improved loading times and SEO rankings."
          job_techstack={["WordPress", "Elementor", "UI/UX", "HTML", "CSS"]}
        />
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

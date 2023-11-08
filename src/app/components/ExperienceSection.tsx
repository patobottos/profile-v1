import React from "react";
import Pill from "./Pill";

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Experience"
    >
      <div className="sticky top-0 bg-royal/75 backdrop-blur z-20 mb-4 w-screen py-5 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-cream">
          Experience
        </h2>
      </div>
      <div>
        <div className="mb-16">
          <div
            id="year"
            className="z-10 mb-2 mt-1 text-s font-semibold uppercase tracking-wide text-pale-lavender sm:col-span-2"
          >
            2022 - Present{" "}
          </div>
          <div>
            <div className="flex font-opensans mt-3 text-lg font-medium tracking-tight text-title-gray sm:text-xl">
              <a
                className=""
                href=""
                target="_blank"
                rel="noferrer"
                aria-label="IT Academy"
              >
                <span>Front End Developer · IT Academy</span>
                <span className="ml-4">{"\u2197"}</span>
              </a>
            </div>
            <div>
              <p
                id="job-description"
                className="mt-2 leading-normal text-light-blue"
              >
                Create dynamic web applications, from initial design to coding
                and optimization, ensuring top-notch user experiences.
              </p>
              <ul className="mt-2 font-poppins font-medium text-cream text-sm flex flex-wrap justify-start leading-6 tracking-wide">
                <li>
                  <Pill title={"React"}></Pill>
                </li>
                <li>
                  <Pill title={"Firebase"}></Pill>
                </li>
                <li>
                  <Pill title={"JavaScript"}></Pill>
                </li>
                <li>
                  <Pill title={"HTML5"}></Pill>
                </li>
                <li>
                  <Pill title={"CSS3"}></Pill>
                </li>
                <li>
                  <Pill title={"Git"}></Pill>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mb-16">
          <div
            id="year"
            className="z-10 mb-2 mt-1 text-s font-semibold uppercase tracking-wide text-pale-lavender sm:col-span-2"
          >
            2018 - Present{" "}
          </div>
          <div>
            <div className="flex font-opensans mt-3 text-lg font-medium tracking-tight text-title-gray sm:text-xl">
              <a
                className=""
                href=""
                target="_blank"
                rel="noferrer"
                aria-label="Wordpress Web Manager"
              >
                <span>Wordpress Web Manager · CRAC Association</span>
                <span className="ml-4">{"\u2197"}</span>
              </a>
            </div>
            <div>
              <p
                id="job-description"
                className="mt-2 leading-normal text-light-blue"
              >
                Oversight of the main page, the professional directory and
                Intranet on the association&#39;s WordPress website,
                communication with members through various channels, production
                and distribution of weekly newsletters via Mailchimp, and
                maintenance of the association&#39;s database using FileMaker.
              </p>
              <ul className="mt-2 font-poppins font-medium text-cream text-sm flex flex-wrap justify-start leading-6 tracking-wide">
                <li>
                  <Pill title={"WordPress"}></Pill>
                </li>
                <li>
                  <Pill title={"Elementor"}></Pill>
                </li>
                <li>
                  <Pill title={"HTML"}></Pill>
                </li>
                <li>
                  <Pill title={"CSS"}></Pill>
                </li>
                <li>
                  <Pill title={"Mailchimp"}></Pill>
                </li>
                <li>
                  <Pill title={"FileMaker"}></Pill>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mb-16">
          <div
            id="year"
            className="z-10 mb-2 mt-1 text-s font-semibold uppercase tracking-wide text-pale-lavender sm:col-span-2"
          >
            2013 - 2018{" "}
          </div>
          <div>
            <div className="flex font-opensans mt-3 text-lg font-medium tracking-tight text-title-gray sm:text-xl">
              <a
                className=""
                href=""
                target="_blank"
                rel="noferrer"
                aria-label="Wordpress Web Developer"
              >
                <span>Wordpress Web Developer · pbaudiovisual</span>
                <span className="ml-4">{"\u2197"}</span>
              </a>
            </div>
            <div>
              <p
                id="job-description"
                className="mt-2 leading-normal text-light-blue"
              >
                Design and develop custom WordPress platforms for clients,
                resulting in responsive, user-friendly websites. Performance
                enhancements were achieved through strategic optimization,
                leading to improved loading times and SEO rankings.
              </p>
              <ul className="mt-2 font-poppins font-medium text-cream text-sm flex flex-wrap justify-start leading-6 tracking-wide">
                <li>
                  <Pill title={"WordPress"}></Pill>
                </li>
                <li>
                  <Pill title={"Elementor"}></Pill>
                </li>
                <li>
                  <Pill title={"UI/UX"}></Pill>
                </li>
                <li>
                  <Pill title={"HTML"}></Pill>
                </li>
                <li>
                  <Pill title={"CSS"}></Pill>
                </li>
              </ul>
            </div>
          </div>
        </div>
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

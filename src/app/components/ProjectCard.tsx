import React from "react";
import PillGrill from "./PillGrill";

type ProjectProps = {
  image_url: string;
  project_url: string;
  project_title: string;
  company: string;
  description: string;
  techstack: string[];
};

function ProjectCard({
  image_url,
  project_url,
  project_title,
  company,
  description,
  techstack,
}: ProjectProps) {
  return (
    <div className="flex flex-col-reverse mb-12 sm:flex-row">
      <div className="flex max-w-[60%] sm:w-1/4 mt-4 sm:mt-0">
        <picture>
          <img
            className="border-2 border-slate-blue rounded-lg min-h-max w-7/8"
            src={image_url}
            alt=""
          />
        </picture>
      </div>
      <div className="flex flex-row sm:w-3/4 sm:mx-4">
        <div className="flex flex-col font-opensans text-lg font-medium tracking-tight text-title-gray sm:text-xl">
          <a
            className=""
            href={project_url}
            target="_blank"
            rel="noferrer"
            aria-label={project_title}
          >
            <span>
              {project_title} {company}
            </span>
            <span className="ml-4">{"\u2197"}</span>
          </a>
          <p className="mt-2 font-roboto leading-normal text-light-blue text-sm tracking-normal">
            {description}
          </p>
          <PillGrill techstack={techstack} />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

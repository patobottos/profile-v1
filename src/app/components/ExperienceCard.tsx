import React from "react";
import PillGrill from "./PillGrill";

type ExperienceProps = {
  year: string;
  job_title: string;
  company_name: string;
  company_url: string;
  job_description: string;
  job_techstack: string[];
};

export default function ExperienceCard({
  year,
  job_title,
  company_name,
  company_url,
  job_description,
  job_techstack,
}: ExperienceProps) {
  return (
    <div className="flex flex-col mb-12 p-4 hover:bg-gray-dark hover:opacity-90 hover:rounded-2xl">
      <div className="z-10 mb-2 mt-1 text-s font-semibold uppercase tracking-wide text-pale-lavender sm:col-span-2">
        {year}
      </div>
      <div className="flex font-opensans mt-3 text-lg font-medium tracking-tight text-title-gray sm:text-xl">
        <a
          href={company_url}
          target="_blank"
          rel="noferrer"
          aria-label={company_name}
        >
          <span>
            {job_title} · {company_name}
          </span>
          <span className="ml-4">{"\u2197"}</span>
        </a>
      </div>
      <div className="mt-2 leading-normal text-light-blue">
        {job_description}
      </div>
      <PillGrill techstack={job_techstack} />
    </div>
  );
}

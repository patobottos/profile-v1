import React from "react";
import PillGrill from "./PillGrill";

type WebsiteProps = {
  image_url: string;
  project_url: string;
  project_title: string;
  description: string;
};

function WebsiteCard({
  image_url,
  project_url,
  project_title,
  description,
}: WebsiteProps) {
  return (
    <div className="p-6 sm:p-4 flex flex-col hover:bg-gray-dark hover:opacity-90 hover:rounded-2xl">
      <div className="">
        <picture>
          <img
            className=" border-slate-blue rounded-lg w-7/8"
            src={image_url}
            alt=""
            width={1000}
            height={1000}
          />
        </picture>
      </div>
      <div className="flex flex-col mt-4">
        <div className="flex flex-col text-start font-opensans text-base sm:text-ellipsis lg:text-lg text-title-gray">
          <a
            className=""
            href={project_url}
            target="_blank"
            rel="noferrer"
            aria-label={project_title}
          >
            <span>{project_title}</span>
            <span className="ml-4">{"\u2197"}</span>
          </a>
          <p className="mt-2 font-roboto leading-normal text-light-blue text-xs md:text-sm lg:text-base tracking-normal">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default WebsiteCard;

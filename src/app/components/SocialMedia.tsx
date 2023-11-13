import React from "react";
import { FaGithub, FaLinkedinIn, FaFigma, FaWhatsapp } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";
FaGithub;

const SocialMedia = () => {
  return (
    <div className="lg:sticky lg:top-[100vh] ">
      <ul className="mt-8 p-2 flex items-center">
        <li className="mr-5">
          <a
            className="block "
            href="https://github.com/patobottos"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="fill-orange hover:fill-orange/70 h-6 w-6 " />
          </a>
        </li>
        <li className="mr-5">
          <a
            className="block"
            href="https://www.linkedin.com/in/patobottos/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn className="fill-orange hover:fill-orange/70 h-6 w-6 " />
          </a>
        </li>
        <li className="mr-5">
          <a
            className="block"
            href="https://www.figma.com/file/998vI6Mk9THZsuPuQFC1xx/Portfolio2023?type=design&mode=design&t=6qqpqnIRJQznbepD-1"
            target="_blank"
            rel="noreferrer"
          >
            <FaFigma className="fill-orange hover:fill-orange/70 h-6 w-6" />
          </a>
        </li>
        <li className="mr-5">
          <a
            className="block"
            href="mailto:patobottos@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <MdOutlineAlternateEmail className="fill-orange hover:fill-orange/70  h-6 w-6" />
          </a>
        </li>
        <li className="mr-5">
          <a
            className="block"
            href="https://wa.me/34627849839?text=I%20saw%20your%20portfolio%20in%20your%20website"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp className="fill-orange hover:fill-orange/70  h-6 w-6" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;

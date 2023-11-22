import React from "react";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";
import SectionTitle from "@/app/components/SectionTitle";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Contact"
    >
      <SectionTitle title="Contact" />
      <div className="flex items-center">
        <ul className="mt-6 flex items-center p-1">
          <li className="mr-10">
            <a
              className="block"
              href="https://www.linkedin.com/in/patobottos/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn className="fill-orange hover:fill-light-blue h-6 w-6" />
            </a>
          </li>
          <li className="mr-10">
            <a
              className="block"
              href="mailto:patobottos@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <MdOutlineAlternateEmail className="fill-orange hover:fill-light-blue h-6 w-6" />
            </a>
          </li>
          <li className="mr-12">
            <a
              className="block"
              href="https://wa.me/34627849839?text=I%20saw%20your%20portfolio%20in%20your%20website"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp className="fill-orange hover:fill-light-blue h-6 w-6" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ContactSection;

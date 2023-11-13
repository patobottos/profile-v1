import React from "react";
import Link from "next/link";
import { FaCircleChevronLeft } from "react-icons/fa6";

export default function NavbarPbaudiovisual() {
  return (
    <div className="flex flex-row-reverse">
      <button className="group flex p-2 hover:bg-gray-dark hover:opacity-90 hover:rounded-2xl w-26 self-end">
        <Link className="flex flex-row items-center" href="/">
          <FaCircleChevronLeft className="fill-light-gray group-hover:fill-title-gray h-8 w-8 md:h-10 md:w-10 m-2" />
          <span className="m-1 text-lg text-light-gray group-hover:text-title-gray">
            Back
          </span>
        </Link>
      </button>
    </div>
  );
}

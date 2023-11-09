import React from "react";
import Link from "next/link";
import Pill from "../components/Pill";

export default function NavbarPbaudiovisual() {
  return (
    <div className="group flex flex-row-reverse ">
      <Link
        className="bg-pills group-hover:bg-gray-dark rounded-2xl p-3 align-middle"
        href="/"
      >
        <span className="text-2xl text-cream group-hover:text-orange">
          {"\u27F5"}
        </span>
      </Link>
    </div>
  );
}

import React from "react";
import Navbar from "./Navbar";
import SocialMedia from "./SocialMedia";

const HeroSection = () => {
  return (
    <section id="home" className="flex flex-col">
      <h1 className="text-5xl font-bold tracking-wide text-title-gray sm:text-5xl mb-4 font-libre">
        <a href="/">Pato Bottos</a>
      </h1>
      <h2 className="font-opensans mt-3 text-lg font-medium tracking-tight text-title-gray sm:text-xl">
        Frontend Developer at IT Academy
      </h2>
      <p className="mt-4 max-w-xs leading-normal text-light-blue">
        I bring a king problem-solving ability, a passion for clean-code, and a
        creative design approach to crafting user-friendly interfaces.
      </p>
      <Navbar />
      <SocialMedia />
    </section>
  );
};

export default HeroSection;

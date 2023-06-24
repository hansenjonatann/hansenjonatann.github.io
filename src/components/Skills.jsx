import React from "react";
import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoPhp,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoBootstrap,
} from "react-icons/bi";
function Skills() {
  return (
    <div className="mt-64 md:mt-8 ">
      <h1 className="text-center text-secondary text-2xl font-bold ">Skills</h1>
      <div className="flex transition duration-250  md:justify-center text-6xl md:text-7xl text-secondary justify-center mt-4 ">
        <BiLogoHtml5
          title="HTML"
          className="hover:scale-150 hover:text-orange-600"
        />
        <BiLogoCss3
          title="CSS"
          className="hover:scale-150 hover:text-blue-600"
        />
        <BiLogoJavascript
          title="Javascript"
          className="hover:scale-150 hover:text-yellow-600"
        />
        <BiLogoPhp
          title="PHP"
          className="hover:scale-150 hover:text-indigo-600"
        />
        <BiLogoBootstrap
          title="Bootstrap"
          className="hover:scale-150 hover:text-indigo-800"
        />
      </div>
      <h2 className="text-center text-secondary text-2xl font-bold mt-4 md:mt-8">
        Being Studied
      </h2>
      <div className="flex text-6xl text-secondary justify-center mt-4 md:text-7xl ">
        <BiLogoReact
          title="React"
          className="hover:scale-150 hover:text-[#149ECA]"
        />
        <BiLogoTailwindCss
          title="Tailwind CSS"
          className="hover:scale-150 hover:text-[#38BDF8]"
        />
      </div>
    </div>
  );
}

export default Skills;

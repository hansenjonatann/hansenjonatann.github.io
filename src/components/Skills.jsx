import React from "react";
import IconBxlHtml5 from "../Box/HTML";
import IconBxlCss3 from "../Box/Css";
import IconBxlJavascript from "../Box/Javascript";
import IconBxlPhp from "../Box/Php";
import IconBxlBootstrap from "../Box/Bootstrap";
import IconBxlReact from "../Box/React";
import IconBxlTailwindCss from "../Box/Tailwind";
function Skills() {
  return (
    <div className="pt-10 md:pt-8 md:pb-16 pb-8 bg-primary">
      <h1 className="text-center text-secondary text-2xl md:text-4xl font-bold ">Skills</h1>
      <div className="flex transition duration-250  md:justify-center text-6xl md:text-8xl text-secondary justify-center mt-4 ">
        <IconBxlHtml5
          title="HTML"
          className="hover:scale-150 hover:text-orange-600"
        />
        <IconBxlCss3
          title="CSS"
          className="hover:scale-150 hover:text-blue-600"
        />
        <IconBxlJavascript
          title="Javascript"
          className="hover:scale-150 hover:text-yellow-600"
        />
        <IconBxlPhp
          title="PHP"
          className="hover:scale-150 hover:text-indigo-600"
        />
        <IconBxlBootstrap
          title="Bootstrap"
          className="hover:scale-150 hover:text-indigo-800"
        />
      </div>
      <h2 className="text-center text-secondary text-2xl font-bold mt-4 md:mt-8 md:text-4xl">
        Being Studied
      </h2>
      <div className="flex text-6xl text-secondary justify-center mt-4 md:text-9xl ">
        <IconBxlReact
          title="React"
          className="hover:scale-150 hover:text-[#149ECA]"
        />
        <IconBxlTailwindCss
          title="Tailwind CSS"
          className="hover:scale-150 hover:text-[#38BDF8]"
        />
      </div>
    </div>
  );
}

export default Skills;

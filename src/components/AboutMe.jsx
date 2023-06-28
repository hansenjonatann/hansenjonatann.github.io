import React from "react";

function AboutMe() {
  return (
    <div className="md:pt-4 bg-accsent h-screen md:h-auto pt-6">
      <h1 className="text-3xl md:text-4xl md:pt-6 font-bold text-primary  text-center">
        About Me
      </h1>

      <div className="flex items-center py-4 flex-wrap w-screen">
        <div className="w-1/2">
          <img src="image/hansenjonatan.png" alt="" className="mx-24 md:mb-16" />
        </div>
        <div className="w-1/2 relative">
          <p className="absolute top-36 text-xl font-medium w-80 right-1 pr-1 mr-6   text-primary md:relative md:text-[29px] md:leading-8 md:font-bold md:w-full md:top-0 md:mb-4 md:right-20">
            Hello, my name is Hansen Jonatan. I am a student majoring in
            information systems at Batam International University. I have
            aspirations to become a Fullstack Web Developer and Mobile
            Developer, therefore I learned web programming on my own.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;

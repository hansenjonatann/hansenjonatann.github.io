import React from "react";

function AboutMe() {
  return (
    <div className="mt-4">
      <h1 className="text-2xl font-bold  text-secondary text-center">
        About Me
      </h1>

      <div className="flex items-center py-4 flex-wrap w-screen">
        <div className="w-1/2">
          <img src="image/hansenjonatann.png" alt="" className="mx-24" />
        </div>
        <div className="w-1/2 relative">
          <p className="absolute top-36 text-lg font-medium w-80 right-1 pr-1 mr-2  text-accsent md:relative md:text-[29px] md:leading-8 md:font-bold md:w-full md:top-0 md:right-16">
            Hello, my name is Hansen Jonatan.I am a student majoring in
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

import React from "react";

function Hero() {
  return (
    <div className="flex items-center py-8 bg-gray-100 w-screen flex-wrap">
      <div className="md:w-1/2  p-8 ">
        <h1 className="text-4xl font-bold leading-none ">
          Hello , I'm <span className="text-[#191970]">Hansen Jonatan</span>
        </h1>
        <p className="text-lg mt-4 leading-relaxed text-gray-600 font-medium">
          I am a student who is interested in technology and has a dream of
          becoming <strong>Fullstack Web Developer</strong> and{" "}
          <strong>mobile developer</strong>
        </p>
        <a
          href="#"
          className="border-2 border-gray-700  transition duration-300 text-white py-2 mt-2 px-6 bg-[#191970] font-bold inline-block rounded-lg hover:bg-opacity-50 "
        >
          Learn More
        </a>
      </div>
      <div className="w-1/2">
        <img
          src="image/hansenjonatan.png"
          alt=""
          width={250}
          className="ml-24"
        />
      </div>
    </div>
  );
}

export default Hero;

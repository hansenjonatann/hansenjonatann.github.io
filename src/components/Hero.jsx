import React from "react";
import IconGithub from "../Icons/Github";

function Hero() {
  return (
    <div className="flex items-center py-4  w-screen flex-wrap">
      <div className="md:w-1/2  p-10 md:p-16 ">
        <h1 className="text-secondary font-bold text-3xl md:text-[41px]">
          Hansen Jonatan
        </h1>
        <p className="text-[30px] text-accsent font-medium ">
          I am a
          <span className="text-secondary text-xl  px-2  md:px-4 md:text-[35px] font-bold">
            Web Developer
          </span>
        </p>
        <div className="flex rounded-circle  text-2xl mb-3 text-secondary gap-4 mt-3">
          <a href="https://github.com/hansenjonatann" target="_blank">
            <IconGithub />
          </a>
          <a href="https://instagram.com/hansenjonatann" target="_blank">
          </a>
          <a href="https://youtube.com/@hjcodin" target="_blank"></a>
          <a href="https://twitter.com/@hansenjonatannn" target="_blank"></a>
        </div>
        <a
          href="#"
          className="transition duration-300 text-primary py-2 mt-2 px-6  bg-secondary font-medium inline-block rounded-lg hover:bg-opacity-50  "
        >
          Learn More
        </a>
        <a
          href="#"
          className="transition duration-300 text-accsent py-2 mt-2 px-6    border border-secondary  md:mx-4 mx-2  font-medium inline-block rounded-lg hover:bg-opacity-50 "
        >
          Download CV
        </a>
      </div>
      <div className="w-1/2">
        <img
          src="image/hansenjonatan.png"
          alt=""
          className="mx-24 md:ml-32 w-[250px]"
        />
      </div>
    </div>
  );
}

export default Hero;

import React from "react";
import IconGithub from "../Icons/Github";
import IconInstagram from "../Icons/Instagram";
import IconYoutube from "../Icons/Youtube";
import IconLinkedin from "../Icons/Linkedin";
import IconTwitter from "../Icons/Twitter";

function Hero() {
  return (
    <div className="flex items-center py-4 pb-16  w-screen flex-wrap bg-primary">
      <div className="md:w-1/2  p-10 md:p-16 ">
        <h1 className="text-secondary font-medium text-3xl md:text-5xl">
          Hansen Jonatan
        </h1>
        <p className="text-[30px] text-secondary font-medium ">
          I am a
          <span className="text-accsent text-2xl  px-2  md:px-4 md:text-[35px] md:pt-16 font-bold">
            Web Developer
          </span>
        </p>
        <div className="flex rounded-circle  text-2xl md:text-4xl mb-3 text-accsent gap-4 mt-3 ">
          <a href="https://github.com/hansenjonatann" target="_blank">
            <IconGithub />
          </a>
          <a href="https://instagram.com/hansenjonatann" target="_blank">
            <IconInstagram />
          </a>
          <a href="https://youtube.com/@hjcodin" target="_blank">
            <IconYoutube />
          </a>
          <a href="https://twitter.com/@hansenjonatannn" target="_blank">
            <IconTwitter />
          </a>
          <a href="https://linkedin.com/@hansenjonatannn" target="_blank">
            <IconLinkedin />
          </a>
        </div>
        <a
          href="#"
          className="transition duration-300 text-primary font-bold py-2 mt-2 px-6  bg-secondary  inline-block rounded-lg hover:bg-opacity-50  "
        >
          Learn More
        </a>
        <a
          href="#"
          className="transition duration-300 text-accsent  py-2 mt-2 px-6    border border-secondary  md:mx-4 mx-2  font-medium inline-block rounded-lg hover:bg-opacity-50 "
        >
          Download CV
        </a>
      </div>
      <div className="w-1/2">
        <img
          src="image/hansenjonatann.png"
          alt=""
          className="mx-24 md:ml-26 "
        />
      </div>
    </div>
  );
}

export default Hero;

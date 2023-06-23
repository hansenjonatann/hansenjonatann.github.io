import React from "react";

function Hero() {
  return (
    <div className="flex items-center py-4  w-screen flex-wrap">
      <div className="md:w-1/2  p-16 ">
        <h1 className="text-secondary font-bold text-[41px]">Hansen Jonatan</h1>
        <p className="text-[30px] text-accsent font-medium ">
          I am a{" "}
          <span className="text-secondary text-[35px] font-bold">
            Web Developer
          </span>
        </p>
        <div className="flex rounded-circle w-[35px] text-2xl mb-3 text-secondary gap-4">
          <a href="https://github.com/hansenjonatann">
            {" "}
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://instagram.com/hansenjonatann">
            {" "}
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
        <a
          href="#"
          className="transition duration-300 text-primary py-2 mt-2 px-6 bg-secondary font-bold inline-block rounded-lg hover:bg-opacity-50 "
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

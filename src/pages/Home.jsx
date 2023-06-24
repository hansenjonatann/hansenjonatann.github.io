import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
    </div>
  );
}

export default Home;

import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Portfolio from "../components/Portfolio";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Portfolio />
    </div>
  );
}

export default Home;

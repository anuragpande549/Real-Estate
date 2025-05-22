// Home.jsx
import React from "react";
import HeroSection from "./components/hero-section/HeroSection";
import Section1 from "./components/sections/section1";
import Section2 from "./components/sections/Section2";
import Section3 from "./components/sections/Section3";
import Section4 from "./components/sections/Section4";
import Contact from "./components/sections/Contact";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Contact />
    </>
  );
};

export default Home;

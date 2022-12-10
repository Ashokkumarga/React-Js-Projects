import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroImg2 from "../Components/HeroImg2";
import AboutContent from "../Components/AboutContent";

const About = () => {
  return (
    <>
      <Navbar />
      <HeroImg2 heading="ABOUT" text="I'm a Front-End Developer" />
      <AboutContent />
      <Footer />
    </>
  );
};

export default About;

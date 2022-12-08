import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroImg2 from "../Components/HeroImg2";
import PricingCard from "../Components/PricingCard";
import WorkCard from "../Components/WorkCard";

const Project = () => {
  return (
    <>
      <Navbar />
      <HeroImg2 heading="PROJECTS" text="Some of my most recent works " />
      <WorkCard />
      <PricingCard />
      <Footer />
    </>
  );
};

export default Project;

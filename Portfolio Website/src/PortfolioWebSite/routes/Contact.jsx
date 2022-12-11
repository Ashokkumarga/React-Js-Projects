import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroImg2 from "../Components/HeroImg2";
import ConForm from "../Components/ConForm";

const Contact = () => {
  return (
    <>
      <Navbar />
      <HeroImg2 heading="CONTACT" text="lets Have A Chat" />
      <ConForm />
      <Footer />
    </>
  );
};

export default Contact;

import "./HeroImgStyles.css";

import React from "react";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div classname="hero">
      <div className="mask">
        <img
          className="into-img"
          src="https://image.shutterstock.com/image-photo/digital-technology-software-development-concept-260nw-2111828198.jpg"
          alt="IntroImg"
        />
      </div>
      <div className="content">
        <p className="p">Hey , I'M A SOFTWARE DEVELOPER</p>
        <h1 className="h1">React DEVELOPER</h1>
        <div className="butn">
          <Link to="/Project" className="btn">
            PROJECTS
          </Link>
          <Link to="/Contact" className="btn btn-light">
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;

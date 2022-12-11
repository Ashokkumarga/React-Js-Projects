import "./HeroImgStyles.css";

import React from "react";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div classname="hero">
      <div className="mask">
        <img
          className="into-img"
          src="https://cdn.hashnode.com/res/hashnode/image/upload/v1620551252972/yEwPk5yhT.png"
          alt="IntroImg"
        />
      </div>
      <div className="content">
        <p className="p1">Hey , I'M A SOFTWARE DEVELOPER</p>
        <h1 className="h12">REACT DEVELOPER</h1>
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

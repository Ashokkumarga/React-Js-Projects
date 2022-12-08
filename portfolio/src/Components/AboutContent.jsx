import "./AboutContentStyles.css";

import pro7 from "../assests/project7.jpg";
import pro6 from "../assests/project6.webp";

import React from "react";
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I ?</h1>
        <p>
          I'm a react front-end developer. I create resposive secure websites
          for my clients.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={pro6} className="img" alt="tr" />
          </div>
          <div className="img-stack bottom">
            <img src={pro7} className="img" alt="tr" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;

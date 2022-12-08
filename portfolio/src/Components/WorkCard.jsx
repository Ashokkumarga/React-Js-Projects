import "./WorkCardStyles.css";

import React from "react";
import { NavLink } from "react-router-dom";

const WorkCard = () => {
  return (
    <div className="project-card">
      <img
        src="https://www.simicart.com/blog/wp-content/uploads/ECommerce-website-templates-13.png"
        alt="image"
      />
      <h2 className="project-title">Project Title</h2>
      <div className="pro-details">
        <p>This is Text</p>
        <div className=" ">
          <NavLink to="url.com" className="btn">
            View
          </NavLink>
          <NavLink to="url.com" className="btn">
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;

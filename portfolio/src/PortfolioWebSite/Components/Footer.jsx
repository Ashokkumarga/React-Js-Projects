import "./FooterStyles.css";
import {
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
          </div>
          <h4>
            <div>
              <p> #185 ,3rd Cross Brookefiled</p>
              <p>Bangalore - 560037</p>
            </div>
          </h4>
          <div className="phone">
            <h4>
              {" "}
              <FaPhone
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              6363191963
            </h4>
          </div>
          <div className="email">
            <h4>
              {" "}
              <FaMailBulk
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              ashokkumarga0@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About me</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero qui
            expedita alias optio sapiente ex beatae tempore eveniet iste
            voluptate! Recusandae aut deserunt quasi soluta? Tenetur fugiat
            molestiae suscipit eaque?
          </p>
          <div className="social">
            <FaInstagram
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            />
            <FaTwitter
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

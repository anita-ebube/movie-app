import React from "react";
import "./footer.css";
import { AiFillFacebook } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social">
        <span>
          <AiFillFacebook />
        </span>
        <span>
          <FiInstagram />
        </span>
        <span>
          <AiOutlineTwitter />
        </span>
        <span>
          <AiFillYoutube />
        </span>
      </div>
      <div className="links">
        <a href="">Conditions of Use</a>
        <a href="">Privacy & Policy </a>
        <a href="">Press Room</a>
      </div>
      <div className="production">
        <p>© 2021 MovieBox by Adriana Eka Prayudha </p>
      </div>
    </div>
  );
};

export default Footer;

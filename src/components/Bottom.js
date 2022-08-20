import React from "react";
import "./allcss/bottom.css";
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";

export default function Bottom() {
  return (
    <div className="bottom">
      <a href="#contact" className="icon-hover">
        <FaMailBulk className="icon" />
      </a>
      <a href="https://github.com/anurag70" className="icon-hover">
        <FaGithub className="icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/anurag-misra-599207193"
        className="icon-hover"
      >
        <FaLinkedin className="icon" />
      </a>
      <div className="line"></div>
    </div>
  );
}

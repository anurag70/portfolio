import React from "react";
import "./allcss/about.css";
import * as des from "./data";

export default function About() {
  return (
    <div className="container page" id="about">
      <div className="container-top"></div>
      <div className="container-topcode">{des.data[1].start}</div>
      <div className="div-top">{des.div[0].start}</div>

      <div className="container-middle">
        <div className="content">
          <h1 className="heading">Who I Am ?</h1>
          <p className="description">
            Hi, myself <strong>Anurag Misra</strong>, right now am in 4Th year,
            pursuing my B.E degree in <strong>Information Technology</strong>{" "}
            from Jadavpur University.
            <br></br>
            <br></br>
            In terms of my technical interests, I am interested in full stack
            development(preferably MERN Stack). Since my 1st year i have taken
            part in several hackathons and also won good cash prizes and cool
            swags. I have also made few projects in <strong>MERN Stack</strong>.
            <br></br>
            <br></br>
            In terms of my coding skills, i am confident in C and C++ languages
            and also i have done more than 600 questions in Data Structures and
            Algorithms in various platforms like Leetcode,GeeksForGeeks.
            <br></br>
            <a
              href="https://drive.google.com/file/d/19zEAZbpgNr5QhjMKNoGWnexPxvcFqZWv/view?usp=sharing"
              target="_blank"
              className="link"
            >
              <strong>
                <u>Resume Link</u>
              </strong>
            </a>
          </p>
        </div>
      </div>

      <div className="div-bottom">{des.div[0].end}</div>
      <div className="container-bottomcode">{des.data[1].end}</div>
    </div>
  );
}

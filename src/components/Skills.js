import React from "react";
import "./allcss/skills.css";
import * as des from "./data";
import Ccod, {
  Ccpp,
  Cfire,
  Chtml,
  Ccss,
  Cjs,
  Cnode,
  Creact,
  Cgithub,
} from "./skillanimation";

export default function Skills() {
  return (
    <div className="container page1" id="skills">
      <div className="container-top"></div>
      <div className="container-topcode">{des.data[2].start}</div>
      <div className="div-top">{des.div[0].start}</div>

      <div className="container-middle">
        <div className="content">
          <h1 className="heading">Skills</h1>
          <p className="description">
            I have learned to code in{" "}
            <strong>C, C++, database management</strong> with{" "}
            <strong>MySQL</strong>. I possess strong knowledge in{" "}
            <strong>Data Structures, Algorithms</strong> and{" "}
            <strong>OOP principles.</strong>
            <br></br>
            <br></br>I have also knowledge of{" "}
            <strong>
              HTML, CSS, JavaScript, React JS, Node JS, MongoDB ,Express JS
            </strong>{" "}
            and i have experience in working with{" "}
            <strong>Git and Github</strong> also. I have also made few projects
            in <strong>MERN Stack</strong>.
          </p>
        </div>
        <div className="icons-div">
          <Ccod />
          <Ccpp />
          <Cfire />
          <Chtml />
          <Ccss />
          <Cjs />
          <Cnode />
          <Creact />
          <Cgithub />
        </div>
      </div>

      <div className="div-bottom">{des.div[0].end}</div>
      <div className="container-bottomcode">{des.data[2].end}</div>
    </div>
  );
}

import React from "react";
import "./allcss/project.css";
import * as des from "./data";

export default function Projects() {
  return (
    <div className="container project-page" id="projects">
      <div className="container-top"></div>
      <div className="container-topcode">{des.data[3].start}</div>
      <div className="div-top">{des.div[0].start}</div>

      <div className="project-middle">
        <div className="devmain">
          <div className="contamain">
            <h1 className="heading">eHub</h1>
            <p className="description">
              Web Application for movies and webseries(using IMDB API)
              <br></br>
              <br></br>
              Designed to present all the trending movies and series accros{" "}
              <strong>all OTT platforms</strong> along with{" "}
              <strong>browsing,pagination,watch trailer</strong>(using{" "}
              <strong>youtube API</strong>),all series releated information like{" "}
              <strong>rating, zonres</strong> etc in a single platform in a well
              designed manner.
              <br></br>
              <br></br>
              <strong className="hover1">Tech Stack :</strong> HTML, CSS,
              JavaScript,React JS,WEB API,Material UI
              <br></br>
              <br></br>
              <a
                className="link"
                href="https://github.com/anurag70/eHub"
                target="_blank"
              >
                <u>Project-Link</u>
              </a>
            </p>
          </div>
          <div className="device">
            <div className="phone border">
              <div className="phonetop">
                <hr className="hr"></hr>
              </div>
              <div className="phonemid">
                <img src="./img/Front.png" className="phonemid" alt="phone" />
              </div>
              <div className="phonebottom">
                <div className="circle"></div>
              </div>
            </div>

            <div className="laptop ">
              <div className="lapupper border">
                <div className="lapmid">
                  <img src="./img/laptop.png" className="lapmid" alt="laptop" />
                </div>
                <div className="lapbottom">
                  <img
                    src="./img/apple.png"
                    className="lapicon"
                    alt="appleicon"
                  />
                </div>
              </div>
              <div className="laplower">
                <div className="lup"></div>
                <div className="ldo"></div>
              </div>
            </div>

            <div className="tablet border">
              <div className="tabtop">
                <hr className="hr"></hr>
              </div>
              <div className="tabmid">
                <img src="./img/tab.png" className="tabmid" alt="tab" />
              </div>
              <div className="tabbottom"></div>
            </div>
          </div>
        </div>

        <div className="devmain">
          <div className="contamain">
            <h1 className="heading">Memories ’n Motion</h1>
            <p className="description">
              Web platform to <strong>store the memories</strong> of any
              place(kind of a blog website)
              <br></br>
              <br></br>
              Design to <strong>add new memories post</strong> with several
              front-end elements, like User Authentication and CRUD operations{" "}
              <strong>
                (add places, date, creator, like, edit and delete the post)
              </strong>
              that interact with the backend.
              <br></br>
              <br></br>
              <strong className="hover1">Tech Stack:</strong>{" "}
              HTML,CSS,JavaScrit,MongoDB,Express JS,React JS,Node JS,Material UI
              <br></br>
              <a
                className="link"
                href="https://github.com/anurag70/memories"
                target="_blank"
              >
                <u>Project Link</u>
              </a>
            </p>
          </div>
          <div className="img">
            <img src="./img/ott.png" className="img1 portimg" alt="portfolio" />
          </div>
        </div>
      </div>

      <div className="div-bottom">{des.div[0].end}</div>
      <div className="container-bottomcode">{des.data[3].end}</div>
    </div>
  );
}

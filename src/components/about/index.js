import React from "react";
import "./style.css";
import aboutData from "../../data/aboutData.json";
import Aboutcards from "../AboutCards/Aboutcards";

export const AboutSection = () => {
  return (
    <div>
      {" "}
      <div className="about">
        <div className="heading">
          <h3>About Us</h3>
        </div>
        <p className="explore_para">Allow us to tell you a short story...</p>

        <div className="aboutCards_">
          <div className="aboutSec_child">
            {aboutData[0].map((elm, index) => {
              return (
                <>
                  <Aboutcards
                    name={elm.name}
                    para={elm.para}
                    img={elm.img}
                    index={elm.index}
                  />
                </>
              );
            })}
          </div>

          <div className="aboutSec_child">
            {aboutData[1].map((elm, index) => {
              return (
                <>
                  <Aboutcards
                    name={elm.name}
                    para={elm.para}
                    img={elm.img}
                    index={elm.index}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

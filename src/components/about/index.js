import React from "react";
import "./style.css";

export const AboutSection = () => {
  return (
    <div className="about" id="about">
      <div className="subHeading_box">
        <div className="heading">
          <h3>About Us</h3>
        </div>
        <p className="explore_para">Allow us to tell you a short story...</p>
      </div>

      <div className="aboutCards_">
        <div className="left flexClass">
          <div className="aboutCard">
            <img src="./assets/aboutImg1.svg" alt="aboutImg" className="about_img1" />

            <div className="about_blur">
              <div className="about_para_">
                <h4 className="about_head">Chapter I</h4>
                <p className="about_paargarph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididun
                </p>
              </div>
            </div>
          </div>
          <div className="aboutCard">
            <img src="./assets/aboutImg3.svg" alt="aboutImg" className="about_img" />

            <div className="about_blur2">
              <div className="about_para_">
                <h4 className="about_head">Chapter III</h4>
                <p  className="about_paargarph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididun
                </p>
              </div>
            </div>
          </div>
        </div>



        <div className="right flexClass">
        <div className="aboutCard">
          <img src="./assets/aboutImg2.svg" alt="aboutImg" className="about_img" />

          <div className="about_blur3">
            <div className="about_para_">
              <h4 className="about_head">Chapter II</h4>
              <p  className="about_paargarph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididun
              </p>
            </div>
          </div>
        </div>
        <div className="aboutCard">
          <img src="./assets/aboutImg4.svg" alt="aboutImg" className="about_img" />

          <div className="about_blur4">
            <div className="about_para_">
              <h4 className="about_head">Chapter IV</h4>
              <p  className="about_paargarph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididun
              </p>
            </div>
          </div>
        </div>
        </div>
   
      </div>
    </div>
  );
};

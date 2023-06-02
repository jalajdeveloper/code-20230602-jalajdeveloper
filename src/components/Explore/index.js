import React from "react";
import "./style.css";

export const ExploreSection = () => {
  return (
    <div className="explore">
      <div className="subHeading_box">
        <div className="heading">
          <h3>Explore</h3>
        </div>

        <p className="explore_para">
          From one-guest rooms to <br /> penthouses with pools and gardens
        </p>
      </div>

      <div className="explore_boxes">
        <div className="explore_box">
          <div>
          <img src="./assets/exploreImg1.svg" alt="" className="exploreBlur" />
          </div>
          

          <div className="explore_blur">
            <div className="exp_para">
              <p>Room with one king-size bed</p>
            </div>

            <div className="explore_btn_flex">
              <div className="explore_buttons">
                <button className="explore_btn">35$</button>
                <button className="explore_btn">28м²</button>
              </div>

              <button className="explore_btn_book">Book!</button>
            </div>
          </div>
        </div>

        <div className="explore_box">
          <div>
          <img src="./assets/exploreImg2.svg" className="exploreBlur" />
          </div>
        

          <div className="explore_blur">
            <div className="exp_para">
            <p>Room with one king-size bed</p>
            </div>

            <div className="explore_btn_flex">
              <div className="explore_buttons">
              <button className="explore_btn">35$</button>
                <button className="explore_btn">28м²</button>
              </div>

              <button className="explore_btn_book">Book!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

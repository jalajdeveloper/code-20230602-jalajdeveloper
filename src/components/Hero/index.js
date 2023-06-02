import "./style.css";
import InputSec from "../InputSec";
import Header from "../Header";
import React from "react";

function Hero() {
  return (
    <div className="hero_sec">
      <div className="herSec_bg">
        <Header />

        <h2 className="heroSec_Text">
          Rethink your <br /> living & renting
        </h2>

        <div className="heroSec_Para">
          <p>Make your stay painless with us</p>
        </div>

        <div className="heroSec_calender container">
          <InputSec label="CITY" name="Select your City" />
          <InputSec label="DATES" name="Select your Dates" />
          <InputSec label="GUESTS" name="Add guest" />

          <button className="heroSec_btn">
            <img
              src="./assets/search_icon.svg"
              alt="search"
              className="heroSearch_icon"
              width="20px"
            />
            Search
          </button>
        </div>
        <div className="downImg_arrow">
          <img src="./assets/downArrow.svg" alt="arrow" className="arroW_Img" />
        </div>

        <div className="heroSec_vector">
          <img src="./assets/herosec_vector.svg" width="100%" alt="vector" />
        </div>
      </div>
    </div>
  );
}

export default Hero;

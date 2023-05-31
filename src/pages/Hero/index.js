import React from "react";
import "./style.css";
import Header from "../../components/Header/index";
import InputSec from "../../components/InputSec/index";

function index() {
  return (
    <>
      <div className="hero_sec">
        <div className="herSec_bg">
          <Header />
          <div className="heroSec_Text">
            <h2>
              Rethink your <br /> living & renting
            </h2>
          </div>

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
          <img src="./assets/downArrow.svg" alt="arrow"/>

          <div className="heroSec_vector">
            <img src="./assets/herosec_vector.svg" width="100%" />
          </div>
        </div>
        
      </div>
    </>
  );
}

export default index;

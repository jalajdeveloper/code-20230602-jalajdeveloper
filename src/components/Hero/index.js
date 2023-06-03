import "./style.css";
import Header from "../Header";

import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function Hero() {
  const [startDate, setStartDate] = useState(null);
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
          <div className="heroSec_input">
            <label className="heroSec_lable">Select your City</label>
            <input type="text" placeholder="Select your City" className="inputSec" role='inputField' />
          </div>
          <div className="heroSec_input">
            <label className="heroSec_lable">DATES</label>
            <div className="date_picker">
          <DatePicker editable={false} placeholderText="Select your dates" className="date_picker" selected={startDate} onChange={(date) => setStartDate(date)} />
        </div>
          </div>
          <div className="heroSec_input">
            <label className="heroSec_lable">GUESTS</label>
            <input type="text" placeholder="Add guest" className="inputSec" role='inputField' />
          </div>
       

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

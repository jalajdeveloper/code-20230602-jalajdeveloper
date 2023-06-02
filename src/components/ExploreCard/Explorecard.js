import React from "react";
import "./explorecard.css";

function Explorecard({ name, price, categigories, book, img }) {
  return (
    <div className="explore_box">
      <img src={img} alt={name} className="exploreBlur" />

      <div className="explore_blur">
        <div className="exp_para">
          <p>{name}</p>
        </div>

        <div className="explore_btn_flex">
          <div className="explore_buttons">
            <button className="explore_btn">{price}</button>
            <button className="explore_btn">{categigories}</button>
          </div>

          <button className="explore_btn_book">{book}</button>
        </div>
      </div>
    </div>
  );
}

export default Explorecard;

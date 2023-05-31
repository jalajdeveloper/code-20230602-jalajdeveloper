import React from "react";
import "./aboutcard.css"

function Aboutcards({ name, para, img }) {
  return (
    <div className="aboutCard">
      <img src={img} alt={name} />

      <div className="about_blur">
        <div className="about_para_">
          <h4 className="about_head">{name}</h4>
          <p>{para}</p>
        </div>
      </div>
    </div>
  );
}

export default Aboutcards;

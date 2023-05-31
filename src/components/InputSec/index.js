import React from "react";
import "./style.css"

function index({label, name}) {
  return (
    <div className="heroSec_input">
      <label className="heroSec_lable">{label}</label>
      <input type="text" placeholder={name} className="inputSec"  />
    </div>
  )
}

export default index;

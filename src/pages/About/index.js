import React from "react";
import "./style.css";
import aboutData from "../../aboutData.json"
import Aboutcards from "../../components/AboutCards/Aboutcards";

function index() {
  return (
    <div className="about">
      <div className="heading">
        <h3>About Us</h3>
      </div>
      <p className="explore_para">Allow us to tell you a short story...</p>


<div className="aboutCards_">
{
        aboutData.map((elm, index)=>{
          return (
            <>
            <Aboutcards name={elm.name} para={elm.para} img={elm.img} index={elm.index}/>
            </>
          )
        })
      }
</div>
      
    </div>
  );
}

export default index;

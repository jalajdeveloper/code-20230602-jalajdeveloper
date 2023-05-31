import React from "react";
import "./style.css";
import data from "../../data.json";
import Explorecard from "../../components/ExploreCard/Explorecard";

function index() {
  return (
    <div className="explore">
      <div className="heading">
        <h3>Explore</h3>
      </div>

      <p className="explore_para">
        From one-guest rooms to <br /> penthouses with pools and gardens
      </p>

      <div className="explore_boxes">
        {data.map((elm, index) => {
          return (
            <>
              <Explorecard name={elm.name} price={elm.price} categigories={elm.categigories} book={elm.book} index={index} img={elm.img}/>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default index;

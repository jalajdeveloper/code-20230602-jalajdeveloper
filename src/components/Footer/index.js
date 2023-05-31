import React from "react";
import "./style.css";

function index() {
  return (
    <div className="footer_sec ">
      <div className="footer_logo ">
        <h1>Your logo</h1>

        <div>
          <p>© 2021 Company Name <br/> All rights reserved</p>
        </div>
      </div>

      <nav className="footer_nav_list">
        <ul className="footer_unorder_list">
          <li className="footer_list">Explore</li>
          <li className="footer_list">About us </li>
          <li className="footer_list">Cities</li>

          <button className="footer_btn">Call</button>
        </ul>
      </nav>
    </div>
  );
}

export default index;

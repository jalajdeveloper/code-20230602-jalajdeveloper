import React from "react";
import "./style.css";
import { MdKeyboardArrowDown } from "react-icons/md";

function index() {
  return (
    <div className="header_sec ">
      <div className="header_logo " >
        <h1>Your logo</h1>
      </div>

      <nav className="header_nav_list">
        <ul className="header_unorder_list">
          <li className="header_list">Explore</li>
          <li className="header_list">About us </li>
          <li className="header_list">
            Cities <MdKeyboardArrowDown />
          </li>

          <button className="header_btn">Call</button>
        </ul>
      </nav>
    </div>
  );
}

export default index;

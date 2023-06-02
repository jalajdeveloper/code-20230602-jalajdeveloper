import React from "react";
import "./style.css";
import {Link} from "react-router-dom";

function Footer() {
  return (
    <footer className="footer_sec ">
      <div className="footer_logo ">
        <h1 className="fotterHead">Your logo</h1>

        <div className="footer_log">
          <p>
            © 2021 Company Name <br /> All rights reserved
          </p>
        </div>
      </div>

      <nav className="footer_nav_list">
        <ul className="footer_unorder_list">
          <Link to={"/explore"}>
            <li className="header_list_">Explore</li>
          </Link>
          <Link to={"/about"}>
            <li className="header_list_">About us </li>
          </Link>
          <li className="footer_list_">Cities</li>

          <button className="footer_btn">Call</button>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;

import React, { useState } from "react";
import "./style.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

function Header() {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="header_sec ">
      <div className="header_logo ">
        <Link to={"/"}>
          {" "}
          <h1>Your logo</h1>
        </Link>
      </div>

      <nav className="header_nav_list">
        <ul className="header_unorder_list">
          <Link to={"/explore"}>
            <li className="header_list">Explore</li>
          </Link>
          <Link to={"/about"}>
            <li className="header_list">About us </li>
          </Link>
          <li className="header_list">
            Cities <MdKeyboardArrowDown />
          </li>

          <button className="header_btn">Call</button>
        </ul>
      </nav>

      <div className="menuBar">
        {
          <div className="menu_icons" onClick={() => setToggle(!toggle)}>
            {toggle ? (
              <AiOutlineMenu className="bars" role='bars'/>
            ) : (
              <RxCross2 className="cross" role='cross' />
            )}
          </div>
        }
      </div>

      {!toggle && (
        <div className="togleDiv">
          <nav className="header_nav_list_">
            <div className="close_hamburger">
              <RxCross2
                className="cross_btn"
                onClick={() => setToggle(!false)}
                role = 'rxcross'

              />
            </div>

            <ul className="header_unorder_list">
              <Link to={"/explore"}>
                <li className="header_list">Explore</li>
              </Link>
              <Link to={"/about"}>
                <li className="header_list">About us </li>
              </Link>
              <li className="header_list">
                Cities <MdKeyboardArrowDown />
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}

export default Header;

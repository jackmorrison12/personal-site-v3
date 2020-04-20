import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import data from "../../data/navigation.json";


export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      {!navOpen && (
        <button className="hamburgerBtn">
            <FontAwesomeIcon
                icon={faBars}
                size="2x"
                onClick={() => setNavOpen(!navOpen)}
            />
            </button>
      )}

      {navOpen && (
        <button id="closeBtn" className="closeBtn">
          <FontAwesomeIcon
            icon={faTimes}
            size="2x"
            onClick={() => setNavOpen(!navOpen)}
          />
        </button>
      )}
      <nav className={"nav" + (navOpen ? " open" : "")} id="navbar">
        <div className="nav-brand">
          {/* <Img
            fixed={data.file.childImageSharp.fixed}
            alt="Jack Morrison headshot"
            className="nav-brand-img"
          /> */}
          <NavLink to="/" className="nav-brand-link">
            Jack Morrison
          </NavLink>
        </div>

        <ul className={"nav-items" + (navOpen ? "" : " hidden-sm")}>
            {
                data.map(item => {
                return (
                    <a><NavLink exact to={item.link} activeClassName="active_nav" onClick={() => {if (navOpen) setNavOpen(!navOpen)}} >{item.name} </NavLink></a>
                );
                }) 
            }
        </ul>
        <div className="footer">
          <p>Footer</p>
        </div>
      </nav>
    </>
  );
}
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import data from "../../data/navigation.json";
import socials from "../../data/socials.json"

import avatar from "../../assets/images/avatar.jpg";

import TextLoop from "react-text-loop";
import titles from "../../data/titles.json"



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
          <img src={avatar}
            alt="Jack Morrison headshot"
            className="nav-brand-img"
          />
          <NavLink to="/" className="nav-brand-link" onClick={() => {if (navOpen) setNavOpen(!navOpen)}}>
            JACK MORRISON
          </NavLink>
          <TextLoop>
              {
                  titles.map(title => {
                      return (
                          <div className="nav-titles">{title}</div>
                      );
                  })
              }
          </TextLoop>
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
          <div className="nav-socials">
            {
                socials.map(item => {
                return item.home ? (<a href={item.url} class="nav-icon"><i class={`fab fa-${item.icon} fa-3x`}></i></a>) : null;  
                
                }) 
            }
          </div>
        </div>
      </nav>
    </>
  );
}
import React, { Fragment } from "react";
import "../styles/home.scss";

import data from "../data/socials.json";

import TextLoop from "react-text-loop";

import titles from "../data/titles.json";

const Home = (props) => {
  return (
    <Fragment>
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <div className={"hero"}>
        <h1>Hello, I'm Jack</h1>
        <div className="home-subheading show-desktop-only">
          <p>I'm a Software Engineer from London, UK. </p>
          <p>I'm currently studying Computing at Imperial College London. </p>
          <p>Look around here to get to know a bit more about me!</p>
          <p>
            PLEASE NOTE: This is an archived version of
            <a href="https://jackmorrison.xyz">jackmorrison.xyz</a>
          </p>
        </div>
        <div className="show-mobile-only">
          <div class="loop">
            <TextLoop>
              {titles.map((title) => {
                return <div className="home-titles">{title}</div>;
              })}
            </TextLoop>
          </div>
          <span class="icons">
            {data.map((item) => {
              return item.home ? (
                <a href={item.url} class="icon">
                  <i class={`fab fa-${item.icon} fa-3x`}></i>
                </a>
              ) : null;
            })}
          </span>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;

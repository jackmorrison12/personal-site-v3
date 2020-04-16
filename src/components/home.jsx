import React, { Fragment } from "react";
import "../styles/index.scss"

import styled from "styled-components";


import data from "../data/socials.json";

import TextLoop from "react-text-loop";

const Text = styled.div`
  width: 100vw;
  text-align: center;
`;

export default function Home() {
    return(
        <Fragment>
            <div id="stars" />
            <div id="stars2" />
            <div id="stars3" />
            <div className="top-container flex">
                <h1>
                    Hello, I'm Jack
                </h1>
                <div class="loop">
                    <TextLoop>
                        <Text>Software Engineer</Text>
                        <Text>Imperial Student</Text>
                        <Text>Full Stack Developer</Text>
                        <Text>Problem Solver</Text>
                        <Text>Musician</Text>
                        <Text>Skydiver</Text>
                    </TextLoop>
                </div>
                <span class="icons">

                {
                  data.map(item => {
                    return item.home ? (<a href={item.url}><i class={`fab fa-${item.icon} fa-3x`}></i></a>) : null;  
                    
                  }) 
                }

                </span>
                
            </div>
        </Fragment>
    );
}
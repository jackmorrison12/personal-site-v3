import React, { Fragment } from "react";
import "../styles/index.scss"

import data from "../data/socials.json";

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
                I'm a Software Engineer
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
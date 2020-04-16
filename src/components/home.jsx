import React, { Fragment } from "react";
import "../styles/index.scss"

export default function Home() {
    return(
        <Fragment>
            <div id="stars" />
            <div id="stars2" />
            <div id="stars3" />
            <div className="top-container flex">
                <h1>
                    Hello <span role="img" aria-label="wave">👋</span> I'm Jack
                </h1>
                
            </div>
        </Fragment>
    );
}
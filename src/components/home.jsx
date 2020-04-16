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
                    Hello, I'm Jack
                </h1>
                I'm a Software Engineer
                <span class="icons">
                    <a href="https://github.com/jackmorrison12"><i class="fab fa-github fa-3x"></i></a>
                    <a href="https://gitlab.doc.ic.ac.uk/jsm1317"><i class="fab fa-gitlab fa-3x"></i></a>
                    <a href="https://twitter.com/jsm_ic"><i class="fab fa-twitter fa-3x"></i></a>
                    <a href="https://www.linkedin.com/in/jackmorrison12/"><i class="fab fa-linkedin-in fa-3x"></i></a>
                </span>
                
            </div>
        </Fragment>
    );
}
import React, { Fragment } from "react";

import cv from "../assets/files/jack-cv.pdf"

export default function CV() {
    return(
        <Fragment>
            <div style={{  display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "100vh"}}>
                <i class="fas fa-tools" style={{fontSize:"60px"}}></i>
                <h1 style={{textAlign:"center", padding:"20px"}}>This page is currently under construction. <br />You can download a copy of my CV below:</h1>
                <a href = {cv} target = "_blank" style={{border:"none"}}>
                    <button className="projects-button">
                        Download my CV
                    </button>
                </a>
            </div>
        </Fragment>
    );
}
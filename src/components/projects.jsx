import React, { Fragment } from "react";

import projects from "../data/projects.json";

import Fade from 'react-reveal/Fade';

export default function Projects() {
    return(
        <Fragment>
            {/* <div class="sidenav">

                {
                    projects.map((project) => {
                        return(
                            <div>
                                <a href="#">{project.name}</a>
                                <div class="box-badge-matrix">
                                    <div class="box-badge-wrapper">
                                        <div class="box-badge">
                                            {project.type}
                                        </div>
                                    </div>
                                </div>
                                {
                                    project.sources ? project.sources.map((source) => {
                                        return(
                                            <a href={source.url} class="proj-icon"><i class={`fab fa-${source.name} fa-3x`}></i></a>
                                        );
                                    }) : ""
                                }
                                
                            </div>
                        );
                    })
                }

            </div>
        <div class="content">
        </div> */}
        </Fragment>
    );
}
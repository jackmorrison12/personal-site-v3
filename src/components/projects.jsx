import React, { Fragment } from "react";

import projects from "../data/projects.json";

import Fade from 'react-reveal/Fade';

import Project from "./sub-components/project";

export default function Projects() {
    return(
        <Fragment>
            <div class="projects">
                {
                    projects.map((project) => {
                        return (
                            <Project data={project} />
                        );
                    })
                }
            </div>
        </Fragment>
    );
}
import React, { Fragment } from "react";

import projects from "../data/projects.json";

export default function Projects() {
    return(
        <Fragment>
        <div class="sidenav">

            {
                projects.map((project) => {
                    return(
                        <a href="#">{project.name}</a>
                    );
                })
            }

        </div>

        <div class="content">
        </div>
        </Fragment>
    );
}
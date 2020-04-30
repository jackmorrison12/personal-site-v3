import React, { Fragment, Component } from "react";

import projects from "../data/projects.json";

// import Fade from 'react-reveal/Fade';

import Project from "./sub-components/project";

class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = {
          showAllProj: false
        };
      }

      render() {
        return(
            <Fragment>
                <h1 class="title">Projects</h1>
                <div class="projects">
                    {
                        projects.map((project) => {
                            return (
                                <div className={(project.hidden && !this.state.showAllProj ? "hidden" : "project")}>
                                    <Project data={project} />
                                </div>
                            );
                        })
                    }
                </div>
                <button className="projects-button" onClick={() => this.setState({showAllProj : !this.state.showAllProj})}>{this.state.showAllProj ? "Close project archive" : "Open project archive"}</button>
            </Fragment>
        );
      }

}

export default Projects
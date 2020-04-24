import React, { Fragment, Component } from "react";

import projects from "../data/projects.json";

import Fade from 'react-reveal/Fade';

import Project from "./sub-components/project";
import { render } from "@testing-library/react";

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
                <button className="projects-button" onClick={() => this.setState({showAllProj : !this.state.showAllProj})}>{this.state.showAllProj ? "Show Fewer Projects" : "Load More Projects"}</button>
            </Fragment>
        );
      }

}

export default Projects
import React, { Fragment, Component, useState } from "react";

import Fade from 'react-reveal/Fade';

class Project extends Component {

    constructor(props) {
        super(props);
        this.state = {
          projOpen: false
        };
      }

    render() {
        return(
            <Fragment>    
                <div class= {"project " + (this.state.projOpen ? "project-large" : "project-small")} onClick={() => this.setState({projOpen : !this.state.projOpen})}>
                    <div className="project-content">
                        <div class="project-badge-matrix">
                            { this.props.data.tech ?
                                                this.props.data.tech.map(tech => {
                                                    return (
                                                        <div class="box-badge-wrapper">
                                                            <div class="box-badge">
                                                                {tech}
                                                            </div>
                                                        </div>
                                                    );
                                                }) 
                                                : ""
                                            }
                        </div>
                        <h1 className="project-header">{this.props.data.name}</h1>
                        <h2 className="project-subheader">{this.props.data.dates}</h2>
                        <p className="project-short-desc">{this.props.data.short_desc}</p>
                        <div className={this.state.projOpen ? "project-expanded" : "project-collapsed"} >
                            <p>{this.props.data.long_desc}</p>
                        </div>
                    </div>
                </div>         
            </Fragment>
        );
    }
}

export default Project

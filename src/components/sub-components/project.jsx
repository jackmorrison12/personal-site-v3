import React, { Fragment, Component, useState } from "react";

import Navbar from "./navbar";

import Fade from 'react-reveal/Fade';

class Project extends Component {

    constructor(props) {
        super(props);
        this.state = {
          showAllProj: false
        };
      }

    render() {
        return(
            <Fragment>
                <div className="project-content">
                    <div class="project-image-container">
                        <div class="project-img-zoom">
                            <img src={require(`../../assets/images/project-headers/${this.props.data.url}.jpg`)} alt={this.props.data.name + " Header Image"} className="project-image"/>
                        </div>
                        <div className="project-header-container">
                        <div className="project-badge-matrix">
                            { this.props.data.tech ?
                                                this.props.data.tech.map(tech => {
                                                    return (
                                                        <div className="box-badge-wrapper">
                                                            <div className="box-badge">
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
                    </div>
                        <p className="project-short-desc">{this.props.data.short_desc}</p>
                    </div>
                    {/* <p className="project-long-desc">                     
                    {
                        this.props.data.long_desc.split('\n').map((item, i) => {
                            return <p key={1}>{item}</p>;
                        })
                    }
                    </p> */}
                </div>
            </Fragment>
        );
    }
}

export default Project

import React, { Fragment, Component } from "react";
import {NavLink} from "react-router-dom";

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
                <NavLink exact to={"/projects/" + (this.props.data.url)}> 
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
                            
                                <p className="project-short-desc">{this.props.data.short_desc}</p>
                            </div>
                        </div>
                        {/* <p className="project-long-desc">                     
                        {
                            this.props.data.long_desc.split('\n').map((item, i) => {
                                return <p key={1}>{item}</p>;
                            })
                        }
                        </p> */}
                    </div>
                </NavLink>
            </Fragment>
        );
    }
}

export default Project

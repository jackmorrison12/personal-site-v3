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
                <div class="project" onClick={() => this.setState({projOpen : !this.state.projOpen})}>
                    <h1>{this.props.data.name}</h1>
                    <h2>{this.props.data.type}</h2>
                    <h3>{this.props.data.dates}</h3>
                    <p>{this.props.data.short_desc}</p>
                    <div className={this.state.projOpen ? "project-expanded" : "project-collapsed"} >
                        <p>{this.props.data.long_desc}</p>
                    </div>
                </div>         
            </Fragment>
        );
    }
}

export default Project

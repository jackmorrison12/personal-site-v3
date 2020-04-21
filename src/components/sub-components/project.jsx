import React, { Fragment, Component } from "react";

import Fade from 'react-reveal/Fade';

class Project extends Component {
    render() {
        return(
            <Fragment>    
                <div class="project">
                    <h1>{this.props.data.name}</h1>
                    <h2>{this.props.data.type}</h2>
                    <h3>{this.props.data.dates}</h3>
                    <p>{this.props.data.long_desc}</p>
                </div>         
            </Fragment>
        );
    }
}

export default Project

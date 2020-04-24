import React, { Fragment, Component } from "react";

class ProjectPage extends Component  {

    render () {
        return(
            <Fragment>
                <h1>{this.props.data.name}</h1>
            </Fragment>
        );
    }

}

export default ProjectPage;
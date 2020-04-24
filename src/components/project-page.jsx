import React, { Fragment, Component } from "react";
import YouTube from 'react-youtube';


class ProjectPage extends Component  {

    render () {
        return(
            <Fragment>
                <div className="project-page-content">
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
                    <div className="project-page-layout">
                        <div class="project-page-text-container">
                            {this.props.data.sources ?
                                <div class="project-page-links">
                                    {
                                        this.props.data.sources.map((source, i) => {
                                            return <a class="project-page-icon" href={source.url}><i class={`fab fa-${source.name} fa-3x`}></i></a>;
                                        })
                                    }
                                </div>
                            : ""}
                            <p className="project-page-long-desc">                     
                                {
                                    this.props.data.long_desc.split('\n').map((item, i) => {
                                        return <p key={1}>{item}</p>;
                                    })
                                }
                            </p>
                        </div>
                        <div className="project-page-image-container">
                            {
                                this.props.data.pictures ?
                                    this.props.data.pictures.map((pic, i) => {
                                        return (                            
                                            <img className="project-page-image" src={require(`../assets/images/projects/${pic}`)} alt={this.props.data.name + " Image " + i}/>
                                        );
                                    })
                                : ""
                            }
                            {
                                this.props.data.videos ?
                                this.props.data.videos.map((vid, i) => {
                                    return (                            
                                        <YouTube className="project-page-video"  videoId={vid.id}  />
                                    );
                                })
                            : ""  
                            }
                        </div>
                    </div>           
                </div>

            </Fragment>
        );
    }

}

export default ProjectPage;
import React, { Fragment, Component } from "react";
import YouTube from 'react-youtube';
import ReactAudioPlayer from 'react-audio-player';
import ProjectTable from "./sub-components/project-table";


class ProjectPage extends Component  {

    render () {
        return(
            <Fragment>
                {/* Move title etc. to right? */}
                {/* <h1 className="title">{this.props.data.name}</h1> */}
                <div className="project-page-content">
                    <div className="project-badge-matrix">
                        { this.props.data.tech ?
                            this.props.data.tech.map(tech => {
                                return (
                                    <div className="box-badge-wrapper">
                                        <div className="project-page-badge">
                                            {tech}
                                        </div>
                                    </div>
                                );
                            }) 
                            : ""
                        }
                    </div>
                    <h1 className="project-page-header">{this.props.data.name}</h1>
                    <h2 className="project-page-subheader">{this.props.data.dates}</h2>
                    <p className="project-page-short-desc">{this.props.data.short_desc}</p>     
                    <div className="project-page-layout">
                        <div class="project-page-text-container">
                            {this.props.data.sources ?
                                <div class="project-page-links">
                                    {
                                        this.props.data.sources.map((source, i) => {
                                            {
                                               return  source.name === "devpost" ? 
                                                    <a class="project-page-icon" href={source.url}><img src={require(`../assets/images/devpost.png`)} alt="Devpost Logo" /></a>
                                               : 
                                                    <a class="project-page-icon" href={source.url}><i class={`${source.name} fa-3x`}></i></a>
                                            }
                                        })
                                    }
                                </div>
                            : ""}
                            <p className="project-page-long-desc">                     
                                {
                                    this.props.data.long_desc.split('\n').map((item, i) => {
                                        return <p key={1} className="project-page-paragraph">{item}</p>;
                                    })
                                }
                            </p>
                        </div>
                        {this.props.data.pictures || this.props.data.videos || this.props.data.music ? 
                            <div className="project-page-media-container">
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
                                {
                                    this.props.data.music ?
                                    this.props.data.music.map((vid, i) => {
                                        return (  
                                            <div className="project-page-song">         
                                                <h2>{vid.name}</h2>                 
                                                <ReactAudioPlayer
                                                    src={vid.filename}
                                                    className="project-page-audio-player"
                                                    controls
                                                    />
                                            </div>
                                        );
                                    })
                                : ""  
                                }
                            </div>
                            :
                            "" 
                        }

                        {this.props.data.python ? <ProjectTable data = {this.props.data} /> : "" }
                    </div>           
                </div>

            </Fragment>
        );
    }

}

export default ProjectPage;
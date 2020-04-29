import React, { Fragment, Component } from "react";
import YouTube from 'react-youtube';
import ReactAudioPlayer from 'react-audio-player';


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
                                        <div className="box-badge">
                                            {tech}
                                        </div>
                                    </div>
                                );
                            }) 
                            : ""
                        }
                    </div>
                    <h1 className="project-page-header">{this.props.data.name}</h1>
                    <h2 className="project-subheader">{this.props.data.dates}</h2>
                    <p className="project-short-desc">{this.props.data.short_desc}</p>     
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

                        {this.props.data.python ? 
                            <div className="project-page-table">
                                <table class="project-page-table-desktop">
                                    <tr>
                                        <th>Week</th>
                                        <th>Teacher Slides</th>
                                        <th>Student Slides</th>
                                        <th>Worksheet</th>
                                        <th>Worksheet Answers</th>
                                        <th>Jupyter Notebook</th>
                                        <th>Leaderboard</th>
                                        <th>Kahoot</th>
                                        <th>GitHub</th>
                                    </tr>
                                    {this.props.data.python.map((item, i) => {
                                        return(
                                            <tr>
                                                <td className="project-page-table-header">{item.name}</td>
                                                <td><a href ={item.teacher_slides}>Teacher Slides {i+1}</a></td>
                                                <td><a href ={item.student_slides}>Student Slides {i+1}</a></td>
                                                <td><a href ={item.worksheet}>Worksheet {i+1}</a></td>
                                                <td><a href ={item.answers}>Worksheet Answers {i+1}</a></td>
                                                {item.notebook ? <td><a href ={item.notebook}>Jupyter Notebook {i+1}</a></td> : <td class="project-page-table-empty"></td>}
                                                {item.leaderboard ? <td><a href ={item.leaderboard}>Leaderboard {i+1}</a></td> : <td class="project-page-table-empty"></td>}
                                                {item.kahoot ? <td><a href ={item.kahoot}>Kahoot {i+1}</a></td> : <td class="project-page-table-empty"></td>}
                                                <td><a href ={item.github} className="icon"><i class="fa fa-github fa-2x icon-3d-10 icon-3d-dark "></i></a></td>
                                            </tr>
                                        );
                                    })}

                                </table>
                                <div class="project-page-table-mobile">
                                    {this.props.data.python.map((item, i) => {
                                        return(
                                            <>
                                                <h4>Week {i+1} - {item.name}</h4>
                                                <p><a href ={item.teacher_slides}>Teacher Slides</a></p>
                                                <p><a href ={item.student_slides}>Student Slides</a></p>
                                                <p><a href ={item.worksheet}>Worksheet</a></p>
                                                <p><a href ={item.answers}>Worksheet Answers</a></p>
                                                {item.notebook ? <><p><a href ={item.notebook}>Jupyter Notebook</a></p></> : ""}
                                                {item.leaderboard ? <><p><a href ={item.leaderboard}>Leaderboard</a></p></> : ""}
                                                {item.kahoot ? <><p><a href ={item.kahoot}>Kahoot</a></p></> : ""}
                                                <p></p><a href ={item.github} className="icon"><i class="fa fa-github fa-2x icon-3d-10 icon-3d-dark project-page-table-mobile-icon"></i></a>    
                                            </>                                   
                                            );
                                    })}

                                </div>
                            </div>
                        :
                            "" }
                    </div>           
                </div>

            </Fragment>
        );
    }

}

export default ProjectPage;
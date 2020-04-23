import React, { Fragment, Component } from "react";

import Fade from 'react-reveal/Fade';

class Box extends Component {
    render() {
        return(
            <Fragment>
                <div class="box">
                    <div class="box-left">
                        {/* <Fade left> */}
                            <div>
                                <a href={this.props.data.url} class="box-heading"><h1 class="box-heading">{this.props.data.name}</h1></a>
                                <span class="box-subheading">{this.props.data.subtitle} • </span>
                                <span class="box-date">{this.props.data.dates}</span>
                                <div class="box-badge-matrix">
                                    { this.props.data.badges ?
                                        this.props.data.badges.map(badge => {
                                            return (
                                                <div class="box-badge-wrapper">
                                                    <div class="box-badge">
                                                        {badge}
                                                    </div>
                                                </div>
                                            );
                                        }) 
                                        : ""
                                    }
                                </div>
                            </div>
                        {/* </Fade> */}
                    </div>
                    <div class="box-right">
                        {/* <Fade right> */}
                            <div>
                                <div class="box-description">
                                    {
                                        this.props.data.desc.split('\n').map((item, i) => {
                                            return <p key={1}>{item}</p>;
                                        })
                                    }
                                </div>
                                <br/>
                                {this.props.data.commendations ? 
                                    this.props.data.commendations.map(commendation => {
                                        return(
                                            <div class="box-awards">
                                                <i class="fas fa-trophy"></i> 
                                                <span> {commendation.name} - <i>{commendation.awarder}, {commendation.date}</i></span>
                                            </div>
                                        );
                                    })

                                : ""
                                }

                                {this.props.data.highlights ? 
                                    this.props.data.highlights.map(highlight => {
                                        return(
                                            <div class="box-awards">
                                                <i class="fas fa-star"></i> 
                                                <span> {highlight.name} {highlight.score ?  "-"  : ""} <i>{highlight.score}</i></span>
                                            </div>
                                        );
                                    })

                                : ""
                                }
                            </div>
                        {/* </Fade> */}
                    </div>
                    
                </div>                
            </Fragment>
        );
    }
}

export default Box

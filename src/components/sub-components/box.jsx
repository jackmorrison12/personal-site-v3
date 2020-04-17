import React, { Fragment, Component } from "react";

class Box extends Component {
    render() {
        return(
            <Fragment>
                <div class="box">
                    <div class="box-left">
                        <h1 class="box-heading">{this.props.data.name}</h1>
                        <span class="box-subheading">{this.props.data.qualification} • </span>
                        <span class="box-date">{this.props.data.dates}</span>
                        <div class="box-badge-matrix">
                            {
                                this.props.data.badges.map(badge => {
                                    return (
                                        <div class="box-badge-wrapper">
                                            <div class="box-badge">
                                                {badge}
                                            </div>
                                        </div>
                                    );
                                }) 
                            }
                        </div>
                    </div>
                    <div class="box-right">
                        <div class="box-description">
                            {this.props.data.desc}
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
                                        <span> {highlight.name} - <i>{highlight.score}</i></span>
                                    </div>
                                );
                            })

                        : ""
                        }

                    </div>
                    
                </div>
                {this.props.data.final ? "" : <div class="box-line"></div>}
                
            </Fragment>
        );
    }
}

export default Box

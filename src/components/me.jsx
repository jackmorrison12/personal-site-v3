import React, { Fragment } from "react";
import {NavLink} from "react-router-dom";

import avatar from "../assets/images/avatar.jpg";

import styled from "styled-components";

import Age from "./sub-components/age"
import {len} from "../data/visited";

import {LastFmData as LastSong} from './sub-components/lastfm/lastfm-lastsong';
import {LastFmData as TopSong} from './sub-components/lastfm/lastfm-topsong';

import {GitHubData as Commits} from './sub-components/github/github-commits';
import {GitHubData as Updated} from './sub-components/github/github-updated';
import {GitHubData as Stars} from './sub-components/github/github-stars';
import {GitHubData as Forks} from './sub-components/github/github-forks';
import {GitHubData as Watchers} from './sub-components/github/github-watchers';

import TextLoop from "react-text-loop";

import Fade from 'react-reveal/Fade';

import titles from "../data/titles.json"

export default function Me() {
    return(
        <Fragment>
            <div class="me-outer">
                <div class="me-left">
                    <Fade left>
                        <div>
                                
                            <Image src={avatar} alt="Avatar" />
                            <h1 class="me-heading">JACK MORRISON</h1>
                            <TextLoop>
                                {
                                    titles.map(title => {
                                        return (
                                            <Text>{title}</Text>
                                        );
                                    })
                                }
                            </TextLoop>

                            <h2 class="me-subheading">ABOUT ME</h2>
                            <p class="me-about">Hey, I'm Jack. I'm a Software Engineer from London, UK. I'm currently studying Computing at Imperial College London. Look around here to get to know a bit more about me!</p>

                            <p class="me-about me-footer">Site created with <i class="fas fa-heart"></i> using <i class="fab fa-react"></i></p>
                        </div>
                    </Fade>
                </div>
                <div class="me-right">
                    <Fade right><div>
                    {/* Stats */}
                    <h1 class="me-table-header">SOME STATS ABOUT ME</h1>
                    <table class="me-table">
                        <tr>
                            <td class="me-table-title">Years I've been alive</td>
                            <td class="me-table-data"><Age></Age></td>
                        </tr>
                        <tr>
                            <td class="me-table-title">Current Location</td>
                            <td class="me-table-data"><NavLink exact to="/map">London, UK</NavLink></td>
                        </tr>
                        <tr>
                            <td class="me-table-title">Cities I've visited</td>
                            <td class="me-table-data"><NavLink exact to="/map">{len}</NavLink></td>

                        </tr>
                        <tr>
                            <td class="me-table-title">Last song I listened to</td>
                            <td class="me-table-data">
                                <a href="https://www.last.fm/user/Jackmorrison12"><LastSong userName={'jackmorrison12'} apiKey={process.env.REACT_APP_LAST_FM_API_KEY}/></a>
                            </td>
                        </tr>
                        <tr>
                            <td class="me-table-title">Most listened to song of the week</td>
                            <td class="me-table-data">
                                <a href="https://www.last.fm/user/Jackmorrison12"><TopSong userName={'jackmorrison12'} apiKey={process.env.REACT_APP_LAST_FM_API_KEY}/></a>
                            </td>
                        </tr>
                    </table>     
                    <h1 class="me-table-header">SOME STATS ABOUT THE SITE</h1>
                    <table class="me-table">
                        <tr>
                            <td class="me-table-title">Number of commits</td>
                            <td class="me-table-data">
                                <a href="https://github.com/jackmorrison12/personal-website/commits/master"><Commits userName={'jackmorrison12'} /></a>
                            </td>
                        </tr>
                        <tr>
                            <td class="me-table-title">Last Updated</td>
                            <td class="me-table-data">
                                <a href="https://github.com/jackmorrison12/personal-website/commits/master"><Updated userName={'jackmorrison12'} /></a>
                            </td>
                        </tr>
                        <tr>
                            <td class="me-table-title">Number of stars</td>
                            <td class="me-table-data">
                                <a href="https://github.com/jackmorrison12/personal-website/stargazers"><Stars userName={'jackmorrison12'} /></a>
                            </td>
                        </tr>
                        <tr>
                            <td class="me-table-title">Number of forks</td>
                            <td class="me-table-data">
                                <a href="https://github.com/jackmorrison12/personal-website/network/members"><Forks userName={'jackmorrison12'} /></a>
                            </td>
                        </tr>
                        <tr>
                            <td class="me-table-title">Number of watchers</td>
                            <td class="me-table-data">
                                <a href="https://github.com/jackmorrison12/personal-website/watchers"><Watchers userName={'jackmorrison12'} /></a>
                            </td>
                        </tr>
                    </table>    
                    

                                 {/* https://api.github.com/repos/jackmorrison12/personal-website
                                 https://github.com/ziad-saab/react-github-api-project/blob/master/src/components/User.jsx */}
                    
                    </div></Fade>
                </div>
                
            </div>

              
 

        </Fragment>
    );
}

const Image = styled.img`
    border-radius: 50%;
    width: 30%;
`;

const Text = styled.div`
    padding-top:10px;
    font-size: 20px;
`;
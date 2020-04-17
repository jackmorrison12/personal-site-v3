import React, { Fragment } from "react";

import avatar from "../assets/images/avatar.jpg";

import styled from "styled-components";

import Age from "./sub-components/age"
import {LastFmData as LastSong} from './sub-components/lastfm-lastsong';
import {LastFmData as TopSong} from './sub-components/lastfm-topsong';

import TextLoop from "react-text-loop";


export default function Me() {
    return(
        <Fragment>
            <div class="me-outer">
                <div class="me-left">
                    <Image src={avatar} alt="Avatar" />
                    <h1>Jack Morrison</h1>
                    <TextLoop>
                        <span>Software Engineer</span>
                        <span>Imperial Student</span>
                        <span>Skydiver</span>
                        <span>Full Stack Developer</span>
                        <span>World Traveller</span>
                        <span>Problem Solver</span>
                        <span>Musician</span>
                    </TextLoop>

                    <h2>About Me</h2>
                    <p>Hey, I'm Jack. I'm a Software Engineer from London, UK. I'm currently studying Computing at Imperial College London. Look around here to get to know a bit more about me!</p>

                    Created with <i class="fas fa-heart"></i> using <i class="fab fa-react"></i>

                    
                    {/* Name: Jack Morrison
                    Age:  */}
                </div>
                <div class="me-right">
                    {/* Stats */}
                    <h1>Some stats about me</h1>
                    <table>
                        <tr>
                            <td>Years I've been alive</td>
                            <td><Age></Age></td>
                        </tr>
                        <tr>
                            <td>Current Location</td>
                            <td>London, UK</td>
                        </tr>
                        <tr>
                            <td>Countries I've visited</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Last song I listened to</td>
                            <td>
                                <LastSong
                                    userName={'jackmorrison12'}
                                    apiKey={process.env.REACT_APP_LAST_FM_API_KEY}
                                />
                            </td>
                            {/* https://medium.com/@samkitson/fetching-and-displaying-scrobbled-data-with-react-and-the-last-fm-api-28d048386da8 */}
                        </tr>
                        <tr>
                            <td>Most listened to song of the week</td>
                            <td>
                                <TopSong
                                    userName={'jackmorrison12'}
                                    apiKey={process.env.REACT_APP_LAST_FM_API_KEY}
                                />
                            </td>
                            {/* https://medium.com/@samkitson/fetching-and-displaying-scrobbled-data-with-react-and-the-last-fm-api-28d048386da8 */}
                        </tr>
                    </table>     
                    <h1>Some stats about the site</h1>
                    <table>
                        <tr>
                            <td>Number of commits</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Last Updated</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Number of stars</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Number of forks</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Number of watchers</td>
                            <td></td>
                        </tr>
                    </table>    

                                 {/* https://api.github.com/repos/jackmorrison12/personal-website
                                 https://github.com/ziad-saab/react-github-api-project/blob/master/src/components/User.jsx */}
                    
                </div>
            </div>

        </Fragment>
    );
}

const Image = styled.img`
    border-radius: 50%;
    width: 30%;
`;
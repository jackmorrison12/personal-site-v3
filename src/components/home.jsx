import React, { Fragment } from "react";
import "../styles/home.scss"

import styled from "styled-components";


import data from "../data/socials.json";

import TextLoop from "react-text-loop";

import titles from "../data/titles.json"

const Text = styled.div`
  width: 100vw;
  text-align: center;
`;

const Home = (props) =>  {

    return(
        <Fragment>
            <div id="stars" />
            <div id="stars2" />
            <div id="stars3" />
            <div className={"hero"}>
                <h1>
                    Hello, I'm Jack
                </h1>
                <div class="loop">
                    <TextLoop>
                        {
                            titles.map(title => {
                                return (
                                    <Text>{title}</Text>
                                );
                            })
                        }
                    </TextLoop>
                </div>
                <span class="icons">

                {
                    data.map(item => {
                    return item.home ? (<a href={item.url} class="icon"><i class={`fab fa-${item.icon} fa-3x`}></i></a>) : null;  
                    
                    }) 
                }

                </span>
                
            </div>
        </Fragment>
    ); 

}

export default Home;
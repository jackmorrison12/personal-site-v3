import React, { Fragment } from "react";

import Box from "./sub-components/exp-box";

import data from "../data/experience.json";

export default function Experience() {
    return(
        <Fragment>
            <h1 class="title">Experience</h1>
            {
                data.map(item => {
                return (
                    <Box data = {item}></Box>
                );
                }) 
            }
        </Fragment>
    );
}
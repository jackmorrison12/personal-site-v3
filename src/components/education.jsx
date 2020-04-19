import React, { Fragment } from "react";

import Box from "./sub-components/edu-box";

import data from "../data/education.json";

export default function Education() {
    return(
        <Fragment>
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
import React, { Fragment } from "react";

import Box from "./sub-components/box";

import data from "../data/experience.json";

export default function Experience() {
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
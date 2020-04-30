import React, { Fragment } from "react";
import errorImg from "../assets/images/404.png"

export default function ErrorPage() {
    return(
        <Fragment>
            <img className="error-image" src={errorImg} alt="404 Page"/>
            
        </Fragment>
    );
}
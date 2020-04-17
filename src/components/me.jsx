import React, { Fragment } from "react";

import avatar from "../assets/images/avatar.jpg";

import styled from "styled-components";

export default function Me() {
    return(
        <Fragment>
            <div class="me-outer">
                <div class="me-left">
                    <Image src={avatar} alt="Avatar" />
                    <br />
                    {/* Name: Jack Morrison
                    Age:  */}
                </div>
                <div class="me-right">
                    {/* Stats */}
                </div>
            </div>

        </Fragment>
    );
}

const Image = styled.img`
    border-radius: 50%;
    width: 50%;
`;
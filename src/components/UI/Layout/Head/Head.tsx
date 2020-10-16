import React from 'react';
import {Helmet} from "react-helmet";

function Head(props: any) {

    let title = <title> Nick Fury </title>;

    return (
        <Helmet>
            {title}
        </Helmet>
    )

}

export default Head;

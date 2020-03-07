import React from "react";

import classes from "./Content.module.css";

const Content = props => {
    return (
        <div className={[classes.content, props.classes].join(" ")}>
            <div className={classes.contents}>{props.children}</div>
        </div>
    );
};

export default Content;

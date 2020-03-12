import React from "react";

import classes from "./Content.module.css";

const Content = props => {
    return <div className={[classes.content, props.className].join(" ")}>{props.children}</div>;
};

export default Content;

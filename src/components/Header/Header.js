import React from "react";

import classes from "./Header.module.css";

const Header = props => {
    return (
        <div className={classes.header}>
            <div className={classes.headerLeft}>
                <img className={classes.headerBrand} src={require("../../assets/hara.svg")} />
            </div>
            <div className={classes.headerRight}>
                <h5 className={classes.role}>Data Engineer</h5>
                <div className={classes.headerSeparator}></div>
                <button className={classes.logOutButton}>Log Out</button>
            </div>
        </div>
    );
};

export default Header;

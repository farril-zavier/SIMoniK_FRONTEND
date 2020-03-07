import React from "react";
import { Link } from "react-router-dom";

import classes from "./Sidebar.module.css";

const Sidebar = props => {
    // const renderLinks = props.links.map(link => {
    //     return (
    //         <Link to={link.path} className={classes.link}>
    //             <img src={link.icon} />
    //             <h5>{link.name}</h5>
    //             <img
    //                 className={classes.linkArrow}
    //                 src={require("../../assets/arrow_forward.svg")}
    //             />
    //         </Link>
    //     );
    // });
    return (
        <div className={classes.sidebar}>
            <div className={classes.brand}>
                <img src={require("../../assets/simonik.svg")} />
                <div className={classes.text}>
                    <h6>Sistem Informasi Monitoring</h6>
                    <h6>Kinerja Hara Depo</h6>
                </div>
            </div>
            <div className={classes.separator}></div>
            <div className={classes.userInfo}>
                <h5>Felia Risky F</h5>
                <h5>(Manajer FO)</h5>
            </div>
            <div className={classes.separator}></div>
            <div className={classes.links}>
                <Link to="/" className={classes.link}>
                    <h5>Field Officer</h5>
                    <img
                        className={classes.linkArrow}
                        src={require("../../assets/arrow_forward.svg")}
                    />
                </Link>
                <Link to="/" className={classes.link}>
                    <h5>Deadline</h5>
                    <img
                        className={classes.linkArrow}
                        src={require("../../assets/arrow_forward.svg")}
                    />
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;

import React, { Component } from "react";
import Content from "../../../components/Content/Content";
import Breadcrumb from 'react-bootstrap/Breadcrumb'

import classes from "./StockOpname.module.css";


class StockOpname extends Component {
    constructor(props) {
        super(props);

        this.state = {StockOpname : []};
    }

    render() {
        return (
            <React.Fragment>
                <Content>
                <Breadcrumb>
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                        Library
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Data</Breadcrumb.Item>
                    </Breadcrumb>
                </Content>
            </React.Fragment>
        );
    }
}

export default StockOpname;

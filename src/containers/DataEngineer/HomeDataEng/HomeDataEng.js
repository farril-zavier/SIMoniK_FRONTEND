import React, { Component } from "react";
import Content from "../../../components/Content/Content";
import Card from "react-bootstrap/Card";

import classes from "./HomeDataEng.module.css";

class HomeDataEng extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <Content>
                    <Card>
                        <Card.Body>
                            <Card.Title>Test</Card.Title>
                            <Card.Text>Some text here</Card.Text>
                        </Card.Body>
                    </Card>
                </Content>
            </React.Fragment>
        );
    }
}

export default HomeDataEng;

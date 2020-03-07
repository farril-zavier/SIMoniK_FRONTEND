import React, { Component } from "react";
import Content from "../../components/Content/Content";
import Card from "react-bootstrap/Card";

import classes from "./Home.module.css";

class Home extends Component {
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

export default Home;

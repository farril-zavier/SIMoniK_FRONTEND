import React, { Component } from "react";
import Content from "../../../components/Content/Content";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import Breadcrumb from "react-bootstrap/Breadcrumb";

import classes from "./BuatAkun.module.css";

class BuatAkun extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            modalShow: false,
            success: null
        };
    }

    modalShowHandler = () => {
        this.setState({
            modalShow: true
        });
    };

    modalCloseHandler = () => {
        this.setState({
            modalShow: false
        });
    };

    handleSubmit(event) {
        event.preventDefault();
        
        const data = new FormData(event.target);

        fetch("http://127.0.0.1:8000/api/akun/", {
            method: "POST",
            body: data
        });
    }

    render() {
        return (
            <React.Fragment>
                <Content>
                    <Card>
                        <Modal
                            centered
                            show={this.state.modalShow}
                            onHide={this.modalCloseHandler}
                        >
                            <Modal.Header
                                closeButton
                                className={classes.modalHeader}
                            ></Modal.Header>
                            <Modal.Body className="mt-n5">
                                <Row className="justify-content-center mb-3 mt-4">
                                    Akun berhasil dibuat!
                                </Row>
                            </Modal.Body>
                        </Modal>
                        <Modal
                            centered
                            show={this.state.modalShow}
                            onHide={this.modalCloseHandler}
                        >
                            <Modal.Header
                                closeButton
                                className={classes.modalHeader}
                            ></Modal.Header>
                            <Modal.Body className="mt-n5">
                                <Row className="justify-content-center mb-3 mt-4">
                                    Akun gagal dibuat!
                                </Row>
                            </Modal.Body>
                        </Modal>

                        <Breadcrumb>
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="/buat-akun">
                                Buat Akun
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>Akun Baru</Card.Title>
                            <div className={classes.divider}></div>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group as={Row} controlId="formUsername">
                                    <Form.Label column sm="2">
                                        Username*:
                                    </Form.Label>
                                    <Col sm="4">
                                        <Form.Control
                                            name="username"
                                            type="text"
                                            placeholder="e.g adindahawari"
                                        />
                                    </Col>
                                    <Form.Label column sm="2">
                                        Nama*:
                                    </Form.Label>
                                    <Col sm="4">
                                        <Form.Control
                                            name="name"
                                            type="text"
                                            placeholder="e.g Adinda Hawari"
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="formUsername">
                                    <Form.Label column sm="2">
                                        Password*:
                                    </Form.Label>
                                    <Col sm="4">
                                        <Form.Control
                                            name="password"
                                            type="password"
                                            placeholder="********"
                                        />
                                    </Col>
                                    <Form.Label column sm="2">
                                        Role*:
                                    </Form.Label>
                                    <Col sm="4">
                                        {/* TODO: kok gabisa ""role":["Incorrect type. Expected pk value, received str."]" */}
                                        <Form.Control name="role" as="select">
                                            <option selected>
                                                -- Pilih Role --
                                            </option>
                                            <option>Field Officer</option>
                                            <option>
                                                Area Manager Field Officer
                                            </option>
                                            <option>Data Engineer</option>
                                            <option>
                                                Business Development
                                            </option>
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                                <Row>
                                    <Col sm="2"></Col>
                                    <Col sm="10">
                                        <Button variant="primary" type="submit">
                                            Buat Akun
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </Content>
            </React.Fragment>
        );
    }
}

export default BuatAkun;

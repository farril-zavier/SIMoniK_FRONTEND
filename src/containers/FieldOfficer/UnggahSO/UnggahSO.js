import React, { Component } from "react";
import Content from "../../../components/Content/Content";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import classes from "./UnggahSO.module.css";

class UnggahSO extends Component {
    constructor(props) {
        super(props);
        this.fileInput = React.createRef();

        this.state = {
            fileName: "Pilih dokumen",
            modalShow: false
        };
    }

    fileChosenHandler = () => {
        var fileName = this.fileInput.current.files[0].name;
        this.setState({
            fileName: fileName
        });
    };

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

    render() {
        return (
            <React.Fragment>
                <Content className={classes.content}>
                    {/* implement upload function first, then this modal can be used */}
                    <Modal centered show={this.state.modalShow} onHide={this.modalCloseHandler}>
                        <Modal.Header closeButton className={classes.modalHeader}></Modal.Header>
                        <Modal.Body className="mt-n5">
                            <Row className="justify-content-center mt-2 mb-4">
                                <img src={require("../../../assets/check_circle.svg")} />
                            </Row>
                            <Row className="justify-content-center mb-3 mt-4">
                                Stock opname berhasil diunggah!
                            </Row>
                        </Modal.Body>
                    </Modal>

                    <Card>
                        <Card.Body>
                            <Card.Title className={classes.title}>Stock Opname</Card.Title>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <h4>Unggah Stock Opname</h4>
                            <div className={classes.divider}></div>
                            <h5>Stock Opname Januari</h5>
                            <Form>
                                <Form.Group as={Row} controlId="formTenggatWaktu">
                                    <Form.Label column sm="2">
                                        Tenggat Waktu
                                    </Form.Label>
                                    <Col sm="10">
                                        <Form.Control
                                            plaintext
                                            readOnly
                                            defaultValue="Selasa, 20 Januari 2020, 23:55"
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formDokumen">
                                    <Form.Label column sm="2">
                                        Dokumen
                                    </Form.Label>
                                    <Col sm="10">
                                        <InputGroup className="custom-file mb-2">
                                            <Form.Control
                                                type="file"
                                                className="custom-file-input"
                                                id="customFile"
                                                ref={this.fileInput}
                                                onChange={this.fileChosenHandler}
                                            />
                                            <Form.Label
                                                className="custom-file-label"
                                                for="customFile"
                                            >
                                                {this.state.fileName}
                                            </Form.Label>
                                        </InputGroup>
                                    </Col>
                                    <Col sm="2"></Col>
                                    <Col sm="10">
                                        <Alert variant="warning">
                                            Pastikan dokumen yang diunggah telah sesuai dengan
                                            format.
                                        </Alert>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formRekanFO">
                                    <Form.Label column sm="2">
                                        Rekan Field Officer
                                    </Form.Label>
                                    <Col sm="10">
                                        <Form.Control as="select">
                                            <option selected>-- Tidak Ada --</option>
                                            <option>Arril</option>
                                            <option>Hana</option>
                                            <option>Dinda</option>
                                            <option>Tepe</option>
                                            <option>Felia</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Group>

                                <Row>
                                    <Col sm="2"></Col>
                                    <Col sm="10">
                                        <Button variant="success" type="submit">
                                            Submit
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <div className="d-flex justify-content-between">
                                <h4>Dokumen Stock Opname</h4>
                                <Button variant="info">Unduh Template</Button>
                            </div>
                            <div className={classes.divider}></div>
                            <img
                                className={classes.contohSO}
                                src={require("../../../assets/contoh_so.png")}
                            />
                        </Card.Body>
                    </Card>
                </Content>
            </React.Fragment>
        );
    }
}

export default UnggahSO;

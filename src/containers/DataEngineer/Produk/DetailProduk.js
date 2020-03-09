import React, { Component } from "react";
import Content from "../../../components/Content/Content";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Card, { CardBody, CardTitle } from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Form, { FormRow } from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

import classes from "./DetailProduk.module.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class DetailProduk extends Component {
    constructor(props) {
        super(props);

        this.state = { StockOpname: [] };
    }

    render() {
        return (
            <React.Fragment>
                <Content>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/produk">Produk</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">Sankill</Breadcrumb.Item>
                    </Breadcrumb>
                    <Card>
                        <Card.Body>
                            <Card.Title>Produk</Card.Title>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <Card.Text>
                                <Card.Title>Sankill</Card.Title>
                                <br></br>
                                <Container>
                                    <Row>
                                        <Col md={{ span: 2 }}>ID Produk</Col>
                                        <Col md={{ span: 2, offset: 1 }}>
                                            : ABCD123
                                        </Col>
                                        <Col md={{ span: 2 }}>
                                            Tanggal Akhir Ijin
                                        </Col>
                                        <Col md={{ span: 4, offset: 1 }}>
                                            : 23 April 2023
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md={{ span: 2 }}>ID Produk</Col>
                                        <Col md={{ span: 2, offset: 1 }}>
                                            : ABCD123
                                        </Col>
                                        <Col md={{ span: 2 }}>
                                            Tanggal Akhir Ijin
                                        </Col>
                                        <Col md={{ span: 4, offset: 1 }}>
                                            : 23 April 2023
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={{ span: 2 }}>ID Produk</Col>
                                        <Col md={{ span: 2, offset: 1 }}>
                                            : ABCD123
                                        </Col>
                                        <Col md={{ span: 2 }}>
                                            Tanggal Akhir Ijin
                                        </Col>
                                        <Col md={{ span: 4, offset: 1 }}>
                                            : 23 April 2023
                                        </Col>
                                    </Row>
                                    {/* <ButtonToolbar>
                                        <Button
                                            md={{ span: 6, offset: 3 }}
                                            variant="primary"
                                        >
                                            Primary
                                        </Button>

                                        <Button
                                            md={{ span: 2, offset: 10 }}
                                            variant="danger"
                                        >
                                            Danger
                                        </Button>
                                    </ButtonToolbar> */}
                                    <ButtonToolbar>
                                        <Button
                                            id="buttonbiru"
                                            size="lg"
                                            md={{ span: 6, offset: 3 }}
                                            variant="primary"
                                            inline
                                        >
                                            Ubah Rincian
                                        </Button>
                                        <Button
                                            size="lg"
                                            md={{ span: 6, offset: 3 }}
                                            variant="danger"
                                            inline
                                        >
                                            Hapus Produk
                                        </Button>
                                    </ButtonToolbar>
                                </Container>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Content>
            </React.Fragment>
        );
    }
}

export default DetailProduk;

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

import classes from "./TambahProduk.module.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class TambahProduk extends Component {
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
                        <Breadcrumb.Item href="#">
                            Tambah Produk
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <Card>
                        <Card.Body>
                            <Card.Title>Tambah Produk</Card.Title>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <Card.Text>
                                <br></br>
                                <Form>
                                    <Form.Group
                                        as={Row}
                                        controlId="formHorizontalNamaProduk"
                                    >
                                        <Form.Label column sm={2}>
                                            Nama Produk
                                        </Form.Label>
                                        <Col sm={6}>
                                            <Form.Control placeholder="Nama Produk" />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group
                                        as={Row}
                                        controlId="formGridKategori"
                                    >
                                        <Form.Label column sm={2}>
                                            Kategori
                                        </Form.Label>
                                        <Col sm={6}>
                                            <Form.Control as="select">
                                                <option>Kategori...</option>
                                                <option>...</option>
                                            </Form.Control>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group
                                        as={Row}
                                        controlId="formHorizontalPerusahaan"
                                    >
                                        <Form.Label column sm={2}>
                                            Perusahaan
                                        </Form.Label>
                                        <Col sm={6}>
                                            <Form.Control placeholder="Perusahaan" />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group
                                        as={Row}
                                        controlId="formHorizontalTanggalAkhirIjin"
                                    >
                                        <Form.Label column sm={2}>
                                            Tanggal Akhir Ijin
                                        </Form.Label>
                                        <Col sm={6}>
                                            <Form.Control placeholder="Tanggal Akhir Ijin" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group
                                        as={Row}
                                        controlId="formHorizontalDeskripsiSingkat"
                                    >
                                        <Form.Label column sm={2}>
                                            Deskripsi Singkat
                                        </Form.Label>
                                        <Col sm={6}>
                                            <Form.Control placeholder="Deskripsi Singkat" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Col sm={{ span: 10, offset: 2 }}>
                                            <Button variant="success">
                                                Simpan
                                            </Button>
                                        </Col>
                                    </Form.Group>
                                </Form>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Content>
            </React.Fragment>
        );
    }
}

export default TambahProduk;

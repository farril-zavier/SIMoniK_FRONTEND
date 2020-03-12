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
import Breadcrumb from "react-bootstrap/Breadcrumb";

import classes from "./BuatAkun.module.css";

class BuatAkun extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const data = [
            {
                Id: 1,
                No: 1,
                Nama: "Asep",
                Role: "Business Development",
                Username: "asep.sat"
            },
            {
                Id: 1,
                No: 2,
                Nama: "Asep",
                Role: "Business Development",
                Username: "asep.sat"
            },
            {
                Id: 1,
                No: 3,
                Nama: "Asep",
                Role: "Business Development",
                Username: "asep.sat"
            },
            {
                Id: 1,
                No: 4,
                Nama: "Asep",
                Role: "Business Development",
                Username: "asep.sat"
            },
            {
                Id: 1,
                No: 5,
                Nama: "Asep",
                Role: "Business Development",
                Username: "asep.sat"
            },
            {
                Id: 1,
                No: 6,
                Nama: "Asep",
                Role: "Business Development",
                Username: "asep.sat"
            }
        ];
        const rows = data.map(row => (
            <tr>
                <td>{row.No + ""}</td>
                <td>{row.Nama}</td>
                <td>{row.Role}</td>
                <td>{row.Username}</td>
                <td>
                    <Button href={"delete/" + row.Id} variant="danger">
                        Hapus
                    </Button>
                </td>
            </tr>
        ));
        return (
            <React.Fragment>
                <Content>
                    <Card>
                        <Breadcrumb>
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="/buatAkun">
                                Buat Akun
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>Akun Baru</Card.Title>
                            <div className={classes.divider}></div>
                            <Form>
                                <Form.Group as={Row} controlId="formUsername">
                                    <Form.Label column sm="2">
                                        Username*:
                                    </Form.Label>
                                    <Col sm="4">
                                    <Form.Control type="text" placeholder="e.g adindahawari" />
                                    </Col>
                                    <Form.Label column sm="2">
                                        Nama*:
                                    </Form.Label>
                                    <Col sm="4">
                                    <Form.Control type="text" placeholder="e.g Adinda Hawari" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="formUsername">
                                    <Form.Label column sm="2">
                                        Password*:
                                    </Form.Label>
                                    <Col sm="4">
                                    <Form.Control type="password" placeholder="********" />
                                    </Col>
                                    <Form.Label column sm="2">
                                        Role*:
                                    </Form.Label>
                                    <Col sm="4">
                                    <Form.Control as="select">
                                            <option selected>-- Pilih Role --</option>
                                            <option>Field Officer</option>
                                            <option>Area Manager Field Officer</option>
                                            <option>Data Engineer</option>
                                            <option>Business Development</option>
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

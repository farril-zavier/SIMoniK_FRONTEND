import React, { Component } from "react";
import Content from "../../../components/Content/Content";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";

import classes from "./DaftarAkun.module.css";

class DaftarAkun extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalShow: false
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

    delete = () => null;

    render() {
        const data = [
            {
                Username: "bimba",
                Nama: "bimba",
                Role: 1
            }
        ];
        const dataDenganNomor = data; //TODO: Tambabhin angka. i=1. For each data, tambahin no: i. i++
        // for (let i = 0; i < dataDenganNomor.length; i++) {
        //     const count = parseInt(dataDenganNomor[i]);
        //     //gataulagii
        // }
        const rows = data.map((row, idx) => (
            <tr>
                <td>{idx+1}</td>
                <td>{row.Nama}</td>
                <td>{row.Role}</td>
                <td>{row.Username}</td>
                <td>
                    {/* TODO: Bikin fungsi utk delete */}
                    <Button onClick={this.modalShowHandler} variant="danger">
                        Hapus
                    </Button>
                </td>
            </tr>
        ));
        return (
            <React.Fragment>
                <Content>
                    <Card>
                        <Modal centered show={this.state.modalShow} onHide={this.modalCloseHandler}>
                            <Modal.Header closeButton className={classes.modalHeader}></Modal.Header>
                            <Modal.Body className="mt-n5">
                                <Row className="justify-content-center mb-3 mt-4">
                                    Apakah Anda yakin ingin menghapus akun ini?
                                </Row>
                                <Row className="justify-content-center mb-3 mt-4">
                                    <Button onClick={this.delete} variant="primary">
                                        Ya, Hapus
                                    </Button>
                                    <Button onClick={this.modalCloseHandler} variant="light">
                                        Tidak
                                    </Button>
                                </Row>
                            </Modal.Body>
                        </Modal>
                        <Breadcrumb>
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="/daftar-akun">
                                Daftar Akun
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>Akun</Card.Title>
                            <div className={classes.divider}></div>
                            <Card.Text>
                                <p> Cari Berdasarkan: </p>
                                <Form inline>
                                    {/* <DropdownButton className="mr-sm-2" variant="secondary" id="dropdown-basic-button" title="Cari Role">
                                        <Dropdown.Item href="#/action-1">Field Officer</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Area Manager Field Officer</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Data Engineer</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Business Development</Dropdown.Item>
                                    </DropdownButton> */}

                                    <Form.Control as="select">
                                        <option>--Pilih Role--</option>
                                        <option>Field Officer</option>
                                        <option>
                                            Area Manager Field Officer
                                        </option>
                                        <option>Data Engineer</option>
                                        <option>Business Development</option>
                                    </Form.Control>
                                    <Button href="search">Cari</Button>
                                </Form>

                                <br></br>
                                <p> Semua Akun </p>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>Nama</th>
                                            <th>Role</th>
                                            <th>Username</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>{rows}</tbody>
                                </Table>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Content>
            </React.Fragment>
        );
    }
}

export default DaftarAkun;

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

import classes from "./DaftarAkun.module.css";

class DaftarAkun extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const data = [
            {
                username: "bimba",
                name: "bimba",
                role: 1
            }
        ];
        const dataDenganNomor = data; //TODO: Tambabhin angka. i=1. For each data, tambahin no: i. i++
        const rows = data.map(row => (
            <tr>
                <td>{row.No + ""}</td>
                <td>{row.Nama}</td>
                <td>{row.Role}</td>
                <td>{row.Username}</td>
                <td>
                    {/* TODO: Bikin fungsi utk delete */}
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
                            <Breadcrumb.Item href="/daftarAkun">
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

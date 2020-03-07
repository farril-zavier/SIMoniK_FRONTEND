import React, { Component } from "react";
import Content from "../../../components/Content/Content";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form'

import classes from "./DaftarAkun.module.css";

class DaftarAkun extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const data = [
            {
                "Id": 1,
                "No": 1,
                "Nama": "Asep",
                "Role": "Business Development",
                "Username": "asep.sat"
            },
            {
                "Id": 1,
                "No": 2,
                "Nama": "Asep",
                "Role": "Business Development",
                "Username": "asep.sat"
            },
            {
                "Id": 1,
                "No": 3,
                "Nama": "Asep",
                "Role": "Business Development",
                "Username": "asep.sat"
            },
            {
                "Id": 1,
                "No": 4,
                "Nama": "Asep",
                "Role": "Business Development",
                "Username": "asep.sat"
            },
            {
                "Id": 1,
                "No": 5,
                "Nama": "Asep",
                "Role": "Business Development",
                "Username": "asep.sat"
            },
            {
                "Id": 1,
                "No": 6,
                "Nama": "Asep",
                "Role": "Business Development",
                "Username": "asep.sat"
            }
        ]
        const rows = data.map(row =>
            <tr>
                <td>{row.No + ""}</td>
                <td>{row.Nama}</td>
                <td>{row.Role}</td>
                <td>{row.Username}</td>
                <td><Button href={"delete/" + row.Id} variant="danger">Hapus</Button></td>
            </tr>
        )
        return (
            <React.Fragment>
                <Content>
                    <Card>
                        <Card.Body>
                            <Card.Title>Daftar Akun</Card.Title>
                            <Card.Text></Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>Akun</Card.Title>
                            <Card.Text>
                                <p> Cari Berdasarkan: </p>
                                <Form inline>
                                    <DropdownButton className="mr-sm-2" variant="secondary" id="dropdown-basic-button" title="Cari Role">
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </DropdownButton>
                                    <Button href="search">Cari</Button>
                                </Form>


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
                                    <tbody>
                                        {rows}
                                    </tbody>
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

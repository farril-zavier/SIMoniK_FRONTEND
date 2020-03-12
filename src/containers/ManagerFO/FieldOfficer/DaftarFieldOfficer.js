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

import classes from "./DaftarFieldOfficer.module.css";

class DaftarFieldOfficer extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const data = [
            {
                Id: 1,
                No: 1,
                NamaLengkap: "Celine Dion",
                NomorTelepon: "081234567890",
                Username: "celine.dion"
            },
            {
                Id: 1,
                No: 2,
                NamaLengkap: "Celine Dion",
                NomorTelepon: "081234567890",
                Username: "celine.dion"
            },
            {
                Id: 1,
                No: 3,
                NamaLengkap: "Celine Dion",
                NomorTelepon: "081234567890",
                Username: "celine.dion"
            },
            {
                Id: 1,
                No: 4,
                NamaLengkap: "Celine Dion",
                NomorTelepon: "081234567890",
                Username: "celine.dion"
            },
            {
                Id: 1,
                No: 5,
                NamaLengkap: "Celine Dion",
                NomorTelepon: "081234567890",
                Username: "celine.dion"
            },
            {
                Id: 1,
                No: 6,
                NamaLengkap: "Celine Dion",
                NomorTelepon: "081234567890",
                Username: "celine.dion"
            }
        ];
        const rows = data.map(row => (
            <tr>
                <td>{row.No + ""}</td>
                <td>{row.NamaLengkap}</td>
                <td>{row.NomorTelepon}</td>
                <td>{row.Username}</td>
            </tr>
        ));
        return (
            <React.Fragment>
                <Content>
                    <Card>
                        <Breadcrumb>
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="/daftarFieldOfficer">
                                Daftar Field Officer
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>Semua Field Officer</Card.Title>
                            <br></br>
                            <Card.Text>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>Nama Lengkap</th>
                                            <th>Nomor Telepon</th>
                                            <th>Username</th>
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

export default DaftarFieldOfficer;

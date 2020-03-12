import React, { Component } from "react";
import Content from "../../../components/Content/Content";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Card, { CardBody, CardTitle } from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Form, { FormRow } from "react-bootstrap/Form";

import classes from "./Produk.module.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class Produk extends Component {
    constructor(props) {
        super(props);

        this.state = { StockOpname: [] };
    }

    render() {
        const data = [
            {
                Id: 1,
                No: 1,
                Nama_Produk: "Sankill",
                Perusahaan: "CV Abadi Jaya",
                Kategori: " Insektisida"
            },
            {
                Id: 1,
                No: 2,
                Nama_Produk: "Sankill",
                Perusahaan: "CV Abadi Jaya",
                Kategori: " Insektisida"
            },
            {
                Id: 1,
                No: 3,
                Nama_Produk: "Sankill",
                Perusahaan: "CV Abadi Jaya",
                Kategori: " Insektisida"
            },
            {
                Id: 1,
                No: 4,
                Nama_Produk: "Sankill",
                Perusahaan: "CV Abadi Jaya",
                Kategori: " Insektisida"
            },
            {
                Id: 1,
                No: 5,
                Nama_Produk: "Sankill",
                Perusahaan: "CV Abadi Jaya",
                Kategori: " Insektisida"
            },
            {
                Id: 1,
                No: 6,
                Nama_Produk: "Sankill",
                Perusahaan: "CV Abadi Jaya",
                Kategori: " Insektisida"
            }
        ];
        const rows = data.map(row => (
            <tr>
                <td>{row.No + ""}</td>
                <td>{row.Nama_Produk}</td>
                <td>{row.Perusahaan}</td>
                <td>{row.Kategori}</td>
                <td>
                    <Button href="/produk/detail" variant="primary">
                        Lihat Detail
                    </Button>
                </td>
            </tr>
        ));
        return (
            <React.Fragment>
                <Content className={classes.content}>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/produk">Produk</Breadcrumb.Item>
                    </Breadcrumb>
                    <Card>
                        <Card.Body>
                            <Card.Title className={classes.title}>
                                Produk
                            </Card.Title>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <Card.Text>
                                <h4>Produk</h4>
                                <div className={classes.divider}></div>
                                <Button
                                    href="/produk/tambah"
                                    variant="outline-primary"
                                >
                                    + Tambah Produk
                                </Button>
                                <div className={classes.divider}></div>

                                <br></br>
                                <h5> Semua Produk</h5>
                                <Table bordered hover>
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>Nama Produk</th>
                                            <th>Perusahaan</th>
                                            <th>Kategori</th>
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

export default Produk;

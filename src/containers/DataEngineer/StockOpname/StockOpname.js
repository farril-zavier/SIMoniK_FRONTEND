import React, { Component } from "react";
import Content from "../../../components/Content/Content";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Card, { CardBody, CardTitle } from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Form, { FormRow } from "react-bootstrap/Form";

import classes from "./StockOpname.module.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class StockOpname extends Component {
    constructor(props) {
        super(props);

        this.state = { StockOpname: [] };
    }

    render() {
        const data = [
            {
                Id: 1,
                No: 1,
                Dokumen: "Stock Opname 1",
                Daerah: "Tuban",
                Field_Officer: "si kentut"
            },
            {
                Id: 1,
                No: 2,
                Dokumen: "Stock Opname 2",
                Daerah: "Tuban",
                Field_Officer: "si kentut"
            },
            {
                Id: 1,
                No: 3,
                Dokumen: "Stock Opname 3",
                Daerah: "Tuban",
                Field_Officer: "si kentut"
            },
            {
                Id: 1,
                No: 4,
                Dokumen: "Stock Opname 4",
                Daerah: "Tuban",
                Field_Officer: "si kentut"
            },
            {
                Id: 1,
                No: 5,
                Dokumen: "Stock Opname 5",
                Daerah: "Tuban",
                Field_Officer: "si kentut"
            },
            {
                Id: 1,
                No: 6,
                Dokumen: "Stock Opname 6",
                Daerah: "Tuban",
                Field_Officer: "si kentut"
            }
        ];
        const rows = data.map(row => (
            <tr>
                <td>{row.No + ""}</td>
                <td>{row.Dokumen}</td>
                <td>{row.Daerah}</td>
                <td>{row.Field_Officer}</td>
                <td>
                    <Button variant="primary">Lihat Detail</Button>
                </td>
            </tr>
        ));
        return (
            <React.Fragment>
                <Content>
                    <div className={classes.breadcrumbbg}>
                        <Breadcrumb>
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                                Library
                            </Breadcrumb.Item>
                            <Breadcrumb.Item active>Data</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <Card>
                        <Card.Body>
                            <Card.Title>Stock Opname</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Text>
                                <p>Cari Berdasarkan</p>
                                <Form>
                                    {/*                                 
                            <DropdownButton id="dropdown-basic-button" title="Pilih Daerah">
                                <Dropdown.Item href="#/action-1">Tuban</Dropdown.Item>
                                <Dropdown.Item href="#/action-2"></Dropdown.Item>
                            </DropdownButton> */}
                                    {/* <Form.Row>
                                    <Form.Group as={Col} controlId="formGridState">
                                            <Form.Control as="select">
                                                <option>Pilih Daerah</option>
                                                <option>Tuban</option>
                                                <option>Bojonegoro</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col}>
                                            <fieldset>
                                                <Form.Check 
                                                inline
                                                    type= "radio"
                                                    label="Periode"
                                                />
                                                <Form.Control as="select">
                                                    <option>Pilih Daerah</option>
                                                    <option>Tuban</option>
                                                    <option>Bojonegoro</option>
                                                </Form.Control>
                                                <Form.Check 
                                                inline
                                                    type= "radio"
                                                    label="Jangka Waktu"
                                                />
                                                <Form.Row>
                                                    <Form.Group  controlId="formGridCity">
                                                        <Form.Label>City</Form.Label>
                                                        <Form.Control />
                                                    </Form.Group>
                                                    
                                                    <Form.Group  controlId="formGridCity">
                                                        <Form.Label>City</Form.Label>
                                                        <Form.Control />
                                                    </Form.Group>
                                                </Form.Row>
                                                </fieldset>
                                        </Form.Group>
                                    </Form.Row>
                                    <Button inline variant="primary" type="submit">
                                            Submit
                                        </Button>
                                </Form>  */}
                                    <Form.Row>
                                        <Form.Group
                                            as={Col}
                                            controlId="formGridState"
                                        >
                                            <Form.Control as="select">
                                                <option>Pilih Daerah</option>
                                                <option>Tuban</option>
                                                <option>Bojonegoro</option>
                                            </Form.Control>
                                        </Form.Group>

                                        <fieldset>
                                            <Form.Group as={Col}>
                                                <Form.Group as={Row}>
                                                    <Form.Label
                                                        as="legend"
                                                        column
                                                        sm={2}
                                                    >
                                                        Radios
                                                    </Form.Label>
                                                    <Col sm={10}>
                                                        <Form.Check
                                                            type="radio"
                                                            label="first radio"
                                                            name="formHorizontalRadios"
                                                            id="formHorizontalRadios1"
                                                        />
                                                        <Form.Control as="select">
                                                            <option>
                                                                Pilih Daerah
                                                            </option>
                                                            <option>
                                                                Tuban
                                                            </option>
                                                            <option>
                                                                Bojonegoro
                                                            </option>
                                                        </Form.Control>
                                                        <Form.Check
                                                            type="radio"
                                                            label="second radio"
                                                            name="formHorizontalRadios"
                                                            id="formHorizontalRadios2"
                                                        />
                                                        <Form.Row>
                                                            <Form.Group controlId="formGridCity">
                                                                <Form.Label>
                                                                    City
                                                                </Form.Label>
                                                                <Form.Control />
                                                            </Form.Group>

                                                            <Form.Group controlId="formGridCity">
                                                                <Form.Label>
                                                                    City
                                                                </Form.Label>
                                                                <Form.Control />
                                                            </Form.Group>
                                                        </Form.Row>
                                                    </Col>
                                                </Form.Group>
                                            </Form.Group>
                                        </fieldset>
                                    </Form.Row>
                                    <Button
                                        inline
                                        variant="primary"
                                        type="submit"
                                    >
                                        Submit
                                    </Button>
                                </Form>

                                <br></br>
                                <p> Semua Stock Opname</p>
                                <Table bordered hover>
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>Dokumen</th>
                                            <th>Daerah</th>
                                            <th>Field Officer</th>
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

export default StockOpname;

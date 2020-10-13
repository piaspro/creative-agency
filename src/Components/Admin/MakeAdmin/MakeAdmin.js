import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { Col, Form, Row } from 'react-bootstrap';
import Header from '../../Header/Header';
import Sidebar from '../AdminSidebar/AdminSidebar';

const MakeAdmin = () => {
    return (
        <div>
            <Header></Header>
            <Row>
                <Col>
                    <Sidebar></Sidebar>
                </Col>
                <Col>
                    <Form.Label>Email</Form.Label>
                    <InputGroup className="mb-3">
                        <FormControl placeholder="john@email.com" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <InputGroup.Append>
                            <Button className="px-3 mr-5" variant="success">Submit</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Col>
            </Row>
        </div>
    );
};

export default MakeAdmin;
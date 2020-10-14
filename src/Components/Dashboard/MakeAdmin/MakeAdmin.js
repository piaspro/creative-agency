import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { Col, Form, Row } from 'react-bootstrap';
import Header from '../../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {
    return (
        <div>
            <Header></Header>
            <Row>
                <Col md={4}>
                    <Sidebar></Sidebar>
                </Col>
                <Col md={8}>
                    <h4>Make Admin</h4>
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
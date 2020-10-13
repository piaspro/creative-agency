import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import Header from '../../Header/Header';
import Sidebar from '../AdminSidebar/AdminSidebar';

const AdminService = () => {
    return (
        <div>
            <Header></Header>
            <Row>
                <Col>
                    <Sidebar></Sidebar>
                </Col>
                <Col>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Service Title</Form.Label>
                                    <Form.Control type="email" placeholder="Enter Title" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control as="textarea" rows="3" placeholder="Enter Description" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.File id="exampleFormControlFile1" label="Icon" />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default AdminService;
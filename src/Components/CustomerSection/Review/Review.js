import React from 'react';
import { Button } from 'react-bootstrap';
import { Col, Form, Row } from 'react-bootstrap';
import Header from '../../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

const Review = () => {
    return (
        <div>
            <Header></Header>
            <Row>
                <Col>
                    <Sidebar></Sidebar>
                </Col>
                <Col>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="Your Name" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="Your Company" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows="3" placeholder="Project Details" />
                        </Form.Group>
                        <Button variant="dark">Dark</Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default Review;
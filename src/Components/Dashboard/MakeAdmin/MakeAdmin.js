import React, { useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { Col, Form, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Header from '../../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import './MakeAdmin.css'

const MakeAdmin = () => {
    const [admin, setAdmin] = useState({});
    // capture admin email
    const handleBlur = e => {
        const newInfo = { ...admin };
        newInfo[e.target.name] = e.target.value;
        setAdmin(newInfo);
    }
    let history = useHistory();
    // function to send data to server
    const sendReview = (event) => {
        fetch('https://morning-falls-52247.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(admin)
        })
            .then(res => res.json())
            .then(value => {
                if (value) {
                    history.push("/home");
                } else {
                    alert("Could Not Add !!")
                }
            })
        event.preventDefault();
    }
    return (
        <div>
            <Header></Header>
            <Row>
                <Col md={4}>
                    <Sidebar></Sidebar>
                </Col>
                <Col md={8}>
                    <h4 className="pl-3">Make Admin</h4>
                    <Col md={6} className="card p-3">
                        <Form onSubmit={sendReview}>
                            <Form.Label>Email</Form.Label>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <FormControl onBlur={handleBlur} type="text" name="email" placeholder="john@email.com" />
                            </Form.Group>
                            <Button className="px-3 mr-5" variant="success" type="submit">Submit</Button>
                        </Form>
                    </Col>
                </Col>
            </Row>
        </div>
    );
};

export default MakeAdmin;
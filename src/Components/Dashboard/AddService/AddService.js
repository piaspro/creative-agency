import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Header from '../../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

const AddService = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);


    const history = useHistory();

    const addService = (event) => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('title', info.title);
        formData.append('description', info.description);
        fetch('http://localhost:5000/AddService', {
            method: 'POST',
            body: formData
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
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    return (
        <div>
            <Header></Header>
            <Row>
                <Col md={4}>
                    <Sidebar></Sidebar>
                </Col>
                <Col md={8}>
                    <h4>Add Service</h4>
                    <Form onSubmit={addService}>
                        <Row>
                            <Col>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Service Title</Form.Label>
                                    <Form.Control onBlur={handleBlur} type="text" name="title" placeholder="Enter Title" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control onBlur={handleBlur} type="text" as="textarea" rows="3" name="description" placeholder="Enter Description" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.File onChange={handleFileChange} label="Icon" />
                                </Form.Group>
                            </Col>
                        </Row>
                            <Button className="px-3 mr-5" variant="dark" type="submit">Send</Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default AddService;
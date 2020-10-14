import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Col, Form, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { userContext } from '../../../App';
import Header from '../../Header/Header';
import Sidebar from '../Sidebar/Sidebar';


const Review = () => {
    const [loggedInUser, SetLoggedInUser] = useContext(userContext);
    const [clientInfo, setClientInfo] = useState({});
    const {name, photo} = loggedInUser;
    const handleBlur = e => {
        const newInfo = { ...clientInfo, name, photo};
        newInfo[e.target.name] = e.target.value;
        setClientInfo(newInfo);
    }
    let history = useHistory();
    // function to send data to server
    const sendReview = (event) => {
        fetch('http://localhost:5000/addReview', {
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(clientInfo)
        })
        .then(res => res.json())
        .then(value => {
           if (value){
            history.push("/home");
           }else{
               alert("Could Not Add !!")
           }
        })
        event.preventDefault();
    }

    return (
        <div>
            <Header></Header>
            <Row>
                <Col>
                    <Sidebar></Sidebar>
                </Col>
                <Col>
                    <Form  onSubmit={sendReview}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Control onBlur={handleBlur} type="text" name="name" placeholder="Your Name" value={name}/>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Control onBlur={handleBlur} type="text" name="position" placeholder="Your Company" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control onBlur={handleBlur} type="text" as="textarea" name="description" rows="3" placeholder="Project Details" />
                        </Form.Group>
                        <Button variant="dark" type="submit">Dark</Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default Review;
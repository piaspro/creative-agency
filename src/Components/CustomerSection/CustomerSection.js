import React, { useContext } from 'react';
import Sidebar from './Sidebar/Sidebar';
import { Button, Col, Form, Row } from 'react-bootstrap';
import Header from '../Header/Header';
import { userContext } from '../../App';
import AllServices from '../Home/Services/AllServices'
import { useHistory, useParams } from 'react-router-dom';

const CustomerSection = () => {
    const [loggedInUser, SetLoggedInUser] = useContext(userContext);

    const history = useHistory();

    const sendData = () => {
        fetch('http://localhost:5000/addServices', {
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(AllServices)
        })
        .then(res => res.json())
        .then(value => {
            console.log(value)
           if (value){
            history.push("/servicelist");
           }else{
               alert("Could Not Add !!")
           }
        })
    }

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
                            <Form.Control type="email" placeholder="Your Name"  value={loggedInUser.name}/>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="Your Email" value={loggedInUser.email}/>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="Graphics Design" value={loggedInUser.title}/>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows="3" placeholder="Project Details" />
                        </Form.Group>
                        <Row>
                            <Col>
                                <Form.Control placeholder="Price" />
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.File id="exampleFormControlFile1" />
                                </Form.Group>
                            </Col>
                        </Row>
                            <Button onClick={sendData} className="px-3 mr-5" variant="dark">Send</Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default CustomerSection;
import React, { useContext, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Header from '../../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import { Button } from 'react-bootstrap';
import { userContext } from '../../../App';
import './Servicelist.css'

const ServiceList = () => {
    const [loggedInUser, SetLoggedInUser] = useContext(userContext);
    const [service, setService] = useState([]);
    console.log(service);
    // Display all Servicelist
    useEffect(() => {
        fetch('http://localhost:5000/getUserServices?email=' + loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setService(data)
            })
    }, [])

    return (
        <div>
            <Header></Header>
            <Row>
                <Col md={4}>
                    <Sidebar></Sidebar>
                </Col>
                <Col md={8}>
                    <h4>Service List</h4>
                    <Row>
                        {
                            service.map(data => <Col className="m-3 p-3 box">
                                <Row>
                                    <Col md={6}>
                                        <img height={100} className="p-3 mr-1" src={`data:image/png;base64,${data.image.img}`} alt="..." />
                                    </Col>
                                    <Col md={6}>
                                        <Button className="mr-3 mt-5" variant="success">Done</Button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <h5>{data.title}</h5>
                                        <p>{data.description}</p>
                                    </Col>
                                </Row>
                            </Col>)
                        }
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default ServiceList;
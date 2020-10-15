import React, { useContext, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Header from '../../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import { Button } from 'react-bootstrap';
import { userContext } from '../../../App';
import loading from '../../../images/Loading.gif'
import './Servicelist.css'

const ServiceList = () => {
    const [loggedInUser, SetLoggedInUser] = useContext(userContext);
    const [service, setService] = useState([]);
    // Display all Servicelist
    useEffect(() => {
        fetch('https://morning-falls-52247.herokuapp.com/getUserServices?email=' + loggedInUser.email, {
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
        <div className="mx-3">
            <Header></Header>
            <Row>
                <Col md={4}>
                    <Sidebar></Sidebar>
                </Col>
                <Col md={8}>
                    <h4 className="ml-3">Service List</h4>
                    <Row>
                        {
                            service.length === 0 && <Col className="d-flex justify-content-center"> <div><img src={loading} alt="" /></div> </Col>
                        }
                        {
                            service.map(data => <Col  md={12} lg={5} className="m-3 p-3 box">
                                <Row>
                                    <Col>
                                        <img height={100} className="p-3 mr-1" src={`data:image/png;base64,${data.image.img}`} alt="..." />
                                    </Col>
                                    <Col>
                                        <Button className="mr-3 mt-5" variant="outline-success">{data.project}</Button>
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
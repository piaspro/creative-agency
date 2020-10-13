import React, { useContext, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { userContext } from '../../../App';
import './Service.css'


const Services = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [services, setServices] = useState([]);
    // Display all Services
    useEffect(() => {
        fetch('http://localhost:5000/getServices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    const handleInfo = (service) => {
        setLoggedInUser(service)
    }


    return (
        <div className="m-5">
            <div className="services-title">
                <h2 className="text-center">Provide Awesome <span className="text-color">Services</span></h2>
            </div>
            <div className="mt-3">
                <Row>
                    {
                        services.map(service => <Col>
                            <div className="p-3 service-info">
                                <div className="text-center">
                                    <Link to="/customer" onClick={() => handleInfo(service)}><img alt="" src={service.img} height="80" className="d-inline-block align-top" /></Link>
                                </div>
                                <div className="text-center p-3">
                                    <h5>{service.title}</h5>
                                    <p>{service.description}</p>
                                </div>
                            </div>
                        </Col>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Services;
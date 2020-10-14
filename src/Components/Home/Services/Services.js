import React, { useContext, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { userContext } from '../../../App';
import './Service.css'


const Services = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [services, setServices] = useState([]);
    console.log(services)
    // Display all Services
    useEffect(() => {
        fetch('http://localhost:5000/getServices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    const handleInfo = (data) => {
        setLoggedInUser(data)
    }


    return (
        <div className="m-5">
            <div className="services-title">
                <h2 className="text-center">Provide Awesome <span className="text-color">Services</span></h2>
            </div>
            <div className="mt-3">
                <Row>
                    {
                        services.map(data => <Col>
                            <div className="p-3 service-info">
                                <div className="text-center">
                                    <Link to="/dashboard" onClick={() => handleInfo(data)}><img height={120} className="p-3 mr-1" src={`data:image/png;base64,${data.image.img}`} alt="..." /></Link>
                                </div>
                                <div className="text-center p-3">
                                    <h5>{data.title}</h5>
                                    <p>{data.description}</p>
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
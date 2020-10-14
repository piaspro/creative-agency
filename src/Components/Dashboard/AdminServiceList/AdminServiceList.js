import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Header from '../../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

const AdminServiceList = () => {
    const [allServices, setAllServices] = useState([]);
    console.log(allServices)
    // Display all Services
    useEffect(() => {
        fetch('http://localhost:5000/getAllServices')
            .then(res => res.json())
            .then(data => setAllServices(data))
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
                    <table className="table table-borderless">
                        <thead>
                            <tr>
                                <th className="text-secondary text-left" scope="col">Name</th>
                                <th className="text-secondary" scope="col">Email ID</th>
                                <th className="text-secondary" scope="col">Service</th>
                                <th className="text-secondary" scope="col">Project Details</th>
                                <th className="text-secondary" scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allServices.map(data =>

                                    <tr>
                                        <td><strong>{data.name}</strong></td>
                                        <td>{data.email}</td>
                                        <td><strong>{data.title}</strong></td>
                                        <td>{data.description}</td>
                                        <td>"Pending"</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>

                </Col>
            </Row>

        </div>
    );
};

export default AdminServiceList;
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Header from '../../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import loading from '../../../images/Loading.gif'

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
            <h4>Service List</h4>
            <div className="card p-2 mr-2">
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
                            allServices.length === 0 && <div className="d-flex justify-content-center"> <div><img src={loading} alt="" /></div> </div>
                        }
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
            </div>
        </div>
    );
};

export default AdminServiceList;
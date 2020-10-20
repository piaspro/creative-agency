import React, { useContext, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { userContext } from '../../App';
import Header from '../Header/Header';
import AdminServiceList from './AdminServiceList/AdminServiceList';
import Order from './Order/Order';
import Sidebar from './Sidebar/Sidebar';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://morning-falls-52247.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data)
            });
    }, [])

    return (
        <div>
            <Header></Header>
            <Row>
                <Col md={4}>
                    <Sidebar></Sidebar>
                </Col>
                <Col md={8}>
                    {
                        isAdmin ? <AdminServiceList></AdminServiceList>
                            : <Order></Order>
                    }
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;
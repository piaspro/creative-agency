import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Header from '../Header/Header';
import Order from './Order/Order';
import Sidebar from './Sidebar/Sidebar';

const Dashboard = () => {

    return (
        <div>
            <Header></Header>
            <Row>
                <Col md={4}>
                    <Sidebar></Sidebar>
                </Col>
                <Col md={8}>
                    <Order></Order>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;
import React from 'react';
import Sidebar from './AdminSidebar/AdminSidebar';
import { Button } from 'react-bootstrap';
import { Col, Form, Row } from 'react-bootstrap';
import Header from '../Header/Header';

const Admin = () => {
    return (
        <div>
            <Header></Header>
            <Row>
                <Col>
                    <Sidebar></Sidebar>
                </Col>
                <Col>
                <h1>service list</h1>
                    
                </Col>
            </Row>

        </div>
    );
};

export default Admin;
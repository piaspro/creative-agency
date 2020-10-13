import React from 'react';
import { Col, Form, Media, Row } from 'react-bootstrap';
import Header from '../../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import { Button } from 'react-bootstrap';

const ServiceList = () => {
    return (
        <div>
            <Header></Header>
            <Row>
                <Col>
                    <Sidebar></Sidebar>
                </Col>
                <Col>
                    <Media className="m-3 p-3 d-sm-flex">
                        <img width={200} height={200} className="p-3 mr-1" src={data.img} alt="..." />
                        <Media.Body className="p-3">
                            <h5>{data.project}</h5>
                            <h5>{(new Date(data.startDate).toLocaleDateString(undefined, options))}</h5>
                            <Button onClick={() => deleteProject(`${data._id}`)} className="mr-3 mt-5" variant="danger">Cancel</Button>
                        </Media.Body>
                    </Media>
                </Col>
            </Row>
        </div>
    );
};

export default ServiceList;
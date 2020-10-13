import React from 'react';
import { Col, Row } from 'react-bootstrap';
import customer1 from '../../../images/customer-1.png'
import customer2 from '../../../images/customer-2.png'
import customer3 from '../../../images/customer-3.png'

const Feedbacks = [
    {
        img: `${customer1}`,
        name: "Nash patrick",
        position: "CEO,Manpal",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, voluptatibus,"
    },
    {
        img: `${customer2}`,
        name: "Nash patrick",
        position: "CEO,Manpal",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, voluptatibus,"
    },
    {
        img: `${customer3}`,
        name: "Nash patrick",
        position: "CEO,Manpal",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, voluptatibus,"
    },
]

const ClientsFeedback = () => {
    return (
        <div className="m-5">
            <div className="services-title">
                <h2 className="text-center">Clients <span className="text-color">Feedback</span></h2>
            </div>
            <div className="mt-3">
                <Row>
                    {
                        Feedbacks.map(Feedback => <Col>
                            <div className="p-3 service-info">
                                <div className="text-center d-flex p-3">
                                    <img alt="" src={Feedback.img} height="50" className="d-inline-block pr-3" />
                                    <div>
                                        <h5>{Feedback.name}</h5>
                                        <h6>{Feedback.position}</h6>
                                    </div>
                                </div>
                                <div>
                                    <p>{Feedback.description}</p>
                                </div>
                            </div>
                        </Col>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default ClientsFeedback;
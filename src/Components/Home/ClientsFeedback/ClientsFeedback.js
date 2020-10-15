import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import loading from '../../../images/Loading.gif'

const ClientsFeedback = () => {
    const [reviews, setReviews] = useState([]);
    // Display all review
    useEffect(() => {
        fetch('https://morning-falls-52247.herokuapp.com/getReview')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className="m-5">
            <div className="services-title">
                <h2 className="text-center">Clients <span className="text-color">Feedback</span></h2>
            </div>
            <div className="mt-3">
                <Row>
                    {
                        reviews.length === 0 && <Col className="d-flex justify-content-center"> <div><img src={loading} alt="" /></div> </Col>
                    }
                    {
                        reviews.map(review => <Col>
                            <div className="p-3 service-info">
                                <div className="text-center d-flex p-3">
                                    <img alt="" src={review.photo} height="50" className="d-inline-block pr-3" />
                                    <div>
                                        <h5>{review.name}</h5>
                                        <h6>{review.position}</h6>
                                    </div>
                                </div>
                                <div>
                                    <p>{review.description}</p>
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
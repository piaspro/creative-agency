import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import Header from '../Header/Header';
import frame from '../../images/logos/Frame.png'
import img1 from '../../images/logos/airbnb.png'
import img2 from '../../images/logos/google.png'
import img3 from '../../images/logos/netflix.png'
import img4 from '../../images/logos/slack.png'
import img5 from '../../images/logos/uber.png'
import './Home.css'
import Services from './Services/Services';
import OurWorks from './OurWorks/OurWorks';
import ClientsFeedback from './ClientsFeedback/ClientsFeedback';
import Footer from './Footer/Footer';

const Home = () => {
    return (
        <div>
            <div className="back-img">
                <Container className="element">
                    <Header></Header>
                    <Row className="pb-5 mb-3 ">
                        <Col md={6}>
                            <div className="p-5 info-text">
                                <h1> Let's Grow Your <br /> Brand To The <br /> Next Level</h1>
                                <p> Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit. Est, voluptatibus, repudiandae <br /> sequi voluptate sunt accusamus totam </p>
                                <Button variant="dark">Hire Us</Button>
                            </div>
                        </Col>
                        <Col md={6}>
                            <Image alt="" src={frame} height="400" className="d-inline-block align-top" fluid />
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col md={2} className="m-2 d-flex justify-content-center">
                        <img alt="" src={img1} height="40" className="d-inline-block" />
                    </Col>
                    <Col md={2} className="m-2 d-flex justify-content-center">
                        <img alt="" src={img2} height="40" className="d-inline-block" />
                    </Col>
                    <Col md={2} className="m-2 d-flex justify-content-center">
                        <img alt="" src={img3} height="40" className="d-inline-block" />
                    </Col>
                    <Col md={2} className="m-2 d-flex justify-content-center">
                        <img alt="" src={img4} height="40" className="d-inline-block" />
                    </Col>
                    <Col md={2} className="m-2 d-flex justify-content-center">
                        <img alt="" src={img5} height="40" className="d-inline-block" />
                    </Col>
                </Row>
            </Container>
            <Container>
                <Services></Services>
            </Container>
            <section>
                <OurWorks></OurWorks>
            </section>
            <Container>
                <ClientsFeedback></ClientsFeedback>
            </Container>
            <section>
                <Footer></Footer>
            </section>
        </div>
    );
};

export default Home;
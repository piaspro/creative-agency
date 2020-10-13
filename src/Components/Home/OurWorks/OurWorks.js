import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-elastic-carousel';
import carouselimg1 from '../../../images/carousel-1.png'
import carouselimg2 from '../../../images/carousel-2.png'
import carouselimg3 from '../../../images/carousel-3.png'
import carouselimg4 from '../../../images/carousel-4.png'
import carouselimg5 from '../../../images/carousel-5.png'
import './OurWorks.css'

const items = [
    {
        id: 1,
        img: `${carouselimg1}`,
    },
    {
        id: 2,
        img: `${carouselimg2}`,
    },
    {
        id: 3,
        img: `${carouselimg3}`,
    },
    {
        id: 4,
        img: `${carouselimg4}`,
    },
    {
        id: 5,
        img: `${carouselimg5}`,
    }
];
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1000, itemsToShow: 3 },
    { width: 1200, itemsToShow: 5 }
];
const OurWorks = () => {

    return (
        <div className="background-color">
            <Container>
                <div className="work-title">
                    <h3 className="text-center">Here Are Some Of <span className="text-color"> Our Works</span></h3>
                </div>
                <div>
                    <Carousel breakPoints={breakPoints}>
                        {items.map(item => <div key={item.id}>
                            <div className="p-3">
                                <img alt="" src={item.img} height="200" className="d-inline-block align-top" />
                            </div>
                        </div>
                        )}
                    </Carousel>
                </div>
            </Container>
        </div>
    );
};

export default OurWorks;
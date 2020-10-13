import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faLuggageCart, faInbox } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Sidebar = () => {
    return (
        <Container>
            <Link to="/customer"><FontAwesomeIcon icon={faShoppingCart} /> Order</Link> <br/>
            <Link to="/servicelist"><FontAwesomeIcon icon={faLuggageCart} /> Service List</Link> <br/>
            <Link to="/review"><FontAwesomeIcon icon={faInbox} /> Review</Link>
        </Container>
    );
};

export default Sidebar;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faLuggageCart, faInbox, faPlus, faUserPlus} from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Sidebar = () => {
    return (
        <Container>
            <Link to="/order"><FontAwesomeIcon icon={faShoppingCart} /> Order</Link> <br/>
            <Link to="/servicelist"><FontAwesomeIcon icon={faLuggageCart} /> Service List</Link> <br/>
            <Link to="/review"><FontAwesomeIcon icon={faInbox} /> Review</Link> <br/>
            <Link to="adminServiceList"><FontAwesomeIcon icon={faLuggageCart} /> Service List</Link> <br/>
            <Link to="addService"><FontAwesomeIcon icon={faPlus} /> Add Service</Link> <br/>
            <Link to="makeAdmin"><FontAwesomeIcon icon={faUserPlus} /> Make Admin</Link>
        </Container>
    );
};

export default Sidebar;
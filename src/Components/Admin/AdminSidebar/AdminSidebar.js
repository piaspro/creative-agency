import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faLuggageCart, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const AdminSidebar = () => {
    return (
        <Container>
            <Link to="admin"><FontAwesomeIcon icon={faLuggageCart} /> Service List</Link> <br/>
            <Link to="adminService"><FontAwesomeIcon icon={faPlus} /> Add Service</Link> <br/>
            <Link to="makeAdmin"><FontAwesomeIcon icon={faUserPlus} /> Make Admin</Link>
        </Container>
    );
};

export default AdminSidebar;
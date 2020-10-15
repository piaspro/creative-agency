import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faLuggageCart, faInbox, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { userContext } from '../../../App';
import './Sidebar.css'

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isUser, setIsUser] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/isUser', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsUser(data));
    }, [])
    return (
        <Container className="ml-5 mt-5 sidebar">
            {
                isUser && <div>
                    <Link to="/order"><FontAwesomeIcon icon={faShoppingCart} /> Order</Link> <br /> <br />
                    <Link to="/servicelist"><FontAwesomeIcon icon={faLuggageCart} /> Service List</Link> <br /> <br />
                    <Link to="/review"><FontAwesomeIcon icon={faInbox} /> Review</Link> <br /> <br />
                </div>
            }
            {
                isAdmin && <div>
                    <Link to="adminServiceList"><FontAwesomeIcon icon={faLuggageCart} /> Service List</Link> <br /> <br />
                    <Link to="addService"><FontAwesomeIcon icon={faPlus} /> Add Service</Link> <br /> <br />
                    <Link to="makeAdmin"><FontAwesomeIcon icon={faUserPlus} /> Make Admin</Link>
                </div>
            }
        </Container>
    );
};

export default Sidebar;
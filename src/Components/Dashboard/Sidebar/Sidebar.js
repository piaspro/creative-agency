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
    // handle admin
    useEffect(() => {
        fetch('https://morning-falls-52247.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])
    // handle user
    useEffect(() => {
        fetch('https://morning-falls-52247.herokuapp.com/isUser', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsUser(data));
    }, [])

    return (
        <Container className="ml-5 mt-5">
            {
                isUser && <div>
                    <Link to="/order" className="activeColor"><FontAwesomeIcon icon={faShoppingCart} /> Order</Link> <br /> <br />
                    <Link to="/servicelist" className="activeColor"><FontAwesomeIcon icon={faLuggageCart} /> Service List</Link> <br /> <br />
                    <Link to="/review" className="activeColor"><FontAwesomeIcon icon={faInbox} /> Review</Link> <br /> <br />
                </div>
            }
            {
                isAdmin && <div>
                    <Link to="adminServiceList" className="activeColor"><FontAwesomeIcon icon={faLuggageCart} /> Service List</Link> <br /> <br />
                    <Link to="addService" className="activeColor"><FontAwesomeIcon icon={faPlus} /> Add Service</Link> <br /> <br />
                    <Link to="makeAdmin" className="activeColor"><FontAwesomeIcon icon={faUserPlus} /> Make Admin</Link>
                </div>
            }
        </Container>
    );
};

export default Sidebar;
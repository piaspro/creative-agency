import React, { useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logo from '../../images/logos/logo.png'
import Button from 'react-bootstrap/Button'
import './Header.css'
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import * as firebase from "firebase/app";

const Header = () => {
    const [loggedInUser, SetLoggedInUser] = useContext(userContext);
    const handleSignOut = () => {
        firebase.auth().signOut()
            .then(res => {
                const signedOutUser = {
                    isSignedIn: false,
                    name: '',
                    email: '',
                    photo: '',
                    error: ''
                };
                SetLoggedInUser(signedOutUser);

            }).catch((error) => {
            });
    }
    return (
        <div>
            <Navbar bg="transparent" expand="lg">
                <Navbar.Brand href="#home">
                    <img alt="" src={logo} height="40" className="d-inline-block align-top" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto d-flex align-items-center">
                        <Link className="mr-5 text" to="/home">Home</Link>
                        <Link className="mr-5 text" to="/dashboard">Our Portfolio</Link>
                        <Link className="mr-5 text" to="/dashboard">Our Team</Link>
                        <Link className="mr-5 text" to="/dashboard">Contact Us</Link>
                        {loggedInUser.isSignedIn ?
                            <Button className="px-3 mr-5" variant="danger" onClick={handleSignOut} >Log Out</Button>
                            : <Link to="/login"><Button className="px-3 mr-5" variant="dark">Log In</Button></Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
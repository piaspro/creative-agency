import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import './Login.css'
import logo from '../../images/logos/logo.png'
import google from '../../images/icons/google.png'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [user, setUser] = useState({
        name: '',
        googleError: ''
    })

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    // Google Sign In
    const googleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                // The signed-in user info.
                const { displayName, email, photoURL } = result.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                };
                const userInfo = { ...loggedInUser, ...signedInUser }
                setLoggedInUser(userInfo);
                setUser(userInfo);
                storeAuthToken()
                history.replace(from);
            }).catch((error) => {
                const newInfo = { ...user }
                newInfo.googleError = error.message;
                setUser(newInfo);
            });
    }
    // Use of token for authentication
    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(true)
            .then((idToken) => {
                sessionStorage.setItem('token', idToken)
            }).catch((error) => {
                // Handle error
                console.log(error)
            });
    }
    return (
        <div>
            <div className="img">
                <img src={logo} height="50" className="img" alt="logo" />
            </div>
            <Container fluid className="d-flex justify-content-center">
                <div className="logIn">
                    <h2>Log In</h2>
                    <button onClick={googleSignIn} className="signIn"> <img className="icon mr-5" src={google} alt='' /> Sign In With google </button>
                    <h6>Don't Have a account?</h6>
                    <p className="warning">{user.googleError}</p>
                </div>
            </Container>
        </div>
    );
};

export default Login;
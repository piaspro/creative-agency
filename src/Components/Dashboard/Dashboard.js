import React, { useContext, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { userContext } from '../../App';
import Header from '../Header/Header';
import AdminServiceList from './AdminServiceList/AdminServiceList';
import Order from './Order/Order';
import Sidebar from './Sidebar/Sidebar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
    const notify = () => toast.success('🦄 Log in Successful', {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isUser, setIsUser] = useState(false);

    useEffect(() => {
        fetch('https://morning-falls-52247.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])

    useEffect(() => {
        fetch('https://morning-falls-52247.herokuapp.com/isUser', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => {
                setIsUser(data)
                notify()
            });
    }, [])

    return (
        <div>
            <Header></Header>
            <div>
                <ToastContainer
                    position="top-left"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </div>
            <Row>
                <Col md={4}>
                    <Sidebar></Sidebar>
                </Col>
                <Col md={8}>
                    {
                        isUser && <Order></Order>
                    }
                    {
                        isAdmin && <AdminServiceList></AdminServiceList>
                    }
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;
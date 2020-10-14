import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AdminServiceList from './Components/Dashboard/AdminServiceList/AdminServiceList';
import AddService from './Components/Dashboard/AddService/AddService';
import MakeAdmin from './Components/Dashboard/MakeAdmin/MakeAdmin';
import Dashboard from './Components/Dashboard/Dashboard';
import AddReview from './Components/Dashboard/AddReview/AddReview';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import ServiceList from './Components/Dashboard/ServiceList/ServiceList';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Order from './Components/Dashboard/Order/Order';

// export data
export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <PrivateRoute path="/dashboard">
          <Dashboard/>
        </PrivateRoute>
        <Route path="/order">
          <Dashboard/>
        </Route>
        <Route path="/servicelist">
          <ServiceList/>
        </Route>
        <Route path="/review">
          <AddReview/>
        </Route>
        <Route path="/adminServiceList">
          <AdminServiceList/>
        </Route>
        <Route path="/addService">
          <AddService/>
        </Route>
        <Route path="/makeAdmin">
          <MakeAdmin/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
    </userContext.Provider>
  );
}

export default App;

import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AddService from './Components/Dashboard/AddService/AddService';
import MakeAdmin from './Components/Dashboard/MakeAdmin/MakeAdmin';
import Dashboard from './Components/Dashboard/Dashboard';
import AddReview from './Components/Dashboard/AddReview/AddReview';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import ServiceList from './Components/Dashboard/ServiceList/ServiceList';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

// export data
export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/order">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/servicelist">
            <ServiceList />
          </PrivateRoute>
          <PrivateRoute path="/review">
            <AddReview />
          </PrivateRoute>
          <PrivateRoute path="/adminServiceList">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddService />
          </PrivateRoute>
          <PrivateRoute path="/makeAdmin">
            <MakeAdmin />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
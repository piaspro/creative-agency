import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Admin from './Components/Admin/Admin';
import AdminService from './Components/Admin/AdminService/AdminService';
import MakeAdmin from './Components/Admin/MakeAdmin/MakeAdmin';
import CustomerSection from './Components/CustomerSection/CustomerSection';
import Review from './Components/CustomerSection/Review/Review';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import ServiceList from './Components/CustomerSection/ServiceList/ServiceList';
// import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

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
        <Route path="/customer">
          <CustomerSection/>
        </Route>
        <Route path="/servicelist">
          <ServiceList/>
        </Route>
        <Route path="/review">
          <Review/>
        </Route>
        <Route path="/admin">
          <Admin/>
        </Route>
        <Route path="/adminService">
          <AdminService/>
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

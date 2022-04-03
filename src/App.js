import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import About from "./components/layout/About";
import Home from "./components/Home";

// Auth or User imports
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Profile from "./components/user/Profile";
import UpdateProfile from "./components/user/UpdateProfile";
import UpdatePassword from "./components/user/UpdatePassword";

import Donor from './components/donor/Donor';
import Request from "./components/requestor/RequestorHome";
import CreateRequestor from './components/requestor/CreateRequestor';
import SelectDonor from "./components/requestor/SelectDonor";
import SendRequest from "./components/donor/SendRequest";
import GetDonor from "./components/requestor/GetDonor";

import ForgotPassword from "./components/user/ForgotPassword";
import NewPassword from "./components/user/NewPassword";

import ProtectedRoute from "./components/route/ProtectedRoute";
import { loadUser } from "./actions/userActions";
import { useSelector } from "react-redux";
import store from "./store";
import Donatefund from "./components/layout/Donatefund";

function App() {

  
  useEffect(() => {
    // navigator.geolocation.getCurrentPosition((position)=>{
    //   console.log(position);


    // })
    store.dispatch(loadUser());
  }, []);
  const { user, isAuthenticated, loading } = useSelector((state) => state.auth);

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container container-fluid">
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route exact path="/about" component={About} />
          <Route path="/register" component={Register} />
          <Route path="/password/forgot" component={ForgotPassword} exact />
          <Route path="/password/reset/:token" component={NewPassword} exact />

          <ProtectedRoute path="/donatefund" component={Donatefund} />

          <ProtectedRoute path="/donar" component={Donor} user={user}/>
          <ProtectedRoute path="/donor/requestor" component={SendRequest}/>

          <ProtectedRoute path="/request" component={Request} />
          <ProtectedRoute path="/Createrequest" component={CreateRequestor} />
          <ProtectedRoute path="/selectdonor" component={SelectDonor} />
          <ProtectedRoute path="/getdonor" component={GetDonor} />
          
          <ProtectedRoute path="/me" component={Profile} exact />
          <ProtectedRoute path="/me/update" component={UpdateProfile} exact />
          <ProtectedRoute
            path="/password/update"
            component={UpdatePassword}
            exact
          />
        </div>

        {!loading && (!isAuthenticated || user.role !== "admin") && <Footer />}
      </div>
    </Router>
  );
}

export default App;

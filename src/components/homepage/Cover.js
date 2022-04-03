import React from "react";
import { Route, Link } from "react-router-dom";


//import css
import "./Cover.css";

const Cover = () => {
  return (
    <div className="cover-main">
      <div className="cover-container row">
        <div className="cover-link col-lg-4 col-md-6 col-xs-12">
          <Link className="btn" id="login_btn" to="/donatefund">
            Donate Funds
          </Link>
        </div>
        <div className="cover-link col-lg-4 col-md-6 col-xs-12">
          <Link to="/donar" className="btn" id="login_btn">
            Donate
          </Link>
        </div>
        <div className="cover-link col-lg-4 col-md-6 col-xs-12">
          <Link to="/request" className="btn" id="login_btn">
            Request
          </Link>
        </div>
        <div className="cover-text">
          
        </div>
      </div>
    </div>
  );
};

export default Cover;

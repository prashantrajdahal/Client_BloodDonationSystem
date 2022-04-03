import React from "react";
import { Link } from "react-router-dom";
import "./RequestorHome.css";

const RequestorHome = () => {
  return (
    <div className="requestor-main">
      <div className="requestor-container row">
        <div className="requestor-link col-lg-4 col-md-6 col-xs-12">
          <Link className="btn" id="login_btn" to="/createrequest">Create Request</Link>
        </div>
        <div className="requestor-link col-lg-4 col-md-6 col-xs-12">
          <Link className="btn" id="login_btn" to="/getdonor">Donor Details</Link>
        </div>
      </div>
    </div>
  );
};
export default RequestorHome;

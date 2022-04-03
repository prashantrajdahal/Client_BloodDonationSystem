import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import DonorMap from "./DonorMap";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import Loader from "../layout/Loader";
import { checkIfRequested } from "../../actions/donorActions";


const Donor = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, requestor, error } = useSelector(
    (state) => state.requestDonor
  );

  useEffect(() => {
    if (error) {
      return alert.error(error);
    }
    dispatch(checkIfRequested());
  }, [dispatch, error, alert]);
  const { user} = useSelector((state) => state.auth);
  console.log(`Hello ${requestor}`);
  return (
    <>
      <h1>Donor</h1>
      <DonorMap  />
      <>
        {loading ? (
          <Loader />
        ) : (
          
          <>
            <h1>Send Request</h1>
            {user && user.requestor !== null && (
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Requestor Details</h5>
                      <p className="card-text">
                        <strong>Name:</strong> {requestor.patientName}
                      </p>
                      <p className="card-text">
                        <strong>Phone no:</strong> {requestor.phoneNumber}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            )}
            {user && user.requestor === null && (
              <div className="container text-center">
                <h3>There is no request yet.</h3>
              </div>
            )}
          </>
        )}
      </>
    </>
  );
};

export default Donor;

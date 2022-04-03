import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import Loader from "../layout/Loader";
import { checkIfRequested } from "../../actions/donorActions";

const SendRequest = () => {
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
  console.log(`Hello ${requestor}`);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
            <h1>Send Request</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Requestor Details</h5>
                                <p className="card-text">
                                    <strong>Name:</strong> {requestor.patientName}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
      )}
    </>
  );
};

export default SendRequest;

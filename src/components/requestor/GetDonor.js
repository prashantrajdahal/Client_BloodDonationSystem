import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import Loader from "../layout/Loader";

import { getDonor,deleteDonor } from "../../actions/requestorActions";

const GetDonor = ({history}) => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, donor, error } = useSelector((state) => state.getDonorRequestor);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (error) {
      return alert.error(error);
    }
    dispatch(getDonor());
  }, [dispatch, error, alert]);
  console.log(`Hello ${donor}`);
  const deleteDonorHandler = () => {

    dispatch(deleteDonor())
    .then(() => {
        history.push("/");
        }
    )
}
  return (
    <>
      <h1>Donor</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Donor Details</h5>
                {user && user.donorIsSelected === true && (
                <> 
                <p className="card-text">
                  <strong>Name:</strong> {donor.name}
                </p>
                <p className="card-text">
                  <strong>Phone no:</strong> {donor.phoneNumber}
                </p>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={deleteDonorHandler}
                    >
                    Confirm/Delete
                </button>
                </> 
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetDonor;

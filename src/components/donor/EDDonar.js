import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { enableDonor,disabledonor } from "../../actions/donorActions";
import { Redirect } from "react-router";

const EDDonar = ({ lat, lng,history }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { sucess, error } = useSelector((state) => state.enableDonor);

  useEffect(() => {
    if (error) {
      alert.error("Error Enabling Donor");
    }
    if (sucess) {
      alert.success("Donor Enable Sucessfully");
    }
  });
  const { user, loading } = useSelector((state) => state.auth);
  const onclickdonor = (lat, lng) => {
    const location = {
      type: "Point",
      coordinates: [lat, lng],
    };
    const newUserData = {
      donate: true,
      location,
    };
    dispatch(enableDonor(newUserData));
  };
  return (
    <div className="text-center p-2">
      {user && user.donate === false && (
        <button
          className="btn btn-success"
          onClick={() => onclickdonor(lat, lng)}
        >
          Enable Donor
        </button>
      )}
      {user && user.donate === true && (
        <button
          className="btn btn-danger"
          onClick={() => dispatch(disabledonor())}
        >
          Disable Donor
        </button>
      )}
    </div>
  );
};

export default EDDonar;

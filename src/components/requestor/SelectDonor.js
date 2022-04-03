import React, { Fragment, useEffect, useState } from "react";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { donorRequestor, selectDonor } from "../../actions/requestorActions";
import Googlemap from "../googleMap/Googlemap";
import "./SelectDonor.css";

const SelectDonor = ({ history }) => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, donors, error } = useSelector(
    (state) => state.donorsRequestor
  );
  const { success } = useSelector((state) => state.selectdonor);

  useEffect(() => {
    if (error) {
      alert.error(error);
    }
    if (success) {
      alert.success(success);
      history.push("/request");
    }
    dispatch(donorRequestor());
  }, [success, history, alert, error, dispatch]);

  const selectClickedDonor = (donor) => {
    const donorData = {
      donor: donor,
      status: "booked",
    };
    dispatch(selectDonor(donorData));
  };
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={"Select one donor"} />
          <div className="donor-container">
            <h2>List of Donors which you can use</h2>
            <div className="row ">
              {donors.map((donor) => (
                <div key={donor._id} className="col-12 donor">
                  <Googlemap
                    center={{
                      lat: donor.location.coordinates[1],
                      lng: donor.location.coordinates[0],
                    }}
                    lat={donor.location.coordinates[0]}
                    lng={donor.location.coordinates[1]}
                    name={donor.institutionName}
                  />
                  <h3 className="text-center">{donor.name}</h3>
                  <p className="text-center">{donor.email}</p>
                  {console.log(donor._id)}

                  <button
                    className="btn btn-primary"
                    onClick={() => selectClickedDonor(donor._id)}
                  >
                    Select
                  </button>
                </div>
              ))}
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default SelectDonor;

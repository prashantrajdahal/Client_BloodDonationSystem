import React, { Fragment, useState, useEffect } from "react";
import MetaData from "../layout/MetaData";

import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";

import { clearErrors, createRequestor } from "../../actions/requestorActions";
import { Create_Requestor_Reset } from "../../constants/requestorConstants";
import { getInstitutions } from "../../actions/institutionActions";

const CreateRequestor = ({ history }) => {
  const [requestor, setRequestor] = useState({
    patientName: "",
    email: "",
    phoneNumber: "",
    requireBloodType: "",
    covidStatus: "",
    institutionId: "",
    referCode: "",
  });

  const {
    patientName,
    email,
    phoneNumber,
    requireBloodType,
    covidStatus,
    institutionId,
    referCode,
  } = requestor;

  const alert = useAlert();
  const dispatch = useDispatch();

  const {
    loading,
    success,
    error,
  } = useSelector((state) => state.newRequestor);

  const { institutions } = useSelector((state) => state.institutions);

  // use effect on sucess and error
  useEffect(() => {
    console.log(`This is error:${error}`);
    if (error) {
      alert.error(error);
      
      dispatch(clearErrors())
  }
    if (success) {
      alert.success("Requestor created successfully");
      history.push("/selectdonor");
      dispatch({type: Create_Requestor_Reset});
    }
    dispatch(getInstitutions());
  }, [success, error, alert, dispatch, history]);

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.set("patientName", patientName);
    formData.set("email", email);
    formData.set("phoneNumber", phoneNumber);
    formData.set("requireBloodType", requireBloodType);
    formData.set("covidStatus", covidStatus);
    formData.set("institutionId", institutionId);
    formData.set("referCode", referCode);
    dispatch(createRequestor(formData));
  };
  const onChange = (e) => {
    setRequestor({ ...requestor, [e.target.name]: e.target.value });
  };

  return (
    <Fragment>
      <MetaData title="Create Requestor" description="Create Requestor" />
      <div className="row wrapper">
        <div className="col-10 col-lg-5">
          <form
            className="shadow-lg p-3 mb-5 bg-white rounded"
            onSubmit={submitHandler}
            encType="multipart/form-data"
          >
            <h1 className="mb-3 ">Create Requestor</h1>

            <div className="form-group">
              <label htmlFor="email_field">Patient Name</label>
              <input
                type="name"
                id="patientName"
                className="form-control"
                name="patientName"
                value={patientName}
                onChange={onChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email_field">Email</label>
              <input
                type="email"
                id="email_field"
                className="form-control"
                name="email"
                value={email}
                onChange={onChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone_field">Phone Number</label>
              <input
                type="phone"
                id="phone_field"
                className="form-control"
                name="phoneNumber"
                value={phoneNumber}
                onChange={onChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="blood_type">Blood Type</label>
              <select
                id="blood_type"
                className="form-control"
                name="requireBloodType"
                value={requireBloodType}
                onChange={onChange}
                required
              >
                <option value="">Select Blood Type</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="covid_status">Covid Status</label>
              <select
                id="covid_status"
                className="form-control"
                name="covidStatus"
                value={covidStatus}
                //select options onchange
                onChange={onChange}
                required
              >
                <option value="">Select Covid Status</option>
                <option value="Positive">Positive</option>
                <option value="Negative">Negative</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="institution_id">Institution</label>

              <select
                id="institution_id"
                className="form-control"
                name="institutionId"
                value={institutionId}
                onChange={onChange}
                required
              >
                <option value="">Select Institution</option>
                {institutions.map((institution) => (
                  <option key={institution._id} value={institution._id}>
                    {institution.institutionName}
                    {console.log(institution._id, institution.name)}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="refer_code">Refer Code</label>
              <input
                type="refer_code"
                id="refer_code"
                className="form-control"
                name="referCode"
                value={referCode}
                onChange={onChange}
                required
              />
            </div>

            <button
              id="register_button"
              type="submit"
              className="btn btn-block py-3"
              disabled={loading ? true : false}
            >
              Create Requestor
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default CreateRequestor;

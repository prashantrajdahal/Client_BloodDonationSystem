import React, { useEffect, Fragment } from "react";
import { useSelector } from "react-redux";

function Request() {
  const { user, loading } = useSelector((state) => state.auth);
  return (
    <div className="Request-container">
      <div>
        <Fragment>
          {user ? (
            <div>
              <div className="row wrapper">
                <div className="col-10">
                  <form className="shadow-lg" encType="multipart/form-data">
                    <h1 className="mb-3">Request</h1>

                    <div className="form-group">
                      <label htmlFor="email_field">Name</label>
                      <input
                        type="name"
                        id="name_field"
                        className="form-control"
                        name="name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email_field">Email</label>
                      <input
                        type="email"
                        id="email_field"
                        className="form-control"
                        name="email"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="bloodType_field">bloodType</label>
                      <input
                        type="text"
                        id="bloodType_field"
                        className="form-control"
                        name="bloodType"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="bloodType_field">Address</label>
                      <input
                        type="text"
                        id="address_field"
                        className="form-control"
                        name="bloodType"
                      />
                    </div>
                    <button
                      id="submit-button"
                      type="submit"
                      className="btn btn-block py-3"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          ) : (
            !loading && (
              <div>
                <button
                  id="submit-button"
                  type="submit"
                  className="btn btn-block py-3"
                  // style={{color:"#000", fontSize:"40px"}}
                >
                  click here to login first!!
                </button>
              </div>
            )
          )}
        </Fragment>
      </div>
      <div>
      </div>
    </div>
  );
}

export default Request;

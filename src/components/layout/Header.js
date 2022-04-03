import React, { Fragment } from "react";
import { Route, Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { logout } from "../../actions/userActions";

import "../../App.css";

const Header = ({history}) => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const { user, loading } = useSelector((state) => state.auth);

  const logoutHandler = () => {
    dispatch(logout());
    alert.success("Logged out successfully Refresh the page.");
    history.push("/");
  };

  return (
    <Fragment>
      <nav className="navbar row">
        <div className="col-12 col-md-3">
          <div className="navbar-brand">
            <Link to="/">
              <img
                src="/images/logo.jpg"
                alt="logo"
                height="50"
                width="50"
                style={{
                  borderRadius: "50%",
                  border: "1px solid black",
                }}
              />
            </Link>
          </div>
        </div>
        <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
          {user ? (
            <div className=" dropdown">
              <Link
                to="#!"
                className="btn dropdown-toggle text-white"
                type="button"
                id="dropDownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
              >
                <figure className="avatar avatar-nav">
                  <img
                    src={user.avatar && user.avatar.url}
                    alt={user && user.name}
                    className="rounded-circle"
                  />
                </figure>
                <span>{user && user.name}</span>
              </Link>

              <div
                className="dropdown-menu"
                aria-labelledby="dropDownMenuButton"
              >
                {user && user.role === "admin" && (
                  <Link className="dropdown-item" to="/dashboard">
                    Dashboard
                  </Link>
                )}
                <Link className="dropdown-item" to="/me">
                  Profile
                </Link>

                <Link
                  className="dropdown-item text-danger"
                  to="/"
                  onClick={logoutHandler}
                >
                  Logout
                </Link>
              </div>
              <div className="btn-group"></div>
            </div>
          ) : (
            !loading && (
              <div className="btn-group">
                <Link to="/login" className="btn ml-3" id="login_btn">
                  Login
                </Link>
              </div>
            )
          )}
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;

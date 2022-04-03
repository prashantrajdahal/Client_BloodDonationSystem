import React, { Fragment, useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import MetaData from "./layout/MetaData";
import Institution from "./institution/Institution";
import Loader from "./layout/Loader";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { getInstitutions } from "../actions/institutionActions";

import Cover from "./homepage/Cover";
import Content from "./homepage/Content";
import { Carousel } from "react-bootstrap";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const { loading, institutions, error } = useSelector(
    (state) => state.institutions
  );
  useEffect(() => {
    if (error) {
      return alert.error(error);
    }

    dispatch(getInstitutions());
  }, [dispatch, alert, error]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={"welcome to blood donation management system"} />
          <div className="home-container">
            <Cover />
            <Content />

            <div className="row">
              {institutions.map((institution) => (
                <Institution key={institution._id} institution={institution} />
              ))}
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
};
export default Home;

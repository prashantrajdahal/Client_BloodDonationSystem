import axios from "axios";
import {
  Create_Requestor_Request,
  Create_Requestor_Success,
  Create_Requestor_Fail,
  Donor_Requestor_Request,
  Donor_Requestor_Success,
  Donor_Requestor_Fail,
  Select_Donor_Request,
  Select_Donor_Success,
  Select_Donor_Fail,
  Get_Donor_Request,
  Get_Donor_Success,
  Get_Donor_Fail,
  Delete_Donor_Request,
  Delete_Donor_Success,
  Delete_Donor_Fail,
  CLEAR_ERRORS,
} from "../constants/requestorConstants";

//create requestor
export const createRequestor = (requestorData) => async (dispatch) => {
  try {
    dispatch({ type: Create_Requestor_Request });
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const { data } = await axios.post(
      "/api/v1/request/new",
      requestorData,
      config
    );
    dispatch({
      type: Create_Requestor_Success,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: Create_Requestor_Fail,
      payload: error.response.data.errMessage,
    });
  }
};

//donor list
export const donorRequestor = () => async (dispatch) => {
  try {
    dispatch({ type: Donor_Requestor_Request });
    const { data } = await axios.get("/api/v1/request/donar");
    dispatch({ type: Donor_Requestor_Success, payload: data });
  } catch (error) {
    dispatch({
      type: Donor_Requestor_Fail,
      payload: error.response.data.errMessage,
    });
  }
};

//select donor
export const selectDonor = (donorData) => async (dispatch) => {
  try {
    //send single data to server
    console.log(`donor is ${donorData}`);
    dispatch({ type: Select_Donor_Request });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.put(
      "/api/v1/request/donar/select",
      donorData,
      config
    );
    dispatch({ type: Select_Donor_Success, payload: data });
  } catch (error) {
    dispatch({
      type: Select_Donor_Fail,
      payload: error.response.data.errMessage,
    });
  }
};

//get donor
export const getDonor = () => async (dispatch) => {
  try {
    dispatch({ type: Get_Donor_Request });
    const { data } = await axios.get("/api/v1/request/details");
    dispatch({ type: Get_Donor_Success, payload: data });
  } catch (error) {
    dispatch({
      type: Get_Donor_Fail,
      payload: error.response.data.errMessage,
    });
  }
};

//delete donor
export const deleteDonor = () => async (dispatch) => {
  try {
    dispatch({ type: Delete_Donor_Request });
    const { data } = await axios.delete("/api/v1/request/delete");
    dispatch({ type: Delete_Donor_Success, payload: data.success });
  } catch (error) {
    dispatch({
      type: Delete_Donor_Fail,
      payload: error.response.data.errMessage,
    });
  }
};

// Clear Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};

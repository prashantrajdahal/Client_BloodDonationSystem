import axios from "axios";
import {
  Enable_Donar_Request,
  Enable_Donar_Success,
  Enable_Donar_Fail,
  Disable_Donar_Request,
  Disable_Donar_Success,
  Disable_Donar_Fail,
  Get_Requestor_Request,
  Get_Requestor_Success,
  Get_Requestor_Fail
} from "../constants/donorConstants";



export const enableDonor = (donorData) => async (dispatch) => {
  try {
    dispatch({ type: Enable_Donar_Request });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.put(
      "/api/v1/enableDonation",
      donorData,
      config
    );
    dispatch({ type: Enable_Donar_Success, payload: data });
  } catch (error) {
    dispatch({
      type: Enable_Donar_Fail,
      payload: error.response.data.errMessage,
    });
  }
};

//disable donor -get 
export const disabledonor = () => async (dispatch) => {
  try {
    dispatch({ type: Disable_Donar_Request });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(
      "/api/v1//disableDonation",
      config
    );
    dispatch({ type: Disable_Donar_Success, payload: data });
  } catch (error) {
    dispatch({
      type: Disable_Donar_Fail,
      payload: error.response.data.errMessage,
    });
  }
}

    ///checkIfRequested -get
    export const checkIfRequested = () => async (dispatch) => {
      try{
        dispatch({ type: Get_Requestor_Request });
        const { data } = await axios.get("/api/v1/checkIfRequested");
        dispatch({ type: Get_Requestor_Success, payload: data });
      }
      catch(error){
        dispatch({ type: Get_Requestor_Fail, payload: error.response.data.errMessage });
      }
    }

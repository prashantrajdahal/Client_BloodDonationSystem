import axios from 'axios';
import {
  All_Institutions_Fail,
  All_Institutions_Request,
  All_Institutions_Success,
  Create_Institution_Request,
  Create_Institution_Success,
  Create_Institution_Fail,
  CLEAR_ERRORS,
} from "../constants/institutionConstants";


//Create Institution
export const createInstitution = (institutionData) => async (dispatch) => {
  try {
    dispatch({ type: Create_Institution_Request });
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const { data } = await axios.post(
      "/api/v1/institution/create",
      institutionData,
      config
    );
    dispatch({
      type: Create_Institution_Success,
      payload: data.institution,
    });
  } catch (error) {
    dispatch({
      type: Create_Institution_Fail,
      payload: error.response.data.message,
    });
  }
};
//get all institution list
export const getInstitutions = () => async (dispatch) => {
  
  try {
    dispatch({ type: All_Institutions_Request });
    let link = `/api/v1/getAllInstitution`
    const {data} = await axios.get(link);
    
    dispatch({ type: All_Institutions_Success, payload: data});
  } catch (err) {
    dispatch({ type: All_Institutions_Fail, payload: err.response.data.msg });
  }
};



// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}
import {
  Create_Requestor_Request,
  Create_Requestor_Success,
  Create_Requestor_Fail,
  Create_Requestor_Reset,
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

export const createRequestorReducer = (state = { requestor: {} }, action) => {
  switch (action.type) {
    case Create_Requestor_Request:
      return {
        ...state,
        loading: true,
      };
    case Create_Requestor_Success:
      return {
        loading: false,
        success: action.payload.success,
        requestor: action.payload.requestor,
      };

    case Create_Requestor_Fail:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case Create_Requestor_Reset:
      return {
        ...state,
        success: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

//all donors
export const donorRequestorReducer = (state = { donors: [] }, action) => {
  switch (action.type) {
    case Donor_Requestor_Request:
      return {
        ...state,
        loading: true,
      };
    case Donor_Requestor_Success:
      return {
        loading: false,
        donors: action.payload.donor,
      };

    case Donor_Requestor_Fail:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
}

//select donor
export const selectDonorReducer = (state = { donor: [] }, action) => {
  switch (action.type) {
    case Select_Donor_Request:
      return {
        ...state,
        loading: true,
      };
    case Select_Donor_Success:
      return {
        loading: false,
        donor: action.payload.donor,
        success: true,
      };

    case Select_Donor_Fail:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
}

//get donor
export const getDonorReducer = (state = {donor:[]}, action) => {
  switch (action.type) {
      case Get_Donor_Request:
          return {
              loading: true,
              donor:[]
          };
      case Get_Donor_Success:
          return {
              loading: false,
              donor: action.payload.donor
          };
      case Get_Donor_Fail:
          return {
              loading: false,
              error: action.payload
          };
      default:
          return state;
  }
}

//delete donor
export const deleteDonorReducer = (state = {donor:[]}, action) => {
  switch (action.type) {
      case Delete_Donor_Request:
          return {
              loading: true,
              donor:[]
          };
      case Delete_Donor_Success:
          return {
              loading: false,
              donor: action.payload.donor
          };
      case Delete_Donor_Fail:
          return {
              loading: false,
              error: action.payload
          };
      default:
          return state;
  }
}
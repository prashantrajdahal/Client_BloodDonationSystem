import {
  Enable_Donar_Request,
  Enable_Donar_Success,
  Enable_Donar_Fail,
  Disable_Donar_Request,
  Disable_Donar_Success,
  Disable_Donar_Fail,
  Get_Requestor_Request,
  Get_Requestor_Success,
  Get_Requestor_Fail,
} from "../constants/donorConstants";

export const enableDonorReducer = (state = {}, action) => {
  switch (action.type) {
    case Enable_Donar_Request:
      return {
        ...state,
        loading: true,
      };
    case Enable_Donar_Success:
      return {
        loading: false,
        sucess: action.payload.success,
      };
    case Enable_Donar_Fail:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const RequestDonorReducer = (state = {requestor:[]}, action) => {
    switch(action.type){
        case Get_Requestor_Request:
            return{
                loading:true,
                requestor:[]
            }
        case Get_Requestor_Success:
            return{
                loading:false,
                success:action.payload.success,
                requestor:action.payload.requestor
            }
        case Get_Requestor_Fail:
            return{
                loading:false,
                error:action.payload
            }
        default:
            return state;
    }
}

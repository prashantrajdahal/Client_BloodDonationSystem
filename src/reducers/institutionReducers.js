import{
    All_Institutions_Fail,
    All_Institutions_Request,
    All_Institutions_Success,
    CLEAR_ERRORS
}from'../constants/institutionConstants';

export const institutionsReducers = (state = {institutions:[]}, action) => {
    switch (action.type) {
        case All_Institutions_Request:
            return {
                loading: true,
                institutions:[]
            };
        case All_Institutions_Success:
            return {
                loading: false,
                institutions: action.payload.institutions
            };
        case All_Institutions_Fail:
            return {
                loading: false,
                error: action.payload
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            };
        default:
            return state;
    }
}
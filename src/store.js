import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

import { authReducer, userReducer, forgotPasswordReducer, allUsersReducer, userDetailsReducer } from './reducers/userReducers'
import {institutionsReducers} from './reducers/institutionReducers';
import {createRequestorReducer, donorRequestorReducer,selectDonorReducer,getDonorReducer} from './reducers/requestorReducers';
import {enableDonorReducer,RequestDonorReducer} from "./reducers/donorReducers";

const reducer = combineReducers({
    getDonorRequestor: getDonorReducer,
    requestDonor:RequestDonorReducer,
    enableDonor: enableDonorReducer,
    selectdonor: selectDonorReducer,
    donorsRequestor: donorRequestorReducer,
    newRequestor: createRequestorReducer,
    institutions: institutionsReducers,
    auth: authReducer,
    user: userReducer,
    allUsers: allUsersReducer,
    userDetails: userDetailsReducer,
    forgotPassword: forgotPasswordReducer,
})

let initialState ={}

const middlware = [thunk];
const store = createStore(reducer,initialState, composeWithDevTools(applyMiddleware(...middlware)))

export default store;
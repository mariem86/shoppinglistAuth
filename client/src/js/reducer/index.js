import { combineReducers } from "redux";
import authReducer from "./authReducer";

import itemReducer from "./itemReducer";
import userReducer from "./userReducer";


export default combineReducers({
  authReducer,itemReducer, userReducer
  
});





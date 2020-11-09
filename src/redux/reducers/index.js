import { combineReducers } from "redux";
import userReducer from "./../../usermanagement_redux/module/reducer";
const rootReducer = combineReducers({
    userReducer,

});
export default rootReducer;
import { combineReducers } from "redux";
import { auth } from "./reducers";

const allReducers = combineReducers({
    auth
});

export default allReducers;

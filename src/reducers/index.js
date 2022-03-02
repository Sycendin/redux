import { combineReducers } from "redux";
import counterReducer from "./counter";
import loggedReducer from "./isLogged";

const allReducers = combineReducers({
  //can also shorthand it to just counterReducer,
  counter: counterReducer,
  isLogged: loggedReducer,
});
export default allReducers;

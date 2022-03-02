import { combineReducers } from "redux";
import { counterReducerP1, counterReducerP2 } from "./counter";
import loggedReducer from "./isLogged";
import { divColor } from "./color";

const allReducers = combineReducers({
  //can also shorthand it to just counterReducer,
  counterP1: counterReducerP1,
  counterP2: counterReducerP2,
  isLogged: loggedReducer,
  divColor1: divColor,
});
export default allReducers;

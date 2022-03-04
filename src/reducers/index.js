import { combineReducers } from "redux";
import { counterReducerP1, counterReducerP2 } from "./counter";
import loggedReducer from "./isLogged";
import { divColor } from "./color";
import { routeSelect } from "./route";
import { winner } from "./winner";
import { changeScore } from "./changeScore";
const allReducers = combineReducers({
  //can also shorthand it to just counterReducer,
  counterP1: counterReducerP1,
  counterP2: counterReducerP2,
  isLogged: loggedReducer,
  divColor1: divColor,
  routeSelect: routeSelect,
  winner: winner,
  changeScore: changeScore,
});
export default allReducers;

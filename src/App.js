import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";
import Counter from "./components/Counter";
import { Fragment } from "react";
function App() {
  const counter = useSelector((state) => state.counter);
  const loggedIn = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <Fragment>
      <Counter></Counter>
      <div className="App">
        <h2>Logged in? {!loggedIn ? "not logged in" : "logged in"}</h2>
      </div>
    </Fragment>
  );
}

export default App;

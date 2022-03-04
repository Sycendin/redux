import "./App.css";
import { useSelector } from "react-redux";
import Counter from "./components/Counter";
import { Fragment } from "react";
import Gameover from "./components/Gameover";
import StartScreen from "./components/StartScreen";
function App() {
  const loggedIn = useSelector((state) => state.isLogged);
  const route = useSelector((state) => state.routeSelect);
  return (
    <Fragment>
      {route === "home" ? (
        <Counter></Counter>
      ) : route === "gameover" ? (
        <Gameover></Gameover>
      ) : route === "startscreen" ? (
        <StartScreen></StartScreen>
      ) : null}
      <div className="App">
        <h2>Logged in? {!loggedIn ? "not logged in" : "logged in"}</h2>
        <h1>{route}</h1>
      </div>
    </Fragment>
  );
}

// {route === "home" ? <Counter></Counter> : (route === "gameover" ? <Gameover></Gameover> : (route === "startscreen"? <Gameover></Gameover> : null))}
export default App;

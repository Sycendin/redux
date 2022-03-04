import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { routeHome, scoreChange } from "../actions";

const StartScreen = () => {
  const dispatch = useDispatch();

  // Reset counter states and change route to home
  const changeRouteHome = () => {
    dispatch(routeHome());
  };

  return (
    <Fragment>
      <div className="br2 tc center ba shadow-2 mw5 mw7-ns pa3 ph5-ns mv6">
        <h1>Start Screen</h1>
        <form className="pa4 black-80">
          <label for="name" className="f6 b db mb2">
            Enter winning score: <span class="normal black-60">(optional)</span>
          </label>
          <input
            className=" tc input-reset ba b--black-20 pa2 mb2 db w-100"
            id="name"
            onChange={(e) => {
              let value = 10;
              if (e.target.value >= 1) {
                value = e.target.value;
              }
              dispatch(scoreChange(value));
            }}
            type="number"
            placeholder="Default: 10, Min: 1"
          />
          <button
            onClick={changeRouteHome}
            className=" br2 f6 link dim br1 ph3 pv2 mb2 dib white bg-dark-green"
          >
            Play Game
          </button>
        </form>
      </div>
    </Fragment>
  );
};
export default StartScreen;

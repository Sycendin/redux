import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetCounter, routeHome } from "../actions";

const Gameover = () => {
  const winner = useSelector((state) => state.winner);
  const dispatch = useDispatch();

  // Reset counter states and change route to home
  const changeRouteHome = () => {
    dispatch(resetCounter());
    dispatch(routeHome());
  };
  return (
    <Fragment>
      <div className="br2 tc center ba shadow-2 mw5 mw7-ns pa3 ph5-ns mv6">
        <h1 className="tc center!">{winner} Won!</h1>
        <button
          onClick={changeRouteHome}
          className=" br2 f6 link dim br1 ph3 pv2 mb2 dib white bg-dark-green"
        >
          Play again
        </button>
      </div>
    </Fragment>
  );
};
export default Gameover;

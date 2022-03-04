import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementp1, incrementp2, color } from "../actions";
import { routeGameover, player1Wins, player2Wins } from "../actions";

const Counter = () => {
  const counterPlayer1 = useSelector((state) => state.counterP1);
  const counterPlayer2 = useSelector((state) => state.counterP2);
  const divC = useSelector((state) => state.divColor1);
  const dispatch = useDispatch();
  let btnColor = "#57b394";
  const press = (e) => {
    if (e.key === "q") {
      dispatch(incrementp1(1));
    }
    if (e.key === "p") {
      dispatch(incrementp2(1));
    }
    if (counterPlayer1 === 2) {
      dispatch(player1Wins());
      dispatch(routeGameover());
    } else if (counterPlayer2 === 2) {
      dispatch(player2Wins());
      dispatch(routeGameover());
    }
  };

  return (
    <Fragment>
      <h1 className="tc center!">Counter Game</h1>

      <div
        className="br2 tc center ba shadow-2 mw5 mw7-ns pa3 ph5-ns mv6"
        onKeyDown={press}
        tabIndex="0"
        onClick={() => {
          btnColor === "#57b394" ? dispatch(color()) : console.log("2");
        }}
        style={{ backgroundColor: divC }}
      >
        <h1 className="bg-light-silver br2">Click on this box to begin</h1>
        <h2 className="bg-light-silver br2">
          Player 1 uses q and Player 2 uses p
        </h2>
        <div className="flex flex-row justify-center">
          <h1 className="mr4">Player 1 Counter: {counterPlayer1}</h1>
          <h1 className="ml4">Player 2 Counter: {counterPlayer2}</h1>
        </div>
        <h2>Get your counter to 3 to win!</h2>
      </div>
    </Fragment>
  );
};
export default Counter;

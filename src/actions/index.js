export const incrementp1 = (num = 0) => {
  return {
    type: "INCREMENTP1",
    payload: num,
  };
};

export const incrementp2 = (num = 0) => {
  return {
    type: "INCREMENTP2",
    payload: num,
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const color = () => {
  return {
    type: "COLOR",
  };
};

export const routeHome = () => {
  return {
    type: "HOME",
    payload: "home",
  };
};

export const routeGameover = (player = "none") => {
  return {
    type: "GAMEOVER",
    payload: player,
  };
};

export const resetCounter = (num = 0) => {
  return {
    type: "RESET",
    payload: num,
  };
};

export const player1Wins = () => {
  return {
    type: "PLAYER1",
  };
};
export const player2Wins = () => {
  return {
    type: "PLAYER2",
  };
};

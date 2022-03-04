export const winner = (state = "none", action) => {
  switch (action.type) {
    case "PLAYER1":
      return (state = "Player 1");
    case "PLAYER2":
      return (state = "Player 2");
    default:
      return state;
  }
};

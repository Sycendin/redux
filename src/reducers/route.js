export const routeSelect = (state = "startscreen", action) => {
  switch (action.type) {
    case "HOME":
      return (state = "home");
    case "GAMEOVER":
      return (state = "gameover");
    default:
      return state;
  }
};

export const changeScore = (state = 10, action) => {
  switch (action.type) {
    case "CHANGE_SCORE":
      return (state = action.payload);

    default:
      return state;
  }
};

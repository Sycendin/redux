export const counterReducerP1 = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENTP1":
      return state + action.payload;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export const counterReducerP2 = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENTP2":
      return state + action.payload;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

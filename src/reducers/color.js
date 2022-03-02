export const divColor = (state = "#57b394", action) => {
  switch (action.type) {
    case "COLOR":
      return (state = "#409277");

    default:
      return state;
  }
};

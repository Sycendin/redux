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

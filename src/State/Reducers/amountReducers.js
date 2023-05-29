const reducer = (state = 10400, action) => {
  if (action.type === "deposite" && !isNaN(action.payload)) {
    return state + parseInt(action.payload);
  } else if (action.type === "withdraw" && !isNaN(action.payload)) {
    return state - action.payload;
  } else {
    return state;
  }
};

export default reducer;

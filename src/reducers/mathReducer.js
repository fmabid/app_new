const mathReducer = (state = {
  result : 1,
  lastValues: []
}, action) => {
  switch (action.type) {
    case "ADD":
      state = {
        ...state,
        result: state.result + action.payload,
        lastValue: [...state.lastValues, action.payload]
      };
      break;
  }
  return state
};

export default mathReducer;
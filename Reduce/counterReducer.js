const defaultState = {
  cash: 0,
};

const counterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {...state, cash: state.cash + action.payload};
    case 'DECREMENT':
      return {...state, cash: state.cash + action.payload};
    default:
      return state;
  }
};
export default counterReducer;

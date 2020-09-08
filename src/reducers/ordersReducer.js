import { CREATE_ORDER, GET_ORDER } from '../actions/action';

let initialState = [];
export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return [...state, action.payload];
    case GET_ORDER:
      return action.payload;
    default:
      return state;
  }
};

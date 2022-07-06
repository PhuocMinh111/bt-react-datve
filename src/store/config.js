import { createStore, combineReducers } from "redux";
const _state = {
  ticket: 1,
  picked: false,
  seatPick: []
};
const ticketReducer = function (state = _state, action) {
  return state;
};

const store = createStore(ticketReducer);
export default store;

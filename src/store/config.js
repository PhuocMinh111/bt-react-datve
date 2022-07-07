import { createStore, combineReducers } from "redux";
const _state = {
  ticketNum: 1,
  picked: false,
  seatPick: [],
};
const ticketReducer = function (state = _state, action) {
  return state;
};

const store = createStore(ticketReducer);
export default store;

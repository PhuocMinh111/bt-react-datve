import { createStore, combineReducers } from "redux";
const _state = {
  seatNum: 1,
  useName: "",
  picked: false,
  seatPicked: [],
  canSelect: false,
};
const ticketReducer = function (state = _state, action) {
  switch (action.type) {
    case "ADD_SEAT":
      return { ...state, seatPicked: [...state.seatPicked, action.payload] };
      break;
    case "FORM_HANDLE":
      const { userName, seatNum } = action.payload;
      return { ...state, useName: userName, seatNum: seatNum };
    default:
      break;
  }
  return state;
};

const store = createStore(ticketReducer);
export default store;

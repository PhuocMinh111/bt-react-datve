import { createStore, combineReducers } from "redux";
import data from "../data/danhSachGhe.json";
const _state = {
  data: data,
  seatNum: 0,
  userName: "",
  picked: false,
  seatPicked: [],
  canPick: false,
};
const ticketReducer = function (state = _state, action) {
  switch (action.type) {
    case "ADD_SEAT":
      return { ...state, seatPicked: [...state.seatPicked, action.payload] };
    case "FORM_HANDLE":
      return { ...state, ...action.payload };
    case "REMOVE_SEAT":
      console.log(action.payload);
      const temp = state.seatPicked.filter((item) => item !== action.payload);
      return {
        ...state,
        seatPicked: [...temp],
      };
    default:
      break;
  }
  return state;
};

const store = createStore(ticketReducer);
export default store;

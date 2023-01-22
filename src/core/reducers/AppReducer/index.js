// REDUCER
import * as types from "./types";

const INITIAL_STATE = {
  mode: "light",
};

function AppReducer(state = INITIAL_STATE, action) {
  let newState = { ...state };

  switch (action.type) {
    case types.CHANGE_MODE_APP:
      newState.mode = newState.mode === "light" ? "dark" : "light";
      return newState;
    default:
      return newState;
  }
}

export default AppReducer;
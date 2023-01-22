// REDUCER
import * as types from "./types";

// SERVICEs
import { payload } from "../../services/helper"; 

export function changeModeApp() {
  return payload(types.CHANGE_MODE_APP, null);
}
// REDUCERs
import * as types from "./types";

// SERVICEs
import { payload } from "../../services/helper";

export function setPizza(pizza) {
  if (pizza.id) {
    return [
      payload(types.CHANGE_SIZE_PIZZA, pizza),
      payload(types.ADD_FLAVOR_PIZZA, pizza.flavors),
    ];
  } else {
    return payload(types.CLEAR_PIZZA, null);
  }
}
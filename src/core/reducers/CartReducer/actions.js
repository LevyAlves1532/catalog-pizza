// REDUCERs
import * as types from "./types";

// SERVICEs
import { payload } from "../../services/helper";

export function changeTotalCart(total) {
  return [
    payload(types.CHANGE_TOTAL_CART, total),
    payload(types.CHANGE_TOTAL_CART, null)
  ];
}

export function addPizzaCart(pizza) {
  return [
    payload(types.ADD_PIZZA_CART, pizza),
    payload(types.CHANGE_TOTAL_CART, null)
  ];
}

export function deletePizzaCart(pizza) {
  return [
    payload(types.DELETE_PIZZA_CART, pizza.id),
    payload(types.CHANGE_TOTAL_CART, null)
  ];
}

export function toggleDrinkCart(drink) {
  return [
    payload(types.TOGGLE_DRINK_CART, drink),
    payload(types.CHANGE_TOTAL_CART, null)
  ];
}
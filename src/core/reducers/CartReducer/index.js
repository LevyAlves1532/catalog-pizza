// REDUCERs
import * as types from "./types";

const INITIAL_STATE = {
  pizzas: [],
  drinks: [],
  total: 0,
}

function CartReducer(state = INITIAL_STATE, action) {
  let newState = { ...state };
  let newPizzas = [ ...newState.pizzas ];
  let newDrinks = [ ...newState.drinks ];

  switch (action.type) {
    case types.CHANGE_TOTAL_CART:
      const sum = (a, b) => a + b;
      let priceSizes = [];
      let priceFlavors = []
      let priceDrinks = newState.drinks.map(item => item.price);
      newState.pizzas.forEach(item => {
        priceSizes.push(item.price)
        priceFlavors = [ ...priceFlavors, ...item.flavors.map(element => element.price) ];
      });
      priceSizes = priceSizes.length > 0 ? priceSizes.reduce(sum) : 0;
      priceFlavors = priceFlavors.length > 0 ? priceFlavors.reduce(sum) : 0;
      priceDrinks = priceDrinks.length > 0 ? priceDrinks.reduce(sum) : 0;
      newState.total = priceSizes + priceFlavors + priceDrinks;
      return newState;
    case types.ADD_PIZZA_CART:
      newPizzas.push(action.payload);
      newState.pizzas = newPizzas;
      return newState;
    case types.DELETE_PIZZA_CART:
      newPizzas = newPizzas.filter(item => item.id !== action.payload);
      newState.pizzas = newPizzas;
      return newState;
    case types.TOGGLE_DRINK_CART:
      if (newDrinks.find(drink => drink.name === action.payload.name) === undefined) {
        newDrinks.push(action.payload);
      } else {
        newDrinks = newDrinks.filter(drink => drink.name !== action.payload.name);
      }
      newState.drinks = newDrinks;
      return newState;
    default:
      return newState;
  }
}

export default CartReducer;
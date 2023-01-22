// REDUCER
import * as types from "./types";

const INITIAL_STATE = {
  size: {
    id: "",
    size: "",
    name: "",
    qtdFlavors: 0,
    price: 0,
  },
  flavors: [

  ],
};

function PizzaReducer(state = INITIAL_STATE, action) {
  let newState = { ...state };
  let newSize = { ...state.size };
  let newFlavors = [ ...state.flavors ];

  switch(action.type) {
    case types.CHANGE_SIZE_PIZZA:
      console.log(action.payload);
      if (
        action.payload.id && 
        action.payload.size && 
        action.payload.name && 
        action.payload.qtdFlavors && 
        action.payload.price
      ) {
        newSize.id = action.payload.id;
        newSize.size = action.payload.size;
        newSize.name = action.payload.name;
        newSize.qtdFlavors = action.payload.qtdFlavors;
        newSize.price = action.payload.price;
      }
      newState.size = newSize;
      return newState;
    case types.ADD_FLAVOR_PIZZA:
      if (action.payload && action.payload.length > 0) {
        newFlavors = action.payload.map(item => item);
      }
      newState.flavors = newFlavors;
      return newState;
    case types.CLEAR_PIZZA:
      newState = INITIAL_STATE;
      return newState;
    default:
      return newState;
  }
}

export default PizzaReducer;
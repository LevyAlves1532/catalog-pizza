const cart = state => state.cart;
export const totalCart = state => cart(state).total;
export const pizzasCart = state => cart(state).pizzas;
export const drinksCart = state => cart(state).drinks;
const pizza = (state) => state.pizza;
export const sizePizza = (state) => pizza(state).size;
export const flavorsPizza = (state) => pizza(state).flavors;
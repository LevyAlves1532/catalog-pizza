// LIBs
import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import multi from "redux-multi";
import promise from "redux-promise";
import thunk from "redux-thunk";

// REDUCERs
import AppReducer from "../reducers/AppReducer";
import CartReducer from "../reducers/CartReducer";
import PizzaReducer from "../reducers/PizzaReducer";

const persistConfigApp = {
  key: "app",
  storage,
  blacklist: ["screens", "scrollTop"]
}

const persistConfigCart = {
  key: "cart",
  storage,
  blacklist: []
}

const reducers = combineReducers({
  app: persistReducer(persistConfigApp, AppReducer),
  cart: persistReducer(persistConfigCart, CartReducer),
  pizza: PizzaReducer,
});

const store = applyMiddleware(multi, promise, thunk)(createStore)(reducers);
const persistor = persistStore(store);

export {
  store,
  persistor
};
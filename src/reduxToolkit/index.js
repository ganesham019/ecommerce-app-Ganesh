import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./reducer/cart";
const rootReducer = combineReducers({
  cart: cartReducer,
});
export default rootReducer;

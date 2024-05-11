import { configureStore } from "@reduxjs/toolkit";
import cartItemReducer from "../Reducers/shopingCartSlice";

const store = configureStore({
  reducer: cartItemReducer,
});

export default store;
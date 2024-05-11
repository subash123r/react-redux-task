import { createSlice } from "@reduxjs/toolkit";
import data from "../assets/products-data.json";

const initialSubtotalValue = () => {
  return data.reduce((acc, val) => {
    let discountPrice = parseFloat(
      (val.price - val.price * (val.discountPercentage / 100)).toFixed(2)
    );
    let subtotal = acc + discountPrice;
    return subtotal;
  }, 0);
};

const shopingCartSlice = createSlice({
  name: "cartItem",
  initialState: {
    productsData: data,
    totalProducts: data.length,
    subtotal: initialSubtotalValue(),
  },
  reducers: {
    setSubtotal: (state, action) => {
      if (action.payload.length > 2) {
        const newQuantity = action.payload[0];
        const tempItemCount = action.payload[1];
        const discountPercentage = action.payload[2];
        if (newQuantity < tempItemCount) {
          state.subtotal =
            state.subtotal - discountPercentage * (tempItemCount - newQuantity);
        } else {
          state.subtotal =
            state.subtotal + discountPercentage * (newQuantity - tempItemCount);
        }
      } else {
        const removeProductPrice = action.payload[0];
        state.subtotal = removeProductPrice;
      }
    },
  },
});

export const { setSubtotal } = shopingCartSlice.actions;
export default shopingCartSlice.reducer;
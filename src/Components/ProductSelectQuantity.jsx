import React from "react";
import { setSubtotal } from "../Reducers/shopingCartSlice";
import { useDispatch } from "react-redux";

function ProductSelectQuantity({
  itemCount,
  setItemCount,
  setStockCount,
  setItemTotalPrice,
  val,
  discountprice,
}) {
  const dispatch = useDispatch();

  const quantityOptions = [];
  for (let i = 1; i <= val.stock; i++) {
    quantityOptions.push(
      <option value={i} key={i}>
        {i}
      </option>
    );
  }
  return (
    <select
      className="w-[40px] text-center"
      defaultValue={itemCount}
      value={itemCount}
      onChange={(e) => {
        const newQuantity = parseInt(e.currentTarget.value);
        const tempItemCount = itemCount;
        setItemCount(newQuantity);
        setStockCount(() => {
          if (newQuantity == 1) {
            return val.stock;
          } else if (newQuantity == val.stock) {
            return 0;
          } else {
            return val.stock - (newQuantity - 1);
          }
        });
        dispatch(setSubtotal([newQuantity, tempItemCount, discountprice]));
        setItemTotalPrice(() => {
          if (newQuantity == 1) {
            return discountprice;
          } else {
            return discountprice * newQuantity;
          }
        });
      }}
    >
      {quantityOptions}
    </select>
  );
}

export default ProductSelectQuantity;
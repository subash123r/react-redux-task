import { useSelector } from "react-redux";
import CartItem from "./CartItem";

function CartItems() {
  const productsData = useSelector((state) => state.productsData);
  return (
    <div className="w-full flex flex-col h-fit gap-4 px-1 md:px-4 pt-4 pb-0">
      <p className="text-black text-xl font-extrabold">Shopping Cart</p>
      {productsData.length == 0 && (
        <p className="text-center text-xl text-sky-900 font-semibold my-4">
          Cart is empty. Add products to the cart.
        </p>
      )}
      {/* <!-- Product --> */}
      {productsData.map((val, index) => (
        <CartItem key={val.id} val={val} index={index} />
      ))}
    </div>
  );
}

export default CartItems;
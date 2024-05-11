import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSubtotal } from "../Reducers/shopingCartSlice";
import ProductSelectQuantity from "./ProductSelectQuantity";
import ProductPriceInfo from "./ProductPriceInfo";

function CartItem({ val, index }) {
  const subtotal = useSelector((state) => state.subtotal);
  const dispatch = useDispatch();
  const [itemCount, setItemCount] = useState(1);
  const [stockCount, setStockCount] = useState(val.stock);
  const discountprice = val.price - val.price * (val.discountPercentage / 100);
  const [itemTotalPrice, setItemTotalPrice] = useState(discountprice);

  return (
    <div className="flex flex-col py-1 px-1 md:p-4 text-lg font-semibold">
      <div className="flex flex-col md:flex-row gap-3 justify-between">
        {/* <!-- Product Information --> */}
        <div className="flex flex-row gap-6 items-center max-md:items-start md:w-3/5">
          <div className="h-28 w-1/3">
            <img
              className="w-full h-full rounded-lg"
              src={val.thumbnail}
              alt={val.title}
            />
          </div>
          <div className="flex flex-col gap-1 w-8/12 md:w-6/12">
            <p className="text-lg text-gray-800 font-semibold">{val.title}</p>
            <p className="text-xs text-gray-600 md:text-sm">
              <span className="font-semibold">Brand:</span>{" "}
              <span className="font-normal">{val.brand}</span>
            </p>
            <p className="text-xs text-gray-600 md:text-sm">
              <span className="font-semibold">Description:</span>{" "}
              <span className="font-normal">{val.description}</span>
            </p>

            {/* <!-- Price Information Mobile view --> */}
            <div className="self-start text-left md:hidden">
              <ProductPriceInfo
                val={val}
                stockCount={stockCount}
                itemTotalPrice={itemTotalPrice}
                discountprice={discountprice}
              />
            </div>
          </div>
        </div>

        {/* <!-- Select Product Quantity --> */}
        <div className="my-1 flex justify-start md:items-center md:justify-center gap-2 font-normal max-md:hidden md:w-1/12">
          <ProductSelectQuantity
            key={val.id}
            itemCount={itemCount}
            setItemCount={setItemCount}
            setStockCount={setStockCount}
            setItemTotalPrice={setItemTotalPrice}
            val={val}
            discountprice={discountprice}
          />
        </div>

        {/* <!-- Price Information --> */}
        <div className="self-center text-center md:w-1/5 max-md:hidden">
          <ProductPriceInfo
            val={val}
            stockCount={stockCount}
            itemTotalPrice={itemTotalPrice}
            discountprice={discountprice}
          />
        </div>
        {/* <!-- Remove Product Icon --> */}
        <div className="self-center max-md:hidden">
          <button
            className=""
            onClick={() => {
              const removeProductPrice =
                subtotal - discountprice * (itemCount - 1);
              dispatch(setSubtotal([removeProductPrice, discountprice]));
              setItemCount(1);
              setStockCount(val.stock);
              setItemTotalPrice(discountprice);
            }}
          >
            <svg
              className=""
              height="24px"
              width="24px"
              id="Layer_1"
              style={{ background: "new 0 0 512 512" }}
              version="1.1"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g>
                <path d="M400,113.3h-80v-20c0-16.2-13.1-29.3-29.3-29.3h-69.5C205.1,64,192,77.1,192,93.3v20h-80V128h21.1l23.6,290.7   c0,16.2,13.1,29.3,29.3,29.3h141c16.2,0,29.3-13.1,29.3-29.3L379.6,128H400V113.3z M206.6,93.3c0-8.1,6.6-14.7,14.6-14.7h69.5   c8.1,0,14.6,6.6,14.6,14.7v20h-98.7V93.3z M341.6,417.9l0,0.4v0.4c0,8.1-6.6,14.7-14.6,14.7H186c-8.1,0-14.6-6.6-14.6-14.7v-0.4   l0-0.4L147.7,128h217.2L341.6,417.9z" />
                <g>
                  <rect height="241" width="14" x="249" y="160" />
                  <polygon points="320,160 305.4,160 294.7,401 309.3,401" />
                  <polygon points="206.5,160 192,160 202.7,401 217.3,401" />
                </g>
              </g>
            </svg>
          </button>
        </div>

        {/* Mobile view */}
        <div className="flex flex-row justify-between md:hidden">
          <div className="my-1 flex justify-start md:items-center gap-2 font-normal">
            <ProductSelectQuantity
              key={val.id}
              itemCount={itemCount}
              setItemCount={setItemCount}
              setStockCount={setStockCount}
              setItemTotalPrice={setItemTotalPrice}
              val={val}
              discountprice={discountprice}
            />
          </div>
          {/* <!-- Remove Product Icon --> */}
          <div className="self-center">
            <button
              className="font-bold gap-1 text-gray-900 focus:ring-gray-200 hover:bg-gray-100 bg-white border-gray-300 border text-xs focus:outline-none focus:ring-4 rounded-lg py-2 px-2 disabled:bg-gray-100"
              onClick={() => {
                const removeProductPrice =
                  subtotal - discountprice * (itemCount - 1);
                dispatch(setSubtotal([removeProductPrice]));
                setItemCount(1);
                setStockCount(val.stock);
                setItemTotalPrice(discountprice);
              }}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
      <hr className="h-[2px] mt-6 bg-gray-200 border-0"></hr>
    </div>
  );
}

export default CartItem;
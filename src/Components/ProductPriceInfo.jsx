import React from "react";

function ProductPriceInfo({ val, stockCount, itemTotalPrice, discountprice }) {
  return (
    <div>
      <p className="text-gray-800 font-normal text-sm">
        <span className="text-red-500 mr-2">-{val.discountPercentage}%</span>$
        {discountprice.toFixed(2)}
      </p>
      <p className="text-gray-900 font-normal text-xs md:text-sm">
        <span className="font-semibold">List Price: </span>
        <span className="line-through">${val.price}</span>
      </p>
      <p className="text-green-600 font-normal text-xs md:text-sm">
        <span>In Stock: </span>
        <span>{stockCount}</span>
      </p>
      <p className="text-gray-900 text-xs md:text-sm">
        <span className="font-semibold">Total: </span>
        <span className="font-normal">${itemTotalPrice.toFixed(2)}</span>
      </p>
    </div>
  );
}

export default ProductPriceInfo;
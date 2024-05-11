import { useSelector } from "react-redux";

export default function PurchaseTotal() {
  const subtotal = useSelector((state) => state.subtotal);
  const totalProducts = useSelector((state) => state.totalProducts);
  return (
    <div className="flex flex-col w-full h-fit gap-4 max-md:px-2 px-4 pb-4 pt-0">
      <div className="flex flex-col max-md:px-1 p-4 gap-4 text-lg font-semibold rounded-sm">
        <div className="flex flex-row justify-between">
          <p className="text-gray-600">Subtotal ({totalProducts} Items)</p>
          <p className="text-end font-bold">${subtotal.toFixed(2)}</p>
        </div>
        <hr className="bg-gray-200 h-0.5" />
        <div className="flex flex-row justify-between">
          <p className="text-gray-600">Freight</p>
          <div>
            <p className="text-end font-bold">FREE</p>
            <p className="text-gray-600 text-sm font-normal">
              Arrives on Jul 16
            </p>
          </div>
        </div>
        <hr className="bg-gray-200 h-0.5" />
        <div className="flex flex-row justify-between">
          <p className="text-gray-600">Total</p>
          <div>
            <p className="text-end font-bold">${subtotal.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
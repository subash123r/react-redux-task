import "./App.css";
import CartItems from "./Components/CartItems";
import PurchaseTotal from "./Components/PurchaseTotal";

function App() {
  return (
    <div className="flex flex-col max-w-5xl h-full max-md:px-1 px-7 py-7 mx-auto">
      {/* <!-- My Cart --> */}
      <CartItems />

      {/* <!-- Purchase Total --> */}
      <PurchaseTotal />
    </div>
  );
}

export default App;
import { selectItems } from "../slices/basketSlice";
import { useSelector } from "react-redux";

function ShoppingCart() {
  const items = useSelector(selectItems);
  console.log(items);
  return (
    <div className="">
      <div className="border-b w-full flex flex-col items-end ">
        <p className="mx-16 ">Price</p>
      </div>
      <div className="flex flex-row m-5 p-5 border-b">
        <div className="w-32">
          <img
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            alt=""
          />
        </div>
        <div className="m-5 flex flex-col">
          <h1 className="text-2xl link font-semibold">
            Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
          </h1>
          <p>
            Your perfect pack for everyday use and walks in the forest. Stash
            your laptop (up to 15 inches) in the padded sleeve, your everyday
          </p>
          <div></div>
        </div>
        <div className="flex flex-row ">
          <h1 className="text-xl font-semibold">$109.95</h1>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;

import Image from "next/image";
import Header from "../components/Header";
import ShoppingCart from "../components/ShoppingCart";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/basketSlice";
import Currency from "react-currency-formatter";

function Checkout() {
  const { loginWithRedirect, loginWithPopup, isAuthenticated, user, logout } =
    useAuth0();
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);

  return (
    <div className="bg-gray-100">
      <Header />

      <div className="flex-grow m-5 shadow-sm">
        {isAuthenticated ? (
          <main className="lg:flex flex-row max-w-screen-xl mx-auto  ">
            <div className="flex flex-col p-5 space-y-10 bg-white shadow-md">
              <h1 className="text-3xl  pb-4">
                {" "}
                {items.length === 0 ? "Your Cart is Empty" : "Shopping Cart"}
              </h1>
              {items.map((item, i) => (
                <ShoppingCart
                  key={i}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  description={item.description}
                  category={item.category}
                  image={item.image}
                  rating={item.rating}
                  primeDel={item.primeDel}
                />
              ))}
            </div>
            <div className=" lg:mx-5  flex flex-col bg-white p-10 shadow-md ">
              {items.length > 0 && (
                <>
                  <h2 className="whitespace-nowrap">
                    Subtotal ({items.length} items) :
                    <span className="font-bold mx-5">
                      <Currency quantity={total} currency="USD" />
                    </span>
                  </h2>
                  <button
                    onClick={loginWithPopup}
                    className={`button mt-2 ${
                      !isAuthenticated &&
                      "from-gray-300 to-gray-500 border-gray-200 text-gray-200 cursor-not-allowed"
                    }`}
                  >
                    {isAuthenticated
                      ? "Proceed to checkout"
                      : "Sing in to checkout"}
                  </button>
                </>
              )}
            </div>
          </main>
        ) : (
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">Login or Sign Up</h1>
            <button onClick={loginWithPopup} className="button">
              Sing In
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;

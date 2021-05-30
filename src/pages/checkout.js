import Image from "next/image";
import Header from "../components/Header";
import ShoppingCart from "../components/ShoppingCart";
import { useAuth0 } from "@auth0/auth0-react";

function Checkout() {
  const { loginWithRedirect, loginWithPopup, isAuthenticated, user, logout } =
    useAuth0();
  return (
    <div className="bg-gray-100">
      <Header />

      <main className="lg:flex max-w-screen-xl mx-auto ">
        <div className="flex-grow m-5 shadow-sm">
          {isAuthenticated ? (
            <div className="flex flex-col p-5 space-y-10 bg-white">
              <h1 className="text-3xl  pb-4">Shopping Cart</h1>
              <ShoppingCart />
            </div>
          ) : (
            <div className="flex flex-col p-5 space-y-10 bg-white">
              <h1 className="text-3xl border-b pb-4">Login or Sign Up</h1>
            </div>
          )}

          <div className="bg-white w-84"></div>
        </div>
      </main>
    </div>
  );
}

export default Checkout;

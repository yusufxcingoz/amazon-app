import React from "react";
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
  LocationMarkerIcon,
} from "@heroicons/react/outline";
import { signIn, singOut, useSession } from "next-auth/client";
import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

function Header() {
  const { loginWithRedirect, loginWithPopup, isAuthenticated, user, logout } =
    useAuth0();
  const isOpen = true;
  const router = useRouter();
  const items = useSelector(selectItems);

  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2 ">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            onClick={() => router.push("/")}
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        <div className="hidden md:flex flex-row  items-end text-white mx-4">
          <LocationMarkerIcon className="h-5 mb-1" />
          <div className="flex flex-col items-center link ">
            <p className="link text-xs">Deliver to {user.name}</p>
            <h4 className="text-sm font-bold"> Somewhere 05834</h4>
          </div>
        </div>

        <div className="sm:flex hidden items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-500 hover:bg-yellow-400 ">
          <input
            type="text"
            className="p-2 h-full w-8 flex-grow rounded-l-md focus:outline-none"
          />
          <div className="">
            <SearchIcon className="h-12 p-4" />
          </div>
        </div>

        <div className="text-white flex text-xs space-x-6 mx-6 items-center whitespace-nowrap">
          {isAuthenticated ? (
            <div className=" flex items-center space-x-4 ">
              <div className="link group inline-block relative ">
                <div onClick={() => loginWithPopup()} className="link">
                  <p>Hello, {user.name}</p>
                  <p className="font-extrabold md:text-sm">Acoount & List</p>
                </div>
                <div className="absolute hidden text-black pt-1 group-hover:block w-full z-40 mx-auto ">
                  <div className="bg-white w-32 h-16 flex items-center ">
                    <button
                      onClick={() =>
                        logout({ returnTo: "http://localhost:3000/" })
                      }
                      className="mx-auto button"
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              </div>

              <div className="link">
                <p>Returns</p>
                <p className="font-extrabold md:text-sm">& Orders</p>
              </div>
            </div>
          ) : (
            <div className=" flex items-center space-x-4 ">
              <div onClick={() => loginWithPopup()} className="link">
                <p>Hello, Sign in</p>
                <p className="font-extrabold md:text-sm">Acoount & List</p>
              </div>
              <div className="link">
                <p>Returns</p>
                <p className="font-extrabold md:text-sm">& Orders</p>
              </div>
            </div>
          )}

          <div
            onClick={() => router.push("/checkout")}
            className="relative link flex items-center "
          >
            <span className="absolute top-0 right-0  md:right-10 w-4 bg-yellow-400 rounded-full font-bold text-amazon_blue text-center">
              {items.length}
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="font-extrabold md:text-sm hidden md:inline mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center bg-amazon_blue-light text-white text-sm space-x-3 p-2 pl-6">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deal</p>
        <p className="hidden link md:inline-flex">Electronics</p>
        <p className="hidden link md:inline-flex">Food & Grocery </p>
        <p className="hidden link md:inline-flex">Prime</p>
        <p className="hidden link lg:inline-flex">Buy Again</p>
        <p className="hidden link lg:inline-flex">Shopper Toolkit</p>
        <p className="hidden link lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
}

export default Header;

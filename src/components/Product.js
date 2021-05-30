import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";

function Product({ id, title, price, description, category, image }) {
  const rankingNumer = Math.floor(Math.random() * (5 - 1) + 1);

  const [rating] = useState(rankingNumer);
  const [primeDel] = useState(Math.random() < 0.5);

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-gray-500 italic">{category}</p>
      <Image src={image} height={200} width={200} objectFit="contain" />
      <h4 className="my-3">{title}</h4>

      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500 " />
          ))}
      </div>

      <p class="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <Currency quantity={price} currency="TRY" />
      </div>
      {primeDel && (
        <div className="flex items-center space-x-2 -mt-5">
          <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}

      <button className="mt-auto button">Add To Basket</button>
    </div>
  );
}

export default Product;

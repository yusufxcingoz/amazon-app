import { selectItems } from "../slices/basketSlice";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/outline";
import Currency from "react-currency-formatter";
import { addToBasket } from "../slices/basketSlice";
import { removeFromBasket } from "../slices/basketSlice";

function ShoppingCart({
  id,
  title,
  price,
  description,
  rating,
  category,
  image,
  primeDel,
}) {
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      rating,
      primeDel,
    };
    dispatch(addToBasket(product));
  };

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
    console.log({ id });
  };
  return (
    <div className="grid grid-cols-5 ">
      <Image src={image} height={200} width={200} objectFit="contain" />
      <div className="col-span-3 mx-3">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs mt-2 line-clamp-3">{description}</p>
        <Currency quantity={price} currency="USD" />

        {primeDel && (
          <div className="flex items-center space-x-2 ">
            <img
              className="w-12"
              src="https://links.papareact.com/fdw"
              alt=""
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>
      <div className="flex flex-col my-auto space-y-2 justify-self-end  ">
        <button className="button " onClick={addItemToBasket}>
          {" "}
          Add to
        </button>
        <button className="button " onClick={removeItemFromBasket}>
          {" "}
          Remove From Basket
        </button>
      </div>
    </div>
  );
}

export default ShoppingCart;

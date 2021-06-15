import React, { useState } from "react";
import { CgHeart } from "react-icons/cg";
import { FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import IconBtn from "../iconBtn/IconBtn";
import Image from "../image/Image";
import { add_to_cart } from "./../../redux/actions/index";

export default function PdCardMd({ data }) {
  const { title, price, description, imageURL } = data;
  const dispatch = useDispatch();
  const [wish, setWish] = useState(false);
  const handleProduct = () => {
    alert("Product Clicked");
  };

  const handleAddToCart = (pd) => {
    dispatch(add_to_cart(pd));
  };
  return (
    <div className="px-2 py-2 my-2 bg-white rounded">
      <div className="relative">
        <Image src={imageURL} alt="Product Image 16x9" width="10" height="10" />
        <div
          className="absolute top-0 right-0 p-2 text-2xl text-gray-600 cursor-pointer"
          onClick={() => setWish(!wish)}
        >
          {wish ? <FaHeart /> : <CgHeart />}
        </div>
        <h2 className="absolute bottom-0 left-0 p-2 text-2xl font-medium text-gray-500">
          ৳ {price}
        </h2>
      </div>
      {/* Card footer */}
      <div className="flex items-center justify-between py-3 text-gray-500 cursor-pointer text-md">
        <div onClick={handleProduct} className="flex-grow">
          <h1 className="font-medium">{title}</h1>
        </div>
        <div onClick={() => handleAddToCart(data)}>
          <IconBtn />
        </div>
      </div>
    </div>
  );
}

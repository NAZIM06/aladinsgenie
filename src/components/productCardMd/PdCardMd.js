import React, { useState } from "react";
import { CgHeart } from "react-icons/cg";
import { FaHeart } from "react-icons/fa";
import tshirt from "../../assets/black-t-shirt.jpg";
import IconBtn from "../iconBtn/IconBtn";
import Image from "../image/Image";

export default function PdCardMd() {
  const [wish, setWish] = useState(false);
  return (
    <div className="px-2 py-2 my-2 bg-white rounded">
      <div className="relative">
        <Image src={tshirt} alt="Product Image 16x9" width="10" height="10" />
        <div
          className="absolute top-0 right-0 p-2 text-2xl text-gray-600 cursor-pointer"
          onClick={() => setWish(!wish)}
        >
          {wish ? <FaHeart /> : <CgHeart />}
        </div>
        <h2 className="absolute bottom-0 left-0 p-2 text-2xl font-medium text-gray-500">
          ৳ 450
        </h2>
      </div>
      {/* Card footer */}
      <div className="flex items-center justify-between py-3 text-gray-500 text-md">
        <div>
          <h1 className="font-medium">Lorem ipsum dolor sit.</h1>
        </div>
        <IconBtn />
      </div>
    </div>
  );
}

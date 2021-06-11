import React from "react";
import { CgHeart } from "react-icons/cg";
import tshirt from "../../assets/black-t-shirt.jpg";
import IconBtn from "../iconBtn/IconBtn";
import Image from "../image/Image";

export default function PdCardMd() {
  return (
    <div className="px-2 py-2 my-2 bg-white rounded">
      <div className="relative">
        <Image src={tshirt} alt="Product Image 16x9" width="10" height="10" />
        <CgHeart className="absolute text-2xl text-gray-600 top-2 right-2" />
      </div>
      {/* Card footer */}
      <div className="flex items-center justify-between py-3 text-gray-500 text-md">
        <h3 className="">Lorem ipsum dolor sit.</h3>
        <IconBtn />
      </div>
    </div>
  );
}

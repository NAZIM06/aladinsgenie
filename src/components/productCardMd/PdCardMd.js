import React from "react";
import { CgHeart } from "react-icons/cg";
import tshirt from "../../assets/black-t-shirt.jpg";
import IconBtn from "../iconBtn/IconBtn";
import Image from "../image/Image";

export default function PdCardMd() {
  return (
    <div className="bg-white px-2 py-2 my-2 rounded">
      <div className="relative">
        <Image src={tshirt} alt="Product Image 16x9" width="10" height="10" />
        <CgHeart className="absolute top-2 right-2 text-2xl text-gray-600" />
      </div>
      {/* Card footer */}
      <div className="text-gray-500 text-md py-3  items-center flex">
        <h3 className="">Lorem ipsum dolor sit.</h3>
        <IconBtn />
      </div>
    </div>
  );
}

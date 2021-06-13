import React from "react";
import { CgShoppingCart } from "react-icons/cg";
export default function IconBtn() {
  return (
    <div className="flex-none">
      <button className="flex text-md bg-gray-700 text-white rounded p-2 items-center">
        <span className="mr-1">Add to cart</span>
        <CgShoppingCart />
      </button>
    </div>
  );
}

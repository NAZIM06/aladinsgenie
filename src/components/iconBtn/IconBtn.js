import React from "react";
import { CgShoppingCart } from "react-icons/cg";
export default function IconBtn() {
  return (
    <div className="flex-none">
      <button className="flex items-center p-2 text-white bg-gray-700 rounded text-md">
        <span className="mr-1">Add to cart</span>
        <CgShoppingCart />
      </button>
    </div>
  );
}

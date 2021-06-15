import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

export default function CartModal() {
  const cartItems = useSelector((state) => state.cartReducer);

  console.log(cartItems);

  return (
    <div className="absolute inset-0 z-10 transform translate-y-20 -translate-x-52">
      <div className="grid gap-4 p-3 overflow-y-auto text-base bg-gray-200 rounded w-96 max-h-100">
        <h2 className="ml-2">My cart:</h2>
        {cartItems.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          cartItems.map((item) => (
            <CartItem data={item} key={Math.random() * 10000} />
          ))
        )}
      </div>
    </div>
  );
}

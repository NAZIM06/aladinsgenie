import React from "react";
import { useSelector } from "react-redux";
import Image from "./../image/Image";

export default function CheckoutItem() {
  const checkoutItems = useSelector((state) => state.cartReducer);

  return (
    <div className="grid grid-cols-1 gap-y-3">
      {checkoutItems.map((item) => (
        <div key={Math.random() * 10000} className="grid grid-cols-12 gap-3">
          <Image src={item.imageURL} width="1" height="1" />
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}

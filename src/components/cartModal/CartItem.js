import React from "react";
import Image from "./../image/Image";
export default function CartItem({ data }) {
  const { title, price, imageURL } = data;
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-3 overflow-hidden rounded-full">
        <Image width="1" height="1" src={imageURL} />
      </div>
      <div className="flex flex-col justify-center col-span-6">
        <p>{title}</p>+ Qty -
      </div>
      <div className="flex flex-col justify-center col-span-3">
        <p>Price: {price}</p>
      </div>
    </div>
  );
}

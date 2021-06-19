import React from "react";
import { useDispatch } from "react-redux";
import { increment_qty } from "../../redux/actions";
import { decrement_qty } from "./../../redux/actions/index";
import Image from "./../image/Image";
export default function CartItem({ data }) {
  const { title, totalprice, price, imageURL, qty = 1 } = data;
  const dispatch = useDispatch();
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-3 overflow-hidden rounded-full">
        <Image width="1" height="1" src={imageURL} />
      </div>
      <div className="flex flex-col justify-center col-span-6">
        <p>
          {title} {price}taka/unit
        </p>{" "}
        <button onClick={() => dispatch(increment_qty(data))}>+</button> {qty}{" "}
        <button onClick={() => dispatch(decrement_qty(data))}>-</button>
      </div>
      <div className="flex flex-col justify-center col-span-3">
        <p>Price: {totalprice}</p>
      </div>
    </div>
  );
}

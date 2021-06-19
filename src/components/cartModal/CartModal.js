import React from "react";
import { IoBagCheckOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { caculateTotal } from "./../../lib/functions";
import { change_cart_state } from "./../../redux/actions/index";
import CartItem from "./CartItem";
export default function CartModal() {
  const cartItems = useSelector((state) => state.cartReducer.products);
  const history = useHistory();
  const dispatch = useDispatch();
  const checkoutRedirect = () => {
    // change cartIsOpen state
    dispatch(change_cart_state());
    history.push("/checkout");
  };
  const grandTotal = caculateTotal(cartItems);
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
        {cartItems.length !== 0 && (
          <>
            <div className="text-right">Total: {grandTotal}</div>
            <button
              className="flex items-center justify-center p-3 text-white bg-gray-700 rounded text-md"
              onClick={checkoutRedirect}
            >
              <span className="mr-1">Proceed to checkout</span>
              <IoBagCheckOutline />
            </button>
          </>
        )}
      </div>
    </div>
  );
}

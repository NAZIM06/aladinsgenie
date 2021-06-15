import React from "react";
import { AiTwotoneShopping } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaHeart, FaRegHeart, FaUserCircle } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import CartModal from "./../cartModal/CartModal";
import Image from "./../image/Image";

export default function HeaderNav({}) {
  const menuItems = [
    { name: "Home", slug: "/" },
    { name: "Shop", slug: "/shop" },
    { name: "Contact", slug: "/contact" },
  ];
  const location = useLocation();
  return (
    <header className="relative py-2">
      {/* Logo */}
      <nav className="container flex items-center justify-between mx-auto">
        <NavLink to="/">
          <div className="w-40 bg-gray-400">
            <Image height="5" width="16" />
          </div>
        </NavLink>

        {/* Menu */}
        <ul className="ml-4 text-gray-500 list-none">
          {menuItems.map((el) => (
            <NavLink
              exact
              to={`${el.slug}`}
              activeClassName="text-gray-900"
              key={`${el.slug}`}
            >
              <li className="inline-block mr-8 font-medium">{el.name} </li>
            </NavLink>
          ))}
        </ul>
        {/* Icons */}
        <div className="flex items-center ml-auto text-2xl text-gray-700">
          <NavLink to="/wishlist" className="p-2 mr-8">
            {location.pathname === "/wishlist" ? <FaHeart /> : <FaRegHeart />}
          </NavLink>

          <span className="relative">
            <NavLink to="/cart" className="p-2 mr-8">
              {location.pathname === "/cart" ? (
                <AiTwotoneShopping />
              ) : (
                <BiShoppingBag />
              )}
            </NavLink>
            <CartModal></CartModal>
          </span>

          {/* <NavLink to="/cart" className="relative">
            <div className="p-2 mr-8">
              {location.pathname === "/cart" ? (
                <AiTwotoneShopping />
              ) : (
                <BiShoppingBag />
              )}
            </div>
            <CartModal></CartModal>
          </NavLink> */}
          <NavLink to="/profile" className="p-2">
            {location.pathname === "/profile" ? (
              <FaUserCircle />
            ) : (
              <CgProfile />
            )}
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

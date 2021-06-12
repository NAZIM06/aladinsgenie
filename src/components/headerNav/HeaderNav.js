import React from "react";
import { CgProfile, CgShoppingBag } from "react-icons/cg";
import { Link } from "react-router-dom";
import Image from "./../image/Image";

export default function HeaderNav() {
  const menuItems = [
    { name: "Home", slug: "/" },
    { name: "Shop", slug: "/shop" },
    { name: "Contact", slug: "/contact" },
  ];
  return (
    <header className="py-2">
      {/* Logo */}
      <nav className="container flex items-center justify-between mx-auto">
        <Link to="/">
          <div className="w-40 bg-gray-400">
            <Image height="5" width="16" />
          </div>
        </Link>

        {/* Menu */}
        <ul className="ml-4 list-none">
          {menuItems.map((el) => (
            <Link to={`${el.slug}`}>
              <li className="inline-block mr-8 font-medium">{el.name}</li>
            </Link>
          ))}
        </ul>
        {/* Icons */}
        <div className="flex items-center ml-auto text-2xl text-gray-700">
          <Link to="/cart">
            <CgShoppingBag className="mr-8" />
          </Link>
          <Link to="/profile">
            <CgProfile />
          </Link>
        </div>
      </nav>
    </header>
  );
}

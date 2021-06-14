import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PdCardMd from "./../../productCardMd/PdCardMd";

export default function Home() {
  const cart = useSelector((state) => state.cartReducer);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container mx-auto">
      {cart}
      <div className="grid grid-cols-1 gap-3 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:px-1 lg:px-0">
        {products.map((pd) => (
          <PdCardMd key={pd._id} data={pd} />
        ))}
      </div>
    </div>
  );
}

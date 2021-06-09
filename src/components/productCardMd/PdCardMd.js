import React from "react";
import tshirt from "../../assets/black-t-shirt.jpg";
export default function PdCardMd() {
  return (
    <div className="bg-white px-4 py-2 my-4 rounded shadow-lg">
      <div>
        <img src={tshirt} alt="Card Medium" />
      </div>
      <h3 className="text-gray-600 text-xl font-bold py-3">Nasa Kun T-shirt</h3>
    </div>
  );
}

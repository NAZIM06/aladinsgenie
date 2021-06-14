import React from "react";

export default function AddProduct() {
  return (
    <div className="container mx-auto">
      <h1>Add Product</h1>
      <div className="grid max-w-sm grid-cols-1 gap-5">
        <input
          type="text"
          placeholder="Title"
          className="bg-white border border-gray-400 rounded"
        />
        <input
          type="text"
          placeholder="Price"
          className="bg-white border border-gray-400 rounded"
        />
        <input
          type="text"
          placeholder="Description"
          className="bg-white border border-gray-400 rounded"
        />
        <input type="file" />
        <input
          type="submit"
          value="Add Product"
          className="py-2 border border-gray-400 rounded cursor-pointer"
        />
      </div>
    </div>
  );
}

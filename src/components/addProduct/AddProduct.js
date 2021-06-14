import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function AddProduct() {
  const [img, setImg] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleAddProduct = (data) => {
    data.imageURL = img;
    if (data.imageURL) {
      fetch("http://localhost:8000/admin/add-product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    }
    console.log(data);
  };
  const handleImageUpload = (e) => {
    const image = new FormData();
    image.append("file", e.target.files[0]);
    image.append("upload_preset", "pdytjkyl");
    fetch("https://api.cloudinary.com/v1_1/muktadir/upload", {
      method: "POST",
      body: image,
    })
      .then((res) => res.json())
      .then((data) => setImg(data.url))
      .catch((err) => console.log(err));
  };
  return (
    <div className="container mx-auto">
      <h1>Add Product</h1>
      <form
        className="grid max-w-sm grid-cols-1 gap-5"
        onSubmit={handleSubmit(handleAddProduct)}
      >
        <input
          type="text"
          placeholder="Title"
          className="bg-white border border-gray-400 rounded"
          {...register("title")}
        />
        <input
          type="text"
          placeholder="Price"
          className="bg-white border border-gray-400 rounded"
          {...register("price")}
        />
        <input
          type="text"
          placeholder="Description"
          className="bg-white border border-gray-400 rounded"
          {...register("description")}
        />
        <input type="file" onChange={handleImageUpload} />
        {!img && (
          <p>
            No image uploaded... This error will go away if you upload an image
          </p>
        )}
        <input
          type="submit"
          value="Add Product"
          className="py-2 border border-gray-400 rounded cursor-pointer"
        />
      </form>
    </div>
  );
}

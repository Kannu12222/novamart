"use client";

import { useState } from "react";

import toast from "react-hot-toast";

import {
  Package,
  Users,
  ShoppingCart,
  Pencil,
  Trash2,
  Plus,
} from "lucide-react";

import { useProductStore } from "../../store/productStore";

export default function AdminPage() {

  const {
    products,
    addProduct,
    deleteProduct,
    updateProduct,
  } = useProductStore();

  const [title, setTitle] = useState("");

  const [price, setPrice] = useState("");

  const [category, setCategory] = useState("");

  const [image, setImage] = useState("");

  const [description, setDescription] = useState("");

  const handleAddProduct = () => {

    if (
      !title ||
      !price ||
      !category ||
      !image ||
      !description
    ) {

      toast.error("Please fill all fields");

      return;
    }

    addProduct({
      id: Date.now(),
      title,
      description,
      category,
      brand: "NovaMart",
      price: Number(price),
      stock: 10,
      rating: 5,
      image,
    });

    toast.success("Product Added");

    setTitle("");
    setPrice("");
    setCategory("");
    setImage("");
    setDescription("");
  };

  return (
    <main className="w-full bg-black text-white min-h-screen px-6 lg:px-10 py-10">

      <div className="max-w-[1600px] mx-auto">

        {/* TOP */}
        <div className="mb-14">

          <h1 className="text-5xl md:text-6xl font-bold">

            Admin Dashboard

          </h1>

          <p className="text-gray-400 text-lg mt-5">

            Manage products, orders and platform analytics.

          </p>

        </div>

        {/* ANALYTICS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">

          {/* CARD */}
          <div className="bg-white/5 border border-white/10 rounded-[35px] p-8">

            <div className="w-16 h-16 rounded-3xl bg-pink-500/20 flex items-center justify-center">

              <Package className="text-pink-500" size={30} />

            </div>

            <h2 className="text-5xl font-bold mt-8">

              {products.length}

            </h2>

            <p className="text-gray-400 mt-3">

              Total Products

            </p>

          </div>

          {/* CARD */}
          <div className="bg-white/5 border border-white/10 rounded-[35px] p-8">

            <div className="w-16 h-16 rounded-3xl bg-blue-500/20 flex items-center justify-center">

              <Users className="text-blue-500" size={30} />

            </div>

            <h2 className="text-5xl font-bold mt-8">

              5K+

            </h2>

            <p className="text-gray-400 mt-3">

              Customers

            </p>

          </div>

          {/* CARD */}
          <div className="bg-white/5 border border-white/10 rounded-[35px] p-8">

            <div className="w-16 h-16 rounded-3xl bg-purple-500/20 flex items-center justify-center">

              <ShoppingCart className="text-purple-500" size={30} />

            </div>

            <h2 className="text-5xl font-bold mt-8">

              1.2K

            </h2>

            <p className="text-gray-400 mt-3">

              Orders

            </p>

          </div>

          {/* CARD */}
          <div className="bg-white/5 border border-white/10 rounded-[35px] p-8">

            <div className="w-16 h-16 rounded-3xl bg-green-500/20 flex items-center justify-center">

              <Package className="text-green-500" size={30} />

            </div>

            <h2 className="text-5xl font-bold mt-8">

              ₹2.5L

            </h2>

            <p className="text-gray-400 mt-3">

              Revenue

            </p>

          </div>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">

          {/* ADD PRODUCT */}
          <div className="xl:col-span-1 bg-white/5 border border-white/10 rounded-[35px] p-8 h-fit">

            <div className="flex items-center gap-4 mb-10">

              <div className="w-14 h-14 rounded-2xl bg-pink-500/20 flex items-center justify-center">

                <Plus className="text-pink-500" />

              </div>

              <div>

                <h2 className="text-3xl font-bold">

                  Add Product

                </h2>

                <p className="text-gray-400 mt-2">

                  Create new products instantly.

                </p>

              </div>

            </div>

            <div className="space-y-5">

              <input
                type="text"
                placeholder="Product Title"
                value={title}
                onChange={(e) =>
                  setTitle(e.target.value)
                }
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-pink-500"
              />

              <input
                type="number"
                placeholder="Product Price"
                value={price}
                onChange={(e) =>
                  setPrice(e.target.value)
                }
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-pink-500"
              />

              <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) =>
                  setCategory(e.target.value)
                }
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-pink-500"
              />

              <input
                type="text"
                placeholder="Image URL"
                value={image}
                onChange={(e) =>
                  setImage(e.target.value)
                }
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-pink-500"
              />

              <textarea
                rows={5}
                placeholder="Product Description"
                value={description}
                onChange={(e) =>
                  setDescription(e.target.value)
                }
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-pink-500"
              />

              <button
                onClick={handleAddProduct}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-500 py-5 rounded-2xl text-lg font-semibold hover:scale-105 transition"
              >

                Add Product

              </button>

            </div>

          </div>

          {/* PRODUCT LIST */}
          <div className="xl:col-span-2">

            <div className="flex items-center justify-between mb-10">

              <div>

                <h2 className="text-4xl font-bold">

                  Product Management

                </h2>

                <p className="text-gray-400 mt-3">

                  Edit and manage all store products.

                </p>

              </div>

            </div>

            <div className="space-y-6">

              {
                products.map((product) => (

                  <div
                    key={product.id}
                    className="bg-white/5 border border-white/10 rounded-[35px] p-6 flex flex-col lg:flex-row gap-6 items-center"
                  >

                    {/* IMAGE */}
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full lg:w-[160px] h-[160px] rounded-[25px] object-cover"
                    />

                    {/* INFO */}
                    <div className="flex-1">

                      <div className="flex flex-wrap gap-3">

                        <span className="bg-pink-500/20 text-pink-400 px-4 py-2 rounded-full text-sm">

                          {product.category}

                        </span>

                        <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm">

                          In Stock

                        </span>

                      </div>

                      <h3 className="text-3xl font-bold mt-6">

                        {product.title}

                      </h3>

                      <p className="text-pink-500 text-3xl font-bold mt-5">

                        ₹{product.price}

                      </p>

                    </div>

                    {/* ACTIONS */}
                    <div className="flex gap-4">

                      {/* EDIT */}
                      <button
                        onClick={() => {

                          const updatedTitle =
                            prompt(
                              "Enter new title",
                              product.title
                            );

                          if (!updatedTitle) return;

                          updateProduct({
                            ...product,
                            title: updatedTitle,
                          });

                          toast.success("Product Updated");

                        }}
                        className="w-14 h-14 rounded-2xl bg-blue-500/20 border border-blue-500/20 text-blue-400 flex items-center justify-center hover:bg-blue-500 hover:text-white transition"
                      >

                        <Pencil />

                      </button>

                      {/* DELETE */}
                      <button
                        onClick={() => {

                          deleteProduct(product.id);

                          toast.success("Product Deleted");

                        }}
                        className="w-14 h-14 rounded-2xl bg-red-500/20 border border-red-500/20 text-red-400 flex items-center justify-center hover:bg-red-500 hover:text-white transition"
                      >

                        <Trash2 />

                      </button>

                    </div>

                  </div>

                ))
              }

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}
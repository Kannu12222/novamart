"use client";

import { useEffect, useState } from "react";

export default function CartPage() {

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const count = localStorage.getItem("cartCount");

    if (count) {
      setCartCount(Number(count));
    }
  }, []);

  const removeItem = () => {
    localStorage.removeItem("cartCount");
    setCartCount(0);
  };

  return (
    <main className="bg-black min-h-screen text-white px-16 py-20">

      {/* TITLE */}
      <div className="mb-14">

        <h1 className="text-6xl font-bold">
          Your Cart
        </h1>

        <p className="text-gray-400 mt-4 text-lg">
          Review your selected products before checkout.
        </p>

      </div>

      {/* CONTENT */}
      {
        cartCount > 0 ? (

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* PRODUCT */}
            <div className="lg:col-span-2">

              <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-3xl p-8 flex items-center gap-8">

                <img
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
                  alt="product"
                  className="w-40 rounded-2xl"
                />

                <div>

                  <h2 className="text-3xl font-bold">
                    Premium Sneakers
                  </h2>

                  <p className="text-gray-400 mt-3">
                    Futuristic premium sneakers for modern fashion.
                  </p>

                  <h3 className="text-pink-500 text-3xl font-bold mt-5">
                    ₹2999
                  </h3>

                  <button
                    onClick={removeItem}
                    className="mt-6 bg-red-500 hover:bg-red-600 transition px-6 py-3 rounded-full"
                  >
                    Remove Item
                  </button>

                </div>

              </div>

            </div>

            {/* SUMMARY */}
            <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-3xl p-10 h-fit">

              <h2 className="text-4xl font-bold">
                Order Summary
              </h2>

              <div className="flex justify-between mt-10 text-xl">

                <span>Items</span>

                <span>{cartCount}</span>

              </div>

              <div className="flex justify-between mt-6 text-xl">

                <span>Total</span>

                <span className="text-pink-500 font-bold">
                  ₹{cartCount * 2999}
                </span>

              </div>

              <button className="w-full mt-12 bg-gradient-to-r from-pink-500 to-purple-500 py-4 rounded-full text-xl font-semibold hover:scale-105 transition">

                Proceed To Checkout

              </button>

            </div>

          </div>

        ) : (

          <div className="bg-gray-900 rounded-3xl p-16 text-center text-gray-400 text-2xl">
            Your cart is empty.
          </div>

        )
      }

    </main>
  );
}
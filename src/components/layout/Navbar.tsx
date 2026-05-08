"use client";

import Link from "next/link";
import { useState } from "react";
import { useCartStore } from "@/store/cartStore";

import {
  ShoppingCart,
  Heart,
  User,
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const [profileOpen, setProfileOpen] = useState(false);

  const { cartCount } = useCartStore();

  return (
    <nav className="w-full h-20 bg-black/60 backdrop-blur-xl text-white flex items-center justify-between px-6 md:px-10 border-b border-gray-800 sticky top-0 z-50">

      {/* LOGO */}
      <h1 className="text-3xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
        NovaMart
      </h1>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex gap-8 text-gray-300 font-medium">

        <a href="#" className="hover:text-pink-500 transition">
          Home
        </a>

        <a href="#" className="hover:text-pink-500 transition">
          Categories
        </a>

        <a href="#" className="hover:text-pink-500 transition">
          Deals
        </a>

        <a href="#" className="hover:text-pink-500 transition">
          Products
        </a>

      </div>

      {/* RIGHT SIDE */}
      <div className="hidden md:flex items-center gap-5">

        <Heart className="cursor-pointer hover:text-pink-500 transition" />

        {/* CART */}
        <Link href="/cart">

          <div className="relative cursor-pointer">

            <ShoppingCart className="hover:text-pink-500 transition" />

            {
              cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )
            }

          </div>

        </Link>

        <div className="relative">

  <User
    onClick={() => setProfileOpen(!profileOpen)}
    className="cursor-pointer hover:text-pink-500 transition"
  />

  {
    profileOpen && (
      <div className="absolute right-0 top-10 w-56 bg-black border border-gray-800 rounded-2xl p-4 flex flex-col gap-4 shadow-2xl">

        <a
          href="#"
          className="hover:text-pink-500 transition"
        >
          My Profile
        </a>

        <a
          href="#"
          className="hover:text-pink-500 transition"
        >
          Orders
        </a>

        <a
          href="#"
          className="hover:text-pink-500 transition"
        >
          Wishlist
        </a>

        <button className="bg-red-500 hover:bg-red-600 transition py-2 rounded-xl mt-2">
          Logout
        </button>

      </div>
    )
  }

</div>

        <Link href="/login">

  <button className="bg-gradient-to-r from-pink-500 to-purple-500 px-5 py-2 rounded-full font-semibold hover:scale-105 transition">
    Login
  </button>

</Link>

      </div>

      {/* MOBILE MENU BUTTON */}
      <button
        className="md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >

        {
          menuOpen
            ? <X size={32} />
            : <Menu size={32} />
        }

      </button>

      {/* MOBILE MENU */}
      {
        menuOpen && (
          <div className="absolute top-20 left-0 w-full bg-black border-b border-gray-800 flex flex-col items-center gap-6 py-10 md:hidden">

            <a href="#">Home</a>
            <a href="#">Categories</a>
            <a href="#">Deals</a>
            <a href="#">Products</a>

            <Link href="/login">

  <button className="bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 rounded-full">
    Login
  </button>

</Link>
          </div>
        )
      }

    </nav>
  );
}
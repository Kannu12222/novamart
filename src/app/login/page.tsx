"use client";

import Link from "next/link";

import {
  Mail,
  Lock,
  ArrowRight,
} from "lucide-react";

export default function LoginPage() {

  return (
    <main className="w-full min-h-screen bg-black text-white flex items-center justify-center px-6 py-10 overflow-hidden relative">

      {/* GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-500/20 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[140px] rounded-full"></div>

      {/* CARD */}
      <div className="relative w-full max-w-[500px] bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[40px] p-10 md:p-14">

        {/* TOP */}
        <div className="text-center">

          <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center mx-auto text-3xl font-bold">

            N

          </div>

          <h1 className="text-5xl font-bold mt-8">

            Welcome Back

          </h1>

          <p className="text-gray-400 mt-5 text-lg">

            Login to continue your futuristic shopping experience.

          </p>

        </div>

        {/* FORM */}
        <div className="mt-12 space-y-6">

          {/* EMAIL */}
          <div className="h-16 bg-black/40 border border-white/10 rounded-2xl flex items-center px-5 gap-4">

            <Mail className="text-gray-400" />

            <input
              type="email"
              placeholder="Email Address"
              className="bg-transparent outline-none w-full placeholder:text-gray-500"
            />

          </div>

          {/* PASSWORD */}
          <div className="h-16 bg-black/40 border border-white/10 rounded-2xl flex items-center px-5 gap-4">

            <Lock className="text-gray-400" />

            <input
              type="password"
              placeholder="Password"
              className="bg-transparent outline-none w-full placeholder:text-gray-500"
            />

          </div>

          {/* OPTIONS */}
          <div className="flex items-center justify-between text-sm">

            <label className="flex items-center gap-3 text-gray-400">

              <input type="checkbox" />

              Remember Me

            </label>

            <button className="text-pink-500">

              Forgot Password?

            </button>

          </div>

          {/* BUTTON */}
          <button className="w-full h-16 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 text-lg font-semibold flex items-center justify-center gap-3 hover:scale-105 transition">

            Login

            <ArrowRight />

          </button>

        </div>

        {/* REGISTER */}
        <p className="text-center text-gray-400 mt-10">

          Don’t have an account?

          <Link
            href="/register"
            className="text-pink-500 ml-2"
          >

            Register

          </Link>

        </p>

      </div>

    </main>
  );
}
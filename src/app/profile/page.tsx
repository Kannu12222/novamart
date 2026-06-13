"use client";

import {
  User,
  ShoppingBag,
  Heart,
  MapPin,
  CreditCard,
} from "lucide-react";

export default function ProfilePage() {

  return (
    <main className="w-full min-h-screen bg-black text-white px-6 lg:px-10 py-10">

      <div className="max-w-[1600px] mx-auto">

        {/* TOP */}
        <div className="mb-14">

          <h1 className="text-5xl md:text-6xl font-bold">

            My Profile

          </h1>

          <p className="text-gray-400 text-lg mt-5">

            Manage your profile, orders and account settings.

          </p>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">

          {/* LEFT PROFILE */}
          <div className="bg-white/5 border border-white/10 rounded-[35px] p-8 h-fit">

            {/* PROFILE IMAGE */}
            <div className="flex flex-col items-center text-center">

              <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-pink-500">

                <img
                  src="https://i.pravatar.cc/300?img=12"
                  alt="profile"
                  className="w-full h-full object-cover"
                />

              </div>

              <h2 className="text-3xl font-bold mt-8">

                Kulveer Singh

              </h2>

              <p className="text-gray-400 mt-3">

                premiumuser@gmail.com

              </p>

            </div>

            {/* MENU */}
            <div className="space-y-4 mt-12">

              <button className="w-full flex items-center gap-4 bg-pink-500/20 border border-pink-500/20 text-pink-400 px-6 py-5 rounded-2xl">

                <User />

                Profile Info

              </button>

              <button className="w-full flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-5 rounded-2xl hover:bg-white/10 transition">

                <ShoppingBag />

                Orders

              </button>

              <button className="w-full flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-5 rounded-2xl hover:bg-white/10 transition">

                <Heart />

                Wishlist

              </button>

              <button className="w-full flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-5 rounded-2xl hover:bg-white/10 transition">

                <MapPin />

                Addresses

              </button>

              <button className="w-full flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-5 rounded-2xl hover:bg-white/10 transition">

                <CreditCard />

                Payment Methods

              </button>

            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div className="xl:col-span-2 space-y-10">

            {/* STATS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              <div className="bg-white/5 border border-white/10 rounded-[35px] p-8">

                <h2 className="text-5xl font-bold text-pink-500">

                  24

                </h2>

                <p className="text-gray-400 mt-4">

                  Total Orders

                </p>

              </div>

              <div className="bg-white/5 border border-white/10 rounded-[35px] p-8">

                <h2 className="text-5xl font-bold text-purple-500">

                  12

                </h2>

                <p className="text-gray-400 mt-4">

                  Wishlist Items

                </p>

              </div>

              <div className="bg-white/5 border border-white/10 rounded-[35px] p-8">

                <h2 className="text-5xl font-bold text-blue-500">

                  3

                </h2>

                <p className="text-gray-400 mt-4">

                  Saved Addresses

                </p>

              </div>

            </div>

            {/* ACCOUNT DETAILS */}
            <div className="bg-white/5 border border-white/10 rounded-[35px] p-8">

              <h2 className="text-4xl font-bold">

                Account Details

              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

                <div>

                  <p className="text-gray-400">

                    Full Name

                  </p>

                  <h3 className="text-2xl font-bold mt-3">

                    Kulveer Singh

                  </h3>

                </div>

                <div>

                  <p className="text-gray-400">

                    Email Address

                  </p>

                  <h3 className="text-2xl font-bold mt-3">

                    premiumuser@gmail.com

                  </h3>

                </div>

                <div>

                  <p className="text-gray-400">

                    Phone Number

                  </p>

                  <h3 className="text-2xl font-bold mt-3">

                    +91 9876543210

                  </h3>

                </div>

                <div>

                  <p className="text-gray-400">

                    Membership

                  </p>

                  <h3 className="text-2xl font-bold mt-3 text-pink-500">

                    Premium

                  </h3>

                </div>

              </div>

            </div>

            {/* RECENT ORDERS */}
            <div className="bg-white/5 border border-white/10 rounded-[35px] p-8">

              <div className="flex items-center justify-between">

                <h2 className="text-4xl font-bold">

                  Recent Orders

                </h2>

                <button className="bg-white/5 border border-white/10 px-6 py-3 rounded-2xl hover:bg-white/10 transition">

                  View All

                </button>

              </div>

              <div className="space-y-6 mt-10">

                {/* ORDER */}
                <div className="bg-black/30 border border-white/10 rounded-3xl p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6">

                  <div className="flex items-center gap-5">

                    <img
                      src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
                      alt="product"
                      className="w-24 h-24 rounded-2xl object-cover"
                    />

                    <div>

                      <h3 className="text-2xl font-bold">

                        Premium Sneakers

                      </h3>

                      <p className="text-gray-400 mt-3">

                        Order #NM10234

                      </p>

                    </div>

                  </div>

                  <div className="text-right">

                    <p className="text-pink-500 text-3xl font-bold">

                      ₹2,999

                    </p>

                    <p className="text-green-400 mt-3">

                      Delivered

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}
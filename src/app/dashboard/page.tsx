export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-black text-white px-10 py-16">

      {/* HEADER */}
      <div className="mb-16">

        <h1 className="text-6xl font-bold">
          My Dashboard
        </h1>

        <p className="text-gray-400 mt-4 text-lg">
          Manage your profile, orders, and activity.
        </p>

      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* PROFILE CARD */}
        <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-3xl p-8">

          <div className="flex flex-col items-center text-center">

            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-pink-500"
            />

            <h2 className="text-3xl font-bold mt-6">
              Kulveer Singh
            </h2>

            <p className="text-gray-400 mt-2">
              Premium NovaMart Member
            </p>

          </div>

          <div className="mt-10 space-y-4 text-gray-300">

            <p>Email: kulveer@example.com</p>

            <p>Location: India</p>

            <p>Member Since: 2026</p>

          </div>

        </div>

        {/* STATS */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-3xl p-8">

            <h2 className="text-4xl font-bold text-pink-500">
              12
            </h2>

            <p className="text-gray-400 mt-4 text-lg">
              Orders Completed
            </p>

          </div>

          <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-3xl p-8">

            <h2 className="text-4xl font-bold text-purple-500">
              4
            </h2>

            <p className="text-gray-400 mt-4 text-lg">
              Wishlist Items
            </p>

          </div>

          <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-3xl p-8">

            <h2 className="text-4xl font-bold text-blue-500">
              ₹24K
            </h2>

            <p className="text-gray-400 mt-4 text-lg">
              Total Spending
            </p>

          </div>

          <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-3xl p-8">

            <h2 className="text-4xl font-bold text-green-500">
              Gold
            </h2>

            <p className="text-gray-400 mt-4 text-lg">
              Membership Status
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}
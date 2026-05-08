export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-6">

      {/* CARD */}
      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-gray-800 rounded-3xl p-10 text-white">

        {/* TITLE */}
        <div className="text-center mb-10">

          <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
            Create Account
          </h1>

          <p className="text-gray-400 mt-4">
            Join NovaMart and explore futuristic shopping.
          </p>

        </div>

        {/* FORM */}
        <form className="space-y-6">

          {/* NAME */}
          <div>

            <label className="text-gray-300">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full mt-3 bg-black border border-gray-700 rounded-2xl px-5 py-4 outline-none focus:border-pink-500 transition"
            />

          </div>

          {/* EMAIL */}
          <div>

            <label className="text-gray-300">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-3 bg-black border border-gray-700 rounded-2xl px-5 py-4 outline-none focus:border-pink-500 transition"
            />

          </div>

          {/* PASSWORD */}
          <div>

            <label className="text-gray-300">
              Password
            </label>

            <input
              type="password"
              placeholder="Create password"
              className="w-full mt-3 bg-black border border-gray-700 rounded-2xl px-5 py-4 outline-none focus:border-pink-500 transition"
            />

          </div>

          {/* BUTTON */}
          <button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 py-4 rounded-2xl text-lg font-semibold hover:scale-105 transition">

            Create Account

          </button>

        </form>

        {/* LOGIN */}
        <p className="text-center text-gray-400 mt-8">

          Already have an account?

          <a href="/login" className="text-pink-500 ml-2">
            Login
          </a>

        </p>

      </div>

    </main>
  );
}

export default function Stats() {
  return (
    <section className="bg-black text-white py-20 px-16">

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

        <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-500/20 rounded-3xl p-8 backdrop-blur-lg">

          <h1 className="text-5xl font-bold text-pink-500">
            10K+
          </h1>

          <p className="text-gray-300 mt-4 text-lg">
            Happy Customers
          </p>

        </div>

        <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/20 rounded-3xl p-8">

          <h1 className="text-5xl font-bold text-blue-400">
            5K+
          </h1>

          <p className="text-gray-300 mt-4 text-lg">
            Premium Products
          </p>

        </div>

        <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/20 rounded-3xl p-8">

          <h1 className="text-5xl font-bold text-purple-400">
            24/7
          </h1>

          <p className="text-gray-300 mt-4 text-lg">
            AI Support
          </p>

        </div>

        <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/20 border border-orange-500/20 rounded-3xl p-8">

          <h1 className="text-5xl font-bold text-orange-400">
            Fast
          </h1>

          <p className="text-gray-300 mt-4 text-lg">
            Delivery System
          </p>

        </div>

      </div>

    </section>
  );
}
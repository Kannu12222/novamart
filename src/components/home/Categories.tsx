import {
  Smartphone,
  Headphones,
  Shirt,
  Watch,
} from "lucide-react";

export default function Categories() {
  return (
    <section className="bg-black text-white px-16 py-20">

      {/* TITLE */}
      <div className="mb-14">

        <h1 className="text-5xl font-bold">
          Shop By Categories
        </h1>

        <p className="text-gray-400 mt-4 text-lg">
          Explore premium collections curated for modern lifestyles.
        </p>

      </div>

      {/* CATEGORY GRID */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* CARD 1 */}
        <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-500/20 rounded-3xl p-10 hover:scale-105 transition cursor-pointer">

          <Smartphone size={50} className="text-pink-400" />

          <h2 className="text-3xl font-bold mt-6">
            Electronics
          </h2>

          <p className="text-gray-400 mt-3">
            Smartphones, gadgets & more.
          </p>

        </div>

        {/* CARD 2 */}
        <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/20 rounded-3xl p-10 hover:scale-105 transition cursor-pointer">

          <Headphones size={50} className="text-blue-400" />

          <h2 className="text-3xl font-bold mt-6">
            Audio
          </h2>

          <p className="text-gray-400 mt-3">
            Premium sound experiences.
          </p>

        </div>

        {/* CARD 3 */}
        <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/20 border border-orange-500/20 rounded-3xl p-10 hover:scale-105 transition cursor-pointer">

          <Shirt size={50} className="text-orange-400" />

          <h2 className="text-3xl font-bold mt-6">
            Fashion
          </h2>

          <p className="text-gray-400 mt-3">
            Trending modern outfits.
          </p>

        </div>

        {/* CARD 4 */}
        <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/20 rounded-3xl p-10 hover:scale-105 transition cursor-pointer">

          <Watch size={50} className="text-purple-400" />

          <h2 className="text-3xl font-bold mt-6">
            Accessories
          </h2>

          <p className="text-gray-400 mt-3">
            Watches, bags & essentials.
          </p>

        </div>

      </div>

    </section>
  );
}
import { Search, Mic, Sparkles } from "lucide-react";

export default function AISearch() {
  return (
    <section className="bg-black text-white px-16 py-24">

      <div className="bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 border border-gray-800 rounded-[40px] p-14 relative overflow-hidden">

        {/* GLOW */}
        <div className="absolute w-96 h-96 bg-pink-500/20 blur-3xl rounded-full top-0 left-0"></div>

        <div className="relative z-10">

          {/* TITLE */}
          <div className="flex items-center gap-3 mb-6">

            <Sparkles className="text-pink-500" size={35} />

            <h1 className="text-5xl font-bold">
              AI Smart Search
            </h1>

          </div>

          <p className="text-gray-400 text-xl max-w-3xl">
            Search products intelligently using AI-powered recommendations,
            voice search, and smart suggestions.
          </p>

          {/* SEARCH BAR */}
          <div className="mt-10 bg-black/40 border border-gray-700 rounded-full flex items-center px-6 py-5">

            <Search className="text-gray-400" />

            <input
              type="text"
              placeholder="Search for futuristic sneakers, gaming laptops, smart watches..."
              className="bg-transparent outline-none w-full px-4 text-lg"
            />

            <button className="bg-gradient-to-r from-pink-500 to-purple-500 p-4 rounded-full hover:scale-105 transition">
              <Mic />
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}
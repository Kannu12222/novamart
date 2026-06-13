"use client";

import { useEffect, useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/product/ProductCard";
import { useProductStore } from "@/store/productStore";

export default function ShopPage() {
  const products = useProductStore((state) => state.products);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const query = params.get("q") ?? "";
    const selectedCategory = params.get("category") ?? "All";
    const selectedSort = params.get("sort") ?? "featured";
    const timer = window.setTimeout(() => {
      setSearch(query);
      setCategory(selectedCategory);
      setSort(selectedSort);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(products.map((product) => product.category)))],
    [products]
  );

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();
    const result = products.filter((product) => {
      const matchesSearch = !query || `${product.title} ${product.brand} ${product.category}`.toLowerCase().includes(query);
      return matchesSearch && (category === "All" || product.category === category);
    });

    return [...result].sort((a, b) => {
      if (sort === "price-low") return a.price - b.price;
      if (sort === "price-high") return b.price - a.price;
      if (sort === "rating") return b.rating - a.rating;
      return a.id - b.id;
    });
  }, [category, products, search, sort]);

  return (
    <main className="min-h-screen bg-[#050507] text-white">
      <Navbar />
      <section className="container-main py-12 md:py-16">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-pink-400">The NovaMart edit</span>
          <h1 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl md:text-6xl">Find your next favorite.</h1>
          <p className="mt-5 max-w-2xl text-base text-gray-400 md:text-lg">Browse thoughtfully selected technology, fashion, gaming, and everyday essentials.</p>
        </div>

        <div className="surface mt-10 rounded-[24px] p-4 md:p-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            <label className="flex h-12 flex-1 items-center gap-3 rounded-xl border border-white/10 bg-black/25 px-4 focus-within:border-pink-500/60">
              <Search size={18} className="text-gray-500" />
              <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search by product, category, or brand" className="w-full bg-transparent text-sm outline-none placeholder:text-gray-600" />
              {search && <button onClick={() => setSearch("")} aria-label="Clear search"><X size={17} className="text-gray-500 hover:text-white" /></button>}
            </label>
            <div className="flex gap-3">
              <label className="relative flex h-12 flex-1 items-center gap-2 rounded-xl border border-white/10 bg-black/25 px-4 lg:flex-none">
                <SlidersHorizontal size={17} className="text-gray-500" />
                <select value={category} onChange={(event) => setCategory(event.target.value)} className="min-w-28 appearance-none bg-transparent pr-4 text-sm outline-none">
                  {categories.map((item) => <option key={item} value={item} className="bg-[#111116]">{item}</option>)}
                </select>
              </label>
              <select value={sort} onChange={(event) => setSort(event.target.value)} className="h-12 flex-1 rounded-xl border border-white/10 bg-[#0b0b0f] px-4 text-sm outline-none lg:flex-none">
                <option value="featured">Featured</option>
                <option value="rating">Top rated</option>
                <option value="price-low">Price: low to high</option>
                <option value="price-high">Price: high to low</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mb-7 mt-10 flex items-center justify-between">
          <p className="text-sm text-gray-500"><span className="font-semibold text-white">{filteredProducts.length}</span> products</p>
          {(search || category !== "All") && <button onClick={() => { setSearch(""); setCategory("All"); }} className="text-sm font-medium text-pink-400 hover:text-pink-300">Clear filters</button>}
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => <ProductCard key={product.id} {...product} />)}
          </div>
        ) : (
          <div className="surface rounded-[24px] py-24 text-center">
            <h2 className="text-2xl font-bold">No matching products</h2>
            <p className="mt-3 text-gray-500">Try a broader search or clear the selected category.</p>
          </div>
        )}
      </section>
      <Footer />
    </main>
  );
}

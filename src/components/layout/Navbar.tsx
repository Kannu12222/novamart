"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";
import { useAuthStore } from "@/store/authStore";
import { useHydrated } from "@/lib/useHydrated";

const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/wishlist", label: "Wishlist" },
  { href: "/orders", label: "Orders" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const mounted = useHydrated();
  const pathname = usePathname();
  const router = useRouter();
  const cartItems = useCartStore((state) => state.cartItems);
  const wishlistItems = useWishlistStore((state) => state.wishlistItems);
  const user = useAuthStore((state) => state.user);

  const cartCount = mounted
    ? cartItems.reduce((total, item) => total + item.quantity, 0)
    : 0;
  const wishlistCount = mounted ? wishlistItems.length : 0;

  function submitSearch(event: FormEvent) {
    event.preventDefault();
    const query = search.trim();
    router.push(query ? `/shop?q=${encodeURIComponent(query)}` : "/shop");
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050507]/85 backdrop-blur-2xl">
      <div className="border-b border-white/5 bg-gradient-to-r from-pink-500/10 via-violet-500/10 to-blue-500/10">
        <div className="container-main flex h-8 items-center justify-center text-center text-[11px] font-medium text-gray-300 sm:justify-between">
          <span>Free delivery above ₹999 · Easy 7-day returns</span>
          <span className="hidden sm:block">Use NOVA10 for 10% off your first cart</span>
        </div>
      </div>
      <div className="container-main flex h-[72px] items-center gap-5 lg:h-20">
        <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="NovaMart home">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-pink-500 to-violet-600 text-lg font-black shadow-lg shadow-pink-500/20">
            N
          </span>
          <span className="hidden sm:block">
            <span className="block text-xl font-extrabold tracking-tight">NovaMart</span>
            <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-gray-500">Smart shopping</span>
          </span>
        </Link>

        <form onSubmit={submitSearch} className="mx-auto hidden max-w-2xl flex-1 lg:block">
          <label className="flex h-12 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.045] px-4 focus-within:border-pink-500/60 focus-within:bg-white/[0.07]">
            <Search className="text-gray-500" size={18} />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search products and categories"
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-600"
              aria-label="Search products"
            />
          </label>
        </form>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary navigation">
          {links.slice(0, 2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-xl px-4 py-2 text-sm font-medium ${pathname === link.href ? "bg-white/10 text-white" : "text-gray-400 hover:text-white"}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Link href="/wishlist" className="relative grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.045] text-gray-300 hover:border-white/20 hover:text-white" aria-label="Wishlist">
            <Heart size={19} />
            {wishlistCount > 0 && <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-pink-500 px-1 text-[10px] font-bold">{wishlistCount}</span>}
          </Link>
          <Link href="/cart" className="relative grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.045] text-gray-300 hover:border-white/20 hover:text-white" aria-label="Shopping cart">
            <ShoppingBag size={19} />
            {cartCount > 0 && <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-violet-500 px-1 text-[10px] font-bold">{cartCount}</span>}
          </Link>
          <Link href={user ? "/profile" : "/login"} className="hidden h-11 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.045] px-3 text-sm text-gray-300 hover:text-white sm:flex">
            <User size={18} />
            <span className="max-w-24 truncate">{mounted && user ? user.name.split(" ")[0] : "Sign in"}</span>
          </Link>
          <button onClick={() => setMenuOpen(true)} className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.045] lg:hidden" aria-label="Open menu">
            <Menu size={20} />
          </button>
        </div>
      </div>

      <nav className="hidden border-t border-white/5 md:block" aria-label="Product categories">
        <div className="container-main flex h-11 items-center gap-7 overflow-x-auto text-xs font-semibold text-gray-400">
          {["Electronics", "Mobiles", "Fashion", "Audio", "Gaming", "Watches"].map((category) => (
            <Link key={category} href={`/shop?category=${category}`} className="whitespace-nowrap hover:text-pink-400">{category}</Link>
          ))}
          <Link href="/shop?sort=rating" className="ml-auto whitespace-nowrap text-emerald-400 hover:text-emerald-300">Top rated</Link>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm lg:hidden" onClick={() => setMenuOpen(false)}>
          <aside className="ml-auto flex h-full w-[min(88vw,360px)] flex-col border-l border-white/10 bg-[#09090c] p-6" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold">Menu</span>
              <button onClick={() => setMenuOpen(false)} className="grid h-11 w-11 place-items-center rounded-xl bg-white/5" aria-label="Close menu"><X size={20} /></button>
            </div>
            <form onSubmit={submitSearch} className="mt-7 flex h-12 items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4">
              <Search size={18} className="text-gray-500" />
              <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search products" className="w-full bg-transparent text-sm outline-none" />
            </form>
            <nav className="mt-6 flex flex-col gap-2">
              {links.map((link) => <Link key={link.href} href={link.href} className="rounded-xl px-4 py-3 text-gray-300 hover:bg-white/5 hover:text-white">{link.label}</Link>)}
              <Link href={user ? "/profile" : "/login"} className="mt-2 rounded-xl bg-gradient-to-r from-pink-500 to-violet-600 px-4 py-3 font-semibold">{mounted && user ? "My profile" : "Sign in"}</Link>
            </nav>
          </aside>
        </div>
      )}
    </header>
  );
}

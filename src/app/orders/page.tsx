"use client";

import Link from "next/link";
import { Check, Package, Truck } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useHydrated } from "@/lib/useHydrated";
import { useOrderStore } from "@/store/orderStore";

const money = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });

export default function OrdersPage() {
  const mounted = useHydrated();
  const orders = useOrderStore((state) => state.orders);

  return <main className="min-h-screen bg-[#050507] text-white">
    <Navbar />
    <section className="container-main py-10 md:py-14">
      <p className="text-sm font-semibold uppercase tracking-[.2em] text-pink-400">Your account</p><h1 className="mt-3 text-4xl font-black tracking-[-.04em] sm:text-5xl">My orders</h1>
      {!mounted ? <div className="min-h-[440px]" /> : orders.length === 0 ? <div className="surface mt-10 flex min-h-[440px] flex-col items-center justify-center rounded-[28px] px-6 text-center"><span className="grid h-20 w-20 place-items-center rounded-full bg-violet-500/10 text-violet-400"><Package size={34} /></span><h2 className="mt-7 text-3xl font-bold">No orders yet</h2><p className="mt-3 text-gray-500">Your purchases and delivery progress will appear here.</p><Link href="/shop" className="mt-8 rounded-xl bg-gradient-to-r from-pink-500 to-violet-600 px-7 py-3 font-semibold">Explore products</Link></div> : <div className="mt-10 space-y-5">
        {orders.map((order) => <article key={order.id} className="surface overflow-hidden rounded-[24px]">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 bg-white/[0.025] px-5 py-4 sm:px-6"><div><p className="text-xs uppercase tracking-[.15em] text-gray-600">Order {order.id}</p><p className="mt-1 text-sm text-gray-400">Placed {new Date(order.placedAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</p></div><div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1.5 text-sm font-semibold text-emerald-400"><Check size={15} /> {order.status}</div></div>
          <div className="p-5 sm:p-6"><div className="space-y-4">{order.items.map((item) => <div key={item.id} className="flex items-center gap-4"><img src={item.image} alt={item.title} className="h-20 w-20 rounded-xl object-cover" /><div className="min-w-0 flex-1"><Link href={`/product/${item.id}`} className="font-bold hover:text-pink-400">{item.title}</Link><p className="mt-1 text-sm text-gray-500">Quantity {item.quantity}</p></div><p className="font-bold">{money.format(item.price * item.quantity)}</p></div>)}</div><div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5"><p className="flex items-center gap-2 text-sm text-gray-500"><Truck size={17} /> Delivery to {order.address}</p><p className="text-lg font-black">Total {money.format(order.total)}</p></div></div>
        </article>)}
      </div>}
    </section>
    <Footer />
  </main>;
}

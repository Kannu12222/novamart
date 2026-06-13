"use client";

import Link from "next/link";
import { Check, PackageCheck } from "lucide-react";
import { useHydrated } from "@/lib/useHydrated";
import { useOrderStore } from "@/store/orderStore";

export default function OrderSuccessPage() {
  const mounted = useHydrated();
  const orders = useOrderStore((state) => state.orders);
  const id = mounted ? new URLSearchParams(window.location.search).get("id") : null;
  const order = orders.find((item) => item.id === id) ?? orders[0];

  return <main className="relative grid min-h-screen place-items-center overflow-hidden bg-[#050507] px-6 text-white">
    <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-pink-500/15 blur-[140px]" /><div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-violet-500/15 blur-[140px]" />
    <div className="surface relative w-full max-w-2xl rounded-[32px] p-7 text-center sm:p-12">
      <span className="mx-auto grid h-24 w-24 place-items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400"><PackageCheck size={44} /></span>
      <div className="mx-auto mt-8 flex w-fit items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-bold text-emerald-400"><Check size={16} /> Order confirmed</div>
      <h1 className="mt-6 text-4xl font-black tracking-[-.04em] sm:text-5xl">Thank you for shopping.</h1>
      <p className="mx-auto mt-5 max-w-lg text-gray-400">We have received your order and will send updates as it moves through packing and delivery.</p>
      {order && <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-5"><p className="text-xs uppercase tracking-[.18em] text-gray-600">Order number</p><p className="mt-2 text-xl font-black text-pink-400">{order.id}</p></div>}
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Link href="/orders" className="rounded-xl bg-gradient-to-r from-pink-500 to-violet-600 px-7 py-3 font-bold">Track my order</Link><Link href="/shop" className="rounded-xl border border-white/10 bg-white/5 px-7 py-3 font-bold hover:bg-white/10">Continue shopping</Link></div>
    </div>
  </main>;
}

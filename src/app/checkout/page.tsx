"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { CreditCard, MapPin, ShieldCheck, Smartphone, Truck } from "lucide-react";
import toast from "react-hot-toast";
import Navbar from "@/components/layout/Navbar";
import { useHydrated } from "@/lib/useHydrated";
import { useCartStore } from "@/store/cartStore";
import { useOrderStore } from "@/store/orderStore";

const money = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });

export default function CheckoutPage() {
  const router = useRouter();
  const mounted = useHydrated();
  const { cartItems, clearCart } = useCartStore();
  const addOrder = useOrderStore((state) => state.addOrder);
  const [payment, setPayment] = useState<"cod" | "card" | "upi">("upi");
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const couponApplied = mounted && new URLSearchParams(window.location.search).get("coupon") === "NOVA10";
  const discount = couponApplied ? Math.min(Math.round(subtotal * 0.1), 1000) : 0;
  const shipping = subtotal > 0 && subtotal < 999 ? 99 : 0;
  const total = subtotal - discount + shipping;

  function placeOrder(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!cartItems.length) return;
    const data = new FormData(event.currentTarget);
    const orderId = `NM${Date.now().toString().slice(-8)}`;
    addOrder({
      id: orderId,
      items: cartItems,
      total,
      paymentMethod: payment,
      address: `${data.get("address")}, ${data.get("city")}, ${data.get("state")} - ${data.get("pincode")}`,
      placedAt: new Date().toISOString(),
      status: "Confirmed",
    });
    clearCart();
    toast.success("Order confirmed");
    router.push(`/order-success?id=${orderId}`);
  }

  if (mounted && cartItems.length === 0) {
    return <main className="grid min-h-screen place-items-center bg-[#050507] px-6 text-center text-white"><div><h1 className="text-3xl font-black">Your cart is empty</h1><button onClick={() => router.push("/shop")} className="mt-6 rounded-xl bg-gradient-to-r from-pink-500 to-violet-600 px-7 py-3 font-bold">Return to shop</button></div></main>;
  }

  const inputClass = "h-13 rounded-xl border border-white/10 bg-black/25 px-4 text-sm outline-none placeholder:text-gray-600 focus:border-pink-500/60";

  return (
    <main className="min-h-screen bg-[#050507] text-white">
      <Navbar />
      <form onSubmit={placeOrder} className="container-main py-10 md:py-14">
        <div><p className="text-sm font-semibold uppercase tracking-[.2em] text-pink-400">Secure checkout</p><h1 className="mt-3 text-4xl font-black tracking-[-.04em] sm:text-5xl">Almost yours.</h1></div>
        <div className="mt-10 grid gap-8 xl:grid-cols-[1fr_380px]">
          <div className="space-y-6">
            <section className="surface rounded-[24px] p-5 sm:p-7">
              <div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-pink-500/10 text-pink-400"><MapPin size={20} /></span><div><h2 className="text-xl font-black">Delivery address</h2><p className="text-sm text-gray-500">Where should we send your order?</p></div></div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <input name="name" required placeholder="Full name" className={inputClass} />
                <input name="phone" required pattern="[0-9]{10}" inputMode="numeric" placeholder="10-digit phone number" className={inputClass} />
                <input name="email" required type="email" placeholder="Email address" className={`${inputClass} sm:col-span-2`} />
                <textarea name="address" required rows={4} placeholder="House number, street, and landmark" className="rounded-xl border border-white/10 bg-black/25 px-4 py-4 text-sm outline-none placeholder:text-gray-600 focus:border-pink-500/60 sm:col-span-2" />
                <input name="city" required placeholder="City" className={inputClass} />
                <input name="state" required placeholder="State" className={inputClass} />
                <input name="pincode" required pattern="[0-9]{6}" inputMode="numeric" placeholder="6-digit pincode" className={inputClass} />
              </div>
            </section>

            <section className="surface rounded-[24px] p-5 sm:p-7">
              <div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-violet-500/10 text-violet-400"><CreditCard size={20} /></span><div><h2 className="text-xl font-black">Payment method</h2><p className="text-sm text-gray-500">Choose how you want to pay.</p></div></div>
              <div className="mt-6 grid gap-3">
                {[
                  { id: "upi" as const, title: "UPI", detail: "Google Pay, PhonePe, Paytm, or any UPI app", icon: Smartphone },
                  { id: "card" as const, title: "Credit or debit card", detail: "Visa, Mastercard, and RuPay", icon: CreditCard },
                  { id: "cod" as const, title: "Cash on delivery", detail: "Pay when your package arrives", icon: Truck },
                ].map((method) => {
                  const Icon = method.icon;
                  return <button type="button" key={method.id} onClick={() => setPayment(method.id)} className={`flex items-center gap-4 rounded-2xl border p-4 text-left ${payment === method.id ? "border-pink-500/50 bg-pink-500/10" : "border-white/10 bg-black/20 hover:border-white/20"}`}>
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/5"><Icon size={19} /></span><span className="flex-1"><b className="block">{method.title}</b><span className="mt-1 block text-xs text-gray-500">{method.detail}</span></span><span className={`h-4 w-4 rounded-full border-4 ${payment === method.id ? "border-pink-500 bg-white" : "border-gray-600"}`} />
                  </button>;
                })}
              </div>
            </section>
          </div>

          <aside className="surface h-fit rounded-[24px] p-6 xl:sticky xl:top-28">
            <h2 className="text-xl font-black">Order summary</h2>
            <div className="mt-6 max-h-64 space-y-4 overflow-auto pr-1">
              {cartItems.map((item) => <div key={item.id} className="flex gap-3"><img src={item.image} alt="" className="h-16 w-16 rounded-xl object-cover" /><div className="min-w-0 flex-1"><p className="truncate text-sm font-semibold">{item.title}</p><p className="mt-1 text-xs text-gray-500">Qty {item.quantity}</p></div><p className="text-sm font-bold">{money.format(item.price * item.quantity)}</p></div>)}
            </div>
            <div className="my-6 border-t border-dashed border-white/15" />
            <div className="space-y-4 text-sm"><div className="flex justify-between text-gray-400"><span>Subtotal</span><span className="text-white">{money.format(subtotal)}</span></div><div className="flex justify-between text-gray-400"><span>Delivery</span><span className={shipping ? "text-white" : "text-emerald-400"}>{shipping ? money.format(shipping) : "Free"}</span></div>{couponApplied && <div className="flex justify-between text-emerald-400"><span>NOVA10</span><span>-{money.format(discount)}</span></div>}</div>
            <div className="my-6 border-t border-white/10" />
            <div className="flex items-center justify-between"><span className="font-bold">Total</span><span className="text-2xl font-black">{money.format(total)}</span></div>
            <button type="submit" className="mt-7 h-14 w-full rounded-xl bg-gradient-to-r from-pink-500 to-violet-600 font-bold shadow-xl shadow-pink-500/15 hover:scale-[1.02]">Place order</button>
            <p className="mt-5 flex items-center justify-center gap-2 text-xs text-gray-500"><ShieldCheck size={15} /> Protected by secure checkout</p>
          </aside>
        </div>
      </form>
    </main>
  );
}

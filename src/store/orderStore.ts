"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type OrderItem = {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

export type Order = {
  id: string;
  items: OrderItem[];
  total: number;
  paymentMethod: "cod" | "card" | "upi";
  address: string;
  placedAt: string;
  status: "Confirmed" | "Packed" | "Shipped" | "Delivered";
};

type OrderStore = {
  orders: Order[];
  addOrder: (order: Order) => void;
};

export const useOrderStore = create<OrderStore>()(
  persist(
    (set) => ({
      orders: [],
      addOrder: (order) => set((state) => ({ orders: [order, ...state.orders] })),
    }),
    { name: "novamart-orders" }
  )
);

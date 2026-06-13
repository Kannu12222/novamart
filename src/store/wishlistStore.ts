"use client";

import { create } from "zustand";

import { persist } from "zustand/middleware";

type WishlistItem = {
  id: number;
  title: string;
  price: number;
  image: string;
};

type WishlistStore = {
  wishlistItems: WishlistItem[];

  addToWishlist: (
    item: WishlistItem
  ) => void;

  removeFromWishlist: (
    id: number
  ) => void;
};

export const useWishlistStore =
  create<WishlistStore>()(

    persist(

      (set, get) => ({

        wishlistItems: [],

        addToWishlist: (item) => {

          const exists =
            get().wishlistItems.find(
              (product) =>
                product.id === item.id
            );

          if (exists) return;

          set((state) => ({

            wishlistItems: [
              ...state.wishlistItems,
              item,
            ],

          }));
        },

        removeFromWishlist: (id) =>

          set((state) => ({

            wishlistItems:
              state.wishlistItems.filter(
                (item) => item.id !== id
              ),

          })),

      }),

      {
        name: "novamart-wishlist",
      }

    )

  );
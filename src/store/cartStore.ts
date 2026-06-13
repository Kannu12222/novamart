"use client";

import { create } from "zustand";

import { persist } from "zustand/middleware";

type CartItem = {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

type CartStore = {
  cartItems: CartItem[];

  addToCart: (item: Omit<CartItem, "quantity">) => void;

  removeFromCart: (id: number) => void;

  clearCart: () => void;

  increaseQuantity: (id: number) => void;

  decreaseQuantity: (id: number) => void;
};

export const useCartStore = create<CartStore>()(

  persist(

    (set) => ({

      cartItems: [],

      addToCart: (item) =>

        set((state) => {

          const existingItem = state.cartItems.find(
            (product) => product.id === item.id
          );

          if (existingItem) {

            return {
              cartItems: state.cartItems.map((product) =>

                product.id === item.id

                  ? {
                      ...product,
                      quantity: product.quantity + 1,
                    }

                  : product
              ),
            };
          }

          return {
            cartItems: [
              ...state.cartItems,
              {
                ...item,
                quantity: 1,
              },
            ],
          };
        }),

      removeFromCart: (id) =>

        set((state) => ({

          cartItems: state.cartItems.filter(
            (item) => item.id !== id
          ),

        })),

      clearCart: () =>
        set({
          cartItems: [],
        }),

      increaseQuantity: (id) =>

        set((state) => ({

          cartItems: state.cartItems.map((item) =>

            item.id === id

              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }

              : item
          ),

        })),

      decreaseQuantity: (id) =>

        set((state) => ({

          cartItems: state.cartItems.map((item) =>

            item.id === id

              ? {
                  ...item,
                  quantity:
                    item.quantity > 1
                      ? item.quantity - 1
                      : 1,
                }

              : item
          ),

        })),

    }),

    {
      name: "novamart-cart",

      skipHydration: false,
    }

  )

);
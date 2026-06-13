"use client";

import { create } from "zustand";

import { persist } from "zustand/middleware";

export type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  brand: string;
  price: number;
  stock: number;
  rating: number;
  image: string;
};

type ProductStore = {
  products: Product[];

  addProduct: (product: Product) => void;

  deleteProduct: (id: number) => void;

  updateProduct: (
    updatedProduct: Product
  ) => void;
};

export const useProductStore = create<ProductStore>()(

  persist(

    (set) => ({

      products: [

        {
          id: 1,
          title: "Premium Sneakers",
          description:
            "Premium futuristic sneakers designed for comfort and fashion.",
          category: "Fashion",
          brand: "NovaWear",
          price: 2999,
          stock: 12,
          rating: 5,
          image:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
        },

        {
          id: 2,
          title: "Gaming Laptop",
          description:
            "High-performance gaming laptop with next-gen graphics.",
          category: "Electronics",
          brand: "NovaTech",
          price: 89999,
          stock: 5,
          rating: 4.8,
          image:
            "https://images.unsplash.com/photo-1517336714739-489689fd1ca8",
        },

        {
          id: 3,
          title: "Studio Headphones",
          description: "Immersive wireless audio with active noise cancellation and all-day comfort.",
          category: "Audio",
          brand: "NovaSound",
          price: 7999,
          stock: 18,
          rating: 4.9,
          image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
        },

        {
          id: 4,
          title: "Essential Smartwatch",
          description: "A refined everyday smartwatch for fitness, calls, and notifications.",
          category: "Watches",
          brand: "NovaPulse",
          price: 5999,
          stock: 24,
          rating: 4.7,
          image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        },

        {
          id: 5,
          title: "Mechanical Keyboard",
          description: "A compact wireless keyboard with tactile switches and customizable lighting.",
          category: "Gaming",
          brand: "NovaPlay",
          price: 4499,
          stock: 15,
          rating: 4.8,
          image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
        },

        {
          id: 6,
          title: "Minimal Backpack",
          description: "Weather-resistant daily carry with a padded laptop sleeve and clean silhouette.",
          category: "Fashion",
          brand: "NovaWear",
          price: 2499,
          stock: 32,
          rating: 4.6,
          image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
        },

        {
          id: 7,
          title: "Flagship Smartphone",
          description: "A vivid edge-to-edge display, pro-grade cameras, and dependable battery life.",
          category: "Mobiles",
          brand: "NovaTech",
          price: 64999,
          stock: 9,
          rating: 4.9,
          image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
        },

        {
          id: 8,
          title: "Portable Speaker",
          description: "Room-filling sound in a compact, water-resistant design built for travel.",
          category: "Audio",
          brand: "NovaSound",
          price: 3499,
          stock: 27,
          rating: 4.7,
          image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
        },

      ],

      addProduct: (product) =>

        set((state) => ({

          products: [...state.products, product],

        })),

      deleteProduct: (id) =>

        set((state) => ({

          products: state.products.filter(
            (product) => product.id !== id
          ),

        })),

      updateProduct: (updatedProduct) =>

        set((state) => ({

          products: state.products.map((product) =>

            product.id === updatedProduct.id
              ? updatedProduct
              : product

          ),

        })),

    }),

    {
      name: "novamart-products",
      version: 1,
      merge: (persistedState, currentState) => {
        const savedState = persistedState as Partial<ProductStore>;
        const savedProducts = savedState.products ?? [];
        const newDefaults = currentState.products.filter(
          (product) => !savedProducts.some((saved) => saved.id === product.id)
        );

        return {
          ...currentState,
          ...savedState,
          products: [...savedProducts, ...newDefaults],
        };
      },
    }

  )

);

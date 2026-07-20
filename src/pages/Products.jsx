import React, { useMemo, useState } from "react";
import {
  FiFilter,
  FiSearch,
  FiShoppingBag,
  FiSliders,
  FiStar,
} from "react-icons/fi";

import productOne from "../assets/images/p2.png";
import productTwo from "../assets/images/p3.png";
import productThree from "../assets/images/p4.png";
import productFour from "../assets/images/p5.png";

function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All Brands");

  const products = [
    {
      name: "Velvet Bloom",
      brand: "Dior",
      category: "Women",
      price: "$89.00",
      rating: "4.8",
      img: productOne,
    },
    {
      name: "Royal Oud",
      brand: "Chanel",
      category: "Men",
      price: "$96.00",
      rating: "4.7",
      img: productTwo,
    },
    {
      name: "Pink Noir",
      brand: "Gucci",
      category: "Women",
      price: "$112.00",
      rating: "4.9",
      img: productThree,
    },
    {
      name: "Mystic Aura",
      brand: "Versace",
      category: "Men",
      price: "$129.00",
      rating: "4.8",
      img: productFour,
    },
    {
      name: "Purple Rain",
      brand: "Tom Ford",
      category: "Women",
      price: "$138.00",
      rating: "4.9",
      img: productOne,
    },
    {
      name: "Amber King",
      brand: "Armani",
      category: "Men",
      price: "$104.00",
      rating: "4.6",
      img: productTwo,
    },
    {
      name: "Rose Elixir",
      brand: "YSL",
      category: "Women",
      price: "$118.00",
      rating: "4.8",
      img: productThree,
    },
    {
      name: "Night Pulse",
      brand: "Prada",
      category: "Men",
      price: "$121.00",
      rating: "4.7",
      img: productFour,
    },
  ];

  const categories = ["All", "Men", "Women"];
  const brands = [
    "All Brands",
    "Dior",
    "Chanel",
    "Gucci",
    "Versace",
    "Tom Ford",
    "Armani",
    "YSL",
    "Prada",
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.brand.toLowerCase().includes(search.toLowerCase());
      const matchCategory = category === "All" || product.category === category;
      const matchBrand = brand === "All Brands" || product.brand === brand;

      return matchSearch && matchCategory && matchBrand;
    });
  }, [brand, category, search]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#09010f] pb-24 pt-32 text-white lg:pt-36">
      <div className="pointer-events-none absolute -left-24 top-20 h-[460px] w-[460px] rounded-full bg-pink-600/16 blur-[160px]" />
      <div className="pointer-events-none absolute -right-24 top-[420px] h-[460px] w-[460px] rounded-full bg-purple-700/18 blur-[160px]" />

      <section className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-pink-300/20 bg-gradient-to-r from-pink-500/10 to-purple-600/10 px-5 py-2 text-xs font-medium uppercase tracking-[4px] text-pink-200 shadow-[0_0_28px_rgba(236,72,153,.14)] backdrop-blur-xl">
              <FiStar className="text-pink-300 text-sm" />
              Luxury Perfume Store
              <FiStar className="text-pink-300 text-sm" />
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight md:text-5xl lg:text-6xl">
              Find Your
              <span className="block bg-gradient-to-r from-pink-200 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                Signature Scent
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/62 sm:text-lg">
              Explore premium perfume brands crafted for everyday elegance,
              special occasions, gifting, and bold personal style. Every bottle
              is selected for long-lasting fragrance, luxury notes, and a
              refined finish.
            </p>
          </div>

          <div className="rounded-[28px] border border-pink-200/10 bg-white/[0.04] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.28)] backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[4px] text-pink-300">
              Brand Details
            </p>
            <h2 className="mt-3 text-2xl font-bold">
              Premium brands, one place
            </h2>
            <p className="mt-4 leading-7 text-white/58">
              Dior, Chanel, Gucci, Versace, Tom Ford, Armani, YSL, and Prada
              inspired selections are arranged with simple filters so customers
              can shop fast.
            </p>
          </div>
        </div>

        <div className="sticky top-24 z-20 mt-12 rounded-[26px] border border-pink-200/10 bg-[#120619]/88 p-4 shadow-[0_24px_70px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
          <div className="grid gap-4 lg:grid-cols-[1.3fr_0.75fr_0.9fr_auto] lg:items-center">
            <label className="flex h-12 items-center gap-3 rounded-full border border-pink-200/10 bg-white/[0.04] px-4 text-white/70">
              <FiSearch className="text-pink-300" />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search perfume or brand"
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/40"
              />
            </label>

            <div className="flex rounded-full border border-pink-200/10 bg-white/[0.04] p-1">
              {categories.map((item) => (
                <button
                  key={item}
                  onClick={() => setCategory(item)}
                  className={`flex-1 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                    category === item
                      ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <label className="group relative flex h-14 items-center rounded-2xl border border-pink-500/20 bg-gradient-to-r from-white/5 to-white/[0.02] px-5 backdrop-blur-xl transition-all duration-300 hover:border-pink-400/50 focus-within:border-pink-400 focus-within:ring-2 focus-within:ring-pink-500/30">
              <FiFilter className="mr-3 text-lg text-pink-400" />

              <select
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="w-full appearance-none bg-transparent pr-10 text-[15px] font-medium tracking-wide text-white outline-none cursor-pointer"
              >
                {brands.map((item) => (
                  <option
                    key={item}
                    value={item}
                    className="
    bg-[#1b0a22]
    text-white
    hover:bg-pink-500
    rounded-xl
    p-4
    shadow-lg
  "
                  >
                    {item}
                  </option>
                ))}
              </select>

              <svg
                className="pointer-events-none absolute right-5 h-5 w-5 text-pink-400 transition duration-300 group-focus-within:rotate-180"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </label>

            <div className="flex h-12 items-center justify-center gap-2 rounded-full border border-pink-200/10 bg-white/[0.04] px-5 text-sm font-semibold text-white/75">
              <FiSliders className="text-pink-300" />
              {filteredProducts.length} Items
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {filteredProducts.map((product, index) => (
            <article
              key={product.name}
              className="product-card group relative overflow-hidden rounded-[28px] border border-pink-200/10 bg-white/[0.035] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.26)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-pink-300/55 hover:shadow-[0_32px_90px_rgba(168,85,247,0.22)]"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-purple-600/12 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative flex min-h-[250px] items-center justify-center rounded-[22px] bg-gradient-to-b from-white/[0.06] to-white/[0.015]">
                <span className="absolute left-4 top-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-3 py-1 text-xs font-semibold uppercase tracking-[2px] text-white">
                  {product.category}
                </span>
                <div className="absolute h-44 w-44 rounded-full bg-pink-500/16 blur-[65px]" />
                <img
                  src={product.img}
                  alt={product.name}
                  className="relative z-10 h-[225px] w-full object-contain drop-shadow-[0_28px_45px_rgba(0,0,0,0.45)] transition-all duration-700 group-hover:scale-110 group-hover:-rotate-3"
                />
              </div>

              <div className="relative z-10 pt-6">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm uppercase tracking-[3px] text-pink-300">
                    {product.brand}
                  </p>
                  <span className="flex items-center gap-1 text-sm text-white/70">
                    <FiStar className="text-pink-300" />
                    {product.rating}
                  </span>
                </div>

                <h3 className="mt-2 text-2xl font-bold text-white">
                  {product.name}
                </h3>

                <div className="mt-5 flex items-center justify-between gap-4">
                  <span className="text-xl font-bold text-white">
                    {product.price}
                  </span>

                  <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-[0_12px_32px_rgba(236,72,153,0.3)] transition-all duration-500 hover:scale-105">
                    <FiShoppingBag />
                    Add
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <style jsx global>{`
        @keyframes productReveal {
          from {
            opacity: 0;
            transform: translateY(28px) scale(0.98);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .product-card {
          animation: productReveal 800ms ease both;
        }
      `}</style>
    </main>
  );
}

export default Products;

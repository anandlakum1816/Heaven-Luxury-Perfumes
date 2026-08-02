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
    <main className="relative min-h-screen overflow-hidden bg-[#030107] pb-24 pt-32 text-white lg:pt-36">
      {/* Background Ambient Glow Effects */}
      <div className="pointer-events-none absolute -left-24 top-20 h-[460px] w-[460px] rounded-full bg-pink-600/15 blur-[160px]" />
      <div className="pointer-events-none absolute -right-24 top-[420px] h-[460px] w-[460px] rounded-full bg-purple-700/18 blur-[160px]" />

      <section className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-pink-300/20 bg-gradient-to-r from-pink-500/10 to-purple-600/10 px-5 py-2 text-xs font-medium uppercase tracking-[4px] text-pink-200 shadow-[0_0_28px_rgba(236,72,153,.14)] backdrop-blur-xl">
              <FiStar className="text-pink-300 text-sm" />
              Luxury Perfume Store
              <FiStar className="text-pink-300 text-sm" />
            </span>

            <h1 className="mt-6 text-4xl font-light leading-tight md:text-5xl lg:text-6xl tracking-tight">
              Find Your
              <span className="block mt-1 italic font-normal bg-gradient-to-r from-pink-300 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                Signature Scent
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
              Explore premium perfume brands crafted for everyday elegance,
              special occasions, gifting, and bold personal style. Every bottle
              is selected for long-lasting fragrance, luxury notes, and a
              refined finish.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.01] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.28)] backdrop-blur-xl">
            <span className="text-[10px] uppercase tracking-[4px] text-pink-400 font-mono">
              Brand Details
            </span>
            <h2 className="mt-2 text-2xl font-semibold text-white tracking-tight">
              Premium brands, one place
            </h2>
            <p className="mt-3 text-sm leading-7 text-white/60">
              Dior, Chanel, Gucci, Versace, Tom Ford, Armani, YSL, and Prada
              inspired selections are arranged with simple filters so customers
              can shop fast.
            </p>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="sticky top-24 z-20 mt-12 rounded-[26px] border border-white/10 bg-[#0c0414]/90 p-4 shadow-[0_24px_70px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
          <div className="grid gap-4 lg:grid-cols-[1.3fr_0.75fr_0.9fr_auto] lg:items-center">
            
            <label className="flex h-12 items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 text-white/70 transition-colors focus-within:border-pink-400">
              <FiSearch className="text-pink-400" />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search perfume or brand"
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/30"
              />
            </label>

            <div className="flex rounded-full border border-white/10 bg-white/[0.03] p-1">
              {categories.map((item) => (
                <button
                  key={item}
                  onClick={() => setCategory(item)}
                  className={`flex-1 rounded-full px-4 py-2 text-xs uppercase tracking-wider font-semibold transition-all duration-300 cursor-pointer ${
                    category === item
                      ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <label className="group relative flex h-12 items-center rounded-2xl border border-white/10 bg-white/[0.03] px-5 backdrop-blur-xl transition-all duration-300 hover:border-pink-400/50 focus-within:border-pink-400">
              <FiFilter className="mr-3 text-base text-pink-400" />

              <select
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="w-full appearance-none bg-transparent pr-10 text-sm font-medium tracking-wide text-white outline-none cursor-pointer"
              >
                {brands.map((item) => (
                  <option
                    key={item}
                    value={item}
                    className="bg-[#170520] text-white py-3"
                  >
                    {item}
                  </option>
                ))}
              </select>

              <svg
                className="pointer-events-none absolute right-4 h-4 w-4 text-pink-400 transition duration-300 group-focus-within:rotate-180"
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

            <div className="flex h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 text-xs uppercase tracking-wider font-mono text-pink-300">
              <FiSliders />
              {filteredProducts.length} Items
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {filteredProducts.map((product, index) => (
            <article
              key={product.name}
              className="product-card group relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.01] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.26)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-pink-500/40 hover:shadow-[0_32px_90px_rgba(236,72,153,0.18)]"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-purple-600/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

              <div className="relative flex min-h-[240px] items-center justify-center rounded-[22px] bg-gradient-to-b from-white/[0.04] to-transparent">
                <span className="absolute left-4 top-4 rounded-full border border-pink-400/20 bg-pink-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[2px] text-pink-300 backdrop-blur-md">
                  {product.category}
                </span>
                <div className="absolute h-36 w-36 rounded-full bg-pink-500/10 blur-[50px] pointer-events-none" />
                <img
                  src={product.img}
                  alt={product.name}
                  className="relative z-10 h-[210px] w-full object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.4)] transition-all duration-700 group-hover:scale-105 group-hover:-rotate-2"
                />
              </div>

              <div className="relative z-10 pt-5">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[10px] uppercase tracking-[3px] text-pink-400 font-mono">
                    {product.brand}
                  </p>
                  <span className="flex items-center gap-1 text-xs font-mono text-white/70">
                    <FiStar className="text-pink-400 fill-pink-400" />
                    {product.rating}
                  </span>
                </div>

                <h3 className="mt-1 text-xl font-medium text-white tracking-tight">
                  {product.name}
                </h3>

                <div className="mt-5 flex items-center justify-between gap-4">
                  <span className="text-lg font-semibold text-white tracking-tight">
                    {product.price}
                  </span>

                  <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 text-xs uppercase tracking-wider font-semibold text-white shadow-[0_10px_25px_rgba(236,72,153,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_30px_rgba(236,72,153,0.4)] cursor-pointer">
                    <FiShoppingBag className="text-sm" />
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
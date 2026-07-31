import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiShoppingBag,
  FiStar,
  FiTrendingUp,
} from "react-icons/fi";

import productOne from "../assets/images/p2.png";
import productTwo from "../assets/images/p3.png";
import productThree from "../assets/images/p4.png";
import productFour from "../assets/images/p5.png";

function TrendingProducts() {
  const products = [
    {
      name: "Velvet Bloom",
      type: "Women Perfume",
      price: "$89.00",
      img: productOne,
    },
    {
      name: "Royal Oud",
      type: "Men Perfume",
      price: "$96.00",
      img: productTwo,
    },
    {
      name: "Pink Noir",
      type: "Signature Scent",
      price: "$112.00",
      img: productThree,
    },
    {
      name: "Mystic Aura",
      type: "Luxury Edition",
      price: "$129.00",
      img: productFour,
    },
  ];

  return (
    <section
      id="popular"
      className="relative overflow-hidden bg-transparent pt-10 pb-12 md:pt-12 md:pb-14"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-0 top-16 h-[320px] w-[320px] rounded-full bg-pink-600/10 blur-[160px] lg:h-[420px] lg:w-[420px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-purple-700/10 blur-[160px] lg:h-[420px] lg:w-[420px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}

        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
      <span className="inline-flex items-center gap-2 rounded-full border border-pink-300/20 bg-pink-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[3px] text-pink-300 shadow-[0_0_28px_rgba(236,72,153,.14)] backdrop-blur-md">
        <FiTrendingUp className="text-sm text-pink-300" />
        Trending Products
        <FiTrendingUp className="text-sm text-pink-300" />
      </span>

      <h2 className="mt-5 text-4xl font-light leading-tight text-white md:text-5xl lg:text-6xl tracking-tight">
        Top 4 Perfume{" "}
        <span className="mt-1 block italic font-normal bg-gradient-to-r from-pink-300 via-pink-500 to-purple-500 bg-clip-text text-transparent">
          Products
        </span>
      </h2>
    </div>

        {/* Products */}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {products.map((product, index) => (
            <article
              key={product.name}
              className="product-card group relative overflow-hidden rounded-[28px] border border-pink-200/10 bg-white/[0.035] p-5 lg:p-6 shadow-[0_20px_60px_rgba(0,0,0,.28)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-pink-300/55 hover:shadow-[0_28px_80px_rgba(168,85,247,.24)]"
              style={{
                animationDelay: `${index * 120}ms`,
              }}
            >
              {/* Hover Overlay */}

              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-purple-600/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Image */}

              <div className="relative flex min-h-[220px] items-center justify-center rounded-[22px] bg-gradient-to-b from-white/[0.06] to-white/[0.015] lg:min-h-[250px]">
                <span className="absolute left-4 top-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-3 py-1 text-xs font-semibold uppercase tracking-[2px] text-white shadow-[0_10px_25px_rgba(236,72,153,.28)]">
                  Trending
                </span>

                <div className="absolute h-40 w-40 rounded-full bg-pink-500/15 blur-[60px]" />

                <img
                  src={product.img}
                  alt={product.name}
                  className="relative z-10 h-[190px] w-full object-contain drop-shadow-[0_28px_45px_rgba(0,0,0,.45)] transition-all duration-700 group-hover:scale-110 group-hover:-rotate-3 sm:h-[210px] lg:h-[230px]"
                />
              </div>

              {/* Content */}

              <div className="relative z-10 pt-5">
                <p className="text-sm uppercase tracking-[3px] text-pink-300">
                  {product.type}
                </p>

                <h3 className="mt-2 text-xl font-bold text-white lg:text-2xl">
                  {product.name}
                </h3>

                <div className="mt-5 flex items-center justify-between gap-4">
                  <span className="text-lg font-bold text-white lg:text-xl">
                    {product.price}
                  </span>

                  <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(236,72,153,.30)] transition-all duration-500 hover:scale-105">
                    <FiShoppingBag />
                    Add
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Button */}

        <div className="mt-10 flex justify-center">
          <Link
            to="/collection"
            className="group inline-flex items-center gap-3 rounded-full border border-pink-200/15 bg-white/[0.04] px-8 py-3.5 text-sm font-semibold text-white transition-all duration-500 hover:border-pink-300/70 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:shadow-[0_16px_40px_rgba(236,72,153,.30)]"
          >
            View All
            <FiArrowRight className="transition-transform duration-500 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      <style jsx global>{`
        @keyframes productReveal {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.98);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .product-card {
          animation: productReveal 0.7s ease both;
        }
      `}</style>
    </section>
  );
}

export default TrendingProducts;

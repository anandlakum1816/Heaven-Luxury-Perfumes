import { FaMale, FaFemale, FaGift, FaArrowRight } from "react-icons/fa";
import { GiPerfumeBottle } from "react-icons/gi";

import menImg from "../assets/images/p2.png";
import womenImg from "../assets/images/p3.png";
import giftImg from "../assets/images/p4.png";
import specialImg from "../assets/images/p5.png";
import { FiStar } from "react-icons/fi";

function Categories() {
  const categories = [
    {
      title: "Men Collection",
      short: "Bold & Powerful",
      desc: "Crafted for modern gentlemen with woody, spicy and sophisticated notes that leave a lasting impression.",
      icon: <FaMale />,
      img: menImg,
      href: "/collection/men",
    },
    {
      title: "Women Collection",
      short: "Elegant & Timeless",
      desc: "Floral and luxurious fragrances designed to celebrate confidence, beauty and femininity.",
      icon: <FaFemale />,
      img: womenImg,
      href: "/collection/women",
    },
    {
      title: "Gift Sets",
      short: "Luxury Packaging",
      desc: "Premium perfume gift boxes perfect for birthdays, anniversaries and special occasions.",
      icon: <FaGift />,
      img: giftImg,
      href: "/collection/gift-sets",
    },
    {
      title: "Signature Perfume",
      short: "Exclusive Edition",
      desc: "Rare fragrances crafted with premium ingredients for those who appreciate true luxury.",
      icon: <GiPerfumeBottle />,
      img: specialImg,
      href: "/collection/signature",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-transparent pt-6 pb-12 md:pt-8 md:pb-14">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-0 h-[320px] w-[320px] rounded-full bg-pink-600/10 blur-[160px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[320px] w-[320px] rounded-full bg-purple-700/10 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-pink-500/20 bg-white/[0.04] px-5 py-2 text-[11px] font-semibold uppercase tracking-[4px] text-pink-200 backdrop-blur-xl shadow-[0_10px_35px_rgba(236,72,153,0.15)]">
            <FiStar className="animate-pulse text-pink-400" />
            Premium Collections
            <FiStar className="animate-pulse text-pink-400" />
          </span>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Explore Our
            <span className="mt-2 block bg-gradient-to-r from-pink-200 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Luxury Categories
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-white/60 sm:text-lg">
            Discover carefully crafted fragrance collections designed for every
            personality, mood and occasion.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {categories.map((item, index) => (
            <a
              key={item.title}
              href={item.href}
              className="category-card group relative h-[360px] sm:h-[390px] lg:h-[430px] overflow-hidden rounded-[28px] border border-pink-200/10 bg-white/[0.035] shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-pink-300/55 hover:shadow-[0_28px_80px_rgba(168,85,247,0.24)]"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-purple-600/[0.08] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Product Image */}
              <img
                src={item.img}
                alt={item.title}
                className="absolute bottom-0 right-[-12%] h-[75%] w-[105%] object-contain opacity-90 drop-shadow-[0_30px_45px_rgba(0,0,0,0.45)] transition-all duration-700 group-hover:right-[-8%] group-hover:scale-105 group-hover:opacity-100 lg:h-[82%] lg:w-[112%]"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#09010f] via-[#09010f]/70 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-pink-700/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Content */}
              <div className="relative z-20 flex h-full flex-col justify-between p-5 lg:p-6">
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 lg:h-16 lg:w-16 items-center justify-center rounded-2xl border border-pink-200/12 bg-white/[0.07] text-xl lg:text-2xl text-white backdrop-blur-xl transition-all duration-500 group-hover:scale-110 group-hover:border-pink-300/50 group-hover:bg-pink-500/16">
                    {item.icon}
                  </div>

                  <span className="flex h-10 w-10 translate-x-3 items-center justify-center rounded-full border border-pink-200/15 bg-white/[0.05] text-sm text-white/70 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
                    <FaArrowRight />
                  </span>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-[3px] text-pink-300">
                    {item.short}
                  </span>

                  <h3 className="mt-2 text-xl lg:text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-h-0 overflow-hidden text-sm leading-7 text-white/60 transition-all duration-500 group-hover:max-h-40">
                    {item.desc}
                  </p>

                  <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-pink-200/15 bg-white/[0.04] px-5 py-2 text-sm font-medium text-white transition-all duration-500 group-hover:border-pink-300/60 group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-600">
                    Explore Collection
                    <FaArrowRight className="text-xs transition-transform duration-500 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes categoryReveal {
          from {
            opacity: 0;
            transform: translateY(24px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .category-card {
          animation: categoryReveal 700ms ease both;
        }
      `}</style>
    </section>
  );
}

export default Categories;

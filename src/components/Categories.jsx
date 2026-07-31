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
    <section className="relative overflow-hidden bg-[#030107] pt-12 pb-20 md:pt-16 md:px-8">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute -left-32 top-0 h-[400px] w-[400px] rounded-full bg-pink-600/10 blur-[185px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-purple-700/10 blur-[185px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-pink-500/20 bg-pink-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[3px] text-pink-300 backdrop-blur-md shadow-[0_0_28px_rgba(236,72,153,.14)]">
            <FiStar className="text-pink-300" />
            Premium Collections
            <FiStar className="text-pink-300" />
          </span>

          <h2 className="mt-5 text-4xl font-light leading-tight text-white md:text-5xl lg:text-6xl tracking-tight">
            Explore Our{" "}
            <span className="mt-1 block italic font-normal bg-gradient-to-r from-pink-300 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Luxury Categories
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-white/50 sm:text-lg">
            Discover carefully crafted fragrance collections designed for every personality, mood and special occasion.
          </p>
        </div>

        {/* Categories Grid Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((item, index) => (
            <a
              key={item.title}
              href={item.href}
              className="category-card group relative h-[380px] sm:h-[410px] lg:h-[440px] overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.01] shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-pink-500/40 hover:bg-white/[0.07]"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              {/* Hover Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/[0.08] via-transparent to-purple-600/[0.08] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Product Image */}
              <img
                src={item.img}
                alt={item.title}
                className="absolute bottom-0 right-[-10%] h-[75%] w-[105%] object-contain opacity-85 drop-shadow-[0_30px_45px_rgba(0,0,0,0.6)] transition-all duration-700 group-hover:right-[-5%] group-hover:scale-105 group-hover:opacity-100 lg:h-[80%] lg:w-[110%]"
              />

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030107] via-[#030107]/70 to-transparent" />

              {/* Card Content */}
              <div className="relative z-20 flex h-full flex-col justify-between p-6">
                
                {/* Top Row Icon and Arrow Action */}
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-xl text-white backdrop-blur-xl transition-all duration-500 group-hover:scale-110 group-hover:border-pink-500/40 group-hover:bg-pink-500/20">
                    {item.icon}
                  </div>

                  <span className="flex h-10 w-10 translate-x-3 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-sm text-white/70 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
                    <FaArrowRight />
                  </span>
                </div>

                {/* Bottom Row Details */}
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-pink-400 block mb-1">
                    {item.short}
                  </span>

                  <h3 className="text-xl lg:text-2xl font-medium text-white tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-2 max-h-0 overflow-hidden text-xs md:text-sm leading-6 text-white/60 transition-all duration-500 group-hover:max-h-36">
                    {item.desc}
                  </p>

                  <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-2 text-xs uppercase tracking-[0.15em] font-semibold text-pink-200 transition-all duration-500 group-hover:border-pink-400 group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-600 group-hover:text-white">
                    Explore Collection
                    <FaArrowRight className="text-[10px] transition-transform duration-500 group-hover:translate-x-1" />
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
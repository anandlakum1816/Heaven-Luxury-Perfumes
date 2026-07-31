import React from "react";
import { FiStar } from "react-icons/fi";

const reviews = [
  {
    id: 1,
    name: "Aarav Sharma",
    city: "Mumbai",
    image: "https://i.pravatar.cc/150?img=12",
    rating: 5,
    review:
      "Absolutely luxurious fragrance. The packaging, scent and lasting performance exceeded my expectations.",
  },
  {
    id: 2,
    name: "Priya Patel",
    city: "Ahmedabad",
    image: "https://i.pravatar.cc/150?img=5",
    rating: 5,
    review:
      "Received so many compliments. The fragrance lasts all day and feels extremely premium.",
  },
  {
    id: 3,
    name: "Rohan Mehta",
    city: "Delhi",
    image: "https://i.pravatar.cc/150?img=15",
    rating: 5,
    review:
      "One of the best perfume collections online. Fast delivery and original products.",
  },
  {
    id: 4,
    name: "Neha Kapoor",
    city: "Pune",
    image: "https://i.pravatar.cc/150?img=25",
    rating: 5,
    review:
      "Beautiful luxury fragrance. Worth every penny. Definitely buying again.",
  },
  {
    id: 5,
    name: "Aditya Singh",
    city: "Jaipur",
    image: "https://i.pravatar.cc/150?img=18",
    rating: 5,
    review:
      "Amazing customer service and genuine branded perfumes. Highly recommended.",
  },
  {
    id: 6,
    name: "Sneha Verma",
    city: "Surat",
    image: "https://i.pravatar.cc/150?img=32",
    rating: 5,
    review:
      "The perfume smells elegant and stays for hours. Premium shopping experience.",
  },
];

function Review() {
  return (
    <section className="relative overflow-hidden bg-[#030107] px-4 py-28 md:px-8">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-pink-600/10 blur-[180px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-pink-300/20 bg-pink-500/10 px-4 py-1.5 text-xs uppercase tracking-[3px] text-pink-300 mb-4 backdrop-blur-md">
            <FiStar className="text-pink-300" /> Customer Reviews <FiStar className="text-pink-300" />
          </span>
          <h2 className="text-4xl md:text-6xl font-light text-white tracking-tight leading-tight">
            Trusted By Thousands Of <span className="italic font-normal bg-gradient-to-r from-pink-300 via-pink-500 to-purple-500 bg-clip-text text-transparent">Happy Customers</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-white/50 leading-relaxed">
            Discover why perfume lovers trust us for authentic luxury fragrances and exceptional customer service.
          </p>
        </div>

        {/* Continuous Infinite Marquee Slider Container */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
          <div className="flex w-max animate-marquee gap-6 py-4 hover:[animation-play-state:paused]">
            {[...reviews, ...reviews].map((item, index) => (
              <div
                key={index}
                className="w-[320px] md:w-[380px] shrink-0 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.01] p-7 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-pink-500/30 hover:bg-white/[0.08]"
              >
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-pink-500/50 shadow-[0_0_20px_rgba(236,72,153,.35)]"
                    />
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-[#030107]" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white tracking-wide">
                      {item.name}
                    </h3>
                    <p className="text-pink-300 text-xs font-mono tracking-wider">{item.city}</p>

                    <div className="flex items-center gap-1 mt-1.5">
                      {[...Array(item.rating)].map((_, i) => (
                        <FiStar
                          key={i}
                          className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-5 border-t border-white/10 pt-4">
                  <p className="text-white/70 leading-7 italic text-sm md:text-[15px]">
                    "{item.review}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Tailwind Custom Marquee Keyframes Injection */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 35s linear infinite;
        }
      `}</style>
    </section>
  );
}

export default Review;
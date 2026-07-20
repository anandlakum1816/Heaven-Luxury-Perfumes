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
    <section className="relative overflow-hidden  px-4 pt-8 pb-14 md:px-6 md:pt-10 md:pb-16">
      {/* Heading */}

      <div className="text-center mb-20">
        <span className="inline-flex items-center gap-2 rounded-full border border-pink-300/20 bg-gradient-to-r from-pink-500/10 to-purple-600/10 px-5 py-2 text-xs font-medium uppercase tracking-[4px] text-pink-200 backdrop-blur-xl shadow-[0_0_28px_rgba(236,72,153,.14)]">
          <FiStar className="text-pink-300" />
          Customer Reviews
          <FiStar className="text-pink-300" />
        </span>

        <h2 className="mt-6 text-5xl md:text-6xl font-black text-white leading-tight">
          Trusted By Thousands Of
          <span className="block bg-gradient-to-r from-pink-300 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            Happy Customers
          </span>
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-lg text-white/60 leading-8">
          Discover why perfume lovers trust us for authentic luxury fragrances
          and exceptional customer service.
        </p>
      </div>

      {/* Slider */}
      <div className="overflow-hidden py-5">
        <div className="review-track">
          {[...reviews, ...reviews].map((item, index) => (
            <div key={index} className="review-card">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-pink-500 shadow-[0_0_20px_rgba(236,72,153,.35)]"
                  />

                  <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-green-500 border-2 border-black"></span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white tracking-wide">
                    {item.name}
                  </h3>

                  <p className="text-pink-300 text-sm">{item.city}</p>

                  <div className="flex items-center gap-1 mt-2">
                    {[...Array(item.rating)].map((_, i) => (
                      <FiStar
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-white/70 leading-8 italic text-[15px]">
                  "{item.review}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Review;

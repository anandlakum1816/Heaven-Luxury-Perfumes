import React from "react";
import {
  FiStar,
  FiCheckCircle,
  FiMessageCircle,
  FiUsers,
  FiAward,
} from "react-icons/fi";

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
      "One of the best perfume collections online. Fast delivery and completely original products.",
  },
  {
    id: 4,
    name: "Neha Kapoor",
    city: "Pune",
    image: "https://i.pravatar.cc/150?img=25",
    rating: 5,
    review:
      "Beautiful luxury fragrance. Worth every penny and the scent feels truly sophisticated.",
  },
  {
    id: 5,
    name: "Aditya Singh",
    city: "Jaipur",
    image: "https://i.pravatar.cc/150?img=18",
    rating: 5,
    review:
      "Amazing customer service and genuine branded perfumes. I would highly recommend this store.",
  },
  {
    id: 6,
    name: "Sneha Verma",
    city: "Surat",
    image: "https://i.pravatar.cc/150?img=32",
    rating: 5,
    review:
      "The perfume smells elegant and stays for hours. A truly premium shopping experience.",
  },
];

const statistics = [
  {
    id: 1,
    icon: <FiUsers />,
    value: "10K+",
    label: "Happy Customers",
  },
  {
    id: 2,
    icon: <FiStar />,
    value: "4.9/5",
    label: "Average Rating",
  },
  {
    id: 3,
    icon: <FiAward />,
    value: "100%",
    label: "Original Products",
  },
];

function ReviewCard({ item }) {
  return (
    <article className="review-card group relative w-[300px] shrink-0 overflow-hidden rounded-[26px] border border-white/10 bg-gradient-to-br from-white/[0.08] via-white/[0.035] to-transparent p-6 shadow-[0_25px_70px_rgba(0,0,0,.45)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-pink-400/35 hover:shadow-[0_30px_80px_rgba(236,72,153,.12)] sm:w-[350px] sm:p-7 md:w-[390px]">
      {/* Card Glow */}

      <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-purple-500/10 blur-[70px] transition-all duration-500 group-hover:bg-pink-500/20" />

      <div className="pointer-events-none absolute -bottom-24 -left-20 h-44 w-44 rounded-full bg-pink-500/10 blur-[70px]" />

      {/* Top Area */}

      <div className="relative z-10 flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="relative shrink-0">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-pink-400 to-purple-600 opacity-65 blur-[2px]" />

            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              decoding="async"
              width="58"
              height="58"
              className="relative h-[58px] w-[58px] rounded-full border-2 border-[#16071c] object-cover"
            />

            <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#100515] bg-green-500">
              <FiCheckCircle className="h-3 w-3 text-white" />
            </span>
          </div>

          <div>
            <h3 className="text-base font-semibold tracking-wide text-white sm:text-lg">
              {item.name}
            </h3>

            <p className="mt-0.5 text-[11px] font-medium uppercase tracking-[0.2em] text-pink-300/80">
              {item.city}
            </p>
          </div>
        </div>

        <FiMessageCircle className="h-8 w-8 shrink-0 text-pink-300/20 transition-colors duration-300 group-hover:text-pink-300/50" />
      </div>

      {/* Star Rating */}

      <div className="relative z-10 mt-6 flex items-center justify-between border-y border-white/[0.08] py-4">
        <div className="flex items-center gap-1">
          {Array.from({ length: item.rating }).map((_, index) => (
            <FiStar
              key={index}
              className="h-4 w-4 fill-yellow-400 text-yellow-400 drop-shadow-[0_0_7px_rgba(250,204,21,.35)]"
            />
          ))}
        </div>

        <span className="inline-flex items-center gap-1.5 rounded-full border border-green-400/15 bg-green-400/[0.08] px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-green-300">
          <FiCheckCircle className="h-3 w-3" />
          Verified
        </span>
      </div>

      {/* Review */}

      <div className="relative z-10 pt-5">
        <span className="absolute -top-1 left-0 font-serif text-6xl leading-none text-pink-400/15">
          “
        </span>

        <p className="relative z-10 min-h-[84px] text-sm italic leading-7 text-white/65 sm:text-[15px]">
          {item.review}
        </p>
      </div>

      {/* Card Bottom Line */}

      <div className="absolute bottom-0 left-8 right-8 h-px origin-center scale-x-0 bg-gradient-to-r from-transparent via-pink-500 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
    </article>
  );
}

function Review() {
  const firstRow = [...reviews, ...reviews];
  const secondRow = [...reviews.slice().reverse(), ...reviews.slice().reverse()];

  return (
    <section className="relative overflow-hidden bg-[#030107] py-20 sm:py-24 lg:py-28">
      {/* Background Effects */}

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-600/[0.08] blur-[190px]" />

      <div className="pointer-events-none absolute -left-52 top-20 h-[450px] w-[450px] rounded-full bg-purple-600/[0.08] blur-[160px]" />

      <div className="pointer-events-none absolute -right-52 bottom-20 h-[450px] w-[450px] rounded-full bg-pink-600/[0.08] blur-[160px]" />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-purple-950/15 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        {/* Section Heading */}

        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-pink-300/20 bg-pink-500/10 px-4 py-1.5 text-xs uppercase tracking-[3px] text-pink-300 shadow-[0_0_30px_rgba(236,72,153,.12)] backdrop-blur-md">
            <FiStar className="fill-pink-300 text-pink-300" />
            Customer Stories
            <FiStar className="fill-pink-300 text-pink-300" />
          </span>

          <h2 className="text-4xl font-light leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Loved By Our{" "}

            <span className="bg-gradient-to-r from-pink-300 via-pink-500 to-purple-500 bg-clip-text font-normal italic text-transparent">
              Happy Customers
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/50 md:text-lg">
            Genuine experiences from perfume lovers who trust us for authentic
            luxury fragrances and exceptional service.
          </p>
        </div>

        {/* Customer Statistics */}

        <div className="mx-auto mb-16 grid max-w-4xl grid-cols-1 overflow-hidden rounded-[26px] border border-white/[0.08] bg-white/[0.025] backdrop-blur-xl sm:grid-cols-3">
          {statistics.map((item, index) => (
            <div
              key={item.id}
              className={`group relative flex items-center justify-center gap-4 px-6 py-6 transition-colors duration-300 hover:bg-pink-500/[0.06] ${
                index !== statistics.length - 1
                  ? "border-b border-white/[0.08] sm:border-b-0 sm:border-r"
                  : ""
              }`}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-pink-400/15 bg-pink-500/10 text-lg text-pink-300 transition-all duration-300 group-hover:scale-110 group-hover:bg-pink-500/20">
                {item.icon}
              </div>

              <div>
                <p className="text-xl font-semibold text-white">{item.value}</p>

                <p className="mt-0.5 text-[10px] uppercase tracking-[0.16em] text-white/40">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Review Marquee Rows */}

      <div className="relative z-10 space-y-7">
        {/* Left Moving Row */}

        <div className="review-mask w-full overflow-hidden">
          <div className="review-marquee flex w-max gap-6 py-3 hover:[animation-play-state:paused]">
            {firstRow.map((item, index) => (
              <ReviewCard key={`first-${item.id}-${index}`} item={item} />
            ))}
          </div>
        </div>

        {/* Right Moving Row */}

        <div className="review-mask hidden w-full overflow-hidden md:block">
          <div className="review-marquee review-marquee-reverse flex w-max gap-6 py-3 hover:[animation-play-state:paused]">
            {secondRow.map((item, index) => (
              <ReviewCard key={`second-${item.id}-${index}`} item={item} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .review-mask {
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 8%,
            black 92%,
            transparent
          );

          mask-image: linear-gradient(
            to right,
            transparent,
            black 8%,
            black 92%,
            transparent
          );
        }

        .review-marquee {
          animation: reviewMarquee 45s linear infinite;
          will-change: transform;
        }

        .review-marquee-reverse {
          animation-direction: reverse;
          animation-duration: 50s;
        }

        @keyframes reviewMarquee {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @media (max-width: 640px) {
          .review-mask {
            -webkit-mask-image: linear-gradient(
              to right,
              transparent,
              black 4%,
              black 96%,
              transparent
            );

            mask-image: linear-gradient(
              to right,
              transparent,
              black 4%,
              black 96%,
              transparent
            );
          }

          .review-marquee {
            animation-duration: 38s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .review-marquee {
            animation-play-state: paused;
          }

          .review-card {
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Review;
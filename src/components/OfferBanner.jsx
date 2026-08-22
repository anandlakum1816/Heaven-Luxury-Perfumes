import React from "react";
import { FaGift, FaFire, FaCrown, FaGem } from "react-icons/fa";
import { FiArrowRight, FiStar } from "react-icons/fi";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import video1 from "../assets/videos/banner_1_exclusive_gift.mp4";
import video2 from "../assets/videos/banner_2_new_arrival.mp4";
import video3 from "../assets/videos/banner_3_summer_sale.mp4";
import video4 from "../assets/videos/banner_4_brand_heritage.mp4";

const banners = [
  {
    id: 1,
    title: "Exclusive Gift",
    desc: "Receive a complimentary luxury sample box with every order above ₹2999.",
    offer: "Above ₹2999",
    icon: <FaGift />,
    video: video1,
  },
  {
    id: 2,
    title: "New Arrival",
    desc: "Explore our exclusive limited-edition Eau De Parfum from the latest collection.",
    offer: "2026 Collection",
    icon: <FaGem />,
    video: video2,
  },
  {
    id: 3,
    title: "Summer Sale",
    desc: "Enjoy up to 40% off across our entire luxury fragrance collection for a limited time.",
    offer: "Up To 40% Off",
    icon: <FaFire />,
    video: video3,
  },
  {
    id: 4,
    title: "Brand Heritage",
    desc: "Crafted in Grasse, France with generations of timeless perfume-making tradition.",
    offer: "Since 1985",
    icon: <FaCrown />,
    video: video4,
  },
];

function OfferBanner() {
  return (
    <section className="relative overflow-hidden bg-[#030107] px-4 py-20 sm:py-24 md:px-8 lg:py-28">
      {/* Background Glow */}

      <div className="pointer-events-none absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-pink-500/10 blur-[160px]" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-[450px] w-[450px] rounded-full bg-purple-500/10 blur-[160px]" />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-purple-950/10 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}

        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16 lg:mb-20">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-pink-300/20 bg-pink-500/10 px-4 py-1.5 text-xs uppercase tracking-[3px] text-pink-300 shadow-[0_0_30px_rgba(236,72,153,.12)] backdrop-blur-md">
            <FiStar className="text-pink-300" />

            <span>Special Offers</span>

            <FiStar className="text-pink-300" />
          </span>

          <h2 className="text-4xl font-light leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Exclusive Deals For{" "}

            <span className="bg-gradient-to-r from-pink-300 via-pink-500 to-purple-500 bg-clip-text font-normal italic text-transparent">
              Luxury Fragrances
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/50 md:text-lg">
            Discover exclusive discounts, luxury gifts and limited-edition
            fragrances crafted for every special occasion.
          </p>
        </div>

        {/* Video Banner Slider */}

        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={24}
          loop
          speed={1000}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          className="offer-swiper"
        >
          {banners.map((item) => (
            <SwiperSlide key={item.id}>
              <article className="group relative min-h-[580px] overflow-hidden rounded-[28px] border border-white/10 bg-[#09030d] shadow-[0_35px_100px_rgba(0,0,0,.75)] sm:min-h-[620px] lg:min-h-[680px] lg:rounded-[38px]">
                {/* Full Background Video */}

                <video
                  src={item.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105"
                />

                {/* Video Overlay */}

                <div className="pointer-events-none absolute inset-0 bg-black/25" />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/95 via-black/65 to-black/10" />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030107] via-transparent to-black/20" />

                {/* Pink/Purple Light Effect */}

                <div className="pointer-events-none absolute -left-32 bottom-0 h-[420px] w-[420px] rounded-full bg-pink-500/20 blur-[140px]" />

                <div className="pointer-events-none absolute -right-32 top-0 h-[400px] w-[400px] rounded-full bg-purple-600/15 blur-[140px]" />

                {/* Top Details */}

                <div className="absolute left-6 right-6 top-6 z-20 flex items-center justify-between sm:left-10 sm:right-10 sm:top-10">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.25em] text-white/80 shadow-lg backdrop-blur-xl sm:text-xs">
                    <span className="text-pink-400">{item.icon}</span>

                    {item.offer}
                  </span>

                  <span className="hidden font-mono text-xs uppercase tracking-[0.3em] text-white/45 sm:block">
                    Luxury Selection
                  </span>
                </div>

                {/* Overlay Content */}

                <div className="relative z-10 flex min-h-[580px] items-end px-6 pb-20 pt-32 sm:min-h-[620px] sm:px-10 sm:pb-24 lg:min-h-[680px] lg:items-center lg:px-16 lg:pb-16 lg:pt-32 xl:px-20">
                  <div className="max-w-2xl">
                    <div className="mb-5 flex items-center gap-3">
                      <span className="h-px w-10 bg-gradient-to-r from-pink-400 to-purple-500" />

                      <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-pink-300 sm:text-xs">
                        Exclusive Collection
                      </span>
                    </div>

                    <h3 className="max-w-xl text-5xl font-light leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
                      {item.title}
                    </h3>

                    <p className="mt-6 max-w-xl text-sm leading-7 text-white/65 sm:text-base md:text-lg md:leading-8">
                      {item.desc}
                    </p>

                    <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center lg:mt-10">
                      <button className="group/button inline-flex w-full cursor-pointer items-center justify-center gap-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-[0_15px_45px_rgba(236,72,153,.30)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(168,85,247,.45)] sm:w-auto">
                        Explore Collection

                        <FiArrowRight className="text-base transition-transform duration-300 group-hover/button:translate-x-1" />
                      </button>

                      <button className="w-full cursor-pointer rounded-full border border-white/20 bg-white/[0.06] px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-xl transition-all duration-300 hover:border-pink-300/40 hover:bg-pink-500/10 sm:w-auto">
                        View Offers
                      </button>
                    </div>
                  </div>
                </div>

                {/* Bottom Decorative Line */}

                <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-px bg-gradient-to-r from-transparent via-pink-500/60 to-transparent" />
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .offer-swiper {
          padding-bottom: 55px;
        }

        .offer-swiper .swiper-slide {
          height: auto;
        }

        .offer-swiper .swiper-pagination {
          bottom: 5px;
        }

        .offer-swiper .swiper-pagination-bullet {
          width: 7px;
          height: 7px;
          margin: 0 6px !important;
          background: rgba(255, 255, 255, 0.35);
          opacity: 1;
          transition:
            width 0.3s ease,
            background-color 0.3s ease;
        }

        .offer-swiper .swiper-pagination-bullet-active {
          width: 32px;
          border-radius: 999px;
          background: linear-gradient(90deg, #ec4899, #a855f7);
          box-shadow: 0 0 18px rgba(236, 72, 153, 0.45);
        }

        @media (max-width: 640px) {
          .offer-swiper {
            padding-bottom: 45px;
          }

          .offer-swiper .swiper-pagination-bullet-active {
            width: 24px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .offer-swiper video {
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}

export default OfferBanner;
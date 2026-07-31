import React from "react";
import { FaGift, FaFire, FaCrown, FaGem } from "react-icons/fa";
import { FiStar, FiArrowRight } from "react-icons/fi";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import video1 from "../assets/videos/banner_1_exclusive_gift.mp4";
import video2 from "../assets/videos/banner_2_new_arrival.mp4";
import video3 from "../assets/videos/banner_3_summer_sale.mp4";
import video4 from "../assets/videos/banner_4_brand_heritage.mp4";

const banners = [
  {
    id: 1,
    title: "Brand Heritage",
    desc: "Crafted in Grasse, France with generations of timeless perfume-making tradition.",
    offer: "Since 1985",
    icon: <FaCrown />,
    video: video1,
  },
  {
    id: 2,
    title: "Summer Sale",
    desc: "Enjoy up to 40% off across our entire store for a limited period only.",
    offer: "Limited Time",
    icon: <FaFire />,
    video: video2,
  },
  {
    id: 3,
    title: "New Arrival",
    desc: "Explore our exclusive limited edition Eau De Parfum from the latest collection.",
    offer: "2026 Collection",
    icon: <FaGem />,
    video: video3,
  },
  {
    id: 4,
    title: "Exclusive Gift",
    desc: "Receive a complimentary luxury sample box with every order above ₹2999.",
    offer: "Above ₹2999",
    icon: <FaGift />,
    video: video4,
  },
];

function OfferBanner() {
  return (
    <section className="relative overflow-hidden bg-[#030107] px-4 py-28 md:px-8">
      {/* Background Ambient Glow */}
      <div className="absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-pink-500/10 blur-[160px] pointer-events-none" />
      <div className="absolute -right-40 bottom-20 h-[450px] w-[450px] rounded-full bg-purple-500/10 blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-pink-300/20 bg-pink-500/10 px-4 py-1.5 text-xs uppercase tracking-[3px] text-pink-300 mb-4 backdrop-blur-md">
            <FiStar className="text-pink-300" /> Special Offers{" "}
            <FiStar className="text-pink-300" />
          </span>
          <h2 className="text-4xl md:text-6xl font-light text-white tracking-tight leading-tight">
            Exclusive Deals For{" "}
            <span className="italic font-normal bg-gradient-to-r from-pink-300 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Luxury Fragrances
            </span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-white/50 leading-relaxed">
            Discover exclusive discounts, luxury gifts and limited-edition
            fragrances crafted for every special occasion.
          </p>
        </div>

        {/* Video Slider */}
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          speed={900}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="overflow-hidden rounded-[35px]"
        >
          {banners.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative overflow-hidden rounded-[35px] border border-white/10 bg-gradient-to-br from-[#170520] via-[#0b0714] to-[#050308] shadow-[0_30px_90px_rgba(0,0,0,0.8)]">
                {/* Internal Glow Accents */}
                <div className="absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-pink-500/15 blur-[120px] pointer-events-none" />
                <div className="absolute -right-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-purple-500/15 blur-[120px] pointer-events-none" />

                <div className="relative grid min-h-[520px] items-center gap-8 lg:grid-cols-2">
                  {/* Left Column: Content */}
                  <div className="px-8 py-12 md:px-14 lg:px-16">
                    <span className="inline-flex items-center gap-2 rounded-full border border-pink-400/20 bg-pink-500/10 px-4 py-1.5 text-xs font-mono uppercase tracking-[3px] text-pink-300">
                      <span className="text-pink-400">{item.icon}</span>
                      {item.offer}
                    </span>

                    <h3 className="mt-6 text-4xl font-light leading-tight text-white md:text-6xl tracking-tight">
                      {item.title}
                    </h3>

                    <p className="mt-6 max-w-lg text-base md:text-lg leading-7 text-white/60">
                      {item.desc}
                    </p>

                    <button className="mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_40px_rgba(236,72,153,.35)] cursor-pointer">
                      Explore Collection <FiArrowRight className="text-base" />
                    </button>
                  </div>

                  {/* Right Column: Video Showcase */}
                  <div className="relative flex h-[420px] lg:h-[520px] items-center justify-center overflow-hidden">
                    <div className="absolute h-[300px] w-[300px] rounded-full bg-pink-500/20 blur-[100px] pointer-events-none" />

                    <video
                      src={item.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="relative z-10 h-full w-full object-cover object-center lg:object-contain"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default OfferBanner;

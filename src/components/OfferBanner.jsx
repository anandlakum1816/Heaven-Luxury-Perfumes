import React from "react";
import { FaGift, FaFire, FaCrown, FaGem } from "react-icons/fa";
import { FiStar } from "react-icons/fi";

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
    desc: "Crafted in Grasse, France",
    offer: "Since 1985",
    icon: <FaCrown />,
    video: video1,
  },
  {
    id: 2,
    title: "Summer Sale",
    desc: "40% OFF Entire Store",
    offer: "Limited Time",
    icon: <FaFire />,
    video: video2,
  },
  {
    id: 3,
    title: "New Arrival",
    desc: "Limited Edition Eau De Parfum",
    offer: "2026 Collection",
    icon: <FaGem />,
    video: video3,
  },
  {
    id: 4,
    title: "Exclusive Gift",
    desc: "Free Luxury Sample",
    offer: "Above ₹2999",
    icon: <FaGift />,
    video: video4,
  },
];

function OfferBanner() {
  return (
    <section className="relative overflow-hidden  px-4 pt-8 pb-14 md:px-6 md:pt-10 md:pb-16">
      <div className="absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-pink-500/10 blur-[160px]" />
      <div className="absolute -right-40 bottom-20 h-[450px] w-[450px] rounded-full bg-purple-500/10 blur-[160px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Aapka Heading Section */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-pink-300/20 bg-gradient-to-r from-pink-500/10 to-purple-600/10 px-5 py-2 text-xs font-medium uppercase tracking-[4px] text-pink-200 backdrop-blur-xl shadow-[0_0_28px_rgba(236,72,153,.14)]">
            <FiStar className="text-pink-300" /> Special Offers{" "}
            <FiStar className="text-pink-300" />
          </span>
          <h2 className="mt-6 text-5xl md:text-6xl font-black text-white leading-tight">
            Exclusive Deals For
            <span className="block bg-gradient-to-r from-pink-300 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Luxury Fragrances
            </span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-white/60 leading-8">
            Discover exclusive discounts, luxury gifts and limited-edition
            fragrances crafted for every occasion.
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
          className="overflow-hidden rounded-[40px]"
        >
          {banners.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-[#120916] via-[#17091d] to-[#09010f]">
                {/* Background Glow */}
                <div className="absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-pink-500/20 blur-[120px]" />
                <div className="absolute -right-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-purple-500/20 blur-[120px]" />

                <div className="relative grid min-h-[560px] items-center gap-10 lg:grid-cols-2">
                  {/* LEFT */}
                  <div className="px-8 py-14 md:px-14 lg:px-16">
                    <span className="inline-flex rounded-full border border-pink-400/20 bg-pink-500/10 px-5 py-2 text-sm uppercase tracking-[4px] text-pink-300">
                      {item.offer}
                    </span>

                    <h2 className="mt-6 text-5xl font-black leading-tight text-white md:text-6xl">
                      {item.title}
                    </h2>

                    <p className="mt-6 max-w-lg text-lg leading-8 text-white/70">
                      {item.desc}
                    </p>

                    <button className="mt-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-4 font-semibold text-white transition duration-300 hover:scale-105">
                      Explore Collection
                    </button>
                  </div>

                  {/* RIGHT */}
                  <div className="relative flex h-[560px] items-center justify-center overflow-hidden">
                    {/* Glow */}
                    <div className="absolute h-[380px] w-[380px] rounded-full bg-pink-500/25 blur-[120px]" />

                    <video
                      src={item.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="relative z-10 h-full w-full object-contain"
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

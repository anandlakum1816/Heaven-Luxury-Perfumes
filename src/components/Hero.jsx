import React from "react";
import { FiArrowRight, FiStar } from "react-icons/fi";
import perfumeImg from "../assets/images/perfume.png";

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#030107] pb-12 pt-28 lg:py-32">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-24 top-0 h-[360px] w-[360px] rounded-full bg-pink-600/15 blur-[150px] sm:h-[620px] sm:w-[620px] sm:blur-[190px]" />

      <div className="pointer-events-none absolute -right-24 bottom-0 h-[360px] w-[360px] rounded-full bg-purple-700/15 blur-[150px] sm:h-[620px] sm:w-[620px] sm:blur-[190px]" />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-purple-950/20 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-8">
          {/* Left Content */}
          <div className="relative z-10 order-2 animate-fadeIn text-center lg:order-1 lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-pink-300/20 bg-pink-500/10 px-4 py-1.5 text-xs uppercase tracking-[3px] text-pink-300 shadow-[0_0_30px_rgba(236,72,153,.16)] backdrop-blur-md">
              <FiStar className="text-pink-300" />
              Luxury Collection
            </span>

            <h1 className="mt-7 text-5xl font-light leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
              Luxury
              <br />
              In Every

              <span className="animate-gradient mt-1 block bg-gradient-to-r from-pink-300 via-pink-500 to-purple-500 bg-clip-text font-normal italic text-transparent">
                Scent
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-white/60 lg:mx-0 lg:text-lg">
              Crafted for those who appreciate sophistication, timeless
              elegance, and unforgettable fragrances. Experience luxury like
              never before.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <button className="inline-flex cursor-pointer items-center justify-center gap-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-9 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_15px_42px_rgba(236,72,153,.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_55px_rgba(168,85,247,.42)]">
                Shop Now

                <FiArrowRight className="text-base" />
              </button>

              <button className="cursor-pointer rounded-full border border-pink-200/15 bg-white/[0.04] px-9 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-xl transition-all duration-300 hover:border-pink-300/50 hover:bg-pink-500/10">
                Explore Collection
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative order-1 flex min-h-[430px] items-center justify-center lg:order-2 lg:min-h-[620px]">
            {/* Background Light */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="absolute h-[500px] w-[500px] animate-pulse rounded-full bg-gradient-to-r from-pink-500/10 to-purple-700/10 blur-[150px] sm:h-[650px] sm:w-[650px]" />

              <div className="animate-floatSlow absolute h-[350px] w-[350px] rounded-full bg-pink-500/10 blur-[110px] sm:h-[500px] sm:w-[500px]" />
            </div>

            {/* Premium Smoke */}
            <div className="smoke-field" aria-hidden="true">
              <span className="smoke smoke-one" />
              <span className="smoke smoke-two" />
              <span className="smoke smoke-three" />
              <span className="smoke smoke-four" />
              <span className="smoke smoke-five" />
              <span className="smoke smoke-six" />

              <span className="smoke-haze smoke-haze-left" />
              <span className="smoke-haze smoke-haze-right" />
            </div>

            {/* Bottle Bottom Shadow */}
            <div className="pointer-events-none absolute bottom-12 h-28 w-[70%] rounded-full bg-purple-950/40 blur-3xl" />

            {/* Perfume Image */}
            <img
              src={perfumeImg}
              alt="Luxury perfume bottle"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              width="700"
              height="700"
              className="hero-bottle relative z-20 aspect-square w-[330px] object-contain drop-shadow-[0_0_100px_rgba(236,72,153,.38)] sm:w-[430px] md:w-[520px] lg:w-[620px] xl:w-[700px]"
            />

            {/* Floating Card One */}
            <div className="animate-card absolute left-0 top-12 hidden flex-col rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 shadow-2xl backdrop-blur-xl xl:flex">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
                Authentic
              </span>

              <h3 className="mt-1 text-base font-semibold text-white">
                100% Original
              </h3>
            </div>

            {/* Floating Card Two */}
            <div className="animate-card2 absolute bottom-12 right-0 hidden flex-col rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 shadow-2xl backdrop-blur-xl xl:flex">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
                Special Offer
              </span>

              <h3 className="mt-1 bg-gradient-to-r from-pink-300 to-purple-400 bg-clip-text text-base font-semibold text-transparent">
                40% OFF
              </h3>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes floatSlow {
          0%,
          100% {
            transform: scale(1);
          }

          50% {
            transform: scale(1.08);
          }
        }

        .animate-floatSlow {
          animation: floatSlow 8s ease-in-out infinite;
        }

        @keyframes cardFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-12px);
          }
        }

        .animate-card {
          animation: cardFloat 4s ease-in-out infinite;
        }

        .animate-card2 {
          animation: cardFloat 5s ease-in-out infinite;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease both;
        }

        @keyframes gradientMove {
          0%,
          100% {
            background-position: 0% 50%;
          }

          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          background-size: 180% 180%;
          animation: gradientMove 6s ease infinite;
        }

        /* Perfume Bottle */

        .hero-bottle {
          animation:
            bottleReveal 0.7s ease-out both,
            bottleFloat 6s ease-in-out 0.7s infinite;
          transform: translateZ(0);
          transition: filter 0.5s ease;
        }

        .hero-bottle:hover {
          filter: drop-shadow(0 0 115px rgba(236, 72, 153, 0.5));
        }

        @keyframes bottleReveal {
          from {
            opacity: 0;
            transform: translateY(18px) scale(0.96);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes bottleFloat {
          0%,
          100% {
            transform: translate3d(0, 0, 0) rotate(-0.3deg);
          }

          50% {
            transform: translate3d(0, -10px, 0) rotate(0.3deg);
          }
        }

        /* Smoke Container */

        .smoke-field {
          position: absolute;
          inset: 0;
          z-index: 10;
          pointer-events: none;
          overflow: visible;
          isolation: isolate;
        }

        .smoke-field::before {
          content: "";
          position: absolute;
          left: 50%;
          bottom: 17%;
          width: min(420px, 76vw);
          height: 240px;
          border-radius: 999px;
          background: radial-gradient(
            circle,
            rgba(236, 72, 153, 0.15),
            rgba(168, 85, 247, 0.1) 42%,
            transparent 74%
          );
          filter: blur(48px);
          opacity: 0.66;
          transform: translateX(-50%);
          animation: smokeBreath 5.8s ease-in-out infinite;
        }

        .smoke,
        .smoke-haze {
          position: absolute;
          left: 50%;
          bottom: 21%;
          border-radius: 999px;
          opacity: 0;
          mix-blend-mode: screen;
          will-change: transform, opacity, filter;
        }

        .smoke {
          width: 210px;
          height: 210px;
          background:
            radial-gradient(
              circle at 30% 28%,
              rgba(255, 255, 255, 0.24),
              transparent 25%
            ),
            radial-gradient(
              circle at 43% 50%,
              rgba(249, 168, 212, 0.27),
              transparent 45%
            ),
            radial-gradient(
              circle at 70% 58%,
              rgba(192, 132, 252, 0.23),
              transparent 58%
            ),
            radial-gradient(
              circle at 50% 50%,
              rgba(236, 72, 153, 0.1),
              transparent 76%
            );
          filter: blur(18px) saturate(1.1);
          transform: translateX(-50%) scale(0.42);
          animation: perfumeSmoke 11s
            cubic-bezier(0.22, 0.61, 0.36, 1) infinite;
        }

        .smoke::after {
          content: "";
          position: absolute;
          inset: 18%;
          border-radius: inherit;
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.24),
            transparent 64%
          );
          filter: blur(20px);
        }

        .smoke-one {
          margin-left: -150px;
          animation-delay: 0s;
          --drift-x: -44px;
          --end-x: -96px;
          --spin: -24deg;
        }

        .smoke-two {
          width: 235px;
          height: 235px;
          margin-left: 8px;
          animation-delay: -9.1s;
          animation-duration: 11.4s;
          --drift-x: 28px;
          --end-x: 72px;
          --spin: 20deg;
        }

        .smoke-three {
          width: 165px;
          height: 165px;
          margin-left: 116px;
          animation-delay: -7.2s;
          animation-duration: 9.4s;
          --drift-x: 48px;
          --end-x: 118px;
          --spin: 32deg;
        }

        .smoke-four {
          width: 275px;
          height: 275px;
          margin-left: -22px;
          animation-delay: -5.3s;
          animation-duration: 12.2s;
          --drift-x: -18px;
          --end-x: 42px;
          --spin: -18deg;
        }

        .smoke-five {
          width: 145px;
          height: 145px;
          margin-left: -88px;
          animation-delay: -3.4s;
          animation-duration: 9.8s;
          --drift-x: -34px;
          --end-x: -122px;
          --spin: 28deg;
        }

        .smoke-six {
          width: 210px;
          height: 210px;
          margin-left: -205px;
          animation-delay: -1.5s;
          animation-duration: 10.8s;
          --drift-x: -70px;
          --end-x: -155px;
          --spin: -35deg;
        }

        /* Background Smoke Haze */

        .smoke-haze {
          width: min(520px, 90vw);
          height: 300px;
          background: radial-gradient(
            ellipse at center,
            rgba(255, 214, 245, 0.1),
            rgba(168, 85, 247, 0.08) 44%,
            transparent 72%
          );
          filter: blur(46px);
          animation: hazeDrift 14s ease-in-out infinite;
        }

        .smoke-haze-left {
          margin-left: -210px;
          animation-delay: 1s;
        }

        .smoke-haze-right {
          margin-left: 80px;
          animation-delay: 4s;
          animation-direction: reverse;
        }

        @keyframes smokeBreath {
          0%,
          100% {
            opacity: 0.48;
            transform: translateX(-50%) scale(0.92);
          }

          50% {
            opacity: 0.85;
            transform: translateX(-50%) scale(1.08);
          }
        }

        @keyframes hazeDrift {
          0%,
          100% {
            opacity: 0.08;
            transform: translate(-50%, 20px) scale(0.92);
          }

          45% {
            opacity: 0.22;
            transform: translate(calc(-50% + 36px), -92px) scale(1.08);
          }

          70% {
            opacity: 0.14;
            transform: translate(calc(-50% - 42px), -150px) scale(1.18);
          }
        }

        @keyframes perfumeSmoke {
          0% {
            opacity: 0;
            filter: blur(10px) saturate(1.1);
            transform: translate(-50%, 44px) scale(0.28) rotate(0deg);
          }

          14% {
            opacity: 0.2;
          }

          32% {
            opacity: 0.48;
            filter: blur(15px) saturate(1.25);
            transform: translate(
                calc(-50% + var(--drift-x, 20px)),
                -62px
              )
              scale(0.78)
              rotate(calc(var(--spin, 18deg) * -0.35));
          }

          58% {
            opacity: 0.36;
            filter: blur(22px) saturate(1.18);
            transform: translate(
                calc(-50% + var(--end-x, 60px) * 0.58),
                -168px
              )
              scale(1.22)
              rotate(var(--spin, 18deg));
          }

          78% {
            opacity: 0.18;
          }

          100% {
            opacity: 0;
            filter: blur(38px) saturate(1);
            transform: translate(
                calc(-50% + var(--end-x, 60px)),
                -345px
              )
              scale(2.05)
              rotate(calc(var(--spin, 18deg) * 1.35));
          }
        }

        /* Mobile Optimization */

        @media (max-width: 640px) {
          .smoke {
            width: 150px;
            height: 150px;
          }

          .smoke-four {
            width: 210px;
            height: 210px;
          }

          .smoke-haze {
            height: 220px;
          }
        }

        /* Accessibility */

        @media (prefers-reduced-motion: reduce) {
          .hero-bottle,
          .smoke,
          .smoke-haze,
          .smoke-field::before,
          .animate-card,
          .animate-card2,
          .animate-floatSlow {
            animation: none !important;
          }

          .smoke,
          .smoke-haze {
            opacity: 0.14;
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;
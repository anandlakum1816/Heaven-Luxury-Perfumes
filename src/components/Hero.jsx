import React from "react";
import { FiArrowRight, FiStar  } from "react-icons/fi";
import perfumeImg from "../assets/images/perfume.png";

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#030107] pb-12 pt-28 lg:py-32">
      {/* Background Ambient Glow Effects */}
      <div className="pointer-events-none absolute -left-24 top-0 h-[360px] w-[360px] rounded-full bg-pink-600/15 blur-[150px] sm:h-[620px] sm:w-[620px] sm:blur-[190px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-[360px] w-[360px] rounded-full bg-purple-700/15 blur-[150px] sm:h-[620px] sm:w-[620px] sm:blur-[190px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-purple-950/20 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-8">
          
          {/* Left Column: Typography & CTAs */}
          <div className="relative z-10 order-2 animate-fadeIn text-center lg:order-1 lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-pink-300/20 bg-pink-500/10 px-4 py-1.5 text-xs uppercase tracking-[3px] text-pink-300 shadow-[0_0_30px_rgba(236,72,153,.16)] backdrop-blur-md">
              <FiStar  className="text-pink-300" />
              Luxury Collection
            </span>

            <h1 className="mt-7 text-5xl font-light leading-[1.05] text-white sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight">
              Luxury
              <br />
              In Every
              <span className="block mt-1 font-normal italic animate-gradient bg-gradient-to-r from-pink-300 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                Scent
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-white/60 lg:mx-0 lg:text-lg">
              Crafted for those who appreciate sophistication, timeless elegance, and unforgettable fragrances. Experience luxury like never before.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <button className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-9 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_15px_42px_rgba(236,72,153,.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_55px_rgba(168,85,247,.42)] cursor-pointer">
                Shop Now <FiArrowRight className="text-base" />
              </button>

              <button className="rounded-full border border-pink-200/15 bg-white/[0.04] px-9 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-xl transition-all duration-300 hover:border-pink-300/50 hover:bg-pink-500/10 cursor-pointer">
                Explore Collection
              </button>
            </div>
          </div>

          {/* Right Column: Bottle, Smoke Effects & Floating Glass Cards */}
          <div className="relative order-1 flex min-h-[430px] items-center justify-center lg:order-2 lg:min-h-[620px]">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="absolute h-[720px] w-[720px] animate-pulse rounded-full bg-gradient-to-r from-pink-500/10 to-purple-700/10 blur-[170px]" />
              <div className="absolute h-[500px] w-[500px] animate-floatSlow rounded-full bg-pink-500/10 blur-[115px]" />
            </div>

            {/* Smoke Effect Field */}
            <div className="smoke-field" aria-hidden="true">
              <span className="smoke smoke-one" />
              <span className="smoke smoke-two" />
              <span className="smoke smoke-three" />
              <span className="smoke smoke-four" />
              <span className="smoke smoke-five" />
              <span className="smoke smoke-six" />
              <span className="smoke smoke-seven" />
              <span className="smoke smoke-eight" />
              <span className="smoke smoke-nine" />
              <span className="smoke smoke-ten" />
              <span className="smoke-haze smoke-haze-left" />
              <span className="smoke-haze smoke-haze-right" />
            </div>

            <div className="absolute bottom-12 h-28 w-[70%] rounded-full bg-purple-950/40 blur-3xl pointer-events-none" />

            <img
              src={perfumeImg}
              alt="Luxury perfume bottle"
              className="relative z-20 w-[330px] object-contain drop-shadow-[0_0_120px_rgba(236,72,153,.45)] duration-700 hover:scale-105 sm:w-[430px] md:w-[520px] lg:w-[620px] xl:w-[700px]"
            />

            {/* Floating Glass Feature Card 1 */}
            <div className="absolute left-0 top-12 hidden animate-card flex-col rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 shadow-2xl backdrop-blur-xl xl:flex">
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-mono">
                Authentic
              </span>
              <h3 className="mt-1 text-base font-semibold text-white">
                100% Original
              </h3>
            </div>

            {/* Floating Glass Feature Card 2 */}
            <div className="absolute bottom-12 right-0 hidden animate-card2 flex-col rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 shadow-2xl backdrop-blur-xl xl:flex">
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-mono">
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
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }

        .animate-floatSlow {
          animation: floatSlow 8s ease-in-out infinite;
        }

        @keyframes card {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        .animate-card {
          animation: card 4s ease-in-out infinite;
        }

        .animate-card2 {
          animation: card 5s ease-in-out infinite;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: none; }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease;
        }

        @keyframes gradientMove {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-gradient {
          background-size: 180% 180%;
          animation: gradientMove 6s ease infinite;
        }

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
          width: 360px;
          height: 220px;
          border-radius: 999px;
          background: radial-gradient(
            circle,
            rgba(236, 72, 153, 0.15),
            rgba(168, 85, 247, 0.1) 42%,
            transparent 74%
          );
          filter: blur(42px);
          opacity: 0.75;
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
          width: 180px;
          height: 180px;
          background:
            radial-gradient(circle at 28% 28%, rgba(255, 255, 255, 0.34), transparent 24%),
            radial-gradient(circle at 42% 48%, rgba(255, 191, 232, 0.32), transparent 46%),
            radial-gradient(circle at 68% 56%, rgba(168, 85, 247, 0.28), transparent 58%),
            radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.12), transparent 76%);
          filter: blur(16px) saturate(1.25);
          transform: translateX(-50%) scale(0.42);
          animation: perfumeSmoke 10s cubic-bezier(0.22, 0.61, 0.36, 1) infinite;
        }

        .smoke::after {
          content: "";
          position: absolute;
          inset: 18%;
          border-radius: inherit;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.24), transparent 64%);
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
          animation-delay: 0.9s;
          animation-duration: 11.4s;
          --drift-x: 28px;
          --end-x: 72px;
          --spin: 20deg;
        }

        .smoke-three {
          width: 165px;
          height: 165px;
          margin-left: 116px;
          animation-delay: 1.8s;
          animation-duration: 9.4s;
          --drift-x: 48px;
          --end-x: 118px;
          --spin: 32deg;
        }

        .smoke-four {
          width: 275px;
          height: 275px;
          margin-left: -22px;
          animation-delay: 2.7s;
          animation-duration: 12.2s;
          --drift-x: -18px;
          --end-x: 42px;
          --spin: -18deg;
        }

        .smoke-five {
          width: 145px;
          height: 145px;
          margin-left: -88px;
          animation-delay: 3.6s;
          animation-duration: 9.8s;
          --drift-x: -34px;
          --end-x: -122px;
          --spin: 28deg;
        }

        .smoke-six {
          width: 210px;
          height: 210px;
          margin-left: -205px;
          animation-delay: 4.5s;
          animation-duration: 10.8s;
          --drift-x: -70px;
          --end-x: -155px;
          --spin: -35deg;
        }

        .smoke-seven {
          width: 185px;
          height: 185px;
          margin-left: 188px;
          animation-delay: 5.4s;
          animation-duration: 10.2s;
          --drift-x: 72px;
          --end-x: 154px;
          --spin: 38deg;
        }

        .smoke-eight {
          width: 255px;
          height: 255px;
          margin-left: -55px;
          animation-delay: 6.3s;
          animation-duration: 12.8s;
          --drift-x: 8px;
          --end-x: -58px;
          --spin: -14deg;
        }

        .smoke-nine {
          width: 138px;
          height: 138px;
          margin-left: 226px;
          animation-delay: 7.2s;
          animation-duration: 9.6s;
          --drift-x: 88px;
          --end-x: 176px;
          --spin: 24deg;
        }

        .smoke-ten {
          width: 198px;
          height: 198px;
          margin-left: -250px;
          animation-delay: 8.1s;
          animation-duration: 11.6s;
          --drift-x: -92px;
          --end-x: -185px;
          --spin: -28deg;
        }

        .smoke-haze {
          width: 460px;
          height: 300px;
          background: radial-gradient(
            ellipse at center,
            rgba(255, 214, 245, 0.1),
            rgba(168, 85, 247, 0.08) 44%,
            transparent 72%
          );
          filter: blur(46px);
          animation: hazeDrift 12s ease-in-out infinite;
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
          0%, 100% { opacity: 0.48; transform: translateX(-50%) scale(0.92); }
          50% { opacity: 0.85; transform: translateX(-50%) scale(1.08); }
        }

        @keyframes hazeDrift {
          0%, 100% { opacity: 0.08; transform: translate(-50%, 20px) scale(0.92); }
          45% { opacity: 0.22; transform: translate(calc(-50% + 36px), -92px) scale(1.08); }
          70% { opacity: 0.14; transform: translate(calc(-50% - 42px), -150px) scale(1.18); }
        }

        @keyframes perfumeSmoke {
          0% {
            opacity: 0;
            filter: blur(10px) saturate(1.1);
            transform: translate(-50%, 44px) scale(0.28) rotate(0deg);
          }
          14% { opacity: 0.2; }
          32% {
            opacity: 0.48;
            filter: blur(15px) saturate(1.25);
            transform: translate(calc(-50% + var(--drift-x, 20px)), -62px) scale(0.78) rotate(calc(var(--spin, 18deg) * -0.35));
          }
          58% {
            opacity: 0.36;
            filter: blur(22px) saturate(1.18);
            transform: translate(calc(-50% + var(--end-x, 60px) * 0.58), -168px) scale(1.22) rotate(var(--spin, 18deg));
          }
          78% { opacity: 0.18; }
          100% {
            opacity: 0;
            filter: blur(38px) saturate(1);
            transform: translate(calc(-50% + var(--end-x, 60px)), -345px) scale(2.05) rotate(calc(var(--spin, 18deg) * 1.35));
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;
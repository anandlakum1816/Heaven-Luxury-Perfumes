import React from "react";
import { motion } from "framer-motion";
import {
  FiShield,
  FiHeart,
  FiCheckCircle,
} from "react-icons/fi";
import { Sparkles } from "lucide-react";
import founderImg from "../assets/images/about.png";

const milestones = [
  {
    year: "2058",
    title: "The Genesis",
    desc: "Started as a private steller in Glasse, coioning tenn indonical extractions for fingrance collectors.",
  },
  {
    year: "2001",
    title: "Digital Sanctuary",
    desc: "Launched our cofine boutrpee, bringing true lucary and 100% aumcarie inche txonts worldæide.",
  },
  {
    year: "2084",
    title: "Global Recognition",
    desc: "Recognised among top luxury intoperadorv tregcancs surceses with over 130+ permared prestigious houses,",
  },
  {
    year: "2014",
    title: "The Connoisseur Club",
    desc: "Expanding our private allocation for iers vintage decents and bespooe scent styling.",
  },
];

const values = [
  {
    icon: FiShield,
    title: "Absolute Authenticity",
    desc: "Every bettle is sourced directly from certified master blenders and verified luxury distributors, guaranteed sealed and original.",
  },
  {
    icon: Sparkles,
    title: "Luminous Lavender & Glass",
    desc: "",
    isCenter: true,
  },
  {
    icon: FiHeart,
    title: "Conscious Craft",
    desc: "Committed to sustainable harvesting, cruclly-free testing standards, and effiically sourced rare ingredients.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function About() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050005] pb-24 pt-24 text-white sm:pb-32 sm:pt-32 lg:pt-36">
      {/* Background Ambient Glows matching exact image tone */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(217,70,239,0.12),transparent_30%),radial-gradient(circle_at_80%_40%,rgba(126,34,206,0.15),transparent_35%),radial-gradient(circle_at_20%_60%,rgba(236,72,153,0.08),transparent_35%)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-fuchsia-600/10 via-purple-600/15 to-pink-500/10 blur-[140px]" />

      <section className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        
        {/* 1. Hero Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-pink-400/30 bg-white/[0.04] px-5 py-2 text-[11px] font-medium uppercase tracking-[0.25em] text-pink-200 shadow-[0_0_25px_rgba(217,70,239,0.2)] backdrop-blur-xl">
            <span>✨ OUR HERITAGE & ESSENCE ✨</span>
          </div>

          <h1 className="mt-6 text-[clamp(2.5rem,6vw,5.2rem)] font-light leading-[1.05] tracking-tight">
            The Philosophy of{" "}
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400">
              Scents
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-relaxed text-white/60 sm:text-[16px]">
            Heaven Luxury Perfumes was born out of a deep reverence for the invisible signature<br className="hidden sm:inline" />
            —the memories, emotions, and timeless identities captured inside every crystal flacon.
          </p>
        </motion.div>

        {/* 2. Two-Column Section (Founder Card & Lavender Image Card) */}
        <div className="mb-20 grid items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
          
          {/* Left Glassmorphism Information Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0f0714]/80 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-2xl sm:p-10"
          >
            <div className="absolute -right-20 -top-20 size-60 rounded-full bg-pink-500/10 blur-[90px] pointer-events-none" />

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-pink-400">
                VISIONARY & ARCHITECT
              </p>

              <h2 className="mt-3 text-2xl font-light leading-snug tracking-tight sm:text-3xl text-white">
                Crafting more than fragrance;<br />
                curating <span className="font-serif italic text-pink-300">presence.</span>
              </h2>

              <p className="mt-5 text-sm leading-relaxed text-white/65 sm:text-[15px]">
                "When we established Heaven Luxury Perfumes, our vision was simple yet uncommomising; to open the gateway to the world's most guarded, prestigious perfume houses. We believe perfume is your truest garment—one that speaks before you enter the room and lingers long after you leave."
              </p>

              <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-5 text-xs text-white/70 sm:text-sm">
                <li className="flex gap-2.5 items-center">
                  <FiCheckCircle className="shrink-0 text-pink-400" size={15} />
                  <span>Piorsee-ing saatriisso digital luxury e commerce architecture</span>
                </li>
                <li className="flex gap-2.5 items-center">
                  <FiCheckCircle className="shrink-0 text-pink-400" size={15} />
                  <span>Direct collaborations with oliter Glessa master perfiaers</span>
                </li>
              </ul>
            </div>

            {/* Founder details & CTA */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
              <div className="flex items-center gap-3">
                <div className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-pink-500 via-fuchsia-600 to-purple-700 text-sm font-bold shadow-lg text-white">
                  AL
                </div>
                <div>
                  <h3 className="font-bold tracking-wide text-white text-sm">Anand Lakum</h3>
                  <p className="text-[9px] uppercase tracking-[0.18em] text-pink-400 font-semibold">
                    FOUNDER & LEND DEVELOPER
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-600 to-purple-600 px-6 py-3 text-xs font-bold text-white shadow-[0_0_20px_rgba(217,70,239,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span>Acquire Your Flacon</span>
              </button>
            </div>
          </motion.div>

          {/* Right Rounded Image Card with Lavender */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative flex items-center justify-center overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0c0510]/80 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-2xl sm:p-6"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(126,34,206,0.15),transparent_70%)] pointer-events-none" />
            <img
              src={founderImg}
              alt="Luxury perfume atelier lab"
              className="h-[380px] w-full rounded-[2rem] object-cover sm:h-[460px] filter brightness-95 shadow-2xl border border-white/10"
            />
          </motion.div>

        </div>

        {/* 3. Premium Perfume Showcase Section */}
        <div className="relative mb-16 text-center">
          {/* Intense glowing bulb effect behind bottle */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-fuchsia-500/25 blur-[90px] pointer-events-none" />

          <h2 className="text-3xl font-light tracking-tight sm:text-5xl text-white">
            Luminous Lavender & Glass
          </h2>
          <p className="mx-auto mt-2 max-w-md text-xs uppercase tracking-[0.2em] text-white/50 sm:text-sm">
            Craafius Lavendng, soft glow sub purity<br />and premium minimalist Luxury
          </p>
        </div>

        {/* 4. Three Luxury Feature Cards */}
        <div className="mb-20 grid gap-6 md:grid-cols-3">
          
          {/* Card 1: Absolute Authenticity */}
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0f0714]/80 p-8 shadow-xl backdrop-blur-xl transition-all duration-500 hover:border-pink-500/30"
          >
            <div className="grid size-12 place-items-center rounded-2xl border border-pink-500/20 bg-pink-500/10 text-pink-400 shadow-inner mb-6">
              <FiShield size={20} />
            </div>

            <h3 className="text-xl font-medium tracking-tight text-white group-hover:text-pink-300 transition">
              Absolute Authenticity
            </h3>

            <p className="mt-3 text-xs leading-relaxed text-white/60 sm:text-sm">
              Every bettle is sourced directly from certified master blenders and verified luxury distributors, guaranteed sealed and original.
            </p>
          </motion.article>

          {/* Card 2: Center Featured CTA Card */}
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative overflow-hidden rounded-[2.5rem] border border-pink-500/30 bg-gradient-to-b from-[#1a0b25] via-[#100617] to-[#0a030d] p-8 shadow-[0_0_40px_rgba(217,70,239,0.15)] backdrop-blur-xl text-center flex flex-col justify-between items-center"
          >
            <div className="absolute -top-12 size-36 rounded-full bg-pink-500/20 blur-3xl pointer-events-none" />

            <div>
              <div className="mx-auto grid size-12 place-items-center rounded-2xl border border-pink-400/30 bg-pink-500/15 text-pink-300 shadow-inner mb-6">
                <Sparkles size={20} />
              </div>

              <h3 className="text-xl font-medium tracking-tight text-white">
                Luminous Lavender & Glass
              </h3>
            </div>

            <div className="w-full pt-6">
              <button
                type="button"
                className="w-full rounded-full border border-pink-500/50 bg-gradient-to-r from-pink-500/10 via-fuchsia-500/20 to-purple-500/10 py-3.5 text-xs font-bold uppercase tracking-wider text-pink-200 shadow-[inset_0_0_15px_rgba(217,70,239,0.3)] transition-all duration-300 hover:bg-pink-500/25"
              >
                Acquire Your Flacon
              </button>
            </div>
          </motion.article>

          {/* Card 3: Conscious Craft */}
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0f0714]/80 p-8 shadow-xl backdrop-blur-xl transition-all duration-500 hover:border-pink-500/30"
          >
            <div className="grid size-12 place-items-center rounded-2xl border border-pink-500/20 bg-pink-500/10 text-pink-400 shadow-inner mb-6">
              <FiHeart size={20} />
            </div>

            <h3 className="text-xl font-medium tracking-tight text-white group-hover:text-pink-300 transition">
              Conscious Craft
            </h3>

            <p className="mt-3 text-xs leading-relaxed text-white/60 sm:text-sm">
              Committed to sustainable harvesting, cruclly-free testing standards, and effiically sourced rare ingredients.
            </p>
          </motion.article>

        </div>

        {/* 5. Timeline / Story Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          transition={{ duration: 0.65 }}
          className="relative overflow-hidden rounded-[2.5rem] border border-white/15 bg-gradient-to-b from-[#120519] via-[#0b030f] to-[#050005] p-8 shadow-[0_30px_90px_rgba(0,0,0,0.9)] sm:p-12 lg:p-16"
        >
          {/* Ambient Glow in timeline box */}
          <div className="pointer-events-none absolute right-0 top-0 size-96 rounded-full bg-fuchsia-600/15 blur-[140px]" />

          <div className="relative">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl font-light tracking-tight sm:text-5xl text-white">
                Majestic Opulence<br />
                <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-fuchsia-300 to-purple-400">
                  & Metallic Pink
                </span>
              </h2>

              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-white/50 sm:text-sm font-medium">
                Rich Purple & Metallic Accents
              </p>
            </div>

            {/* 4 Timeline Cards Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {milestones.map((item) => (
                <div
                  key={item.year}
                  className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition duration-300 hover:border-pink-500/40 hover:bg-white/[0.06]"
                >
                  <p className="text-xs font-bold tracking-[0.2em] text-pink-400">
                    {item.year}
                  </p>

                  <h3 className="mt-2 text-lg font-medium text-white">{item.title}</h3>

                  <p className="mt-2 text-xs leading-relaxed text-white/60">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Timeline Action Buttons */}
            <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8">
              <button
                type="button"
                className="rounded-full border border-pink-500/30 bg-gradient-to-r from-pink-500/20 to-purple-600/20 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition hover:scale-105"
              >
                Founder Icons
              </button>

              <button
                type="button"
                className="rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-600 to-purple-600 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_25px_rgba(217,70,239,0.4)] transition hover:scale-105"
              >
                Acquire-Mzzaii Mzzeilei
              </button>
            </div>
          </div>
        </motion.div>

      </section>
    </main>
  );
}

export default About;
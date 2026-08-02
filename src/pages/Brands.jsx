import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Crown,
  Star,
  Award,
  ShieldCheck,
  Globe2,
  ArrowUpRight,
  Check,
  ShoppingBag,
} from "lucide-react";

// Importing brand images
import Dior from "../assets/brands/dior.png";
import Chanel from "../assets/brands/chanel.png";
import TomFord from "../assets/brands/topford.png";
import Creed from "../assets/brands/creed.png";
import Versace from "../assets/brands/versace.png";
import Gucci from "../assets/brands/gucci.png";
import YSL from "../assets/brands/YSL.png";
import Armani from "../assets/brands/armani.png";
import Armaf from "../assets/brands/armaf.png";
import Lattafa from "../assets/brands/lattafa.png";
import Rasasi from "../assets/brands/rasasi.png";
import br1 from "../assets/brands/1745.png";

const brands = [
  { name: "Dior", image: Dior, origin: "France" },
  { name: "Chanel", image: Chanel, origin: "France" },
  { name: "Tom Ford", image: TomFord, origin: "USA" },
  { name: "Creed", image: Creed, origin: "France" },
  { name: "Versace", image: Versace, origin: "Italy" },
  { name: "Gucci", image: Gucci, origin: "Italy" },
  { name: "YSL", image: YSL, origin: "France" },
  { name: "Armani", image: Armani, origin: "Italy" },
  { name: "Armaf", image: Armaf, origin: "UAE" },
  { name: "Lattafa", image: Lattafa, origin: "UAE" },
  { name: "Rasasi", image: Rasasi, origin: "UAE" },
  { name: "1745", image: br1, origin: "UAE" },
];

function Brands() {
  return (
    <section className="relative isolate overflow-hidden bg-[#070508] text-white">
      {/* Dynamic Background Glow Gradients */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_10%,rgba(236,72,153,.19),transparent_25%),radial-gradient(circle_at_88%_32%,rgba(124,58,237,.16),transparent_28%),linear-gradient(180deg,#100611_0%,#070508_42%,#0b0710_100%)]" />
      <div className="pointer-events-none absolute left-1/2 top-[28rem] -z-10 h-px w-[80rem] -translate-x-1/2 bg-gradient-to-r from-transparent via-pink-400/30 to-transparent" />

      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-20 sm:px-8 sm:pb-24 sm:pt-28 lg:px-10 lg:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.12fr_.88fr] lg:gap-16">
          
          {/* Left Hero Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-pink-300/20 bg-white/[0.06] px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[.22em] text-pink-100 shadow-[0_0_30px_rgba(236,72,153,.12)] backdrop-blur-xl sm:px-4 sm:text-[11px]">
              <Sparkles size={13} className="text-pink-400" />
              Curated Fragrance Atelier
            </div>

            <h1 className="mt-6 text-[clamp(2.6rem,7vw,5.6rem)] font-light leading-[.95] tracking-[-.06em] text-white">
              Scents with
              <span className="mt-1 block bg-gradient-to-r from-[#f9a8d4] via-[#f5d0fe] to-[#a5b4fc] bg-clip-text font-serif italic tracking-[-.045em] text-transparent">
                a signature story.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-[15px] leading-7 text-white/60 sm:text-[17px] sm:leading-8">
              Discover exceptional perfume houses, chosen for their craft,
              provenance, and the unforgettable trail they leave behind.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-4 sm:mt-10">
              <div className="flex -space-x-2.5">
                {["D", "C", "G"].map((letter, index) => (
                  <span
                    key={letter}
                    className="grid size-10 place-items-center rounded-full border-2 border-[#100611] text-xs font-bold shadow-md"
                    style={{
                      background: ["#be185d", "#6d28d9", "#c2410c"][index],
                    }}
                  >
                    {letter}
                  </span>
                ))}
              </div>

              <div>
                <div className="flex gap-0.5 text-amber-300">
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star key={index} size={13} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-1 text-xs text-white/45">
                  Loved by 10,000+ scent collectors
                </p>
              </div>
            </div>
          </motion.div>

          {/* Premium Hero Card */}
          <motion.aside 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="group relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-pink-500/25 via-transparent to-violet-500/20 opacity-70 blur-2xl transition duration-700 group-hover:opacity-100" />

            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/[0.07] p-5 shadow-2xl shadow-black/40 backdrop-blur-2xl sm:rounded-[2rem] sm:p-7">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-pink-400/20 blur-[70px]" />

              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[.23em] text-pink-300">
                    The Private Vault
                  </p>
                  <h2 className="mt-3 max-w-xs text-2xl font-medium leading-tight tracking-tight sm:text-3xl">
                    The art of scent architecture.
                  </h2>
                </div>
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl border border-pink-300/20 bg-pink-400/10 text-pink-200">
                  <Crown size={21} />
                </span>
              </div>

              <div className="relative mt-7 rounded-2xl border border-white/10 bg-black/20 p-4 sm:p-5">
                <p className="text-sm leading-6 text-white/60">
                  Rare botanical ingredients, preserved heritage, and modern
                  composition in every bottle.
                </p>

                <div className="mt-5 grid grid-cols-2 gap-3 border-t border-white/10 pt-4">
                  <div>
                    <strong className="block text-lg text-pink-300">100%</strong>
                    <span className="text-[11px] text-white/45">authenticity assured</span>
                  </div>
                  <div>
                    <strong className="block text-lg text-violet-300">12+</strong>
                    <span className="text-[11px] text-white/45">iconic maisons</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>

        </div>
      </div>

      {/* Brand Grid Section with Staggered Fade-in */}
      <div className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-28 lg:px-10">
        <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.24em] text-pink-400">
              The Collection
            </p>
            <h2 className="mt-2 text-3xl font-medium tracking-tight sm:text-4xl">
              Find your fragrance house.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-white/50 sm:text-right">
            A considered edit of the world’s most distinctive perfumers.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {brands.map((brand, idx) => (
            <motion.article
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -6 }}
              className="group relative min-h-[240px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-5 shadow-lg transition-colors duration-500 hover:border-pink-500/50 hover:bg-white/[0.08] hover:shadow-[0_15px_35px_rgba(236,72,153,0.12)] sm:min-h-[270px] sm:p-6"
            >
              {/* Soft Top Glow on Hover */}
              <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-pink-500/15 via-purple-500/5 to-transparent opacity-0 transition duration-500 group-hover:opacity-100 pointer-events-none" />

              <div className="relative flex items-start justify-between">
                <div className="grid size-14 place-items-center overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-inner">
                  {brand.image ? (
                    <img
                      src={brand.image}
                      alt={brand.name}
                      className="size-9 object-contain filter brightness-95 group-hover:brightness-100 transition duration-300"
                    />
                  ) : (
                    <span className="text-xl font-bold text-pink-300">
                      {brand.name.charAt(0)}
                    </span>
                  )}
                </div>

                <span className="rounded-full border border-pink-500/20 bg-pink-500/10 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-pink-300">
                  {brand.origin}
                </span>
              </div>

              <div className="relative mt-8 sm:mt-10">
                <h3 className="text-xl font-semibold tracking-tight text-white group-hover:text-pink-300 transition duration-300">
                  {brand.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  Distinctive compositions made for a lasting impression.
                </p>
              </div>

              <button
                type="button"
                className="absolute bottom-5 left-5 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-pink-400 transition-all duration-300 hover:text-pink-300 sm:bottom-6 sm:left-6"
              >
                <span>Discover House</span>
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="border-y border-white/[.07] bg-black/15">
        <div className="mx-auto grid max-w-7xl gap-px bg-white/[.07] sm:grid-cols-3">
          {[
            { icon: Award, title: "Exceptional Craft", desc: "Independent and heritage houses, thoughtfully selected." },
            { icon: ShieldCheck, title: "Authenticity First", desc: "Verified sourcing and sealed original products." },
            { icon: Globe2, title: "Global Perspective", desc: "French classics, Eastern oud, and modern icons." }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-[#0a070d] p-7 sm:p-9 transition duration-300 hover:bg-[#120a17] group overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform duration-300">
                <item.icon size={22} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white group-hover:text-pink-200 transition-colors">
                {item.title}
              </h3>
              <p className="mt-2 max-w-xs text-sm leading-6 text-white/50">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2.5rem] border border-pink-500/20 bg-gradient-to-r from-[#160b19] via-[#1f0d26] to-[#120815] px-8 py-16 text-center shadow-[0_20px_60px_rgba(0,0,0,0.6)] sm:rounded-[3rem] sm:px-16 sm:py-20"
        >
          {/* Glowing Ambient Background Orbs */}
          <div className="absolute -left-20 -top-20 size-64 rounded-full bg-pink-600/15 blur-[100px] pointer-events-none" />
          <div className="absolute -right-20 -bottom-20 size-64 rounded-full bg-purple-600/15 blur-[100px] pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />

          <div className="relative mx-auto max-w-2xl">
            <span className="inline-block rounded-full border border-pink-300/20 bg-pink-500/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[.3em] text-pink-200 backdrop-blur-md shadow-inner">
              Make It Memorable
            </span>

            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              Meet your next{" "}
              <span className="italic font-serif font-light text-pink-300">
                signature scent.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">
              Explore rare, exquisite fragrances curated to feel as uniquely
              individual as you are.
            </p>

            <div className="mt-8 flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                className="group relative inline-flex min-w-[220px] items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 px-7 py-4 text-sm font-bold text-white shadow-[0_12px_30px_rgba(236,72,153,0.32)] transition-shadow duration-300 hover:shadow-[0_18px_40px_rgba(168,85,247,0.42)]"
              >
                {/* Normal button text */}
                <span className="relative z-10 flex items-center gap-2 transition-all duration-500 group-hover:-translate-y-10 group-hover:opacity-0">
                  Shop the Collection
                  <span className="grid size-6 place-items-center rounded-full bg-white/20">
                    <Check size={14} strokeWidth={3} />
                  </span>
                </span>

                {/* Hover animation layer */}
                <span className="absolute inset-0 flex translate-y-full items-center justify-center gap-2 bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-500 transition-transform duration-500 ease-out group-hover:translate-y-0">
                  <ShoppingBag size={18} className="animate-bounce text-pink-100" />
                  <span className="text-xs font-bold uppercase tracking-[0.14em]">
                    Express Shipping
                  </span>
                </span>

                {/* Shine effect */}
                <span className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/3 -skew-x-12 bg-white/20 transition-all duration-700 group-hover:left-[130%]" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Brands;
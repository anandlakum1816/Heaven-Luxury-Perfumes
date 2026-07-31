import React, { useState } from "react";
import { FiMail, FiArrowUpRight, FiStar } from "react-icons/fi";
import { motion } from "framer-motion";

const stats = [
  { index: "01", value: "120+", label: "Luxury Perfume Brands", note: "curated houses" },
  { index: "02", value: "15K+", label: "Monthly Sales", note: "worldwide" },
  { index: "03", value: "25K+", label: "Customer Reviews", note: "4.9 average" },
];

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    alert("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <section className="relative overflow-hidden bg-[#030107] px-4 py-28 md:px-8">
      {/* Background Ambient Glow Effects */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-pink-600/15 blur-[180px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[450px] w-[450px] rounded-full bg-purple-700/15 blur-[180px]" />

      {/* Outer Wrapper with Section Title */}
      <div className="mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-pink-300/20 bg-pink-500/10 px-4 py-1.5 text-xs uppercase tracking-[3px] text-pink-300 mb-4 backdrop-blur-md">
            <FiStar className="text-pink-300" />
            Exclusive Access
            <FiStar className="text-pink-300" />
          </span>
          <h2 className="text-4xl md:text-6xl font-light text-white tracking-tight leading-tight">
            Join Our Private <span className="italic font-normal bg-gradient-to-r from-pink-300 via-pink-500 to-purple-500 bg-clip-text text-transparent">Community</span>
          </h2>
          <p className="mt-6 text-base text-white/50 leading-relaxed">
            Subscribe to receive curated updates, private drops, and rare finds directly in your inbox.
          </p>
        </div>

        {/* Main Newsletter Container Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[30px] border border-white/10 bg-gradient-to-br from-[#170520] via-[#0b0714] to-[#030107] shadow-[0_40px_120px_-40px_rgba(0,0,0,.9)] overflow-hidden"
        >
          {/* Decorative Corner Accents */}
          <span className="absolute left-6 top-6 h-6 w-px bg-pink-400/50" />
          <span className="absolute left-6 top-6 h-px w-6 bg-pink-400/50" />
          <span className="absolute bottom-6 right-6 h-6 w-px bg-purple-400/50" />
          <span className="absolute bottom-6 right-6 h-px w-6 bg-purple-400/50" />

          <div className="grid gap-14 p-8 md:grid-cols-[1.05fr_0.95fr] md:gap-0 md:p-0">
            
            {/* Left Column: Branding & Copy */}
            <div className="relative md:border-r md:border-white/10 md:p-14">
              <div className="mb-8 flex items-center gap-3">
                <FiStar className="text-pink-400" />
                <span className="text-[10px] uppercase tracking-[0.5em] text-white/45">
                  Maison Correspondence
                </span>
              </div>

              <h3 className="text-5xl font-light leading-[0.95] tracking-tight text-white md:text-7xl">
                The scent list
                <span className="mt-1 block bg-gradient-to-r from-pink-300 via-pink-500 to-purple-500 bg-clip-text italic text-transparent">
                  for the few
                </span>
              </h3>

              <div className="my-8 h-px w-40 bg-gradient-to-r from-transparent via-pink-400/70 to-transparent" />

              <p className="max-w-md text-sm leading-7 text-white/60 md:text-base">
                A quiet letter, sent twice a month. Private launches, decanted
                rarities and member-only allocations from houses that never advertise.
              </p>

              <p className="mt-10 text-xl md:text-2xl italic text-pink-200/70">
                &ldquo;Perfume is the invisible signature.&rdquo;
              </p>
            </div>

            {/* Right Column: Form & Statistics */}
            <div className="relative md:p-14">
              <form onSubmit={handleSubmit}>
                <label className="text-[10px] uppercase tracking-[0.45em] text-white/45">
                  Your address
                </label>

                <div className="mt-4 flex items-center gap-3 border-b border-white/15 pb-3 transition-colors focus-within:border-pink-400">
                  <FiMail className="text-lg text-pink-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@atelier.com"
                    aria-label="Email address"
                    className="h-9 w-full bg-transparent text-base text-white outline-none placeholder:text-white/30"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-8 inline-flex items-center gap-3 rounded-full border border-pink-400/40 bg-gradient-to-r from-pink-500/15 to-purple-600/15 px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.35em] text-pink-200 shadow-[0_18px_50px_-18px_rgba(236,72,153,.6)] transition-all hover:from-pink-500 hover:to-purple-600 hover:text-white cursor-pointer"
                >
                  Request access
                  <FiArrowUpRight className="text-base" />
                </motion.button>

                <p className="mt-5 text-xs leading-6 text-white/45">
                  No noise. Unsubscribe with a single line — we keep the list small on purpose.
                </p>
              </form>

              {/* Statistics List */}
              <ul className="mt-12 divide-y divide-white/10 border-y border-white/10">
                {stats.map((item, i) => (
                  <motion.li
                    key={item.index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 * i }}
                    className="flex items-baseline gap-5 py-4 transition-colors hover:bg-white/[0.04]"
                  >
                    <span className="text-[10px] tracking-[0.3em] text-pink-400/60 font-mono">{item.index}</span>
                    <span className="bg-gradient-to-r from-pink-300 via-pink-500 to-purple-500 bg-clip-text text-3xl font-semibold text-transparent">
                      {item.value}
                    </span>
                    <span className="flex-1 text-xs uppercase tracking-[0.2em] text-white/60">
                      {item.label}
                    </span>
                    <span className="hidden text-[10px] italic text-white/40 sm:block">{item.note}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Newsletter;
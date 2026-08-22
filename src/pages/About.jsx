import React from "react";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiAward,
  FiCheckCircle,
  FiGlobe,
  FiHeart,
  FiPackage,
  FiShield,
  FiStar,
  FiUsers,
} from "react-icons/fi";
import { Quote, Sparkles } from "lucide-react";
import founderImg from "../assets/images/about.png";

const statistics = [
  {
    value: "100%",
    label: "Authentic Products",
  },
  {
    value: "50+",
    label: "Luxury Fragrances",
  },
  {
    value: "10K+",
    label: "Happy Customers",
  },
  {
    value: "24/7",
    label: "Customer Support",
  },
];

const values = [
  {
    icon: FiShield,
    number: "01",
    title: "Absolute Authenticity",
    description:
      "Every perfume is carefully selected from trusted suppliers and verified to ensure genuine quality, originality and excellence.",
    gradient: "from-pink-500/20 to-fuchsia-600/5",
  },
  {
    icon: FiAward,
    number: "02",
    title: "Curated Excellence",
    description:
      "Our collection brings together refined fragrances chosen for their craftsmanship, character and unforgettable presence.",
    gradient: "from-fuchsia-500/20 to-purple-600/5",
  },
  {
    icon: FiHeart,
    number: "03",
    title: "Personal Experience",
    description:
      "We help every customer discover a fragrance that complements their personality, lifestyle and most meaningful moments.",
    gradient: "from-purple-500/20 to-blue-600/5",
  },
];

const journey = [
  {
    step: "01",
    title: "Discover",
    description:
      "Explore a carefully curated collection of premium fragrances for every personality and occasion.",
    icon: Sparkles,
  },
  {
    step: "02",
    title: "Experience",
    description:
      "Understand every scent through clear notes, character, performance and fragrance recommendations.",
    icon: FiStar,
  },
  {
    step: "03",
    title: "Select",
    description:
      "Choose your signature fragrance with guidance designed around your individual taste and style.",
    icon: FiCheckCircle,
  },
  {
    step: "04",
    title: "Delivered",
    description:
      "Receive your fragrance in secure, elegant packaging that makes every order feel truly special.",
    icon: FiPackage,
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -45,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 45,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

function About() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050005] pb-24 pt-24 text-white sm:pb-32 sm:pt-32 lg:pt-36">
      {/* Background ambient effects */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(236,72,153,0.12),transparent_28%),radial-gradient(circle_at_85%_25%,rgba(126,34,206,0.16),transparent_32%),radial-gradient(circle_at_50%_75%,rgba(59,130,246,0.08),transparent_35%)]" />

      <motion.div
        animate={{
          x: [0, 45, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-52 top-[22%] h-[450px] w-[450px] rounded-full bg-pink-600/10 blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, -45, 0],
          y: [0, -35, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-52 top-[8%] h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[150px]"
      />

      <section className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Hero section */}
        <div className="grid min-h-[650px] items-center gap-14 pb-20 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:pb-28">
          {/* Hero content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="order-2 lg:order-1"
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-pink-400/25 bg-pink-500/[0.07] px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-pink-200 shadow-[0_0_25px_rgba(217,70,239,0.15)] backdrop-blur-xl sm:px-5 sm:text-[11px]"
            >
              <motion.span
                animate={{
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.12, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                }}
              >
                <Sparkles size={14} className="text-pink-400" />
              </motion.span>

              Our Story & Philosophy

              <span className="relative ml-1 flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-400 opacity-60" />
                <span className="relative h-2 w-2 rounded-full bg-pink-400" />
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="mt-7 text-[clamp(2.8rem,6vw,5.6rem)] font-light leading-[1.02] tracking-tight"
            >
              Fragrance Is More Than
              <span className="mt-1 block bg-gradient-to-r from-pink-300 via-fuchsia-400 to-purple-400 bg-clip-text font-serif font-normal italic text-transparent">
                A Beautiful Scent
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="mt-6 max-w-xl text-sm leading-7 text-white/55 sm:text-base"
            >
              Heaven Luxury Perfumes was created with one meaningful vision—to
              make premium fragrances personal, memorable and accessible to
              everyone who believes that scent is a reflection of identity.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="mt-8 space-y-3"
            >
              {[
                "Carefully selected premium fragrances",
                "Quality, authenticity and customer trust",
                "A personal approach to fragrance discovery",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-xs text-white/65 sm:text-sm"
                >
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-pink-400/20 bg-pink-500/10">
                    <FiCheckCircle size={12} className="text-pink-300" />
                  </span>

                  <span>{item}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="mt-9 flex flex-col gap-4 sm:flex-row"
            >
              <motion.a
                href="/collection"
                whileHover={{
                  y: -3,
                  boxShadow: "0 15px 40px rgba(217,70,239,0.28)",
                }}
                whileTap={{ scale: 0.97 }}
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-600 to-purple-600 px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-[0_0_28px_rgba(217,70,239,0.3)]"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <span className="relative">Explore Collection</span>

                <FiArrowRight
                  size={15}
                  className="relative transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.a>

              <motion.a
                href="/contact"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.035] px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white/75 backdrop-blur-xl transition-colors duration-300 hover:border-pink-400/30 hover:bg-pink-500/[0.08] hover:text-pink-200"
              >
                Contact Us
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Hero image */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeRight}
            transition={{
              duration: 0.85,
              delay: 0.15,
            }}
            className="relative order-1 mx-auto w-full max-w-2xl lg:order-2"
          >
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-pink-500/20 via-fuchsia-500/20 to-blue-500/10 blur-[100px]" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-3 shadow-[0_30px_100px_rgba(0,0,0,0.7)] backdrop-blur-xl sm:rounded-[2.8rem] sm:p-4">
              <div className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2.3rem]">
                <img
                  src={founderImg}
                  alt="Heaven Luxury Perfumes collection"
                  className="h-[400px] w-full object-cover object-center brightness-[0.88] transition-transform duration-1000 hover:scale-105 sm:h-[540px] lg:h-[610px]"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080109]/90 via-transparent to-purple-950/10" />

                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
                  <div className="max-w-md rounded-2xl border border-white/10 bg-black/35 p-5 backdrop-blur-xl sm:p-6">
                    <Quote
                      size={23}
                      className="mb-3 text-pink-300"
                      strokeWidth={1.5}
                    />

                    <p className="font-serif text-lg italic leading-relaxed text-white/90 sm:text-xl">
                      “A fragrance introduces you before words ever can.”
                    </p>

                    <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.22em] text-pink-300">
                      Heaven Luxury Perfumes
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating authenticity card */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-2 top-8 hidden items-center gap-3 rounded-2xl border border-white/10 bg-[#100713]/85 p-4 shadow-2xl backdrop-blur-2xl sm:flex lg:-right-8"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-600/20 text-pink-300">
                <FiShield size={19} />
              </div>

              <div>
                <p className="text-xs font-medium text-white/90">
                  Authentic Quality
                </p>
                <p className="mt-1 text-[9px] uppercase tracking-wider text-white/35">
                  Carefully Verified
                </p>
              </div>
            </motion.div>

            {/* Floating customer card */}
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-5 -left-2 hidden items-center gap-3 rounded-2xl border border-white/10 bg-[#100713]/90 p-4 shadow-2xl backdrop-blur-2xl sm:flex lg:-left-9"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-blue-600/20 text-fuchsia-300">
                <FiUsers size={19} />
              </div>

              <div>
                <div className="flex gap-1 text-pink-300">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FiStar key={star} size={10} fill="currentColor" />
                  ))}
                </div>

                <p className="mt-1 text-[9px] uppercase tracking-wider text-white/45">
                  Loved by our customers
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Statistics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4"
        >
          {statistics.map((statistic, index) => (
            <motion.div
              key={statistic.label}
              variants={fadeUp}
              className={`group relative p-7 text-center sm:p-8 ${
                index !== statistics.length - 1
                  ? "border-b border-white/[0.08] sm:border-b-0 sm:border-r"
                  : ""
              } ${
                index === 1
                  ? "sm:border-r-0 lg:border-r"
                  : ""
              } ${
                index === 0 || index === 1
                  ? "sm:border-b sm:border-white/[0.08] lg:border-b-0"
                  : ""
              }`}
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-pink-500/[0.06] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <p className="relative bg-gradient-to-r from-pink-300 via-fuchsia-400 to-purple-400 bg-clip-text text-3xl font-light text-transparent sm:text-4xl">
                {statistic.value}
              </p>

              <p className="relative mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
                {statistic.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Brand story */}
        <section className="py-24 sm:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeLeft}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-pink-400">
                <span className="h-px w-8 bg-gradient-to-r from-pink-400 to-purple-500" />
                Why We Exist
              </div>

              <h2 className="mt-5 text-3xl font-light leading-tight tracking-tight sm:text-5xl">
                Built Around Emotion,
                <span className="block font-serif italic text-pink-300">
                  Crafted Around You
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeRight}
              transition={{ duration: 0.7 }}
              className="relative border-l border-pink-400/20 pl-6 sm:pl-10"
            >
              <div className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-pink-400 shadow-[0_0_16px_rgba(236,72,153,0.8)]" />

              <p className="text-sm leading-8 text-white/60 sm:text-base">
                We believe that perfume is deeply personal. It can bring back a
                memory, express confidence, create comfort and leave a lasting
                impression. That belief shapes every fragrance we select and
                every customer experience we create.
              </p>

              <p className="mt-5 text-sm leading-8 text-white/45 sm:text-base">
                Our purpose is not simply to offer perfume. It is to create a
                trusted destination where quality, discovery and personal style
                come together beautifully.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.65 }}
            className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"
          >
            <div>
              <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-pink-400">
                <span className="h-px w-8 bg-gradient-to-r from-pink-400 to-purple-500" />
                Our Core Values
              </div>

              <h2 className="mt-5 text-3xl font-light tracking-tight sm:text-5xl">
                The Standard Behind
                <span className="font-serif italic text-pink-300">
                  {" "}
                  Every Scent
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-white/40">
              Our values guide every product we select and every experience we
              provide.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-5 lg:grid-cols-3"
          >
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <motion.article
                  key={value.title}
                  variants={fadeUp}
                  whileHover={{ y: -8 }}
                  className={`group relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-gradient-to-br ${value.gradient} p-7 shadow-xl backdrop-blur-xl transition-colors duration-500 hover:border-pink-400/25 sm:p-8`}
                >
                  <div className="pointer-events-none absolute -right-10 -top-12 text-[110px] font-bold leading-none text-white/[0.025]">
                    {value.number}
                  </div>

                  <div className="flex items-start justify-between">
                    <div className="grid h-13 w-13 h-[52px] place-items-center rounded-2xl border border-pink-400/20 bg-pink-500/10 text-pink-300 transition-all duration-500 group-hover:scale-110 group-hover:bg-pink-500/15">
                      <Icon size={21} />
                    </div>

                    <span className="text-[10px] font-bold tracking-[0.2em] text-white/20">
                      {value.number}
                    </span>
                  </div>

                  <h3 className="mt-8 text-xl font-medium tracking-tight text-white transition-colors group-hover:text-pink-200">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/50">
                    {value.description}
                  </p>

                  <div className="mt-7 h-px w-full bg-gradient-to-r from-pink-400/30 via-purple-400/10 to-transparent" />
                </motion.article>
              );
            })}
          </motion.div>
        </section>

        {/* Customer journey */}
        <section className="py-24 sm:py-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.65 }}
            className="mx-auto mb-14 max-w-3xl text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/[0.07] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-purple-200">
              <Sparkles size={13} />
              The Fragrance Journey
            </div>

            <h2 className="mt-6 text-3xl font-light tracking-tight sm:text-5xl">
              From Discovery to
              <span className="font-serif italic text-pink-300">
                {" "}
                Your Doorstep
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/45">
              Every step is designed to make finding and receiving your
              fragrance simple, personal and memorable.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            <div className="pointer-events-none absolute left-[12%] right-[12%] top-[39px] hidden h-px bg-gradient-to-r from-pink-500/20 via-fuchsia-400/50 to-blue-500/20 lg:block" />

            {journey.map((item) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.step}
                  variants={fadeUp}
                  className="group relative rounded-[1.7rem] border border-white/[0.08] bg-[#0d0610]/75 p-6 backdrop-blur-xl transition-all duration-500 hover:border-purple-400/25 hover:bg-white/[0.045]"
                >
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="grid h-[52px] w-[52px] place-items-center rounded-2xl border border-purple-400/20 bg-gradient-to-br from-pink-500/15 to-blue-500/10 text-pink-300 shadow-[0_0_25px_rgba(168,85,247,0.1)] transition-transform duration-500 group-hover:scale-110">
                      <Icon size={20} />
                    </div>

                    <span className="text-[10px] font-bold tracking-[0.2em] text-purple-300/50">
                      STEP {item.step}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-medium text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-white/45">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </section>

        {/* Founder section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/[0.1] bg-gradient-to-br from-[#19091d]/90 via-[#0f0613] to-[#08030b] p-7 shadow-[0_30px_100px_rgba(0,0,0,0.65)] sm:rounded-[2.8rem] sm:p-10 lg:p-14"
        >
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-purple-600/15 blur-[130px]" />
          <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-pink-400">
                Founder’s Message
              </p>

              <div className="mt-7 flex items-center gap-4">
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-pink-500 via-fuchsia-600 to-purple-700 text-lg font-bold text-white shadow-[0_0_30px_rgba(217,70,239,0.25)]">
                  AL
                </div>

                <div>
                  <h3 className="text-lg font-medium text-white">
                    Anand Lakum
                  </h3>

                  <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-pink-300">
                    Founder & Lead Developer
                  </p>
                </div>
              </div>
            </div>

            <div className="relative border-t border-white/10 pt-8 lg:border-l lg:border-t-0 lg:pl-14 lg:pt-0">
              <Quote
                size={34}
                strokeWidth={1.2}
                className="mb-5 text-pink-300/70"
              />

              <p className="font-serif text-xl italic leading-relaxed text-white/85 sm:text-2xl lg:text-3xl">
                “Our goal is to make every fragrance feel like it was selected
                especially for the person wearing it.”
              </p>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/45">
                Heaven Luxury Perfumes combines thoughtful design, trusted
                quality and personal service to create a modern destination for
                fragrance lovers.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Final CTA */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="relative mt-20 overflow-hidden rounded-[2rem] border border-pink-400/15 bg-gradient-to-r from-pink-950/30 via-purple-950/35 to-blue-950/20 px-6 py-14 text-center shadow-[0_25px_80px_rgba(0,0,0,0.55)] sm:mt-24 sm:rounded-[2.8rem] sm:px-10 sm:py-20"
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/15 blur-[100px]" />

          <div className="relative">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-pink-400/20 bg-pink-500/10 text-pink-300">
              <FiGlobe size={22} />
            </div>

            <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-light leading-tight tracking-tight sm:text-5xl">
              Discover a Fragrance That Feels
              <span className="font-serif italic text-pink-300">
                {" "}
                Uniquely Yours
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/45">
              Explore our curated collection and find a scent designed to
              become part of your story.
            </p>

            <motion.a
              href="/collection"
              whileHover={{
                y: -4,
                boxShadow: "0 18px 45px rgba(217,70,239,0.3)",
              }}
              whileTap={{ scale: 0.97 }}
              className="group relative mt-8 inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-600 to-purple-600 px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white shadow-[0_0_30px_rgba(217,70,239,0.3)]"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              <span className="relative">Shop Our Collection</span>

              <FiArrowRight
                size={15}
                className="relative transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.a>
          </div>
        </motion.section>
      </section>
    </main>
  );
}

export default About;
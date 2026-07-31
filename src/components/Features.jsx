import { FiAward, FiTruck, FiShield, FiGift, FiStar } from "react-icons/fi";
import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import mainFeatureImg from "../assets/images/p6.png";

function Counter({ value, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (latest) => {
        setCount(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function Features() {
  const features = [
    {
      icon: <FiAward />,
      title: "Premium Quality",
      desc: "Crafted with the world's finest fragrance ingredients.",
    },
    {
      icon: <FiTruck />,
      title: "Worldwide Shipping",
      desc: "Fast, secure and insured delivery across the globe.",
    },
    {
      icon: <FiShield />,
      title: "100% Authentic",
      desc: "Guaranteed original perfumes with verified quality.",
    },
    {
      icon: <FiGift />,
      title: "Luxury Packaging",
      desc: "Beautiful gift-ready presentation for every occasion.",
    },
  ];

  const stats = [
    { value: 25, suffix: "K+", label: "Happy Customers" },
    { value: 150, suffix: "+", label: "Premium Fragrances" },
    { value: 4.9, suffix: "★", label: "Customer Rating", isRating: true },
  ];

  return (
    <section className="relative overflow-hidden bg-[#030107] px-4 py-28 md:px-8">
      {/* Background Ambient Glow */}
      <div className="absolute left-0 top-1/4 h-[400px] w-[400px] rounded-full bg-fuchsia-600/10 blur-[180px] pointer-events-none" />
      <div className="absolute right-0 bottom-1/4 h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-[180px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* Section Header & Stats */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20 flex flex-col items-center text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-pink-300/20 bg-gradient-to-r from-pink-500/10 to-purple-600/10 px-5 py-2 text-xs font-medium uppercase tracking-[4px] text-pink-200 shadow-[0_0_28px_rgba(236,72,153,.14)] backdrop-blur-xl">
            <FiStar className="text-sm text-pink-300" />
              Our Advantage
            <FiStar className="text-sm text-pink-300" />
          </span>

          <h2 className="mt-6 text-4xl font-light leading-tight text-white md:text-5xl lg:text-6xl tracking-tight">
            Crafted For{" "}
            <span className="mt-1 block italic font-normal bg-gradient-to-r from-fuchsia-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Luxury Lovers
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-base md:text-lg leading-8 text-white/60">
            Experience premium fragrances designed to leave a lasting impression. Every bottle combines elegance, quality and sophistication.
          </p>

          {/* Stats Bar */}
          <div className="mt-12 flex flex-wrap justify-center gap-10 md:gap-16 border-y border-white/10 py-8 w-full max-w-4xl">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -4, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="text-center"
              >
                <h3 className="text-3xl md:text-4xl font-semibold text-white">
                  {stat.isRating ? (
                    <span>4.9{stat.suffix}</span>
                  ) : (
                    <Counter value={stat.value} suffix={stat.suffix} />
                  )}
                </h3>
                <p className="mt-1.5 text-xs uppercase tracking-[0.2em] text-white/40">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main Content Grid (Image & Feature Cards) */}
        <div className="grid items-center gap-16 lg:grid-cols-2">
          
          {/* Left Column: Floating Image Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center"
          >
            <div className="absolute h-[400px] w-[400px] rounded-full bg-gradient-to-r from-fuchsia-600/15 to-purple-600/15 blur-3xl pointer-events-none" />

            <motion.img
              src={mainFeatureImg}
              alt="Luxury Perfume"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-full max-w-[480px] object-contain drop-shadow-[0_20px_50px_rgba(217,70,239,0.25)]"
            />
          </motion.div>

          {/* Right Column: Feature Cards Grid */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            className="grid gap-5 sm:grid-cols-2"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 },
                }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.01] p-6 backdrop-blur-xl transition-all duration-300 hover:border-fuchsia-500/40 hover:bg-white/[0.08] hover:shadow-[0_20px_50px_rgba(217,70,239,0.15)]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-600 to-purple-600 text-xl text-white shadow-[0_10px_30px_rgba(217,70,239,0.3)] transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                  {feature.icon}
                </div>

                <h4 className="mb-2 text-base font-semibold text-white group-hover:text-fuchsia-200 transition-colors">
                  {feature.title}
                </h4>
                <p className="text-xs md:text-sm leading-6 text-white/50">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Features;
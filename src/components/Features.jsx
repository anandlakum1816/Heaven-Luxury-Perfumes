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
    <section className="relative overflow-hidden  px-4 pt-8 pb-14 md:px-6 md:pt-10 md:pb-16">
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-fuchsia-600/10 blur-[180px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-600/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20 flex flex-col items-center text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-pink-300/20 bg-gradient-to-r from-pink-500/10 to-purple-600/10 px-5 py-2 text-xs font-medium uppercase tracking-[4px] text-pink-200 shadow-[0_0_28px_rgba(236,72,153,.14)] backdrop-blur-xl">
            <FiStar className="text-sm text-pink-300" />
            Our Advantages
            <FiStar className="text-sm text-pink-300" />
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Crafted For
            <span className="mt-2 block bg-gradient-to-r from-fuchsia-500 via-pink-400 to-purple-500 bg-clip-text text-transparent">
              Luxury Lovers
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
            Experience premium fragrances designed to leave a lasting impression.
            Every bottle combines elegance, quality and sophistication for those
            who appreciate true luxury.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-10 md:gap-14">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -5, scale: 1.04 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="text-center"
              >
                <h3 className="text-3xl font-bold">
                  {stat.isRating ? (
                    <span>4.9{stat.suffix}</span>
                  ) : (
                    <Counter value={stat.value} suffix={stat.suffix} />
                  )}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center"
          >
            <div className="absolute h-[450px] w-[450px] rounded-full bg-gradient-to-r from-fuchsia-600/20 to-purple-600/20 blur-3xl" />

            <motion.img
              src={mainFeatureImg}
              alt="Luxury Perfume"
              animate={{ y: [0, -18, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-full max-w-[520px] object-contain drop-shadow-[0_0_60px_rgba(217,70,239,0.3)]"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.14,
                },
              },
            }}
            className="grid gap-5 sm:grid-cols-2"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={{
                  hidden: { opacity: 0, y: 35 },
                  show: { opacity: 1, y: 0 },
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="group rounded-[22px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-colors duration-500 hover:border-fuchsia-500/40 hover:bg-white/[0.07] hover:shadow-[0_20px_70px_rgba(217,70,239,0.16)]"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-fuchsia-600 to-purple-600 text-2xl text-white shadow-[0_12px_35px_rgba(217,70,239,0.28)] transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                  {feature.icon}
                </div>

                <h4 className="mb-2 text-lg font-semibold">{feature.title}</h4>
                <p className="text-sm leading-6 text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Features;
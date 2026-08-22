import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCheckCircle,
  FiClock,
  FiFacebook,
  FiHeadphones,
  FiInstagram,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiPhone,
  FiSend,
  FiShield,
  FiTruck,
} from "react-icons/fi";
import { ChevronDown, Sparkles } from "lucide-react";

const contactDetails = [
  {
    icon: FiMail,
    label: "Email Concierge",
    value: "support@heavenperfumes.com",
    description: "For orders and product assistance",
    href: "mailto:support@heavenperfumes.com",
  },
  {
    icon: FiPhone,
    label: "Customer Care",
    value: "+91 98765 43210",
    description: "Monday–Saturday, 10 AM–7 PM",
    href: "tel:+919876543210",
  },
  {
    icon: FiMessageCircle,
    label: "WhatsApp Support",
    value: "Start a conversation",
    description: "Usually replies within a few minutes",
    href: "https://wa.me/919876543210",
  },
  {
    icon: FiMapPin,
    label: "Our Boutique",
    value: "Ahmedabad, Gujarat",
    description: "India – 380001",
    href: "https://maps.google.com",
  },
];

const supportFeatures = [
  {
    icon: FiHeadphones,
    title: "Personal Assistance",
    description: "Get expert help selecting your perfect fragrance.",
  },
  {
    icon: FiShield,
    title: "Secure Support",
    description: "Your personal and order details remain protected.",
  },
  {
    icon: FiTruck,
    title: "Order Tracking",
    description: "Receive quick updates about shipping and delivery.",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    orderNumber: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Contact form:", formData);
    setIsSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      orderNumber: "",
      message: "",
    });

    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const inputStyles =
    "w-full rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/30 hover:border-pink-400/25 focus:border-pink-400/60 focus:bg-white/[0.06] focus:ring-4 focus:ring-fuchsia-500/10";

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050005] pb-24 pt-24 text-white sm:pb-32 sm:pt-32 lg:pt-36">
      {/* Background lights */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_5%,rgba(217,70,239,0.14),transparent_32%),radial-gradient(circle_at_85%_45%,rgba(126,34,206,0.16),transparent_34%),radial-gradient(circle_at_10%_70%,rgba(236,72,153,0.08),transparent_30%)]" />

      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-40 top-1/3 h-[450px] w-[450px] rounded-full bg-fuchsia-700/10 blur-[130px]"
      />

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, -30, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-purple-700/10 blur-[150px]"
      />

      <section className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Left-aligned hero */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-14 max-w-4xl text-left sm:mb-20"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-pink-400/30 bg-white/[0.04] px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-pink-200 shadow-[0_0_30px_rgba(217,70,239,0.18)] backdrop-blur-xl sm:text-[11px]"
          >
            <motion.span
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
            >
              <Sparkles size={14} className="text-pink-400" />
            </motion.span>

            Private Fragrance Concierge

            <span className="relative ml-1 flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-pink-400" />
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="mt-7 text-[clamp(2.7rem,6vw,5.5rem)] font-light leading-[1.02] tracking-tight"
          >
            Begin a Beautiful

            <span className="mt-1 block bg-gradient-to-r from-pink-300 via-fuchsia-400 to-purple-400 bg-clip-text font-serif font-normal italic text-transparent">
              Scent Conversation
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="mt-6 max-w-2xl text-sm leading-7 text-white/55 sm:text-base"
          >
            Looking for your signature fragrance or need assistance with an
            order? Our perfume concierge is ready to make your experience
            effortless and memorable.
          </motion.p>
        </motion.div>

        {/* Main contact container */}
        <div className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b050d]/75 shadow-[0_30px_100px_rgba(0,0,0,0.65)] backdrop-blur-2xl sm:rounded-[2.5rem] lg:grid-cols-[1.12fr_0.88fr]">
          {/* Left enquiry form */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="relative order-1 p-6 sm:p-9 lg:p-10 xl:p-12"
          >
            <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-fuchsia-600/[0.06] blur-[90px]" />

            <div className="relative z-10">
              <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-pink-400">
                    Send your enquiry
                  </p>

                  <h2 className="mt-3 text-2xl font-light tracking-tight sm:text-3xl">
                    How may we assist you?
                  </h2>

                  <p className="mt-3 max-w-lg text-sm leading-6 text-white/45">
                    Share your enquiry below and our concierge will respond
                    within 24 hours.
                  </p>
                </div>

                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/[0.06] px-3 py-2 text-[9px] font-semibold uppercase tracking-wider text-emerald-300">
                  <FiCheckCircle size={12} />
                  Secure enquiry
                </div>
              </div>

              {isSubmitted && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -10,
                    scale: 0.98,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  className="mb-6 flex items-start gap-3 rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.08] p-4 text-sm text-emerald-200"
                >
                  <FiCheckCircle className="mt-0.5 shrink-0" size={18} />

                  <div>
                    <p className="font-medium">
                      Message received successfully.
                    </p>

                    <p className="mt-1 text-xs text-emerald-200/60">
                      Our fragrance concierge will contact you shortly.
                    </p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2.5 block text-[10px] font-semibold uppercase tracking-[0.15em] text-white/50"
                    >
                      Full name <span className="text-pink-400">*</span>
                    </label>

                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className={inputStyles}
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2.5 block text-[10px] font-semibold uppercase tracking-[0.15em] text-white/50"
                    >
                      Email address <span className="text-pink-400">*</span>
                    </label>

                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className={inputStyles}
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2.5 block text-[10px] font-semibold uppercase tracking-[0.15em] text-white/50"
                    >
                      Phone number
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 00000 00000"
                      className={inputStyles}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="orderNumber"
                      className="mb-2.5 block text-[10px] font-semibold uppercase tracking-[0.15em] text-white/50"
                    >
                      Order number
                    </label>

                    <input
                      id="orderNumber"
                      type="text"
                      name="orderNumber"
                      value={formData.orderNumber}
                      onChange={handleChange}
                      placeholder="Example: HLP-1024"
                      className={inputStyles}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2.5 block text-[10px] font-semibold uppercase tracking-[0.15em] text-white/50"
                  >
                    How can we help? <span className="text-pink-400">*</span>
                  </label>

                  <div className="relative">
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`${inputStyles} cursor-pointer appearance-none pr-12 ${
                        formData.subject ? "text-white" : "text-white/30"
                      }`}
                      required
                    >
                      <option value="" className="bg-[#120714]">
                        Select enquiry type
                      </option>

                      <option
                        value="fragrance-recommendation"
                        className="bg-[#120714]"
                      >
                        Fragrance Recommendation
                      </option>

                      <option
                        value="order-assistance"
                        className="bg-[#120714]"
                      >
                        Order Assistance
                      </option>

                      <option
                        value="delivery-tracking"
                        className="bg-[#120714]"
                      >
                        Delivery & Tracking
                      </option>

                      <option
                        value="return-exchange"
                        className="bg-[#120714]"
                      >
                        Return or Exchange
                      </option>

                      <option value="gifting" className="bg-[#120714]">
                        Luxury Gifting
                      </option>

                      <option value="other" className="bg-[#120714]">
                        Other Enquiry
                      </option>
                    </select>

                    <ChevronDown
                      size={17}
                      className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-pink-300"
                    />
                  </div>
                </div>

                <div>
                  <div className="mb-2.5 flex items-center justify-between gap-4">
                    <label
                      htmlFor="message"
                      className="block text-[10px] font-semibold uppercase tracking-[0.15em] text-white/50"
                    >
                      Your message <span className="text-pink-400">*</span>
                    </label>

                    <span className="text-[9px] text-white/25">
                      {formData.message.length}/500
                    </span>
                  </div>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how our fragrance concierge can assist you..."
                    rows={6}
                    maxLength={500}
                    className={`${inputStyles} resize-none`}
                    required
                  />
                </div>

                <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <motion.button
                    type="submit"
                    whileHover={{
                      y: -3,
                      boxShadow: "0 15px 35px rgba(217,70,239,0.25)",
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-600 to-purple-600 px-8 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-[0_0_25px_rgba(217,70,239,0.3)] sm:w-auto"
                  >
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                    <span className="relative">Send Enquiry</span>

                    <FiSend
                      size={15}
                      className="relative transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </motion.button>

                  <p className="max-w-xs text-center text-[10px] leading-5 text-white/30 sm:text-right">
                    Your information is securely protected and will never be
                    shared.
                  </p>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Right contact information */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="relative order-2 overflow-hidden border-t border-white/10 bg-gradient-to-br from-[#19091d]/95 via-[#100612] to-[#0c040e] p-6 sm:p-9 lg:border-l lg:border-t-0 lg:p-10 xl:p-12"
          >
            {/* Decorative circles */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-pink-400/10" />
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-fuchsia-400/10" />
            <div className="pointer-events-none absolute -bottom-32 -left-28 h-80 w-80 rounded-full bg-fuchsia-600/10 blur-[100px]" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-pink-400/20 bg-pink-500/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-pink-300">
                <FiHeadphones size={13} />
                Client Services
              </div>

              <h2 className="mt-6 max-w-md text-3xl font-light leading-tight tracking-tight sm:text-4xl">
                Every fragrance journey deserves a

                <span className="font-serif italic text-pink-300">
                  {" "}
                  personal touch.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-white/55">
                From scent recommendations to order assistance, our specialists
                are here to guide you with care, knowledge and attention.
              </p>

              {/* Contact cards */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-9 space-y-3"
              >
                {contactDetails.map((item) => {
                  const Icon = item.icon;

                  return (
                    <motion.a
                      key={item.label}
                      variants={fadeUp}
                      href={item.href}
                      target={
                        item.label === "Our Boutique" ||
                        item.label === "WhatsApp Support"
                          ? "_blank"
                          : undefined
                      }
                      rel="noreferrer"
                      whileHover={{ x: 5 }}
                      className="group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.035] p-4 transition-colors duration-300 hover:border-pink-400/25 hover:bg-white/[0.07]"
                    >
                      <div className="relative grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-2xl border border-pink-400/20 bg-pink-500/10 text-pink-300 shadow-[inset_0_0_18px_rgba(236,72,153,0.08)]">
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 opacity-0 transition-opacity group-hover:opacity-100" />

                        <Icon size={18} className="relative z-10" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-pink-400/80">
                          {item.label}
                        </p>

                        <p className="mt-1 truncate text-sm font-medium text-white/90">
                          {item.value}
                        </p>

                        <p className="mt-0.5 truncate text-[11px] text-white/35">
                          {item.description}
                        </p>
                      </div>

                      <FiArrowUpRight
                        size={16}
                        className="shrink-0 text-white/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-pink-300"
                      />
                    </motion.a>
                  );
                })}
              </motion.div>

              {/* Business hours */}
              <div className="mt-6 flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-black/20 p-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-400/10 text-emerald-300">
                  <FiClock size={17} />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-xs font-medium text-white/85">
                      Concierge availability
                    </p>

                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2 py-1 text-[8px] font-bold uppercase tracking-wider text-emerald-300">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                      Online
                    </span>
                  </div>

                  <p className="mt-1 text-[11px] text-white/40">
                    Monday – Saturday · 10:00 AM – 7:00 PM
                  </p>
                </div>
              </div>

              {/* Social links */}
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
                <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/35">
                  Follow our fragrance stories
                </p>

                <div className="flex gap-2">
                  {[FiInstagram, FiFacebook].map((Icon, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      aria-label={index === 0 ? "Instagram" : "Facebook"}
                      whileHover={{
                        y: -4,
                        scale: 1.05,
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                      className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/55 transition-colors hover:border-pink-400/30 hover:bg-pink-500/10 hover:text-pink-300"
                    >
                      <Icon size={15} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Support features */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-8 grid gap-4 md:grid-cols-3"
        >
          {supportFeatures.map((feature) => {
            const Icon = feature.icon;

            return (
              <motion.article
                key={feature.title}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className="group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 backdrop-blur-xl transition-colors duration-300 hover:border-pink-400/20 hover:bg-white/[0.045]"
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-pink-400/15 bg-pink-500/[0.08] text-pink-300 transition-transform duration-300 group-hover:scale-105">
                  <Icon size={18} />
                </div>

                <div>
                  <h3 className="text-sm font-medium text-white/85">
                    {feature.title}
                  </h3>

                  <p className="mt-1 text-[11px] leading-5 text-white/35">
                    {feature.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </section>
    </main>
  );
}

export default Contact;
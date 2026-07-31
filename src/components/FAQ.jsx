import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiHelpCircle,
  FiPlus,
  FiMinus,
  FiStar,
  FiArrowRight,
  FiMessageSquare,
} from "react-icons/fi";

const faqData = [
  {
    question: "Are all perfumes 100% authentic?",
    answer:
      "Yes. Every fragrance available in our store is sourced directly from trusted distributors and verified luxury perfume brands, ensuring complete authenticity.",
    category: "Authenticity",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Orders are usually delivered within 2–5 business days depending on your location. Express delivery is available in selected cities.",
    category: "Delivery",
  },
  {
    question: "Can I return or exchange my perfume?",
    answer:
      "Yes. We offer hassle-free returns and exchanges for eligible unopened products within our return policy period.",
    category: "Returns",
  },
  {
    question: "Do you offer Cash on Delivery?",
    answer:
      "Yes. Cash on Delivery is available in most serviceable locations across India.",
    category: "Payments",
  },
  {
    question: "How can I choose the right fragrance?",
    answer:
      "Browse fragrances by category, notes, occasion, or gender. You can also read customer reviews to discover perfumes that match your personality.",
    category: "Guidance",
  },
  {
    question: "Do perfumes come with manufacturer warranty?",
    answer:
      "All products are genuine and sealed by the manufacturer. Any manufacturing defects are covered according to the respective brand's policy.",
    category: "Warranty",
  },
];

function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden bg-[#030107] px-4 py-28 md:px-8">
      {/* Background Ambient Glow Effects */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-pink-600/15 blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-purple-600/15 blur-[160px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-pink-300/20 bg-pink-500/10 px-4 py-1.5 text-xs uppercase tracking-[3px] text-pink-300 mb-4 backdrop-blur-md">
            <FiHelpCircle className="text-pink-300" />
            Help & Guidance
            <FiHelpCircle className="text-pink-300" />
          </span>
          <h2 className="text-4xl md:text-6xl font-light text-white tracking-tight leading-tight">
            Frequently <span className="italic font-normal bg-gradient-to-r from-pink-300 via-pink-500 to-purple-500 bg-clip-text text-transparent">Asked</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-white/50 leading-relaxed">
            Everything you need to know about our luxury fragrance collections, authentic sourcing, and white-glove customer services.
          </p>
        </div>

        {/* Unique Grid Layout: Sticky Information & Interactive List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Floating Support Card (Sticky Desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 lg:sticky lg:top-8 rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.01] p-8 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/20 text-pink-300 mb-6 border border-pink-500/30">
              <FiMessageSquare className="text-xl" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-pink-400 font-mono">
              Personal Concierge
            </span>
            <h3 className="text-2xl font-semibold text-white mt-2 mb-4 tracking-tight">
              Have a specific question?
            </h3>
            <p className="text-sm text-white/60 leading-7 mb-8">
              Can't find what you're looking for? Our fragrance curators are online and ready to assist you personally.
            </p>
            <button className="w-full inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 py-3.5 text-xs uppercase tracking-[0.2em] font-semibold text-white transition-all duration-300 hover:shadow-[0_10px_30px_rgba(236,72,153,0.4)] hover:scale-[1.02] cursor-pointer">
              Chat With Expert <FiArrowRight className="text-base" />
            </button>
          </motion.div>

          {/* Right Column: Bento Accordion List */}
          <div className="lg:col-span-8 space-y-4">
            {faqData.map((item, index) => {
              const isOpen = active === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`group overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-pink-500/40 bg-gradient-to-r from-pink-500/[0.08] to-purple-600/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
                      : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
                  }`}
                >
                  <button
                    onClick={() => setActive(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between p-6 text-left cursor-pointer"
                  >
                    <div className="flex items-center gap-4 pr-4">
                      <span className="text-xs font-mono text-pink-400/60">
                        0{index + 1}
                      </span>
                      <div>
                        <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 block mb-1">
                          {item.category}
                        </span>
                        <h3 className="text-base md:text-lg font-medium text-white transition-colors group-hover:text-pink-200">
                          {item.question}
                        </h3>
                      </div>
                    </div>

                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors ${
                      isOpen ? "bg-pink-500 text-white" : "bg-white/5 text-white/70 group-hover:bg-white/10"
                    }`}>
                      {isOpen ? <FiMinus className="text-sm" /> : <FiPlus className="text-sm" />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="border-t border-white/10 px-6 py-5 ml-10 mr-6">
                          <p className="text-sm md:text-base text-white/70 leading-7">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

export default FAQ;
import React from "react";
import { Link } from "react-router-dom";

import {
  Mail,
  Phone,
  MapPin,
  Star,
  CreditCard,
  Wallet,
  Landmark,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Truck,
  Sparkles,
  Clock3,
} from "lucide-react";

import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import footer_logo from "../assets/images/footer_logo.png";

const navigationLinks = [
  { name: "Home", path: "/" },
  { name: "Collections", path: "/collection" },
  { name: "Brand Heritage", path: "/brands" },
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
];

const categoryLinks = [
  { name: "Men Collection", path: "/collection?category=men" },
  { name: "Women Collection", path: "/collection?category=women" },
  { name: "Luxury Gift Sets", path: "/collection?category=gifts" },
  { name: "Signature Editions", path: "/collection?category=signature" },
  { name: "Rare Decants", path: "/collection?category=decants" },
];

const socialLinks = [
  {
    id: 1,
    name: "Instagram",
    url: "#instagram",
    icon: <FaInstagram />,
    hover:
      "hover:border-pink-500 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-500 hover:to-purple-600",
  },
  {
    id: 2,
    name: "Facebook",
    url: "#facebook",
    icon: <FaFacebookF />,
    hover: "hover:border-blue-500 hover:bg-blue-600",
  },
  {
    id: 3,
    name: "Twitter",
    url: "#twitter",
    icon: <FaTwitter />,
    hover: "hover:border-sky-400 hover:bg-sky-500",
  },
  {
    id: 4,
    name: "YouTube",
    url: "#youtube",
    icon: <FaYoutube />,
    hover: "hover:border-red-500 hover:bg-red-600",
  },
];

const serviceFeatures = [
  {
    id: 1,
    icon: <ShieldCheck />,
    title: "100% Authentic",
    subtitle: "Original fragrances",
  },
  {
    id: 2,
    icon: <Truck />,
    title: "Secure Delivery",
    subtitle: "Safe and fast shipping",
  },
  {
    id: 3,
    icon: <Sparkles />,
    title: "Luxury Packaging",
    subtitle: "Premium unboxing",
  },
];

function Footer() {
  const handleNewsletterSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-[#030107] text-white">
      {/* Background Effects */}

      <div className="pointer-events-none absolute -left-52 top-20 h-[500px] w-[500px] rounded-full bg-pink-600/[0.09] blur-[180px]" />

      <div className="pointer-events-none absolute -right-52 bottom-20 h-[500px] w-[500px] rounded-full bg-purple-600/[0.09] blur-[180px]" />

      <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[700px] -translate-x-1/2 rounded-full bg-pink-500/[0.04] blur-[140px]" />

      {/* Newsletter Area */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-16 sm:px-6 md:px-8 lg:pt-20">
        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-pink-500/[0.12] via-white/[0.04] to-purple-500/[0.10] px-6 py-9 shadow-[0_30px_100px_rgba(0,0,0,.45)] backdrop-blur-xl sm:px-10 sm:py-11 lg:rounded-[34px] lg:px-14">
          {/* Newsletter Glow */}

          <div className="pointer-events-none absolute -left-20 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-pink-500/20 blur-[90px]" />

          <div className="pointer-events-none absolute -right-20 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-purple-500/20 blur-[90px]" />

          <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-14">
            <div>
              <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-pink-300 sm:text-xs">
                <Star className="h-3.5 w-3.5 fill-pink-300" />
                Private Fragrance Circle
              </span>

              <h2 className="mt-4 max-w-2xl text-3xl font-light leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Enter The World Of{" "}

                <span className="bg-gradient-to-r from-pink-300 via-pink-500 to-purple-400 bg-clip-text font-normal italic text-transparent">
                  Luxury Scents
                </span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
                Subscribe for private launches, fragrance stories, exclusive
                offers and early access to limited editions.
              </p>
            </div>

            <form
              onSubmit={handleNewsletterSubmit}
              className="relative flex flex-col gap-3 sm:flex-row"
            >
              <div className="relative flex-1">
                <Mail className="pointer-events-none absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-pink-300/70" />

                <input
                  type="email"
                  required
                  aria-label="Email address"
                  placeholder="Enter your email address"
                  className="h-14 w-full rounded-full border border-white/10 bg-black/25 pl-12 pr-5 text-sm text-white outline-none backdrop-blur-xl transition-all duration-300 placeholder:text-white/30 focus:border-pink-400/50 focus:bg-black/35 focus:shadow-[0_0_30px_rgba(236,72,153,.10)]"
                />
              </div>

              <button
                type="submit"
                className="group flex h-14 cursor-pointer items-center justify-center gap-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-7 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-[0_14px_40px_rgba(236,72,153,.30)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(168,85,247,.42)]"
              >
                Subscribe

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-8 pt-14 sm:px-6 md:px-8 lg:pt-16">
        <div className="grid grid-cols-1 gap-12 border-b border-white/[0.08] pb-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* Brand Column */}

          <div className="lg:col-span-4 lg:pr-8">
            <Link
              to="/"
              aria-label="Heaven Luxury Perfumes"
              className="group inline-flex items-center"
            >
              <img
                src={footer_logo}
                alt="Heaven Luxury Perfumes Logo"
                loading="lazy"
                decoding="async"
                draggable={false}
                className="h-20 w-auto object-contain transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-[0_0_22px_rgba(236,72,153,.55)] sm:h-24"
              />
            </Link>

            <p className="mt-3 max-w-md text-sm leading-7 text-white/50">
              Crafting unforgettable sensory experiences with authentic luxury
              fragrances sourced from the world&apos;s most prestigious perfume
              houses.
            </p>

            {/* Rating */}

            <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.035] px-4 py-2.5">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <span className="text-xs font-medium text-white/70">
                4.9 Customer Rating
              </span>
            </div>

            {/* Social Links */}

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  aria-label={social.name}
                  title={social.name}
                  className={`flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-sm text-white/70 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:text-white ${social.hover}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}

          <div className="lg:col-span-2">
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-pink-400">
              Navigation
            </h3>

            <ul className="space-y-4">
              {navigationLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="group inline-flex items-center gap-2 text-sm text-white/50 transition-colors duration-300 hover:text-white"
                  >
                    <span className="h-px w-0 bg-pink-400 transition-all duration-300 group-hover:w-4" />

                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}

          <div className="lg:col-span-3">
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-pink-400">
              Collections
            </h3>

            <ul className="space-y-4">
              {categoryLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="group inline-flex items-center gap-2 text-sm text-white/50 transition-colors duration-300 hover:text-white"
                  >
                    <span className="h-px w-0 bg-pink-400 transition-all duration-300 group-hover:w-4" />

                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}

          <div className="lg:col-span-3">
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-pink-400">
              Concierge Service
            </h3>

            <div className="space-y-3">
              <a
                href="mailto:support@heavenperfumes.com"
                className="group flex items-center gap-4 rounded-2xl border border-transparent p-2.5 transition-all duration-300 hover:border-white/[0.08] hover:bg-white/[0.035]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-pink-400/15 bg-pink-500/10 text-pink-300">
                  <Mail className="h-4 w-4" />
                </span>

                <span className="min-w-0">
                  <span className="block text-[9px] uppercase tracking-[0.2em] text-white/30">
                    Email Us
                  </span>

                  <span className="mt-1 block break-all text-xs text-white/60 transition-colors group-hover:text-white">
                    support@heavenperfumes.com
                  </span>
                </span>
              </a>

              <a
                href="tel:+918005557236"
                className="group flex items-center gap-4 rounded-2xl border border-transparent p-2.5 transition-all duration-300 hover:border-white/[0.08] hover:bg-white/[0.035]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-purple-400/15 bg-purple-500/10 text-purple-300">
                  <Phone className="h-4 w-4" />
                </span>

                <span>
                  <span className="block text-[9px] uppercase tracking-[0.2em] text-white/30">
                    Call Us
                  </span>

                  <span className="mt-1 block text-xs text-white/60 transition-colors group-hover:text-white">
                    +91 800 555 7236
                  </span>
                </span>
              </a>

              <div className="flex items-start gap-4 rounded-2xl border border-transparent p-2.5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-pink-400/15 bg-pink-500/10 text-pink-300">
                  <MapPin className="h-4 w-4" />
                </span>

                <span>
                  <span className="block text-[9px] uppercase tracking-[0.2em] text-white/30">
                    Our Atelier
                  </span>

                  <span className="mt-1 block text-xs leading-5 text-white/60">
                    Grasse, France &amp;
                    <br />
                    Mumbai, India
                  </span>
                </span>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-transparent p-2.5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-purple-400/15 bg-purple-500/10 text-purple-300">
                  <Clock3 className="h-4 w-4" />
                </span>

                <span>
                  <span className="block text-[9px] uppercase tracking-[0.2em] text-white/30">
                    Support Hours
                  </span>

                  <span className="mt-1 block text-xs text-white/60">
                    Mon–Sat, 10 AM–7 PM
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}

        <div className="grid grid-cols-1 border-b border-white/[0.08] py-7 sm:grid-cols-3">
          {serviceFeatures.map((item, index) => (
            <div
              key={item.id}
              className={`group flex items-center justify-center gap-4 px-5 py-4 ${
                index !== serviceFeatures.length - 1
                  ? "border-b border-white/[0.08] sm:border-b-0 sm:border-r"
                  : ""
              }`}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-pink-400/15 bg-gradient-to-br from-pink-500/15 to-purple-500/10 text-pink-300 transition-transform duration-300 group-hover:scale-110">
                {React.cloneElement(item.icon, {
                  className: "h-5 w-5",
                })}
              </div>

              <div>
                <p className="text-sm font-medium text-white">{item.title}</p>

                <p className="mt-1 text-xs text-white/35">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Payment Area */}

        <div className="flex flex-col items-center justify-between gap-6 border-b border-white/[0.08] py-7 lg:flex-row">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="h-4 w-4 text-green-400" />

            <span className="text-center text-[10px] uppercase tracking-[0.2em] text-white/40 sm:text-xs">
              Secure &amp; encrypted checkout
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="payment-item group">
              <CreditCard className="h-4 w-4 text-pink-400" />
              <span>Credit Card</span>
            </div>

            <div className="payment-item group">
              <Wallet className="h-4 w-4 text-purple-400" />
              <span>Digital Wallet</span>
            </div>

            <div className="payment-item group">
              <Landmark className="h-4 w-4 text-pink-400" />
              <span>Net Banking</span>
            </div>
          </div>
        </div>

        {/* Copyright */}

        <div className="flex flex-col items-center justify-between gap-5 pt-7 text-center md:flex-row md:text-left">
          <p className="text-xs leading-6 tracking-wide text-white/35">
            &copy; {new Date().getFullYear()} Heaven Luxury Perfumes Atelier.
            All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            <Link
              to="/privacy-policy"
              className="group flex items-center gap-1 text-xs text-white/35 transition-colors hover:text-white"
            >
              Privacy Policy

              <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>

            <Link
              to="/terms"
              className="group flex items-center gap-1 text-xs text-white/35 transition-colors hover:text-white"
            >
              Terms &amp; Conditions

              <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>

            <Link
              to="/shipping"
              className="group flex items-center gap-1 text-xs text-white/35 transition-colors hover:text-white"
            >
              Shipping Policy

              <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .payment-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.65rem 0.9rem;
          border-radius: 0.75rem;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.025);
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.7rem;
          font-family: monospace;
          cursor: default;
          transition: all 0.3s ease;
        }

        .payment-item:hover {
          color: white;
          border-color: rgba(236, 72, 153, 0.35);
          background: rgba(236, 72, 153, 0.08);
          transform: translateY(-2px);
        }

        @media (prefers-reduced-motion: reduce) {
          .payment-item,
          footer a,
          footer button,
          footer img {
            transform: none !important;
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;
import React from "react";
import { Link } from "react-router-dom";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Star,
  CreditCard,
  Wallet,
  Landmark
} from "lucide-react";
import { 
  FaInstagram, 
  FaFacebookF, 
  FaTwitter, 
  FaYoutube 
} from "react-icons/fa";
import logo from "../assets/images/logo.png";

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#030107] border-t border-white/10 pt-12 pb-10 text-white">
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-1/4 h-[350px] w-[350px] rounded-full bg-pink-600/10 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 h-[350px] w-[350px] rounded-full bg-purple-600/10 blur-[160px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        
        {/* Top Grid: Left Column, Center Links, Right Column */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-12 border-b border-white/10 items-start">
          
          {/* Left Column: Logo, Tagline & Social Links */}
          <div className="md:col-span-4 flex flex-col items-start">
            <Link
              to="/"
              aria-label="Heaven Luxury Perfumes"
              className="group flex items-center flex-shrink-0 -mt-3 mb-2"
            >
              <img
                src={logo}
                alt="Heaven Luxury Perfumes Logo"
                draggable={false}
                className="
                  h-14
                  sm:h-16
                  md:h-16
                  lg:h-20
                  xl:h-24
                  w-auto
                  object-contain
                  transition-all
                  duration-500
                  group-hover:scale-105
                  group-hover:drop-shadow-[0_0_20px_rgba(236,72,153,0.6)]
                "
              />
            </Link>

            <p className="text-sm text-white/50 leading-relaxed mb-6">
              Crafting unforgettable sensory experiences with 100% authentic luxury fragrances sourced from the world's most prestigious perfume houses.
            </p>

            {/* Social Media Links with Brand Hover Colors */}
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a 
                href="#instagram" 
                aria-label="Instagram" 
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/75 transition-all duration-300 hover:border-pink-500 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-500 hover:to-purple-600 hover:text-white hover:scale-110 shadow-lg"
              >
                <FaInstagram className="w-4 h-4" />
              </a>

              {/* Facebook */}
              <a 
                href="#facebook" 
                aria-label="Facebook" 
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/75 transition-all duration-300 hover:border-blue-500 hover:bg-blue-600 hover:text-white hover:scale-110 shadow-lg"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>

              {/* Twitter / X */}
              <a 
                href="#twitter" 
                aria-label="Twitter" 
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/75 transition-all duration-300 hover:border-sky-400 hover:bg-sky-500 hover:text-white hover:scale-110 shadow-lg"
              >
                <FaTwitter className="w-4 h-4" />
              </a>

              {/* YouTube */}
              <a 
                href="#youtube" 
                aria-label="YouTube" 
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/75 transition-all duration-300 hover:border-red-500 hover:bg-red-600 hover:text-white hover:scale-110 shadow-lg"
              >
                <FaYoutube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Center Columns: Navigation Links */}
          <div className="md:col-span-5 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-xs uppercase tracking-[0.3em] font-mono text-pink-400 mb-5">
                Navigation
              </h4>
              <ul className="space-y-3.5 text-sm text-white/60">
                <li>
                  <Link to="/" className="transition-colors hover:text-white hover:translate-x-1 inline-block">Home</Link>
                </li>
                <li>
                  <a href="/collection" className="transition-colors hover:text-white hover:translate-x-1 inline-block">Collections</a>
                </li>
                <li>
                  <a href="#heritage" className="transition-colors hover:text-white hover:translate-x-1 inline-block">Brand Heritage</a>
                </li>
                <li>
                  <a href="#reviews" className="transition-colors hover:text-white hover:translate-x-1 inline-block">Testimonials</a>
                </li>
                <li>
                  <a href="#faq" className="transition-colors hover:text-white hover:translate-x-1 inline-block">Help & FAQ</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-[0.3em] font-mono text-pink-400 mb-5">
                Categories
              </h4>
              <ul className="space-y-3.5 text-sm text-white/60">
                <li>
                  <a href="#men" className="transition-colors hover:text-white hover:translate-x-1 inline-block">Men Collection</a>
                </li>
                <li>
                  <a href="#women" className="transition-colors hover:text-white hover:translate-x-1 inline-block">Women Collection</a>
                </li>
                <li>
                  <a href="#gifts" className="transition-colors hover:text-white hover:translate-x-1 inline-block">Luxury Gift Sets</a>
                </li>
                <li>
                  <a href="#signature" className="transition-colors hover:text-white hover:translate-x-1 inline-block">Signature Editions</a>
                </li>
                <li>
                  <a href="#decants" className="transition-colors hover:text-white hover:translate-x-1 inline-block">Rare Decants</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Contact & Support */}
          <div className="md:col-span-3 flex flex-col items-start">
            <h4 className="text-xs uppercase tracking-[0.3em] font-mono text-pink-400 mb-5">
              Concierge Service
            </h4>
            <ul className="space-y-3.5 text-sm text-white/60">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-pink-400 shrink-0" />
                <span>support@heavenperfumes.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-pink-400 shrink-0" />
                <span>+91 (800) 555-SCENT</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-pink-400 shrink-0 mt-1" />
                <span>Boutique Atelier, Grasse France & Mumbai, India</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Middle Section: Payment Options Bar */}
        <div className="py-6 border-b border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Star className="w-3.5 h-3.5 text-pink-400 fill-pink-400" />
            <span className="text-xs uppercase tracking-[0.2em] text-white/40">
              Secure & Encrypted Checkout
            </span>
          </div>

          {/* Payment Badges with Custom Icons & Hover Colors */}
          <div className="flex flex-wrap items-center gap-3 text-white/70">
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-white/10 bg-white/[0.03] text-xs font-mono transition-all duration-300 hover:border-pink-500/50 hover:bg-pink-500/10 hover:text-white cursor-pointer" title="Credit Card">
              <CreditCard className="w-4 h-4 text-pink-400" />
              <span>Credit Card</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-white/10 bg-white/[0.03] text-xs font-mono transition-all duration-300 hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-white cursor-pointer" title="Digital Wallet">
              <Wallet className="w-4 h-4 text-purple-400" />
              <span>Digital Wallet</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-white/10 bg-white/[0.03] text-xs font-mono transition-all duration-300 hover:border-pink-500/50 hover:bg-pink-500/10 hover:text-white cursor-pointer" title="Net Banking">
              <Landmark className="w-4 h-4 text-pink-400" />
              <span>Net Banking</span>
            </div>
          </div>
        </div>

        {/* Bottom Section: Centered Copyright */}
        <div className="pt-6 text-center">
          <p className="text-xs text-white/40 tracking-wider">
            &copy; {new Date().getFullYear()} Heaven Luxury Perfumes Atelier. All rights reserved. Designed for true luxury connoisseurs.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
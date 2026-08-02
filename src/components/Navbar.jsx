import { useState } from "react";
import { FiMenu, FiX, FiSearch, FiShoppingBag, FiUser } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Home", to: "/" },
    { label: "Collection", to: "/collection" },
    { label: "Brands", to: "/brands" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];
  const iconButton =
    "w-11 h-11 flex items-center justify-center rounded-full border border-pink-200/15 bg-white/[0.04] text-white/75 transition-all duration-500 hover:text-white hover:border-pink-400/70 hover:bg-gradient-to-br hover:from-pink-500/20 hover:to-purple-600/20 hover:shadow-[0_0_24px_rgba(236,72,153,0.45)]";
  const activeLink =
    "bg-gradient-to-r from-pink-300 via-pink-500 to-purple-500 bg-clip-text text-transparent";

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-pink-200/10 bg-[#0b0211]/90 shadow-[0_18px_60px_rgba(88,28,135,0.25)] backdrop-blur-2xl">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="flex h-20 items-center justify-between lg:h-24">
          {/* Logo */}
          <Link
            to="/"
            aria-label="Heaven Luxury Perfumes"
            className="group flex items-center flex-shrink-0"
          >
            <img
              src={logo}
              alt="Heaven Luxury Perfumes Logo"
              draggable={false}
              className="
        h-20
        sm:h-24
        md:h-24
        lg:h-28
        xl:h-32
        w-auto
        object-contain
        transition-all
        duration-500
        group-hover:scale-105
        group-hover:drop-shadow-[0_0_20px_rgba(236,72,153,0.6)]
      "
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-12">
  {links.map((item) => (
    <NavLink key={item.label} to={item.to}>
      {({ isActive }) => (
        <span
          className={`group relative inline-block py-2 text-[13px] font-semibold uppercase tracking-[3px] transition-all duration-300 ${
            isActive
              ? "bg-gradient-to-r from-pink-300 via-pink-500 to-purple-500 bg-clip-text text-transparent"
              : "text-white/70 hover:bg-gradient-to-r hover:from-pink-300 hover:via-pink-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent"
          }`}
        >
          {item.label}

          <span
            className={`absolute left-1/2 -bottom-1 h-[2px] rounded-full bg-gradient-to-r from-pink-400 to-purple-500 transition-all duration-300 ${
              isActive
                ? "w-full -translate-x-1/2"
                : "w-0 -translate-x-1/2 group-hover:w-full"
            }`}
          />
        </span>
      )}
    </NavLink>
  ))}
</nav>

          {/* Desktop Right */}
          <div className="hidden items-center gap-3 lg:flex">
            <button className={iconButton} aria-label="Search">
              <FiSearch size={17} />
            </button>

            <button className={`relative ${iconButton}`} aria-label="Cart">
              <FiShoppingBag size={17} />
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-[10px] font-semibold text-white shadow-[0_0_16px_rgba(236,72,153,0.6)]">
                2
              </span>
            </button>

            <button className={iconButton} aria-label="Account">
              <FiUser size={17} />
            </button>

            <button
              style={{
                fontFamily: "'Great Vibes', cursive",
              }}
              className="ml-3 rounded-full border border-pink-200/20 bg-gradient-to-r from-pink-500/15 to-purple-600/15 px-10 py-2.5 text-2xl text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl transition-all duration-500 hover:border-pink-300/80 hover:from-pink-500 hover:to-purple-600 hover:shadow-[0_0_32px_rgba(236,72,153,0.48)]"
            >
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="flex h-11 w-11 items-center justify-center rounded-full border border-pink-200/15 bg-white/[0.04] text-3xl text-white transition-all duration-300 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${
          isOpen ? "max-h-[520px]" : "max-h-0"
        }`}
      >
        <div className="border-t border-pink-200/10 bg-[#0b0211]/95 backdrop-blur-3xl">
          <div className="flex flex-col px-6 py-6">
            {links.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `border-b border-pink-200/10 py-4 text-sm font-semibold uppercase tracking-[4px] transition-all duration-500 ${
                    isActive && (item.to === "/" || item.to === "/collection")
                      ? activeLink
                      : "text-white/80 hover:bg-gradient-to-r hover:from-pink-300 hover:via-pink-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <div className="mt-6 flex items-center gap-4">
              <button className={iconButton} aria-label="Search">
                <FiSearch />
              </button>

              <button className={`relative ${iconButton}`} aria-label="Cart">
                <FiShoppingBag />
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-[10px] font-semibold text-white shadow-[0_0_16px_rgba(236,72,153,0.6)]">
                  2
                </span>
              </button>

              <button className={iconButton} aria-label="Account">
                <FiUser />
              </button>
            </div>

            <button
              style={{
                fontFamily: "'Great Vibes', cursive",
              }}
              className="mt-6 rounded-full border border-pink-200/20 bg-gradient-to-r from-pink-500/15 to-purple-600/15 py-3 text-3xl text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl transition-all duration-500 hover:border-pink-300/80 hover:from-pink-500 hover:to-purple-600 hover:shadow-[0_0_35px_rgba(236,72,153,0.55)]"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

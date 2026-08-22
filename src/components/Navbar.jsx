import { useEffect, useState } from "react";

import {
  FiMenu,
  FiX,
  FiSearch,
  FiShoppingBag,
  FiUser,
  FiArrowRight,
} from "react-icons/fi";

import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

const links = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Collection",
    to: "/collection",
  },
  {
    label: "Brands",
    to: "/brands",
  },
  {
    label: "About",
    to: "/about",
  },
  {
    label: "Contact",
    to: "/contact",
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const iconButton =
    "flex h-11 w-11 items-center justify-center rounded-full border border-pink-200/15 bg-white/[0.04] text-white/75 shadow-[inset_0_1px_0_rgba(255,255,255,.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-pink-400/60 hover:bg-gradient-to-br hover:from-pink-500/20 hover:to-purple-600/20 hover:text-white hover:shadow-[0_0_24px_rgba(236,72,153,.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400/70";

  const activeLink =
    "bg-gradient-to-r from-pink-300 via-pink-500 to-purple-500 bg-clip-text text-transparent";

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen((previousState) => !previousState);
  };

  // Disable background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close mobile menu using Escape key
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  // Close mobile menu when screen becomes desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-pink-200/10 bg-[#0b0211]/90 shadow-[0_18px_60px_rgba(88,28,135,.22)] backdrop-blur-2xl">
      {/* Top Highlight */}

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pink-400/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex h-20 items-center justify-between lg:h-24">
          {/* Logo */}

          <Link
            to="/"
            onClick={closeMenu}
            aria-label="Heaven Luxury Perfumes home"
            className="group relative z-10 flex shrink-0 items-center"
          >
            <img
              src={logo}
              alt="Heaven Luxury Perfumes"
              draggable={false}
              width="240"
              height="110"
              className="h-20 w-auto object-contain transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-[0_0_20px_rgba(236,72,153,.55)] sm:h-24 lg:h-24"
            />
          </Link>

          {/* Desktop Navigation */}

          <nav
            className="hidden items-center gap-9 lg:flex xl:gap-12"
            aria-label="Main navigation"
          >
            {links.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                end={item.to === "/"}
                className="group relative py-3"
              >
                {({ isActive }) => (
                  <>
                    <span
                      className={`inline-block text-[12px] font-semibold uppercase tracking-[0.22em] transition-all duration-300 xl:text-[13px] xl:tracking-[3px] ${
                        isActive
                          ? activeLink
                          : "text-white/65 group-hover:bg-gradient-to-r group-hover:from-pink-300 group-hover:via-pink-500 group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent"
                      }`}
                    >
                      {item.label}
                    </span>

                    <span
                      className={`absolute -bottom-0.5 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 shadow-[0_0_10px_rgba(236,72,153,.50)] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />

                    {isActive && (
                      <span className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-pink-300 shadow-[0_0_8px_rgba(249,168,212,.9)]" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Actions */}

          <div className="hidden items-center gap-3 lg:flex">
            <button
              type="button"
              className={iconButton}
              aria-label="Search products"
              title="Search"
            >
              <FiSearch size={17} />
            </button>

            <button
              type="button"
              className={`relative ${iconButton}`}
              aria-label="Open shopping cart, 2 items"
              title="Shopping cart"
            >
              <FiShoppingBag size={17} />

              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-[#0b0211] bg-gradient-to-r from-pink-500 to-purple-600 px-1 text-[9px] font-bold text-white shadow-[0_0_16px_rgba(236,72,153,.60)]">
                2
              </span>
            </button>

            <button
              type="button"
              className={iconButton}
              aria-label="Open account"
              title="My account"
            >
              <FiUser size={17} />
            </button>

            <Link
  to="/login"
  style={{
    fontFamily: "'Great Vibes', cursive",
  }}
  className="group ml-2 inline-flex cursor-pointer items-center gap-2 rounded-full border border-pink-200/20 bg-gradient-to-r from-pink-500/15 to-purple-600/15 px-8 py-2.5 text-2xl text-white shadow-[inset_0_1px_0_rgba(255,255,255,.12)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-pink-300/70 hover:from-pink-500 hover:to-purple-600 hover:shadow-[0_0_32px_rgba(236,72,153,.42)] xl:px-10"
>
  Login

  <FiArrowRight
    size={15}
    className="font-sans transition-transform duration-300 group-hover:translate-x-1"
  />
</Link>
          </div>

          {/* Mobile Menu Button */}

          <button
            type="button"
            onClick={toggleMenu}
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className={`relative z-50 flex h-11 w-11 items-center justify-center rounded-full border text-2xl text-white transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400/70 lg:hidden ${
              isOpen
                ? "rotate-90 border-pink-400/50 bg-gradient-to-br from-pink-500/25 to-purple-600/25 shadow-[0_0_25px_rgba(236,72,153,.30)]"
                : "border-pink-200/15 bg-white/[0.04]"
            }`}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}

      <button
        type="button"
        aria-label="Close mobile menu"
        onClick={closeMenu}
        tabIndex={isOpen ? 0 : -1}
        className={`fixed inset-0 top-20 -z-10 bg-black/60 backdrop-blur-sm transition-opacity duration-500 lg:hidden ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Mobile Navigation */}

      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t transition-all duration-500 ease-in-out lg:hidden ${
          isOpen
            ? "visible max-h-[620px] border-pink-200/10 opacity-100"
            : "invisible max-h-0 border-transparent opacity-0"
        }`}
      >
        <div className="relative bg-[#0b0211]/98 backdrop-blur-3xl">
          {/* Mobile Background Glow */}

          <div className="pointer-events-none absolute -right-32 top-0 h-72 w-72 rounded-full bg-purple-600/15 blur-[100px]" />

          <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-pink-600/10 blur-[100px]" />

          <div className="relative z-10 mx-auto max-w-7xl px-5 py-6 sm:px-6">
            {/* Mobile Links */}

            <nav className="flex flex-col" aria-label="Mobile navigation">
              {links.map((item, index) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  end={item.to === "/"}
                  onClick={closeMenu}
                  style={{
                    transitionDelay: isOpen ? `${index * 45}ms` : "0ms",
                  }}
                  className={({ isActive }) =>
                    `group flex items-center justify-between border-b border-pink-200/10 py-4 text-sm font-semibold uppercase tracking-[4px] transition-all duration-300 ${
                      isActive
                        ? activeLink
                        : "text-white/75 hover:bg-gradient-to-r hover:from-pink-300 hover:via-pink-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{item.label}</span>

                      <span
                        className={`flex h-7 w-7 items-center justify-center rounded-full border transition-all duration-300 ${
                          isActive
                            ? "border-pink-400/30 bg-pink-500/10 text-pink-300"
                            : "border-white/10 text-white/25 group-hover:border-pink-400/30 group-hover:text-pink-300"
                        }`}
                      >
                        <FiArrowRight
                          size={13}
                          className="transition-transform duration-300 group-hover:translate-x-0.5"
                        />
                      </span>
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Mobile Actions */}

            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                type="button"
                className={iconButton}
                aria-label="Search products"
              >
                <FiSearch size={18} />
              </button>

              <button
                type="button"
                className={`relative ${iconButton}`}
                aria-label="Open shopping cart, 2 items"
              >
                <FiShoppingBag size={18} />

                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-[#0b0211] bg-gradient-to-r from-pink-500 to-purple-600 px-1 text-[9px] font-bold text-white shadow-[0_0_16px_rgba(236,72,153,.6)]">
                  2
                </span>
              </button>

              <button
                type="button"
                className={iconButton}
                aria-label="Open account"
              >
                <FiUser size={18} />
              </button>
            </div>

            {/* Mobile Login */}

            <Link
              to="/login"
              onClick={closeMenu}
              style={{
                fontFamily: "'Great Vibes', cursive",
              }}
              className="group mt-6 flex w-full cursor-pointer items-center justify-center gap-3 rounded-full border border-pink-200/20 bg-gradient-to-r from-pink-500/15 to-purple-600/15 py-3 text-3xl text-white shadow-[inset_0_1px_0_rgba(255,255,255,.12)] backdrop-blur-xl transition-all duration-300 hover:border-pink-300/70 hover:from-pink-500 hover:to-purple-600 hover:shadow-[0_0_35px_rgba(236,72,153,.45)]"
            >
              Login
              <FiArrowRight
                size={17}
                className="font-sans transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

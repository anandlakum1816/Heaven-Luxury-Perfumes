import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import {
  FiArrowLeft,
  FiArrowRight,
  FiCheck,
  FiEye,
  FiEyeOff,
  FiLock,
  FiMail,
  FiShield,
  FiStar,
} from "react-icons/fi";

import { FcGoogle } from "react-icons/fc";

import loginVideo from "../assets/videos/Heaven_Login_Background_4K.mp4";

function Login() {
  const videoStarted = useRef(false);
  const glowVideoStarted = useRef(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  const handleVideoLoaded = (event, isGlowVideo = false) => {
    const startedRef = isGlowVideo ? glowVideoStarted : videoStarted;

    if (!startedRef.current) {
      event.currentTarget.currentTime = 3;
      event.currentTarget.playbackRate = 0.9;
      startedRef.current = true;
    }

    event.currentTarget.play().catch(() => {});

    if (!isGlowVideo) {
      setVideoReady(true);
    }
  };

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((previousErrors) => ({
        ...previousErrors,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must contain at least 6 characters.";
    }

    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setIsLoading(true);
      setErrors({});

      // Yahan apni Login API call add karo
      console.log("Login information:", formData);

      await new Promise((resolve) => setTimeout(resolve, 1200));
    } catch (error) {
      console.error("Login error:", error);
      setErrors({ form: "Something went wrong. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setIsGoogleLoading(true);

      // Yahan apni Google OAuth call add karo
      console.log("Google login initiated");

      await new Promise((resolve) => setTimeout(resolve, 1200));
    } catch (error) {
      console.error("Google login error:", error);
    } finally {
      setIsGoogleLoading(false);
    }
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#030107] px-4 py-5 sm:px-6 lg:px-8">
      {/* Fallback color while video loads (prevents black flash) */}

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br from-[#1a0a1f] via-[#0d0512] to-[#030107] transition-opacity duration-700 ${
          videoReady ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Main Background Video */}

      <video
        src={loginVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        onLoadedData={(event) => handleVideoLoaded(event, false)}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center brightness-[0.95] contrast-[1.08] saturate-[1.15]"
      />

      {/* Smoke Highlight Layer */}

      <video
        src={loginVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        onLoadedData={(event) => handleVideoLoaded(event, true)}
        className="smoke-video-layer pointer-events-none absolute inset-0 z-[2] h-full w-full object-cover object-center opacity-55 mix-blend-screen brightness-125 contrast-125 saturate-125"
      />

      {/* Very Light Overlay */}

      <div className="pointer-events-none absolute inset-0 z-[3] bg-[#030107]/10" />

      {/* Center Readability Gradient */}

      <div className="pointer-events-none absolute inset-0 z-[3] bg-[radial-gradient(circle_at_center,rgba(3,1,7,.30)_0%,rgba(3,1,7,.12)_38%,transparent_72%)]" />

      {/* Bottom Gradient */}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-36 bg-gradient-to-t from-[#030107]/60 to-transparent" />

      {/* Top Gradient */}

      <div className="pointer-events-none absolute inset-x-0 top-0 z-[3] h-28 bg-gradient-to-b from-[#030107]/45 to-transparent" />

      {/* Pink Smoke Glow Left */}

      <div
        className="smoke-glow smoke-glow-left pointer-events-none absolute left-[3%] top-1/2 z-[4] h-[430px] w-[430px] -translate-y-1/2 rounded-full bg-pink-500/[0.15] blur-[100px]"
        aria-hidden="true"
      />

      {/* Purple Smoke Glow Right */}

      <div
        className="smoke-glow smoke-glow-right pointer-events-none absolute right-[3%] top-1/2 z-[4] h-[430px] w-[430px] -translate-y-1/2 rounded-full bg-purple-500/[0.16] blur-[100px]"
        aria-hidden="true"
      />

      {/* Small Mist Particles */}

      <div
        className="mist-particle mist-particle-one pointer-events-none absolute left-[22%] top-[35%] z-[5]"
        aria-hidden="true"
      />

      <div
        className="mist-particle mist-particle-two pointer-events-none absolute right-[22%] top-[42%] z-[5]"
        aria-hidden="true"
      />

      <div
        className="mist-particle mist-particle-three pointer-events-none absolute bottom-[18%] left-[28%] z-[5]"
        aria-hidden="true"
      />

      <div
        className="mist-particle mist-particle-four pointer-events-none absolute bottom-[20%] right-[28%] z-[5]"
        aria-hidden="true"
      />

      {/* Top Border */}

      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-pink-400/60 to-transparent" />

      {/* Back Home */}

      <Link
        to="/"
        aria-label="Return to home"
        className="group absolute left-4 top-4 z-30 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-4 py-2.5 text-xs text-white/70 shadow-xl backdrop-blur-lg transition-all duration-300 hover:border-pink-300/50 hover:bg-pink-500/15 hover:text-white sm:left-8 sm:top-8"
      >
        <FiArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />

        Back Home
      </Link>

      {/* Login Card */}

      <section className="relative z-20 w-full max-w-[520px]">
        {/* Outer Card Border */}

        <div className="pointer-events-none absolute -inset-[1px] rounded-[31px] bg-gradient-to-br from-pink-400/45 via-white/[0.06] to-purple-500/40 shadow-[0_0_60px_rgba(236,72,153,.13)]" />

        <div className="relative overflow-hidden rounded-[30px] border border-white/[0.11] bg-[#09030d]/48 p-6 shadow-[0_40px_120px_rgba(0,0,0,.58)] backdrop-blur-[9px] sm:p-8">
          {/* Top Highlight */}

          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent" />

          {/* Card Glass Shine */}

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.045] via-transparent to-purple-500/[0.035]" />

          {/* Card Glows */}

          <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-purple-500/[0.12] blur-[80px]" />

          <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-pink-500/[0.12] blur-[80px]" />

          <div className="relative z-10">
            {/* Heading */}

            <div className="text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-pink-300/25 bg-pink-500/[0.14] px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-pink-200 shadow-[0_0_25px_rgba(236,72,153,.14)] backdrop-blur-lg">
                <FiStar className="fill-pink-300 text-pink-300" />

                Member Access

                <FiStar className="fill-pink-300 text-pink-300" />
              </span>

              <h1 className="mt-4 text-3xl font-light tracking-tight text-white sm:text-[38px]">
                Welcome Back To{" "}

                <span className="bg-gradient-to-r from-pink-300 via-pink-500 to-purple-400 bg-clip-text font-normal italic text-transparent">
                  Heaven
                </span>
              </h1>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-white/60">
                Sign in to discover your personal collection of luxury
                fragrances.
              </p>
            </div>

            {/* Form */}

            <form
              onSubmit={handleSubmit}
              noValidate
              className="mt-6 space-y-4"
            >
              {/* Form-level error */}

              {errors.form && (
                <p
                  role="alert"
                  className="rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-2.5 text-xs text-red-300"
                >
                  {errors.form}
                </p>
              )}

              {/* Email */}

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70"
                >
                  Email Address
                </label>

                <div className="relative">
                  <FiMail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-pink-300/80" />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    autoFocus
                    placeholder="Enter your email address"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={
                      errors.email ? "email-error" : undefined
                    }
                    className={`h-[50px] w-full rounded-2xl border bg-black/35 pl-12 pr-4 text-sm text-white outline-none backdrop-blur-lg transition-all duration-300 placeholder:text-white/35 focus:bg-black/45 ${
                      errors.email
                        ? "border-red-400/60 focus:border-red-400"
                        : "border-white/[0.15] focus:border-pink-400/80 focus:shadow-[0_0_28px_rgba(236,72,153,.16)]"
                    }`}
                  />
                </div>

                {errors.email && (
                  <p
                    id="email-error"
                    role="alert"
                    className="mt-1.5 text-xs text-red-300"
                  >
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Password */}

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70"
                  >
                    Password
                  </label>

                  <Link
                    to="/forgot-password"
                    className="text-xs text-pink-300/90 transition-colors hover:text-pink-200"
                  >
                    Forgot password?
                  </Link>
                </div>

                <div className="relative">
                  <FiLock className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-pink-300/80" />

                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    aria-invalid={Boolean(errors.password)}
                    aria-describedby={
                      errors.password ? "password-error" : undefined
                    }
                    className={`h-[50px] w-full rounded-2xl border bg-black/35 pl-12 pr-12 text-sm text-white outline-none backdrop-blur-lg transition-all duration-300 placeholder:text-white/35 focus:bg-black/45 ${
                      errors.password
                        ? "border-red-400/60 focus:border-red-400"
                        : "border-white/[0.15] focus:border-pink-400/80 focus:shadow-[0_0_28px_rgba(236,72,153,.16)]"
                    }`}
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword((previousState) => !previousState)
                    }
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center justify-center text-white/50 transition-colors hover:text-pink-300"
                  >
                    {showPassword ? (
                      <FiEyeOff className="h-4 w-4" />
                    ) : (
                      <FiEye className="h-4 w-4" />
                    )}
                  </button>
                </div>

                {errors.password && (
                  <p
                    id="password-error"
                    role="alert"
                    className="mt-1.5 text-xs text-red-300"
                  >
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Remember Me */}

              <label className="group flex cursor-pointer items-center gap-3">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="peer sr-only"
                />

                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-white/25 bg-white/[0.08] text-transparent transition-all duration-300 peer-checked:border-pink-400 peer-checked:bg-gradient-to-br peer-checked:from-pink-500 peer-checked:to-purple-600 peer-checked:text-white">
                  <FiCheck className="h-3 w-3" />
                </span>

                <span className="text-xs text-white/60 transition-colors group-hover:text-white/85">
                  Keep me signed in on this device
                </span>
              </label>

              {/* Sign In */}

              <button
                type="submit"
                disabled={isLoading}
                className="group flex h-[50px] w-full cursor-pointer items-center justify-center gap-3 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_18px_55px_rgba(236,72,153,.38)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_65px_rgba(168,85,247,.55)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {isLoading ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />

                    Signing In
                  </>
                ) : (
                  <>
                    Sign In

                    <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>

            {/* Divider */}

            <div className="my-5 flex items-center gap-4">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent to-white/20" />

              <span className="text-[9px] font-medium uppercase tracking-[0.25em] text-white/40">
                Or continue with
              </span>

              <span className="h-px flex-1 bg-gradient-to-l from-transparent to-white/20" />
            </div>

            {/* Google Login */}

            <button
              type="button"
              onClick={handleGoogleLogin}
              disabled={isGoogleLoading}
              className="flex h-[50px] w-full cursor-pointer items-center justify-center gap-3 rounded-full border border-white/[0.15] bg-black/25 text-sm font-medium text-white/80 backdrop-blur-lg transition-all duration-300 hover:-translate-y-0.5 hover:border-pink-300/45 hover:bg-white/[0.10] hover:text-white disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {isGoogleLoading ? (
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              ) : (
                <FcGoogle className="h-5 w-5" />
              )}
              Continue with Google
            </button>

            {/* Register */}

            <p className="mt-5 text-center text-sm text-white/60">
              New to Heaven Perfumes?{" "}

              <Link
                to="/register"
                className="font-medium text-pink-300 transition-colors hover:text-pink-200"
              >
                Create an account
              </Link>
            </p>
          </div>
        </div>

        {/* Security */}

        <div className="mt-4 flex items-center justify-center gap-2 text-center text-[10px] uppercase tracking-[0.18em] text-white/45">
          <FiShield className="h-3.5 w-3.5 text-green-400/90" />

          Secure and encrypted member access
        </div>
      </section>

      <style>{`
        .smoke-video-layer {
          -webkit-mask-image: linear-gradient(
            to right,
            black 0%,
            black 28%,
            transparent 41%,
            transparent 59%,
            black 72%,
            black 100%
          );

          mask-image: linear-gradient(
            to right,
            black 0%,
            black 28%,
            transparent 41%,
            transparent 59%,
            black 72%,
            black 100%
          );
        }

        .smoke-glow {
          mix-blend-mode: screen;
          will-change: transform, opacity;
        }

        .smoke-glow-left {
          animation: smokeGlowLeft 7s ease-in-out infinite;
        }

        .smoke-glow-right {
          animation: smokeGlowRight 8s ease-in-out infinite;
        }

        .mist-particle {
          width: 110px;
          height: 110px;
          border-radius: 999px;
          opacity: 0;
          filter: blur(25px);
          mix-blend-mode: screen;
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.16),
            rgba(236, 72, 153, 0.17) 38%,
            rgba(168, 85, 247, 0.12) 58%,
            transparent 75%
          );
          animation: mistFloat 8s ease-in-out infinite;
        }

        .mist-particle-two {
          animation-delay: -2s;
        }

        .mist-particle-three {
          animation-delay: -4s;
        }

        .mist-particle-four {
          animation-delay: -6s;
        }

        @keyframes smokeGlowLeft {
          0%,
          100% {
            opacity: 0.55;
            transform: translate3d(0, -50%, 0) scale(0.92);
          }

          50% {
            opacity: 1;
            transform: translate3d(45px, -55%, 0) scale(1.2);
          }
        }

        @keyframes smokeGlowRight {
          0%,
          100% {
            opacity: 0.6;
            transform: translate3d(0, -50%, 0) scale(0.95);
          }

          50% {
            opacity: 1;
            transform: translate3d(-45px, -55%, 0) scale(1.22);
          }
        }

        @keyframes mistFloat {
          0% {
            opacity: 0;
            transform: translateY(45px) scale(0.55);
          }

          30% {
            opacity: 0.75;
          }

          70% {
            opacity: 0.35;
          }

          100% {
            opacity: 0;
            transform: translateY(-150px) scale(1.7);
          }
        }

        @media (max-width: 768px) {
          .smoke-video-layer {
            opacity: 0.35;
          }

          .smoke-glow {
            height: 260px;
            width: 260px;
          }

          .mist-particle {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .smoke-glow,
          .mist-particle {
            animation: none;
          }
        }
      `}</style>
    </main>
  );
}

export default Login;
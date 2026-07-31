import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiPlay, FiFilm, FiArrowRight } from "react-icons/fi";

import video1 from "../assets/videos/videoshowcase.mp4";
import video2 from "../assets/videos/videoshowcase1.mp4";
import video3 from "../assets/videos/videoshowcase2.mp4";
import video4 from "../assets/videos/videoshowcase3.mp4";

const videoChapters = [
  { id: 0, title: "The Craftsmanship", src: video1, subtitle: "Handcrafted bottles & rare blends" },
  { id: 1, title: "Essence of Nature", src: video2, subtitle: "Sourced from botanical gardens" },
  { id: 2, title: "Midnight Elixir", src: video3, subtitle: "Deep, mysterious, evening wear" },
  { id: 3, title: "Royal Heritage", src: video4, subtitle: "Centuries of perfume-making tradition" },
];

function VideoShowcase() {
  const videoRef = useRef(null);
  const [currentVideo, setCurrentVideo] = useState(0);

  const handleVideoEnd = () => {
    const next = (currentVideo + 1) % videoChapters.length;
    setCurrentVideo(next);

    setTimeout(() => {
      videoRef.current?.play();
    }, 100);
  };

  const handleSelectVideo = (index) => {
    setCurrentVideo(index);
    setTimeout(() => {
      videoRef.current?.play();
    }, 100);
  };

  return (
    <section className="relative overflow-hidden bg-[#030107] px-4 py-28 md:px-8">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-pink-600/10 blur-[180px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-[180px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-pink-300/20 bg-pink-500/10 px-4 py-1.5 text-xs uppercase tracking-[3px] text-pink-300 mb-4 backdrop-blur-md">
            <FiFilm className="text-pink-300" />
            Cinematic Experience
            <FiFilm className="text-pink-300" />
          </span>

          <h2 className="text-4xl md:text-6xl font-light text-white tracking-tight leading-tight">
            Immersive <span className="italic font-normal bg-gradient-to-r from-pink-300 via-pink-500 to-purple-500 bg-clip-text text-transparent">Visual Journey</span>
          </h2>

          <p className="mt-6 text-base text-white/50 leading-relaxed">
            Witness the meticulous art of fine perfumery through our curated cinematic chapters, showcasing elegance and timeless tradition.
          </p>
        </div>

        {/* Main Showcase Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Video Player Column */}
          <div className="lg:col-span-8 relative overflow-hidden rounded-[30px] border border-white/10 bg-black shadow-[0_30px_90px_rgba(0,0,0,0.8)] aspect-video">
            <video
              ref={videoRef}
              key={currentVideo}
              autoPlay
              muted
              playsInline
              onEnded={handleVideoEnd}
              className="w-full h-full object-cover object-center"
            >
              <source src={videoChapters[currentVideo].src} type="video/mp4" />
            </video>

            {/* Gradient Overlay for Cinematic Depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

            {/* Active Chapter Watermark Overlay */}
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between pointer-events-none">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-pink-400 block font-mono">
                  Chapter 0{currentVideo + 1} / 0{videoChapters.length}
                </span>
                <h4 className="text-lg md:text-xl font-semibold text-white">
                  {videoChapters[currentVideo].title}
                </h4>
              </div>

              {/* Progress Line */}
              <div className="hidden sm:flex gap-2 mb-2">
                {videoChapters.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      currentVideo === index
                        ? "w-10 bg-gradient-to-r from-pink-400 to-purple-400"
                        : "w-2 bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Chapter Selector Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2 px-2">
              Select Chapter
            </span>

            {videoChapters.map((chapter, index) => {
              const isActive = currentVideo === index;

              return (
                <motion.button
                  key={chapter.id}
                  onClick={() => handleSelectVideo(index)}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center justify-between p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "border-pink-500/50 bg-gradient-to-r from-pink-500/15 to-purple-600/15 shadow-[0_10px_30px_rgba(236,72,153,0.2)]"
                      : "border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xs font-mono transition-colors ${
                      isActive ? "bg-pink-500 text-white font-bold" : "bg-white/5 text-white/50"
                    }`}>
                      0{index + 1}
                    </div>
                    <div>
                      <h4 className={`text-sm font-semibold transition-colors ${isActive ? "text-pink-200" : "text-white/80"}`}>
                        {chapter.title}
                      </h4>
                      <p className="text-xs text-white/40 mt-0.5 truncate max-w-[200px] md:max-w-[240px]">
                        {chapter.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className={`flex h-8 w-8 items-center justify-center rounded-full transition-all ${
                    isActive ? "bg-pink-500/20 text-pink-300 rotate-0" : "text-white/30"
                  }`}>
                    {isActive ? <FiPlay className="text-xs fill-current" /> : <FiArrowRight className="text-sm" />}
                  </div>
                </motion.button>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

export default VideoShowcase;
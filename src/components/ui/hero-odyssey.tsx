import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';


interface FeatureItemProps {
  name: string;
  value: string;
  position: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ name, value, position }) => {
  return (
    <div className={`absolute ${position} z-10 group transition-all duration-300 hover:scale-110`}>
      <div className="flex items-center gap-2 relative">
        {/* Dot with constant glow */}
        <div className="relative">
          <div className="w-2 h-2 bg-white rounded-full group-hover:animate-pulse"></div>
          <div className="absolute -inset-1 bg-white/20 rounded-full blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="text-white relative">
          <div className="font-medium group-hover:text-white transition-colors duration-300">{name}</div>
          <div className="text-white/70 text-sm group-hover:text-white/70 transition-colors duration-300">{value}</div>
          {/* Constant white glow that intensifies on hover */}
          <div className="absolute -inset-2 bg-white/10 rounded-lg blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
        </div>
      </div>
    </div>
  );
};

export const HeroSection: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="relative w-full bg-black text-white overflow-hidden">
      {/* ── Background ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 z-0 pointer-events-none"
        aria-hidden
      >
        {/* Radial glow — blue core */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.18)_0%,_rgba(99,102,241,0.08)_50%,_transparent_75%)] blur-2xl" />
        {/* Subtle top beam */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-2/3 bg-gradient-to-b from-blue-400/30 via-blue-500/10 to-transparent blur-sm" />
        {/* Planet / sphere */}
        <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[580px] rounded-full bg-[radial-gradient(circle_at_25%_90%,_#1e386b_15%,_#000000de_70%,_#000000ed_100%)] backdrop-blur-3xl" />
      </motion.div>

      {/* ── Page content ── */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 min-h-screen flex flex-col">

        {/* Navigation */}
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="px-4 backdrop-blur-3xl bg-black/50 rounded-full py-4 flex justify-between items-center mb-8 shrink-0"
        >
          <div className="flex items-center">
            <div className="text-2xl font-bold">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M20 5L5 20L20 35L35 20L20 5Z" stroke="white" strokeWidth="2" />
              </svg>
            </div>
            <div className="hidden md:flex items-center space-x-6 ml-8">
              <button className="px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-full text-sm transition-colors">Start</button>
              <button className="px-4 py-2 text-sm hover:text-gray-300 transition-colors">Home</button>
              <button className="px-4 py-2 text-sm hover:text-gray-300 transition-colors">Contacts</button>
              <button className="px-4 py-2 text-sm hover:text-gray-300 transition-colors">Help</button>
              <button className="px-4 py-2 text-sm hover:text-gray-300 transition-colors">Docs</button>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="hidden md:block px-4 py-2 text-sm hover:text-gray-300 transition-colors">Register</button>
            <button className="px-4 py-2 bg-gray-800/80 backdrop-blur-sm rounded-full text-sm hover:bg-gray-700/80 transition-colors">Application</button>
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </motion.nav>

        {/* Mobile menu overlay */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 z-50 bg-black/95 backdrop-blur-lg"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-6 text-lg">
              <button className="absolute top-6 right-6 p-2" onClick={() => setMobileMenuOpen(false)}>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <button className="px-6 py-3 bg-gray-800/50 rounded-full">Start</button>
              <button className="px-6 py-3">Home</button>
              <button className="px-6 py-3">Contacts</button>
              <button className="px-6 py-3">Help</button>
              <button className="px-6 py-3">Docs</button>
              <button className="px-6 py-3">Register</button>
              <button className="px-6 py-3 bg-gray-800/80 backdrop-blur-sm rounded-full">Application</button>
            </div>
          </motion.div>
        )}

        {/* ── Hero body — grows to fill remaining height ── */}
        <div className="flex-1 flex flex-col items-center justify-center relative">

          {/* Feature items — desktop only to avoid mobile overlap */}
          <div className="hidden md:block absolute inset-0 pointer-events-none">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants}>
                <FeatureItem name="React" value="for base" position="left-10 top-1/3" />
              </motion.div>
              <motion.div variants={itemVariants}>
                <FeatureItem name="Tailwind" value="for styles" position="left-1/4 top-1/4" />
              </motion.div>
              <motion.div variants={itemVariants}>
                <FeatureItem name="Framer-motion" value="for animations" position="right-1/4 top-1/4" />
              </motion.div>
              <motion.div variants={itemVariants}>
                <FeatureItem name="Shaders" value="for lightning" position="right-10 top-1/3" />
              </motion.div>
            </motion.div>
          </div>

          {/* Main hero text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center max-w-4xl mx-auto px-4 z-10"
          >
            {/* Badge */}
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-4 py-2 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-full text-sm mb-6 transition-all duration-300 group"
            >
              <span>Join us for free world</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transform group-hover:translate-x-1 transition-transform duration-300">
                <path d="M8 3L13 8L8 13M13 8H3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.button>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-light mb-2"
            >
              Hero Odyssey
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-5xl pb-3 font-light bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 bg-clip-text text-transparent"
            >
              Lighting Up The Future
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 mb-10 max-w-2xl"
            >
              Built with modern tooling — customizable, fast, and fully code-generated.
            </motion.p>

            {/* Scroll indicator — centered, below text, never overlapping */}
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
            >
              Discover Those Worlds
            </motion.button>

            {/* Animated scroll chevron */}
            <motion.div
              variants={itemVariants}
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
              className="mt-10 text-white/40"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

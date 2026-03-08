'use client';

import React from 'react';
import { motion } from 'motion/react';
import ParticleBackground from './ParticleBackground';
import RotatingEarth from './ui/wireframe-dotted-globe';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 nebula-bg overflow-hidden">
      <ParticleBackground />

      {/* Black Hole / Nebula Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none z-0">
        {/* Accretion Disk - Colorful Swirl */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute w-[120%] h-[40%] bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 via-orange-500 to-blue-500 rounded-[100%] blur-[60px] opacity-40 animate-[spin_10s_linear_infinite] scale-150"></div>
          <div className="absolute w-[110%] h-[30%] bg-gradient-to-r from-cyan-400 via-indigo-500 via-rose-500 via-amber-500 to-cyan-400 rounded-[100%] blur-[40px] opacity-30 animate-[spin_15s_linear_infinite_reverse] scale-125"></div>

          {/* Gravitational Lensing Effect - Glowing Rings */}
          <div className="absolute w-[500px] h-[500px] border-[20px] border-white/10 rounded-full blur-[20px] animate-pulse"></div>
          <div className="absolute w-[450px] h-[450px] border-[10px] border-blue-400/20 rounded-full blur-[10px] animate-[spin_20s_linear_infinite]"></div>
          <div className="absolute w-[400px] h-[400px] border-[5px] border-purple-400/30 rounded-full blur-[5px] animate-[spin_30s_linear_infinite_reverse]"></div>
        </div>

        {/* The Event Horizon (The Black Hole itself) + Rotating Earth */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-black/80 rounded-full shadow-[0_0_80px_rgba(0,0,0,1),0_0_40px_rgba(255,255,255,0.1)] z-10 flex items-center justify-center overflow-hidden pointer-events-auto">
          {/* Inner Glow offset */}
          <div className="absolute inset-0 rounded-full shadow-[inset_0_0_50px_rgba(168,85,247,0.2)] z-20 pointer-events-none"></div>
          {/* Blend RotatingEarth here */}
          <div className="w-full h-full scale-125 opacity-90 mix-blend-screen flex items-center justify-center pointer-events-auto">
            <RotatingEarth width={400} height={400} />
          </div>
        </div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-display font-bold mb-4 tracking-tight text-glow"
        >
          Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Ultra-Fast</span> Internet
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-medium"
        >
          Seamless Connectivity. Unlimited Possibilities.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-4 bg-white/5 backdrop-blur-xl border border-white/20 rounded-full font-bold text-lg hover:bg-white/10 transition-all shadow-[0_0_30px_rgba(59,130,246,0.3)] neon-border-blue group"
        >
          <span className="relative z-10">Check Availability</span>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </motion.button>
      </div>
    </section>
  );
}

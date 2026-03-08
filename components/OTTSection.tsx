'use client';

import React from 'react';
import { motion } from 'motion/react';

const ottLogos = [
  { name: 'Netflix', domain: 'netflix.com' },
  { name: 'Prime Video', domain: 'primevideo.com' },
  { name: 'Hotstar', domain: 'hotstar.com' },
  { name: 'Zee5', domain: 'zee5.com' },
  { name: 'SonyLIV', domain: 'sonyliv.com' },
  { name: 'Play Store', domain: 'play.google.com' },
  { name: 'YouTube', domain: 'youtube.com' },
  { name: 'Apple TV', domain: 'tv.apple.com' }
];

export default function OTTSection() {
  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto glass-card p-12 text-center neon-border-blue bg-neutral-900/40">
        <h2 className="text-4xl font-display font-bold mb-4 text-white">Get 150Mbps Internet + TV Box</h2>
        <p className="text-neutral-400 mb-12">Unlock the World of Entertainment. 400+ Channels & OTT Benefits.</p>

        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {ottLogos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-3 cursor-pointer group"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all overflow-hidden p-3 border border-neutral-200">
                <img
                  src={`https://www.google.com/s2/favicons?domain=${logo.domain}&sz=128`}
                  alt={`${logo.name} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xs font-semibold text-neutral-400 group-hover:text-white transition-colors">
                {logo.name}
              </span>
            </motion.div>
          ))}
        </div>

        <button className="px-10 py-4 bg-blue-600 rounded-full font-bold hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]">
          View All Plans
        </button>
      </div>
    </section>
  );
}

'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Zap, Wifi, Rocket, Download } from 'lucide-react';
import Testimonials from './ui/testimonials-columns-1';

const features = [
  {
    icon: Zap,
    title: "High Speed No Buffering",
    description: "Experience lag-free streaming and gaming.",
    color: "blue"
  },
  {
    icon: Wifi,
    title: "Fiber Connection",
    description: "Reliable, dedicated fiber optic network.",
    color: "cyan"
  },
  {
    icon: Rocket,
    title: "Upgrade Speed",
    description: "Easily boost your plan speed instantly.",
    color: "purple"
  },
  {
    icon: Download,
    title: "Download 1Gbps",
    description: "Blazing fast download and upload speeds.",
    color: "pink"
  }
];

export default function Features() {
  return (
    <section id="about" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`glass-card p-8 flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300 neon-border-${feature.color}`}
          >
            <div className={`p-4 rounded-2xl bg-${feature.color}-500/10 mb-6 group-hover:scale-110 transition-transform`}>
              <feature.icon className={`w-10 h-10 text-${feature.color}-400`} />
            </div>
            <h3 className="text-xl font-bold mb-3 font-display">{feature.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-10 neon-border-blue"
        >
          <h2 className="text-3xl font-display font-bold mb-6">We Provide Best Broadband & Internet Service</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Gateway Networks Services provides you customized telecommunication solutions, which give your organization an edge in business...
          </p>
          <button className="px-6 py-3 bg-blue-600 rounded-full font-bold hover:bg-blue-500 transition-colors">
            Call Us +91 99660 87226
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative w-full h-[600px] flex items-center justify-center -mt-8"
        >
          <Testimonials />
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Phone, Home, User, Briefcase, FileText, Globe } from 'lucide-react';
import { TubelightNavbar } from './ui/tubelight-navbar';

export default function Navbar() {
  const navItems = [
    { name: 'Home', url: '#', icon: Home },
    { name: 'About Us', url: '#about', icon: User },
    { name: 'Plans', url: '#plans', icon: Briefcase },
    { name: 'Contact Us', url: '#contact', icon: FileText }
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/20 backdrop-blur-lg border-b border-white/5"
    >
      <div className="flex items-center gap-2">
        <Image
          src="/gateway-logo-transparent.png"
          alt="Gateway Networks Logo"
          width={280}
          height={80}
          priority
          className="h-16 sm:h-20 w-auto p-1"
        />
      </div>

      <div className="hidden md:flex flex-1 justify-center">
        <TubelightNavbar items={navItems} />
      </div>

      <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-4 py-2">
        <div className="bg-blue-500/20 p-1.5 rounded-full">
          <Phone className="w-4 h-4 text-blue-400" />
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] text-gray-400 leading-none">CALL US</span>
          <span className="text-sm font-bold">+91 99660 87226</span>
        </div>
      </div>
    </motion.nav>
  );
}

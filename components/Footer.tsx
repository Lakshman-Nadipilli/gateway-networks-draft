'use client';

import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black/80 border-t border-white/5 pt-20 pb-10 px-6 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center font-bold text-xl italic">G</div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-lg tracking-tight">GATEWAY</span>
              <span className="text-[10px] tracking-[0.2em] text-gray-400">NETWORKS</span>
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Gateway Networks Services provides customized telecommunication solutions, which give your organization an edge in business...
          </p>
          <div className="flex gap-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold mb-6">Quick links</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><a href="#" className="hover:text-blue-400 transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Plans</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold mb-6">Other Links</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Refund & Returns</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold mb-6">Contact Us</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-start gap-3">
              <span className="text-blue-400">📧</span>
              <span>support@gatewaynetworks.in</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400">📞</span>
              <span>+91 99660 87226</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400">📍</span>
              <span>3-14, Sai Nagar Thota Palem Vizianagaram, Andhra Pradesh - 535 002, India.</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 text-center text-xs text-gray-500">
        © Gateway Networks. All rights reserved.
      </div>
    </footer>
  );
}

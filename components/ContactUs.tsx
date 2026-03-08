'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, User, MessageSquare, Send } from 'lucide-react';

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        alert('Thank you! Your message has been sent successfully.');
    };

    return (
        <section id="contact" className="py-24 px-6 relative z-10 overflow-hidden bg-neutral-950">
            {/* Background Orbs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="lg:w-1/2"
                >
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white tracking-tight">
                        Let's build a connection.
                    </h2>
                    <p className="text-neutral-400 text-lg mb-8 max-w-lg leading-relaxed">
                        Whether you have a question about our fiber plans, pricing, or need technical support, our team is ready to answer all your questions.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-neutral-300">
                            <div className="w-12 h-12 rounded-full border border-blue-500/30 bg-blue-500/10 flex items-center justify-center">
                                <Phone className="w-5 h-5 text-blue-400" />
                            </div>
                            <div>
                                <p className="text-sm text-neutral-500">Call us directly</p>
                                <p className="font-semibold">+91 99660 87226</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-neutral-300">
                            <div className="w-12 h-12 rounded-full border border-purple-500/30 bg-purple-500/10 flex items-center justify-center">
                                <Mail className="w-5 h-5 text-purple-400" />
                            </div>
                            <div>
                                <p className="text-sm text-neutral-500">Email us</p>
                                <p className="font-semibold">support@gatewaynetworks.in</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Form Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="lg:w-1/2 w-full"
                >
                    <div className="relative p-[1px] rounded-3xl overflow-hidden bg-gradient-to-br from-white/10 to-white/0">
                        <div className="absolute inset-0 bg-neutral-900/40 backdrop-blur-2xl"></div>
                        <form onSubmit={handleSubmit} className="relative p-8 sm:p-10 flex flex-col gap-6">
                            <h3 className="text-2xl font-bold text-white mb-2">Send us a message</h3>

                            <div className="relative group">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500 group-focus-within:text-blue-400 transition-colors" />
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your Name"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                                />
                            </div>

                            <div className="flex flex-col sm:flex-row gap-6">
                                <div className="relative group w-full">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500 group-focus-within:text-purple-400 transition-colors" />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="Email Address"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
                                    />
                                </div>
                                <div className="relative group w-full">
                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500 group-focus-within:text-pink-400 transition-colors" />
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        placeholder="Phone Number"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-neutral-500 focus:outline-none focus:border-pink-500/50 focus:bg-white/10 transition-all"
                                    />
                                </div>
                            </div>

                            <div className="relative group">
                                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-neutral-500 group-focus-within:text-emerald-400 transition-colors" />
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message (Optional)"
                                    rows={4}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 transition-all resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="group relative w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-xl py-4 overflow-hidden transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]"
                            >
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                                <span className="relative">Send Message</span>
                                <Send className="relative w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

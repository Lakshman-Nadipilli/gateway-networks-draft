"use client";
import React from "react";
import { motion } from "motion/react";

const testimonials = [
    {
        text: "Gateway Networks provides the most reliable fiber connection in my area. Their high-speed internet has completely eliminated buffering from my streaming.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=faces",
        name: "Riya Sharma",
        role: "Freelance Designer",
    },
    {
        text: "The technical support team at Gateway Networks is exceptional. They resolved my connectivity issue within minutes and were incredibly polite.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=faces",
        name: "Arjun Reddy",
        role: "Software Engineer",
    },
    {
        text: "Switching to Gateway Networks for our office infrastructure changed everything. We're now getting blazing fast speeds with zero downtime.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces",
        name: "Sneha Patel",
        role: "Operations Head",
    },
    {
        text: "Giving better support than any other ISP I've dealt with! Their team actually cares about giving stable internet connections.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
        name: "Rahul Verma",
        role: "Small Business Owner",
    },
    {
        text: "Exceptional service from day one. The installation was quick, and the fiber optic network has drastically improved our daily workflow.",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1eb4ce?w=150&h=150&fit=crop&crop=faces",
        name: "Priya Nair",
        role: "E-commerce Manager",
    },
    {
        text: "Gateway Networks delivers precisely what they promise - ultra-fast internet with no throttling. Best decision we made for our business operations.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces",
        name: "Vikram Singh",
        role: "IT Director",
    },
    {
        text: "Their cloud-ready broadband services are top-notch. Gateway Networks has become an essential partner for our daily operations.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
        name: "Anjali Gupta",
        role: "Marketing Analyst",
    },
    {
        text: "The customer service is unmatched. Getting an upgrade on our plan was instant, and the new speeds are exactly as advertised.",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=faces",
        name: "Karthik Iyer",
        role: "Financial Advisor",
    },
    {
        text: "I trust Gateway Networks. Their dedicated lines keep our remote teams connected without any hassle. A premium internet experience.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=faces",
        name: "Meera Menon",
        role: "HR Consultant",
    },
];

export const TestimonialsColumn = (props: {
    className?: string;
    testimonials: typeof testimonials;
    duration?: number;
}) => {
    return (
        <div className={props.className}>
            <motion.div
                animate={{
                    translateY: "-50%",
                }}
                transition={{
                    duration: props.duration || 10,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                }}
                className="flex flex-col gap-6 pb-6"
            >
                {[...new Array(2)].fill(0).map((_, index) => (
                    <React.Fragment key={index}>
                        {props.testimonials.map(({ text, image, name, role }, i) => (
                            <div className="p-6 rounded-3xl glass-card sm:max-w-xs w-full neon-border-blue/20 shadow-lg shadow-blue-500/10" key={i}>
                                <div className="text-gray-300 text-sm leading-relaxed">&quot;{text}&quot;</div>
                                <div className="flex items-center gap-3 mt-5 border-t border-white/10 pt-4">
                                    <img
                                        width={40}
                                        height={40}
                                        src={image}
                                        alt={name}
                                        className="h-10 w-10 rounded-full object-cover"
                                    />
                                    <div className="flex flex-col">
                                        <div className="font-medium tracking-tight leading-5 text-white">{name}</div>
                                        <div className="leading-5 opacity-60 tracking-tight text-xs text-cyan-400">{role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </React.Fragment>
                ))}
            </motion.div>
        </div>
    );
};

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export const Testimonials = () => {
    return (
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[600px] overflow-hidden w-full relative z-10">
            <TestimonialsColumn testimonials={firstColumn} duration={25} />
            <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={35} />
            <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={30} />
        </div>
    );
};

export default Testimonials;

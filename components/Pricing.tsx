'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Globe, Zap, ShieldCheck, Wifi } from 'lucide-react';
import plansData from '@/lib/data/plans.json';
import { PricingCard } from '@/components/ui/pricing-page';

const iconMap: Record<string, any> = {
  "1": <Globe className="text-blue-400 w-6 h-6" />,
  "2": <Zap className="text-purple-400 w-6 h-6" />,
  "3": <ShieldCheck className="text-pink-400 w-6 h-6" />,
  "4": <Wifi className="text-orange-400 w-6 h-6" />
};

const bgClassMap: Record<string, string> = {
  "1": "from-blue-500/20 to-cyan-500/20",
  "2": "from-purple-500/20 to-indigo-500/20",
  "3": "from-pink-500/20 to-rose-500/20",
  "4": "from-orange-500/20 to-amber-500/20",
};

export default function Pricing() {
  return (
    <section id="plans" className="py-24 px-6 relative z-10 overflow-hidden bg-neutral-950">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white tracking-tight text-glow">
          Premium Connectivity
        </h2>
        <p className="text-neutral-400 max-w-2xl mx-auto text-lg mt-4">
          Ultra-fast fiber internet designed for seamless performance and unlimited possibilities.
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row flex-wrap items-stretch justify-center gap-8">
        {plansData.plans.map((plan, index) => {
          const icon = iconMap[plan.id] || <Globe className="text-blue-400 w-6 h-6" />;
          const bgClass = bgClassMap[plan.id] || "from-blue-500/20 to-cyan-500/20";

          return (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex"
            >
              <PricingCard
                planName={plan.name}
                description={`${plan.speed_mbps} Mbps Truly Unlimited`}
                price={`₹${plan.price_monthly}`}
                priceDescription="/mo"
                icon={icon}
                iconBgClass={bgClass}
                features={plan.features}
                isPopular={plan.popular}
                buttonText="Get Started"
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

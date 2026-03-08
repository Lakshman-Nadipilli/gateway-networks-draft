import React from "react";
import { Sparkles, Briefcase, Building2, Check } from "lucide-react";

// --- PricingCard Component ---
export function PricingCard({
    planName,
    description,
    price,
    priceDescription,
    features,
    icon,
    iconBgClass,
    isPopular,
    buttonText,
}: {
    planName: string;
    description: string;
    price: string;
    priceDescription: string;
    features: string[];
    icon: React.ReactNode;
    iconBgClass: string;
    isPopular?: boolean;
    buttonText: string;
}) {
    const cardStyle = {
        width: "100%",
        maxWidth: "19rem",
        backgroundColor: "hsla(240, 15%, 9%, 1)",
        backgroundImage:
            "radial-gradient(at 88% 40%, hsla(240, 15%, 9%, 1) 0px, transparent 85%)," +
            " radial-gradient(at 49% 30%, hsla(240, 15%, 9%, 1) 0px, transparent 85%)," +
            " radial-gradient(at 14% 26%, hsla(240, 15%, 9%, 1) 0px, transparent 85%)," +
            " radial-gradient(at 0% 64%, hsla(263, 93%, 56%, 1) 0px, transparent 85%)," +
            " radial-gradient(at 41% 94%, hsla(284, 100%, 84%, 1) 0px, transparent 85%)," +
            " radial-gradient(at 100% 99%, hsla(306, 100%, 57%, 1) 0px, transparent 85%)",
        boxShadow: "0px -16px 24px 0px rgba(255, 255, 255, 0.25) inset",
    };

    const borderContainerStyle = {
        overflow: "hidden",
        pointerEvents: "none" as const,
        position: "absolute" as const,
        zIndex: -10,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "calc(100% + 2px)",
        height: "calc(100% + 2px)",
        backgroundImage:
            "linear-gradient(0deg, hsl(0, 0%, 100%) -50%, hsl(0, 0%, 40%) 100%)",
        borderRadius: "1rem",
    };

    const rotatingBorderStyle = {
        content: '""',
        pointerEvents: "none" as const,
        position: "absolute" as const,
        zIndex: 200,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%) rotate(0deg)",
        transformOrigin: "left",
        width: "200%",
        height: "10rem",
        backgroundImage:
            "linear-gradient(0deg, hsla(0, 0%, 100%, 0) 0%, hsl(277, 95%, 60%) 40%, hsl(277, 95%, 60%) 60%, hsla(0, 0%, 40%, 0) 100%)",
        animation: "rotate 8s linear infinite",
    };

    return (
        <div
            className="relative hover:bg-white/[0.04] transition-all duration-300 group rounded-2xl p-6 flex flex-col h-full"
            style={cardStyle}
        >
            <style>{`@keyframes rotate { to { transform: translate(-50%, -50%) rotate(360deg); } }`}</style>

            {isPopular && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                    <span className="bg-purple-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
                        MOST POPULAR
                    </span>
                </div>
            )}

            <div className="flex-grow">
                <div style={borderContainerStyle}>
                    <div style={rotatingBorderStyle}></div>
                </div>

                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <div
                            className={`h-10 w-10 rounded-xl border border-white/20 bg-gradient-to-br ${iconBgClass} flex items-center justify-center`}
                        >
                            {icon}
                        </div>
                        <div>
                            <h3 className="text-xl font-medium tracking-tight text-white">
                                {planName}
                            </h3>
                            <p className="text-xs text-neutral-500">{description}</p>
                        </div>
                    </div>
                    <div className="h-5 w-5 rounded-full border-2 border-white/30"></div>
                </div>

                <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-semibold tracking-tight text-white">
                            {price}
                        </span>
                        <span className="text-sm text-neutral-400">
                            {priceDescription}
                        </span>
                    </div>
                    <p className="text-xs text-neutral-500 mt-1">
                        No credit card required
                    </p>
                </div>

                <ul className="space-y-3 text-sm text-neutral-300 mb-6">
                    {features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                            <div className="flex items-center justify-center w-4 h-4 bg-violet-500 rounded-full mt-0.5 shrink-0">
                                <Check className="w-3 h-3 text-white" />
                            </div>
                            <span className="leading-tight">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-auto">
                <button className="w-full h-12 bg-white rounded-lg text-neutral-900 font-bold hover:bg-neutral-200 transition-colors">
                    {buttonText}
                </button>
            </div>
        </div>
    );
}

// --- Main PricingPage Component (Demo as requested) ---
export default function PricingPage() {
    const starterPlan = {
        planName: "Starter",
        description: "Perfect for beginners",
        price: "$0",
        priceDescription: "forever",
        icon: <Sparkles className="text-emerald-400 w-6 h-6" />,
        iconBgClass: "from-emerald-500/20 to-teal-500/20",
        features: [
            "Interactive lessons and quizzes",
            "Daily practice and streaks",
            "Community access",
            "Basic AI fundamentals",
        ],
        buttonText: "Get Started Free",
        isPopular: false,
    };

    const proPlan = {
        planName: "Pro",
        description: "For growing teams",
        price: "$29",
        priceDescription: "/ month",
        icon: <Briefcase className="text-blue-400 w-6 h-6" />,
        iconBgClass: "from-blue-500/20 to-cyan-500/20",
        features: [
            "Everything in Starter",
            "Advanced AI models",
            "Project collaboration",
            "Priority support",
        ],
        buttonText: "Start Pro Trial",
        isPopular: true,
    };

    const enterprisePlan = {
        planName: "Enterprise",
        description: "For large organizations",
        price: "Custom",
        priceDescription: "pricing",
        icon: <Building2 className="text-purple-400 w-6 h-6" />,
        iconBgClass: "from-purple-500/20 to-indigo-500/20",
        features: [
            "Everything in Pro",
            "On-premise deployment",
            "Dedicated account manager",
            "Custom integrations",
        ],
        buttonText: "Contact Sales",
        isPopular: false,
    };

    return (
        <div className="min-h-screen w-full bg-neutral-950 flex flex-col items-center justify-center p-8">
            <div className="text-center mb-16">
                <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
                    Find the plan that’s right for you
                </h1>
                <p className="mt-4 text-lg text-neutral-400">
                    Start for free and scale up as you grow. No credit card required.
                </p>
            </div>
            <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8">
                <PricingCard {...starterPlan} />
                <PricingCard {...proPlan} />
                <PricingCard {...enterprisePlan} />
            </div>
        </div>
    );
}

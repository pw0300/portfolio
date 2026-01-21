import { motion } from 'framer-motion';
import { Rocket, Box, TrendingUp, Zap } from 'lucide-react';

const ProductPhilosophy = () => {
    const journey = [
        {
            icon: Rocket,
            role: "The Engineer",
            context: "B.Tech, IIST (Space Tech)",
            desc: "Learned First Principles & Systems Thinking. Built logic for complex satellite systems where failure wasn't an option.",
            proof: "Proof: Designed fault-tolerant control systems for sounding rockets."
        },
        {
            icon: Box,
            role: "The Operator",
            context: "Founding Ops, Polaris",
            desc: "Got hands dirty in manufacturing supply chains. Learned that perfect code doesn't matter if operations fail.",
            proof: "Proof: Reduced production idle time by 73% via process re-engineering."
        },
        {
            icon: TrendingUp,
            role: "The Strategist",
            context: "MBA, IIM Calcutta",
            desc: "Mastered Unit Economics, GTM, and Scale. Understood how to map technical inputs to business outcomes.",
            proof: "Proof: Specialized in Digital Business Strategy."
        },
        {
            icon: Zap,
            role: "Product Manager",
            context: "Times Internet & Ziki",
            desc: "Synthesizing Engineering, Ops, and Strategy to build high-revenue products. $500K+ ARR delivered.",
            proof: "Proof: Launching Ad Orchestrator & Ziki Services Vertical (0→1)."
        }
    ];

    return (
        <section className="section bg-bg-card border-y border-border py-32">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-16 text-center md:text-left">
                        <span className="text-xl font-hand text-accent rotate-[-2deg] inline-block mb-2">My Journey</span>
                        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-none">THE ARCHETYPE</h2>
                        <div className="h-1 w-32 bg-white rounded-full mb-8 rotate-1"></div>
                        <p className="text-xl text-text-secondary max-w-2xl">
                            My product sense isn't just theoretical.<br />
                            It's an evolution through <span className="font-hand text-white border-b border-dashed border-white/40">First Principles</span>, <span className="font-hand text-white border-b border-dashed border-white/40">Operations</span>, and <span className="font-hand text-white border-b border-dashed border-white/40">Strategy</span>.
                        </p>
                    </div>

                    <div className="flex flex-col gap-6">
                        {journey.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative bg-[#0a0a0a] border border-white/20 hover:border-white p-6 md:p-8 rounded-[255px_15px_225px_15px/15px_225px_15px_255px] transition-all hover:translate-x-1 hover:-translate-y-1"
                            >
                                <div className="flex flex-col md:flex-row md:items-start gap-6 relative z-10">
                                    {/* Number / Stamp */}
                                    <div className="hidden md:flex flex-col items-center justify-center w-16 h-16 border-2 border-white/20 rounded-full shrink-0 group-hover:border-white group-hover:rotate-12 transition-all">
                                        <span className="font-hand font-bold text-2xl text-white/50 group-hover:text-white">0{index + 1}</span>
                                    </div>

                                    <div className="flex-grow">
                                        <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                                            <h3 className="text-3xl font-bold text-white mb-1 group-hover:underline decoration-2 decoration-wavy underline-offset-4 decoration-accent/50">{step.role}</h3>
                                            <span className="font-mono text-xs text-accent uppercase tracking-widest border border-white/20 px-3 py-1 rounded-full">{step.context}</span>
                                        </div>

                                        <p className="text-lg text-text-secondary leading-relaxed mb-4 font-light">
                                            {step.desc}
                                        </p>

                                        {/* Proof Stamp */}
                                        <div className="inline-flex items-center gap-3 mt-2 border-l-2 border-accent pl-4 py-1 bg-white/5 pr-4 rounded-r-lg">
                                            <span className="font-hand text-accent font-bold text-lg">Proof:</span>
                                            <span className="text-sm font-mono text-white/90">{step.proof.replace("Proof:", "")}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductPhilosophy;

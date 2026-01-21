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
            proof: "Proof: Dean's Honor Roll; Specialized in Digital Business Strategy."
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
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-6">The Archetype</h2>
                        <p className="text-xl text-text-secondary">
                            My product sense isn't just theoretical.<br />
                            It's an evolution through <span className="text-accent">First Principles</span>, <span className="text-accent">Operations</span>, and <span className="text-accent">Business Strategy</span>.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {journey.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-panel p-8 flex flex-col gap-4 hover:border-accent/30 transition-colors"
                            >
                                <div className="flex items-start justify-between">
                                    <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                                        <step.icon className="text-accent" size={24} />
                                    </div>
                                    <span className="text-xs font-mono text-text-secondary uppercase tracking-wider border border-white/10 px-2 py-1 rounded">
                                        0{index + 1}
                                    </span>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold mb-1">{step.role}</h3>
                                    <p className="text-xs text-accent/80 uppercase tracking-wide mb-3">{step.context}</p>
                                    <p className="text-text-secondary leading-relaxed mb-4">
                                        {step.desc}
                                    </p>
                                    <div className="bg-white/5 border border-white/10 rounded px-3 py-2 text-xs font-mono text-accent/90 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 animate-pulse"></span>
                                        {step.proof}
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

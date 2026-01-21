import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { philosophy } from '../data';

const Hero = () => {
    return (
        <section className="section" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative' }}>
            <div className="hero-bg" />

            <div style={{ position: 'relative', zIndex: 10, maxWidth: '800px' }}>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-8 flex flex-col items-center"
                >
                    <span className="block text-6xl md:text-8xl font-bold leading-none tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                        Pratik Wankhede
                    </span>
                    <span className="block text-xl md:text-2xl font-mono text-accent tracking-widest uppercase opacity-90">
                        Product Manager & System Thinker
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed font-light"
                >
                    {philosophy.sub}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center mt-8"
                >
                    <a
                        href="#experience"
                        className="btn-primary"
                    >
                        View Experience
                    </a>
                    <a
                        href="#work"
                        className="btn-outline"
                    >
                        Case Studies
                    </a>
                </motion.div>


                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-16 flex flex-wrap justify-center items-center gap-4 text-sm font-mono text-text-secondary"
                >
                    {[
                        "MBA, IIM Calcutta",
                        "Ex-Times Internet",
                        "B.Tech, IIST (Space Tech)"
                    ].map((badge, i) => (
                        <span key={i} className="trust-badge">
                            {badge}
                        </span>
                    ))}
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                style={{ position: 'absolute', bottom: '40px' }}
            >
                <ArrowDown className="animate-bounce" color="var(--text-secondary)" />
            </motion.div>
        </section >
    );
};

export default Hero;

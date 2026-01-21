import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { philosophy } from '../data';

const Hero = () => {
    return (
        <section className="section" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative' }}>
            <div className="hero-bg" />

            <div style={{ position: 'relative', zIndex: 10, maxWidth: '900px' }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6 inline-block"
                >
                    <span className="text-xl md:text-2xl font-hand text-accent rotate-[-2deg] block mb-2">
                        Hey there! 👋
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-8 flex flex-col items-center relative"
                >
                    {/* Sketchy Underline separate element could go here */}
                    <span className="block text-4xl sm:text-6xl md:text-9xl font-bold leading-none tracking-tighter mb-4 text-white drop-shadow-[4px_4px_0px_rgba(255,255,255,0.1)]">
                        PRATIK WANKHEDE
                    </span>

                    <span className="block text-xl sm:text-2xl md:text-4xl font-hand text-accent tracking-widest uppercase mt-6 rotate-[-1deg] border-b-2 border-dashed border-white/30 pb-2">
                        Product Manager & System Thinker
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-2xl text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed font-light"
                >
                    {philosophy.sub}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-8 justify-center mt-8 items-center"
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
                    className="mt-20 flex flex-wrap justify-center items-center gap-6 text-sm font-hand text-text-secondary"
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

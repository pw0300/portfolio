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
                    <span className="block text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-4">
                        Pratik Wankhede
                    </span>
                    <span className="block text-accent text-2xl md:text-4xl font-light tracking-wide uppercase opacity-90 mt-2">
                        Product Manager & System Thinker
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{ fontSize: '1.25rem', lineHeight: '1.6' }}
                >
                    {philosophy.sub}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
                >
                    <a
                        href="#experience"
                        className="btn-primary px-8 py-3 text-lg font-medium tracking-wide"
                    >
                        View Experience
                    </a>
                    <a
                        href="#work"
                        className="px-8 py-3 text-lg font-medium tracking-wide border border-white/20 rounded-lg hover:border-accent hover:bg-white/5 transition-all text-text-secondary hover:text-white"
                    >
                        Case Studies
                    </a>
                </motion.div>


                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-12 flex flex-wrap justify-center items-center gap-6 text-sm text-text-secondary opacity-80"
                >
                    <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent"></span>
                        MBA, IIM Calcutta
                    </span>
                    <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent"></span>
                        Ex-Times Internet
                    </span>
                    <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent"></span>
                        B.Tech, IIST (Space Tech)
                    </span>
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

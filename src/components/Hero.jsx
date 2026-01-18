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
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                style={{ position: 'absolute', bottom: '40px' }}
            >
                <ArrowDown className="animate-bounce" color="var(--text-secondary)" />
            </motion.div>
        </section>
    );
};

export default Hero;

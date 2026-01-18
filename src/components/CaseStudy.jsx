import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronRight, Zap } from 'lucide-react';

const CaseStudy = ({ study, index }) => {
    const navigate = useNavigate();

    const handleNavigation = (e) => {
        if (e) e.stopPropagation();
        navigate(`/work/${study.id}`);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="section group"
            style={{ borderBottom: '1px solid var(--border)', cursor: 'pointer' }}
            onClick={handleNavigation}
        >
            <div className="container">
                {/* Header */}
                <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                    <div className="flex-wrap" style={{ marginBottom: 'var(--spacing-md)' }}>
                        {study.tags.map(tag => (
                            <span key={tag} className="tag">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h2 style={{ fontSize: '3rem', marginBottom: '0.5rem' }} className="group-hover:text-accent transition-colors">
                        {study.title}
                    </h2>
                    <p style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }}>{study.subtitle}</p>
                    <button
                        className="btn-primary mt-6"
                        onClick={handleNavigation}
                    >
                        View Case Study
                    </button>
                </div>

                {/* Content Grid */}
                <div className="grid-cols-3-1">
                    {/* Left Column: The Story */}
                    <div className="space-y-lg">

                        {/* The Hook */}
                        <div className="glass-panel" style={{ borderLeft: '4px solid var(--accent)', position: 'relative' }}>
                            <div style={{ position: 'absolute', top: 0, right: 0, padding: '1rem', opacity: 0.1 }}>
                                <Zap size={100} />
                            </div>
                            <h3 className="text-label" style={{ marginBottom: '1rem', color: 'white' }}>The Problem</h3>
                            <p style={{ fontSize: '1.25rem', fontStyle: 'italic', color: 'var(--text-secondary)' }}>
                                "{study.hook}"
                            </p>
                        </div>

                        {/* The Meat */}
                        <div>
                            <h3 className="text-label" style={{ marginBottom: '1.5rem', color: 'white' }}>Product Decisions & System Design</h3>
                            <div className="flex-col">
                                {study.points.map((point, i) => (
                                    <div key={i} className="flex-row">
                                        <div className="number-badge">
                                            {i + 1}
                                        </div>
                                        <div>
                                            <h4 style={{ color: 'white', marginBottom: '0.5rem', fontWeight: 600 }}>{point.title}</h4>
                                            <p>{point.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Takeaway & Meta */}
                    <div>
                        <div className="sticky-card">
                            <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
                                <CheckCircle2 color="var(--accent)" size={20} />
                                Key Takeaway
                            </h3>
                            <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                                {study.action}
                            </p>

                            {/* Visual Placeholder - Now clickable hint */}
                            <div className="visual-placeholder" onClick={handleNavigation}>
                                <img src={study.image} alt={study.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} />
                                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.5)' }}>
                                    <p style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', fontFamily: 'var(--font-mono)', color: 'white' }}>
                                        View Architecture <ChevronRight size={16} />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default CaseStudy;

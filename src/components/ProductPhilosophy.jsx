import { motion } from 'framer-motion';
import { Brain, Users, Layers } from 'lucide-react';
import { philosophy } from '../data';

const ProductPhilosophy = () => {
    return (
        <section className="section" style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
            <div className="container">
                <div className="grid-2">
                    {/* Left Text */}
                    <div>
                        <h2>The Philosophy</h2>
                        <p style={{ fontSize: '1.125rem' }}>
                            {philosophy.intro}
                        </p>
                    </div>

                    {/* Right Cards */}
                    <div className="flex-col">
                        <div className="glass-panel flex-row">
                            <Users className="text-accent" style={{ marginTop: '4px' }} />
                            <div>
                                <h3>User Empathy</h3>
                                <p>Understanding the 'Why' before building the 'What'. 50+ user interviews at Ziki.</p>
                            </div>
                        </div>

                        <div className="glass-panel flex-row">
                            <Layers className="text-accent" style={{ marginTop: '4px' }} />
                            <div>
                                <h3>System Design</h3>
                                <p>Architecting for scale and reliability. Ad-engine optimization at Times Internet.</p>
                            </div>
                        </div>

                        <div className="glass-panel flex-row">
                            <Brain className="text-accent" style={{ marginTop: '4px' }} />
                            <div>
                                <h3>AI-Native</h3>
                                <p>Using AI not just as a feature, but as a UX enabler. TadkaSync & SpeakEasy.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductPhilosophy;

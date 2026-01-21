import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience = ({ experiences }) => {
    return (
        <section className="py-20 container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
                Work <span className="text-accent">Experience</span>
            </h2>

            <div className="max-w-4xl mx-auto space-y-8">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={exp.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="experience-card"
                    >
                        {/* Header */}
                        <div className="experience-header">
                            <div className="experience-logo">
                                {exp.logo ? (
                                    <img src={exp.logo} alt={exp.company} />
                                ) : (
                                    <Briefcase size={24} />
                                )}
                            </div>
                            <div className="experience-title">
                                <h3>{exp.role}</h3>
                                <p className="company-name">{exp.company}</p>
                            </div>
                            <div className="experience-meta">
                                <span className="experience-date">
                                    <Calendar size={14} />
                                    {exp.duration}
                                </span>
                                {exp.location && (
                                    <span className="experience-location">
                                        <MapPin size={14} />
                                        {exp.location}
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Description */}
                        <p className="experience-description">{exp.description}</p>

                        {/* Key Highlights */}
                        <div className="experience-highlights space-y-6">
                            {exp.highlights.map((group, i) => (
                                <div key={i} className="highlight-group">
                                    <h4 className="text-sm font-semibold text-accent/90 mb-3 uppercase tracking-wider flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                                        {group.category}
                                    </h4>
                                    <div className="space-y-2 pl-2 border-l border-white/10 ml-0.5">
                                        {group.points.map((highlight, j) => (
                                            <div key={j} className="highlight-item flex items-start gap-3 pl-3">
                                                <ChevronRight size={14} className="highlight-icon mt-1.5 shrink-0 text-gray-500" />
                                                <span className="text-gray-300 text-[15px] leading-relaxed">{highlight}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Tags */}
                        <div className="experience-tags">
                            {exp.tags.map((tag, i) => (
                                <span key={i} className="tag">{tag}</span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;

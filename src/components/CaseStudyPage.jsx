import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Layers, Brain, Target, Zap, TrendingUp } from 'lucide-react';
import Markdown from 'react-markdown';
import { caseStudies } from '../data';
import { ClickableImage } from './ImageModal';

const CaseStudyPage = () => {
    const { id } = useParams();
    const study = caseStudies.find(s => s.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!study) {
        return (
            <div className="case-study-page not-found">
                <div className="text-center">
                    <h1>Case Study Not Found</h1>
                    <Link to="/" className="text-accent underline">Return Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="case-study-page">
            {/* Compact Hero */}
            <div className="case-hero">
                <div className="case-hero-overlay" />
                <img
                    src={study.image}
                    alt={study.title}
                    className="case-hero-image"
                />
                <div className="case-hero-back">
                    <Link to="/" className="back-button">
                        <ArrowLeft size={16} />
                        <span>Back</span>
                    </Link>
                </div>
                <div className="case-hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="case-title">{study.title}</h1>
                        <p className="case-subtitle">{study.subtitle}</p>
                    </motion.div>
                </div>
            </div>

            {/* Main Content */}
            <div className="case-content">
                <div className="case-main">

                    {/* Section 1: The Challenge */}
                    <section className="narrative-section">
                        <div className="section-header">
                            <Target className="section-icon" size={24} />
                            <h2>The Challenge</h2>
                        </div>
                        <p className="challenge-text">{study.hook}</p>
                        {study.longForm?.context && (
                            <div className="context-block">
                                <Markdown>{study.longForm.context}</Markdown>
                            </div>
                        )}
                    </section>

                    {/* Section 2: The Struggle */}
                    <section className="narrative-section">
                        <div className="section-header">
                            <Zap className="section-icon" size={24} />
                            <h2>The Struggle</h2>
                        </div>
                        <div className="story-content">
                            <Markdown>{study.longForm?.struggle}</Markdown>
                        </div>
                    </section>

                    {/* Visual: User Journey */}
                    {study.userJourney && (
                        <section className="visual-section">
                            <ClickableImage
                                src={study.userJourney}
                                alt="User Journey Blueprint"
                                caption={`${study.title} - User Experience Blueprint`}
                            />
                            <p className="visual-caption">Fig 1. User Experience Blueprint (Click to enlarge)</p>
                        </section>
                    )}

                    {/* Section 3: The Approach */}
                    <section className="narrative-section">
                        <div className="section-header">
                            <Brain className="section-icon" size={24} />
                            <h2>The Approach</h2>
                        </div>
                        <div className="story-content">
                            <Markdown>{study.longForm?.approach}</Markdown>
                        </div>
                    </section>

                    {/* Visual: System Flow */}
                    {study.flowChart && (
                        <section className="visual-section">
                            <ClickableImage
                                src={study.flowChart}
                                alt="System Architecture"
                                caption={`${study.title} - System Architecture`}
                            />
                            <p className="visual-caption">Fig 2. System Architecture (Click to enlarge)</p>
                        </section>
                    )}

                    {/* Section 4: The Outcome */}
                    <section className="narrative-section outcome">
                        <div className="section-header">
                            <TrendingUp className="section-icon" size={24} />
                            <h2>The Outcome</h2>
                        </div>
                        <div className="story-content">
                            <Markdown>{study.longForm?.outcome}</Markdown>
                        </div>
                        <blockquote className="key-takeaway">
                            "{study.action}"
                        </blockquote>
                    </section>

                </div>

                {/* Sidebar */}
                <aside className="case-sidebar">
                    <div className="sidebar-card">
                        <h3><Layers size={18} /> Tech Stack</h3>
                        <div className="sidebar-content">
                            <Markdown>{study.longForm?.system}</Markdown>
                        </div>
                        <div className="tag-list">
                            {study.tags.map(tag => (
                                <span key={tag} className="tag">{tag}</span>
                            ))}
                        </div>
                    </div>
                </aside>
            </div>

            {/* Footer: Next Project */}
            <footer className="case-footer">
                <div className="footer-nav">
                    <Link to="/" className="footer-back">
                        <ArrowLeft size={16} /> Back to Portfolio
                    </Link>
                    {(() => {
                        const currentIndex = caseStudies.findIndex(s => s.id === study.id);
                        const nextIndex = (currentIndex + 1) % caseStudies.length;
                        const nextStudy = caseStudies[nextIndex];
                        return (
                            <Link to={`/work/${nextStudy.id}`} className="next-project">
                                <div className="next-info">
                                    <span className="next-label">Up Next</span>
                                    <span className="next-title">{nextStudy.title}</span>
                                </div>
                                <div className="next-thumb">
                                    <img src={nextStudy.image} alt="" />
                                </div>
                            </Link>
                        );
                    })()}
                </div>
                <div className="footer-copyright">
                    Pratik Wankhede &copy; {new Date().getFullYear()}
                </div>
            </footer>
        </div>
    );
};

export default CaseStudyPage;

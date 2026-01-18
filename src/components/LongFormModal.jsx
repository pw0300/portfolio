import { motion, AnimatePresence } from 'framer-motion';
import { X, Layers, Brain, CheckCircle2, User } from 'lucide-react';

const LongFormModal = ({ study, isOpen, onClose }) => {
    if (!isOpen || !study) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
                style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(10px)' }}
                onClick={onClose}
            >
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    className="bg-bg-card w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-2xl border border-border relative shadow-2xl"
                    onClick={e => e.stopPropagation()}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-10 bg-black/50 p-2 rounded-full hover:bg-black/80 transition-colors text-white"
                    >
                        <X size={24} />
                    </button>

                    {/* Hero Image */}
                    <div className="h-[300px] md:h-[400px] w-full overflow-hidden relative">
                        <img
                            src={study.image}
                            alt={study.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-bg-card to-transparent" />
                        <div className="absolute bottom-8 left-8 md:left-12">
                            <h2 className="text-4xl md:text-6xl font-bold text-white mb-2">{study.title}</h2>
                            <p className="text-xl text-accent">{study.subtitle}</p>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-12 space-y-12">

                        {/* The Narrative Deep Dive */}
                        <div className="grid md:grid-cols-3 gap-12">
                            <div className="md:col-span-2 space-y-10">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                        The Story
                                    </h3>
                                    <p className="text-lg text-text-secondary leading-relaxed whitespace-pre-line border-l-2 border-accent pl-4">
                                        {study.longForm?.story || "Detailed story content coming soon..."}
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                        <Brain size={24} className="text-accent" />
                                        Product Deep Dive
                                    </h3>
                                    <p className="text-lg text-text-secondary leading-relaxed whitespace-pre-line">
                                        {study.longForm?.product || "Product decision deep dive coming soon..."}
                                    </p>
                                </div>

                                {/* VISUALS SECTION: Journey + System */}
                                <div className="space-y-8">
                                    {/* User Journey Map */}
                                    {study.userJourney && (
                                        <div>
                                            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                                <User size={24} className="text-accent" />
                                                User Journey
                                            </h3>
                                            <div className="bg-white p-4 rounded-xl overflow-hidden shadow-lg">
                                                <img
                                                    src={study.userJourney}
                                                    alt="Linear User Journey Map"
                                                    className="w-full h-auto object-contain"
                                                />
                                            </div>
                                            <p className="text-sm text-text-secondary mt-2 text-center italic">
                                                The linear user progression from discovery to outcome.
                                            </p>
                                        </div>
                                    )}

                                    {/* System Loop Chart */}
                                    {study.flowChart && (
                                        <div>
                                            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                                <Layers size={24} className="text-accent" />
                                                Closed-Loop System FLywheel
                                            </h3>
                                            <div className="bg-white p-4 rounded-xl overflow-hidden shadow-lg">
                                                <img
                                                    src={study.flowChart}
                                                    alt="Closed Loop System Flow Chart"
                                                    className="w-full h-auto object-contain"
                                                />
                                            </div>
                                            <p className="text-sm text-text-secondary mt-2 text-center italic">
                                                The system architecture ensuring continuous improvement.
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Sidebar: System Tech */}
                            <div className="space-y-8">
                                <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800">
                                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                        <Layers size={20} className="text-accent" />
                                        Tech Stack
                                    </h3>
                                    <p className="text-sm text-text-secondary leading-relaxed mb-4 whitespace-pre-line">
                                        {study.longForm?.system || "System architecture details coming soon..."}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {study.tags.map(tag => (
                                            <span key={tag} className="text-xs font-mono py-1 px-2 rounded bg-zinc-800 text-zinc-400 border border-zinc-700">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800">
                                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                        <CheckCircle2 size={20} className="text-accent" />
                                        Key Outcome
                                    </h3>
                                    <p className="text-sm text-text-secondary leading-relaxed">
                                        {study.action}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default LongFormModal;

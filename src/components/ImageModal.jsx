import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const ImageModal = ({ isOpen, onClose, imageSrc, alt }) => {
    // Close on escape key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEsc);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="image-modal-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="image-modal-content"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="image-modal-close" onClick={onClose}>
                            <X size={24} />
                        </button>
                        <img src={imageSrc} alt={alt} className="image-modal-img" />
                        <p className="image-modal-caption">{alt}</p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

// Clickable Image Thumbnail Component
export const ClickableImage = ({ src, alt, caption }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <>
            <div className="clickable-image" onClick={() => setIsOpen(true)}>
                <img src={src} alt={alt} />
                <div className="clickable-image-overlay">
                    <ZoomIn size={24} />
                    <span>Click to enlarge</span>
                </div>
            </div>
            <ImageModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                imageSrc={src}
                alt={caption || alt}
            />
        </>
    );
};

export default ImageModal;

import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { chapters, sideQuests, epilogue } from './storyData';
import '../styles/rpg.css';

// Typewriter text component
const TypewriterText = ({ text, onComplete, speed = 25 }) => {
    const [displayText, setDisplayText] = useState('');
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        setDisplayText('');
        setIsComplete(false);
        let index = 0;
        const interval = setInterval(() => {
            if (index < text.length) {
                setDisplayText(text.slice(0, index + 1));
                index++;
            } else {
                setIsComplete(true);
                clearInterval(interval);
                if (onComplete) onComplete();
            }
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed]);

    const skipToEnd = () => {
        setDisplayText(text);
        setIsComplete(true);
        if (onComplete) onComplete();
    };

    return (
        <span onClick={skipToEnd} style={{ cursor: 'pointer' }}>
            {displayText}
            {!isComplete && <span className="cursor">▌</span>}
        </span>
    );
};

// Scene component
const Scene = ({ scene, onComplete, decisions, chapterColor }) => {
    const [showContinue, setShowContinue] = useState(false);
    const [selectedChoice, setSelectedChoice] = useState(null);

    // Check if this scene should be shown based on conditions
    if (scene.condition) {
        const { decision, choice } = scene.condition;
        const playerChoice = decisions[decision];

        if (choice.startsWith('!')) {
            // Show if player did NOT make this choice
            if (playerChoice === choice.slice(1)) return null;
        } else {
            // Show only if player made this choice
            if (playerChoice !== choice) return null;
        }
    }

    if (scene.type === 'dialogue') {
        const speakerColors = {
            'NARRATOR': '#a1a1aa',
            'PRATIK': '#ffd700',
            'PROFESSOR': '#60a5fa',
            'WORKER': '#f59e0b',
            'TEAMMATE': '#a78bfa',
            'VP_REVENUE': '#ef4444',
            'CEO': '#10b981',
            'USER': '#ec4899',
        };

        return (
            <div
                className="rpg-panel"
                style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    padding: '24px 32px',
                    minHeight: '120px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}
                onClick={() => showContinue && onComplete()}
            >
                {scene.speaker !== 'NARRATOR' && (
                    <p
                        className="pixel-text-sm"
                        style={{
                            color: speakerColors[scene.speaker] || chapterColor,
                            marginBottom: '12px'
                        }}
                    >
                        {scene.speaker}
                    </p>
                )}
                <p
                    className="pixel-text-sm"
                    style={{
                        color: scene.speaker === 'NARRATOR' ? '#a1a1aa' : '#fff',
                        lineHeight: '2',
                        fontStyle: scene.speaker === 'NARRATOR' ? 'italic' : 'normal',
                    }}
                >
                    <TypewriterText
                        text={scene.text}
                        onComplete={() => setShowContinue(true)}
                    />
                </p>
                {showContinue && (
                    <p
                        className="pixel-text-sm"
                        style={{
                            color: '#666',
                            marginTop: '16px',
                            textAlign: 'right',
                            animation: 'blink 1s infinite',
                        }}
                    >
                        ▼ CLICK TO CONTINUE
                    </p>
                )}
            </div>
        );
    }

    if (scene.type === 'decision') {
        return (
            <div
                className="rpg-panel"
                style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    padding: '24px 32px',
                }}
            >
                <p
                    className="pixel-text-sm text-gold"
                    style={{ marginBottom: '24px', lineHeight: '2' }}
                >
                    {scene.prompt}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {scene.choices.map((choice, index) => (
                        <button
                            key={choice.id}
                            className={`rpg-button ${selectedChoice === choice.id ? 'primary' : ''}`}
                            style={{
                                textAlign: 'left',
                                padding: '16px 20px',
                                opacity: selectedChoice && selectedChoice !== choice.id ? 0.5 : 1,
                            }}
                            onClick={() => {
                                setSelectedChoice(choice.id);
                                setTimeout(() => onComplete(scene.id, choice.id), 500);
                            }}
                            disabled={selectedChoice !== null}
                        >
                            <span style={{ marginRight: '12px', color: chapterColor }}>
                                {String.fromCharCode(65 + index)}.
                            </span>
                            {choice.text}
                        </button>
                    ))}
                </div>
            </div>
        );
    }

    return null;
};

// Chapter intro screen
const ChapterIntro = ({ chapter, onStart }) => {
    return (
        <div
            style={{
                minHeight: '100vh',
                background: `linear-gradient(to bottom, var(--rpg-blue) 0%, ${chapter.color}22 100%)`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '32px',
                textAlign: 'center',
            }}
        >
            <p
                className="pixel-text-sm"
                style={{ color: '#666', marginBottom: '16px' }}
            >
                CHAPTER {chapter.number}
            </p>
            <h1
                className="pixel-text-xl"
                style={{
                    color: chapter.color,
                    marginBottom: '16px',
                    textShadow: `2px 2px 0 rgba(0,0,0,0.5)`,
                }}
            >
                {chapter.emoji} {chapter.title}
            </h1>
            <p
                className="pixel-text-sm"
                style={{ color: '#a1a1aa', marginBottom: '48px' }}
            >
                {chapter.subtitle}
            </p>
            <button
                className="rpg-button primary"
                onClick={onStart}
                style={{ padding: '16px 48px' }}
            >
                BEGIN
            </button>
        </div>
    );
};

// Chapter complete screen
const ChapterComplete = ({ chapter, onContinue }) => {
    return (
        <div
            style={{
                minHeight: '100vh',
                background: `linear-gradient(to bottom, var(--rpg-blue) 0%, ${chapter.color}22 100%)`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '32px',
                textAlign: 'center',
            }}
        >
            <p
                className="pixel-text-sm"
                style={{ color: '#666', marginBottom: '16px' }}
            >
                CHAPTER {chapter.number} COMPLETE
            </p>
            <div
                className="rpg-panel"
                style={{
                    padding: '32px 48px',
                    marginBottom: '32px',
                }}
            >
                <p
                    className="pixel-text-sm text-gold"
                    style={{ marginBottom: '16px' }}
                >
                    BADGE EARNED
                </p>
                <div style={{ fontSize: '64px', marginBottom: '16px' }}>
                    {chapter.badge.emoji}
                </div>
                <p
                    className="pixel-text-md"
                    style={{ color: '#fff', marginBottom: '8px' }}
                >
                    {chapter.badge.name}
                </p>
                <p
                    className="pixel-text-sm"
                    style={{ color: '#a1a1aa' }}
                >
                    {chapter.badge.skill}
                </p>
            </div>
            <button
                className="rpg-button primary"
                onClick={onContinue}
                style={{ padding: '16px 48px' }}
            >
                CONTINUE
            </button>
        </div>
    );
};

// Victory screen
const VictoryScreen = ({ badges }) => {
    return (
        <div
            style={{
                minHeight: '100vh',
                background: 'linear-gradient(to bottom, var(--rpg-blue) 0%, #064e3b22 100%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '32px',
                textAlign: 'center',
            }}
        >
            <h1
                className="pixel-text-xl text-gold"
                style={{ marginBottom: '16px' }}
            >
                🏆 JOURNEY COMPLETE 🏆
            </h1>
            <p
                className="pixel-text-sm"
                style={{ color: '#a1a1aa', marginBottom: '48px', maxWidth: '600px' }}
            >
                You've experienced the full story. From space science to startups.
                From factory floors to marketplaces.
            </p>

            {/* Badges collected */}
            <div
                className="rpg-panel"
                style={{ marginBottom: '32px', padding: '24px 48px' }}
            >
                <p
                    className="pixel-text-sm text-gold"
                    style={{ marginBottom: '24px' }}
                >
                    BADGES COLLECTED
                </p>
                <div
                    style={{
                        display: 'flex',
                        gap: '24px',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                    }}
                >
                    {badges.map(badge => (
                        <div
                            key={badge.name}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '8px',
                            }}
                        >
                            <div
                                className="badge-slot earned"
                                style={{ width: '64px', height: '64px' }}
                            >
                                <span style={{ fontSize: '32px' }}>{badge.emoji}</span>
                            </div>
                            <p className="pixel-text-sm" style={{ color: '#a1a1aa', fontSize: '8px' }}>
                                {badge.name.replace(' Badge', '')}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Link to="/portfolio" style={{ textDecoration: 'none' }}>
                    <button className="rpg-button primary" style={{ padding: '16px 32px' }}>
                        📋 VIEW CASE STUDIES
                    </button>
                </Link>
                <a
                    href="/Pratik_Wankhede_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                >
                    <button className="rpg-button" style={{ padding: '16px 32px' }}>
                        📄 DOWNLOAD RESUME
                    </button>
                </a>
                <a
                    href="mailto:pratik.wankhede@example.com"
                    style={{ textDecoration: 'none' }}
                >
                    <button className="rpg-button" style={{ padding: '16px 32px' }}>
                        ✉️ GET IN TOUCH
                    </button>
                </a>
            </div>

            <Link
                to="/"
                className="pixel-text-sm"
                style={{
                    color: '#666',
                    marginTop: '48px',
                    textDecoration: 'none',
                }}
            >
                ← BACK TO START
            </Link>
        </div>
    );
};

// Main Game Engine
const GameEngine = () => {
    const [gameState, setGameState] = useState('chapter_intro'); // chapter_intro, playing, chapter_complete, victory
    const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
    const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
    const [decisions, setDecisions] = useState({});
    const [earnedBadges, setEarnedBadges] = useState([]);
    const [includeSideQuests, setIncludeSideQuests] = useState(false);

    const allContent = [...chapters, ...(includeSideQuests ? [sideQuests] : [])];
    const currentChapter = allContent[currentChapterIndex];
    const currentScene = currentChapter?.scenes?.[currentSceneIndex];

    // Handle scene completion
    const handleSceneComplete = (decisionId, choiceId) => {
        // Save decision if this was a decision scene
        if (decisionId && choiceId) {
            setDecisions(prev => ({ ...prev, [decisionId]: choiceId }));
        }

        // Move to next scene
        const nextIndex = currentSceneIndex + 1;

        // Skip scenes that don't meet conditions
        let actualNextIndex = nextIndex;
        while (actualNextIndex < currentChapter.scenes.length) {
            const nextScene = currentChapter.scenes[actualNextIndex];
            if (!nextScene.condition) break;

            const { decision, choice } = nextScene.condition;
            const playerChoice = decisions[decision] || (decisionId === decision ? choiceId : null);

            if (choice.startsWith('!')) {
                if (playerChoice !== choice.slice(1)) break;
            } else {
                if (playerChoice === choice) break;
            }
            actualNextIndex++;
        }

        if (actualNextIndex >= currentChapter.scenes.length) {
            // Chapter complete
            setEarnedBadges(prev => [...prev, currentChapter.badge]);
            setGameState('chapter_complete');
        } else {
            setCurrentSceneIndex(actualNextIndex);
        }
    };

    // Handle chapter completion
    const handleChapterContinue = () => {
        const nextChapterIndex = currentChapterIndex + 1;

        if (nextChapterIndex >= allContent.length) {
            // All chapters complete
            setGameState('victory');
        } else {
            setCurrentChapterIndex(nextChapterIndex);
            setCurrentSceneIndex(0);
            setGameState('chapter_intro');
        }
    };

    // Handle chapter start
    const handleChapterStart = () => {
        setGameState('playing');
    };

    // Progress indicator
    const ProgressBar = () => (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: '#1a1a2e',
                zIndex: 100,
            }}
        >
            <div
                style={{
                    height: '100%',
                    background: currentChapter?.color || '#ffd700',
                    width: `${((currentChapterIndex * 100) + ((currentSceneIndex / currentChapter?.scenes?.length || 1) * 100)) / allContent.length}%`,
                    transition: 'width 0.3s ease',
                }}
            />
        </div>
    );

    // Exit button
    const ExitButton = () => (
        <Link
            to="/"
            style={{
                position: 'fixed',
                top: '20px',
                right: '20px',
                zIndex: 100,
                textDecoration: 'none',
            }}
        >
            <button className="rpg-button" style={{ padding: '8px 16px' }}>
                EXIT
            </button>
        </Link>
    );

    // Chapter indicator
    const ChapterIndicator = () => (
        <div
            style={{
                position: 'fixed',
                top: '20px',
                left: '20px',
                zIndex: 100,
            }}
        >
            <div className="rpg-panel" style={{ padding: '8px 16px' }}>
                <p className="pixel-text-sm" style={{ color: currentChapter?.color }}>
                    CH.{currentChapter?.number} {currentChapter?.emoji}
                </p>
            </div>
        </div>
    );

    // Render based on game state
    if (gameState === 'victory') {
        return <VictoryScreen badges={earnedBadges} />;
    }

    if (gameState === 'chapter_intro') {
        return (
            <>
                <ProgressBar />
                <ExitButton />
                <ChapterIntro chapter={currentChapter} onStart={handleChapterStart} />
            </>
        );
    }

    if (gameState === 'chapter_complete') {
        return (
            <>
                <ProgressBar />
                <ExitButton />
                <ChapterComplete chapter={currentChapter} onContinue={handleChapterContinue} />
            </>
        );
    }

    // Playing state
    return (
        <div
            style={{
                minHeight: '100vh',
                background: 'var(--rpg-blue)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '32px',
            }}
        >
            <ProgressBar />
            <ExitButton />
            <ChapterIndicator />

            {/* Scene content */}
            {currentScene && (
                <Scene
                    scene={currentScene}
                    onComplete={handleSceneComplete}
                    decisions={decisions}
                    chapterColor={currentChapter?.color}
                />
            )}

            {/* Scene counter */}
            <p
                className="pixel-text-sm"
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    color: '#444',
                }}
            >
                {currentSceneIndex + 1} / {currentChapter?.scenes?.length}
            </p>
        </div>
    );
};

export default GameEngine;

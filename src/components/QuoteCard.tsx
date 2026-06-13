import React, { useState, useRef, useEffect } from 'react';
import DOMPurify from 'dompurify';
import type { Quote } from '../data/quotes';
import { useParticles } from '../hooks/useParticles';

interface QuoteCardProps {
    quote: Quote;
    textStyle?: React.CSSProperties;
}

export const QuoteCard: React.FC<QuoteCardProps> = ({ quote, textStyle }) => {
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [targetRotateX, setTargetRotateX] = useState(0);
    const [targetRotateY, setTargetRotateY] = useState(0);
    const [isMoving, setIsMoving] = useState(false);
    const [cardRect, setCardRect] = useState<DOMRect | null>(null);
    const cardRef = useRef<HTMLDivElement>(null);

    const particleCanvasRef = useParticles({ rotateX, rotateY, isMoving, cardRect });

    // Smooth interpolation using requestAnimationFrame
    useEffect(() => {
        let animationFrameId: number;

        const smoothRotation = () => {
            setRotateX(prev => {
                const diff = targetRotateX - prev;
                return Math.abs(diff) < 0.01 ? targetRotateX : prev + diff * 0.15;
            });
            setRotateY(prev => {
                const diff = targetRotateY - prev;
                return Math.abs(diff) < 0.01 ? targetRotateY : prev + diff * 0.15;
            });

            animationFrameId = requestAnimationFrame(smoothRotation);
        };

        smoothRotation();

        return () => cancelAnimationFrame(animationFrameId);
    }, [targetRotateX, targetRotateY]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        setCardRect(rect);

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Calculate mouse position relative to center
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;

        // Calculate rotation (max 15 degrees)
        const rotateYValue = (mouseX / (rect.width / 2)) * 15;
        const rotateXValue = -(mouseY / (rect.height / 2)) * 15;

        setTargetRotateX(rotateXValue);
        setTargetRotateY(rotateYValue);
        setIsMoving(true);
    };

    const handleMouseLeave = () => {
        setTargetRotateX(0);
        setTargetRotateY(0);
        setIsMoving(false);
    };

    const cardStyle: React.CSSProperties = {
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'none', // Remove CSS transition, using JS animation instead
    };

    return (
        <>
            <canvas
                ref={particleCanvasRef}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    pointerEvents: 'none',
                    zIndex: 10,
                }}
            />
            <div
                className="quote-card-container"
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                <div className="quote-card" style={cardStyle}>
                    <div className="quote-icon">"</div>
                    <p className="quote-text" style={textStyle}>{DOMPurify.sanitize(quote.text)}</p>
                    <div className="quote-meta">
                        <span className="quote-movie">{quote.source}</span>
                        <span className="quote-year">{quote.year}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

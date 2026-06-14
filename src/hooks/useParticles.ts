import { useEffect, useRef } from 'react';

interface Particle {
    x: number;
    y: number;
    z: number;
    vx: number;
    vy: number;
    vz: number;
    size: number;
    life: number;
    maxLife: number;
    glow: number;
}

interface UseParticlesProps {
    rotateX: number;
    rotateY: number;
    isMoving: boolean;
    cardRect: DOMRect | null;
}

export const useParticles = ({ rotateX, rotateY, isMoving, cardRect }: UseParticlesProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const animationFrameRef = useRef<number | undefined>(undefined);
  const rotateXRef = useRef(rotateX);
  const rotateYRef = useRef(rotateY);
  const isMovingRef = useRef(isMoving);
  const cardRectRef = useRef(cardRect);

    useEffect(() => {
        // Update refs on each render
        rotateXRef.current = rotateX;
        rotateYRef.current = rotateY;
        isMovingRef.current = isMoving;
        cardRectRef.current = cardRect;
    }, [rotateX, rotateY, isMoving, cardRect]);

    // Effect to set up canvas and animation – runs once
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { alpha: true });
        if (!ctx) return;

        const updateCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        updateCanvasSize();
        window.addEventListener('resize', updateCanvasSize);

        const spawnParticles = () => {
            if (!isMovingRef.current || !cardRectRef.current) return;
            const rect = cardRectRef.current;
            const edges = [
                { x: rect.left, y: rect.top + Math.random() * rect.height },
                { x: rect.right, y: rect.top + Math.random() * rect.height },
                { x: rect.left + Math.random() * rect.width, y: rect.top },
                { x: rect.left + Math.random() * rect.width, y: rect.bottom },
            ];
            const edge = edges[Math.floor(Math.random() * edges.length)];
            const rotationMagnitude = Math.sqrt(rotateXRef.current * rotateXRef.current + rotateYRef.current * rotateYRef.current);
            const velocityMultiplier = rotationMagnitude / 40;
            const particle: Particle = {
                x: edge.x,
                y: edge.y,
                z: Math.random() * 200 - 100,
                vx: (Math.random() - 0.5) * 0.8 * velocityMultiplier + rotateYRef.current * 0.08,
                vy: (Math.random() - 0.5) * 0.8 * velocityMultiplier - rotateXRef.current * 0.08,
                vz: (Math.random() - 0.5) * 0.4,
                size: Math.random() * 1.5 + 0.8,
                life: 1,
                maxLife: Math.random() * 90 + 60,
                glow: Math.random() * 0.3 + 0.3,
            };
            particlesRef.current.push(particle);
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            if (isMovingRef.current && particlesRef.current.length < 60) {
                if (Math.random() > 0.4) {
                    spawnParticles();
                }
            }
            particlesRef.current = particlesRef.current.filter(particle => {
                particle.x += particle.vx;
                particle.y += particle.vy;
                particle.z += particle.vz;
                particle.life -= 1 / particle.maxLife;
                particle.vy += 0.02;
                const scale = 1 + particle.z / 500;
                const size = particle.size * scale;
                const opacity = particle.life * particle.glow;
                if (particle.life > 0) {
                    ctx.save();
                    const gradient = ctx.createRadialGradient(
                        particle.x, particle.y, 0,
                        particle.x, particle.y, size * 1.5
                    );
                    gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity})`);
                    gradient.addColorStop(0.5, `rgba(200, 150, 255, ${opacity * 0.4})`);
                    gradient.addColorStop(1, `rgba(150, 100, 255, 0)`);
                    ctx.fillStyle = gradient;
                    ctx.beginPath();
                    ctx.arc(particle.x, particle.y, size * 1.5, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
                    ctx.beginPath();
                    ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.restore();
                    return true;
                }
                return false;
            });
            animationFrameRef.current = requestAnimationFrame(animate);
        };
        animate();
        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            window.removeEventListener('resize', updateCanvasSize);
        };
    }, []);

    return canvasRef;
};

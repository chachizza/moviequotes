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

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { alpha: true });
        if (!ctx) return;

        // Set canvas size
        const updateCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        updateCanvasSize();
        window.addEventListener('resize', updateCanvasSize);

        // Spawn particles from card edges
        const spawnParticles = () => {
            if (!isMoving || !cardRect) return;

            const edges = [
                { x: cardRect.left, y: cardRect.top + Math.random() * cardRect.height }, // left
                { x: cardRect.right, y: cardRect.top + Math.random() * cardRect.height }, // right
                { x: cardRect.left + Math.random() * cardRect.width, y: cardRect.top }, // top
                { x: cardRect.left + Math.random() * cardRect.width, y: cardRect.bottom }, // bottom
            ];

            const edge = edges[Math.floor(Math.random() * edges.length)];

            // Calculate velocity based on rotation (reduced speed)
            const rotationMagnitude = Math.sqrt(rotateX * rotateX + rotateY * rotateY);
            const velocityMultiplier = rotationMagnitude / 40; // reduced from 30 for even slower movement

            const particle: Particle = {
                x: edge.x,
                y: edge.y,
                z: Math.random() * 200 - 100, // random depth
                vx: (Math.random() - 0.5) * 0.8 * velocityMultiplier + rotateY * 0.08, // much smaller spread
                vy: (Math.random() - 0.5) * 0.8 * velocityMultiplier - rotateX * 0.08, // much smaller spread
                vz: (Math.random() - 0.5) * 0.4, // reduced z movement
                size: Math.random() * 1.5 + 0.8, // much smaller: 0.8-2.3px
                life: 1,
                maxLife: Math.random() * 90 + 60, // longer life (was 60 + 40)
                glow: Math.random() * 0.3 + 0.3, // reduced glow intensity
            };

            particlesRef.current.push(particle);
        };

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Spawn new particles (slightly increased)
            if (isMoving && particlesRef.current.length < 60) { // increased from 40
                // Spawn more frequently
                if (Math.random() > 0.4) { // 60% chance to spawn (increased from 50%)
                    spawnParticles();
                }
            }

            // Update and draw particles
            particlesRef.current = particlesRef.current.filter(particle => {
                // Update position
                particle.x += particle.vx;
                particle.y += particle.vy;
                particle.z += particle.vz;

                // Update life
                particle.life -= 1 / particle.maxLife;

                // Apply gravity (reduced)
                particle.vy += 0.02; // reduced from 0.05

                // Calculate scale based on z-depth
                const scale = 1 + particle.z / 500;
                const size = particle.size * scale;
                const opacity = particle.life * particle.glow;

                // Draw particle
                if (particle.life > 0) {
                    ctx.save();

                    // Glow effect (reduced)
                    const gradient = ctx.createRadialGradient(
                        particle.x, particle.y, 0,
                        particle.x, particle.y, size * 1.5 // reduced glow radius from size * 2
                    );
                    gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity})`);
                    gradient.addColorStop(0.5, `rgba(200, 150, 255, ${opacity * 0.4})`); // reduced from 0.5
                    gradient.addColorStop(1, `rgba(150, 100, 255, 0)`);

                    ctx.fillStyle = gradient;
                    ctx.beginPath();
                    ctx.arc(particle.x, particle.y, size * 1.5, 0, Math.PI * 2); // reduced from size * 2
                    ctx.fill();

                    // Core particle
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
    }, [rotateX, rotateY, isMoving, cardRect]);

    return canvasRef;
};

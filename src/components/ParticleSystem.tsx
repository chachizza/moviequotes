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

interface ParticleSystemProps {
    rotateX: number;
    rotateY: number;
    isMoving: boolean;
    cardRect: DOMRect | null;
}

export const ParticleSystem: React.FC<ParticleSystemProps> = ({
    rotateX,
    rotateY,
    isMoving,
    cardRect
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const animationFrameRef = useRef<number | undefined>(undefined);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { alpha: true });
        if (!ctx) return;

        // Set canvas size to window size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Spawn particles from card edges
        const spawnParticles = () => {
            if (!isMoving || !cardRect) return;

            const edges = [
                // Top edge
                { x: cardRect.left + Math.random() * cardRect.width, y: cardRect.top },
                // Bottom edge
                { x: cardRect.left + Math.random() * cardRect.width, y: cardRect.bottom },
                // Left edge
                { x: cardRect.left, y: cardRect.top + Math.random() * cardRect.height },
                // Right edge
                { x: cardRect.right, y: cardRect.top + Math.random() * cardRect.height },
            ];

            // Spawn 2-3 particles per frame when moving
            const numParticles = Math.floor(Math.random() * 2) + 2;
            for (let i = 0; i < numParticles; i++) {
                const edge = edges[Math.floor(Math.random() * edges.length)];

                // Calculate velocity based on card rotation
                const velocityMultiplier = 2;
                const baseVx = (rotateY / 15) * velocityMultiplier;
                const baseVy = (rotateX / 15) * velocityMultiplier;

                particlesRef.current.push({
                    x: edge.x,
                    y: edge.y,
                    z: Math.random() * 200 - 100, // Random depth (-100 to 100)
                    vx: baseVx + (Math.random() - 0.5) * 3,
                    vy: baseVy + (Math.random() - 0.5) * 3,
                    vz: (Math.random() - 0.5) * 2,
                    size: Math.random() * 4 + 2,
                    life: 1,
                    maxLife: Math.random() * 60 + 40,
                    glow: Math.random() * 10 + 5,
                });
            }

            // Limit total particles for performance
            if (particlesRef.current.length > 200) {
                particlesRef.current = particlesRef.current.slice(-200);
            }
        };

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Spawn new particles
            if (isMoving) {
                spawnParticles();
            }

            // Update and draw particles
            particlesRef.current = particlesRef.current.filter(particle => {
                // Update position
                particle.x += particle.vx;
                particle.y += particle.vy;
                particle.z += particle.vz;

                // Update life
                particle.life -= 1 / particle.maxLife;

                // Apply gravity and friction
                particle.vy += 0.1;
                particle.vx *= 0.98;
                particle.vz *= 0.98;

                // Remove dead particles
                if (particle.life <= 0) return false;

                // Calculate 3D perspective
                const perspective = 1000;
                const scale = perspective / (perspective + particle.z);
                const x2d = particle.x;
                const y2d = particle.y;
                const size2d = particle.size * scale;

                // Draw particle with glow
                const opacity = particle.life * 0.8;
                const brightness = particle.z > 0 ? 1.2 : 0.8; // Brighter if in front

                // Outer glow
                ctx.beginPath();
                const gradient = ctx.createRadialGradient(x2d, y2d, 0, x2d, y2d, size2d * particle.glow);
                gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity * 0.8 * brightness})`);
                gradient.addColorStop(0.3, `rgba(147, 197, 253, ${opacity * 0.5 * brightness})`);
                gradient.addColorStop(1, `rgba(59, 130, 246, 0)`);
                ctx.fillStyle = gradient;
                ctx.arc(x2d, y2d, size2d * particle.glow, 0, Math.PI * 2);
                ctx.fill();

                // Core particle
                ctx.beginPath();
                ctx.fillStyle = `rgba(255, 255, 255, ${opacity * brightness})`;
                ctx.arc(x2d, y2d, size2d, 0, Math.PI * 2);
                ctx.fill();

                return true;
            });

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [rotateX, rotateY, isMoving, cardRect]);

    return (
        <canvas
            ref={canvasRef}
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
    );
};

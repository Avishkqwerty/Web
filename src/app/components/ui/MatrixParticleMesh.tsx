import { useEffect, useRef } from 'react';
import { useTheme } from '@/app/components/theme-provider';

interface Particle {
    x: number;
    y: number;
    speed: number;
    chars: string;
    color: string;
    size: number;
    opacity: number;
    active: boolean; // if true, it's currently raining
}

export function MatrixParticleMesh() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const { theme } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = 0;
        let height = 0;
        let animationFrameId: number;
        let particles: Particle[] = [];

        // Mouse interaction
        const mouse = { x: -1000, y: -1000 };
        const interactionRadius = 250; // Radius where matrix rain appears
        const repulsionRadius = 60; // Radius where digits avoid cursor

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight; // Full viewport height for hero
            canvas.width = width;
            canvas.height = height;
            initParticles();
        };

        const initParticles = () => {
            particles = [];
            const columns = Math.ceil(width / 4); // 4px column width (Ultra Dense)

            for (let i = 0; i < columns; i++) {
                particles.push({
                    x: i * 4,
                    y: Math.random() * height - height,
                    speed: 1 + Math.random() * 2,
                    chars: '01',
                    color: theme === 'dark' ? '#00f0ff' : '#2563eb',
                    size: 8 + Math.random() * 6, // Smaller size for density
                    opacity: 0,
                    active: false
                });
            }
        };

        const draw = () => {
            // Clear canvas
            ctx.clearRect(0, 0, width, height);

            // 1. Draw Static Mesh (Subtle Grid)
            ctx.strokeStyle = theme === 'dark' ? 'rgba(0, 240, 255, 0.03)' : 'rgba(37, 99, 235, 0.03)';
            ctx.lineWidth = 1;
            const gridSize = 40;

            // Draw Grid
            for (let x = 0; x <= width; x += gridSize) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, height);
                ctx.stroke();
            }
            for (let y = 0; y <= height; y += gridSize) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(width, y);
                ctx.stroke();
            }

            // 2. Draw Flowing Energy Lines
            const time = Date.now() * 0.001;
            const energyColor = theme === 'dark' ? 'rgba(0, 240, 255, 0.1)' : 'rgba(37, 99, 235, 0.1)';
            ctx.strokeStyle = energyColor;

            // Left
            ctx.beginPath();
            for (let y = 0; y < height; y += 5) {
                const x = 50 + Math.sin(y * 0.01 + time) * 20;
                if (y === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();

            // Right
            ctx.beginPath();
            for (let y = 0; y < height; y += 5) {
                const x = width - 50 + Math.sin(y * 0.01 - time) * 20;
                if (y === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();

            // Content Exclusion Zone (Approximate Hero Center)
            const centerX = width / 2;
            const centerY = height / 2;
            const contentWidth = 900; // Wide enough for title
            const contentHeight = 500; // High enough for title + desc + buttons
            const inContentZone = (x: number, y: number) => {
                return (
                    x > centerX - contentWidth / 2 &&
                    x < centerX + contentWidth / 2 &&
                    y > centerY - contentHeight / 2 &&
                    y < centerY + contentHeight / 2
                );
            };

            // 3. Matrix Rain Logic
            particles.forEach((p, index) => {
                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                // Interaction Logic
                if (dist < 100) {
                    p.opacity = 1;
                    p.active = true;
                } else {
                    p.opacity = Math.max(0, p.opacity - 0.02);
                    p.active = false;
                }

                // apply global brightness factor
                const brightness = 0.6;

                // Apply dimming if inside content zone
                let localOpacity = p.opacity * brightness;

                if (p.opacity > 0 && inContentZone(p.x, p.y)) {
                    localOpacity *= 0.15; // Still respect content dimming
                }

                if (p.opacity > 0.01) {
                    p.y += p.speed;
                    if (p.y > height) {
                        p.y = -20;
                    }

                    const char = Math.random() > 0.95 ? (Math.random() > 0.5 ? '0' : '1') : p.chars.charAt(0);

                    ctx.font = `bold ${p.size}px monospace`;

                    if (p.active) {
                        // Dimmed active state
                        ctx.shadowBlur = 10 * brightness;
                        ctx.shadowColor = `rgba(0, 255, 255, ${brightness})`;
                        ctx.fillStyle = `rgba(224, 255, 255, ${brightness})`; // #e0ffff with alpha

                        if (inContentZone(p.x, p.y)) {
                            ctx.shadowBlur = 2 * brightness;
                            ctx.fillStyle = theme === 'dark' ? `rgba(0, 240, 255, ${0.3 * brightness})` : `rgba(37, 99, 235, ${0.3 * brightness})`;
                        }
                    } else {
                        ctx.shadowBlur = 5 * brightness;
                        ctx.shadowColor = p.color; // color string might need parsing if we want to dim it, but active uses p.opacity which we already dimmed via localOpacity? 
                        // Wait, inactive uses `localOpacity` for fillStyle alpha.
                        ctx.fillStyle = theme === 'dark'
                            ? `rgba(0, 240, 255, ${localOpacity})`
                            : `rgba(37, 99, 235, ${localOpacity})`;
                    }

                    ctx.fillText(char, p.x, p.y);
                    ctx.shadowBlur = 0;
                } else {
                    // Keep moving invisible particles
                    p.y += p.speed;
                    if (p.y > height) p.y = -20;
                }
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouse.x = -1000;
            mouse.y = -1000;
        };

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove); // Global mouse tracking for smoother feel
        // Or attach to container if we only want hero interaction. 
        // Attaching to window ensures tails catch up nicely.

        resize();
        draw();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [theme]);

    return (
        <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <canvas
                ref={canvasRef}
                className="w-full h-full block"
            />
            {/* Overlay gradient to fade bottom edge to transparency smoothly if needed */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-black opacity-20"></div>
        </div>
    );
}

import { useEffect, useRef } from "react";

function ParticleBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        let animationId;
        let particles = [];
        let mouseParticles = [];
        let mouseX = -100;
        let mouseY = -100;
        let bursts = [];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            createParticles();
        };

        const createParticles = () => {
            const count = Math.min(150, Math.floor(window.innerWidth / 9));

            particles = Array.from({ length: count }, () => ({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                vx: (Math.random() - 0.5) * 0.35,
                vy: (Math.random() - 0.5) * 0.35,
                r: Math.random() * 1.8 + 0.5,
                hue: Math.random() > 0.5
                    ? "124,92,255"
                    : "0,217,255",
                alpha: Math.random() * 0.55 + 0.2,
            }));
        };

        const handleMouseMove = (event) => {
            mouseX = event.clientX;
            mouseY = event.clientY;

            // Mouse ke peeche bahut saare tiny dots
            for (let i = 0; i < 6; i++) {
                mouseParticles.push({
                    x: mouseX + (Math.random() - 0.5) * 12,
                    y: mouseY + (Math.random() - 0.5) * 12,
                    vx: (Math.random() - 0.5) * 1.5,
                    vy: (Math.random() - 0.5) * 1.5,
                    life: 1,
                    size: Math.random() * 2 + 0.5,
                });
            }
        };

        const handleClick = (event) => {
            const amount = 45;

            for (let i = 0; i < amount; i++) {
                const angle = (Math.PI * 2 * i) / amount;
                const speed = Math.random() * 2.8 + 1.2;

                bursts.push({
                    x: event.clientX,
                    y: event.clientY,
                    vx: Math.cos(angle) * speed,
                    vy: Math.sin(angle) * speed,
                    life: 1,
                    r: Math.random() * 2 + 0.8,
                });
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p) => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);

                ctx.fillStyle = `rgba(${p.hue}, ${p.alpha})`;
                ctx.shadowBlur = 12;
                ctx.shadowColor = `rgb(${p.hue})`;
                ctx.fill();
            });

            bursts = bursts.filter((p) => p.life > 0);

            bursts.forEach((p) => {
                p.x += p.vx;
                p.y += p.vy;
                p.vx *= 0.97;
                p.vy *= 0.97;
                p.life -= 0.018;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);

                ctx.fillStyle = `rgba(124, 92, 255, ${p.life})`;
                ctx.shadowBlur = 18;
                ctx.shadowColor = "#00d9ff";
                ctx.fill();
            });

            // Mouse particle trail
            mouseParticles = mouseParticles.filter(
                (particle) => particle.life > 0
            );

            mouseParticles.forEach((particle) => {
                particle.x += particle.vx;
                particle.y += particle.vy;
                particle.life -= 0.025;
                particle.size *= 0.89;

                ctx.beginPath();
                ctx.arc(
                    particle.x,
                    particle.y,
                    particle.size,
                    0,
                    Math.PI * 2
                );

                ctx.fillStyle = `rgba(0, 217, 255, ${particle.life})`;
                ctx.shadowBlur = 12;
                ctx.shadowColor = "#00d9ff";
                ctx.fill();
            });

            animationId = requestAnimationFrame(animate);
        };

        resize();
        animate();

        window.addEventListener("resize", resize);
        window.addEventListener("click", handleClick);
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", resize);
            window.removeEventListener("click", handleClick);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return <canvas ref={canvasRef} className="particle-background" />;
}

export default ParticleBackground;
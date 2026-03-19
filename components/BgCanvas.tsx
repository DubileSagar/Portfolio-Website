'use client';

import { useEffect, useRef } from 'react';

export default function BgCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let W = window.innerWidth;
        let H = window.innerHeight;
        canvas.width = W;
        canvas.height = H;

        let nodes: Array<{
            x: number;
            y: number;
            vx: number;
            vy: number;
            r: number;
            op: number;
            hue: string;
        }> = [];

        function createNodes() {
            nodes = [];
            const count = Math.floor((W * H) / 14000);
            for (let i = 0; i < count; i++) {
                nodes.push({
                    x: Math.random() * W,
                    y: Math.random() * H,
                    vx: (Math.random() - 0.5) * 0.38,
                    vy: (Math.random() - 0.5) * 0.38,
                    r: Math.random() * 1.8 + 0.8,
                    op: Math.random() * 0.45 + 0.15,
                    hue: Math.random() > 0.5 ? '0,229,255' : '168,85,247',
                });
            }
        }

        let animationFrameId: number;

        function drawCanvas() {
            ctx!.clearRect(0, 0, W, H);
            const maxDist = 130;

            nodes.forEach((n) => {
                n.x += n.vx;
                n.y += n.vy;
                if (n.x < 0 || n.x > W) n.vx *= -1;
                if (n.y < 0 || n.y > H) n.vy *= -1;
            });

            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const d = Math.sqrt(dx * dx + dy * dy);
                    if (d < maxDist) {
                        ctx!.beginPath();
                        ctx!.strokeStyle = `rgba(0,229,255,${(1 - d / maxDist) * 0.12})`;
                        ctx!.lineWidth = 0.5;
                        ctx!.moveTo(nodes[i].x, nodes[i].y);
                        ctx!.lineTo(nodes[j].x, nodes[j].y);
                        ctx!.stroke();
                    }
                }
            }

            nodes.forEach((n) => {
                ctx!.beginPath();
                ctx!.fillStyle = `rgba(${n.hue},${n.op})`;
                ctx!.arc(n.x, n.y, n.r, 0, Math.PI * 2);
                ctx!.fill();
            });

            animationFrameId = requestAnimationFrame(drawCanvas);
        }

        function handleResize() {
            W = window.innerWidth;
            H = window.innerHeight;
            canvas!.width = W;
            canvas!.height = H;
            createNodes();
        }

        window.addEventListener('resize', handleResize, { passive: true });
        createNodes();
        drawCanvas();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas id="bg-canvas" ref={canvasRef}></canvas>;
}

import React, { useEffect, useRef } from 'react';

interface AgentNode {
  id: string;
  x: number;
  y: number;
  label: string;
  type: 'core' | 'agent' | 'output';
  color: string;
}

const nodes: AgentNode[] = [
  { id: 'core', x: 400, y: 200, label: 'NeuroCore', type: 'core', color: '#7c3aed' },
  { id: 'routing', x: 200, y: 100, label: 'Routing AI', type: 'agent', color: '#6366f1' },
  { id: 'onboard', x: 600, y: 100, label: 'Onboarding', type: 'agent', color: '#06b6d4' },
  { id: 'support', x: 130, y: 240, label: 'Support', type: 'agent', color: '#10b981' },
  { id: 'sla', x: 670, y: 240, label: 'SLA Monitor', type: 'agent', color: '#f59e0b' },
  { id: 'classify', x: 200, y: 340, label: 'Classifier', type: 'agent', color: '#ec4899' },
  { id: 'optimize', x: 600, y: 340, label: 'Optimizer', type: 'agent', color: '#6366f1' },
  { id: 'out1', x: 80, y: 170, label: 'Tickets', type: 'output', color: '#10b981' },
  { id: 'out2', x: 720, y: 170, label: 'Reports', type: 'output', color: '#06b6d4' },
  { id: 'out3', x: 400, y: 370, label: 'Insights', type: 'output', color: '#7c3aed' },
];

const edges = [
  ['core', 'routing'], ['core', 'onboard'], ['core', 'support'],
  ['core', 'sla'], ['core', 'classify'], ['core', 'optimize'],
  ['routing', 'out1'], ['onboard', 'out2'], ['classify', 'out3'],
  ['sla', 'out2'], ['support', 'out1'], ['optimize', 'out3'],
];

export const NeuroFlowAgentVisual: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const particlesRef = useRef<Array<{ from: string; to: string; t: number; speed: number; color: string }>>([]);

  useEffect(() => {
    // Initialize particles
    particlesRef.current = edges.map(([from, to]) => ({
      from, to,
      t: Math.random(),
      speed: 0.003 + Math.random() * 0.004,
      color: nodes.find(n => n.id === from)?.color || '#7c3aed',
    }));

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;

    const getNode = (id: string) => nodes.find(n => n.id === id)!;

    let tick = 0;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // Background
      ctx.fillStyle = 'rgba(15,10,30,0.0)';
      ctx.fillRect(0, 0, W, H);

      // Draw edges
      edges.forEach(([from, to]) => {
        const a = getNode(from);
        const b = getNode(to);
        if (!a || !b) return;
        const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
        grad.addColorStop(0, `${a.color}44`);
        grad.addColorStop(1, `${a.color}11`);
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Animate particles
      particlesRef.current.forEach(p => {
        p.t += p.speed;
        if (p.t > 1) p.t = 0;

        const a = getNode(p.from);
        const b = getNode(p.to);
        if (!a || !b) return;

        const x = a.x + (b.x - a.x) * p.t;
        const y = a.y + (b.y - a.y) * p.t;

        // Glow
        const grd = ctx.createRadialGradient(x, y, 0, x, y, 6);
        grd.addColorStop(0, p.color);
        grd.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(x, y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      // Draw nodes
      nodes.forEach(node => {
        const pulse = Math.sin(tick * 0.04 + node.x * 0.01) * 0.3 + 0.7;
        const r = node.type === 'core' ? 24 : node.type === 'agent' ? 16 : 11;

        // Outer glow
        const glow = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, r * 2.5);
        glow.addColorStop(0, `${node.color}${Math.round(pulse * 60).toString(16).padStart(2, '0')}`);
        glow.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(node.x, node.y, r * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Node circle
        ctx.beginPath();
        ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `${node.color}22`;
        ctx.fill();
        ctx.strokeStyle = node.color;
        ctx.lineWidth = node.type === 'core' ? 2 : 1.5;
        ctx.stroke();

        // Inner dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, r * 0.35, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();

        // Label
        ctx.fillStyle = 'rgba(255,255,255,0.75)';
        ctx.font = `${node.type === 'core' ? '9px' : '8px'} Outfit, sans-serif`;
        ctx.textAlign = 'center';
        ctx.fillText(node.label, node.x, node.y + r + 12);
      });

      tick++;
      animRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <div className="w-full overflow-hidden relative" style={{ borderRadius: '16px', background: 'rgba(15,10,30,0.8)', border: '1px solid rgba(124,58,237,0.2)' }}>
      <canvas
        ref={canvasRef}
        width={800}
        height={420}
        style={{ width: '100%', height: 'auto', display: 'block' }}
      />
    </div>
  );
};

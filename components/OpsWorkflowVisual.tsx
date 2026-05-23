import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface WorkflowNode {
  id: string;
  label: string;
  sublabel: string;
  x: number;
  y: number;
  color: string;
  icon: string;
}

interface WorkflowEdge {
  from: string;
  to: string;
}

const nodes: WorkflowNode[] = [
  { id: 'trigger', label: 'Trigger', sublabel: 'API / Webhook', x: 60, y: 200, color: '#00f2ff', icon: '⚡' },
  { id: 'ocr', label: 'OCR Engine', sublabel: 'AI Extraction', x: 230, y: 100, color: '#bd00ff', icon: '🔍' },
  { id: 'validate', label: 'Validator', sublabel: 'Confidence Check', x: 230, y: 300, color: '#ffd700', icon: '✓' },
  { id: 'logic', label: 'Logic Gate', sublabel: 'Conditional', x: 400, y: 200, color: '#00f2ff', icon: '⟁' },
  { id: 'human', label: 'Human Review', sublabel: 'Approval Step', x: 560, y: 100, color: '#ff6b6b', icon: '👤' },
  { id: 'automate', label: 'Auto Process', sublabel: 'Workflow Engine', x: 560, y: 300, color: '#51cf66', icon: '⚙' },
  { id: 'output', label: 'Output', sublabel: 'Push to ERP', x: 730, y: 200, color: '#00f2ff', icon: '↗' },
];

const edges: WorkflowEdge[] = [
  { from: 'trigger', to: 'ocr' },
  { from: 'trigger', to: 'validate' },
  { from: 'ocr', to: 'logic' },
  { from: 'validate', to: 'logic' },
  { from: 'logic', to: 'human' },
  { from: 'logic', to: 'automate' },
  { from: 'human', to: 'output' },
  { from: 'automate', to: 'output' },
];

const getNode = (id: string) => nodes.find(n => n.id === id)!;

export const OpsWorkflowVisual: React.FC = () => {
  const [activeEdge, setActiveEdge] = useState(0);
  const [activeNode, setActiveNode] = useState('trigger');

  useEffect(() => {
    const edgeOrder = ['trigger', 'ocr', 'validate', 'logic', 'automate', 'output'];
    let idx = 0;
    const interval = setInterval(() => {
      idx = (idx + 1) % edgeOrder.length;
      setActiveNode(edgeOrder[idx]);
      setActiveEdge(idx);
    }, 900);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-x-auto">
      <svg
        viewBox="0 0 800 400"
        className="w-full"
        style={{ minWidth: '600px', height: 'auto' }}
      >
        {/* Grid background */}
        <defs>
          <pattern id="wf-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          </pattern>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <rect width="800" height="400" fill="rgba(10,10,15,0.9)" rx="16" />
        <rect width="800" height="400" fill="url(#wf-grid)" rx="16" />

        {/* Edges */}
        {edges.map((edge, i) => {
          const from = getNode(edge.from);
          const to = getNode(edge.to);
          const isActive = edge.from === activeNode || edge.to === activeNode;
          return (
            <g key={i}>
              <line
                x1={from.x + 36} y1={from.y + 20}
                x2={to.x} y2={to.y + 20}
                stroke={isActive ? '#00f2ff' : 'rgba(255,255,255,0.1)'}
                strokeWidth={isActive ? 2 : 1}
                strokeDasharray="6,4"
                style={{ transition: 'stroke 0.4s, stroke-width 0.4s' }}
              />
              {isActive && (
                <circle r="4" fill="#00f2ff" filter="url(#glow)">
                  <animateMotion
                    dur="0.9s"
                    repeatCount="indefinite"
                    path={`M${from.x + 36},${from.y + 20} L${to.x},${to.y + 20}`}
                  />
                </circle>
              )}
            </g>
          );
        })}

        {/* Nodes */}
        {nodes.map((node) => {
          const isActive = node.id === activeNode;
          return (
            <g key={node.id} transform={`translate(${node.x}, ${node.y})`}>
              {isActive && (
                <rect
                  x="-4" y="-4" width="80" height="48"
                  rx="10"
                  fill="none"
                  stroke={node.color}
                  strokeWidth="1.5"
                  opacity="0.6"
                  filter="url(#glow)"
                />
              )}
              <rect
                width="72" height="40"
                rx="8"
                fill={isActive ? 'rgba(19,19,31,0.95)' : 'rgba(19,19,31,0.8)'}
                stroke={isActive ? node.color : 'rgba(255,255,255,0.12)'}
                strokeWidth={isActive ? 1.5 : 1}
                style={{ transition: 'stroke 0.4s' }}
              />
              <text x="10" y="16" fill={node.color} fontSize="11" fontFamily="monospace">{node.icon}</text>
              <text x="8" y="28" fill="white" fontSize="8.5" fontWeight="bold" fontFamily="sans-serif">{node.label}</text>
              <text x="8" y="38" fill="rgba(255,255,255,0.4)" fontSize="7" fontFamily="sans-serif">{node.sublabel}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

import React, { useState, useEffect } from 'react';

const activityFeed = [
  { id: 1, type: 'success', msg: 'Invoice #INV-2847 processed', time: '2s ago', color: '#51cf66' },
  { id: 2, type: 'info', msg: 'Workflow "HR Onboarding" triggered', time: '14s ago', color: '#00f2ff' },
  { id: 3, type: 'warning', msg: 'OCR confidence 61% — sent for review', time: '32s ago', color: '#ffd700' },
  { id: 4, type: 'success', msg: 'Claims batch #C-9913 completed', time: '1m ago', color: '#51cf66' },
  { id: 5, type: 'error', msg: 'API rate limit hit — retry queued', time: '3m ago', color: '#ff6b6b' },
  { id: 6, type: 'success', msg: 'Healthcare form extracted (99.2%)', time: '5m ago', color: '#51cf66' },
];

const metrics = [
  { label: 'Workflows Today', value: '4,821', delta: '+12.4%', color: '#00f2ff' },
  { label: 'Success Rate', value: '99.2%', delta: '+0.3%', color: '#51cf66' },
  { label: 'Avg. Process Time', value: '1.3s', delta: '-22%', color: '#bd00ff' },
  { label: 'Queue Depth', value: '128', delta: '-8', color: '#ffd700' },
];

const sparkPoints = [60, 45, 72, 55, 88, 63, 79, 91, 74, 95, 82, 99, 87, 100, 93];

const getSparkPath = () => {
  const w = 220, h = 60;
  const max = Math.max(...sparkPoints), min = Math.min(...sparkPoints);
  const pts = sparkPoints.map((v, i) => {
    const x = (i / (sparkPoints.length - 1)) * w;
    const y = h - ((v - min) / (max - min)) * h;
    return `${x},${y}`;
  });
  return `M${pts.join(' L')}`;
};

export const OpsDashboardMockup: React.FC = () => {
  const [tick, setTick] = useState(0);
  const [health, setHealth] = useState({ cpu: 34, mem: 61, api: 92 });

  useEffect(() => {
    const t = setInterval(() => {
      setTick(p => p + 1);
      setHealth({
        cpu: 28 + Math.floor(Math.random() * 20),
        mem: 55 + Math.floor(Math.random() * 15),
        api: 88 + Math.floor(Math.random() * 10),
      });
    }, 2000);
    return () => clearInterval(t);
  }, []);

  return (
    <div
      style={{
        background: 'rgba(10,10,15,0.97)',
        border: '1px solid rgba(0,242,255,0.15)',
        borderRadius: '16px',
        overflow: 'hidden',
        fontFamily: 'Outfit, sans-serif',
        boxShadow: '0 0 60px rgba(0,242,255,0.08), 0 32px 80px rgba(0,0,0,0.6)',
      }}
    >
      {/* Top Nav */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '12px 20px',
        background: 'rgba(19,19,31,0.9)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#00f2ff', boxShadow: '0 0 8px #00f2ff' }} />
          <span style={{ color: '#00f2ff', fontWeight: 700, fontSize: '13px', letterSpacing: '0.05em' }}>ANTIGRAVITY OPS</span>
          <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '12px' }}>/ Dashboard</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#51cf66', animation: 'pulse 2s infinite' }} />
          <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px' }}>Live • {new Date().toLocaleTimeString()}</span>
          <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'linear-gradient(135deg,#00f2ff,#bd00ff)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 700 }}>A</div>
        </div>
      </div>

      <div style={{ display: 'flex', minHeight: '380px' }}>
        {/* Sidebar */}
        <div style={{
          width: '52px', background: 'rgba(13,13,22,0.9)', borderRight: '1px solid rgba(255,255,255,0.05)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '16px', gap: '20px'
        }}>
          {['⚡', '📊', '⚙', '📋', '🔔', '⬡'].map((icon, i) => (
            <div key={i} style={{
              width: 34, height: 34, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: i === 0 ? 'rgba(0,242,255,0.12)' : 'transparent',
              border: i === 0 ? '1px solid rgba(0,242,255,0.3)' : 'none',
              fontSize: '14px', cursor: 'pointer',
              transition: 'all 0.2s',
            }}>
              {icon}
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, padding: '16px', overflowY: 'auto' }}>
          {/* Metric Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginBottom: '14px' }}>
            {metrics.map((m, i) => (
              <div key={i} style={{
                background: 'rgba(19,19,31,0.8)', borderRadius: '10px',
                border: `1px solid ${m.color}22`,
                padding: '12px',
                transition: 'border-color 0.5s',
              }}>
                <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', marginBottom: '4px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{m.label}</div>
                <div style={{ fontSize: '20px', fontWeight: 800, color: 'white', marginBottom: '2px' }}>{m.value}</div>
                <div style={{ fontSize: '10px', color: m.color, fontWeight: 600 }}>{m.delta}</div>
              </div>
            ))}
          </div>

          {/* Chart + Activity */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '14px' }}>
            {/* Sparkline */}
            <div style={{ background: 'rgba(19,19,31,0.8)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.06)', padding: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span style={{ fontSize: '11px', fontWeight: 700, color: 'white' }}>Workflow Throughput</span>
                <span style={{ fontSize: '10px', color: '#00f2ff' }}>Last 15m</span>
              </div>
              <svg width="100%" height="60" viewBox="0 0 220 60" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="spark-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00f2ff" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#00f2ff" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d={`${getSparkPath()} L220,60 L0,60 Z`} fill="url(#spark-grad)" />
                <path d={getSparkPath()} fill="none" stroke="#00f2ff" strokeWidth="1.5" />
              </svg>
            </div>

            {/* Activity Feed */}
            <div style={{ background: 'rgba(19,19,31,0.8)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.06)', padding: '14px', overflow: 'hidden' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: 'white', marginBottom: '10px' }}>Live Activity</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                {activityFeed.slice(0, 4).map((a) => (
                  <div key={a.id} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: 5, height: 5, borderRadius: '50%', background: a.color, flexShrink: 0 }} />
                    <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.65)', flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{a.msg}</span>
                    <span style={{ fontSize: '9px', color: 'rgba(255,255,255,0.25)', flexShrink: 0 }}>{a.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* System Health */}
          <div style={{ background: 'rgba(19,19,31,0.8)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.06)', padding: '14px' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, color: 'white', marginBottom: '10px' }}>System Health</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
              {[
                { label: 'CPU', value: health.cpu, color: health.cpu > 70 ? '#ff6b6b' : '#51cf66' },
                { label: 'Memory', value: health.mem, color: health.mem > 80 ? '#ffd700' : '#00f2ff' },
                { label: 'API Health', value: health.api, color: '#51cf66' },
              ].map((h, i) => (
                <div key={i}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)' }}>{h.label}</span>
                    <span style={{ fontSize: '10px', color: h.color, fontWeight: 700 }}>{h.value}%</span>
                  </div>
                  <div style={{ height: '4px', background: 'rgba(255,255,255,0.08)', borderRadius: '2px', overflow: 'hidden' }}>
                    <div style={{
                      height: '100%', width: `${h.value}%`,
                      background: h.color,
                      borderRadius: '2px',
                      transition: 'width 0.8s ease',
                      boxShadow: `0 0 6px ${h.color}88`,
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

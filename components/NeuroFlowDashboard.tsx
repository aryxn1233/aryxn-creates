import React, { useState, useEffect } from 'react';

const agents = [
  { name: 'Router-1', status: 'active', task: 'Classifying ticket #T-4821', color: '#7c3aed' },
  { name: 'Onboard-3', status: 'active', task: 'Onboarding: Acme Corp (step 4/7)', color: '#06b6d4' },
  { name: 'SLA-Monitor', status: 'active', task: 'Watching 14 at-risk SLAs', color: '#f59e0b' },
  { name: 'Support-AI', status: 'idle', task: 'Awaiting next ticket', color: '#10b981' },
  { name: 'Optimizer', status: 'active', task: 'Analyzing workflow inefficiencies', color: '#ec4899' },
];

const recentActions = [
  { agent: 'Router-1', action: 'Auto-routed #T-4821 → Tier 2 Support', time: '3s ago', type: 'route' },
  { agent: 'Onboard-3', action: 'Sent welcome email to john@acmecorp.com', time: '18s ago', type: 'onboard' },
  { agent: 'SLA-Monitor', action: 'Escalated ticket #T-4809 — SLA breach risk', time: '41s ago', type: 'alert' },
  { agent: 'Support-AI', action: 'Generated response draft for ticket #T-4800', time: '1m ago', type: 'ai' },
  { agent: 'Optimizer', action: 'Suggested 3 workflow improvements', time: '4m ago', type: 'insight' },
];

const typeColor: Record<string, string> = {
  route: '#7c3aed', onboard: '#06b6d4', alert: '#f59e0b', ai: '#10b981', insight: '#ec4899'
};

const metrics = [
  { label: 'Active Agents', value: '12', delta: '+3', color: '#7c3aed' },
  { label: 'Tickets Resolved', value: '94.7%', delta: '+2.1%', color: '#10b981' },
  { label: 'Avg Response Time', value: '1.4m', delta: '-38%', color: '#06b6d4' },
  { label: 'Onboarding Flows', value: '2,841', delta: '+187', color: '#f59e0b' },
];

const workflowSteps = [
  { label: 'Ticket Intake', pct: 100, color: '#7c3aed' },
  { label: 'AI Classification', pct: 97, color: '#6366f1' },
  { label: 'Smart Routing', pct: 94, color: '#06b6d4' },
  { label: 'Auto-Response', pct: 78, color: '#10b981' },
  { label: 'Human Review', pct: 22, color: '#f59e0b' },
  { label: 'Resolution', pct: 94, color: '#10b981' },
];

export const NeuroFlowDashboard: React.FC = () => {
  const [tick, setTick] = useState(0);
  const [activeAgent, setActiveAgent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setTick(p => p + 1);
      setActiveAgent(p => (p + 1) % agents.length);
    }, 2200);
    return () => clearInterval(t);
  }, []);

  const timeStr = new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });

  return (
    <div style={{
      background: 'rgba(15,10,30,0.97)',
      border: '1px solid rgba(124,58,237,0.2)',
      borderRadius: '16px',
      overflow: 'hidden',
      fontFamily: 'Outfit, sans-serif',
      boxShadow: '0 0 60px rgba(124,58,237,0.08), 0 32px 80px rgba(0,0,0,0.7)',
    }}>
      {/* Top Nav */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '12px 20px',
        background: 'rgba(15,10,30,0.95)',
        borderBottom: '1px solid rgba(124,58,237,0.15)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: 28, height: 28, borderRadius: '8px',
            background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '13px', fontWeight: 900, color: 'white'
          }}>N</div>
          <span style={{ color: 'white', fontWeight: 700, fontSize: '13px' }}>NeuroFlow AI</span>
          <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '12px' }}>/ Operations</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '3px 10px', borderRadius: '20px', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)' }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981' }} />
            <span style={{ color: '#10b981', fontSize: '10px', fontWeight: 600 }}>All Systems Operational</span>
          </div>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '11px', fontFamily: 'monospace' }}>{timeStr}</span>
        </div>
      </div>

      <div style={{ display: 'flex', minHeight: '420px' }}>
        {/* Sidebar */}
        <div style={{
          width: '52px', background: 'rgba(10,7,20,0.9)',
          borderRight: '1px solid rgba(124,58,237,0.1)',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          paddingTop: '16px', gap: '16px'
        }}>
          {['⚡', '🤖', '📊', '⚙', '🔔', '👥'].map((icon, i) => (
            <div key={i} style={{
              width: 34, height: 34, borderRadius: '8px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: i === 0 ? 'rgba(124,58,237,0.15)' : 'transparent',
              border: i === 0 ? '1px solid rgba(124,58,237,0.4)' : 'none',
              fontSize: '14px', cursor: 'pointer',
            }}>{icon}</div>
          ))}
        </div>

        {/* Main */}
        <div style={{ flex: 1, padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px', overflowY: 'auto' }}>
          {/* Metric Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
            {metrics.map((m, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '10px',
                border: `1px solid ${m.color}22`,
                padding: '12px',
              }}>
                <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.35)', marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{m.label}</div>
                <div style={{ fontSize: '22px', fontWeight: 800, color: 'white', marginBottom: '3px' }}>{m.value}</div>
                <div style={{ fontSize: '10px', color: m.color, fontWeight: 600 }}>{m.delta}</div>
              </div>
            ))}
          </div>

          {/* Middle row: workflow funnel + agent feed */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', flex: 1 }}>
            {/* Workflow funnel */}
            <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.05)', padding: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ fontSize: '11px', fontWeight: 700, color: 'white' }}>Automation Funnel</span>
                <span style={{ fontSize: '10px', color: '#7c3aed' }}>Live</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {workflowSteps.map((s, i) => (
                  <div key={i}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3px' }}>
                      <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)' }}>{s.label}</span>
                      <span style={{ fontSize: '10px', color: s.color, fontWeight: 700 }}>{s.pct}%</span>
                    </div>
                    <div style={{ height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px', overflow: 'hidden' }}>
                      <div style={{
                        height: '100%', width: `${s.pct}%`,
                        background: s.color,
                        borderRadius: '2px',
                        boxShadow: `0 0 6px ${s.color}80`,
                        transition: 'width 0.8s ease',
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Agent status */}
            <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.05)', padding: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ fontSize: '11px', fontWeight: 700, color: 'white' }}>AI Agents</span>
                <span style={{ fontSize: '10px', color: '#10b981' }}>4 active</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {agents.map((a, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    padding: '6px 8px', borderRadius: '7px',
                    background: i === activeAgent ? `${a.color}10` : 'transparent',
                    border: `1px solid ${i === activeAgent ? a.color + '30' : 'transparent'}`,
                    transition: 'all 0.4s ease',
                  }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: a.status === 'active' ? a.color : 'rgba(255,255,255,0.2)', flexShrink: 0 }} />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '10px', fontWeight: 700, color: 'white' }}>{a.name}</div>
                      <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.35)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{a.task}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Activity Feed */}
          <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.05)', padding: '12px' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, color: 'white', marginBottom: '10px' }}>Recent Agent Actions</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
              {recentActions.map((a, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: 5, height: 5, borderRadius: '50%', background: typeColor[a.type], flexShrink: 0 }} />
                  <span style={{ fontSize: '10px', color: typeColor[a.type], fontWeight: 600, flexShrink: 0, minWidth: '72px' }}>{a.agent}</span>
                  <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.55)', flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{a.action}</span>
                  <span style={{ fontSize: '9px', color: 'rgba(255,255,255,0.2)', flexShrink: 0 }}>{a.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

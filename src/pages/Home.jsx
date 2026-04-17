import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Play, Users, Briefcase, DollarSign, MessageSquare, Package,
  CheckCircle, Star, Zap, Shield, Globe, BarChart2, TrendingUp, Clock,
  ChevronRight, Award, Layers
} from 'lucide-react';

const heroWords = ['Manage HR', 'Track Projects', 'Control Finance', 'Streamline Ops', 'Run Everything'];

const painPoints = [
  { problem: 'Scattered Tools', desc: 'Your team juggles 5+ apps for HR, projects, and finance — data is lost between platforms.', solution: 'One unified workspace replaces all your tools, keeping every team on the same page.' },
  { problem: 'Data Silos', desc: 'HR data doesn\'t talk to finance. Project costs don\'t sync with invoices. Decisions suffer.', solution: 'NexaHub connects every module — HR, projects, finance all share real-time data automatically.' },
  { problem: 'Missed Deadlines', desc: 'No visibility across teams. Tasks fall through cracks. Managers chase updates via WhatsApp.', solution: 'Smart dashboards, automated alerts, and Gantt views keep every project on track — always.' },
];

const modules = [
  {
    id: 'hr', icon: Users, label: 'People & HR', color: '#7c3aed', bg: 'rgba(124,58,237,0.12)',
    features: ['Appraisals & Reviews', 'Leave & Attendance', 'Rewards & Recognition', 'Complaints Portal', 'HR Analytics'],
    desc: 'Complete HR management — from hire to retire in one place.',
    to: '/features/hr'
  },
  {
    id: 'projects', icon: Briefcase, label: 'Work & Projects', color: '#3b82f6', bg: 'rgba(59,130,246,0.12)',
    features: ['Task Management', 'Gantt Charts', 'Leads Pipeline', 'Team Workload', 'Progress Tracking'],
    desc: 'From kickoff to delivery, manage every project with clarity.',
    to: '/features/projects'
  },
  {
    id: 'finance', icon: DollarSign, label: 'Finance & Ops', color: '#10b981', bg: 'rgba(16,185,129,0.12)',
    features: ['Professional Invoices', 'Quotations', 'Transaction Ledger', 'Expense Tracking', 'Finance Reports'],
    desc: 'Your numbers inside the work — not in another tab.',
    to: '/features/finance'
  },
  {
    id: 'comm', icon: MessageSquare, label: 'Communication', color: '#f59e0b', bg: 'rgba(245,158,11,0.12)',
    features: ['Company Newsfeed', 'Real-time Messaging', 'Group Mailbox', 'Document Library', 'Team Announcements'],
    desc: 'One channel for everything your team needs to say and share.',
    to: '/features/communication'
  },
  {
    id: 'inventory', icon: Package, label: 'Inventory', color: '#ec4899', bg: 'rgba(236,72,153,0.12)',
    features: ['Asset Allocation', 'Item Requests', 'Requisition Flow', 'Stock Catalog', 'Inventory Reports'],
    desc: 'Know exactly what you own, where it is, and who has it.',
    to: '/features/inventory'
  },
];

const stats = [
  { number: '12,000+', label: 'Businesses running on NexaHub' },
  { number: '40%', label: 'Less admin time reported' },
  { number: '5→1', label: 'Tools replaced on average' },
  { number: '3×', label: 'Faster approvals' },
];

const testimonials = [
  {
    quote: "We replaced 4 separate tools — BambooHR, Jira, QuickBooks, and Slack — with NexaHub. Saved $18k/year and our team actually uses it.",
    name: 'Sarah Mitchell', role: 'COO', company: 'TechFlow Solutions', rating: 5,
    outcome: '$18k saved annually'
  },
  {
    quote: "The HR + Projects integration is a game-changer. I can see employee availability before assigning tasks. No more guessing.",
    name: 'Raza Khan', role: 'Project Manager', company: 'BuildRight Construction', rating: 5,
    outcome: '30% faster project delivery'
  },
  {
    quote: "Support loved the complaint portal. Employees feel heard. Managers have a proper audit trail. HR compliance went from stressful to simple.",
    name: 'Priya Sharma', role: 'HR Director', company: 'Medline Healthcare', rating: 5,
    outcome: '100% compliance maintained'
  },
];

const integrations = ['Slack', 'Google', 'Outlook', 'Xero', 'Stripe', 'Zoom', 'Zapier', 'MS Teams', 'Dropbox', 'QuickBooks'];

const steps = [
  { num: '01', title: 'Set Up Your Workspace', desc: 'Create your company workspace in 2 minutes. No technical setup required.' },
  { num: '02', title: 'Invite Your Team', desc: 'Add team members with role-based access. Everyone sees exactly what they need.' },
  { num: '03', title: 'Run Everything in One Place', desc: 'HR, projects, finance, and communication — unified from day one.' },
];

export default function Home() {
  const [heroWordIndex, setHeroWordIndex] = useState(0);
  const [activeModule, setActiveModule] = useState('hr');
  const [flippedCard, setFlippedCard] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroWordIndex(i => (i + 1) % heroWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const activeModuleData = modules.find(m => m.id === activeModule);

  return (
    <div>
      {/* ─── HERO ─── */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', paddingTop: '5rem' }}>
        {/* Background */}
        <div className="dot-bg" style={{ position: 'absolute', inset: 0, opacity: 0.6 }} />
        <div className="orb" style={{ width: '600px', height: '600px', background: 'rgba(124,58,237,0.2)', top: '-100px', left: '-200px' }} />
        <div className="orb" style={{ width: '400px', height: '400px', background: 'rgba(236,72,153,0.15)', top: '200px', right: '-100px' }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1, width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>

            {/* Left */}
            <div className="fade-in-up">
              <div className="section-tag">
                <Zap size={12} /> #1 All-in-One Business Platform
              </div>

              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '900', lineHeight: '1.1', marginBottom: '1.5rem' }}>
                <span style={{ display: 'block', color: '#a78bfa', minHeight: '1.2em', transition: 'all 0.3s' }}>
                  {heroWords[heroWordIndex]}
                </span>
                All in One Place
              </h1>

              <p style={{ fontSize: '1.15rem', color: '#94a3b8', lineHeight: '1.75', marginBottom: '2rem', maxWidth: '480px' }}>
                NexaHub replaces your scattered HR, project, finance, communication, and inventory tools with one powerful platform your whole team will love.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                <a href="https://workw.com/login" target="_blank" rel="noreferrer" className="btn-primary" style={{ fontSize: '1rem', padding: '0.875rem 2rem' }}>
                  Start for Free <ArrowRight size={18} />
                </a>
                <button className="btn-secondary" style={{ fontSize: '1rem', padding: '0.875rem 2rem' }}>
                  <Play size={18} /> Watch 2-min Demo
                </button>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex' }}>
                  {[1,2,3,4,5].map(i => (
                    <div key={i} style={{
                      width: '32px', height: '32px', borderRadius: '50%',
                      background: `hsl(${260 + i * 20}, 70%, 60%)`,
                      border: '2px solid #06061a', marginLeft: i > 1 ? '-8px' : 0
                    }} />
                  ))}
                </div>
                <div>
                  <div style={{ display: 'flex', gap: '2px', marginBottom: '2px' }}>
                    {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="#f59e0b" color="#f59e0b" />)}
                  </div>
                  <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Trusted by 12,000+ businesses</span>
                </div>
                <span style={{ fontSize: '0.8rem', color: '#475569' }}>· No credit card required</span>
              </div>
            </div>

            {/* Right — product UI preview */}
            <div style={{ position: 'relative' }} className="float">
              <div style={{
                background: 'rgba(13,13,43,0.9)', border: '1px solid rgba(139,92,246,0.3)',
                borderRadius: '1.25rem', padding: '1.25rem', backdropFilter: 'blur(20px)',
                boxShadow: '0 40px 80px rgba(0,0,0,0.5), 0 0 60px rgba(124,58,237,0.2)'
              }}>
                {/* Fake browser bar */}
                <div style={{ display: 'flex', gap: '6px', marginBottom: '1rem' }}>
                  {['#ef4444','#f59e0b','#10b981'].map(c => (
                    <div key={c} style={{ width: '10px', height: '10px', borderRadius: '50%', background: c }} />
                  ))}
                  <div style={{ flex: 1, background: 'rgba(255,255,255,0.05)', borderRadius: '4px', height: '10px', marginLeft: '0.5rem' }} />
                </div>

                {/* Dashboard mock */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  {[
                    { label: 'Active Projects', value: '24', color: '#7c3aed', icon: Briefcase },
                    { label: 'Team Members', value: '148', color: '#3b82f6', icon: Users },
                    { label: 'Invoices Due', value: '$42k', color: '#10b981', icon: DollarSign },
                    { label: 'Pending Leaves', value: '7', color: '#f59e0b', icon: Clock },
                  ].map(item => (
                    <div key={item.label} style={{
                      background: 'rgba(255,255,255,0.04)', borderRadius: '0.75rem', padding: '1rem',
                      border: `1px solid ${item.color}22`
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                        <span style={{ fontSize: '0.75rem', color: '#64748b' }}>{item.label}</span>
                        <item.icon size={14} color={item.color} />
                      </div>
                      <div style={{ fontSize: '1.5rem', fontWeight: '800', color: item.color }}>{item.value}</div>
                    </div>
                  ))}
                </div>

                {/* Mini chart */}
                <div style={{ marginTop: '0.75rem', background: 'rgba(255,255,255,0.03)', borderRadius: '0.75rem', padding: '1rem' }}>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '0.75rem' }}>Revenue vs Target — This Month</div>
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', height: '60px' }}>
                    {[65, 72, 58, 80, 90, 75, 88, 95, 78, 92, 85, 100].map((h, i) => (
                      <div key={i} style={{
                        flex: 1, height: `${h}%`, borderRadius: '3px 3px 0 0',
                        background: i === 11 ? 'linear-gradient(180deg,#7c3aed,#ec4899)' : 'rgba(124,58,237,0.3)'
                      }} />
                    ))}
                  </div>
                </div>

                {/* Recent activity */}
                <div style={{ marginTop: '0.75rem' }}>
                  {['Sarah approved 3 leave requests', 'Invoice #INV-0892 marked paid', 'New task: Q4 Planning assigned'].map((activity, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 0', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: ['#7c3aed','#10b981','#3b82f6'][i], flexShrink: 0 }} />
                      <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{activity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badges */}
              <div style={{
                position: 'absolute', top: '-20px', right: '-20px',
                background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
                borderRadius: '1rem', padding: '0.75rem 1rem', boxShadow: '0 10px 30px rgba(124,58,237,0.4)'
              }}>
                <div style={{ fontSize: '1.25rem', fontWeight: '800' }}>5 → 1</div>
                <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.8)' }}>Tools replaced</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SOCIAL PROOF BAR ─── */}
      <section style={{ background: 'rgba(17,17,48,0.6)', borderTop: '1px solid rgba(139,92,246,0.1)', borderBottom: '1px solid rgba(139,92,246,0.1)', padding: '1.5rem 2rem', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <span style={{ color: '#475569', fontSize: '0.875rem', whiteSpace: 'nowrap', flexShrink: 0 }}>Trusted by teams at</span>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
            {['Accenture', 'Deloitte', 'PwC', 'KPMG', 'McKinsey', 'BCG', 'Bain'].map(c => (
              <span key={c} style={{ color: '#334155', fontSize: '0.9rem', fontWeight: '700', letterSpacing: '-0.01em' }}>{c}</span>
            ))}
          </div>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '2rem', padding: '0.4rem 0.875rem' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }} />
            <span style={{ fontSize: '0.8rem', color: '#10b981', fontWeight: '600' }}>12,000+ businesses online now</span>
          </div>
        </div>
      </section>

      {/* ─── PROBLEM STATEMENT ─── */}
      <section style={{ padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="section-tag"><Shield size={12} /> The Problem We Solve</div>
            <h2 className="section-heading">Your team deserves better than <span className="gradient-text">5 disconnected tools</span></h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>Modern teams are drowning in tool-switching, data silos, and missed updates. NexaHub fixes all of it.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {painPoints.map((item, i) => (
              <div
                key={i}
                className="card"
                style={{ cursor: 'pointer', position: 'relative', overflow: 'hidden', minHeight: '220px' }}
                onMouseEnter={() => setFlippedCard(i)}
                onMouseLeave={() => setFlippedCard(null)}
              >
                {flippedCard !== i ? (
                  <div>
                    <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                      <span style={{ fontSize: '1.25rem' }}>{['😓', '🔒', '⏰'][i]}</span>
                    </div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.75rem', color: '#ef4444' }}>{item.problem}</h3>
                    <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.7' }}>{item.desc}</p>
                  </div>
                ) : (
                  <div style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.15), rgba(236,72,153,0.1))', borderRadius: '0.75rem', padding: '0', position: 'absolute', inset: '1.5rem' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                      <CheckCircle size={22} color="#10b981" />
                    </div>
                    <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '0.75rem', color: '#10b981' }}>NexaHub Solution</h3>
                    <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: '1.7' }}>{item.solution}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MODULE FEATURE SHOWCASE ─── */}
      <section style={{ padding: '6rem 2rem', background: 'rgba(10,10,30,0.5)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-tag"><Layers size={12} /> Platform Modules</div>
            <h2 className="section-heading">Every module your business needs, <span className="gradient-text">built in</span></h2>
          </div>

          {/* Module tabs */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '2.5rem' }}>
            {modules.map(m => (
              <button key={m.id} onClick={() => setActiveModule(m.id)}
                className={activeModule === m.id ? 'tab-active' : 'tab-inactive'}
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.65rem 1.25rem', borderRadius: '0.5rem', cursor: 'pointer', transition: 'all 0.2s', fontSize: '0.875rem', fontWeight: '600' }}>
                <m.icon size={15} color={activeModule === m.id ? m.color : '#64748b'} />
                {m.label}
              </button>
            ))}
          </div>

          {/* Active module content */}
          {activeModuleData && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: activeModuleData.bg, border: `1px solid ${activeModuleData.color}33`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <activeModuleData.icon size={26} color={activeModuleData.color} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: '800' }}>{activeModuleData.label}</h3>
                    <p style={{ color: '#64748b', fontSize: '0.875rem' }}>{activeModuleData.desc}</p>
                  </div>
                </div>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                  {activeModuleData.features.map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <CheckCircle size={16} color={activeModuleData.color} />
                      <span style={{ color: '#e2e8f0', fontSize: '0.95rem' }}>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link to={activeModuleData.to} className="btn-primary" style={{ background: `linear-gradient(135deg, ${activeModuleData.color}, #ec4899)` }}>
                  Explore {activeModuleData.label} <ArrowRight size={16} />
                </Link>
              </div>

              {/* Module preview */}
              <div style={{ background: 'rgba(13,13,43,0.8)', border: `1px solid ${activeModuleData.color}33`, borderRadius: '1.25rem', padding: '1.5rem' }}>
                <div style={{ fontSize: '0.75rem', color: '#475569', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                  <span>{activeModuleData.label} Dashboard</span>
                  <span style={{ color: activeModuleData.color }}>● Live</span>
                </div>
                {activeModuleData.features.slice(0, 4).map((f, i) => (
                  <div key={f} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem', background: 'rgba(255,255,255,0.03)', borderRadius: '0.5rem', marginBottom: '0.5rem', border: `1px solid ${activeModuleData.color}11` }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <activeModuleData.icon size={14} color={activeModuleData.color} />
                      <span style={{ fontSize: '0.85rem', color: '#e2e8f0' }}>{f}</span>
                    </div>
                    <div style={{ width: `${[85, 92, 67, 100][i]}%`, maxWidth: '80px', height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px', position: 'relative' }}>
                      <div style={{ width: `${[85, 92, 67, 100][i]}%`, height: '100%', background: activeModuleData.color, borderRadius: '2px' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section style={{ padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="section-tag">Simple Setup</div>
            <h2 className="section-heading">Up and running in <span className="gradient-text">3 simple steps</span></h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>No technical skills required. Your workspace is ready in minutes — not weeks.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', position: 'relative' }}>
            {/* Connector line */}
            <div style={{ position: 'absolute', top: '40px', left: 'calc(33.33% + 1rem)', width: 'calc(33.33% - 2rem)', height: '1px', background: 'linear-gradient(90deg, #7c3aed, transparent)', zIndex: 0 }} />
            <div style={{ position: 'absolute', top: '40px', left: 'calc(66.66% + 1rem)', width: 'calc(33.33% - 2rem)', height: '1px', background: 'linear-gradient(90deg, transparent, #ec4899)', zIndex: 0 }} />

            {steps.map((step, i) => (
              <div key={i} className="card" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <div style={{
                  width: '64px', height: '64px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 1.25rem', fontSize: '1.25rem', fontWeight: '800'
                }}>{step.num}</div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.75rem' }}>{step.title}</h3>
                <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.7' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section style={{ padding: '5rem 2rem', background: 'rgba(13,13,43,0.6)', borderTop: '1px solid rgba(139,92,246,0.1)', borderBottom: '1px solid rgba(139,92,246,0.1)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', textAlign: 'center' }}>
            {stats.map((s, i) => (
              <div key={i}>
                <div className="stat-number">{s.number}</div>
                <div style={{ color: '#64748b', fontSize: '0.9rem', marginTop: '0.25rem' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section style={{ padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="section-tag"><Star size={12} fill="currentColor" /> Customer Stories</div>
            <h2 className="section-heading">Real teams, <span className="gradient-text">real results</span></h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {testimonials.map((t, i) => (
              <div key={i} style={{ background: 'rgba(17,17,48,0.8)', border: '1px solid rgba(139,92,246,0.15)', borderRadius: '1.25rem', padding: '2rem', position: 'relative', overflow: 'hidden' }}>
                <span className="quote-mark">"</span>
                <div style={{ display: 'flex', gap: '2px', marginBottom: '1rem' }}>
                  {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="#f59e0b" color="#f59e0b" />)}
                </div>
                <p style={{ color: '#e2e8f0', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>"{t.quote}"</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: `hsl(${260 + i * 40}, 70%, 55%)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '0.9rem' }}>
                      {t.name[0]}
                    </div>
                    <div>
                      <div style={{ fontWeight: '600', fontSize: '0.875rem' }}>{t.name}</div>
                      <div style={{ color: '#64748b', fontSize: '0.78rem' }}>{t.role} · {t.company}</div>
                    </div>
                  </div>
                  <div style={{ background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.25)', borderRadius: '0.5rem', padding: '0.25rem 0.65rem', fontSize: '0.75rem', color: '#10b981', fontWeight: '600' }}>
                    {t.outcome}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INTEGRATIONS ─── */}
      <section style={{ padding: '5rem 2rem', background: 'rgba(10,10,30,0.5)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <div className="section-tag"><Globe size={12} /> Integrations</div>
          <h2 className="section-heading" style={{ marginBottom: '0.75rem' }}>Connects with your <span className="gradient-text">existing stack</span></h2>
          <p className="section-sub" style={{ margin: '0 auto 3rem' }}>50+ native integrations with the tools your team already uses.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '2rem' }}>
            {integrations.map(name => (
              <div key={name} style={{
                background: 'rgba(17,17,48,0.8)', border: '1px solid rgba(139,92,246,0.15)',
                borderRadius: '0.75rem', padding: '0.75rem 1.5rem',
                fontSize: '0.9rem', fontWeight: '600', color: '#e2e8f0',
                transition: 'all 0.2s', cursor: 'default'
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(124,58,237,0.4)'; e.currentTarget.style.color = '#a78bfa'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(139,92,246,0.15)'; e.currentTarget.style.color = '#e2e8f0'; }}>
                {name}
              </div>
            ))}
          </div>
          <Link to="/features" style={{ color: '#a78bfa', fontSize: '0.9rem', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            See all 50+ integrations <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section style={{ padding: '6rem 2rem', position: 'relative', overflow: 'hidden' }}>
        <div className="orb" style={{ width: '500px', height: '500px', background: 'rgba(124,58,237,0.25)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
        <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div className="section-tag"><Award size={12} /> 14-Day Free Trial</div>
          <h2 className="section-heading">Try NexaHub Free for <span className="gradient-text">14 Days</span></h2>
          <p className="section-sub" style={{ margin: '0 auto 2.5rem' }}>
            No credit card required. No setup fees. Full access to all features. Cancel anytime.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://workw.com/login" target="_blank" rel="noreferrer" className="btn-primary" style={{ fontSize: '1.05rem', padding: '0.9rem 2.25rem' }}>
              Start Free Trial <ArrowRight size={18} />
            </a>
            <Link to="/pricing" className="btn-secondary" style={{ fontSize: '1.05rem', padding: '0.9rem 2.25rem' }}>
              View Pricing
            </Link>
          </div>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginTop: '2rem', flexWrap: 'wrap' }}>
            {['No credit card', 'Cancel anytime', 'Full feature access', 'Setup in minutes'].map(t => (
              <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#64748b', fontSize: '0.85rem' }}>
                <CheckCircle size={14} color="#10b981" /> {t}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

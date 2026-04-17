import { Link } from 'react-router-dom';
import { Users, Briefcase, DollarSign, MessageSquare, Package, ArrowRight, CheckCircle, Smartphone, Lock, RefreshCw, Code, LayoutDashboard, FileSearch } from 'lucide-react';

const modules = [
  {
    icon: Users, label: 'People & HR', color: '#7c3aed', bg: 'rgba(124,58,237,0.12)',
    desc: 'Complete HR management — appraisals, leaves, payroll, and analytics.',
    to: '/features/hr', count: '15+ features'
  },
  {
    icon: Briefcase, label: 'Work & Projects', color: '#3b82f6', bg: 'rgba(59,130,246,0.12)',
    desc: 'Tasks, Gantt charts, leads pipeline, and team workload management.',
    to: '/features/projects', count: '12+ features'
  },
  {
    icon: DollarSign, label: 'Finance & Ops', color: '#10b981', bg: 'rgba(16,185,129,0.12)',
    desc: 'Invoices, quotations, expense tracking, and financial reporting.',
    to: '/features/finance', count: '10+ features'
  },
  {
    icon: MessageSquare, label: 'Communication', color: '#f59e0b', bg: 'rgba(245,158,11,0.12)',
    desc: 'Newsfeed, real-time messaging, group mailbox, and document library.',
    to: '/features/communication', count: '8+ features'
  },
  {
    icon: Package, label: 'Inventory', color: '#ec4899', bg: 'rgba(236,72,153,0.12)',
    desc: 'Asset tracking, item requests, requisitions, and stock management.',
    to: '/features/inventory', count: '9+ features'
  },
];

const platformCaps = [
  { icon: Smartphone, label: 'Mobile App', desc: 'iOS & Android apps for full platform access on the go' },
  { icon: Lock, label: 'Role-Based Access', desc: 'Granular permissions — every user sees exactly what they need' },
  { icon: RefreshCw, label: 'Real-Time Sync', desc: 'Changes across modules sync instantly across your entire team' },
  { icon: Code, label: 'API & Integrations', desc: 'REST API, webhooks, and 50+ native integrations' },
  { icon: LayoutDashboard, label: 'Custom Dashboards', desc: 'Build dashboards tailored to any role or department' },
  { icon: FileSearch, label: 'Audit Logs', desc: 'Full activity history for compliance and security' },
];

const comparisons = [
  { category: 'HR Management', nexahub: true, separate: 'BambooHR ($6/user)' },
  { category: 'Project Management', nexahub: true, separate: 'Jira ($8.15/user)' },
  { category: 'Finance & Invoicing', nexahub: true, separate: 'QuickBooks ($30/mo)' },
  { category: 'Team Communication', nexahub: true, separate: 'Slack ($8.75/user)' },
  { category: 'Inventory Tracking', nexahub: true, separate: 'Asset Panda ($custom)' },
];

export default function Features() {
  return (
    <div style={{ paddingTop: '72px' }}>
      {/* Hero */}
      <section style={{ padding: '5rem 2rem 4rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="dot-bg" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />
        <div className="orb" style={{ width: '500px', height: '500px', background: 'rgba(124,58,237,0.15)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>
          <div className="section-tag">Platform Features</div>
          <h1 className="section-heading">One platform. <span className="gradient-text">Every feature your business needs.</span></h1>
          <p className="section-sub" style={{ margin: '0 auto 2.5rem' }}>
            NexaHub brings HR, projects, finance, communication, and inventory into a single unified workspace — eliminating app-switching forever.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://workw.com/login" target="_blank" rel="noreferrer" className="btn-primary">
              Start Free Trial <ArrowRight size={16} />
            </a>
            <Link to="/pricing" className="btn-secondary">View Pricing</Link>
          </div>
        </div>
      </section>

      {/* Module cards */}
      <section style={{ padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {modules.map(m => (
              <div key={m.label} className="card hover-lift" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                  <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: m.bg, border: `1px solid ${m.color}33`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <m.icon size={24} color={m.color} />
                  </div>
                  <span style={{ fontSize: '0.75rem', color: m.color, fontWeight: '600', background: m.bg, padding: '0.25rem 0.65rem', borderRadius: '1rem' }}>{m.count}</span>
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.5rem' }}>{m.label}</h3>
                <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: '1.7', flex: 1, marginBottom: '1.25rem' }}>{m.desc}</p>
                <Link to={m.to} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: m.color, fontSize: '0.875rem', fontWeight: '600' }}>
                  Explore Module <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform-wide capabilities */}
      <section style={{ padding: '5rem 2rem', background: 'rgba(10,10,30,0.5)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-tag">Platform-Wide</div>
            <h2 className="section-heading">Capabilities that <span className="gradient-text">cut across every module</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {platformCaps.map(c => (
              <div key={c.label} className="card" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div className="icon-box"><c.icon size={18} color="#a78bfa" /></div>
                <div>
                  <h4 style={{ fontWeight: '700', marginBottom: '0.25rem' }}>{c.label}</h4>
                  <p style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: '1.6' }}>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-tag">Why NexaHub</div>
            <h2 className="section-heading">One subscription vs. <span className="gradient-text">5 separate tools</span></h2>
          </div>
          <div style={{ background: 'rgba(17,17,48,0.8)', border: '1px solid rgba(139,92,246,0.15)', borderRadius: '1.25rem', overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: 'rgba(124,58,237,0.1)', padding: '1rem 1.5rem', borderBottom: '1px solid rgba(139,92,246,0.15)' }}>
              <span style={{ fontWeight: '700', fontSize: '0.875rem', color: '#94a3b8' }}>Category</span>
              <span style={{ fontWeight: '700', fontSize: '0.875rem', color: '#a78bfa', textAlign: 'center' }}>NexaHub ✓</span>
              <span style={{ fontWeight: '700', fontSize: '0.875rem', color: '#64748b', textAlign: 'center' }}>Separate Tools</span>
            </div>
            {comparisons.map((c, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', padding: '1rem 1.5rem', borderBottom: i < comparisons.length - 1 ? '1px solid rgba(139,92,246,0.08)' : 'none', alignItems: 'center' }}>
                <span style={{ fontWeight: '600', fontSize: '0.9rem' }}>{c.category}</span>
                <div style={{ textAlign: 'center' }}><CheckCircle size={20} color="#10b981" style={{ margin: '0 auto' }} /></div>
                <span style={{ color: '#64748b', fontSize: '0.8rem', textAlign: 'center' }}>{c.separate}</span>
              </div>
            ))}
            <div style={{ padding: '1.25rem 1.5rem', background: 'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(236,72,153,0.05))' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', alignItems: 'center' }}>
                <span style={{ fontWeight: '700' }}>Total Cost</span>
                <span style={{ textAlign: 'center', fontWeight: '800', color: '#10b981', fontSize: '1.1rem' }}>One plan</span>
                <span style={{ color: '#ef4444', fontSize: '0.875rem', textAlign: 'center' }}>$50+/user/mo combined</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 2rem', background: 'rgba(10,10,30,0.5)', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 className="section-heading">Ready to explore <span className="gradient-text">every feature?</span></h2>
          <p className="section-sub" style={{ margin: '0 auto 2rem' }}>Start your free 14-day trial and see NexaHub in action.</p>
          <a href="https://workw.com/login" target="_blank" rel="noreferrer" className="btn-primary" style={{ fontSize: '1rem' }}>
            Start Free — No Credit Card <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}

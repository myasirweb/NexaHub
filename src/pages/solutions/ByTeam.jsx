import { useState } from 'react';
import { ArrowRight, CheckCircle, Users, DollarSign, Settings, Briefcase, TrendingUp, Monitor } from 'lucide-react';

const teams = [
  {
    id: 'hr', icon: Users, color: '#7c3aed', label: 'HR Team',
    headline: 'NexaHub for HR Teams',
    desc: 'Everything your HR team needs — from recruitment to offboarding — in one platform that actually makes compliance easy.',
    modules: ['People & HR Module', 'Leave & Attendance', 'Appraisals & Reviews', 'Complaints Portal'],
    workflow: [
      { step: 'Morning', action: 'Review 3 pending leave requests → approve with one click' },
      { step: 'Midday', action: 'Check appraisal cycle status → send automated reminders' },
      { step: 'Afternoon', action: 'Post company policy update to Newsfeed' },
    ],
    features: ['360° appraisals', 'Automated leave calendar', 'Grievance tracking', 'HR analytics dashboard'],
  },
  {
    id: 'finance', icon: DollarSign, color: '#10b981', label: 'Finance',
    headline: 'NexaHub for Finance Teams',
    desc: 'Connect your finance operations directly to project delivery and HR costs — no more reconciliation across disconnected tools.',
    modules: ['Finance & Ops Module', 'Invoicing & Quotes', 'Transaction Ledger', 'Expense Tracking'],
    workflow: [
      { step: 'Morning', action: 'Review overdue invoices → send automated payment reminders' },
      { step: 'Midday', action: 'Approve project quotation → auto-convert to invoice on milestone' },
      { step: 'Afternoon', action: 'Pull monthly expense breakdown report by department' },
    ],
    features: ['Professional invoicing', 'Quote-to-invoice flow', 'Dept expense breakdown', 'Accounting tool sync'],
  },
  {
    id: 'ops', icon: Settings, color: '#f59e0b', label: 'Operations',
    headline: 'NexaHub for Operations',
    desc: 'Full operational visibility — inventory, assets, procurement, and team workflows — coordinated from one command centre.',
    modules: ['Inventory Module', 'Asset Allocation', 'Requisition Management', 'Workflow Automation'],
    workflow: [
      { step: 'Morning', action: 'Check low-stock alerts → create purchase requisition with approval' },
      { step: 'Midday', action: 'Allocate returned laptop to new hire' },
      { step: 'Afternoon', action: 'Review pending item requests from team members' },
    ],
    features: ['Asset tracking', 'Stock alerts', 'Procurement flow', 'Multi-level approvals'],
  },
  {
    id: 'pm', icon: Briefcase, color: '#3b82f6', label: 'Project Management',
    headline: 'NexaHub for Project Managers',
    desc: 'From kickoff to delivery — every project, every task, and every team member\'s workload visible in one place.',
    modules: ['Work & Projects Module', 'Task Management', 'Gantt & Timeline', 'Team Workload'],
    workflow: [
      { step: 'Morning', action: 'Review project health dashboard → identify overdue tasks' },
      { step: 'Midday', action: 'Check team workload heatmap → rebalance assignments' },
      { step: 'Afternoon', action: 'Update milestone status → stakeholders notified automatically' },
    ],
    features: ['Gantt charts', 'Workload heatmap', 'Milestone tracking', 'Burndown charts'],
  },
  {
    id: 'sales', icon: TrendingUp, color: '#ec4899', label: 'Sales',
    headline: 'NexaHub for Sales Teams',
    desc: 'A complete sales pipeline from first lead to closed deal — with task management and finance integration built in.',
    modules: ['Leads Pipeline', 'Task Management', 'Finance Module', 'Communication'],
    workflow: [
      { step: 'Morning', action: 'Review leads pipeline → follow up on Proposal stage leads' },
      { step: 'Midday', action: 'Create and send quote → track when client views it' },
      { step: 'Afternoon', action: 'Mark deal Won → auto-trigger invoice creation' },
    ],
    features: ['Kanban leads pipeline', 'Lead scoring', 'Quote-to-invoice', 'Conversion analytics'],
  },
  {
    id: 'it', icon: Monitor, color: '#a78bfa', label: 'IT & Admin',
    headline: 'NexaHub for IT & Admin',
    desc: 'Role-based access, SSO, API integrations, and full audit logs — everything your IT team needs to manage NexaHub at scale.',
    modules: ['Admin Controls', 'User Provisioning', 'Audit Logs', 'API & Integrations'],
    workflow: [
      { step: 'Morning', action: 'Provision new hires via SCIM → roles auto-applied by department' },
      { step: 'Midday', action: 'Review audit log for a specific data export event' },
      { step: 'Afternoon', action: 'Configure new Webhook for CRM integration' },
    ],
    features: ['SCIM provisioning', 'SSO/SAML', 'Full audit logs', 'REST API & webhooks'],
  },
];

export default function ByTeam() {
  const [active, setActive] = useState('hr');
  const current = teams.find(t => t.id === active);

  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{ padding: '5rem 2rem 3rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="dot-bg" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
          <div className="section-tag">Solutions by Team</div>
          <h1 className="section-heading">Built for <span className="gradient-text">your team role</span></h1>
          <p className="section-sub" style={{ margin: '0 auto' }}>Job-function pages that speak directly to your team's daily challenges and workflows.</p>
        </div>
      </section>

      <section style={{ padding: '1rem 2rem 5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          {/* Team tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', marginBottom: '3.5rem', position: 'sticky', top: '72px', zIndex: 10, background: 'rgba(6,6,26,0.95)', padding: '1rem 0', backdropFilter: 'blur(10px)' }}>
            {teams.map(t => (
              <button key={t.id} onClick={() => setActive(t.id)}
                style={{
                  padding: '0.65rem 1.25rem', borderRadius: '0.5rem', cursor: 'pointer', transition: 'all 0.2s',
                  fontSize: '0.875rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem',
                  background: active === t.id ? `${t.color}22` : 'rgba(17,17,48,0.8)',
                  border: active === t.id ? `1px solid ${t.color}66` : '1px solid rgba(139,92,246,0.15)',
                  color: active === t.id ? 'white' : '#94a3b8',
                }}>
                <t.icon size={14} color={active === t.id ? t.color : '#64748b'} />
                {t.label}
              </button>
            ))}
          </div>

          {current && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: `${current.color}15`, border: `1px solid ${current.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <current.icon size={26} color={current.color} />
                  </div>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: '800' }}>{current.headline}</h2>
                </div>

                <p style={{ color: '#94a3b8', lineHeight: '1.7', marginBottom: '2rem' }}>{current.desc}</p>

                <h4 style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#64748b', marginBottom: '1rem' }}>Key Features</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '2rem' }}>
                  {current.features.map(f => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 0.75rem', background: `${current.color}0d`, borderRadius: '0.5rem', border: `1px solid ${current.color}20` }}>
                      <CheckCircle size={13} color={current.color} />
                      <span style={{ fontSize: '0.82rem', fontWeight: '600', color: '#e2e8f0' }}>{f}</span>
                    </div>
                  ))}
                </div>

                <a href="https://workw.com/login" target="_blank" rel="noreferrer" className="btn-primary" style={{ background: `linear-gradient(135deg, ${current.color}, #ec4899)` }}>
                  Invite your {current.label} <ArrowRight size={16} />
                </a>
              </div>

              <div>
                <div style={{ background: 'rgba(17,17,48,0.8)', border: '1px solid rgba(139,92,246,0.15)', borderRadius: '1.25rem', padding: '1.75rem' }}>
                  <h4 style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#64748b', marginBottom: '1.25rem' }}>A day in the life with NexaHub</h4>
                  {current.workflow.map((w, i) => (
                    <div key={i} style={{ display: 'flex', gap: '1rem', marginBottom: i < 2 ? '1.25rem' : 0 }}>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: `${current.color}20`, border: `1px solid ${current.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '0.65rem', fontWeight: '700', color: current.color }}>
                          {i + 1}
                        </div>
                        {i < 2 && <div style={{ width: '2px', flex: 1, background: `${current.color}20`, marginTop: '4px' }} />}
                      </div>
                      <div style={{ paddingTop: '4px', paddingBottom: i < 2 ? '1.25rem' : 0 }}>
                        <div style={{ fontSize: '0.75rem', color: current.color, fontWeight: '700', marginBottom: '0.25rem' }}>{w.step}</div>
                        <div style={{ fontSize: '0.875rem', color: '#94a3b8', lineHeight: '1.6' }}>{w.action}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: '1rem', background: `${current.color}0d`, border: `1px solid ${current.color}25`, borderRadius: '0.75rem', padding: '1rem' }}>
                  <h4 style={{ fontSize: '0.8rem', fontWeight: '700', color: current.color, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Modules Used</h4>
                  {current.modules.map(m => (
                    <div key={m} style={{ fontSize: '0.85rem', color: '#94a3b8', padding: '0.25rem 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{m}</div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

import { useState } from 'react';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';

const industries = [
  {
    id: 'construction', label: 'Construction', emoji: '🏗️',
    headline: 'Run every site from one command centre',
    pains: ['Site supervisors using WhatsApp for task updates', 'No visibility on equipment location or allocation', 'Invoice delays due to disconnected finance tools'],
    solutions: ['Task Management with site-level project boards', 'Asset Allocation for vehicles and equipment', 'Invoicing linked directly to project milestones'],
    quote: 'We manage 12 active sites. NexaHub is the first tool our foremen actually use daily.',
    author: 'Ahmed Hassan', role: 'COO, BuildRight Construction',
  },
  {
    id: 'healthcare', label: 'Healthcare', emoji: '🏥',
    headline: 'Compliance-ready operations for healthcare teams',
    pains: ['Shift scheduling across departments is chaos', 'Grievance handling lacks confidentiality', 'Supplier invoices tracked in spreadsheets'],
    solutions: ['Leave & Attendance with shift support', 'Anonymous Complaints & Grievances portal', 'Finance module with vendor payment tracking'],
    quote: 'HR compliance went from a headache to a system. NexaHub gave us the audit trail we needed.',
    author: 'Dr. Priya Nair', role: 'HR Director, MedCare Group',
  },
  {
    id: 'retail', label: 'Retail', emoji: '🛍️',
    headline: 'From store floor to headquarters — unified',
    pains: ['Store inventory tracked manually or in Excel', 'High staff turnover creates constant HR workload', 'No real-time view of sales team pipeline'],
    solutions: ['Inventory module for SKU and stock tracking', 'Streamlined HR onboarding and leave management', 'Leads Pipeline for B2B and franchise sales'],
    quote: 'We reduced stock discrepancies by 80% in the first month after switching to NexaHub.',
    author: 'Sarah Chen', role: 'Operations Head, RetailX',
  },
  {
    id: 'professional', label: 'Professional Services', emoji: '💼',
    headline: 'Deliver client work faster, bill without delays',
    pains: ['Project status scattered across email and tools', 'Finance and delivery teams work in silos', 'No centralised client communication record'],
    solutions: ['Projects + Tasks for client delivery', 'Invoicing tied to project milestones', 'Communication module for client-linked threads'],
    quote: 'Billing is now tied to project completion. We\'ve reduced invoice disputes by 60%.',
    author: 'Michael Torres', role: 'MD, Apex Advisory',
  },
  {
    id: 'startups', label: 'Startups', emoji: '🚀',
    headline: 'One platform to run your entire startup',
    pains: ['Using free tools that don\'t scale', 'HR is done through WhatsApp and Google Sheets', 'No financial visibility until month-end'],
    solutions: ['Full HR module from day one', 'Finance for invoice, expense, and burn rate', 'Projects for team velocity and sprint tracking'],
    quote: 'NexaHub is what we needed at Series A. It scaled with us from 12 to 80 people.',
    author: 'Tanya Osei', role: 'CEO, Flowspark',
  },
  {
    id: 'enterprise', label: 'Enterprise', emoji: '🏢',
    headline: 'Enterprise-grade control at every level',
    pains: ['Multiple departments on different systems', 'No single source of truth for HR or finance', 'Audit and compliance trails are manual'],
    solutions: ['Unified workspace across all departments', 'Role-based access and SCIM provisioning', 'Full audit logs and compliance controls'],
    quote: 'We replaced 7 different enterprise tools. NexaHub became the OS of our company.',
    author: 'David Müller', role: 'CIO, Vantage Group (2,400 employees)',
  },
];

export default function ByIndustry() {
  const [active, setActive] = useState('construction');
  const current = industries.find(i => i.id === active);

  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{ padding: '5rem 2rem 3rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="dot-bg" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
          <div className="section-tag">Solutions by Industry</div>
          <h1 className="section-heading">NexaHub <span className="gradient-text">speaks your industry</span></h1>
          <p className="section-sub" style={{ margin: '0 auto' }}>Each industry solution is a targeted setup — speaking your language, solving your specific problems.</p>
        </div>
      </section>

      <section style={{ padding: '2rem 2rem 5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          {/* Industry tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', marginBottom: '3rem' }}>
            {industries.map(ind => (
              <button key={ind.id} onClick={() => setActive(ind.id)}
                style={{
                  padding: '0.65rem 1.25rem', borderRadius: '0.5rem', cursor: 'pointer', transition: 'all 0.2s',
                  fontSize: '0.875rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem',
                  background: active === ind.id ? 'linear-gradient(135deg, rgba(124,58,237,0.25), rgba(236,72,153,0.15))' : 'rgba(17,17,48,0.8)',
                  border: active === ind.id ? '1px solid rgba(124,58,237,0.5)' : '1px solid rgba(139,92,246,0.15)',
                  color: active === ind.id ? 'white' : '#94a3b8',
                }}>
                <span>{ind.emoji}</span> {ind.label}
              </button>
            ))}
          </div>

          {/* Active industry */}
          {current && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
              <div>
                <h2 style={{ fontSize: '1.75rem', fontWeight: '800', marginBottom: '1.5rem' }}>{current.headline}</h2>

                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#ef4444', marginBottom: '1rem' }}>Common Pain Points</h4>
                  {current.pains.map((p, i) => (
                    <div key={i} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem', alignItems: 'flex-start' }}>
                      <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                        <span style={{ fontSize: '0.6rem', color: '#ef4444' }}>✗</span>
                      </div>
                      <span style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.5' }}>{p}</span>
                    </div>
                  ))}
                </div>

                <div>
                  <h4 style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#10b981', marginBottom: '1rem' }}>NexaHub Solutions</h4>
                  {current.solutions.map((s, i) => (
                    <div key={i} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem', alignItems: 'flex-start' }}>
                      <CheckCircle size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ color: '#e2e8f0', fontSize: '0.9rem', lineHeight: '1.5' }}>{s}</span>
                    </div>
                  ))}
                </div>

                <a href="https://workw.com/login" target="_blank" rel="noreferrer" className="btn-primary" style={{ marginTop: '2rem' }}>
                  Start Free for {current.label} <ArrowRight size={16} />
                </a>
              </div>

              <div>
                <div style={{ background: 'rgba(17,17,48,0.8)', border: '1px solid rgba(139,92,246,0.2)', borderRadius: '1.25rem', padding: '2rem' }}>
                  <div style={{ display: 'flex', gap: '2px', marginBottom: '1rem' }}>
                    {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="#f59e0b" color="#f59e0b" />)}
                  </div>
                  <span className="quote-mark">"</span>
                  <p style={{ color: '#e2e8f0', fontSize: '1rem', lineHeight: '1.7', marginBottom: '1.5rem', fontStyle: 'italic' }}>"{current.quote}"</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #7c3aed, #ec4899)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700' }}>
                      {current.author[0]}
                    </div>
                    <div>
                      <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>{current.author}</div>
                      <div style={{ color: '#64748b', fontSize: '0.8rem' }}>{current.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

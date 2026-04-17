import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, X, ArrowRight, Shield, Zap, Star } from 'lucide-react';

const plans = [
  {
    name: 'Free', price: { monthly: 0, annual: 0 }, period: 'forever',
    desc: 'Perfect for small teams getting started', users: 'Up to 5 users',
    color: '#64748b', popular: false,
    features: ['5 users', 'Basic HR module', 'Task management', '3 active projects', '1GB storage', 'Email support'],
    cta: 'Get Started Free',
  },
  {
    name: 'Starter', price: { monthly: 12, annual: 9 }, period: 'per user/month',
    desc: 'For growing teams that need more power', users: 'Up to 25 users',
    color: '#3b82f6', popular: false,
    features: ['25 users', 'Full HR module', 'Finance module', 'Unlimited projects', '10GB storage', 'Communication module', 'Priority email support', 'Custom dashboards'],
    cta: 'Start Free Trial',
  },
  {
    name: 'Business', price: { monthly: 24, annual: 18 }, period: 'per user/month',
    desc: 'The complete platform for scaling businesses', users: 'Unlimited users',
    color: '#7c3aed', popular: true,
    features: ['Unlimited users', 'All 5 modules', 'Advanced analytics', 'Inventory module', '100GB storage', 'API access', 'Live chat support', 'Custom workflows', 'Role-based access', 'Audit logs'],
    cta: 'Start Free Trial',
  },
  {
    name: 'Enterprise', price: { monthly: null, annual: null }, period: 'custom pricing',
    desc: 'For large orgs with advanced requirements', users: '200+ employees',
    color: '#ec4899', popular: false,
    features: ['Everything in Business', 'SSO / SAML 2.0', 'SCIM provisioning', 'Dedicated CSM', 'SLA-backed support', 'White-glove onboarding', 'Data residency options', 'Custom integrations', 'IP whitelisting', 'GDPR/compliance tools'],
    cta: 'Contact Sales',
  },
];

const featureTable = [
  { category: 'Users & Access', rows: [
    { feature: 'Users', free: '5', starter: '25', business: 'Unlimited', enterprise: 'Unlimited' },
    { feature: 'Role-based access', free: false, starter: true, business: true, enterprise: true },
    { feature: 'SSO / SAML', free: false, starter: false, business: false, enterprise: true },
    { feature: 'SCIM provisioning', free: false, starter: false, business: false, enterprise: true },
  ]},
  { category: 'HR Module', rows: [
    { feature: 'Leave & Attendance', free: 'Basic', starter: true, business: true, enterprise: true },
    { feature: 'Appraisals', free: false, starter: true, business: true, enterprise: true },
    { feature: 'Complaints Portal', free: false, starter: true, business: true, enterprise: true },
    { feature: 'HR Analytics', free: false, starter: false, business: true, enterprise: true },
  ]},
  { category: 'Projects', rows: [
    { feature: 'Active projects', free: '3', starter: 'Unlimited', business: 'Unlimited', enterprise: 'Unlimited' },
    { feature: 'Gantt charts', free: false, starter: true, business: true, enterprise: true },
    { feature: 'Leads pipeline', free: false, starter: true, business: true, enterprise: true },
    { feature: 'Workload heatmap', free: false, starter: false, business: true, enterprise: true },
  ]},
  { category: 'Finance', rows: [
    { feature: 'Invoicing', free: false, starter: '10/month', business: 'Unlimited', enterprise: 'Unlimited' },
    { feature: 'Quotations', free: false, starter: true, business: true, enterprise: true },
    { feature: 'Transaction ledger', free: false, starter: true, business: true, enterprise: true },
    { feature: 'Finance analytics', free: false, starter: false, business: true, enterprise: true },
  ]},
  { category: 'Storage & API', rows: [
    { feature: 'Storage', free: '1GB', starter: '10GB', business: '100GB', enterprise: 'Custom' },
    { feature: 'API access', free: false, starter: false, business: true, enterprise: true },
    { feature: 'Webhooks', free: false, starter: false, business: true, enterprise: true },
  ]},
];

const addOns = [
  { name: 'Extra Storage', price: '$5/mo per 50GB' },
  { name: 'Advanced Analytics', price: '$8/user/mo' },
  { name: 'Dedicated CSM', price: 'Enterprise add-on' },
  { name: 'Custom Integrations', price: 'From $200/mo' },
  { name: 'White Labelling', price: 'Enterprise add-on' },
];

const faqs = [
  { q: 'Can I change plans later?', a: 'Yes — upgrade or downgrade anytime. Changes are prorated to your billing cycle.' },
  { q: 'What happens to my data if I cancel?', a: 'Your data is retained for 30 days after cancellation. You can export everything before that.' },
  { q: 'Is there a free trial on paid plans?', a: 'Yes, all paid plans include a 14-day free trial. No credit card required to start.' },
  { q: 'How does user counting work?', a: 'Only active users are counted. Deactivated or invited-but-not-joined users are not billed.' },
  { q: 'Do you offer non-profit discounts?', a: 'Yes — verified non-profits receive 40% off all paid plans. Contact our team to apply.' },
  { q: 'Can we pay annually?', a: 'Yes — annual billing saves up to 25% compared to monthly. Switch anytime in your billing settings.' },
  { q: 'Do all modules come with every plan?', a: 'Business and Enterprise plans include all 5 modules. Starter includes HR, Projects, Finance, and Communication.' },
  { q: 'Is there an onboarding fee?', a: 'No setup fees on any plan. Enterprise customers get white-glove onboarding included.' },
];

function Check({ value, color = '#10b981' }) {
  if (value === true) return <CheckCircle size={16} color={color} style={{ margin: '0 auto', display: 'block' }} />;
  if (value === false) return <X size={16} color="#334155" style={{ margin: '0 auto', display: 'block' }} />;
  return <span style={{ fontSize: '0.8rem', color: '#94a3b8', display: 'block', textAlign: 'center' }}>{value}</span>;
}

export default function Pricing() {
  const [annual, setAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div style={{ paddingTop: '72px' }}>
      {/* Hero */}
      <section style={{ padding: '5rem 2rem 3rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="dot-bg" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-tag">Pricing</div>
          <h1 className="section-heading">Simple pricing. <span className="gradient-text">No surprises.</span></h1>
          <p className="section-sub" style={{ margin: '0 auto 2rem' }}>Every plan includes a 14-day free trial. No credit card required.</p>

          {/* Billing toggle */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', background: 'rgba(17,17,48,0.8)', border: '1px solid rgba(139,92,246,0.2)', borderRadius: '2rem', padding: '0.5rem 1rem' }}>
            <button onClick={() => setAnnual(false)} style={{ background: !annual ? 'rgba(124,58,237,0.3)' : 'transparent', border: 'none', borderRadius: '1rem', padding: '0.4rem 1rem', color: !annual ? 'white' : '#64748b', cursor: 'pointer', fontSize: '0.875rem', fontWeight: '600', transition: 'all 0.2s' }}>
              Monthly
            </button>
            <button onClick={() => setAnnual(true)} style={{ background: annual ? 'rgba(124,58,237,0.3)' : 'transparent', border: 'none', borderRadius: '1rem', padding: '0.4rem 1rem', color: annual ? 'white' : '#64748b', cursor: 'pointer', fontSize: '0.875rem', fontWeight: '600', transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Annual
              <span style={{ background: 'linear-gradient(135deg, #7c3aed, #ec4899)', color: 'white', fontSize: '0.7rem', fontWeight: '700', padding: '0.15rem 0.5rem', borderRadius: '1rem' }}>Save 25%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Plan cards */}
      <section style={{ padding: '2rem 2rem 5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem', alignItems: 'start' }}>
            {plans.map(plan => (
              <div key={plan.name} style={{
                background: plan.popular ? 'linear-gradient(135deg, rgba(124,58,237,0.15), rgba(236,72,153,0.08))' : 'rgba(17,17,48,0.8)',
                border: plan.popular ? '1px solid rgba(124,58,237,0.5)' : '1px solid rgba(139,92,246,0.15)',
                borderRadius: '1.25rem', padding: '2rem',
                position: 'relative',
                transform: plan.popular ? 'scale(1.04)' : 'none',
                zIndex: plan.popular ? 1 : 0,
              }}>
                {plan.popular && (
                  <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)' }}>
                    <span className="popular-badge">Most Popular</span>
                  </div>
                )}

                <div style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '0.25rem', color: plan.color }}>{plan.name}</h3>
                  <p style={{ color: '#64748b', fontSize: '0.8rem', marginBottom: '1rem' }}>{plan.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem', marginBottom: '0.25rem' }}>
                    {plan.price.monthly === null ? (
                      <span style={{ fontSize: '1.75rem', fontWeight: '800' }}>Custom</span>
                    ) : (
                      <>
                        <span style={{ fontSize: '2rem', fontWeight: '900' }}>${annual ? plan.price.annual : plan.price.monthly}</span>
                        {plan.price.monthly > 0 && <span style={{ color: '#64748b', fontSize: '0.8rem' }}>/user/mo</span>}
                      </>
                    )}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#475569' }}>{plan.users}</div>
                </div>

                <a href={plan.name === 'Enterprise' ? '#contact' : 'https://workw.com/login'} target={plan.name === 'Enterprise' ? undefined : '_blank'} rel={plan.name === 'Enterprise' ? undefined : 'noreferrer'}
                  className={plan.popular ? 'btn-primary' : 'btn-outline'}
                  style={{ display: 'block', textAlign: 'center', marginBottom: '1.75rem', justifyContent: 'center', width: '100%', boxSizing: 'border-box' }}>
                  {plan.cta}
                </a>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {plan.features.map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: '#94a3b8' }}>
                      <CheckCircle size={13} color={plan.color} style={{ flexShrink: 0 }} /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section style={{ padding: '4rem 2rem', background: 'rgba(10,10,30,0.5)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 className="section-heading" style={{ textAlign: 'center', marginBottom: '3rem' }}>Full feature <span className="gradient-text">comparison</span></h2>
          <div style={{ background: 'rgba(17,17,48,0.8)', border: '1px solid rgba(139,92,246,0.15)', borderRadius: '1.25rem', overflow: 'hidden' }}>
            {/* Header */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', padding: '1rem 1.5rem', background: 'rgba(124,58,237,0.1)', borderBottom: '1px solid rgba(139,92,246,0.15)' }}>
              <span style={{ fontWeight: '700', fontSize: '0.85rem', color: '#94a3b8' }}>Feature</span>
              {['Free', 'Starter', 'Business', 'Enterprise'].map(p => (
                <span key={p} style={{ fontWeight: '700', fontSize: '0.85rem', textAlign: 'center', color: p === 'Business' ? '#a78bfa' : '#94a3b8' }}>{p}</span>
              ))}
            </div>

            {featureTable.map((cat, ci) => (
              <div key={cat.category}>
                <div style={{ padding: '0.75rem 1.5rem', background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid rgba(139,92,246,0.06)' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{cat.category}</span>
                </div>
                {cat.rows.map((row, ri) => (
                  <div key={row.feature} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', padding: '0.875rem 1.5rem', borderBottom: '1px solid rgba(139,92,246,0.06)', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.875rem', color: '#e2e8f0' }}>{row.feature}</span>
                    <Check value={row.free} />
                    <Check value={row.starter} />
                    <Check value={row.business} color="#a78bfa" />
                    <Check value={row.enterprise} color="#ec4899" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section style={{ padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 className="section-heading" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>Optional <span className="gradient-text">Add-ons</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
            {addOns.map(a => (
              <div key={a.name} className="card" style={{ textAlign: 'center' }}>
                <h4 style={{ fontWeight: '700', marginBottom: '0.5rem', fontSize: '0.95rem' }}>{a.name}</h4>
                <span style={{ color: '#a78bfa', fontSize: '0.85rem', fontWeight: '600' }}>{a.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '4rem 2rem', background: 'rgba(10,10,30,0.5)' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <h2 className="section-heading" style={{ textAlign: 'center', marginBottom: '3rem' }}>Frequently asked <span className="gradient-text">questions</span></h2>
          {faqs.map((faq, i) => (
            <div key={i} style={{ borderBottom: '1px solid rgba(139,92,246,0.1)', overflow: 'hidden' }}>
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{ width: '100%', background: 'none', border: 'none', padding: '1.25rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', color: 'white', textAlign: 'left' }}>
                <span style={{ fontWeight: '600', fontSize: '0.95rem' }}>{faq.q}</span>
                <span style={{ color: '#7c3aed', fontSize: '1.25rem', flexShrink: 0, marginLeft: '1rem' }}>{openFaq === i ? '−' : '+'}</span>
              </button>
              {openFaq === i && (
                <div style={{ paddingBottom: '1.25rem', color: '#64748b', fontSize: '0.9rem', lineHeight: '1.7' }}>{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Enterprise callout */}
      <section style={{ padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', background: 'rgba(17,17,48,0.8)', border: '1px solid rgba(139,92,246,0.2)', borderRadius: '1.5rem', padding: '3rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.75rem' }}>Need 200+ seats or custom compliance?</h2>
          <p style={{ color: '#64748b', marginBottom: '2rem' }}>Our enterprise team will build the right solution for your organisation.</p>
          <Link to="/enterprise" className="btn-primary" style={{ fontSize: '1rem' }}>Talk to our Sales Team <ArrowRight size={16} /></Link>
        </div>
      </section>

      {/* Trust footer */}
      <section style={{ padding: '2rem', borderTop: '1px solid rgba(139,92,246,0.1)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
          {['Bank-grade encryption', 'No setup fees', 'Cancel any time', '14-day free trial', 'Priority support on all plans'].map(t => (
            <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748b', fontSize: '0.85rem' }}>
              <Shield size={14} color="#10b981" /> {t}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

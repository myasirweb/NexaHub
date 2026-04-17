import { ArrowRight, Shield, Server, Users, Zap, Headphones, ArrowUpRight, CheckCircle, Star, Lock, Globe } from 'lucide-react';

const specs = [
  { label: 'Uptime SLA', value: '99.9%' },
  { label: 'Max Users', value: 'Unlimited' },
  { label: 'Data Residency', value: 'EU / US / APAC' },
  { label: 'API Rate Limit', value: '10,000 req/min' },
];

const security = [
  { icon: Lock, label: 'SSO / SAML 2.0', desc: 'Single sign-on for all enterprise identity providers' },
  { icon: Shield, label: 'RBAC', desc: 'Role-based access control with granular permissions' },
  { icon: Globe, label: 'GDPR Compliant', desc: 'Full data subject rights and processing records' },
  { icon: Server, label: 'Encryption', desc: 'AES-256 at rest, TLS 1.3 in transit' },
  { icon: CheckCircle, label: 'Audit Logs', desc: 'Immutable event trail for every user action' },
  { icon: Zap, label: 'IP Whitelisting', desc: 'Restrict platform access to approved IP ranges' },
];

const adminFeatures = [
  'SCIM user provisioning', 'Department hierarchy', 'Custom approval workflows',
  'Data retention policies', 'System-wide audit trail', 'SSO-enforced login',
];

const testimonials = [
  { quote: 'We replaced 7 separate enterprise tools with NexaHub. It became the OS of our company.', name: 'David Müller', role: 'CIO', company: 'Vantage Group', employees: '2,400 employees' },
  { quote: 'GDPR compliance and audit logs were non-negotiables. NexaHub delivered both on day one.', name: 'Sophie Laurent', role: 'Head of Compliance', company: 'EuroFinance SA', employees: '800 employees' },
];

export default function Enterprise() {
  return (
    <div style={{ paddingTop: '72px' }}>
      {/* Hero — dark, authoritative */}
      <section style={{ padding: '6rem 2rem', position: 'relative', overflow: 'hidden', background: 'linear-gradient(180deg, #030310 0%, #06061a 100%)' }}>
        <div className="dot-bg" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
        <div className="orb" style={{ width: '700px', height: '700px', background: 'rgba(124,58,237,0.1)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.25)', color: '#fca5a5', padding: '0.35rem 1rem', borderRadius: '2rem', fontSize: '0.78rem', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            <Shield size={12} /> Enterprise Grade
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: '900', lineHeight: '1.1', marginBottom: '1.25rem' }}>
            Enterprise-grade.<br /><span className="gradient-text">NexaHub-simple.</span>
          </h1>
          <p className="section-sub" style={{ margin: '0 auto 2.5rem', maxWidth: '580px' }}>
            Designed for 200–5,000+ person organisations. Bank-grade security, unlimited scale, and a dedicated team behind you from day one.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '4rem' }}>
            <a href="https://workw.com/login" target="_blank" rel="noreferrer" className="btn-primary" style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}>
              Contact Sales <ArrowRight size={16} />
            </a>
            <a href="#" className="btn-secondary" style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}>
              Download Security Overview <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Enterprise logos row */}
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {['Vantage Group', 'EuroFinance', 'MedCare Group', 'BuildRight', 'RetailX'].map(c => (
              <span key={c} style={{ color: '#334155', fontSize: '0.875rem', fontWeight: '700' }}>{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Scale & Performance */}
      <section style={{ padding: '5rem 2rem', background: 'rgba(10,10,30,0.5)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-tag"><Server size={12} /> Scale & Performance</div>
            <h2 className="section-heading">Built to <span className="gradient-text">perform at any scale</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            {specs.map(s => (
              <div key={s.label} className="card" style={{ textAlign: 'center' }}>
                <div className="stat-number" style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>{s.value}</div>
                <div style={{ color: '#64748b', fontSize: '0.875rem' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-tag"><Shield size={12} /> Security & Compliance</div>
            <h2 className="section-heading">Security that your <span className="gradient-text">IT team will approve</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {security.map(s => (
              <div key={s.label} className="card" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <s.icon size={18} color="#f87171" />
                </div>
                <div>
                  <h4 style={{ fontWeight: '700', marginBottom: '0.25rem' }}>{s.label}</h4>
                  <p style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: '1.6' }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {['ISO 27001', 'SOC 2 Type II', 'GDPR Ready', 'HIPAA Compliant'].map(cert => (
              <div key={cert} style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '0.5rem', padding: '0.5rem 1.25rem', fontSize: '0.85rem', color: '#10b981', fontWeight: '700' }}>
                ✓ {cert}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admin controls */}
      <section style={{ padding: '5rem 2rem', background: 'rgba(10,10,30,0.5)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <div className="section-tag"><Users size={12} /> Admin Controls</div>
            <h2 className="section-heading">Advanced controls for <span className="gradient-text">enterprise admins</span></h2>
            <p style={{ color: '#94a3b8', lineHeight: '1.7', marginBottom: '2rem' }}>Full control over users, permissions, data, and compliance — without involving our support team for every change.</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              {adminFeatures.map(f => (
                <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle size={14} color="#10b981" />
                  <span style={{ fontSize: '0.875rem', color: '#e2e8f0' }}>{f}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: 'rgba(13,13,43,0.9)', border: '1px solid rgba(139,92,246,0.2)', borderRadius: '1.25rem', padding: '2rem' }}>
            <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '700' }}>Admin Console</div>
            {['Users & Provisioning', 'Permission Groups', 'Audit Log', 'Integrations', 'Data Retention'].map((item, i) => (
              <div key={item} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem', background: 'rgba(255,255,255,0.03)', borderRadius: '0.5rem', marginBottom: '0.5rem', border: '1px solid rgba(139,92,246,0.08)' }}>
                <span style={{ fontSize: '0.875rem', color: '#e2e8f0' }}>{item}</span>
                <span style={{ fontSize: '0.75rem', color: ['#10b981','#10b981','#f59e0b','#10b981','#3b82f6'][i], fontWeight: '600' }}>
                  {['Active','Configured','2 alerts','12 connected','90 days'][i]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Success */}
      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-tag"><Headphones size={12} /> Customer Success</div>
            <h2 className="section-heading">A dedicated team <span className="gradient-text">behind your success</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {[
              { label: 'Named CSM', desc: 'A dedicated Customer Success Manager assigned to your account from day one', icon: Users },
              { label: 'SLA Support', desc: '4-hour response SLA, dedicated Slack/Teams channel, priority escalation path', icon: Headphones },
              { label: 'White-Glove Onboarding', desc: 'Data migration, custom configuration, and user training — fully handled by our team', icon: Zap },
            ].map(c => (
              <div key={c.label} className="card" style={{ textAlign: 'center' }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                  <c.icon size={22} color="#a78bfa" />
                </div>
                <h3 style={{ fontWeight: '700', marginBottom: '0.75rem' }}>{c.label}</h3>
                <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: '1.7' }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '4rem 2rem', background: 'rgba(10,10,30,0.5)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            {testimonials.map((t, i) => (
              <div key={i} style={{ background: 'rgba(17,17,48,0.9)', border: '1px solid rgba(139,92,246,0.15)', borderRadius: '1.25rem', padding: '2rem' }}>
                <div style={{ display: 'flex', gap: '2px', marginBottom: '1rem' }}>
                  {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="#f59e0b" color="#f59e0b" />)}
                </div>
                <p style={{ color: '#e2e8f0', fontSize: '1rem', lineHeight: '1.7', marginBottom: '1.5rem', fontStyle: 'italic' }}>"{t.quote}"</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>{t.name}</div>
                    <div style={{ color: '#64748b', fontSize: '0.8rem' }}>{t.role} · {t.company}</div>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: '#64748b', background: 'rgba(255,255,255,0.04)', padding: '0.25rem 0.65rem', borderRadius: '1rem' }}>{t.employees}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form CTA */}
      <section style={{ padding: '5rem 2rem', background: '#030310' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="section-heading">Speak with an <span className="gradient-text">Enterprise Specialist</span></h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>Need 200+ seats or custom compliance requirements? We'll build the right solution for you.</p>
          </div>
          <div style={{ background: 'rgba(17,17,48,0.8)', border: '1px solid rgba(139,92,246,0.2)', borderRadius: '1.25rem', padding: '2.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              {['Full Name', 'Company Name'].map(f => (
                <div key={f}>
                  <label style={{ fontSize: '0.8rem', color: '#64748b', display: 'block', marginBottom: '0.4rem', fontWeight: '600' }}>{f}</label>
                  <input type="text" placeholder={f} style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(139,92,246,0.2)', borderRadius: '0.5rem', padding: '0.7rem 1rem', color: 'white', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box' }} />
                </div>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              {[{ label: 'Team Size', placeholder: 'e.g. 250 employees' }, { label: 'Your Role', placeholder: 'e.g. IT Director' }].map(f => (
                <div key={f.label}>
                  <label style={{ fontSize: '0.8rem', color: '#64748b', display: 'block', marginBottom: '0.4rem', fontWeight: '600' }}>{f.label}</label>
                  <input type="text" placeholder={f.placeholder} style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(139,92,246,0.2)', borderRadius: '0.5rem', padding: '0.7rem 1rem', color: 'white', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box' }} />
                </div>
              ))}
            </div>
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ fontSize: '0.8rem', color: '#64748b', display: 'block', marginBottom: '0.4rem', fontWeight: '600' }}>Message</label>
              <textarea placeholder="Tell us about your requirements..." rows={4} style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(139,92,246,0.2)', borderRadius: '0.5rem', padding: '0.7rem 1rem', color: 'white', fontSize: '0.9rem', outline: 'none', resize: 'vertical', boxSizing: 'border-box' }} />
            </div>
            <button className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '0.9rem' }}>
              Send Message <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

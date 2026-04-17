import { Search, MessageCircle, Mail, Phone, ChevronRight, CheckCircle, AlertCircle } from 'lucide-react';

const categories = [
  { name: 'HR Module', articles: 47, color: '#7c3aed' },
  { name: 'Work & Projects', articles: 38, color: '#3b82f6' },
  { name: 'Finance & Ops', articles: 29, color: '#10b981' },
  { name: 'Communication', articles: 22, color: '#f59e0b' },
  { name: 'Inventory', articles: 18, color: '#ec4899' },
  { name: 'Account & Billing', articles: 15, color: '#64748b' },
];

const troubleshooting = [
  { issue: 'Leave request not showing in approval queue', badge: 'Quick Fix' },
  { issue: 'Invoice PDF not generating correctly', badge: 'Quick Fix' },
  { issue: 'Team members not receiving email notifications', badge: 'Quick Fix' },
  { issue: 'Gantt chart not loading for large projects', badge: '5 min fix' },
  { issue: 'SSO login loop or redirect error', badge: '5 min fix' },
];

export default function Support() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{ padding: '5rem 2rem 4rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="dot-bg" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
          <div className="section-tag">Support</div>
          <h1 className="section-heading">We're here. <span className="gradient-text">Find your answer in seconds.</span></h1>
          <div style={{ position: 'relative', maxWidth: '520px', margin: '2rem auto 0' }}>
            <Search size={18} color="#64748b" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
            <input type="text" placeholder="Search 500+ articles..." style={{ width: '100%', background: 'rgba(17,17,48,0.9)', border: '1px solid rgba(139,92,246,0.3)', borderRadius: '0.75rem', padding: '0.875rem 1rem 0.875rem 3rem', color: 'white', fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }} />
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', marginTop: '1rem' }}>
            {['Leave requests', 'Invoice setup', 'User permissions', 'Integrations', 'Billing'].map(chip => (
              <button key={chip} style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)', borderRadius: '2rem', padding: '0.35rem 0.875rem', fontSize: '0.8rem', color: '#a78bfa', cursor: 'pointer' }}>
                {chip}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '3rem 2rem 5rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          {/* Help categories */}
          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: '800', marginBottom: '1.5rem' }}>Browse by Module</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
              {categories.map(c => (
                <div key={c.name} className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', border: `1px solid ${c.color}18` }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = `${c.color}40`}
                  onMouseLeave={e => e.currentTarget.style.borderColor = `${c.color}18`}>
                  <div>
                    <h4 style={{ fontWeight: '700', fontSize: '0.9rem', marginBottom: '0.25rem' }}>{c.name}</h4>
                    <span style={{ fontSize: '0.78rem', color: c.color }}>{c.articles} articles</span>
                  </div>
                  <ChevronRight size={16} color="#475569" />
                </div>
              ))}
            </div>
          </div>

          {/* Contact channels */}
          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: '800', marginBottom: '1.5rem' }}>Contact Support</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
              {[
                { icon: MessageCircle, color: '#10b981', label: 'Live Chat', desc: 'Chat with our team in real time', meta: 'Available Mon–Fri, 9am–6pm', cta: 'Start Chat' },
                { icon: Mail, color: '#3b82f6', label: 'Email / Ticket', desc: 'Submit a support ticket', meta: 'Reply within 4 hours SLA', cta: 'Submit Ticket' },
                { icon: Phone, color: '#7c3aed', label: 'Schedule a Call', desc: 'Book a 30-min support call', meta: 'Enterprise & Business plans', cta: 'Book a Call' },
              ].map(channel => (
                <div key={channel.label} className="card" style={{ textAlign: 'center', border: `1px solid ${channel.color}20` }}>
                  <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: `${channel.color}12`, border: `1px solid ${channel.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                    <channel.icon size={22} color={channel.color} />
                  </div>
                  <h3 style={{ fontWeight: '700', marginBottom: '0.35rem' }}>{channel.label}</h3>
                  <p style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: '0.5rem' }}>{channel.desc}</p>
                  <p style={{ color: '#475569', fontSize: '0.78rem', marginBottom: '1.25rem' }}>{channel.meta}</p>
                  <button className="btn-outline" style={{ width: '100%', justifyContent: 'center' }}>{channel.cta}</button>
                </div>
              ))}
            </div>
          </div>

          {/* Troubleshooting */}
          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: '800', marginBottom: '1.5rem' }}>Top Troubleshooting Guides</h2>
            {troubleshooting.map((t, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: 'rgba(17,17,48,0.6)', border: '1px solid rgba(139,92,246,0.1)', borderRadius: '0.75rem', marginBottom: '0.5rem', cursor: 'pointer' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(139,92,246,0.3)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(139,92,246,0.1)'}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle size={16} color="#10b981" />
                  <span style={{ fontSize: '0.9rem', color: '#e2e8f0' }}>{t.issue}</span>
                </div>
                <span style={{ fontSize: '0.72rem', color: '#10b981', fontWeight: '700', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)', padding: '0.2rem 0.65rem', borderRadius: '1rem', flexShrink: 0 }}>
                  {t.badge}
                </span>
              </div>
            ))}
          </div>

          {/* System status */}
          <div style={{ background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '1rem', padding: '1.25rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} className="pulse-glow" />
              <span style={{ fontWeight: '700', fontSize: '0.9rem' }}>All Systems Operational</span>
              <span style={{ color: '#64748b', fontSize: '0.8rem' }}>Web App · API · Mobile · Notifications</span>
            </div>
            <a href="#" style={{ color: '#10b981', fontSize: '0.85rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              View Status History <ChevronRight size={14} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

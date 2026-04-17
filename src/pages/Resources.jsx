import { Link } from 'react-router-dom';
import { BookOpen, Headphones, FileText, Search, TrendingUp, Video, Users, ArrowRight } from 'lucide-react';

const trending = [
  { title: 'How to Set Up Leave Policies in NexaHub', type: 'Guide', reads: '4.2k' },
  { title: 'Running Your First Appraisal Cycle', type: 'Tutorial', reads: '3.8k' },
  { title: 'Finance + Projects: The Integration Guide', type: 'Article', reads: '2.9k' },
];

export default function Resources() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{ padding: '5rem 2rem 4rem', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <div className="dot-bg" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />
        <div className="orb" style={{ width: '500px', height: '500px', background: 'rgba(124,58,237,0.15)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
          <div className="section-tag">Resources</div>
          <h1 className="section-heading">Everything you need to get the <span className="gradient-text">most from NexaHub</span></h1>
          {/* Global search */}
          <div style={{ position: 'relative', maxWidth: '500px', margin: '2rem auto' }}>
            <Search size={18} color="#64748b" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
            <input type="text" placeholder="Search guides, tutorials, articles..." style={{ width: '100%', background: 'rgba(17,17,48,0.9)', border: '1px solid rgba(139,92,246,0.3)', borderRadius: '0.75rem', padding: '0.875rem 1rem 0.875rem 3rem', color: 'white', fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }} />
          </div>
        </div>
      </section>

      {/* 3 Hub cards */}
      <section style={{ padding: '3rem 2rem 5rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '4rem' }}>
            {[
              { icon: BookOpen, color: '#7c3aed', bg: 'rgba(124,58,237,0.1)', label: 'Learn', desc: 'New to NexaHub? Start here', sub: 'Guides, tutorials, certifications', to: '/resources/learn', cta: 'Start Learning' },
              { icon: Headphones, color: '#3b82f6', bg: 'rgba(59,130,246,0.1)', label: 'Support', desc: 'Need help? We\'ve got you', sub: '500+ help articles & live chat', to: '/resources/support', cta: 'Get Support' },
              { icon: FileText, color: '#ec4899', bg: 'rgba(236,72,153,0.1)', label: 'Blog', desc: 'Stay sharp. Read the blog', sub: 'HR, PM, and ops insights', to: '/resources/blog', cta: 'Read Articles' },
            ].map(card => (
              <div key={card.label} className="card hover-lift" style={{ textAlign: 'center', padding: '2.5rem 2rem', border: `1px solid ${card.color}20` }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: card.bg, border: `1px solid ${card.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                  <card.icon size={28} color={card.color} />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '0.5rem' }}>{card.label}</h3>
                <p style={{ fontWeight: '700', color: '#e2e8f0', marginBottom: '0.35rem', fontSize: '0.95rem' }}>{card.desc}</p>
                <p style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: '1.5rem' }}>{card.sub}</p>
                <Link to={card.to} style={{ color: card.color, fontWeight: '700', fontSize: '0.875rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  {card.cta} <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>

          {/* Trending */}
          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: '800', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <TrendingUp size={20} color="#a78bfa" /> Trending this week
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
              {trending.map((t, i) => (
                <div key={i} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                  <div>
                    <span style={{ fontSize: '0.72rem', color: '#a78bfa', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{t.type}</span>
                    <h4 style={{ fontSize: '0.9rem', fontWeight: '700', marginTop: '0.25rem', lineHeight: '1.4', color: '#e2e8f0' }}>{t.title}</h4>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: '#475569', whiteSpace: 'nowrap' }}>{t.reads} reads</span>
                </div>
              ))}
            </div>
          </div>

          {/* Community & Newsletter */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Users size={22} color="#f59e0b" />
              </div>
              <div>
                <h3 style={{ fontWeight: '700', marginBottom: '0.35rem' }}>Join the Community</h3>
                <p style={{ color: '#64748b', fontSize: '0.85rem' }}>Connect with 5,000+ NexaHub users — share tips, ask questions, and attend monthly webinars.</p>
              </div>
            </div>
            <div className="card">
              <h3 style={{ fontWeight: '700', marginBottom: '0.35rem' }}>Weekly Newsletter</h3>
              <p style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: '1rem' }}>Tips, product updates, and guides straight to your inbox.</p>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <input type="email" placeholder="your@email.com" style={{ flex: 1, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(139,92,246,0.2)', borderRadius: '0.5rem', padding: '0.55rem 0.875rem', color: 'white', fontSize: '0.875rem', outline: 'none' }} />
                <button className="btn-primary" style={{ padding: '0.55rem 1rem', fontSize: '0.8rem' }}>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

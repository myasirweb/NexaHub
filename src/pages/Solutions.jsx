import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Users, Star } from 'lucide-react';

const industries = ['Retail', 'Manufacturing', 'Healthcare', 'Education', 'Construction', 'Professional Services'];
const teams = ['HR Team', 'Finance', 'Operations', 'Project Management', 'Sales', 'IT & Admin'];

export default function Solutions() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{ padding: '5rem 2rem 4rem', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <div className="dot-bg" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />
        <div className="orb" style={{ width: '500px', height: '500px', background: 'rgba(124,58,237,0.18)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>
          <div className="section-tag">Solutions</div>
          <h1 className="section-heading">Built for your industry. <span className="gradient-text">Designed for your team.</span></h1>
          <p className="section-sub" style={{ margin: '0 auto 3rem' }}>
            Most visitors think in problems and job titles, not feature lists. Find your perfect NexaHub setup — by industry or by team role.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', maxWidth: '600px', margin: '0 auto' }}>
            <Link to="/solutions/industry" style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.3)', borderRadius: '1rem', padding: '2rem', textAlign: 'left', transition: 'all 0.3s', display: 'block', textDecoration: 'none' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(124,58,237,0.6)'; e.currentTarget.style.background = 'rgba(124,58,237,0.15)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(124,58,237,0.3)'; e.currentTarget.style.background = 'rgba(124,58,237,0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              <Building2 size={28} color="#7c3aed" style={{ marginBottom: '0.75rem' }} />
              <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.5rem' }}>Find My Industry</h3>
              <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: '1.6', marginBottom: '1rem' }}>Healthcare, Construction, Retail and more — tailored solutions.</p>
              <span style={{ color: '#a78bfa', fontSize: '0.875rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>Explore <ArrowRight size={14} /></span>
            </Link>
            <Link to="/solutions/team" style={{ background: 'rgba(236,72,153,0.1)', border: '1px solid rgba(236,72,153,0.3)', borderRadius: '1rem', padding: '2rem', textAlign: 'left', transition: 'all 0.3s', display: 'block', textDecoration: 'none' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(236,72,153,0.6)'; e.currentTarget.style.background = 'rgba(236,72,153,0.15)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(236,72,153,0.3)'; e.currentTarget.style.background = 'rgba(236,72,153,0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              <Users size={28} color="#ec4899" style={{ marginBottom: '0.75rem' }} />
              <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.5rem' }}>Find My Team</h3>
              <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: '1.6', marginBottom: '1rem' }}>HR, Finance, Ops, Sales — personalised by your role.</p>
              <span style={{ color: '#ec4899', fontSize: '0.875rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>Explore <ArrowRight size={14} /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* Industry preview */}
      <section style={{ padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 className="section-heading" style={{ textAlign: 'center', marginBottom: '2rem' }}>Industries we <span className="gradient-text">specialise in</span></h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', marginBottom: '2rem' }}>
            {industries.map(ind => (
              <Link key={ind} to="/solutions/industry" style={{ background: 'rgba(17,17,48,0.8)', border: '1px solid rgba(139,92,246,0.15)', borderRadius: '0.75rem', padding: '0.75rem 1.5rem', fontSize: '0.9rem', fontWeight: '600', color: '#e2e8f0', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(124,58,237,0.4)'; e.currentTarget.style.color = '#a78bfa'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(139,92,246,0.15)'; e.currentTarget.style.color = '#e2e8f0'; }}>
                {ind} <ArrowRight size={12} />
              </Link>
            ))}
          </div>

          <h2 className="section-heading" style={{ textAlign: 'center', marginBottom: '2rem' }}>Built for <span className="gradient-text">every team</span></h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
            {teams.map(team => (
              <Link key={team} to="/solutions/team" style={{ background: 'rgba(236,72,153,0.08)', border: '1px solid rgba(236,72,153,0.15)', borderRadius: '0.75rem', padding: '0.75rem 1.5rem', fontSize: '0.9rem', fontWeight: '600', color: '#e2e8f0', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(236,72,153,0.4)'; e.currentTarget.style.color = '#f472b6'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(236,72,153,0.15)'; e.currentTarget.style.color = '#e2e8f0'; }}>
                {team} <ArrowRight size={12} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Customer story */}
      <section style={{ padding: '4rem 2rem', background: 'rgba(10,10,30,0.5)' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ background: 'rgba(17,17,48,0.9)', border: '1px solid rgba(139,92,246,0.2)', borderRadius: '1.5rem', padding: '3rem', position: 'relative', overflow: 'hidden' }}>
            <div className="orb" style={{ width: '300px', height: '300px', background: 'rgba(124,58,237,0.12)', top: '-100px', right: '-100px' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', gap: '2px', marginBottom: '1rem' }}>
                {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="#f59e0b" color="#f59e0b" />)}
              </div>
              <blockquote style={{ fontSize: '1.25rem', lineHeight: '1.7', color: '#e2e8f0', marginBottom: '2rem', fontStyle: 'italic' }}>
                "We moved our 340-person construction firm onto NexaHub in 3 weeks. HR, project tracking, and finance — all talking to each other. Saved us 22 hours of admin per week."
              </blockquote>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg, #7c3aed, #ec4899)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800' }}>A</div>
                  <div>
                    <div style={{ fontWeight: '700' }}>Ahmed Al-Rashid</div>
                    <div style={{ color: '#64748b', fontSize: '0.875rem' }}>COO · BuildRight Construction · 340 employees</div>
                  </div>
                </div>
                <div style={{ background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.25)', borderRadius: '0.5rem', padding: '0.5rem 1rem', fontSize: '0.85rem', color: '#10b981', fontWeight: '600' }}>
                  22 hrs/week saved
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h2 className="section-heading">Not sure where to start?</h2>
        <p className="section-sub" style={{ margin: '0 auto 2rem' }}>Talk to a NexaHub specialist — we'll match you to the right solution.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/enterprise" className="btn-primary">Talk to a Specialist <ArrowRight size={16} /></Link>
          <a href="https://workw.com/login" target="_blank" rel="noreferrer" className="btn-secondary">Start Free Trial</a>
        </div>
      </section>
    </div>
  );
}

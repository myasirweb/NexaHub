import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Users, Briefcase, DollarSign, MessageSquare, Package,
  Building2, ChevronDown, Menu, X, ArrowRight,
  BookOpen, Headphones, FileText, Zap
} from 'lucide-react';

const featureLinks = [
  { icon: Users, label: 'People & HR', desc: 'Appraisals, leaves, payroll', to: '/features/hr', color: '#7c3aed' },
  { icon: Briefcase, label: 'Work & Projects', desc: 'Tasks, Gantt, pipelines', to: '/features/projects', color: '#3b82f6' },
  { icon: DollarSign, label: 'Finance & Ops', desc: 'Invoices, quotes, ledger', to: '/features/finance', color: '#10b981' },
  { icon: MessageSquare, label: 'Communication', desc: 'Chat, newsfeed, docs', to: '/features/communication', color: '#f59e0b' },
  { icon: Package, label: 'Inventory', desc: 'Assets, requests, stock', to: '/features/inventory', color: '#ec4899' },
];

const solutionLinks = [
  { label: 'By Industry', desc: 'Healthcare, Retail, Construction…', to: '/solutions/industry' },
  { label: 'By Team', desc: 'HR, Finance, Operations, Sales…', to: '/solutions/team' },
];

const resourceLinks = [
  { icon: BookOpen, label: 'Learn', desc: 'Guides, tutorials, certifications', to: '/resources/learn' },
  { icon: Headphones, label: 'Support', desc: 'Help articles & live chat', to: '/resources/support' },
  { icon: FileText, label: 'Blog', desc: 'HR, PM, and ops insights', to: '/resources/blog' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  return (
    <nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      style={{ padding: '0 2rem' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>

        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
          <div style={{
            width: '36px', height: '36px', borderRadius: '8px',
            background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: '800', fontSize: '1.1rem', color: 'white'
          }}>N</div>
          <span style={{ fontSize: '1.25rem', fontWeight: '800', color: 'white', letterSpacing: '-0.02em' }}>
            Nexa<span style={{ color: '#a78bfa' }}>Hub</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="hidden-mobile">
          <NavItem label="Features" hasDropdown onToggle={() => setOpenDropdown(openDropdown === 'features' ? null : 'features')} isOpen={openDropdown === 'features'}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', minWidth: '520px' }}>
              {featureLinks.map(f => (
                <Link key={f.to} to={f.to} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', borderRadius: '0.5rem', transition: 'background 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(124,58,237,0.1)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: `${f.color}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <f.icon size={18} color={f.color} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: '600', color: 'white' }}>{f.label}</div>
                    <div style={{ fontSize: '0.78rem', color: '#64748b' }}>{f.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
            <div style={{ borderTop: '1px solid rgba(139,92,246,0.15)', marginTop: '0.75rem', paddingTop: '0.75rem' }}>
              <Link to="/features" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#a78bfa', fontSize: '0.85rem', fontWeight: '600' }}>
                <Zap size={14} /> View all features <ArrowRight size={14} />
              </Link>
            </div>
          </NavItem>

          <NavItem label="Solutions" hasDropdown onToggle={() => setOpenDropdown(openDropdown === 'solutions' ? null : 'solutions')} isOpen={openDropdown === 'solutions'}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', minWidth: '280px' }}>
              {solutionLinks.map(s => (
                <Link key={s.to} to={s.to} style={{ padding: '0.75rem', borderRadius: '0.5rem', transition: 'background 0.2s', display: 'block' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(124,58,237,0.1)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                  <div style={{ fontSize: '0.9rem', fontWeight: '600', color: 'white' }}>{s.label}</div>
                  <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '2px' }}>{s.desc}</div>
                </Link>
              ))}
            </div>
          </NavItem>

          <NavItem label="Enterprise" to="/enterprise" />

          <NavItem label="Resources" hasDropdown onToggle={() => setOpenDropdown(openDropdown === 'resources' ? null : 'resources')} isOpen={openDropdown === 'resources'}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', minWidth: '280px' }}>
              {resourceLinks.map(r => (
                <Link key={r.to} to={r.to} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', borderRadius: '0.5rem', transition: 'background 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(124,58,237,0.1)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                  <div className="icon-box"><r.icon size={16} color="#a78bfa" /></div>
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: '600', color: 'white' }}>{r.label}</div>
                    <div style={{ fontSize: '0.78rem', color: '#64748b' }}>{r.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </NavItem>

          <NavItem label="Pricing" to="/pricing" />
        </div>

        {/* CTA buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} className="hidden-mobile">
          <a href="https://workw.com/login" target="_blank" rel="noreferrer" className="btn-secondary" style={{ padding: '0.55rem 1.25rem', fontSize: '0.875rem' }}>
            Sign In
          </a>
          <a href="https://workw.com/login" target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: '0.55rem 1.25rem', fontSize: '0.875rem' }}>
            Start Free
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', display: 'none' }}
          className="mobile-only"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Overlay to close dropdown */}
      {openDropdown && (
        <div style={{ position: 'fixed', inset: 0, zIndex: -1 }} onClick={() => setOpenDropdown(null)} />
      )}

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{
          background: 'rgba(6,6,26,0.98)', backdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(139,92,246,0.15)',
          padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem'
        }}>
          {[
            { label: 'Home', to: '/' },
            { label: 'Features', to: '/features' },
            { label: 'HR', to: '/features/hr' },
            { label: 'Projects', to: '/features/projects' },
            { label: 'Finance', to: '/features/finance' },
            { label: 'Communication', to: '/features/communication' },
            { label: 'Inventory', to: '/features/inventory' },
            { label: 'Solutions', to: '/solutions' },
            { label: 'Enterprise', to: '/enterprise' },
            { label: 'Resources', to: '/resources' },
            { label: 'Pricing', to: '/pricing' },
          ].map(link => (
            <Link key={link.to} to={link.to} style={{ padding: '0.75rem 1rem', borderRadius: '0.5rem', color: '#e2e8f0', fontSize: '0.95rem', display: 'block',
              background: location.pathname === link.to ? 'rgba(124,58,237,0.15)' : 'transparent' }}>
              {link.label}
            </Link>
          ))}
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
            <a href="https://workw.com/login" target="_blank" rel="noreferrer" className="btn-secondary" style={{ flex: 1, justifyContent: 'center' }}>Sign In</a>
            <a href="https://workw.com/login" target="_blank" rel="noreferrer" className="btn-primary" style={{ flex: 1, justifyContent: 'center' }}>Start Free</a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .hidden-mobile { display: none !important; }
          .mobile-only { display: block !important; }
        }
        @media (min-width: 901px) {
          .mobile-only { display: none !important; }
        }
      `}</style>
    </nav>
  );
}

function NavItem({ label, to, hasDropdown, onToggle, isOpen, children }) {
  if (!hasDropdown) {
    return (
      <Link to={to} style={{
        padding: '0.5rem 0.75rem', borderRadius: '0.5rem', fontSize: '0.9rem', fontWeight: '500',
        color: '#e2e8f0', transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: '0.25rem'
      }}
        onMouseEnter={e => e.currentTarget.style.color = '#a78bfa'}
        onMouseLeave={e => e.currentTarget.style.color = '#e2e8f0'}>
        {label}
      </Link>
    );
  }

  return (
    <div style={{ position: 'relative' }}>
      <button onClick={onToggle} style={{
        background: 'none', border: 'none', cursor: 'pointer',
        padding: '0.5rem 0.75rem', borderRadius: '0.5rem', fontSize: '0.9rem', fontWeight: '500',
        color: isOpen ? '#a78bfa' : '#e2e8f0', transition: 'all 0.2s',
        display: 'flex', alignItems: 'center', gap: '0.25rem'
      }}>
        {label}
        <ChevronDown size={14} style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
      </button>

      {isOpen && (
        <div style={{
          position: 'absolute', top: 'calc(100% + 8px)', left: '50%', transform: 'translateX(-50%)',
          background: '#0d0d2b', border: '1px solid rgba(139,92,246,0.2)',
          borderRadius: '1rem', padding: '1rem', zIndex: 100,
          boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
          animation: 'fadeInUp 0.15s ease'
        }}>
          {children}
        </div>
      )}
    </div>
  );
}

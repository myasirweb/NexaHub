import { Link } from 'react-router-dom';
import { Globe, Link2, Play, Share2, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  Product: [
    { label: 'Features Overview', to: '/features' },
    { label: 'People & HR', to: '/features/hr' },
    { label: 'Work & Projects', to: '/features/projects' },
    { label: 'Finance & Ops', to: '/features/finance' },
    { label: 'Communication', to: '/features/communication' },
    { label: 'Inventory', to: '/features/inventory' },
  ],
  Solutions: [
    { label: 'By Industry', to: '/solutions/industry' },
    { label: 'By Team', to: '/solutions/team' },
    { label: 'Enterprise', to: '/enterprise' },
    { label: 'Pricing', to: '/pricing' },
    { label: 'Integrations', to: '/features' },
  ],
  Resources: [
    { label: 'Blog', to: '/resources/blog' },
    { label: 'Learn & Tutorials', to: '/resources/learn' },
    { label: 'Support Center', to: '/resources/support' },
    { label: 'API Docs', to: '/resources' },
    { label: 'Community', to: '/resources' },
  ],
  Company: [
    { label: 'About Us', to: '/' },
    { label: 'Careers', to: '/' },
    { label: 'Press Kit', to: '/' },
    { label: 'Contact', to: '/' },
    { label: 'Security', to: '/enterprise' },
  ],
};

const socials = [
  { icon: Globe, href: '#', label: 'Twitter' },
  { icon: Link2, href: '#', label: 'LinkedIn' },
  { icon: Play, href: '#', label: 'YouTube' },
  { icon: Share2, href: '#', label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer style={{ background: '#030310', borderTop: '1px solid rgba(139,92,246,0.12)', paddingTop: '4rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Top section */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr 1fr', gap: '3rem', marginBottom: '4rem' }}>

          {/* Brand */}
          <div>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <div style={{
                width: '36px', height: '36px', borderRadius: '8px',
                background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: '800', fontSize: '1.1rem', color: 'white'
              }}>W</div>
              <span style={{ fontSize: '1.2rem', fontWeight: '800', color: 'white', letterSpacing: '-0.02em' }}>
                Work<span style={{ color: '#a78bfa' }}>wise</span>
              </span>
            </Link>
            <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: '1.7', marginBottom: '1.5rem', maxWidth: '240px' }}>
              One unified platform for HR, projects, finance, communication, and inventory.
            </p>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {socials.map(s => (
                <a key={s.label} href={s.href} aria-label={s.label}
                  style={{
                    width: '36px', height: '36px', borderRadius: '8px',
                    background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#94a3b8', transition: 'all 0.2s'
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(124,58,237,0.2)'; e.currentTarget.style.color = '#a78bfa'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(139,92,246,0.1)'; e.currentTarget.style.color = '#94a3b8'; }}>
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 style={{ fontSize: '0.85rem', fontWeight: '700', color: 'white', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.25rem' }}>
                {category}
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {links.map(link => (
                  <li key={link.label}>
                    <Link to={link.to} style={{ color: '#64748b', fontSize: '0.875rem', transition: 'color 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#a78bfa'}
                      onMouseLeave={e => e.currentTarget.style.color = '#64748b'}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div style={{
          background: 'rgba(17,17,48,0.6)', border: '1px solid rgba(139,92,246,0.15)',
          borderRadius: '1rem', padding: '2rem', marginBottom: '3rem',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem',
          flexWrap: 'wrap'
        }}>
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.25rem' }}>Stay in the loop</h3>
            <p style={{ color: '#64748b', fontSize: '0.875rem' }}>Weekly product updates, HR tips, and ops insights.</p>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <input type="email" placeholder="Enter your email"
              style={{
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(139,92,246,0.25)',
                borderRadius: '0.5rem', padding: '0.65rem 1rem', color: 'white',
                fontSize: '0.875rem', outline: 'none', width: '260px'
              }} />
            <button className="btn-primary" style={{ padding: '0.65rem 1.5rem', fontSize: '0.875rem' }}>
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(139,92,246,0.1)', paddingTop: '1.5rem', paddingBottom: '2rem',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem'
        }}>
          <p style={{ color: '#475569', fontSize: '0.8rem' }}>
            © 2024 NexaHub. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '2rem' }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR'].map(item => (
              <a key={item} href="#" style={{ color: '#475569', fontSize: '0.8rem', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#a78bfa'}
                onMouseLeave={e => e.currentTarget.style.color = '#475569'}>
                {item}
              </a>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#475569', fontSize: '0.8rem' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }}></div>
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}

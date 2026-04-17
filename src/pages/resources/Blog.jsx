import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, User } from 'lucide-react';

const categories = ['All', 'HR & People', 'Project Management', 'Finance & Ops', 'Communication', 'Product Updates'];

const posts = [
  { cat: 'HR & People', emoji: '📋', title: '10 Leave Policy Mistakes That Are Costing Your Company', author: 'Ayesha Malik', date: 'Apr 10, 2026', read: '6 min', featured: true },
  { cat: 'Project Management', emoji: '📊', title: 'Gantt vs Kanban: When to Use Which (and When to Use Both)', author: 'James Chen', date: 'Apr 8, 2026', read: '8 min', featured: false },
  { cat: 'Finance & Ops', emoji: '💰', title: 'How to Reduce Invoice-to-Payment Time by 40%', author: 'Priya Sharma', date: 'Apr 6, 2026', read: '5 min', featured: false },
  { cat: 'HR & People', emoji: '⭐', title: 'The Complete Guide to Running 360° Appraisals Remotely', author: 'Tom Okafor', date: 'Apr 4, 2026', read: '10 min', featured: false },
  { cat: 'Communication', emoji: '💬', title: 'Why Your Team Keeps Missing Updates (And How to Fix It)', author: 'Sarah Lin', date: 'Apr 2, 2026', read: '4 min', featured: false },
  { cat: 'Product Updates', emoji: '🚀', title: "NexaHub Spring 2026: What's New in Every Module", author: 'NexaHub Team', date: 'Mar 30, 2026', read: '7 min', featured: false },
  { cat: 'Finance & Ops', emoji: '🗂️', title: 'Asset Tracking Without a Spreadsheet: A Practical Guide', author: 'Marcus Webb', date: 'Mar 28, 2026', read: '5 min', featured: false },
  { cat: 'Project Management', emoji: '📌', title: 'How to Build a Project Health Dashboard That PMs Actually Use', author: 'James Chen', date: 'Mar 25, 2026', read: '6 min', featured: false },
  { cat: 'HR & People', emoji: '🏆', title: 'Employee Recognition That Goes Beyond an Annual Award', author: 'Ayesha Malik', date: 'Mar 22, 2026', read: '4 min', featured: false },
];

const catColors = {
  'HR & People': '#7c3aed',
  'Project Management': '#3b82f6',
  'Finance & Ops': '#10b981',
  'Communication': '#f59e0b',
  'Product Updates': '#ec4899',
  'All': '#64748b',
};

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const featured = posts.find(p => p.featured);
  const filtered = (activeCategory === 'All' ? posts : posts.filter(p => p.cat === activeCategory)).filter(p => !p.featured);

  return (
    <div style={{ paddingTop: '72px' }}>

      {/* Featured post */}
      {featured && (
        <section style={{ padding: '4rem 2rem', position: 'relative', overflow: 'hidden' }}>
          <div className="dot-bg" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
          <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div className="section-tag">Blog</div>
            <Link to="/resources/blog/detail" style={{ textDecoration: 'none', display: 'block' }}>
              <div style={{
                background: 'rgba(17,17,48,0.9)', border: '1px solid rgba(139,92,246,0.2)',
                borderRadius: '1.5rem', padding: '3rem',
                display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '3rem', alignItems: 'center',
                transition: 'all 0.3s', cursor: 'pointer'
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(124,58,237,0.5)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(124,58,237,0.15)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(139,92,246,0.2)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                <div>
                  <span style={{ fontSize: '0.78rem', color: catColors[featured.cat], fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{featured.cat}</span>
                  <h1 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: '800', lineHeight: '1.25', margin: '0.75rem 0 1rem', color: '#fff' }}>{featured.title}</h1>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#64748b', fontSize: '0.85rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><User size={13} /> {featured.author}</div>
                    <span>{featured.date}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Clock size={13} /> {featured.read} read</div>
                  </div>
                  <span className="btn-primary" style={{ fontSize: '0.875rem', padding: '0.65rem 1.5rem' }}>
                    Read Article <ArrowRight size={15} />
                  </span>
                </div>
                <div style={{ background: 'rgba(124,58,237,0.1)', borderRadius: '1rem', height: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', border: '1px solid rgba(124,58,237,0.15)' }}>
                  <span style={{ fontSize: '4rem' }}>{featured.emoji}</span>
                  <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Featured Article</span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Category filter */}
      <section style={{ padding: '0.5rem 2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', position: 'sticky', top: '72px', zIndex: 10, background: 'rgba(6,6,26,0.95)', padding: '0.75rem 0', backdropFilter: 'blur(10px)' }}>
            {categories.map(c => (
              <button key={c} onClick={() => setActiveCategory(c)}
                style={{
                  padding: '0.5rem 1.1rem', borderRadius: '2rem', cursor: 'pointer', transition: 'all 0.2s',
                  fontSize: '0.85rem', fontWeight: '600', border: '1px solid',
                  background: activeCategory === c ? (catColors[c] || '#7c3aed') + '22' : 'transparent',
                  borderColor: activeCategory === c ? (catColors[c] || '#7c3aed') + '66' : 'rgba(139,92,246,0.15)',
                  color: activeCategory === c ? 'white' : '#64748b',
                }}>
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Article grid */}
      <section style={{ padding: '1.5rem 2rem 5rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
            {filtered.map((post, i) => (
              <Link key={i} to="/resources/blog/detail" style={{ textDecoration: 'none' }}>
                <div className="card hover-lift" style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ background: `${catColors[post.cat]}12`, borderRadius: '0.75rem', height: '130px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', fontSize: '2.5rem', border: `1px solid ${catColors[post.cat]}18` }}>
                    {post.emoji}
                  </div>
                  <span style={{ fontSize: '0.72rem', color: catColors[post.cat], fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{post.cat}</span>
                  <h3 style={{ fontWeight: '700', fontSize: '0.95rem', lineHeight: '1.45', margin: '0.4rem 0 0.75rem', color: '#e2e8f0', flex: 1 }}>{post.title}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#475569', fontSize: '0.78rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: catColors[post.cat], display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem', fontWeight: '700', color: '#fff' }}>
                        {post.author[0]}
                      </div>
                      {post.author.split(' ')[0]}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <Clock size={11} /> {post.read}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '4rem', color: '#475569' }}>
              No articles in this category yet.
            </div>
          )}

          {/* Bottom CTA */}
          <div style={{ marginTop: '3rem', background: 'linear-gradient(135deg, rgba(124,58,237,0.12), rgba(236,72,153,0.08))', border: '1px solid rgba(124,58,237,0.2)', borderRadius: '1rem', padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h3 style={{ fontWeight: '800', marginBottom: '0.35rem' }}>Ready to apply what you've read?</h3>
              <p style={{ color: '#64748b', fontSize: '0.875rem', margin: 0 }}>Try every module free for 14 days — no credit card needed.</p>
            </div>
            <a href="https://workw.com/login" target="_blank" rel="noreferrer" className="btn-primary">
              Start Free Trial <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

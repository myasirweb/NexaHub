import { Link } from 'react-router-dom';
import { Clock, ArrowRight, ArrowLeft, Share2, Bookmark, ThumbsUp, CheckCircle } from 'lucide-react';

const relatedPosts = [
  { cat: 'HR & People', color: '#7c3aed', emoji: '📊', title: 'The Complete Guide to Running 360° Appraisals Remotely', author: 'Tom Okafor', read: '10 min', date: 'Apr 4, 2026' },
  { cat: 'HR & People', color: '#7c3aed', emoji: '🏆', title: 'Employee Recognition That Goes Beyond an Annual Award', author: 'Ayesha Malik', read: '4 min', date: 'Mar 22, 2026' },
  { cat: 'Project Management', color: '#3b82f6', emoji: '📋', title: 'Gantt vs Kanban: When to Use Which (and When to Use Both)', author: 'James Chen', read: '8 min', date: 'Apr 8, 2026' },
];

export default function BlogDetail() {
  return (
    <div style={{ paddingTop: '72px', background: '#06061a' }}>

      {/* Back link */}
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '2rem 2rem 0' }}>
        <Link to="/resources/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#64748b', fontSize: '0.875rem', fontWeight: '600', transition: 'color 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.color = '#a78bfa'}
          onMouseLeave={e => e.currentTarget.style.color = '#64748b'}>
          <ArrowLeft size={16} /> Back to Blog
        </Link>
      </div>

      {/* Article header */}
      <header style={{ maxWidth: '860px', margin: '0 auto', padding: '2.5rem 2rem 2rem' }}>
        <span style={{ fontSize: '0.78rem', color: '#7c3aed', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.25)', padding: '0.3rem 0.875rem', borderRadius: '2rem' }}>
          HR & People
        </span>

        <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: '900', lineHeight: '1.2', margin: '1.25rem 0 1rem', color: '#ffffff' }}>
          10 Leave Policy Mistakes That Are Costing Your Company
        </h1>

        <p style={{ fontSize: '1.15rem', color: '#94a3b8', lineHeight: '1.75', marginBottom: '2rem' }}>
          Most companies set their leave policies once and forget them. Here are the 10 most common mistakes HR teams make — and exactly how to fix each one before they start costing you money and talent.
        </p>

        {/* Author + meta row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', paddingBottom: '2rem', borderBottom: '1px solid rgba(139,92,246,0.15)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'linear-gradient(135deg, #7c3aed, #ec4899)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '1rem' }}>A</div>
            <div>
              <div style={{ fontWeight: '700', fontSize: '0.95rem', color: '#e2e8f0' }}>Ayesha Malik</div>
              <div style={{ color: '#64748b', fontSize: '0.8rem' }}>Head of HR Content · NexaHub</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', color: '#64748b', fontSize: '0.82rem' }}>
            <span>Apr 10, 2026</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Clock size={13} /> 6 min read</div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(139,92,246,0.2)', borderRadius: '0.5rem', padding: '0.4rem 0.75rem', color: '#94a3b8', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem' }}>
                <Share2 size={13} /> Share
              </button>
              <button style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(139,92,246,0.2)', borderRadius: '0.5rem', padding: '0.4rem 0.75rem', color: '#94a3b8', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem' }}>
                <Bookmark size={13} /> Save
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Cover image */}
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 2rem 2.5rem' }}>
        <div style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(236,72,153,0.15))', borderRadius: '1.25rem', height: '320px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(124,58,237,0.2)', gap: '1rem' }}>
          <span style={{ fontSize: '5rem' }}>📋</span>
          <span style={{ color: '#64748b', fontSize: '0.875rem' }}>Leave Policy Management · HR Best Practices</span>
        </div>
      </div>

      {/* Article body */}
      <article style={{ maxWidth: '860px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Intro */}
        <p style={para}>
          Your leave policy is one of the most visible expressions of your company culture. Employees notice when it's unclear, unfair, or outdated — and they vote with their resignations. Yet most HR teams set leave rules once during company formation and revisit them only when something breaks.
        </p>
        <p style={para}>
          We analysed data from over 3,000 companies using NexaHub and identified the 10 most costly leave policy mistakes. Here they are — with practical fixes for each.
        </p>

        <h2 style={h2}>1. No Written Leave Policy at All</h2>
        <p style={para}>
          Believe it or not, 31% of small businesses operate entirely on verbal leave agreements. This creates inconsistency between managers, breeds resentment among employees, and exposes you to legal liability.
        </p>
        <div style={callout('#7c3aed')}>
          <strong style={{ color: '#a78bfa' }}>The Fix:</strong> Document every leave type — annual, sick, unpaid, maternity, paternity, and emergency — with clear rules on accrual, approval flow, and carry-over. Make it accessible to every employee on day one.
        </div>

        <h2 style={h2}>2. Treating All Leave Types the Same</h2>
        <p style={para}>
          Annual leave, sick leave, and bereavement leave all have different emotional contexts and legal implications. Lumping them into a single "PTO bucket" causes real problems — employees burn sick days for holidays, then have none left when they're actually ill.
        </p>
        <ul style={ul}>
          <li style={li}>Annual leave — planned, pre-approved</li>
          <li style={li}>Sick leave — unplanned, requires medical documentation for extended absences</li>
          <li style={li}>Bereavement — immediate, non-negotiable, culturally sensitive</li>
          <li style={li}>Emergency leave — unforeseeable, handled case by case</li>
        </ul>

        <h2 style={h2}>3. Manual Approval Chains That Create Bottlenecks</h2>
        <p style={para}>
          When an employee submits a leave request via email, it lands in a manager's inbox — and may sit there for days. Meanwhile, the employee can't plan, and the manager feels buried. This delays decisions and creates anxiety on both sides.
        </p>
        <p style={para}>
          Teams using NexaHub's one-click approval flow report that 89% of leave requests are approved or rejected within 4 hours — compared to a 2.3-day average for email-based processes.
        </p>

        {/* Mid-article CTA */}
        <div style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.15), rgba(236,72,153,0.1))', border: '1px solid rgba(124,58,237,0.3)', borderRadius: '1rem', padding: '1.75rem 2rem', margin: '2.5rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: '0.75rem', color: '#a78bfa', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>NexaHub HR Module</div>
            <p style={{ fontWeight: '700', color: '#e2e8f0', margin: 0 }}>Automate your entire leave management — approvals, balance tracking, and policy enforcement.</p>
          </div>
          <a href="https://workw.com/login" target="_blank" rel="noreferrer" className="btn-primary" style={{ flexShrink: 0, fontSize: '0.875rem' }}>
            Try HR Free <ArrowRight size={15} />
          </a>
        </div>

        <h2 style={h2}>4. Not Tracking Leave Balances in Real Time</h2>
        <p style={para}>
          If employees don't know how many days they have left, they either over-request (risking unpaid leave surprises) or under-request (accumulating large balances that become a financial liability on your books).
        </p>
        <div style={callout('#10b981')}>
          <strong style={{ color: '#10b981' }}>Best Practice:</strong> Give every employee a self-service leave balance dashboard. When they can see their entitlement, pending requests, and approved leaves in real time, the volume of "how many days do I have?" queries to HR drops by over 70%.
        </div>

        <h2 style={h2}>5. Ignoring Carry-Over Rules (or Having None)</h2>
        <p style={para}>
          What happens to unused leave at year end? Without a clear policy, you're either accumulating a massive financial liability (if leave carries forward indefinitely) or creating resentment (if it simply expires). Neither is good.
        </p>
        <ul style={ul}>
          <li style={li}><strong style={{ color: '#e2e8f0' }}>Use-it-or-lose-it</strong> — All unused leave expires at year end. Simple, but demotivating and legally restricted in some regions.</li>
          <li style={li}><strong style={{ color: '#e2e8f0' }}>Capped carry-forward</strong> — Employees can carry forward up to X days. Most common, most balanced.</li>
          <li style={li}><strong style={{ color: '#e2e8f0' }}>Cash-out option</strong> — Employees can sell unused leave back. High cost but strong retention signal.</li>
        </ul>

        <h2 style={h2}>6. No Policy for Remote or Hybrid Workers</h2>
        <p style={para}>
          Remote employees often feel guilty taking leave — they worry that being invisible makes absence more noticeable. This leads to burnout, and paradoxically, lower productivity. Your leave policy must explicitly address remote workers, including how to "log off" properly and what counts as a leave day for someone with no fixed office hours.
        </p>

        <h2 style={h2}>7. Applying Policy Inconsistently Across Teams</h2>
        <p style={para}>
          When one manager approves every request within minutes and another routinely rejects them without explanation, employees talk — and they leave. Inconsistency is perceived as favouritism, even when it isn't.
        </p>
        <div style={callout('#f59e0b')}>
          <strong style={{ color: '#f59e0b' }}>The Fix:</strong> Use a centralised leave management system where all approvals follow the same structured workflow. Managers can still add notes or context, but the process is identical for everyone.
        </div>

        <h2 style={h2}>8. Not Accounting for Local Labor Laws</h2>
        <p style={para}>
          If you operate in multiple cities or countries, different legal minimums apply. Maternity leave in the UK is 52 weeks. In the US it varies by state. In Pakistan, the Factories Act mandates 14 days annual leave. Applying a single global policy without local adjustments is both legally risky and culturally tone-deaf.
        </p>

        <h2 style={h2}>9. No Clear Process for Unplanned Leave</h2>
        <p style={para}>
          Emergencies happen. A family member is hospitalised. A pipe bursts. A child is sick. Your policy must clearly answer: who does the employee notify, how quickly, and through which channel? Ambiguity here adds stress on top of stress.
        </p>
        <ul style={ul}>
          <li style={li}>Notify direct manager <strong style={{ color: '#e2e8f0' }}>before their shift starts</strong> (not just "as soon as possible")</li>
          <li style={li}>One designated backup contact if manager is unavailable</li>
          <li style={li}>Documentation required only for absences exceeding 3 consecutive days</li>
        </ul>

        <h2 style={h2}>10. Never Reviewing the Policy</h2>
        <p style={para}>
          A policy written in 2019 doesn't account for hybrid work, mental health leave, or the post-pandemic expectation of greater flexibility. If your leave policy hasn't been reviewed in the last 18 months, it's already outdated.
        </p>
        <p style={para}>
          Set a calendar reminder: review your leave policy every January. Survey employees anonymously on pain points. Compare your policy with industry benchmarks. Then update it, communicate the changes clearly, and document the version history.
        </p>

        {/* Summary box */}
        <div style={{ background: 'rgba(17,17,48,0.9)', border: '1px solid rgba(139,92,246,0.2)', borderRadius: '1rem', padding: '2rem', margin: '2.5rem 0' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '1.25rem', color: '#a78bfa' }}>Key Takeaways</h3>
          {[
            'Document every leave type with clear, written rules',
            'Separate annual, sick, and emergency leave into distinct categories',
            'Use a structured approval workflow — not email chains',
            'Give employees real-time visibility into their own balance',
            'Define carry-over rules explicitly and review them annually',
            'Account for local labour laws if you operate across regions',
            'Review your leave policy every 12–18 months',
          ].map((point, i) => (
            <div key={i} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.65rem', alignItems: 'flex-start' }}>
              <CheckCircle size={16} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span style={{ color: '#e2e8f0', fontSize: '0.9rem', lineHeight: '1.5' }}>{point}</span>
            </div>
          ))}
        </div>

        {/* Closing CTA */}
        <div style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(236,72,153,0.12))', border: '1px solid rgba(124,58,237,0.35)', borderRadius: '1.25rem', padding: '2.5rem', margin: '2.5rem 0', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '0.5rem' }}>Fix your leave management with NexaHub HR</h3>
          <p style={{ color: '#94a3b8', marginBottom: '1.5rem', fontSize: '0.95rem' }}>Automated approvals, real-time balance tracking, and policy enforcement — built in.</p>
          <a href="https://workw.com/login" target="_blank" rel="noreferrer" className="btn-primary" style={{ fontSize: '1rem' }}>
            Start Free Trial <ArrowRight size={16} />
          </a>
        </div>

        {/* Tags */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          {['Leave Policy', 'HR Management', 'Employee Experience', 'HR Compliance', 'People Ops'].map(tag => (
            <span key={tag} style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)', borderRadius: '2rem', padding: '0.3rem 0.875rem', fontSize: '0.8rem', color: '#a78bfa' }}>
              #{tag.replace(' ', '')}
            </span>
          ))}
        </div>

        {/* Helpful? */}
        <div style={{ borderTop: '1px solid rgba(139,92,246,0.12)', paddingTop: '2rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ color: '#64748b', fontSize: '0.875rem' }}>Was this article helpful?</span>
          <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)', borderRadius: '0.5rem', padding: '0.4rem 1rem', color: '#10b981', fontWeight: '600', fontSize: '0.85rem', cursor: 'pointer' }}>
            <ThumbsUp size={14} /> Yes, helpful
          </button>
        </div>
      </article>

      {/* Author bio */}
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 2rem 3rem' }}>
        <div style={{ background: 'rgba(17,17,48,0.8)', border: '1px solid rgba(139,92,246,0.15)', borderRadius: '1.25rem', padding: '2rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'linear-gradient(135deg, #7c3aed, #ec4899)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '1.4rem', flexShrink: 0 }}>A</div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <div>
                <div style={{ fontWeight: '800', fontSize: '1rem', color: '#e2e8f0' }}>Ayesha Malik</div>
                <div style={{ color: '#64748b', fontSize: '0.82rem' }}>Head of HR Content · NexaHub</div>
              </div>
              <span style={{ fontSize: '0.75rem', color: '#a78bfa', background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)', padding: '0.25rem 0.75rem', borderRadius: '2rem' }}>12 articles</span>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: '1.7', margin: 0 }}>
              Ayesha leads HR content at NexaHub with 9 years of experience in people operations across the MENA region. She specialises in policy design, compliance, and building cultures where employees actually want to stay.
            </p>
          </div>
        </div>
      </div>

      {/* Related posts */}
      <section style={{ background: 'rgba(10,10,30,0.5)', borderTop: '1px solid rgba(139,92,246,0.1)', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.35rem', fontWeight: '800', marginBottom: '2rem' }}>Related Articles</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
            {relatedPosts.map((post, i) => (
              <Link key={i} to="/resources/blog/detail" style={{ textDecoration: 'none' }}>
                <div className="card hover-lift" style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ background: `${post.color}12`, borderRadius: '0.75rem', height: '110px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', fontSize: '2.5rem' }}>
                    {post.emoji}
                  </div>
                  <span style={{ fontSize: '0.72rem', color: post.color, fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{post.cat}</span>
                  <h3 style={{ fontWeight: '700', fontSize: '0.9rem', lineHeight: '1.45', margin: '0.4rem 0 0.75rem', color: '#e2e8f0', flex: 1 }}>{post.title}</h3>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#475569', fontSize: '0.78rem' }}>
                    <span>{post.author.split(' ')[0]}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Clock size={11} /> {post.read}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/resources/blog" className="btn-secondary">View All Articles</Link>
          </div>
        </div>
      </section>

    </div>
  );
}

// Inline styles for article body
const para = { fontSize: '1rem', color: '#94a3b8', lineHeight: '1.85', marginBottom: '1.5rem' };
const h2 = { fontSize: '1.35rem', fontWeight: '800', color: '#ffffff', marginTop: '2.5rem', marginBottom: '1rem', paddingLeft: '1rem', borderLeft: '3px solid #7c3aed' };
const ul = { paddingLeft: '0', listStyle: 'none', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' };
const li = { color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.7', paddingLeft: '1.5rem', position: 'relative', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' };

function callout(color) {
  return {
    background: `${color}0d`, border: `1px solid ${color}25`,
    borderLeft: `3px solid ${color}`,
    borderRadius: '0.75rem', padding: '1.25rem 1.5rem',
    marginBottom: '1.5rem', fontSize: '0.9rem', color: '#94a3b8', lineHeight: '1.75'
  };
}

import { BookOpen, Play, Award, CheckCircle, ChevronRight, ArrowRight } from 'lucide-react';

const modules = [
  { name: 'People & HR', count: 12, color: '#7c3aed' },
  { name: 'Work & Projects', count: 9, color: '#3b82f6' },
  { name: 'Finance & Ops', count: 8, color: '#10b981' },
  { name: 'Communication', count: 6, color: '#f59e0b' },
  { name: 'Inventory', count: 7, color: '#ec4899' },
];

const videos = [
  { title: 'Getting Started with NexaHub', duration: '4m 30s', module: 'All Modules', views: '12k' },
  { title: 'Setting Up Your First HR Module', duration: '6m 15s', module: 'HR', views: '8.4k' },
  { title: 'Creating and Sending Your First Invoice', duration: '3m 45s', module: 'Finance', views: '5.9k' },
  { title: 'Building a Project Board from Scratch', duration: '5m 20s', module: 'Projects', views: '7.1k' },
  { title: 'How to Configure Leave Policies', duration: '4m 00s', module: 'HR', views: '4.3k' },
  { title: 'Setting Up the Inventory Catalog', duration: '6m 10s', module: 'Inventory', views: '3.2k' },
];

const onboardingSteps = [
  { step: 'Create Workspace', desc: 'Set up your company profile and workspace settings', time: '2 min' },
  { step: 'Add Your Team', desc: 'Invite team members and configure role-based access', time: '5 min' },
  { step: 'Set Up HR Module', desc: 'Configure leave policies, departments, and appraisal cycles', time: '10 min' },
  { step: 'Create First Project', desc: 'Add tasks, assign team members, and set milestones', time: '5 min' },
  { step: 'Connect Integrations', desc: 'Link your existing tools — Slack, Google, and more', time: '5 min' },
];

export default function Learn() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{ padding: '5rem 2rem 4rem', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <div className="dot-bg" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
          <div className="section-tag"><BookOpen size={12} /> Learn</div>
          <h1 className="section-heading">Master NexaHub in <span className="gradient-text">hours, not weeks</span></h1>
          <p className="section-sub" style={{ margin: '0 auto' }}>Progressive guides from beginner to platform administrator. Step-by-step, at your own pace.</p>
        </div>
      </section>

      <section style={{ padding: '3rem 2rem 5rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          {/* Getting started */}
          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: '800', marginBottom: '1.5rem' }}>Getting Started Path</h2>
            <div style={{ background: 'rgba(17,17,48,0.8)', border: '1px solid rgba(139,92,246,0.15)', borderRadius: '1.25rem', padding: '2rem' }}>
              {onboardingSteps.map((s, i) => (
                <div key={i} style={{ display: 'flex', gap: '1.25rem', paddingBottom: i < onboardingSteps.length - 1 ? '1.5rem' : 0, position: 'relative' }}>
                  {i < onboardingSteps.length - 1 && (
                    <div style={{ position: 'absolute', left: '20px', top: '42px', width: '2px', height: 'calc(100% - 20px)', background: 'rgba(124,58,237,0.2)' }} />
                  )}
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #7c3aed, #ec4899)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '0.875rem', flexShrink: 0, zIndex: 1 }}>
                    {i + 1}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div>
                        <h4 style={{ fontWeight: '700', marginBottom: '0.25rem' }}>{s.step}</h4>
                        <p style={{ color: '#64748b', fontSize: '0.875rem' }}>{s.desc}</p>
                      </div>
                      <span style={{ fontSize: '0.75rem', color: '#475569', background: 'rgba(255,255,255,0.04)', padding: '0.25rem 0.65rem', borderRadius: '1rem', flexShrink: 0, marginLeft: '1rem' }}>{s.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Module guides */}
          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: '800', marginBottom: '1.5rem' }}>Module Guides</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              {modules.map(m => (
                <div key={m.name} className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: `1px solid ${m.color}20` }}>
                  <div>
                    <h4 style={{ fontWeight: '700', fontSize: '0.9rem', color: '#e2e8f0', marginBottom: '0.25rem' }}>{m.name}</h4>
                    <span style={{ fontSize: '0.78rem', color: m.color }}>{m.count} guides</span>
                  </div>
                  <ChevronRight size={16} color="#475569" />
                </div>
              ))}
            </div>
          </div>

          {/* Video library */}
          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: '800', marginBottom: '1.5rem' }}>Video Library</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
              {videos.map((v, i) => (
                <div key={i} className="card" style={{ cursor: 'pointer' }}>
                  <div style={{ aspect: 'ratio 16/9', background: 'rgba(124,58,237,0.12)', borderRadius: '0.5rem', marginBottom: '0.875rem', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem 0' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'linear-gradient(135deg, #7c3aed, #ec4899)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Play size={18} fill="white" color="white" />
                    </div>
                  </div>
                  <span style={{ fontSize: '0.72rem', color: '#a78bfa', fontWeight: '700' }}>{v.module}</span>
                  <h4 style={{ fontWeight: '700', fontSize: '0.875rem', margin: '0.25rem 0 0.5rem', lineHeight: '1.4' }}>{v.title}</h4>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#475569', fontSize: '0.75rem' }}>
                    <span>{v.duration}</span><span>{v.views} views</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certification */}
          <div style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.12), rgba(236,72,153,0.08))', border: '1px solid rgba(124,58,237,0.25)', borderRadius: '1.25rem', padding: '2.5rem', display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'linear-gradient(135deg, #7c3aed, #ec4899)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Award size={30} color="white" />
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '0.5rem' }}>NexaHub Platform Administrator Certification</h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.6' }}>Validate your power user knowledge. Get certified, share on LinkedIn, and join our advocate community.</p>
            </div>
            <button className="btn-primary" style={{ flexShrink: 0 }}>Start Certification <ArrowRight size={16} /></button>
          </div>
        </div>
      </section>
    </div>
  );
}

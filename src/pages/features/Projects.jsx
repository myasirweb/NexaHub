import { Link } from 'react-router-dom';
import {
  Briefcase, CheckSquare, BarChart2, TrendingUp, Users, ArrowRight,
  CheckCircle, Layers, Clock, Target, Zap, GitBranch, Calendar, ChevronRight
} from 'lucide-react';

const stats = [
  { value: '30%', label: 'Faster project delivery' },
  { value: '68%', label: 'Less time in status meetings' },
  { value: '3×', label: 'More tasks completed on time' },
  { value: '100%', label: 'Visibility across all projects' },
];

const views = [
  { name: 'Board View', desc: 'Drag-and-drop Kanban columns. Move tasks across stages visually. Perfect for sprint planning and agile teams.', icon: Layers, color: '#3b82f6' },
  { name: 'List View', desc: 'Spreadsheet-style list with sortable columns. Filter by assignee, priority, or due date. Best for detailed tracking.', icon: CheckSquare, color: '#7c3aed' },
  { name: 'Gantt Chart', desc: 'Timeline view with dependencies. See how tasks connect and where delays cascade. Built for project managers.', icon: BarChart2, color: '#10b981' },
  { name: 'Calendar View', desc: 'Monthly calendar showing all deadlines and milestones. Great for resource planning and client communications.', icon: Calendar, color: '#f59e0b' },
];

const taskFeatures = [
  { title: 'Assignee & Priority', desc: 'Assign tasks to one or multiple members. Set priority: Critical, High, Medium, Low. Colour-coded for instant visual scanning.' },
  { title: 'Subtasks & Dependencies', desc: 'Break large tasks into subtasks. Set "blocked by" dependencies so teams know the correct order of work automatically.' },
  { title: 'File Attachments', desc: 'Attach documents, images, and links directly to a task. No more hunting through email for the right file version.' },
  { title: 'Recurring Tasks', desc: 'Set tasks to repeat daily, weekly, or monthly. Ideal for recurring reports, standups, and compliance checks.' },
  { title: 'Bulk Edit Mode', desc: 'Select multiple tasks and change assignee, due date, or priority in one action. Saves hours during sprint planning.' },
  { title: 'Time Tracking', desc: 'Log time against tasks manually or with a live timer. Aggregate hours per project for billing and capacity planning.' },
];

const pipelineStages = [
  { stage: 'New Lead', color: '#64748b', count: 8 },
  { stage: 'Contacted', color: '#3b82f6', count: 5 },
  { stage: 'Qualified', color: '#7c3aed', count: 4 },
  { stage: 'Proposal Sent', color: '#f59e0b', count: 3 },
  { stage: 'Won', color: '#10b981', count: 6 },
];

const workloadLevels = [
  { name: 'Ahmed K.', load: 92, tasks: 11, color: '#ef4444' },
  { name: 'Priya S.', load: 75, tasks: 9, color: '#f59e0b' },
  { name: 'James C.', load: 55, tasks: 7, color: '#10b981' },
  { name: 'Sara M.', load: 40, tasks: 5, color: '#10b981' },
  { name: 'Tom O.', load: 88, tasks: 10, color: '#f59e0b' },
];

export default function Projects() {
  return (
    <div style={{ paddingTop: '72px', background: '#06061a' }}>

      {/* ── HERO ── */}
      <section style={{ padding: '5rem 2rem 4rem', position: 'relative', overflow: 'hidden' }}>
        <div className="dot-bg" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />
        <div className="orb" style={{ width: '600px', height: '600px', background: 'rgba(59,130,246,0.15)', top: '-100px', left: '-200px' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
          <div>
            <div className="section-tag"><Briefcase size={12} /> Work & Projects Module</div>
            <h1 className="section-heading">From kickoff to delivery — <span className="gradient-text">one place for every project</span></h1>
            <p style={{ fontSize: '1.1rem', color: '#94a3b8', lineHeight: '1.75', marginBottom: '2rem' }}>
              NexaHub Projects is not just a to-do list. It's a full project intelligence layer — Board, List, and Gantt built in from day one. No plugins, no paid upgrades, no limits.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <a href="https://workw.com/login" target="_blank" rel="noreferrer" className="btn-primary">Start Free <ArrowRight size={16} /></a>
              <Link to="/solutions/team" className="btn-secondary">See Project Use Cases</Link>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              {['Tasks & Subtasks', 'Gantt Charts', 'Leads Pipeline', 'Workload View'].map(f => (
                <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: '#64748b' }}>
                  <CheckCircle size={14} color="#3b82f6" /> {f}
                </div>
              ))}
            </div>
          </div>

          {/* Kanban board mockup */}
          <div style={{ background: 'rgba(13,13,43,0.95)', border: '1px solid rgba(59,130,246,0.3)', borderRadius: '1.25rem', padding: '1.5rem', boxShadow: '0 40px 80px rgba(0,0,0,0.4)' }} className="float">
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.75rem' }}>
              {['Board', 'List', 'Gantt', 'Calendar'].map((v, i) => (
                <span key={v} style={{ fontSize: '0.78rem', color: i === 0 ? '#3b82f6' : '#475569', fontWeight: i === 0 ? '700' : '400', borderBottom: i === 0 ? '2px solid #3b82f6' : 'none', paddingBottom: '4px', cursor: 'pointer' }}>{v}</span>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '0.5rem' }}>
              {[
                { col: 'To Do', color: '#64748b', tasks: [{ name: 'Design System Setup', p: 'High', user: 'A' }, { name: 'API Documentation', p: 'Medium', user: 'J' }] },
                { col: 'In Progress', color: '#3b82f6', tasks: [{ name: 'Dashboard UI', p: 'Critical', user: 'S' }, { name: 'Auth Module', p: 'High', user: 'T' }] },
                { col: 'Done', color: '#10b981', tasks: [{ name: 'Wireframes', p: 'Medium', user: 'A' }, { name: 'Requirements Doc', p: 'Low', user: 'J' }] },
              ].map(col => (
                <div key={col.col}>
                  <div style={{ fontSize: '0.65rem', fontWeight: '700', color: col.color, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between' }}>
                    {col.col} <span style={{ background: `${col.color}22`, padding: '0 6px', borderRadius: '4px' }}>{col.tasks.length}</span>
                  </div>
                  {col.tasks.map((t, ti) => (
                    <div key={ti} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '6px', padding: '0.5rem', marginBottom: '0.4rem', borderLeft: `2px solid ${['#ef4444','#f59e0b','#3b82f6','#64748b'][ti]}` }}>
                      <div style={{ fontSize: '0.68rem', color: '#94a3b8', lineHeight: '1.3', marginBottom: '0.3rem' }}>{t.name}</div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.6rem', color: '#475569' }}>{t.p}</span>
                        <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: col.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.55rem', fontWeight: '700' }}>{t.user}</div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ padding: '3rem 2rem', background: 'rgba(13,13,43,0.5)', borderTop: '1px solid rgba(59,130,246,0.1)', borderBottom: '1px solid rgba(59,130,246,0.1)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '2rem', textAlign: 'center' }}>
          {stats.map(s => (
            <div key={s.label}>
              <div className="stat-number">{s.value}</div>
              <div style={{ color: '#64748b', fontSize: '0.875rem', marginTop: '0.25rem' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4 VIEWS ── */}
      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-tag"><Layers size={12} /> Multiple Views</div>
            <h2 className="section-heading">Work the way <span className="gradient-text">your team thinks</span></h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>Every view shows the same data. Switch instantly. No project setup needed — all views are always available.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1.25rem' }}>
            {views.map(v => (
              <div key={v.name} className="card hover-lift" style={{ textAlign: 'center', padding: '2rem 1.5rem', border: `1px solid ${v.color}20` }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: `${v.color}15`, border: `1px solid ${v.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                  <v.icon size={26} color={v.color} />
                </div>
                <h3 style={{ fontWeight: '700', marginBottom: '0.75rem', fontSize: '1rem' }}>{v.name}</h3>
                <p style={{ color: '#64748b', fontSize: '0.82rem', lineHeight: '1.65' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TASK MANAGEMENT DEEP DIVE ── */}
      <section style={{ padding: '5rem 2rem', background: 'rgba(10,10,30,0.5)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-tag"><CheckSquare size={12} /> Task Management</div>
            <h2 className="section-heading">Tasks that carry <span className="gradient-text">all the context they need</span></h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>A NexaHub task is not just a line item. It's a complete unit of work — with everything the assignee needs to get it done, right there in the card.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.25rem' }}>
            {taskFeatures.map(f => (
              <div key={f.title} className="card" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', border: '1px solid rgba(59,130,246,0.12)' }}>
                <CheckCircle size={18} color="#3b82f6" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontWeight: '700', marginBottom: '0.3rem', fontSize: '0.95rem' }}>{f.title}</h4>
                  <p style={{ color: '#64748b', fontSize: '0.82rem', lineHeight: '1.6', margin: 0 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROGRESS TRACKING ── */}
      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div className="section-tag"><Target size={12} /> Progress Tracking</div>
              <h2 className="section-heading">No more chasing <span className="gradient-text">status updates</span></h2>
              <p style={{ color: '#94a3b8', lineHeight: '1.8', marginBottom: '2rem' }}>
                The most common complaint from project managers is that they spend more time asking "what's the status?" than actually managing. NexaHub eliminates that entirely — progress is always visible, always current.
              </p>
              {[
                { title: 'Project Health Dashboard', desc: 'At-a-glance view: on track, at risk, or overdue — for every project.' },
                { title: 'Milestone Tracking', desc: 'Set key milestones and watch them move from planned to achieved.' },
                { title: 'Completion Percentage', desc: 'Auto-calculated from tasks. Updates the moment a task is marked done.' },
                { title: 'Overdue Alerts', desc: 'Automatic notifications when a task goes past its due date.' },
                { title: 'Burndown Chart', desc: 'Sprint velocity tracking — see if you\'re on pace to hit your deadline.' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.875rem', padding: '0.875rem', background: 'rgba(17,17,48,0.6)', borderRadius: '0.75rem', border: '1px solid rgba(59,130,246,0.1)' }}>
                  <ChevronRight size={16} color="#3b82f6" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '0.875rem', color: '#e2e8f0', marginBottom: '0.2rem' }}>{item.title}</div>
                    <div style={{ color: '#64748b', fontSize: '0.8rem' }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            {/* Progress dashboard mockup */}
            <div style={{ background: 'rgba(13,13,43,0.95)', border: '1px solid rgba(59,130,246,0.25)', borderRadius: '1.25rem', padding: '1.5rem' }}>
              <div style={{ fontSize: '0.72rem', color: '#64748b', marginBottom: '1.25rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Project Health</div>
              {[
                { name: 'Product Redesign', pct: 78, status: 'On Track', color: '#10b981' },
                { name: 'Mobile App v2', pct: 45, status: 'At Risk', color: '#f59e0b' },
                { name: 'CRM Integration', pct: 92, status: 'On Track', color: '#10b981' },
                { name: 'Q4 Marketing', pct: 22, status: 'Overdue', color: '#ef4444' },
              ].map(p => (
                <div key={p.name} style={{ marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                    <span style={{ fontSize: '0.82rem', color: '#e2e8f0', fontWeight: '600' }}>{p.name}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ fontSize: '0.72rem', color: p.color, fontWeight: '700', background: `${p.color}15`, padding: '0.15rem 0.5rem', borderRadius: '2rem' }}>{p.status}</span>
                      <span style={{ fontSize: '0.75rem', color: '#64748b' }}>{p.pct}%</span>
                    </div>
                  </div>
                  <div style={{ height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '3px' }}>
                    <div style={{ width: `${p.pct}%`, height: '100%', background: p.color, borderRadius: '3px' }} />
                  </div>
                </div>
              ))}
              <div style={{ marginTop: '1rem', padding: '0.875rem', background: 'rgba(59,130,246,0.08)', borderRadius: '0.75rem', border: '1px solid rgba(59,130,246,0.15)' }}>
                <div style={{ fontSize: '0.72rem', color: '#64748b', marginBottom: '0.5rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Upcoming Milestones</div>
                {['Product Demo — Apr 18', 'Beta Launch — Apr 25', 'Client Review — May 2'].map((m, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', padding: '0.25rem 0' }}>
                    <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#3b82f6' }} />
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{m}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LEADS PIPELINE ── */}
      <section style={{ padding: '5rem 2rem', background: 'rgba(10,10,30,0.5)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-tag"><TrendingUp size={12} /> Leads Pipeline</div>
            <h2 className="section-heading">Sales pipeline built <span className="gradient-text">inside your project tool</span></h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>No separate CRM needed. NexaHub includes a full Kanban-style leads pipeline — from first contact to closed deal — linked to your project delivery workflow.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '1rem', marginBottom: '2.5rem' }}>
            {pipelineStages.map(s => (
              <div key={s.stage} style={{ background: `${s.color}10`, border: `1px solid ${s.color}25`, borderRadius: '0.75rem', padding: '1.25rem', textAlign: 'center' }}>
                <div style={{ fontSize: '1.75rem', fontWeight: '900', color: s.color, marginBottom: '0.25rem' }}>{s.count}</div>
                <div style={{ fontSize: '0.8rem', fontWeight: '700', color: '#e2e8f0' }}>{s.stage}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.25rem' }}>
            {[
              { title: 'Lead Scoring', desc: 'Auto-score leads by engagement, deal size, and follow-up responsiveness. Sales focuses on the highest-probability deals first.' },
              { title: 'Follow-Up Reminders', desc: 'Set reminder dates on any lead. Automated nudges prevent warm prospects from going cold in a busy pipeline.' },
              { title: 'Conversion Analytics', desc: 'Stage-by-stage conversion rates show where leads drop off. Identify the weakest stage and fix your process.' },
            ].map(m => (
              <div key={m.title} className="card" style={{ border: '1px solid rgba(16,185,129,0.15)' }}>
                <h4 style={{ fontWeight: '700', marginBottom: '0.5rem', color: '#10b981' }}>{m.title}</h4>
                <p style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: '1.7', margin: 0 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORKLOAD ── */}
      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div className="section-tag"><Users size={12} /> Team Workload View</div>
              <h2 className="section-heading">Spot burnout <span className="gradient-text">before it happens</span></h2>
              <p style={{ color: '#94a3b8', lineHeight: '1.8', marginBottom: '2rem' }}>
                The most common cause of missed deadlines is not laziness — it's overloading the wrong people. NexaHub's workload heatmap shows each team member's capacity in real time, so you can balance assignments before problems occur.
              </p>
              {['Visual capacity heatmap per team member', 'Task count and estimated hours per person', 'Drag tasks between team members to rebalance', 'Filter by project, date range, or department', 'Integration with leave calendar — see who is actually available'].map((f, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.65rem' }}>
                  <CheckCircle size={14} color="#3b82f6" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: '1.5' }}>{f}</span>
                </div>
              ))}
            </div>
            {/* Workload mockup */}
            <div style={{ background: 'rgba(13,13,43,0.95)', border: '1px solid rgba(59,130,246,0.25)', borderRadius: '1.25rem', padding: '1.5rem' }}>
              <div style={{ fontSize: '0.72rem', color: '#64748b', marginBottom: '1.25rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Team Workload — This Week</div>
              {workloadLevels.map(m => (
                <div key={m.name} style={{ marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: m.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', fontWeight: '700' }}>{m.name[0]}</div>
                      <span style={{ fontSize: '0.82rem', color: '#e2e8f0' }}>{m.name}</span>
                    </div>
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.72rem', color: '#64748b' }}>{m.tasks} tasks</span>
                      <span style={{ fontSize: '0.72rem', fontWeight: '700', color: m.color }}>{m.load}%</span>
                    </div>
                  </div>
                  <div style={{ height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '3px' }}>
                    <div style={{ width: `${m.load}%`, height: '100%', background: m.color, borderRadius: '3px' }} />
                  </div>
                  {m.load > 85 && (
                    <div style={{ fontSize: '0.68rem', color: '#ef4444', marginTop: '0.25rem' }}>⚠ Overloaded — consider reassigning tasks</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '5rem 2rem', background: 'rgba(59,130,246,0.05)', borderTop: '1px solid rgba(59,130,246,0.1)', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 className="section-heading">Teams ship <span className="gradient-text">30% faster</span> on NexaHub</h2>
          <p className="section-sub" style={{ margin: '0 auto 2rem' }}>Full project management — Board, List, Gantt, and Workload — included in every plan.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://workw.com/login" target="_blank" rel="noreferrer" className="btn-primary" style={{ fontSize: '1rem' }}>Start Free Trial <ArrowRight size={16} /></a>
            <Link to="/pricing" className="btn-secondary">View Pricing</Link>
          </div>
        </div>
      </section>

    </div>
  );
}

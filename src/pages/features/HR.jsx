import { Link } from 'react-router-dom';
import {
  Users, Star, Calendar, Award, AlertCircle, TrendingUp, ArrowRight,
  CheckCircle, BarChart2, Clock, Shield, Zap, Target, UserCheck,
  FileText, Bell, RefreshCw, ChevronRight, Lock
} from 'lucide-react';

const stats = [
  { value: '40%', label: 'Less time spent on HR admin' },
  { value: '3×', label: 'Faster leave approvals' },
  { value: '92%', label: 'Employee satisfaction with self-service' },
  { value: '0', label: 'Compliance violations reported' },
];

const appraisalSteps = [
  { num: '01', title: 'Set Review Cycle', desc: 'Define quarterly, bi-annual, or annual cycles. Set start/end dates and auto-reminders.' },
  { num: '02', title: 'Assign Reviewers', desc: 'Manager reviews, peer reviews, and self-assessments — all in one structured workflow.' },
  { num: '03', title: 'Complete Reviews', desc: 'Custom rating templates. Both sides fill in forms. No email chains, no spreadsheets.' },
  { num: '04', title: 'Generate Reports', desc: 'View completion rates, average scores, and team-level analytics automatically.' },
];

const leaveTypes = [
  { type: 'Annual Leave', desc: 'Pre-approved planned time off with accrual rules', color: '#7c3aed' },
  { type: 'Sick Leave', desc: 'Unplanned absence with optional medical doc upload', color: '#3b82f6' },
  { type: 'Maternity / Paternity', desc: 'Extended leave with custom policy per region', color: '#ec4899' },
  { type: 'Emergency Leave', desc: 'Instant approval flow for urgent situations', color: '#ef4444' },
  { type: 'Unpaid Leave', desc: 'Tracked separately, excluded from pay calculations', color: '#f59e0b' },
  { type: 'Custom Types', desc: 'Create any leave type specific to your company', color: '#10b981' },
];

const grievanceSteps = [
  { icon: FileText, label: 'Employee submits', desc: 'Anonymous or named. Structured form with category, date, description.' },
  { icon: Bell, label: 'HR notified', desc: 'Instant notification to assigned HR officer. SLA timer starts.' },
  { icon: RefreshCw, label: 'Investigation', desc: 'Case notes, evidence uploads, and status updates — all in one thread.' },
  { icon: CheckCircle, label: 'Resolution', desc: 'Outcome documented. Full audit trail stored for compliance.' },
];

const hrVsOld = [
  { feature: 'Leave approval', old: 'Email chain, 2–3 days', nexahub: 'One click, under 4 hours' },
  { feature: 'Appraisal tracking', old: 'Excel sheet per manager', nexahub: 'Centralised with auto-reminders' },
  { feature: 'Grievance handling', old: 'Verbal or email, no record', nexahub: 'Full audit trail, SLA tracked' },
  { feature: 'HR analytics', old: 'Manual monthly report', nexahub: 'Live dashboard, always current' },
  { feature: 'Employee self-service', old: 'Ask HR for everything', nexahub: 'Employees check their own data' },
];

const whoUsesIt = [
  { role: 'HR Managers', use: 'Run appraisal cycles, approve leaves, manage grievances — all from one dashboard.' },
  { role: 'Team Leads', use: 'See team availability, approve leave requests, track their team\'s review status.' },
  { role: 'Employees', use: 'Apply for leave, view balance, submit feedback, and check their own appraisal history.' },
  { role: 'C-Level / Directors', use: 'High-level HR analytics — headcount trends, turnover risk, appraisal completion.' },
];

export default function HR() {
  return (
    <div style={{ paddingTop: '72px', background: '#06061a' }}>

      {/* ── HERO ── */}
      <section style={{ padding: '5rem 2rem 4rem', position: 'relative', overflow: 'hidden' }}>
        <div className="dot-bg" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />
        <div className="orb" style={{ width: '600px', height: '600px', background: 'rgba(124,58,237,0.18)', top: '-150px', right: '-200px' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
          <div>
            <div className="section-tag"><Users size={12} /> People & HR Module</div>
            <h1 className="section-heading">
              Stop managing people across <span className="gradient-text">6 different spreadsheets</span>
            </h1>
            <p style={{ fontSize: '1.1rem', color: '#94a3b8', lineHeight: '1.75', marginBottom: '2rem' }}>
              NexaHub HR replaces standalone tools like BambooHR, Zoho People, and your maze of Google Sheets with one complete, connected HR platform — from hire to retire.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <a href="https://workw.com/login" target="_blank" rel="noreferrer" className="btn-primary">
                Start Free Trial <ArrowRight size={16} />
              </a>
              <Link to="/solutions/team" className="btn-secondary">See HR Use Cases</Link>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              {['Leave Management', 'Appraisals', 'Grievances', 'HR Analytics'].map(f => (
                <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: '#64748b' }}>
                  <CheckCircle size={14} color="#10b981" /> {f}
                </div>
              ))}
            </div>
          </div>

          {/* Live HR Dashboard mockup */}
          <div style={{ background: 'rgba(13,13,43,0.95)', border: '1px solid rgba(124,58,237,0.3)', borderRadius: '1.25rem', padding: '1.5rem', boxShadow: '0 40px 80px rgba(0,0,0,0.4)' }} className="float">
            <div style={{ fontSize: '0.72rem', color: '#64748b', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: '700', color: '#e2e8f0' }}>HR Dashboard</span>
              <span style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }} /> Live
              </span>
            </div>
            {[
              { label: 'Pending Leave Requests', value: '7', color: '#7c3aed', pct: 70 },
              { label: 'Appraisals Due This Month', value: '12', color: '#f59e0b', pct: 55 },
              { label: 'Open Grievances', value: '2', color: '#ef4444', pct: 20 },
              { label: 'Recognitions This Month', value: '34', color: '#10b981', pct: 85 },
            ].map(item => (
              <div key={item.label} style={{ marginBottom: '0.875rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                  <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{item.label}</span>
                  <span style={{ fontSize: '0.9rem', fontWeight: '800', color: item.color }}>{item.value}</span>
                </div>
                <div style={{ height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px' }}>
                  <div style={{ width: `${item.pct}%`, height: '100%', background: item.color, borderRadius: '2px', transition: 'width 1s ease' }} />
                </div>
              </div>
            ))}
            <div style={{ marginTop: '1.25rem', padding: '0.875rem', background: 'rgba(124,58,237,0.08)', borderRadius: '0.75rem', border: '1px solid rgba(124,58,237,0.15)' }}>
              <div style={{ fontSize: '0.72rem', color: '#64748b', marginBottom: '0.5rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Recent Activity</div>
              {['Sarah approved 3 leave requests', 'Appraisal reminder sent to 8 managers', 'New grievance case #GR-041 opened'].map((a, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', padding: '0.3rem 0', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                  <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: ['#7c3aed', '#f59e0b', '#ef4444'][i], flexShrink: 0 }} />
                  <span style={{ fontSize: '0.75rem', color: '#64748b' }}>{a}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ padding: '3rem 2rem', background: 'rgba(13,13,43,0.5)', borderTop: '1px solid rgba(139,92,246,0.1)', borderBottom: '1px solid rgba(139,92,246,0.1)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '2rem', textAlign: 'center' }}>
          {stats.map(s => (
            <div key={s.label}>
              <div className="stat-number">{s.value}</div>
              <div style={{ color: '#64748b', fontSize: '0.875rem', marginTop: '0.25rem' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHAT IS WORKWISE HR ── */}
      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div className="section-tag">Overview</div>
              <h2 className="section-heading">Everything HR needs — <span className="gradient-text">finally in one place</span></h2>
              <p style={{ color: '#94a3b8', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Most HR teams juggle 4–6 separate tools: one for leave, one for appraisals, one for payroll exports, another for complaints. Every handoff between tools means lost data, delayed responses, and frustrated employees.
              </p>
              <p style={{ color: '#94a3b8', lineHeight: '1.8', marginBottom: '2rem' }}>
                NexaHub HR is built differently. Every module — leaves, appraisals, rewards, grievances, bonuses — shares the same employee record. When a leave is approved, payroll knows. When an appraisal is completed, promotion eligibility updates automatically.
              </p>
              {['Single employee record across all HR modules', 'Automated workflows — no manual follow-ups', 'Employee self-service portal reduces HR queries by 70%', 'Built-in compliance — audit trail for every action'].map(f => (
                <div key={f} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem', alignItems: 'flex-start' }}>
                  <CheckCircle size={16} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ color: '#e2e8f0', fontSize: '0.95rem' }}>{f}</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                { icon: Calendar, color: '#7c3aed', label: 'Leave & Attendance', desc: 'Visual calendar, one-click approvals, balance tracking' },
                { icon: Star, color: '#f59e0b', label: 'Appraisals', desc: '360° reviews with custom templates and auto-reminders' },
                { icon: Award, color: '#ec4899', label: 'Rewards', desc: 'Peer shoutouts, badges, and monthly award cycles' },
                { icon: AlertCircle, color: '#ef4444', label: 'Grievances', desc: 'Confidential portal with SLA tracking and audit trail' },
                { icon: TrendingUp, color: '#10b981', label: 'Bonus & Promotions', desc: 'Multi-level approvals linked to payroll export' },
                { icon: BarChart2, color: '#3b82f6', label: 'HR Analytics', desc: 'Headcount trends, heatmaps, completion rates' },
              ].map(m => (
                <div key={m.label} className="card" style={{ padding: '1.25rem', border: `1px solid ${m.color}18` }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: `${m.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                    <m.icon size={18} color={m.color} />
                  </div>
                  <div style={{ fontWeight: '700', fontSize: '0.875rem', marginBottom: '0.3rem' }}>{m.label}</div>
                  <div style={{ color: '#64748b', fontSize: '0.78rem', lineHeight: '1.5' }}>{m.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── APPRAISALS DEEP DIVE ── */}
      <section style={{ padding: '5rem 2rem', background: 'rgba(10,10,30,0.5)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="section-tag"><Star size={12} /> Appraisals & Performance</div>
            <h2 className="section-heading">360° reviews that <span className="gradient-text">actually get completed</span></h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>Most appraisal cycles fail not because of bad intentions — but because the process is too complicated. NexaHub makes it impossible to fall behind.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1.25rem', marginBottom: '3rem' }}>
            {appraisalSteps.map((s, i) => (
              <div key={i} style={{ position: 'relative' }}>
                {i < 3 && <div style={{ position: 'absolute', top: '28px', left: 'calc(100% - 12px)', width: '24px', height: '2px', background: 'linear-gradient(90deg,#7c3aed,transparent)', zIndex: 1 }} />}
                <div className="card" style={{ textAlign: 'center', padding: '2rem 1.25rem' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg,#7c3aed,#ec4899)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', fontSize: '0.9rem', fontWeight: '800' }}>{s.num}</div>
                  <h4 style={{ fontWeight: '700', marginBottom: '0.5rem', fontSize: '0.95rem' }}>{s.title}</h4>
                  <p style={{ color: '#64748b', fontSize: '0.82rem', lineHeight: '1.6' }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div className="card" style={{ padding: '2rem' }}>
              <h4 style={{ fontWeight: '700', marginBottom: '1rem', color: '#a78bfa' }}>What employees see</h4>
              {['Their own appraisal form — clearly structured', 'Manager comments and ratings side-by-side', 'Historical review scores over time', 'Upcoming review dates and deadlines', 'Option to add self-assessment notes'].map((f, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <CheckCircle size={14} color="#7c3aed" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ color: '#94a3b8', fontSize: '0.875rem' }}>{f}</span>
                </div>
              ))}
            </div>
            <div className="card" style={{ padding: '2rem' }}>
              <h4 style={{ fontWeight: '700', marginBottom: '1rem', color: '#a78bfa' }}>What managers see</h4>
              {['Team-wide review completion status', 'Side-by-side employee self vs manager rating', 'Pending reviews with overdue alerts', 'Average score per department', 'Exportable performance report per employee'].map((f, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <CheckCircle size={14} color="#ec4899" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ color: '#94a3b8', fontSize: '0.875rem' }}>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── LEAVE & ATTENDANCE ── */}
      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
            <div>
              <div className="section-tag"><Calendar size={12} /> Leave & Attendance</div>
              <h2 className="section-heading">Leave management that <span className="gradient-text">works like it should</span></h2>
              <p style={{ color: '#94a3b8', lineHeight: '1.8', marginBottom: '2rem' }}>
                No more leave requests lost in email. No more managers approving leaves they never saw. No more employees unsure how many days they have left. NexaHub gives everyone — employees, managers, and HR — a single, real-time view.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                {[
                  { title: 'Visual Leave Calendar', desc: 'See who is out, when, and for how long — across the entire team at a glance.' },
                  { title: 'One-Click Approval', desc: 'Managers approve or reject with a single tap. Employee is notified instantly.' },
                  { title: 'Accrual Policy Engine', desc: 'Set rules for how leave accrues: monthly, annually, or on a pro-rated basis.' },
                  { title: 'Real-Time Balance', desc: 'Employees see their exact remaining balance — no need to ask HR.' },
                ].map(item => (
                  <div key={item.title} style={{ display: 'flex', gap: '1rem', padding: '1rem', background: 'rgba(124,58,237,0.05)', borderRadius: '0.75rem', border: '1px solid rgba(124,58,237,0.12)' }}>
                    <CheckCircle size={18} color="#7c3aed" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <div style={{ fontWeight: '700', fontSize: '0.9rem', marginBottom: '0.2rem' }}>{item.title}</div>
                      <div style={{ color: '#64748b', fontSize: '0.82rem', lineHeight: '1.5' }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 style={{ fontWeight: '700', marginBottom: '1.25rem', color: '#e2e8f0' }}>Supported Leave Types</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '2rem' }}>
                {leaveTypes.map(l => (
                  <div key={l.type} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.875rem 1rem', background: 'rgba(17,17,48,0.8)', border: `1px solid ${l.color}20`, borderRadius: '0.75rem', borderLeft: `3px solid ${l.color}` }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: l.color, flexShrink: 0 }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: '700', fontSize: '0.875rem' }}>{l.type}</div>
                      <div style={{ color: '#64748b', fontSize: '0.78rem' }}>{l.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '0.75rem', padding: '1rem 1.25rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <CheckCircle size={16} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: '1.6', margin: 0 }}>
                  All leave types support <strong style={{ color: '#10b981' }}>custom carry-over rules</strong>, regional labour law settings, and department-specific policies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── REWARDS & RECOGNITION ── */}
      <section style={{ padding: '5rem 2rem', background: 'rgba(10,10,30,0.5)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-tag"><Award size={12} /> Rewards & Recognition</div>
            <h2 className="section-heading">Build a culture where <span className="gradient-text">good work gets seen</span></h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>Recognition is the highest-ROI retention tool. NexaHub makes it easy, public, and tied to your company newsfeed so good work never goes unnoticed.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }}>
            {[
              { icon: Users, color: '#7c3aed', title: 'Peer-to-Peer Shoutouts', desc: 'Any employee can publicly recognise a colleague. Shoutouts appear in the company Newsfeed — visible to the whole organisation. Reactions and comments build momentum.' },
              { icon: Award, color: '#f59e0b', title: 'Management Badges', desc: 'Managers award custom badges for achievements — "Problem Solver", "Team Player", "Above & Beyond". Badges attach to the employee\'s profile permanently.' },
              { icon: Star, color: '#ec4899', title: 'Monthly & Quarterly Awards', desc: 'HR sets award categories and nominees. Team votes, results are announced in the Newsfeed. Creates a ritual of appreciation without requiring management overhead.' },
            ].map(m => (
              <div key={m.title} className="card hover-lift" style={{ padding: '2rem', border: `1px solid ${m.color}18` }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: `${m.color}15`, border: `1px solid ${m.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <m.icon size={24} color={m.color} />
                </div>
                <h3 style={{ fontWeight: '700', marginBottom: '0.75rem' }}>{m.title}</h3>
                <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: '1.7' }}>{m.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '2rem', background: 'rgba(236,72,153,0.06)', border: '1px solid rgba(236,72,153,0.15)', borderRadius: '1rem', padding: '1.5rem 2rem', display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ fontSize: '2rem', fontWeight: '900', background: 'linear-gradient(135deg,#7c3aed,#ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>4.6×</div>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
              Employees who receive regular recognition are <strong style={{ color: '#e2e8f0' }}>4.6× more likely</strong> to stay with the company. Teams using NexaHub Rewards report 31% lower voluntary turnover within the first year.
            </p>
          </div>
        </div>
      </section>

      {/* ── GRIEVANCES ── */}
      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div className="section-tag"><Shield size={12} /> Complaints & Grievances</div>
              <h2 className="section-heading">Handle sensitive issues with <span className="gradient-text">full confidentiality</span></h2>
              <p style={{ color: '#94a3b8', lineHeight: '1.8', marginBottom: '2rem' }}>
                When an employee has a grievance, the worst response is silence or a lost email thread. NexaHub provides a structured, confidential process that protects employees, protects the company, and creates the audit trail that compliance requires.
              </p>
              {["Anonymous or named submission — employee's choice", 'Dedicated HR case manager assigned automatically', 'Resolution SLA timer with escalation alerts', 'Immutable audit trail — every action timestamped', 'Final outcome documented and stored securely'].map((f, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem', alignItems: 'flex-start' }}>
                  <Lock size={14} color="#7c3aed" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.5' }}>{f}</span>
                </div>
              ))}
            </div>
            <div>
              <h4 style={{ fontWeight: '700', marginBottom: '1.5rem', color: '#e2e8f0' }}>How a grievance flows</h4>
              <div style={{ position: 'relative' }}>
                {grievanceSteps.map((s, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1.25rem', marginBottom: i < 3 ? '0' : '0', position: 'relative' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, zIndex: 1 }}>
                        <s.icon size={18} color="#a78bfa" />
                      </div>
                      {i < 3 && <div style={{ width: '2px', height: '48px', background: 'rgba(124,58,237,0.2)', marginTop: '4px' }} />}
                    </div>
                    <div style={{ paddingBottom: i < 3 ? '1rem' : 0, paddingTop: '8px' }}>
                      <div style={{ fontWeight: '700', fontSize: '0.9rem', color: '#e2e8f0', marginBottom: '0.25rem' }}>{s.label}</div>
                      <div style={{ color: '#64748b', fontSize: '0.82rem', lineHeight: '1.5' }}>{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BONUS & PROMOTIONS ── */}
      <section style={{ padding: '5rem 2rem', background: 'rgba(10,10,30,0.5)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-tag"><TrendingUp size={12} /> Bonus & Promotions</div>
            <h2 className="section-heading">Reward performance with <span className="gradient-text">structured, fair processes</span></h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>Ad-hoc bonuses create resentment. A structured process with clear criteria creates motivation. NexaHub turns bonus cycles into a transparent, auditable workflow.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }}>
            {[
              { title: 'Eligibility Criteria Builder', desc: 'Define who qualifies for bonus consideration — by tenure, role, appraisal score, or department. Rules are applied consistently, eliminating bias.', color: '#7c3aed' },
              { title: 'Calculation Engine', desc: 'Set bonus formulas: percentage of salary, flat amount, or performance-multiplied. Preview totals before approving. All calculations are transparent and documented.', color: '#3b82f6' },
              { title: 'Multi-Level Approval Chain', desc: 'Manager proposes → HR reviews → Finance approves → CEO signs off. Every step has a deadline. Escalation triggers automatically on overdue approvals.', color: '#10b981' },
              { title: 'Promotion History', desc: 'Every promotion, salary change, and role update is recorded on the employee\'s timeline. Accessible to HR, hidden from peers. Full history visible at a glance.', color: '#f59e0b' },
              { title: 'Payroll Export', desc: 'Approved bonuses export directly to your payroll tool in one click — CSV, Excel, or native integration. No double entry, no transfer errors.', color: '#ec4899' },
              { title: 'Audit Trail', desc: 'Every decision — who approved, when, and what amount — is timestamped and stored permanently. Compliance teams love it.', color: '#64748b' },
            ].map(m => (
              <div key={m.title} className="card" style={{ borderLeft: `3px solid ${m.color}` }}>
                <h4 style={{ fontWeight: '700', marginBottom: '0.5rem', color: m.color, fontSize: '0.95rem' }}>{m.title}</h4>
                <p style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: '1.7', margin: 0 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HR ANALYTICS ── */}
      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div className="section-tag"><BarChart2 size={12} /> HR Analytics</div>
              <h2 className="section-heading">Make HR decisions with <span className="gradient-text">data, not gut feeling</span></h2>
              <p style={{ color: '#94a3b8', lineHeight: '1.8', marginBottom: '2rem' }}>
                Most HR leaders are making strategic decisions based on a monthly Excel report that's already two weeks old. NexaHub analytics are always live — giving you the real-time visibility to act before problems escalate.
              </p>
              {[
                { label: 'Headcount Trends', desc: 'Track hiring, attrition, and net growth over time' },
                { label: 'Leave Utilisation Heatmap', desc: 'See which teams over/under-use their leave entitlement' },
                { label: 'Appraisal Completion Rate', desc: 'Real-time view of review progress across all departments' },
                { label: 'Turnover Risk Indicators', desc: 'Flag employees with low scores, unused leave, or no recognition' },
                { label: 'Department Health Score', desc: 'Composite metric combining appraisals, attendance, and engagement' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.875rem', padding: '0.75rem', background: 'rgba(17,17,48,0.6)', borderRadius: '0.75rem', border: '1px solid rgba(139,92,246,0.1)' }}>
                  <ChevronRight size={16} color="#7c3aed" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '0.875rem', color: '#e2e8f0' }}>{item.label}</div>
                    <div style={{ color: '#64748b', fontSize: '0.8rem' }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            {/* Analytics mockup */}
            <div style={{ background: 'rgba(13,13,43,0.95)', border: '1px solid rgba(124,58,237,0.25)', borderRadius: '1.25rem', padding: '1.5rem' }}>
              <div style={{ fontSize: '0.72rem', color: '#64748b', marginBottom: '1.25rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>HR Analytics Dashboard</div>
              {/* Mini bar chart */}
              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginBottom: '0.75rem' }}>Headcount by Department</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {[['Engineering', 42, '#3b82f6'], ['Sales', 28, '#10b981'], ['HR & Admin', 15, '#7c3aed'], ['Finance', 12, '#f59e0b'], ['Operations', 22, '#ec4899']].map(([dept, val, color]) => (
                    <div key={dept} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span style={{ fontSize: '0.72rem', color: '#64748b', width: '72px', flexShrink: 0 }}>{dept}</span>
                      <div style={{ flex: 1, height: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }}>
                        <div style={{ width: `${(val / 42) * 100}%`, height: '100%', background: color, borderRadius: '4px' }} />
                      </div>
                      <span style={{ fontSize: '0.72rem', color: '#64748b', width: '24px', textAlign: 'right' }}>{val}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                {[{ label: 'Appraisal Completion', value: '87%', color: '#10b981' }, { label: 'Avg Leave Taken', value: '14.2d', color: '#7c3aed' }, { label: 'Turnover (YTD)', value: '4.1%', color: '#f59e0b' }, { label: 'Open Positions', value: '7', color: '#3b82f6' }].map(m => (
                  <div key={m.label} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '0.5rem', padding: '0.75rem', border: `1px solid ${m.color}15` }}>
                    <div style={{ fontSize: '0.7rem', color: '#64748b', marginBottom: '0.25rem' }}>{m.label}</div>
                    <div style={{ fontSize: '1.25rem', fontWeight: '800', color: m.color }}>{m.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO USES IT ── */}
      <section style={{ padding: '5rem 2rem', background: 'rgba(10,10,30,0.5)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-tag"><UserCheck size={12} /> Who Uses It</div>
            <h2 className="section-heading">Built for every person <span className="gradient-text">in your organisation</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1.25rem' }}>
            {whoUsesIt.map((w, i) => (
              <div key={i} className="card" style={{ textAlign: 'center', padding: '2rem 1.5rem' }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: 'linear-gradient(135deg,#7c3aed,#ec4899)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', fontSize: '1.1rem', fontWeight: '800' }}>
                  {w.role[0]}
                </div>
                <h4 style={{ fontWeight: '700', marginBottom: '0.5rem' }}>{w.role}</h4>
                <p style={{ color: '#64748b', fontSize: '0.82rem', lineHeight: '1.6' }}>{w.use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON ── */}
      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-tag">Why Switch</div>
            <h2 className="section-heading">NexaHub HR vs <span className="gradient-text">the old way</span></h2>
          </div>
          <div style={{ background: 'rgba(17,17,48,0.8)', border: '1px solid rgba(139,92,246,0.15)', borderRadius: '1.25rem', overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', padding: '1rem 1.5rem', background: 'rgba(124,58,237,0.08)', borderBottom: '1px solid rgba(139,92,246,0.1)' }}>
              <span style={{ fontWeight: '700', fontSize: '0.82rem', color: '#64748b' }}>Task</span>
              <span style={{ fontWeight: '700', fontSize: '0.82rem', color: '#64748b', textAlign: 'center' }}>Old Way</span>
              <span style={{ fontWeight: '700', fontSize: '0.82rem', color: '#a78bfa', textAlign: 'center' }}>NexaHub HR</span>
            </div>
            {hrVsOld.map((row, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', padding: '1rem 1.5rem', borderBottom: i < hrVsOld.length - 1 ? '1px solid rgba(139,92,246,0.06)' : 'none', alignItems: 'center' }}>
                <span style={{ fontWeight: '600', fontSize: '0.875rem', color: '#e2e8f0' }}>{row.feature}</span>
                <span style={{ textAlign: 'center', fontSize: '0.82rem', color: '#ef4444' }}>✗ {row.old}</span>
                <span style={{ textAlign: 'center', fontSize: '0.82rem', color: '#10b981' }}>✓ {row.nexahub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ padding: '5rem 2rem', background: 'rgba(124,58,237,0.06)', borderTop: '1px solid rgba(124,58,237,0.12)', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 className="section-heading">Replace your HRMS <span className="gradient-text">today</span></h2>
          <p className="section-sub" style={{ margin: '0 auto 2rem' }}>Full People & HR module included in every NexaHub plan. Setup takes minutes — not weeks.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://workw.com/login" target="_blank" rel="noreferrer" className="btn-primary" style={{ fontSize: '1rem' }}>
              Get Started Free <ArrowRight size={16} />
            </a>
            <Link to="/pricing" className="btn-secondary">View Pricing</Link>
          </div>
        </div>
      </section>

    </div>
  );
}

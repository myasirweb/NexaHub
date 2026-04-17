import { Link } from 'react-router-dom';
import { MessageSquare, Bell, MessagesSquare, Mail, FolderOpen, ArrowRight, CheckCircle, Search, Users, Zap, Lock, ChevronRight } from 'lucide-react';

const stats = [
  { value: '60%', label: 'Fewer missed updates' },
  { value: '3×', label: 'Less time in email' },
  { value: '100%', label: 'Context-linked conversations' },
  { value: '1', label: 'Platform instead of Slack + Email + Drive' },
];

const messageFeatures = [
  { title: '1:1 and Group Chats', desc: 'Start a chat with any team member or create group threads for projects, departments, or topics. No channel limits.' },
  { title: 'Read Receipts', desc: 'Know when your message has been seen. No more "did you get my message?" follow-up calls.' },
  { title: 'File Sharing', desc: 'Send documents, images, and videos directly in chat. Preview files without downloading. Search all shared files later.' },
  { title: 'Voice Notes', desc: 'Record a quick voice message when typing would take too long. Transcribed automatically for searchability.' },
  { title: 'Task Creation from Chat', desc: 'Turn any chat message into a task with one click. Assigned, prioritised, and linked to the right project — without leaving the conversation.' },
  { title: 'Threaded Replies', desc: 'Reply directly to any message in a thread. Keeps long conversations organised without scrolling through hundreds of messages.' },
];

const docFeatures = [
  { icon: FolderOpen, color: '#10b981', title: 'Folder Structure', desc: 'Organise documents into folders and sub-folders by project, department, or topic. Drag-and-drop to reorganise anytime.' },
  { icon: Lock, color: '#7c3aed', title: 'Co-Edit Permissions', desc: 'Set per-document permissions: view only, comment, or full edit. Share externally with time-limited links.' },
  { icon: Search, color: '#3b82f6', title: 'Instant Search', desc: 'Search across all documents by title, content, author, or date. Find anything in seconds — even in PDF content.' },
  { icon: CheckCircle, color: '#f59e0b', title: 'Version History', desc: 'Every save creates a version. Restore any previous version with one click. Never lose work accidentally again.' },
];

export default function Communication() {
  return (
    <div style={{ paddingTop: '72px', background: '#06061a' }}>

      {/* ── HERO ── */}
      <section style={{ padding: '5rem 2rem 4rem', position: 'relative', overflow: 'hidden' }}>
        <div className="dot-bg" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />
        <div className="orb" style={{ width: '600px', height: '600px', background: 'rgba(245,158,11,0.1)', top: '-100px', right: '-200px' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div className="section-tag"><MessageSquare size={12} /> Communication Module</div>
          <h1 className="section-heading" style={{ maxWidth: '820px', margin: '0 auto 1rem' }}>
            One channel for everything your team needs to <span className="gradient-text">say, share, and find</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#94a3b8', lineHeight: '1.75', marginBottom: '2.5rem', maxWidth: '680px', margin: '0 auto 2.5rem' }}>
            Replace Slack + email + Google Drive for internal comms entirely. Every NexaHub conversation is contextually linked to a project, task, or HR record — so nothing is ever lost or out of context.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <a href="https://workw.com/login" target="_blank" rel="noreferrer" className="btn-primary" style={{ fontSize: '1rem' }}>Start Free <ArrowRight size={16} /></a>
            <Link to="/pricing" className="btn-secondary">View Pricing</Link>
          </div>

          {/* Tool replacement */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', background: 'rgba(17,17,48,0.8)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: '1rem', padding: '1rem 2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <span style={{ fontSize: '0.82rem', color: '#64748b' }}>Replaces:</span>
            {['Slack', '+', 'Outlook / Gmail', '+', 'Google Drive'].map((t, i) => (
              <span key={i} style={{ fontSize: '0.875rem', fontWeight: i % 2 === 0 ? '700' : '400', color: i % 2 === 0 ? '#e2e8f0' : '#475569' }}>{t}</span>
            ))}
            <ArrowRight size={14} color="#64748b" />
            <span style={{ fontSize: '0.875rem', fontWeight: '800', color: '#f59e0b' }}>NexaHub</span>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ padding: '3rem 2rem', background: 'rgba(13,13,43,0.5)', borderTop: '1px solid rgba(245,158,11,0.1)', borderBottom: '1px solid rgba(245,158,11,0.1)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '2rem', textAlign: 'center' }}>
          {stats.map(s => (
            <div key={s.label}>
              <div className="stat-number">{s.value}</div>
              <div style={{ color: '#64748b', fontSize: '0.875rem', marginTop: '0.25rem' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── NEWSFEED ── */}
      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div className="section-tag"><Bell size={12} /> Company Newsfeed</div>
              <h2 className="section-heading">Everyone on the <span className="gradient-text">same page — always</span></h2>
              <p style={{ color: '#94a3b8', lineHeight: '1.8', marginBottom: '2rem' }}>
                The company Newsfeed is your organisation's living bulletin board. HR posts policy updates. Leadership shares milestones. Teams celebrate wins. Every post reaches the right audience — no email blasts, no missed announcements.
              </p>
              {[
                { title: 'Pinned Posts', desc: 'Important announcements stay at the top until HR unpins them. New hires always see what matters.' },
                { title: 'Reactions & Comments', desc: 'Employees engage with posts through emoji reactions and threaded comments. Feedback without meetings.' },
                { title: '@Mentions', desc: 'Tag individuals or entire departments. Tagged users get a notification instantly — no matter what they\'re doing.' },
                { title: 'Department Segmentation', desc: 'Post to the whole company or target a specific department. Marketing news doesn\'t flood the engineering feed.' },
                { title: 'Rich Media Posts', desc: 'Embed images, videos, PDFs, and external links in any post. Announcements that actually get read.' },
              ].map((f, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <CheckCircle size={15} color="#f59e0b" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <span style={{ fontWeight: '700', fontSize: '0.875rem', color: '#e2e8f0' }}>{f.title} — </span>
                    <span style={{ color: '#64748b', fontSize: '0.875rem' }}>{f.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Newsfeed mockup */}
            <div style={{ background: 'rgba(13,13,43,0.95)', border: '1px solid rgba(245,158,11,0.25)', borderRadius: '1.25rem', padding: '1.5rem' }} className="float">
              <div style={{ fontSize: '0.72rem', color: '#64748b', marginBottom: '1rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Company Newsfeed</div>
              {[
                { author: 'Sarah (HR)', avatar: 'S', color: '#7c3aed', time: '2h ago', tag: '📌 Pinned', content: 'New Remote Work Policy effective May 1st. Please read the updated guidelines in the Documents section.', reactions: '👍 24  ❤️ 12', pinned: true },
                { author: 'Ahmed (CEO)', avatar: 'A', color: '#10b981', time: '5h ago', tag: '🏆 Milestone', content: 'We just crossed 10,000 active customers! Incredible team effort this quarter. 🚀', reactions: '🎉 87  👏 64', pinned: false },
                { author: 'Priya (PM)', avatar: 'P', color: '#3b82f6', time: '1d ago', tag: '✅ Update', content: 'Product v3.2 shipped successfully. Zero critical bugs in the first 24 hours. Team crushed it.', reactions: '💪 41  🔥 38', pinned: false },
              ].map((post, i) => (
                <div key={i} style={{ background: post.pinned ? 'rgba(245,158,11,0.05)' : 'rgba(255,255,255,0.02)', border: `1px solid ${post.pinned ? 'rgba(245,158,11,0.2)' : 'rgba(255,255,255,0.04)'}`, borderRadius: '0.75rem', padding: '0.875rem', marginBottom: '0.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: post.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', fontWeight: '700' }}>{post.avatar}</div>
                      <span style={{ fontSize: '0.78rem', fontWeight: '700', color: '#e2e8f0' }}>{post.author}</span>
                      <span style={{ fontSize: '0.68rem', color: post.pinned ? '#f59e0b' : '#475569' }}>{post.tag}</span>
                    </div>
                    <span style={{ fontSize: '0.68rem', color: '#475569' }}>{post.time}</span>
                  </div>
                  <p style={{ fontSize: '0.78rem', color: '#94a3b8', lineHeight: '1.5', marginBottom: '0.5rem' }}>{post.content}</p>
                  <div style={{ fontSize: '0.68rem', color: '#475569' }}>{post.reactions}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MESSAGING ── */}
      <section style={{ padding: '5rem 2rem', background: 'rgba(10,10,30,0.5)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-tag"><MessagesSquare size={12} /> Real-Time Messaging</div>
            <h2 className="section-heading">Chat that's <span className="gradient-text">built for work — not distraction</span></h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>Unlike Slack, every NexaHub chat message can be turned into a task, linked to a project, or escalated to management — without ever switching apps.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.25rem' }}>
            {messageFeatures.map(f => (
              <div key={f.title} className="card hover-lift" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', border: '1px solid rgba(245,158,11,0.1)' }}>
                <CheckCircle size={18} color="#f59e0b" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontWeight: '700', marginBottom: '0.3rem', fontSize: '0.95rem' }}>{f.title}</h4>
                  <p style={{ color: '#64748b', fontSize: '0.82rem', lineHeight: '1.6', margin: 0 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GROUPS & MAILBOX ── */}
      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div className="section-tag"><Mail size={12} /> Groups & Mailbox</div>
              <h2 className="section-heading">Shared inboxes that <span className="gradient-text">actually get managed</span></h2>
              <p style={{ color: '#94a3b8', lineHeight: '1.8', marginBottom: '2rem' }}>
                Group email addresses like hr@company.com or support@company.com are black holes — emails arrive but no one knows who's responsible. NexaHub Group Mailbox fixes this with assigned ownership, read receipts, and response SLAs.
              </p>
              {[
                'Create group mailboxes for any department or function',
                'Assign incoming messages to specific team members',
                'Set response SLA targets with automated escalation',
                'Group email forwarding — all replies go through NexaHub',
                'Role-based posting permissions — only admins can broadcast',
                'Archive and search all group messages instantly',
              ].map((f, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.65rem' }}>
                  <CheckCircle size={14} color="#7c3aed" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: '1.5' }}>{f}</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { name: 'hr@company.com', members: 4, unread: 3, color: '#7c3aed' },
                { name: 'support@company.com', members: 6, unread: 12, color: '#3b82f6' },
                { name: 'finance@company.com', members: 3, unread: 1, color: '#10b981' },
                { name: 'sales@company.com', members: 8, unread: 7, color: '#f59e0b' },
              ].map(m => (
                <div key={m.name} style={{ background: 'rgba(17,17,48,0.8)', border: `1px solid ${m.color}20`, borderRadius: '0.875rem', padding: '1rem 1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderLeft: `3px solid ${m.color}` }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Mail size={16} color={m.color} />
                    <div>
                      <div style={{ fontWeight: '700', fontSize: '0.875rem' }}>{m.name}</div>
                      <div style={{ fontSize: '0.72rem', color: '#64748b' }}>{m.members} members</div>
                    </div>
                  </div>
                  <div style={{ background: `${m.color}20`, color: m.color, fontWeight: '700', fontSize: '0.78rem', padding: '0.2rem 0.65rem', borderRadius: '1rem' }}>{m.unread} unread</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DOCUMENTS ── */}
      <section style={{ padding: '5rem 2rem', background: 'rgba(10,10,30,0.5)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-tag"><FolderOpen size={12} /> Document Library</div>
            <h2 className="section-heading">Every file your team needs — <span className="gradient-text">searchable, versioned, shared right</span></h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>No more "I can't find the latest version" or "who has access to this file?" NexaHub Documents is a centralised, permission-controlled library built for teams.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1.25rem', marginBottom: '2.5rem' }}>
            {docFeatures.map(f => (
              <div key={f.title} className="card hover-lift" style={{ textAlign: 'center', padding: '2rem 1.5rem', border: `1px solid ${f.color}18` }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: `${f.color}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', border: `1px solid ${f.color}22` }}>
                  <f.icon size={24} color={f.color} />
                </div>
                <h4 style={{ fontWeight: '700', marginBottom: '0.5rem', fontSize: '0.95rem' }}>{f.title}</h4>
                <p style={{ color: '#64748b', fontSize: '0.82rem', lineHeight: '1.6' }}>{f.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ background: 'rgba(17,17,48,0.8)', border: '1px solid rgba(139,92,246,0.15)', borderRadius: '1rem', padding: '1.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div style={{ fontWeight: '700', marginBottom: '0.25rem' }}>Supported file types</div>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {['PDF', 'DOCX', 'XLSX', 'PPTX', 'PNG/JPG', 'MP4', 'ZIP', 'CSV'].map(t => (
                  <span key={t} style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)', borderRadius: '0.375rem', padding: '0.2rem 0.6rem', fontSize: '0.75rem', color: '#a78bfa' }}>{t}</span>
                ))}
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '1.25rem', fontWeight: '800', color: '#10b981' }}>Preview without downloading</div>
              <div style={{ fontSize: '0.82rem', color: '#64748b' }}>PDFs, images, and office files open instantly in the browser</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ENGAGEMENT STAT ── */}
      <section style={{ padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.1), rgba(59,130,246,0.08))', border: '1px solid rgba(245,158,11,0.2)', borderRadius: '1.5rem', padding: '3rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div className="orb" style={{ width: '300px', height: '300px', background: 'rgba(245,158,11,0.08)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ fontSize: '4rem', fontWeight: '900', background: 'linear-gradient(135deg,#f59e0b,#3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: '1', marginBottom: '0.5rem' }}>60%</div>
              <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#e2e8f0', marginBottom: '0.5rem' }}>fewer missed updates</div>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', maxWidth: '500px', margin: '0 auto' }}>Teams that move internal communication to NexaHub report 60% fewer missed updates — and 40% fewer "quick sync" meetings that could have been a message.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '4rem 2rem', textAlign: 'center', borderTop: '1px solid rgba(245,158,11,0.1)' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 className="section-heading">Stop losing context <span className="gradient-text">between apps</span></h2>
          <p className="section-sub" style={{ margin: '0 auto 2rem' }}>Newsfeed, chat, mailbox, and documents — all in one platform your team will actually use.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://workw.com/login" target="_blank" rel="noreferrer" className="btn-primary" style={{ fontSize: '1rem' }}>Try Communication Free <ArrowRight size={16} /></a>
            <Link to="/pricing" className="btn-secondary">View Pricing</Link>
          </div>
        </div>
      </section>

    </div>
  );
}

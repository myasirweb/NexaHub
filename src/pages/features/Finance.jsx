import { Link } from 'react-router-dom';
import {
  DollarSign, FileText, FileCheck, BarChart2, ArrowRight, CheckCircle,
  TrendingUp, Clock, Shield, RefreshCw, ChevronRight, Zap, AlertCircle
} from 'lucide-react';

const stats = [
  { value: '50%', label: 'Faster invoice processing' },
  { value: '0', label: 'Manual reconciliation needed' },
  { value: '92%', label: 'On-time payment rate' },
  { value: '3×', label: 'Faster quote-to-invoice conversion' },
];

const invoiceStages = [
  { stage: 'Draft', color: '#64748b', desc: 'Created, not yet sent' },
  { stage: 'Sent', color: '#3b82f6', desc: 'Client notified by email' },
  { stage: 'Viewed', color: '#7c3aed', desc: 'Client opened the invoice' },
  { stage: 'Paid', color: '#10b981', desc: 'Payment confirmed' },
  { stage: 'Overdue', color: '#ef4444', desc: 'Past due date, auto-reminder sent' },
];

const invoiceFeatures = [
  { title: 'Professional Templates', desc: 'Custom-branded invoice templates with your logo, colours, and payment terms. Looks like a large company from day one.' },
  { title: 'Multi-Currency Support', desc: 'Invoice in any currency. Exchange rates auto-updated. Client sees their local currency — you see your base currency total.' },
  { title: 'Tax & Discount Rules', desc: 'Apply percentage or flat discounts. Add multiple tax rates per line item. Preview the final total before sending.' },
  { title: 'One-Click Send', desc: 'Email invoice directly from NexaHub with a "View Invoice" link. Client sees a professional web page — not a PDF attachment.' },
  { title: 'Automated Reminders', desc: 'Set automatic follow-up emails: 3 days before due, on due date, and 7 days overdue. Chasing payments is no longer your job.' },
  { title: 'Payment Status Tracking', desc: 'Real-time status on every invoice. Get notified the moment a client views or pays. No more "did you receive our invoice?" calls.' },
];

const transactionTypes = [
  { type: 'Income', desc: 'Sales revenue, service fees, subscription payments', color: '#10b981', icon: TrendingUp },
  { type: 'Expenses', desc: 'Operating costs, vendor payments, utilities', color: '#ef4444', icon: DollarSign },
  { type: 'Reimbursements', desc: 'Employee expense claims with receipt upload', color: '#f59e0b', icon: RefreshCw },
  { type: 'Project Costs', desc: 'Costs linked to specific projects or clients', color: '#3b82f6', icon: FileText },
];

export default function Finance() {
  return (
    <div style={{ paddingTop: '72px', background: '#06061a' }}>

      {/* ── HERO ── */}
      <section style={{ padding: '5rem 2rem 4rem', position: 'relative', overflow: 'hidden' }}>
        <div className="dot-bg" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />
        <div className="orb" style={{ width: '600px', height: '600px', background: 'rgba(16,185,129,0.12)', top: '-100px', right: '-200px' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <div className="section-tag"><DollarSign size={12} /> Finance & Operations Module</div>
            <h1 className="section-heading">Your numbers, inside the work — <span className="gradient-text">not in another tab</span></h1>
            <p style={{ fontSize: '1.1rem', color: '#94a3b8', lineHeight: '1.75', marginBottom: '2.5rem', maxWidth: '680px', margin: '0 auto 2.5rem' }}>
              Finance data stuck in QuickBooks while your projects run in Jira? NexaHub fixes the reconciliation gap. Every invoice, quote, and expense lives in the same platform where work actually happens.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
              <a href="https://workw.com/login" target="_blank" rel="noreferrer" className="btn-primary" style={{ fontSize: '1rem' }}>See Finance Features <ArrowRight size={16} /></a>
              <Link to="/pricing" className="btn-secondary">View Pricing</Link>
            </div>
          </div>

          {/* Finance overview cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1rem' }}>
            {[
              { icon: FileText, color: '#10b981', label: 'Invoices', stat: 'Unlimited', desc: 'Professional, branded' },
              { icon: FileCheck, color: '#3b82f6', label: 'Quotations', stat: 'Track', desc: 'Quote-to-invoice flow' },
              { icon: DollarSign, color: '#7c3aed', label: 'Transactions', stat: 'Full ledger', desc: 'Income & expenses' },
              { icon: BarChart2, color: '#f59e0b', label: 'Analytics', stat: 'Live', desc: 'Revenue & cost reports' },
            ].map(m => (
              <div key={m.label} className="card" style={{ textAlign: 'center', border: `1px solid ${m.color}20`, padding: '1.5rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: `${m.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', border: `1px solid ${m.color}25` }}>
                  <m.icon size={22} color={m.color} />
                </div>
                <div style={{ fontSize: '1.1rem', fontWeight: '800', color: m.color, marginBottom: '0.2rem' }}>{m.stat}</div>
                <div style={{ fontWeight: '700', fontSize: '0.875rem', marginBottom: '0.2rem' }}>{m.label}</div>
                <div style={{ color: '#64748b', fontSize: '0.75rem' }}>{m.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ padding: '3rem 2rem', background: 'rgba(13,13,43,0.5)', borderTop: '1px solid rgba(16,185,129,0.1)', borderBottom: '1px solid rgba(16,185,129,0.1)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '2rem', textAlign: 'center' }}>
          {stats.map(s => (
            <div key={s.label}>
              <div className="stat-number">{s.value}</div>
              <div style={{ color: '#64748b', fontSize: '0.875rem', marginTop: '0.25rem' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── INVOICES DEEP DIVE ── */}
      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
            <div>
              <div className="section-tag"><FileText size={12} /> Invoices</div>
              <h2 className="section-heading">Invoices that <span className="gradient-text">get paid faster</span></h2>
              <p style={{ color: '#94a3b8', lineHeight: '1.8', marginBottom: '2rem' }}>
                The average business waits 38 days to get paid on an invoice. NexaHub reduces that to under 14 days — through automated reminders, real-time tracking, and professional presentation that builds trust.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                {invoiceFeatures.map(f => (
                  <div key={f.title} style={{ padding: '1rem', background: 'rgba(16,185,129,0.05)', border: '1px solid rgba(16,185,129,0.12)', borderRadius: '0.75rem' }}>
                    <div style={{ fontWeight: '700', fontSize: '0.875rem', color: '#10b981', marginBottom: '0.25rem' }}>{f.title}</div>
                    <div style={{ color: '#64748b', fontSize: '0.82rem', lineHeight: '1.5' }}>{f.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              {/* Invoice status flow */}
              <h4 style={{ fontWeight: '700', marginBottom: '1.5rem', color: '#e2e8f0' }}>Invoice lifecycle — real time</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {invoiceStages.map((s, i) => (
                  <div key={s.stage} style={{ display: 'flex', gap: '1rem', position: 'relative' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: `${s.color}20`, border: `2px solid ${s.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, zIndex: 1 }}>
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: s.color }} />
                      </div>
                      {i < invoiceStages.length - 1 && <div style={{ width: '2px', height: '40px', background: `${s.color}30` }} />}
                    </div>
                    <div style={{ paddingBottom: i < invoiceStages.length - 1 ? '0' : 0, paddingTop: '8px', marginBottom: i < invoiceStages.length - 1 ? '0' : 0 }}>
                      <div style={{ fontWeight: '700', fontSize: '0.9rem', color: s.color }}>{s.stage}</div>
                      <div style={{ color: '#64748b', fontSize: '0.8rem', paddingBottom: '1.25rem' }}>{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Sample invoice card */}
              <div style={{ marginTop: '1.5rem', background: 'rgba(13,13,43,0.9)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '1rem', padding: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', alignItems: 'flex-start' }}>
                  <div>
                    <div style={{ fontWeight: '800', color: '#e2e8f0', fontSize: '0.9rem' }}>INV-2026-0149</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Acme Corp · Due Apr 20, 2026</div>
                  </div>
                  <span style={{ background: 'rgba(16,185,129,0.12)', color: '#10b981', fontSize: '0.72rem', fontWeight: '700', padding: '0.2rem 0.65rem', borderRadius: '2rem' }}>PAID</span>
                </div>
                {[['Design Services', 5, 500], ['Development (40hrs)', 40, 100], ['Hosting Setup', 1, 200]].map(([desc, qty, rate]) => (
                  <div key={desc} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.4rem 0', borderBottom: '1px solid rgba(255,255,255,0.04)', fontSize: '0.78rem' }}>
                    <span style={{ color: '#94a3b8' }}>{desc}</span>
                    <span style={{ color: '#e2e8f0' }}>${(qty * rate).toLocaleString()}</span>
                  </div>
                ))}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.75rem', fontWeight: '800', color: '#10b981', fontSize: '0.95rem' }}>
                  <span>Total</span><span>$8,700</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUOTATIONS ── */}
      <section style={{ padding: '5rem 2rem', background: 'rgba(10,10,30,0.5)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-tag"><FileCheck size={12} /> Quotations</div>
            <h2 className="section-heading">Quotes that <span className="gradient-text">convert to invoices in one click</span></h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>Build a quote, get internal approval, send to client, track when they view it, then convert to an invoice without re-entering a single line item.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '1rem', marginBottom: '2.5rem' }}>
            {['Build Quote', 'Internal Approval', 'Send to Client', 'Client Views', 'Convert to Invoice'].map((step, i) => (
              <div key={step} style={{ textAlign: 'center', position: 'relative' }}>
                {i < 4 && <div style={{ position: 'absolute', top: '20px', left: 'calc(50% + 20px)', width: 'calc(100% - 40px)', height: '2px', background: 'linear-gradient(90deg,#3b82f6,transparent)' }} />}
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(59,130,246,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.75rem', fontSize: '0.8rem', fontWeight: '800', color: '#3b82f6', position: 'relative', zIndex: 1 }}>{i + 1}</div>
                <div style={{ fontSize: '0.82rem', fontWeight: '600', color: '#e2e8f0', lineHeight: '1.3' }}>{step}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.25rem' }}>
            {[
              { title: 'Itemised Line Items', desc: 'Add unlimited line items with quantity, rate, description, and discount per item. Preview the final total as you build.' },
              { title: 'Internal Approval Before Sending', desc: 'No quote leaves without sign-off. Set a 1 or 2-step approval chain. Prevents incorrect pricing from reaching clients.' },
              { title: 'Version Control', desc: 'Client wants changes? Create a new version of the quote. Both versions are saved. Client always receives the latest — clearly labelled.' },
              { title: 'Conversion Tracking', desc: 'See your quote-to-invoice conversion rate by period. Identify which services have the highest close rate.' },
              { title: 'Quote Expiry Date', desc: 'Set an expiry date on every quote. Auto-email sent when expiry approaches. Urgency without aggressive follow-ups.' },
              { title: 'Client View Notification', desc: 'Know the exact moment a client opens your quote. Sales can follow up while the quote is top of mind.' },
            ].map(f => (
              <div key={f.title} className="card" style={{ border: '1px solid rgba(59,130,246,0.12)' }}>
                <h4 style={{ fontWeight: '700', marginBottom: '0.5rem', color: '#3b82f6', fontSize: '0.95rem' }}>{f.title}</h4>
                <p style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: '1.7', margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRANSACTIONS ── */}
      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div className="section-tag"><DollarSign size={12} /> Transaction Ledger</div>
              <h2 className="section-heading">Every transaction, <span className="gradient-text">in one place with full context</span></h2>
              <p style={{ color: '#94a3b8', lineHeight: '1.8', marginBottom: '2rem' }}>
                Spreadsheet-based accounting creates silos — your finance team can't see which project a cost belongs to, and your project managers don't know the financial impact of their decisions. NexaHub fixes this at the source.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                {transactionTypes.map(t => (
                  <div key={t.type} style={{ display: 'flex', gap: '1rem', padding: '1rem', background: `${t.color}08`, borderRadius: '0.75rem', border: `1px solid ${t.color}20`, borderLeft: `3px solid ${t.color}` }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: `${t.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <t.icon size={16} color={t.color} />
                    </div>
                    <div>
                      <div style={{ fontWeight: '700', fontSize: '0.875rem', color: t.color, marginBottom: '0.2rem' }}>{t.type}</div>
                      <div style={{ color: '#64748b', fontSize: '0.8rem' }}>{t.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {['Filter by project', 'Filter by department', 'Filter by date range', 'Export to CSV', 'Audit trail'].map(f => (
                  <span key={f} style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)', borderRadius: '2rem', padding: '0.3rem 0.875rem', fontSize: '0.78rem', color: '#a78bfa' }}>{f}</span>
                ))}
              </div>
            </div>

            {/* Ledger mockup */}
            <div style={{ background: 'rgba(13,13,43,0.95)', border: '1px solid rgba(124,58,237,0.2)', borderRadius: '1.25rem', padding: '1.5rem' }}>
              <div style={{ fontSize: '0.72rem', color: '#64748b', marginBottom: '1rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'flex', justifyContent: 'space-between' }}>
                Transaction Ledger <span style={{ color: '#10b981' }}>Apr 2026</span>
              </div>
              {[
                { desc: 'Invoice #INV-149 — Acme Corp', type: 'Income', amount: '+$8,700', color: '#10b981' },
                { desc: 'AWS Hosting — March', type: 'Expense', amount: '-$342', color: '#ef4444' },
                { desc: 'Invoice #INV-148 — TechFlow', type: 'Income', amount: '+$5,200', color: '#10b981' },
                { desc: 'Ahmed K. — Expense Claim', type: 'Reimbursement', amount: '-$180', color: '#f59e0b' },
                { desc: 'Figma Annual License', type: 'Expense', amount: '-$576', color: '#ef4444' },
                { desc: 'Invoice #INV-150 — BuildRight', type: 'Income', amount: '+$12,400', color: '#10b981' },
              ].map((t, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.625rem 0', borderBottom: i < 5 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: '#e2e8f0', marginBottom: '0.1rem' }}>{t.desc}</div>
                    <div style={{ fontSize: '0.68rem', color: '#475569' }}>{t.type}</div>
                  </div>
                  <span style={{ fontWeight: '700', fontSize: '0.875rem', color: t.color }}>{t.amount}</span>
                </div>
              ))}
              <div style={{ marginTop: '1rem', padding: '0.875rem', background: 'rgba(16,185,129,0.08)', borderRadius: '0.75rem', border: '1px solid rgba(16,185,129,0.15)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: '600' }}>Net This Month</span>
                <span style={{ fontWeight: '800', color: '#10b981', fontSize: '1rem' }}>+$25,202</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINANCE ANALYTICS ── */}
      <section style={{ padding: '5rem 2rem', background: 'rgba(10,10,30,0.5)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-tag"><BarChart2 size={12} /> Finance Analytics</div>
            <h2 className="section-heading">Financial visibility that <span className="gradient-text">leaders actually need</span></h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>Stop waiting for the end-of-month report. NexaHub finance analytics are always live — so you can make decisions based on today's numbers, not last month's.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.25rem' }}>
            {[
              { title: 'Revenue Chart', desc: 'Monthly revenue vs target. See trends, spot dips early, and track year-over-year growth — all without exporting a single spreadsheet.', color: '#10b981' },
              { title: 'Outstanding Invoices', desc: 'Total value of unpaid invoices, segmented by age — current, 30 days, 60 days, 90+ days. Cash flow risk at a glance.', color: '#3b82f6' },
              { title: 'Expense Breakdown', desc: 'Costs by department, project, and category. See where money is actually going — and where to cut without hurting output.', color: '#7c3aed' },
              { title: 'Profit Margin by Project', desc: 'Link invoices to projects and track actual margin per engagement. Know which clients are your most and least profitable.', color: '#f59e0b' },
              { title: 'Payment Velocity', desc: 'Average days to payment per client. Identify slow payers before cash flow becomes a problem. Proactive collections.', color: '#ec4899' },
              { title: 'Accounting Tool Sync', desc: 'Connect to Xero, QuickBooks, or Wave. NexaHub pushes approved transactions automatically — no double entry, ever.', color: '#64748b' },
            ].map(m => (
              <div key={m.title} className="card" style={{ borderLeft: `3px solid ${m.color}`, border: `1px solid ${m.color}15` }}>
                <h4 style={{ fontWeight: '700', marginBottom: '0.5rem', color: m.color, fontSize: '0.95rem' }}>{m.title}</h4>
                <p style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: '1.7', margin: 0 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW FINANCE CONNECTS ── */}
      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <div className="section-tag"><Zap size={12} /> Connected Finance</div>
          <h2 className="section-heading">Finance that <span className="gradient-text">knows what's happening in your business</span></h2>
          <p className="section-sub" style={{ margin: '0 auto 3rem' }}>Because finance lives in the same platform as projects and HR, your numbers always reflect reality.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.25rem', textAlign: 'left' }}>
            {[
              { from: 'Projects', to: 'Finance', desc: 'Project milestone completed → Invoice auto-drafted and sent to client for that deliverable.' },
              { from: 'HR', to: 'Finance', desc: 'Bonus approved in HR module → Payroll export generated automatically, no re-entry needed.' },
              { from: 'Inventory', to: 'Finance', desc: 'Purchase requisition approved → Supplier invoice linked directly to the requisition record.' },
            ].map(c => (
              <div key={c.from} className="card" style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.875rem' }}>
                  <span style={{ background: 'rgba(16,185,129,0.12)', color: '#10b981', padding: '0.25rem 0.65rem', borderRadius: '0.375rem', fontSize: '0.78rem', fontWeight: '700' }}>{c.from}</span>
                  <ArrowRight size={14} color="#64748b" />
                  <span style={{ background: 'rgba(16,185,129,0.12)', color: '#10b981', padding: '0.25rem 0.65rem', borderRadius: '0.375rem', fontSize: '0.78rem', fontWeight: '700' }}>Finance</span>
                </div>
                <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: '1.65', margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '5rem 2rem', background: 'rgba(16,185,129,0.05)', borderTop: '1px solid rgba(16,185,129,0.1)', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 className="section-heading">Eliminate the <span className="gradient-text">reconciliation gap</span></h2>
          <p className="section-sub" style={{ margin: '0 auto 2rem' }}>Finance + Projects + HR in one place — no more Excel exports or manual reconciliation. Ever.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://workw.com/login" target="_blank" rel="noreferrer" className="btn-primary" style={{ fontSize: '1rem' }}>Start Free Trial <ArrowRight size={16} /></a>
            <Link to="/pricing" className="btn-secondary">View Pricing</Link>
          </div>
        </div>
      </section>

    </div>
  );
}

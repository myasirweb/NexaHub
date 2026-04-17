import { Link } from 'react-router-dom';
import {
  Package, Cpu, ShoppingCart, ClipboardList, BarChart2, ArrowRight, CheckCircle,
  AlertTriangle, MapPin, RotateCcw, FileText, Users, TrendingUp, Shield,
  Layers, Search, Bell, Download, Tag, ChevronRight, Star, Zap, Lock, Globe
} from 'lucide-react';

/* ── shared styles ───────────────────────────── */
const card = {
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '16px',
  padding: '1.75rem',
};

const tag = (color) => ({
  display: 'inline-flex', alignItems: 'center', gap: '6px',
  background: `${color}15`, border: `1px solid ${color}30`,
  borderRadius: '8px', padding: '4px 12px',
  fontSize: '0.75rem', fontWeight: '600', color,
});

const pill = (color) => ({
  display: 'inline-block', background: `${color}20`, color,
  borderRadius: '999px', padding: '2px 10px', fontSize: '0.72rem', fontWeight: '600',
});

/* ── data ────────────────────────────────────── */
const stats = [
  { value: '85%', label: 'Reduction in asset loss', sub: 'vs spreadsheet tracking' },
  { value: '3×', label: 'Faster request approvals', sub: 'structured workflow vs WhatsApp' },
  { value: '100%', label: 'Asset visibility', sub: 'real-time, across all locations' },
  { value: '0', label: 'Manual reconciliations', sub: 'auto-tracked at every step' },
];

const modules = [
  { icon: Cpu, color: '#ec4899', title: 'Asset Allocation', desc: 'Assign & track company assets to employees' },
  { icon: ShoppingCart, color: '#7c3aed', title: 'Item Requests', desc: 'Employee self-service request portal' },
  { icon: ClipboardList, color: '#3b82f6', title: 'Requisition Mgmt', desc: 'Formal procurement with multi-level approvals' },
  { icon: Package, color: '#10b981', title: 'Inventory Catalog', desc: 'Master SKU catalog with live stock levels' },
  { icon: BarChart2, color: '#f59e0b', title: 'Analytics', desc: 'Utilisation, overdue, and spend reports' },
];

const assetTypes = [
  { icon: Cpu, label: 'Electronics', examples: 'Laptops · Phones · Tablets · Monitors', color: '#7c3aed' },
  { icon: Package, label: 'Furniture', examples: 'Desks · Chairs · Cabinets · Shelving', color: '#ec4899' },
  { icon: Shield, label: 'Vehicles', examples: 'Cars · Bikes · Vans · Machinery', color: '#3b82f6' },
  { icon: Layers, label: 'Equipment', examples: 'Cameras · Projectors · Printers · Tools', color: '#10b981' },
  { icon: Tag, label: 'Accessories', examples: 'Headsets · Keyboards · Bags · Chargers', color: '#f59e0b' },
  { icon: Lock, label: 'Access & Keys', examples: 'Access cards · Keys · Badges · Lockers', color: '#06b6d4' },
];

const allocationSteps = [
  { step: '1', title: 'Search Catalog', desc: 'Find the asset by name, SKU, or category. See real-time availability count.', color: '#7c3aed' },
  { step: '2', title: 'Select Employee', desc: 'Link to HR profile — name, department, location auto-filled from the system.', color: '#ec4899' },
  { step: '3', title: 'Set Conditions', desc: 'Record condition at handover (New / Good / Fair / Damaged) with optional photo.', color: '#3b82f6' },
  { step: '4', title: 'Generate Receipt', desc: 'One-click handover receipt with digital signature capture. Sent to employee email.', color: '#10b981' },
  { step: '5', title: 'Schedule Return', desc: 'Set expected return date. Auto-reminder sent 7 days before due. Overdue flag after.', color: '#f59e0b' },
];

const requestSteps = [
  { num: '01', title: 'Employee Submits', desc: 'Selects item category, quantity, reason for request, and urgency level from a structured form.', color: '#7c3aed' },
  { num: '02', title: 'Manager Reviews', desc: 'Manager receives a structured notification — sees request details, history, and current stock level.', color: '#ec4899' },
  { num: '03', title: 'Inventory Check', desc: 'System auto-checks if item is in stock or requires new procurement. Routes accordingly.', color: '#3b82f6' },
  { num: '04', title: 'Approved & Issued', desc: 'Employee notified. Item marked as allocated and removed from available stock automatically.', color: '#10b981' },
];

const requisitionFeatures = [
  { icon: Shield, color: '#7c3aed', title: 'Multi-Level Approval', desc: 'Define approval chains: Line Manager → Department Head → Finance → CEO. Each level sets spending limits.' },
  { icon: TrendingUp, color: '#ec4899', title: 'Budget Validation', desc: 'Each requisition is checked against department budget in real time. Over-budget requests are flagged, not blocked — with an escalation path.' },
  { icon: Globe, color: '#3b82f6', title: 'Preferred Vendor Field', desc: 'Attach preferred vendor from your vendor list. Capture vendor quote, payment terms, and delivery timeline in one record.' },
  { icon: FileText, color: '#10b981', title: 'Auto PO Generation', desc: 'Once approved, system generates a structured Purchase Order draft — ready to send directly to the vendor with one click.' },
  { icon: Bell, color: '#f59e0b', title: 'Audit-Ready Trail', desc: 'Every approval, rejection, and comment is timestamped and stored. Full audit trail exportable to PDF or CSV for compliance.' },
  { icon: AlertTriangle, color: '#06b6d4', title: 'Rogue Purchase Prevention', desc: 'No purchase can happen outside the system. If an employee bypasses requisition, the finance team sees the flag.' },
];

const catalogItems = [
  { sku: 'EL-0041', name: 'Dell Laptop XPS 15', category: 'Electronics', total: 30, allocated: 24, available: 6, status: 'Low Stock', statusColor: '#f59e0b' },
  { sku: 'FN-0012', name: 'Ergonomic Office Chair', category: 'Furniture', total: 50, allocated: 47, available: 3, status: 'Critical', statusColor: '#ef4444' },
  { sku: 'AC-0089', name: 'USB-C Hub (5-port)', category: 'Accessories', total: 80, allocated: 31, available: 49, status: 'In Stock', statusColor: '#10b981' },
  { sku: 'EQ-0023', name: 'Canon DSLR Camera', category: 'Equipment', total: 10, allocated: 9, available: 1, status: 'Critical', statusColor: '#ef4444' },
  { sku: 'AC-0101', name: 'Noise-Cancel Headset', category: 'Accessories', total: 60, allocated: 28, available: 32, status: 'In Stock', statusColor: '#10b981' },
];

const analyticsMetrics = [
  { value: '94%', label: 'Asset Utilisation Rate', desc: 'Across all categories', color: '#7c3aed' },
  { value: '12', label: 'Overdue Returns', desc: 'This month — with reminders sent', color: '#ef4444' },
  { value: '₨ 2.4M', label: 'Total Asset Value Tracked', desc: 'Live, across all departments', color: '#10b981' },
  { value: '38', label: 'Open Item Requests', desc: 'Pending approval or fulfillment', color: '#f59e0b' },
  { value: '7 days', label: 'Avg. Request Cycle Time', desc: 'From submission to fulfilment', color: '#3b82f6' },
  { value: '99%', label: 'Reconciliation Accuracy', desc: 'Physical vs system count', color: '#ec4899' },
];

const personas = [
  { icon: Users, color: '#7c3aed', title: 'Operations Managers', desc: 'Full visibility across all assets and locations. Set thresholds, manage vendors, and review utilisation reports from one dashboard.' },
  { icon: Shield, color: '#ec4899', title: 'Admin & Procurement', desc: 'Process item requests without back-and-forth emails. Manage the catalog, run stock audits, and generate POs from approved requisitions instantly.' },
  { icon: Cpu, color: '#3b82f6', title: 'IT Departments', desc: "Assign and reclaim tech assets with full condition history. Know which laptop belongs to whom, when it was issued, and when it's due back." },
  { icon: TrendingUp, color: '#10b981', title: 'Finance Teams', desc: 'See asset spending by department, validate requisition budgets, and export complete asset ledgers for depreciation and audit purposes.' },
];

const comparison = [
  { aspect: 'Asset Assignment', old: 'Excel sheet updated manually, shared via email', nexahub: 'Digital assignment with HR profile link, instant receipt' },
  { aspect: 'Item Requests', old: 'WhatsApp message to manager — often forgotten', nexahub: 'Structured form with auto-routing and full approval trail' },
  { aspect: 'Procurement', old: 'Verbal approval or paper form, no budget check', nexahub: 'Multi-level approval chain with real-time budget validation' },
  { aspect: 'Stock Monitoring', old: 'Quarterly physical count, always out of date', nexahub: 'Live catalog with low-stock alerts and auto-reorder triggers' },
  { aspect: 'Overdue Returns', old: 'No system — chased manually through HR or managers', nexahub: 'Automatic reminders, overdue flag, linked to exit process' },
  { aspect: 'Audit & Compliance', old: 'Hours of manual reconciliation before each audit', nexahub: 'One-click export — full audit trail with timestamps' },
];

/* ═══════════════════════════════════════════════ */
export default function Inventory() {
  return (
    <div style={{ paddingTop: '72px', background: '#06061a', color: '#e2e8f0', fontFamily: 'Inter, sans-serif' }}>

      {/* ── HERO ─────────────────────────────────── */}
      <section style={{ padding: '5rem 2rem 3rem', position: 'relative', overflow: 'hidden' }}>
        <div className="dot-bg" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />
        <div className="orb" style={{ width: '600px', height: '600px', background: 'rgba(236,72,153,0.12)', top: '-150px', right: '-200px' }} />
        <div className="orb" style={{ width: '400px', height: '400px', background: 'rgba(124,58,237,0.1)', bottom: '-100px', left: '-100px' }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>

            {/* Left copy */}
            <div>
              <div className="section-tag" style={{ marginBottom: '1.5rem' }}><Package size={12} /> Inventory Management</div>
              <h1 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: '800', lineHeight: '1.15', marginBottom: '1.25rem' }}>
                Know exactly <span className="gradient-text">what you own,<br />where it is, who has it</span>
              </h1>
              <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: '1.75', marginBottom: '2rem' }}>
                Spreadsheets get stale. WhatsApp approvals get lost. NexaHub Inventory is the only asset management module built directly inside an HR + Project platform — so allocation, requests, and procurement all connect to the people and work they belong to.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                <a href="https://workw.com/login" target="_blank" rel="noreferrer" className="btn-primary">Start Tracking <ArrowRight size={16} /></a>
                <Link to="/pricing" className="btn-secondary">View Pricing</Link>
              </div>
              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                {['Real-time stock visibility', 'No WhatsApp approvals', 'Full audit trail'].map(f => (
                  <span key={f} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', color: '#10b981' }}>
                    <CheckCircle size={14} /> {f}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — live inventory dashboard mockup */}
            <div style={{ ...card, padding: '1.5rem', position: 'relative' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <span style={{ fontWeight: '700', fontSize: '0.9rem' }}>Inventory Dashboard</span>
                <span style={{ ...pill('#10b981') }}>Live</span>
              </div>

              {/* 4 mini metric cards */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.25rem' }}>
                {[
                  { label: 'Total Assets', val: '842', color: '#7c3aed' },
                  { label: 'Allocated', val: '718', color: '#ec4899' },
                  { label: 'Available', val: '124', color: '#10b981' },
                  { label: 'Overdue Returns', val: '12', color: '#ef4444' },
                ].map(m => (
                  <div key={m.label} style={{ background: `${m.color}10`, border: `1px solid ${m.color}25`, borderRadius: '10px', padding: '0.875rem' }}>
                    <div style={{ fontSize: '1.4rem', fontWeight: '800', color: m.color }}>{m.val}</div>
                    <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginTop: '2px' }}>{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Recent allocations */}
              <div style={{ fontSize: '0.72rem', color: '#64748b', marginBottom: '0.5rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Recent Activity</div>
              {[
                { action: 'Laptop XPS 15 allocated', who: 'Sana Rehman · Engineering', time: '2m ago', icon: '💻' },
                { action: 'Headset requested', who: 'Ali Khan · Sales', time: '18m ago', icon: '🎧' },
                { action: 'Camera returned', who: 'Fatima Mir · Marketing', time: '1h ago', icon: '📷' },
                { action: 'PO generated #PO-0041', who: 'Admin · Procurement', time: '3h ago', icon: '📄' },
              ].map((a, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.6rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <span style={{ fontSize: '1.1rem' }}>{a.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: '500' }}>{a.action}</div>
                    <div style={{ fontSize: '0.7rem', color: '#64748b' }}>{a.who}</div>
                  </div>
                  <span style={{ fontSize: '0.68rem', color: '#475569' }}>{a.time}</span>
                </div>
              ))}

              {/* Low stock alert */}
              <div style={{ marginTop: '1rem', background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.25)', borderRadius: '10px', padding: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <AlertTriangle size={16} color="#f59e0b" />
                <div>
                  <div style={{ fontSize: '0.78rem', fontWeight: '600', color: '#f59e0b' }}>3 items below minimum threshold</div>
                  <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Office Chairs · Canon Camera · USB Hubs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────── */}
      <section style={{ padding: '3rem 2rem', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '2rem', textAlign: 'center' }}>
          {stats.map(s => (
            <div key={s.label}>
              <div className="stat-number" style={{ fontSize: '2.5rem' }}>{s.value}</div>
              <div style={{ fontWeight: '700', fontSize: '0.9rem', marginBottom: '0.25rem' }}>{s.label}</div>
              <div style={{ color: '#64748b', fontSize: '0.78rem' }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHAT IS INVENTORY ────────────────────── */}
      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-tag" style={{ margin: '0 auto 1rem' }}><Package size={12} /> Platform Overview</div>
            <h2 className="section-heading">What is <span className="gradient-text">NexaHub Inventory?</span></h2>
            <p className="section-sub" style={{ margin: '0 auto', maxWidth: '680px' }}>
              NexaHub Inventory is a fully integrated asset and stock management system — not a standalone tool. Because it lives inside the same platform as your HR and project modules, every allocation, request, and procurement links back to real people and real departments.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '1rem', marginBottom: '4rem' }}>
            {modules.map(m => (
              <div key={m.title} style={{ ...card, borderTop: `3px solid ${m.color}`, textAlign: 'center', padding: '1.5rem 1rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: `${m.color}15`, border: `1px solid ${m.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.875rem' }}>
                  <m.icon size={22} color={m.color} />
                </div>
                <div style={{ fontWeight: '700', fontSize: '0.9rem', marginBottom: '0.35rem' }}>{m.title}</div>
                <div style={{ color: '#64748b', fontSize: '0.78rem', lineHeight: '1.5' }}>{m.desc}</div>
              </div>
            ))}
          </div>

          {/* Asset type coverage */}
          <div style={{ ...card, padding: '2rem' }}>
            <h3 style={{ fontWeight: '700', marginBottom: '0.5rem', textAlign: 'center' }}>Track Every Asset Type Your Business Owns</h3>
            <p style={{ color: '#64748b', fontSize: '0.875rem', textAlign: 'center', marginBottom: '2rem' }}>
              From a laptop to a vehicle to a key card — if it belongs to your company, NexaHub can track it.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '1rem' }}>
              {assetTypes.map(a => (
                <div key={a.label} style={{ background: `${a.color}08`, border: `1px solid ${a.color}20`, borderRadius: '12px', padding: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <a.icon size={16} color={a.color} />
                    <span style={{ fontWeight: '700', fontSize: '0.85rem', color: a.color }}>{a.label}</span>
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', lineHeight: '1.6' }}>{a.examples}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ASSET ALLOCATION ─────────────────────── */}
      <section style={{ padding: '5rem 2rem', background: 'rgba(124,58,237,0.04)', borderTop: '1px solid rgba(124,58,237,0.1)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-tag" style={{ margin: '0 auto 1rem', color: '#7c3aed', background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.25)' }}><Cpu size={12} /> Asset Allocation</div>
            <h2 className="section-heading">Every asset. <span className="gradient-text">Every employee. Connected.</span></h2>
            <p className="section-sub" style={{ margin: '0 auto', maxWidth: '640px' }}>
              Stop relying on a spreadsheet that's always one version behind. NexaHub links every company asset directly to the employee it's assigned to — with condition records, digital receipts, and return schedules baked in.
            </p>
          </div>

          {/* 5-step allocation workflow */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ fontWeight: '700', textAlign: 'center', marginBottom: '2rem', color: '#cbd5e1' }}>The Allocation Workflow — 5 Steps from Shelf to Employee</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '0', position: 'relative' }}>
              {allocationSteps.map((s, i) => (
                <div key={s.step} style={{ position: 'relative', textAlign: 'center', padding: '0 1rem' }}>
                  {/* connecting line */}
                  {i < allocationSteps.length - 1 && (
                    <div style={{ position: 'absolute', top: '28px', left: '60%', right: '-10%', height: '2px', background: `linear-gradient(90deg, ${s.color}60, transparent)`, zIndex: 0 }} />
                  )}
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: `${s.color}20`, border: `2px solid ${s.color}50`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', fontWeight: '800', fontSize: '1.1rem', color: s.color, position: 'relative', zIndex: 1 }}>
                    {s.step}
                  </div>
                  <div style={{ fontWeight: '700', fontSize: '0.85rem', marginBottom: '0.5rem' }}>{s.title}</div>
                  <div style={{ color: '#64748b', fontSize: '0.78rem', lineHeight: '1.6' }}>{s.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Employee view vs manager view */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            {/* Employee view */}
            <div style={{ ...card, borderLeft: '3px solid #7c3aed' }}>
              <div style={{ fontWeight: '700', fontSize: '0.9rem', color: '#7c3aed', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Users size={16} /> Employee View — My Assets</div>
              {[
                { name: 'Dell Laptop XPS 15', sku: 'EL-0041', issued: '01 Feb 2026', due: 'Permanent', status: 'Active', color: '#10b981' },
                { name: 'Noise-Cancel Headset', sku: 'AC-0101', issued: '15 Mar 2026', due: 'Permanent', status: 'Active', color: '#10b981' },
                { name: 'Office Chair (Ergonomic)', sku: 'FN-0012', issued: '01 Jan 2026', due: 'Permanent', status: 'Active', color: '#10b981' },
                { name: 'Canon DSLR Camera', sku: 'EQ-0023', issued: '10 Apr 2026', due: '17 Apr 2026', status: 'Due Soon', color: '#f59e0b' },
              ].map((a, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.6rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <div>
                    <div style={{ fontSize: '0.82rem', fontWeight: '500' }}>{a.name}</div>
                    <div style={{ fontSize: '0.7rem', color: '#64748b' }}>SKU: {a.sku} · Issued {a.issued}</div>
                  </div>
                  <span style={{ ...pill(a.color), fontSize: '0.68rem' }}>{a.status}</span>
                </div>
              ))}
              <div style={{ marginTop: '1rem', color: '#64748b', fontSize: '0.75rem' }}>Employees can request a return, report damage, or view their full asset history from their self-service portal.</div>
            </div>

            {/* Admin view */}
            <div style={{ ...card, borderLeft: '3px solid #ec4899' }}>
              <div style={{ fontWeight: '700', fontSize: '0.9rem', color: '#ec4899', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Shield size={16} /> Admin View — Allocation Overview</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.25rem' }}>
                {[
                  { label: 'Total Assigned', val: '718', color: '#7c3aed' },
                  { label: 'Overdue Returns', val: '12', color: '#ef4444' },
                  { label: 'Expiring This Week', val: '8', color: '#f59e0b' },
                  { label: 'Unallocated Assets', val: '124', color: '#10b981' },
                ].map(m => (
                  <div key={m.label} style={{ background: `${m.color}10`, borderRadius: '8px', padding: '0.75rem', textAlign: 'center' }}>
                    <div style={{ fontWeight: '800', fontSize: '1.2rem', color: m.color }}>{m.val}</div>
                    <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>{m.label}</div>
                  </div>
                ))}
              </div>
              <div style={{ color: '#64748b', fontSize: '0.75rem', lineHeight: '1.7' }}>
                Filter by department, location, asset type, or employee. Bulk-reassign when employees exit. Auto-trigger asset recovery on offboarding.
              </div>
              <div style={{ marginTop: '1rem', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '8px', padding: '0.75rem', fontSize: '0.75rem', color: '#fca5a5' }}>
                <strong>Offboarding link:</strong> When HR marks an employee as departed, NexaHub flags all assets under their name for recovery — automatically.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ITEM REQUEST PORTAL ───────────────────── */}
      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>

            {/* Left — request form mockup */}
            <div style={{ ...card, padding: '2rem' }}>
              <div style={{ fontWeight: '700', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><ShoppingCart size={16} color="#7c3aed" /> New Item Request</div>

              {[
                { label: 'Item Category', value: 'Electronics', type: 'select' },
                { label: 'Specific Item', value: 'Noise-Cancelling Headset', type: 'select' },
                { label: 'Quantity Needed', value: '1', type: 'input' },
                { label: 'Urgency', value: 'Standard (within 5 days)', type: 'select' },
              ].map(f => (
                <div key={f.label} style={{ marginBottom: '1rem' }}>
                  <div style={{ fontSize: '0.72rem', color: '#64748b', marginBottom: '0.35rem', fontWeight: '600' }}>{f.label}</div>
                  <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.6rem 0.875rem', fontSize: '0.82rem', color: '#e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {f.value}
                    {f.type === 'select' && <ChevronRight size={12} color="#64748b" />}
                  </div>
                </div>
              ))}

              <div style={{ marginBottom: '1rem' }}>
                <div style={{ fontSize: '0.72rem', color: '#64748b', marginBottom: '0.35rem', fontWeight: '600' }}>Reason / Justification</div>
                <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.75rem', fontSize: '0.8rem', color: '#94a3b8', lineHeight: '1.6', minHeight: '70px' }}>
                  Required for client calls and online meetings. Current headset is damaged.
                </div>
              </div>

              <div style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.2)', borderRadius: '8px', padding: '0.75rem', marginBottom: '1rem', fontSize: '0.75rem', color: '#a78bfa' }}>
                <strong>In Stock:</strong> 32 units available. Expected issue time: same day if approved.
              </div>

              <button style={{ width: '100%', background: 'linear-gradient(135deg,#7c3aed,#ec4899)', border: 'none', borderRadius: '10px', padding: '0.75rem', color: '#fff', fontWeight: '700', cursor: 'pointer', fontSize: '0.875rem' }}>
                Submit Request →
              </button>
            </div>

            {/* Right — copy */}
            <div>
              <div className="section-tag" style={{ marginBottom: '1.5rem', color: '#7c3aed', background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.25)' }}><ShoppingCart size={12} /> Item Request Portal</div>
              <h2 className="section-heading" style={{ marginBottom: '1rem' }}>Employees request. <span className="gradient-text">Managers approve. No WhatsApp needed.</span></h2>
              <p style={{ color: '#94a3b8', lineHeight: '1.75', marginBottom: '2rem' }}>
                The Item Request Portal gives every employee a structured way to ask for what they need. No informal messages, no forgotten requests — just a clean form that routes to the right person, checks stock, and logs every step.
              </p>

              {/* 4-step flow */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {requestSteps.map(s => (
                  <div key={s.num} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: `${s.color}20`, border: `2px solid ${s.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: '800', fontSize: '0.75rem', color: s.color }}>
                      {s.num}
                    </div>
                    <div>
                      <div style={{ fontWeight: '700', fontSize: '0.9rem', marginBottom: '0.25rem' }}>{s.title}</div>
                      <div style={{ color: '#64748b', fontSize: '0.8rem', lineHeight: '1.6' }}>{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '2rem', background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.15)', borderRadius: '12px', padding: '1rem' }}>
                <div style={{ fontWeight: '700', color: '#10b981', fontSize: '0.875rem', marginBottom: '0.25rem' }}>3× faster than informal requests</div>
                <div style={{ color: '#64748b', fontSize: '0.78rem' }}>Structured requests resolve in hours, not days. No context lost, no follow-up needed.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── REQUISITION MANAGEMENT ───────────────── */}
      <section style={{ padding: '5rem 2rem', background: 'rgba(59,130,246,0.04)', borderTop: '1px solid rgba(59,130,246,0.1)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-tag" style={{ margin: '0 auto 1rem', color: '#3b82f6', background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.25)' }}><ClipboardList size={12} /> Procurement</div>
            <h2 className="section-heading">From request to PO — <span className="gradient-text">zero rogue purchases</span></h2>
            <p className="section-sub" style={{ margin: '0 auto', maxWidth: '660px' }}>
              Requisition Management formalises procurement inside NexaHub. Every new purchase goes through a structured approval chain, budget check, and vendor review — before a single rupee is spent.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {requisitionFeatures.map(f => (
              <div key={f.title} style={{ ...card, borderLeft: `3px solid ${f.color}` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: `${f.color}15`, border: `1px solid ${f.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <f.icon size={17} color={f.color} />
                  </div>
                  <span style={{ fontWeight: '700', fontSize: '0.88rem' }}>{f.title}</span>
                </div>
                <p style={{ color: '#64748b', fontSize: '0.8rem', lineHeight: '1.7' }}>{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Approval chain visual */}
          <div style={{ ...card, padding: '2rem', textAlign: 'center' }}>
            <div style={{ fontWeight: '700', marginBottom: '1.5rem', color: '#cbd5e1' }}>Sample Approval Chain for a ₨ 150,000 Equipment Purchase</div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0', flexWrap: 'wrap', gap: '0.5rem' }}>
              {[
                { role: 'Employee', action: 'Submits Requisition', color: '#7c3aed' },
                { role: 'Line Manager', action: 'Reviews & Approves (up to ₨50K)', color: '#ec4899' },
                { role: 'Dept Head', action: 'Approves (up to ₨200K)', color: '#3b82f6' },
                { role: 'Finance', action: 'Budget check & Vendor review', color: '#10b981' },
                { role: 'System', action: 'Auto-generates PO draft', color: '#f59e0b' },
              ].map((step, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ background: `${step.color}15`, border: `1px solid ${step.color}30`, borderRadius: '10px', padding: '0.75rem 1rem', textAlign: 'center', minWidth: '120px' }}>
                    <div style={{ fontSize: '0.72rem', color: step.color, fontWeight: '700' }}>{step.role}</div>
                    <div style={{ fontSize: '0.65rem', color: '#64748b', marginTop: '2px', lineHeight: '1.4' }}>{step.action}</div>
                  </div>
                  {i < 4 && <ChevronRight size={16} color="#475569" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INVENTORY CATALOG ────────────────────── */}
      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>

            {/* Left — copy */}
            <div>
              <div className="section-tag" style={{ marginBottom: '1.5rem', color: '#10b981', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)' }}><Package size={12} /> Inventory Catalog</div>
              <h2 className="section-heading" style={{ marginBottom: '1rem' }}>Your master stock list — <span className="gradient-text">always up to date</span></h2>
              <p style={{ color: '#94a3b8', lineHeight: '1.75', marginBottom: '2rem' }}>
                The Inventory Catalog is the single source of truth for everything your company owns and stocks. Every SKU, every quantity, every location — updated in real time as items are allocated, returned, or purchased.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { icon: Search, color: '#10b981', title: 'Search by SKU, Name, or Category', desc: 'Find any item in seconds across thousands of records.' },
                  { icon: AlertTriangle, color: '#f59e0b', title: 'Low-Stock Threshold Alerts', desc: 'Set minimum stock levels per item. Get notified before you run out.' },
                  { icon: MapPin, color: '#3b82f6', title: 'Multi-Location Tracking', desc: 'Assign storage locations (Warehouse A, Floor 3, IT Room). See where each unit physically sits.' },
                  { icon: Download, color: '#7c3aed', title: 'CSV Export for Audits', desc: 'Export the full catalog or filtered view in one click — perfect for annual asset audits.' },
                  { icon: RotateCcw, color: '#ec4899', title: 'Auto Stock Update on Every Action', desc: 'Allocations, returns, requisitions, and damages — all update the catalog count instantly.' },
                ].map(f => (
                  <div key={f.title} style={{ display: 'flex', gap: '0.875rem' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: `${f.color}15`, border: `1px solid ${f.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <f.icon size={16} color={f.color} />
                    </div>
                    <div>
                      <div style={{ fontWeight: '700', fontSize: '0.85rem', marginBottom: '0.2rem' }}>{f.title}</div>
                      <div style={{ color: '#64748b', fontSize: '0.78rem', lineHeight: '1.6' }}>{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — live catalog table mockup */}
            <div style={{ ...card, padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span style={{ fontWeight: '700', fontSize: '0.875rem' }}>Inventory Catalog</span>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <span style={{ ...pill('#7c3aed') }}>842 Items</span>
                  <span style={{ ...pill('#10b981') }}>All Categories</span>
                </div>
              </div>

              {/* Header row */}
              <div style={{ display: 'grid', gridTemplateColumns: '0.7fr 1.4fr 1fr 0.7fr 0.7fr 0.8fr', gap: '0.5rem', padding: '0.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.08)', fontSize: '0.65rem', color: '#475569', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                <span>SKU</span><span>Item Name</span><span>Category</span><span>Total</span><span>Avail.</span><span>Status</span>
              </div>

              {catalogItems.map((item, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '0.7fr 1.4fr 1fr 0.7fr 0.7fr 0.8fr', gap: '0.5rem', padding: '0.65rem 0', borderBottom: '1px solid rgba(255,255,255,0.04)', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.67rem', color: '#64748b', fontFamily: 'monospace' }}>{item.sku}</span>
                  <span style={{ fontSize: '0.75rem', fontWeight: '500' }}>{item.name}</span>
                  <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>{item.category}</span>
                  <span style={{ fontSize: '0.75rem', textAlign: 'center' }}>{item.total}</span>
                  <span style={{ fontSize: '0.75rem', textAlign: 'center', color: item.available < 5 ? '#ef4444' : '#10b981', fontWeight: '700' }}>{item.available}</span>
                  <span style={{ ...pill(item.statusColor), fontSize: '0.62rem' }}>{item.status}</span>
                </div>
              ))}

              {/* Low stock alert banner */}
              <div style={{ marginTop: '1rem', background: 'rgba(239,68,68,0.07)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '8px', padding: '0.75rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <Bell size={14} color="#ef4444" />
                <div style={{ fontSize: '0.75rem', color: '#fca5a5' }}>
                  <strong>2 items at critical stock level.</strong> Consider raising a requisition.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INVENTORY ANALYTICS ──────────────────── */}
      <section style={{ padding: '5rem 2rem', background: 'rgba(245,158,11,0.04)', borderTop: '1px solid rgba(245,158,11,0.1)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-tag" style={{ margin: '0 auto 1rem', color: '#f59e0b', background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.25)' }}><BarChart2 size={12} /> Analytics</div>
            <h2 className="section-heading">Inventory decisions <span className="gradient-text">backed by data, not guesses</span></h2>
            <p className="section-sub" style={{ margin: '0 auto', maxWidth: '640px' }}>
              The Inventory Analytics dashboard gives operations managers and finance leaders a real-time view of asset utilisation, pending requests, spending trends, and overdue returns.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {analyticsMetrics.map(m => (
              <div key={m.label} style={{ ...card, borderTop: `3px solid ${m.color}` }}>
                <div style={{ fontSize: '2rem', fontWeight: '800', color: m.color, marginBottom: '0.35rem' }}>{m.value}</div>
                <div style={{ fontWeight: '700', fontSize: '0.9rem', marginBottom: '0.25rem' }}>{m.label}</div>
                <div style={{ color: '#64748b', fontSize: '0.78rem' }}>{m.desc}</div>
              </div>
            ))}
          </div>

          {/* Analytics charts mockup */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '1.5rem' }}>
            {/* Utilisation by department bar chart */}
            <div style={{ ...card, padding: '2rem' }}>
              <div style={{ fontWeight: '700', marginBottom: '0.25rem' }}>Asset Utilisation by Department</div>
              <div style={{ color: '#64748b', fontSize: '0.78rem', marginBottom: '1.5rem' }}>% of allocated assets actively in use · Last 30 days</div>
              {[
                { dept: 'Engineering', pct: 97, color: '#7c3aed' },
                { dept: 'Marketing', pct: 88, color: '#ec4899' },
                { dept: 'Sales', pct: 91, color: '#3b82f6' },
                { dept: 'Finance', pct: 75, color: '#10b981' },
                { dept: 'Admin', pct: 62, color: '#f59e0b' },
                { dept: 'Operations', pct: 84, color: '#06b6d4' },
              ].map(d => (
                <div key={d.dept} style={{ marginBottom: '0.875rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px', fontSize: '0.78rem' }}>
                    <span>{d.dept}</span><span style={{ color: d.color, fontWeight: '700' }}>{d.pct}%</span>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '4px', height: '6px' }}>
                    <div style={{ width: `${d.pct}%`, height: '6px', borderRadius: '4px', background: d.color, transition: 'width 1s' }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Monthly request volume */}
            <div style={{ ...card, padding: '2rem' }}>
              <div style={{ fontWeight: '700', marginBottom: '0.25rem' }}>Monthly Request Volume</div>
              <div style={{ color: '#64748b', fontSize: '0.78rem', marginBottom: '1.5rem' }}>Item requests submitted & resolved · 2026</div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '0.5rem', height: '120px', marginBottom: '0.5rem' }}>
                {[
                  { month: 'Jan', submitted: 28, resolved: 26 },
                  { month: 'Feb', submitted: 35, resolved: 33 },
                  { month: 'Mar', submitted: 42, resolved: 38 },
                  { month: 'Apr', submitted: 38, resolved: 35 },
                ].map(m => (
                  <div key={m.month} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
                    <div style={{ display: 'flex', gap: '2px', alignItems: 'flex-end', width: '100%', justifyContent: 'center' }}>
                      <div style={{ width: '12px', background: '#7c3aed', borderRadius: '3px 3px 0 0', height: `${m.submitted * 2.5}px` }} />
                      <div style={{ width: '12px', background: '#10b981', borderRadius: '3px 3px 0 0', height: `${m.resolved * 2.5}px` }} />
                    </div>
                    <span style={{ fontSize: '0.65rem', color: '#64748b' }}>{m.month}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.7rem', color: '#94a3b8' }}><span style={{ width: '8px', height: '8px', background: '#7c3aed', borderRadius: '2px', display: 'inline-block' }} /> Submitted</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.7rem', color: '#94a3b8' }}><span style={{ width: '8px', height: '8px', background: '#10b981', borderRadius: '2px', display: 'inline-block' }} /> Resolved</span>
              </div>

              <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[
                  { label: 'Avg resolution time', val: '7 days', color: '#7c3aed' },
                  { label: 'Pending this month', val: '38', color: '#f59e0b' },
                  { label: 'Rejection rate', val: '4.2%', color: '#ef4444' },
                ].map(m => (
                  <div key={m.label} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', padding: '0.4rem 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <span style={{ color: '#64748b' }}>{m.label}</span>
                    <span style={{ color: m.color, fontWeight: '700' }}>{m.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO USES IT ──────────────────────────── */}
      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-tag" style={{ margin: '0 auto 1rem' }}><Users size={12} /> For Every Team</div>
            <h2 className="section-heading">Built for the people who <span className="gradient-text">actually manage assets</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))', gap: '1.5rem' }}>
            {personas.map(p => (
              <div key={p.title} style={{ ...card, borderTop: `3px solid ${p.color}` }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: `${p.color}15`, border: `1px solid ${p.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <p.icon size={22} color={p.color} />
                </div>
                <h3 style={{ fontWeight: '700', fontSize: '0.95rem', marginBottom: '0.75rem', color: p.color }}>{p.title}</h3>
                <p style={{ color: '#64748b', fontSize: '0.82rem', lineHeight: '1.7' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ─────────────────────── */}
      <section style={{ padding: '5rem 2rem', background: 'rgba(124,58,237,0.04)', borderTop: '1px solid rgba(124,58,237,0.1)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-tag" style={{ margin: '0 auto 1rem' }}><Star size={12} /> Why NexaHub</div>
            <h2 className="section-heading">Your old system <span className="gradient-text">vs NexaHub Inventory</span></h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>Spreadsheets and WhatsApp cost you more than you think.</p>
          </div>

          <div style={{ ...card, padding: 0, overflow: 'hidden' }}>
            {/* Table header */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr 1.2fr', background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ padding: '1rem 1.25rem', fontWeight: '700', fontSize: '0.8rem', color: '#64748b' }}>Area</div>
              <div style={{ padding: '1rem 1.25rem', fontWeight: '700', fontSize: '0.8rem', color: '#ef4444', borderLeft: '1px solid rgba(255,255,255,0.06)' }}>Old Way</div>
              <div style={{ padding: '1rem 1.25rem', fontWeight: '700', fontSize: '0.8rem', color: '#10b981', borderLeft: '1px solid rgba(255,255,255,0.06)' }}>NexaHub Inventory</div>
            </div>

            {comparison.map((row, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr 1.2fr', borderBottom: i < comparison.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)' }}>
                <div style={{ padding: '1rem 1.25rem', fontSize: '0.82rem', fontWeight: '600', color: '#cbd5e1' }}>{row.aspect}</div>
                <div style={{ padding: '1rem 1.25rem', fontSize: '0.8rem', color: '#94a3b8', borderLeft: '1px solid rgba(255,255,255,0.05)', display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <span style={{ color: '#ef4444', marginTop: '2px', flexShrink: 0 }}>✗</span> {row.old}
                </div>
                <div style={{ padding: '1rem 1.25rem', fontSize: '0.8rem', color: '#e2e8f0', borderLeft: '1px solid rgba(255,255,255,0.05)', display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <span style={{ color: '#10b981', marginTop: '2px', flexShrink: 0 }}>✓</span> {row.nexahub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────── */}
      <section style={{ padding: '5rem 2rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="orb" style={{ width: '500px', height: '500px', background: 'rgba(236,72,153,0.12)', top: '-100px', left: '50%', transform: 'translateX(-50%)' }} />
        <div style={{ maxWidth: '700px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div className="section-tag" style={{ margin: '0 auto 1.5rem' }}><Zap size={12} /> Get Started</div>
          <h2 className="section-heading">Eliminate asset chaos. <span className="gradient-text">Start in minutes.</span></h2>
          <p className="section-sub" style={{ margin: '0 auto 2.5rem' }}>
            The only inventory system that lives inside your HR + Project platform. No extra tool. No duplicate data. No more WhatsApp approvals.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://workw.com/login" target="_blank" rel="noreferrer" className="btn-primary">Start Free Trial <ArrowRight size={16} /></a>
            <Link to="/pricing" className="btn-secondary">See Pricing</Link>
          </div>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {['No credit card required', 'Free setup assistance', 'Cancel anytime'].map(f => (
              <span key={f} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#64748b' }}>
                <CheckCircle size={14} color="#10b981" /> {f}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

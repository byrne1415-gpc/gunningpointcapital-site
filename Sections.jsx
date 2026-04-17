/* global React */
function PortfolioGrid() {
  const items = [
    { status: 'Stabilized', name: 'Kemper Road Residences', body: '80-unit market-rate residential development on an 18,000 sf parcel, with ground-floor retail and a long-term tax abatement.', meta: ['$14.75MM', '80 units', '2024'] },
    { status: 'In development', name: 'Newport Crossing', body: 'Acquisition and reposition of a 32,000 sf vacant factory. Environmental remediation complete; entitlements in hand.', meta: ['$13MM', '40 units', '2026'] },
    { status: 'Stabilized', name: 'Somerville Walk', body: '16-unit garden-style reconstruction. Rent roll increased 25% within twelve months through targeted capital improvements.', meta: ['$4.2MM', '16 units', '2023'] },
    { status: 'Under review', name: 'Malden Parcel 07', body: 'Assemblage of three contiguous parcels near transit. Zoning study in progress; community engagement ongoing.', meta: ['TBD', '~120 units', '2027'] },
  ];
  const chipClass = (s) => s === 'Stabilized' ? 'stabilized' : s === 'In development' ? 'dev' : 'info';
  return (
    <section className="gpc-section">
      <div className="gpc-container">
        <div className="gpc-eyebrow">Selected portfolio</div>
        <h2 className="gpc-h2">Projects completed, underway, and in assembly.</h2>
        <div className="gpc-portfolio">
          {items.map(it => (
            <article className="gpc-card" key={it.name}>
              <span className={'gpc-chip gpc-chip--' + chipClass(it.status)}>
                <span className="gpc-chip-dot"/>{it.status}
              </span>
              <h3 className="gpc-h3">{it.name}</h3>
              <p>{it.body}</p>
              <div className="gpc-card-meta">
                {it.meta.map(m => <span key={m}>{m}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="gpc-section">
      <div className="gpc-container">
        <div className="gpc-about">
          <div>
            <div className="gpc-eyebrow">About the firm</div>
            <h2 className="gpc-h2">A small partnership, a patient approach, a single market.</h2>
          </div>
          <div className="gpc-prose">
            <p>Gunning Point Capital was founded on the conviction that thoughtful, disciplined development — not aggressive financial engineering — is what turns underutilized parcels into lasting community assets.</p>
            <p>We operate exclusively in the Greater Boston area, where our partners have deep local relationships with municipalities, brokers, contractors, and lenders. We invest our own capital alongside a small group of limited partners, and we hold our projects long enough to see them stabilized.</p>
            <hr/>
            <p className="gpc-prose-meta">Based in Greater Boston · Operating since 2025 · Privately held</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection({ onSubmit, submitted }) {
  const [form, setForm] = React.useState({ name: '', email: '', note: '' });
  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    // Build a mailto: with the form contents pre-filled
    const subject = encodeURIComponent(`Website inquiry from ${form.name || 'website visitor'}`);
    const body = encodeURIComponent(
      `From: ${form.name}\nEmail: ${form.email}\n\n${form.note}`
    );
    window.location.href = `mailto:joe@gunningpointcapital.com?subject=${subject}&body=${body}`;
    onSubmit && onSubmit(form);
  };
  return (
    <section className="gpc-section gpc-section--warm">
      <div className="gpc-container">
        <div className="gpc-contact">
          <div>
            <div className="gpc-eyebrow">Get in touch</div>
            <h2 className="gpc-h2">We respond to every inquiry within two business days.</h2>
            <p>Whether you're a broker with a qualified deal, a limited partner exploring an allocation, or a community member with a question about a project, we would like to hear from you.</p>
            <div className="gpc-contact-meta">
              <div><h5>Office</h5><p className="gpc-contact-muted">Greater Boston, Massachusetts</p></div>
            </div>
          </div>
          <form className="gpc-form" onSubmit={submit}>
            {submitted ? (
              <div className="gpc-form-thanks">
                <div className="gpc-eyebrow" style={{color:'var(--gpc-brass-600)'}}>Message received</div>
                <h3 className="gpc-h3">Thank you.</h3>
                <p>Your email client should have opened with your message. We will be in touch within two business days.</p>
              </div>
            ) : (
              <>
                <div className="gpc-field">
                  <label>Full Name</label>
                  <input value={form.name} onChange={update('name')} required />
                </div>
                <div className="gpc-field">
                  <label>Email Address</label>
                  <input type="email" value={form.email} onChange={update('email')} required />
                </div>
                <div className="gpc-field">
                  <label>How can we help?</label>
                  <textarea rows="4" value={form.note} onChange={update('note')} />
                </div>
                <button className="gpc-btn gpc-btn--primary" type="submit">Send message</button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

window.GPC_PortfolioGrid = PortfolioGrid;
window.GPC_AboutSection = AboutSection;
window.GPC_ContactSection = ContactSection;

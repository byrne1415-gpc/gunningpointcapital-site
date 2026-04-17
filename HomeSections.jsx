/* global React */
function Hero({ onCta }) {
  return (
    <section style={{ position: 'relative', minHeight: 640, overflow: 'hidden', background: '#132A47' }}>
      {/* Photo */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: "url('assets/hero.webp')",
        backgroundSize: 'cover', backgroundPosition: 'center',
      }} />
      {/* Scrim: dark at bottom-left, fading up & right. Two layers for legibility + mood. */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(19,42,71,0.15) 0%, rgba(19,42,71,0.35) 45%, rgba(19,42,71,0.88) 100%)',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(90deg, rgba(19,42,71,0.55) 0%, rgba(19,42,71,0.15) 55%, rgba(19,42,71,0) 100%)',
      }} />
      {/* Content */}
      <div style={{ position: 'relative', minHeight: 640, display: 'flex', alignItems: 'flex-end' }}>
        <div className="gpc-container" style={{ width: '100%', padding: '0 40px 72px' }}>
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)', marginBottom: 20, textShadow: '0 1px 2px rgba(0,0,0,0.35)' }}>
            Greater Boston · Established 2025
          </div>
          <h1 style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontWeight: 500, fontSize: 64, lineHeight: 1.04, letterSpacing: '-0.01em',
            margin: '0 0 18px', color: '#FFFFFF', maxWidth: 920,
            textShadow: '0 2px 16px rgba(0,0,0,0.35)',
          }}>
            Repositioning underutilized real estate.
          </h1>
          <p style={{
            fontSize: 19, lineHeight: 1.55, color: 'rgba(255,255,255,0.95)',
            margin: '0 0 32px', maxWidth: 620,
            textShadow: '0 1px 8px rgba(0,0,0,0.35)',
          }}>
            We acquire value-add properties, develop them thoughtfully, and deliver exceptional returns alongside community growth.
          </p>
          <div style={{ display: 'flex', gap: 12 }}>
            <button className="gpc-btn gpc-btn--light" onClick={onCta}>View our approach</button>
            <button className="gpc-btn gpc-btn--ghost-light" onClick={onCta}>Contact us →</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pillars() {
  const pillars = [
    { kicker: '01', title: 'Investments', body: 'We focus on value-add and opportunistic properties, identifying underperforming or undervalued assets with significant potential for improvement.' },
    { kicker: '02', title: 'Development', body: 'From initial concept through construction to final leasing or sales, we manage every phase of the development process — driving returns and contributing to community growth.' },
  ];
  return (
    <section className="gpc-section">
      <div className="gpc-container">
        <div className="gpc-eyebrow">What we do</div>
        <div className="gpc-pillars">
          {pillars.map(p => (
            <article className="gpc-pillar" key={p.kicker}>
              <div className="gpc-pillar-kicker">{p.kicker}</div>
              <h3 className="gpc-h3">{p.title}</h3>
              <p>{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CurrentProject() {
  return (
    <section className="gpc-section gpc-section--warm">
      <div className="gpc-container">
        <div className="gpc-eyebrow">Current project</div>
        <h2 className="gpc-h2">Our first development is underway.</h2>
        <div className="gpc-current">
          <div className="gpc-current-frame" aria-label="Project site placeholder" />
          <div>
            <div className="gpc-pillar-kicker" style={{ color: 'var(--gpc-brass-600)' }}>In development</div>
            <h3 className="gpc-h3">Greater Boston · Project One</h3>
            <p>We are in the early stages of our inaugural development in the Greater Boston area. The project is in pre-construction and approaching a public launch later this year.</p>
            <p>Full project details, renderings, and unit information will be available at launch. For qualified partners and press inquiries, please reach out directly.</p>
            <button className="gpc-btn gpc-btn--secondary" style={{ marginTop: 8 }}>Request early details →</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { n: '$47M', l: 'Capital Deployed' },
    { n: '203', l: 'Units Delivered' },
    { n: '12%', l: 'Stabilized ROE' },
    { n: '7', l: 'Years Operating' },
  ];
  return (
    <section className="gpc-section gpc-section--warm">
      <div className="gpc-container">
        <div className="gpc-eyebrow">Track Record</div>
        <div className="gpc-stats">
          {stats.map(s => (
            <div className="gpc-stat" key={s.l}>
              <div className="gpc-stat-num">{s.n}</div>
              <div className="gpc-stat-lbl">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.GPC_Hero = Hero;
window.GPC_Pillars = Pillars;
window.GPC_Stats = Stats;
window.GPC_CurrentProject = CurrentProject;

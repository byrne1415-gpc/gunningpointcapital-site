/* global React */
const { useState } = React;

function Nav({ current, onNav }) {
  const links = ['Home', 'About', 'Contact'];
  const [open, setOpen] = useState(false);
  const go = (l) => { onNav(l); setOpen(false); };
  return (
    <nav className="gpc-nav">
      <button className="gpc-wm-btn" onClick={() => go('Home')} aria-label="Gunning Point Capital home">
        <img src="assets/logo-header.png" alt="Gunning Point Capital" className="gpc-wm-img" />
      </button>
      <button
        className="gpc-nav-toggle"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span className="gpc-nav-toggle-bar" />
        <span className="gpc-nav-toggle-bar" />
        <span className="gpc-nav-toggle-bar" />
      </button>
      <div className={'gpc-nav-links' + (open ? ' is-open' : '')}>
        {links.map(l => (
          <button
            key={l}
            className={'gpc-nav-link' + (current === l ? ' is-active' : '')}
            onClick={() => go(l)}
          >{l}</button>
        ))}
      </div>
    </nav>
  );
}
window.GPC_Nav = Nav;

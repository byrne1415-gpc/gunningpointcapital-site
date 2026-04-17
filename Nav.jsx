/* global React */
function Nav({ current, onNav }) {
  const links = ['Home', 'About', 'Contact'];
  return (
    <nav className="gpc-nav">
      <button className="gpc-wm-btn" onClick={() => onNav('Home')} aria-label="Gunning Point Capital home">
        <img src="assets/logo-header.png" alt="Gunning Point Capital" className="gpc-wm-img" />
      </button>
      <div className="gpc-nav-links">
        {links.map(l => (
          <button
            key={l}
            className={'gpc-nav-link' + (current === l ? ' is-active' : '')}
            onClick={() => onNav(l)}
          >{l}</button>
        ))}
      </div>
    </nav>
  );
}
window.GPC_Nav = Nav;

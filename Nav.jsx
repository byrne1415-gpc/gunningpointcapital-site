/* global React */
const { useState } = React;

function Nav({ current, onNav }) {
  const links = ['Home', 'About', 'Contact'];
  return (
    <nav className="gpc-nav">
      <button className="gpc-wm" onClick={() => onNav('Home')}>
        <span className="gpc-wm-top">Gunning Point</span>
        <span className="gpc-wm-bot">Capital</span>
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

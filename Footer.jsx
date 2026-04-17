/* global React */
function Footer() {
  return (
    <footer className="gpc-footer">
      <div className="gpc-footer-inner">
        <img src="assets/logo-header.png" alt="Gunning Point Capital" className="gpc-wm-img gpc-wm-img--light" />
        <div className="gpc-footer-cols">
          <div><h5>Firm</h5><a>About</a><a>Approach</a><a>Team</a></div>
          <div><h5>Project</h5><a>In development</a></div>
          <div><h5>Contact</h5><a>Greater Boston</a></div>
        </div>
      </div>
      <div className="gpc-footer-copy">© 2026 Gunning Point Capital LLC · All rights reserved</div>
    </footer>
  );
}
window.GPC_Footer = Footer;

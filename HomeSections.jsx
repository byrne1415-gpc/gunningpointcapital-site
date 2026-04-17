/* global React */
function Footer() {
  return (
    <footer className="gpc-footer">
      <div className="gpc-footer-inner">
        <div className="gpc-wm gpc-wm--light">
          <span className="gpc-wm-top">Gunning Point</span>
          <span className="gpc-wm-bot">Capital</span>
        </div>
        <div className="gpc-footer-cols">
          <div><h5>Firm</h5><a>About</a><a>Approach</a><a>Team</a></div>
          <div><h5>Project</h5><a>In development</a></div>
          <div><h5>Contact</h5><a>Greater Boston</a><a href="mailto:joe@gunningpointcapital.com">joe@gunningpointcapital.com</a></div>
        </div>
      </div>
      <div className="gpc-footer-copy">© 2026 Gunning Point Capital LLC · All rights reserved</div>
    </footer>
  );
}
window.GPC_Footer = Footer;

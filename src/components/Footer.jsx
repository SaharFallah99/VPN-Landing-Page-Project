/* ---------------------------------------------------------------- Footer -- */
const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__grid">
        <div className="footer__brand">
          <a className="brand" href="#top" aria-label="LaslesVPN home">
            <IconLogo />
            <span>
              Lasles<strong>VPN</strong>
            </span>
          </a>

          <p className="footer__about">
            <strong>LaslesVPN</strong> is a private virtual network that has unique features and has
            high security.
          </p>

          <div className="footer__social">
            <a href="#facebook" aria-label="Facebook">
              <IconFacebook />
            </a>
            <a href="#twitter" aria-label="Twitter">
              <IconTwitter />
            </a>
            <a href="#instagram" aria-label="Instagram">
              <IconInstagram />
            </a>
          </div>

          <p className="footer__copy">
            ©2020 <strong>LaslesVPN</strong>
          </p>
        </div>

        {FOOTER_COLUMNS.map((col) => (
          <div className="footer__col" key={col.title}>
            <h4>{col.title}</h4>
            <ul>
              {col.links.map((link) => (
                <li key={link}>
                  <a href={"#" + link.toLowerCase().replace(/[^a-z]+/g, "-")}>{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </footer>
);

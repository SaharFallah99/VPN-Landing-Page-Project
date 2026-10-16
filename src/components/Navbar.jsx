/* ---------------------------------------------------------------- Navbar -- */
const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={"navbar" + (scrolled ? " navbar--scrolled" : "")}>
      <div className="container">
        <div className="navbar__inner">
          <a className="brand" href="#top" aria-label="LaslesVPN home">
            <IconLogo />
            <span>
              Lasles<strong>VPN</strong>
            </span>
          </a>

          <nav className="navbar__links" aria-label="Main navigation">
            {NAV_LINKS.map((l) => (
              <a key={l.label} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="navbar__actions">
            <a className="navbar__signin" href="#signin">
              Sign In
            </a>
            <a className="btn btn--outline navbar__signup" href="#signup">
              Sign Up
            </a>
          </div>

          <button
            className="navbar__burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IconClose /> : <IconBurger />}
          </button>
        </div>
      </div>

      <div className={"navbar__mobile" + (open ? " is-open" : "")}>
        {NAV_LINKS.map((l) => (
          <a key={l.label} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a className="btn btn--outline" href="#signin" onClick={() => setOpen(false)}>
          Sign In
        </a>
        <a className="btn btn--primary" href="#signup" onClick={() => setOpen(false)}>
          Sign Up
        </a>
      </div>
    </header>
  );
};

/* -------------------------------------------------------------------------
   Icons — small, dependency free SVG components.
   ------------------------------------------------------------------------- */

const IconLogo = ({ size = 34 }) => (
  <svg viewBox="0 0 40 40" width={size} height={size} aria-hidden="true">
    <defs>
      <linearGradient id="lgLogo" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#f53855" />
        <stop offset="100%" stopColor="#f53838" />
      </linearGradient>
    </defs>
    <rect x="0" y="0" width="40" height="40" rx="11" fill="url(#lgLogo)" />
    <circle cx="15.5" cy="24.5" r="4.2" fill="#fff" />
    <path
      d="M13 16.5a11 11 0 0 1 10.5 8.2"
      fill="none"
      stroke="#fff"
      strokeWidth="3.4"
      strokeLinecap="round"
      opacity="0.95"
    />
    <path
      d="M12.5 10.5a17.5 17.5 0 0 1 16.8 13.2"
      fill="none"
      stroke="#fff"
      strokeWidth="3.4"
      strokeLinecap="round"
      opacity="0.6"
    />
  </svg>
);

const IconCheck = ({ size = 11 }) => (
  <svg viewBox="0 0 12 9" width={size} height={size * 0.75} aria-hidden="true">
    <path
      d="M1 4.4 4.2 7.6 11 1"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconStar = ({ size = 15, fill = "#FEA250", opacity = 1 }) => (
  <svg viewBox="0 0 20 19" width={size} height={size * 0.95} style={{ opacity }} aria-hidden="true">
    <path
      d="M10 0l2.75 6.35 6.9.6-5.23 4.53 1.56 6.72L10 14.5l-5.98 3.7 1.56-6.72L.35 6.95l6.9-.6L10 0z"
      fill={fill}
    />
  </svg>
);

const IconStarHalf = ({ size = 15 }) => (
  <svg viewBox="0 0 20 19" width={size} height={size * 0.95} aria-hidden="true">
    <defs>
      <linearGradient id="halfStar" x1="0" y1="0" x2="1" y2="0">
        <stop offset="50%" stopColor="#FEA250" />
        <stop offset="50%" stopColor="#DDE0E4" />
      </linearGradient>
    </defs>
    <path
      d="M10 0l2.75 6.35 6.9.6-5.23 4.53 1.56 6.72L10 14.5l-5.98 3.7 1.56-6.72L.35 6.95l6.9-.6L10 0z"
      fill="url(#halfStar)"
    />
  </svg>
);

const IconStarEmpty = ({ size = 15 }) => <IconStar size={size} fill="#DDE0E4" />;

const StatsIcon = ({ name }) => {
  const common = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  if (name === "users") {
    return (
      <svg {...common}>
        <path d="M21 15v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3" />
        <path d="M17 8l-5-5-5 5" />
        <path d="M12 3v13" />
      </svg>
    );
  }

  if (name === "location") {
    return (
      <svg {...common}>
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <rect x="3" y="3.5" width="18" height="7" rx="2" />
      <rect x="3" y="13.5" width="18" height="7" rx="2" />
      <path d="M7 7h.01M7 17h.01" />
    </svg>
  );
};

const ArrowLeft = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
    <path
      d="M19 12H5M11 6l-6 6 6 6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowRight = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
    <path
      d="M5 12h14M13 6l6 6-6 6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconBurger = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
    <path
      d="M4 7h16M4 12h16M4 17h16"
      fill="none"
      stroke="#0B132A"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const IconClose = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
    <path
      d="M6 6l12 12M18 6 6 18"
      fill="none"
      stroke="#0B132A"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const IconFacebook = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
    <path
      d="M13.6 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.29-.04-1.27-.12-2.41-.12-2.39 0-4.02 1.46-4.02 4.13v2.29H7.7V13h2.68v8z"
      fill="currentColor"
    />
  </svg>
);

const IconTwitter = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
    <path
      d="M18.9 4h-2.6l-3.4 4.2L9.7 4H5l5.7 7.2L5.4 18h2.7l3.6-4.5 3.3 4.5H20l-5.9-7.6L18.9 4z"
      fill="currentColor"
    />
  </svg>
);

const IconInstagram = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
    <rect
      x="3.4"
      y="3.4"
      width="17.2"
      height="17.2"
      rx="5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
    />
    <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.9" />
    <circle cx="16.9" cy="7.1" r="1.2" fill="currentColor" />
  </svg>
);

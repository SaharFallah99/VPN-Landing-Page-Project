/* -------------------------------------------------------------------------
   Illustrations - brand logos and reviewer avatars drawn as inline SVG so the
   page stays self contained. Every larger piece of artwork is the original
   file from the project's assets folder:
     • assets/Illustration 1.png                  - hero
     • assets/Illustration 2.png                  - features
     • assets/Free.png | Standard.png | Premium.png - pricing plans
     • assets/Huge Global.png                     - world map
   ------------------------------------------------------------------------- */

/* ---------------------------------------------------------------- BRANDS - */
const BrandLogo = ({ name }) => {
  const text = {
    fontSize: 26,
    fontWeight: 800,
    fontFamily: "Rubik, Segoe UI, sans-serif",
  };

  if (name === "netflix") {
    return (
      <svg viewBox="0 0 152 40" height="27" role="img" aria-label="Netflix">
        <text x="1" y="30" fill="#E50914" style={text} letterSpacing="-1.2">
          NETFLIX
        </text>
      </svg>
    );
  }

  if (name === "reddit") {
    return (
      <svg viewBox="0 0 134 40" height="28" role="img" aria-label="Reddit">
        <circle cx="19" cy="21" r="17" fill="#FF4500" />
        <circle cx="12.5" cy="20" r="3" fill="#fff" />
        <circle cx="25.5" cy="20" r="3" fill="#fff" />
        <circle cx="12.5" cy="20" r="1.3" fill="#FF4500" />
        <circle cx="25.5" cy="20" r="1.3" fill="#FF4500" />
        <path d="M12 27 q7 6 14 0" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M19 7 l3 -5 6 2" fill="none" stroke="#FF4500" strokeWidth="2.2" />
        <text x="42" y="31" fill="#FF4500" style={text} letterSpacing="-1">
          reddit
        </text>
      </svg>
    );
  }

  if (name === "amazon") {
    return (
      <svg viewBox="0 0 128 46" height="30" role="img" aria-label="Amazon">
        <text x="1" y="28" fill="#221F1F" style={text} letterSpacing="-1.5">
          amazon
        </text>
        <path
          d="M4 34 q25 11 47 2 c4 -2 9 -2 12 -1"
          fill="none"
          stroke="#FF9900"
          strokeWidth="3.6"
          strokeLinecap="round"
        />
        <path d="M60 36 l7 -1 -3.5 -5.5z" fill="#FF9900" />
      </svg>
    );
  }

  if (name === "discord") {
    return (
      <svg viewBox="0 0 172 40" height="27" role="img" aria-label="Discord">
        <rect x="0" y="3" width="34" height="34" rx="11" fill="#5865F2" />
        <path
          d="M24 13 c-2 -1 -4 -1.6 -6 -1.9 l-.7 1.4 c-2 -.3 -4 -.3 -6 0 l-.7 -1.4 c-2 .3 -4 .9 -6 1.9 -2.9 4.3 -3.7 8.6 -3.3 12.8 2.4 1.8 4.8 2.9 7.2 3.6 l1.5 -2.2 -2.1 -1.1 .5 -.9 c3 1.4 6.2 1.4 9.2 0 l.5 .9 -2.1 1.1 1.5 2.2 c2.4 -.7 4.8 -1.8 7.2 -3.6 .5 -4.9 -.7 -9.2 -3.3 -12.8z"
          fill="#fff"
        />
        <circle cx="13" cy="22.5" r="2.2" fill="#5865F2" />
        <circle cx="21" cy="22.5" r="2.2" fill="#5865F2" />
        <text x="44" y="31" fill="#5865F2" style={text} letterSpacing="-0.6">
          DISCORD
        </text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 152 40" height="28" role="img" aria-label="Spotify">
      <circle cx="18" cy="20" r="17" fill="#1DB954" />
      <path d="M9 14 q10 -3 19 1" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M10 20 q8 -2 15 1" fill="none" stroke="#fff" strokeWidth="2.3" strokeLinecap="round" />
      <path d="M11 26 q6 -1.6 11 1" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      <text x="42" y="31" fill="#1DB954" style={text} letterSpacing="-1.2">
        Spotify
      </text>
    </svg>
  );
};

/* ---------------------------------------------------------------- AVATARS */
const AVATAR_PALETTE = {
  a1: { bg: "#FFE1D6", skin: "#F0B291", hair: "#3B2A24", cloth: "#3A4B7C" },
  a2: { bg: "#DCE9F8", skin: "#FFC9A8", hair: "#5A3A2A", cloth: "#F53855" },
  a3: { bg: "#E3F0E6", skin: "#F5C39C", hair: "#1B2A4A", cloth: "#2F3E6B" },
  a4: { bg: "#F6E7F5", skin: "#EFB08C", hair: "#2B1B14", cloth: "#6FCF97" },
  a5: { bg: "#FFF1CC", skin: "#E8A87C", hair: "#20140F", cloth: "#7BB8F0" },
  a6: { bg: "#E9F3FF", skin: "#C98A5E", hair: "#181310", cloth: "#F2A65A" },
};

const Avatar = ({ id }) => {
  const c = AVATAR_PALETTE[id] || AVATAR_PALETTE.a1;
  const clip = "clip-" + id;

  return (
    <svg viewBox="0 0 64 64" width="50" height="50" role="img" aria-label="Customer photo">
      <defs>
        <clipPath id={clip}>
          <circle cx="32" cy="32" r="32" />
        </clipPath>
      </defs>
      <g clipPath={"url(#" + clip + ")"}>
        <rect width="64" height="64" fill={c.bg} />
        <circle cx="32" cy="30" r="17" fill={c.hair} />
        <ellipse cx="32" cy="32" rx="14" ry="15" fill={c.skin} />
        <path d="M18 28 c1 -9 7 -13 14 -13 s13 4 14 13 c-3 -5 -8 -7 -11 -6 c-6 2 -13 3 -17 6z" fill={c.hair} />
        <circle cx="26.5" cy="32" r="1.6" fill="#2B2B2B" />
        <circle cx="37.5" cy="32" r="1.6" fill="#2B2B2B" />
        <path d="M28 38 q4 3.5 8 0" fill="none" stroke="#B3705A" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M32 46 c-13 0 -21 7 -23 18 h46 c-2 -11 -10 -18 -23 -18z" fill={c.cloth} />
      </g>
    </svg>
  );
};

/* ------------------------------------------------------ Hero + Stats ----- */
const StatsCard = () => (
  <div className="stats">
    <div className="container">
      <div className="stats__card">
        {STATS.map((s) => (
          <div className="stats__item" key={s.label}>
            <span className="stats__icon">
              <StatsIcon name={s.icon} />
            </span>
            <div>
              <div className="stats__value">{s.value}</div>
              <div className="stats__label">{s.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Hero = () => (
  <section className="hero" id="top">
    <div className="container">
      <div className="hero__grid">
        <div className="hero__content">
          <h1 className="hero__title">
            Want anything to be{" "}
            <br className="br-lg" />
            easy with <span>LaslesVPN.</span>
          </h1>
          <p className="hero__text">
            Provide a network for all your needs with ease and fun using LaslesVPN{" "}
            <br className="br-lg" />
            discover interesting features from us.
          </p>
          <div className="hero__cta">
            <a className="btn btn--primary btn--lg" href="#pricing">
              Get Started
            </a>
          </div>
        </div>

        <div className="hero__art">
          {/* Original artwork — src/assets/Illustration 1.png */}
          <img
            className="hero__img"
            src="src/assets/Illustration 1.png"
            alt="Person wearing headphones using LaslesVPN on a laptop"
            width="2445"
            height="1530"
          />
        </div>
      </div>
    </div>

    <StatsCard />
  </section>
);

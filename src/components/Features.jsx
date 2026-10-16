/* -------------------------------------------------------------- Features -- */
const Features = () => (
  <section className="section features" id="features">
    <div className="container">
      <div className="features__grid">
        <div className="features__art">
          {/* Original artwork — src/assets/Illustration 2.png */}
          <img
            className="features__img"
            src="src/assets/Illustration 2.png"
            alt="Person pointing at a laptop, surrounded by sparkles"
            width="509"
            height="415"
          />
        </div>

        <div className="features__body">
          <h2 className="section-title">
            We Provide Many
            <br />
            Features You Can Use
          </h2>
          <p className="lead">
            You can explore the features that we provide with fun and have their own functions each
            feature.
          </p>

          <ul className="features__list">
            {FEATURES.map((f) => (
              <li className="features__item" key={f}>
                <span className="features__check">
                  <IconCheck />
                </span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

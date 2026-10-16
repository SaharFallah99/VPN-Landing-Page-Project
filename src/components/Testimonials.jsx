/* ----------------------------------------------------------- Testimonials -- */
const Stars = ({ rating }) => {
  const value = parseFloat(rating);
  const full = Math.floor(value);
  const hasHalf = value % 1 !== 0;

  return (
    <span className="review__stars" aria-label={rating + " out of 5"}>
      {[0, 1, 2, 3].map((i) => (
        <IconStar key={"f" + i} size={11} fill={i < full ? "#FEA250" : "#DDE0E4"} />
      ))}
      {hasHalf ? <IconStarHalf size={11} /> : <IconStar size={11} fill={full > 4 ? "#FEA250" : "#DDE0E4"} />}
    </span>
  );
};

const Testimonials = () => {
  const [index, setIndex] = React.useState(0);
  const trackRef = React.useRef(null);
  const [step, setStep] = React.useState(400);

  const visible = 3;
  const maxIndex = Math.max(0, REVIEWS.length - visible);

  React.useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track || !track.firstElementChild) return;
      const styles = window.getComputedStyle(track);
      const gap = parseFloat(styles.columnGap || styles.gap || "50") || 50;
      setStep(track.firstElementChild.getBoundingClientRect().width + gap);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const go = (dir) => setIndex((i) => Math.min(maxIndex, Math.max(0, i + dir)));

  return (
    <section className="section testimonials" id="testimonials">
      <div className="container">
        <div className="section-head">
          <h2>
            Trusted by Thousands of
            <br />
            Happy Customer
          </h2>
          <p>
            These are the stories of our customers who have joined us with great pleasure when using
            this crazy feature.
          </p>
        </div>

        <div className="testimonials__viewport">
          <div
            className="testimonials__track"
            ref={trackRef}
            style={{ transform: "translateX(" + -index * step + "px)" }}
          >
            {REVIEWS.map((r, i) => (
              <article
                className={"review" + (i === index ? " review--active" : "")}
                key={r.id}
                aria-hidden={i < index || i >= index + visible}
              >
                <div className="review__top">
                  <span className="review__avatar">
                    {r.photo ? (
                      <img
                        className="review__photo"
                        src={"src/assets/" + r.photo}
                        alt={"Photo of " + r.name}
                        width="200"
                        height="200"
                      />
                    ) : (
                      <Avatar id={r.avatar} />
                    )}
                  </span>
                  <div className="review__who">
                    <div className="review__name">{r.name}</div>
                    <div className="review__location">{r.location}</div>
                  </div>
                  <div className="review__rating">
                    <span>{r.rating}</span>
                    <Stars rating={r.rating} />
                  </div>
                </div>

                <p className="review__text">{r.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="testimonials__footer">
          <div className="dots" role="tablist" aria-label="Testimonial pages">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={"Go to testimonial page " + (i + 1)}
                className={i === index ? "is-active" : ""}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>

          <div className="arrows">
            <button
              type="button"
              className="arrow arrow--ghost"
              aria-label="Previous testimonial"
              onClick={() => go(-1)}
              disabled={index === 0}
            >
              <ArrowLeft />
            </button>
            <button
              type="button"
              className="arrow arrow--solid"
              aria-label="Next testimonial"
              onClick={() => go(1)}
              disabled={index === maxIndex}
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

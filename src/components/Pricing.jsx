/* --------------------------------------------------------------- Pricing --
   The plan cards are interactive: clicking a card (or its Select button)
   makes that plan the active one. "Premium Plan" is pre-selected so the
   first paint matches the reference mock-up.                            */
const PlanCard = ({ plan, selected, onSelect }) => (
  <article
    className={"plan " + (plan.offset || "") + (selected ? " plan--featured" : "")}
    onClick={onSelect}
    aria-labelledby={"plan-" + plan.id}
  >
    <div className="plan__art">
      {/* Original artwork — src/assets/{Free,Standard,Premium}.png */}
      <img
        src={"src/assets/" + plan.art}
        alt={plan.name + " illustration"}
        width="146"
        height="166"
      />
    </div>

    <h3 className="plan__name" id={"plan-" + plan.id}>
      {plan.name}
    </h3>

    <ul className="plan__features">
      {plan.perks.map((p) => (
        <li key={p}>
          <span className="plan__check">
            <IconCheck size={13} />
          </span>
          {p}
        </li>
      ))}
    </ul>

    <div className="plan__price">
      {plan.price}
      {plan.period ? <small>{plan.period}</small> : null}
    </div>

    <button
      type="button"
      className={"btn plan__select " + (selected ? "btn--primary" : "btn--outline")}
      aria-pressed={selected}
      onClick={(e) => {
        e.stopPropagation();
        onSelect();
      }}
    >
      <span className="plan__select-tick" aria-hidden="true">
        {selected ? <IconCheck size={12} /> : null}
      </span>
      Select
    </button>
  </article>
);

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = React.useState("premium");

  return (
    <section className="section section--soft pricing" id="pricing">
      <div className="container">
        <div className="section-head">
          <h2>Choose Your Plan</h2>
          <p>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
        </div>

        <div className="pricing__grid">
          {PLANS.map((plan) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              selected={selectedPlan === plan.id}
              onSelect={() => setSelectedPlan(plan.id)}
            />
          ))}
        </div>

        <p className="sr-only" aria-live="polite">
          Selected plan: <strong>{PLANS.find((p) => p.id === selectedPlan).name}</strong>
        </p>
      </div>
    </section>
  );
};

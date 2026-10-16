/* --------------------------------------------------------- Global network */
const GlobalNetwork = () => (
  <section className="section network" id="about">
    <div className="container">
      <div className="section-head">
        <h2>
          Huge Global Network
          <br />
          of Fast VPN
        </h2>
        <p>See LaslesVPN everywhere to make it easier for you when you move locations.</p>
      </div>

      {/* Original artwork — src/assets/Huge Global.png (already contains the pins) */}
      <div className="network__map">
        <img
          className="network__map-img"
          src="src/assets/Huge Global.png"
          alt="World map showing the LaslesVPN server locations"
          width="1060"
          height="538"
        />
      </div>

      <div className="brands">
        {BRANDS.map((b) => (
          <div className="brands__item" key={b}>
            <BrandLogo name={b} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

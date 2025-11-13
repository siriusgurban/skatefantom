function Sign() {
  return (
    <section id="sign" className="sign section_padding">
      <div className="container">
        <div className="row">
          <div className="image">
            <img
              src="https://skatefantom.com/wp-content/themes/fantom-magazine/dist/images/newsletter-signup-header.svg"
              alt="sign"
            />
          </div>
          <div className="content">
            <div className="image">
              <img
                src="https://skatefantom.com/wp-content/themes/fantom-magazine/dist/images/illustrations/skater-illustration-01.png"
                alt=""
              />
            </div>
            <form action="">
              <input type="email" placeholder="Enter your email here" />
              {/* <label className="requiredInp" htmlFor="privacy">
                <input id="privacy" type="checkbox" />I agree to opt-in to
                Fantom’s mailing list By clicking “Subscribe” you agree to our
                Privacy Policy.
              </label> */}

              <label className="requiredInp" htmlFor="privacy">
                <input type="checkbox" id="privacy" />
                <span className="box" aria-hidden="true"></span>
                <span className="text">
                  I agree to opt-in to Fantom’s mailing list By clicking
                  “Subscribe” you agree to our Privacy Policy.
                </span>
              </label>

              <label className="unRequiredInp" htmlFor="email">
                <input type="checkbox" id="email" />
                <span className="box" aria-hidden="true"></span>
                <span className="text">
                  I would like to receive email communication from Fantom's
                  affiliate partners
                </span>
              </label>

              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sign;

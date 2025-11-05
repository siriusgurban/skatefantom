function Sign() {
  return (
    <section id="sign" className="sign section_padding">
      <div className="container">
        <div className="row">
          <div>
            <img
              src="https://skatefantom.com/wp-content/themes/fantom-magazine/dist/images/newsletter-signup-header.svg"
              alt=""
            />
          </div>
          <div>
            <div>
              <img
                src="https://skatefantom.com/wp-content/themes/fantom-magazine/dist/images/illustrations/skater-illustration-01.png"
                alt=""
              />
            </div>
            <form action="">
              <input type="email" placeholder="Enter your email" />
              <input type="checkbox" placeholder="Enter your email" />
              <input type="checkbox" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sign;

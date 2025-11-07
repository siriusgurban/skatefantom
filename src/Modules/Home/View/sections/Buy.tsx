import { Link } from "react-router-dom";

function Buy() {
  return (
    <section id="buy" className="buy section_padding">
      <div className="scrolling_text">
        <div className="title">
          <span>Issue #6</span>
          <div className="image">
            <img
              src="https://skatefantom.com/wp-content/uploads/2025/10/Fantom06_Cover_Post_01-min_ec533503-7a60-4b23-9f09-7d090908b6d6.webp"
              alt="skate"
            />
          </div>
        </div>
        <div className="title">
          <span>Issue #6</span>
          <div className="image">
            <img
              src="https://skatefantom.com/wp-content/uploads/2025/10/Fantom06_Cover_Post_01-min_ec533503-7a60-4b23-9f09-7d090908b6d6.webp"
              alt="skate"
            />
          </div>
        </div>
        <div className="title">
          <span>Issue #6</span>
          <div className="image">
            <img
              src="https://skatefantom.com/wp-content/uploads/2025/10/Fantom06_Cover_Post_01-min_ec533503-7a60-4b23-9f09-7d090908b6d6.webp"
              alt="skate"
            />
          </div>
        </div>
      </div>

      <div className="container">
        <Link to="/shop" className="see_more">
          <span>Buy</span>
        </Link>
      </div>
    </section>
  );
}

export default Buy;

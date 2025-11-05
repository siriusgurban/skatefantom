import { Link } from "react-router-dom";

function Buy() {
  return (
    <section id="buy" className="buy section_padding">
        
      <Link to="/shop" className="buy_btn">
        Buy
      </Link>
    </section>
  );
}

export default Buy;

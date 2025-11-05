import { Link } from "react-router-dom";
import CardSpin from "../../../../components/CardSpin";

function Spin() {
  return (
    <section id="spin" className="spin section_padding">
      <div className="container">
        <div className="row">
          <div className="spin_title">
            <h2>Spin</h2>
            <p>stories</p>
          </div>
          <div className="spin_box">
            <CardSpin
              id="1"
              imgUrl="https://skatefantom.com/wp-content/uploads/2025/09/Fantom07_Web-Rollercon_01.jpg"
              title="Las Vegas: A Week of Mayhem"
              subtitle="One week in Vegas: Too many drinks, too much chaos, zero chill, and a toilet that saw things no human should."
            />
            <CardSpin
              id="1"
              imgUrl="https://skatefantom.com/wp-content/uploads/2025/09/Fantom07_Web-Rollercon_01.jpg"
              title="Las Vegas: A Week of Mayhem"
              subtitle="One week in Vegas: Too many drinks, too much chaos, zero chill, and a toilet that saw things no human should."
            />
            <CardSpin
              id="1"
              imgUrl="https://skatefantom.com/wp-content/uploads/2025/09/Fantom07_Web-Rollercon_01.jpg"
              title="Las Vegas: A Week of Mayhem"
              subtitle="One week in Vegas: Too many drinks, too much chaos, zero chill, and a toilet that saw things no human should."
            />
            <CardSpin
              id="1"
              imgUrl="https://skatefantom.com/wp-content/uploads/2025/09/Fantom07_Web-Rollercon_01.jpg"
              title="Las Vegas: A Week of Mayhem"
              subtitle="One week in Vegas: Too many drinks, too much chaos, zero chill, and a toilet that saw things no human should."
            />
          </div>
          <Link to="/blog" className="see_more">
            See more
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Spin;

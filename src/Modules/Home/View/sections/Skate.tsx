import React from "react";
import { Link } from "react-router-dom";
import CardSkate from "../../../../components/CardSkate";

function Skate() {
  return (
    <section id="skate" className="skate section_padding">
      <div className="container">
        <div className="row">
          <div className="skate_title">
            <h2>Skate</h2>
            <p>Flicks</p>
          </div>
          <div className="skate_box">
            <CardSkate
              id="1"
              imgUrl="https://skatefantom.com/wp-content/uploads/2025/03/alli_video_thumbnail.jpg"
              title="Alli Tong x Fantom"
            />
            <CardSkate
              id="1"
              imgUrl="https://skatefantom.com/wp-content/uploads/2025/03/alli_video_thumbnail.jpg"
              title="Alli Tong x Fantom"
            />
          </div>
          <Link to="/videos" className="see_more">
            <span>See more</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Skate;

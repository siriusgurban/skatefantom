import { Link } from "react-router-dom";

function CardSkate({
  id,
  imgUrl,
  title,
}: {
  id: string;
  imgUrl: string;
  title: string;
}) {
  return (
    <Link to={`/product/${id}`}>
      <div className="card_skate">
        <div className="card_img">
          <img src={imgUrl} alt={title} />
        </div>
        <h3>{title}</h3>
      </div>
    </Link>
  );
}

export default CardSkate;

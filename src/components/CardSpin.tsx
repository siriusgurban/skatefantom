import { Link } from "react-router-dom";

function CardSpin({
  id,
  imgUrl,
  title,
  price,
}: {
  id: string;
  imgUrl: string;
  title: string;
  price: number;
}) {
  return (
    <Link to={`/product/${id}`}>
      <div className="card_box">
        <div className="card_img">
          <img src={imgUrl} alt={title} />
        </div>
        <h3>{title}</h3>
        <span>${price}</span>
      </div>
    </Link>
  );
}

export default CardSpin;

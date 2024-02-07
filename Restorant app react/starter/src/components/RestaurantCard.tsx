import { Link } from "react-router-dom";
import { ImageType } from "../types";
import { ROUTES } from "../routes/routes";

export type RestourantProps = {
  restourant: ImageType;
  handleToggleFavourite: (id: string) => void;
};

export const RestaurantCard = ({
  restourant,
  handleToggleFavourite,
}: RestourantProps) => {
  return (
    <Link to={`/detail/${restourant.id}`}>
      <div className="card">
        <img
          src={restourant.image}
          alt={restourant.businessname}
          className="img"
        />

        <i
          onClick={(e) => {
            e.preventDefault();
            handleToggleFavourite(restourant.id);
          }}
          className={`clickable-icon favourite  fa ${
            restourant.isFavourite ? "fa-heart" : "fa-heart-o"
          } `}
        ></i>

        <div className="card-body">
          <h3>{restourant.businessname}</h3>
          <h4 className="orange-text">{restourant.restauranttype}</h4>
          <p>{restourant.reviews}</p>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;

import { Link } from "react-router-dom";
import { ImageType } from "../types";
import RestaurantCard from "./RestaurantCard";
import { ROUTES } from "../routes/routes";

type FavoritesProps = {
  restourants: ImageType[];
};

const Favorites = ({ restourants }: FavoritesProps) => {
  if (restourants.length === 0) {
    return <div>No favorite restaurants selected</div>;
  }
  return (
    <div className="favorite-res">
      <h2 className="heading-fav">YOUR FAVORITE RESTAURANTS</h2>
      {restourants.map((img) => (
        <>
          <img key={img.id} src={img.image} className="favorite-img" />
          <div className="detail-body">
            <h3>{img.businessname}</h3>
            <h4>{img.restauranttype}</h4>
            <p>{img.reviews}</p>
          </div>
        </>
      ))}
    </div>
  );
};

export default Favorites;

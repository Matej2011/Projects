import { ImageType } from "../types";
import RestaurantCard from "./RestaurantCard";

type PopularProps = {
  restourants: ImageType[];
  handleToggleFavourite: (id: string) => void;
};

const PopularRestaurants = ({
  restourants,
  handleToggleFavourite,
}: PopularProps) => {
  return (
    <div>
      <div className="main-cont">
        <h2 className="h2">OUR MOST POPULAR RESTAURANTS</h2>
        <div className="cards">
          {restourants.map((res) => (
            <RestaurantCard
              key={res.id}
              restourant={res}
              handleToggleFavourite={handleToggleFavourite}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularRestaurants;

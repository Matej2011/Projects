import { Routes } from "react-router-dom";
import { ImageType } from "../types";
import RestaurantCard from "./RestaurantCard";

type AllRestaurantsProps = {
  restourants: ImageType[];
  handleToggleFavourite: (id: string) => void;
};

const AllRestaurants = ({ restourants, handleToggleFavourite }: AllRestaurantsProps) => {
  return (
    <div className="main-cont">
      <h2 className="h2">ALL RESTAURANTS</h2>
      <div className="cards">
        {restourants.map((res) => (
          <RestaurantCard key={res.id} restourant={res} handleToggleFavourite={handleToggleFavourite} />
        ))}
      </div>
    </div>
  );
};

export default AllRestaurants;

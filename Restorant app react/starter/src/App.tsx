import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import SupriseMe from "./components/SurpriseMe";
import { ImageType } from "./types";
import axios from "axios";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes/routes";
import AllRestaurants from "./components/AllRestaurants";
import RestaurantDetail from "./components/RestaurantDetail";
import Favorites from "./components/Favorites";
import PopularRestaurants from "./components/PopularRestaurants";
import Cuisines from "./components/Cuisines";

const App = () => {
  const [restourants, setRestourants] = useState<ImageType[]>([]);

  const favRestourants = restourants.filter((img) => img.isFavourite);

  const reviewRestaurants = restourants.filter((img) => img.reviews > 0);

  useEffect(() => {
    const lsRestourants = localStorage.getItem("restaurants");

    if (lsRestourants) {
      setRestourants(JSON.parse(lsRestourants));
    }

    axios.get<ImageType[]>("http://localhost:5001/restaurants").then((res) => {
      console.log({ res });
      setRestourants(res.data);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("restaurants", JSON.stringify(restourants));
  }, [restourants]);

  const handleToggleFavourite = (id: string) => {
    const updatedData = restourants.map((img) => {
      if (img.id === id) {
        return {
          ...img,
          isFavourite: !img.isFavourite,
        };
      }

      return img;
    });

    setRestourants(updatedData);
  };

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          path={ROUTES.homePage}
          element={
            <>
              {" "}
              <SupriseMe />
              <PopularRestaurants
                restourants={reviewRestaurants}
                handleToggleFavourite={handleToggleFavourite}
              />
              <Cuisines />
              <AllRestaurants
                restourants={restourants}
                handleToggleFavourite={handleToggleFavourite}
              />
            </>
          }
        />

        <Route
          path={ROUTES.detailPage}
          element={<RestaurantDetail restourants={restourants} />}
        />

        <Route
          path={ROUTES.favouritesPage}
          element={<Favorites restourants={favRestourants} />}
        />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;

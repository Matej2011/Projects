import { Link } from "react-router-dom";
import { ROUTES } from "../routes/routes";

const Cuisines = () => {
  return (
    <div>
      <h2 className="heading-fav">CUISINES</h2>
      <div className="buttons">
        <Link to={ROUTES.cuisinesPage}>
          <button>canteen</button>
        </Link>
        <Link to={ROUTES.cuisinesPage}>
          <button>bukka</button>
        </Link>
        <Link to={ROUTES.cuisinesPage}>
          <button>eatery</button>
        </Link>
        <Link to={ROUTES.cuisinesPage}>
          <button>seafood</button>
        </Link>
        <Link to={ROUTES.cuisinesPage}>
          <button>pizza</button>
        </Link>
        <Link to={ROUTES.cuisinesPage}>
          <button>vegan</button>
        </Link>

        <Link to={ROUTES.cuisinesPage}>
          <button>pasta</button>
        </Link>
        <Link to={ROUTES.cuisinesPage}>
          <button>american</button>
        </Link>
        <Link to={ROUTES.cuisinesPage}>
          <button>japanese</button>
        </Link>
      </div>
    </div>
  );
};

export default Cuisines;

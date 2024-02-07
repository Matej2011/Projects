import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { ROUTES } from "../routes/routes";
import "font-awesome/css/font-awesome.min.css";

const NavBar = () => {
  return (
    <div className="header-section">
      <Link to={ROUTES.homePage} className="logo">
        <h3>RESTAURANT</h3>
      </Link>
      <Link to={ROUTES.favouritesPage}>
        <FontAwesomeIcon icon={faHeart} className="favourite" />
      </Link>
    </div>
  );
};

export default NavBar;

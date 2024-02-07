import { Link } from "react-router-dom";
import Hr from "./Hr";
import { ROUTES } from "../routes/routes";
import { ImageType } from "../types";

const SupriseMe = () => {
  return (
    <div className="main-container">
      <Hr />
      <h1 className="h1">DON'T KNOW WHAT TO EAT?</h1>
      <Link to={ROUTES.suprisePage}>
        <button className="suprise-btn">Suprise me!</button>
      </Link>
      <Hr />
    </div>
  );
};

export default SupriseMe;

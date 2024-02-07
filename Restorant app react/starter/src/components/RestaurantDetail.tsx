import { useParams } from "react-router-dom";
import { ImageType } from "../types";

export type RestaurantDetailProps = {
  restourants: ImageType[];
};

export const RestaurantDetail = ({ restourants }: RestaurantDetailProps) => {
  const { id } = useParams();

  const img = restourants.find((img) => img.id === id);

  if (!img) {
    return <div>Restaurant not found</div>;
  }

  return (
    <div className="detail-card">
      <h2 className="heading-detail">{img.businessname}</h2>
      <img src={img.image} className="detail-img" />
      <div className="detail-body">
        <p>{img.reviews}</p>
        <p>{img.phone}</p>
        <p>{img.email}</p>
        <p>{img.address}</p>
      </div>
    </div>
  );
};

export default RestaurantDetail;

import React from "react";

interface Product {
  name: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}
  
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="card">
      <div className="card-img-container">
        <img
          src={`../img/${product.image}.png`}
          className="card-img-top"
          alt="..."
        />
        
      </div>
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.price} $</p>
      </div>
    </div>
  );
};

export default ProductCard;



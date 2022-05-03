import React from "react";
import "./Product.css";

const Product = (Props) => {
  const { title, price, image } = Props.displayData;
  return (
    <div className="col-md-6 col-lg-4 g-5">
      <div className="product-container text-center">
        <img className="mb-4" src={image} alt="" />
        <h2>{title}</h2>
        <h2>{price}</h2>
      </div>
    </div>
  );
};

export default Product;

import React from "react";
import "./Product.css";

const Product = (Props) => {
  const { title, price, image } = Props.displayData;
  return (
    <div className="col-md-6 col-lg-4 g-5">
      <div className="product-container text-center">
        <img className="mb-4" src={image} alt="" />
        <p className="Product-infro">
          <h2>{title}</h2>
          <h2>{price}</h2>
        </p>
        <span className="from-border">
          <hr />
          or
          <hr />
        </span>
        <button className="Product-btn">Update</button>
      </div>
    </div>
  );
};

export default Product;

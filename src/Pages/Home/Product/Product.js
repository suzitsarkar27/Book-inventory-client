import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Product.css";

const Product = (Props) => {
  const { id, title, price, image } = Props.displayData;
  const navigate = useNavigate();
  const navigetToProductDatalic = (id) => {
    navigate(`/product/${id}`);
  };
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
        <button
          onClick={() => navigetToProductDatalic(id)}
          className="Product-btn"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default Product;

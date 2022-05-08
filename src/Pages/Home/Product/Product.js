import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Product.css";

const Product = (Props) => {
  const { _id, name, price, image, quintity, discription } = Props.displayData;
  const navigate = useNavigate();

  const navigetToProductDatalic = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <div className="col-md-6 col-lg-4 g-5">
      <div className="product-container text-center">
        <img className="mb-1 product-img" src={image} alt="" />
        <p className="Product-infro">
          <h4>{name}</h4>
          <h5>{price}</h5>
          <h5>Quintity:{quintity}</h5>
        </p>
        <p>
          <small>{discription}</small>
        </p>
        <button
          onClick={() => navigetToProductDatalic(_id)}
          className="Product-btn "
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default Product;

import React from "react";
import { useNavigate } from "react-router-dom";

const AllProduct = ({ item }) => {
  const { id, image, price, title } = item;
  const navigate = useNavigate();
  const handelNavigate = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <div className="col-md-6 col-lg-4 g-5">
      <div className="product-container text-center">
        <img className="product-img" src={image} alt="" />
        <p className="Product-infro">
          <h2>{title}</h2>
          <h2>{price}</h2>
        </p>
        <div className="d-flex justify-content-around">
          <button onClick={() => handelNavigate(id)} className="manage-btn">
            Manag
          </button>
          <button className="delete-btn">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;

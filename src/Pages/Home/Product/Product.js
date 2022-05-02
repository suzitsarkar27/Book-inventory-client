import React from "react";

const Product = ({ displayData }) => {
  const { price, image } = displayData;
  return (
    <div className="col-md-4 text-center">
      <h2>{price}</h2>
      <img src={image} alt="" />
    </div>
  );
};

export default Product;

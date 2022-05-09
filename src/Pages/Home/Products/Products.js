import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useProsuct from "../../Hooks/useProduct";
import Product from "../Product/Product";

const Products = () => {
  const [product] = useProsuct();
  return (
    <div className="container">
      <h2 className="mt-5 mb-5 text-center text-info">Inventory Product </h2>
      <div>
        <div className="row">
          {product.map((displayData) => (
            <Product key={displayData._id} displayData={displayData}></Product>
          ))}
        </div>
        <div className="manage-btn text-center mt-5">
          <Link to={"/manageitems"}>
            <button className="mt-5 mx-auto mb-5 bg-success py-1 px-5 rounded text-white">
              Manage Inventory
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;

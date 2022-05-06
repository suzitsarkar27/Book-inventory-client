import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "../Product/Product";

const Products = () => {
  const [product, setProsuct] = useState([]);
  console.log(product);
  const data = product.slice(0, 6);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProsuct(data));
  }, []);
  return (
    <div className="container">
      <h2 className="mt-5 mb-5 text-center text-info">Inventory Product </h2>
      <div>
        <div className="row">
          {data.map((displayData) => (
            <Product key={displayData.id} displayData={displayData}></Product>
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

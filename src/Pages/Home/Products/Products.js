import React, { useEffect, useState } from "react";
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
      <h2 className="mt-5 mb-5 text-center">This is product</h2>
      <div>
        <div className="row">
          {data.map((displayData) => (
            <Product key={displayData.id} displayData={displayData}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;

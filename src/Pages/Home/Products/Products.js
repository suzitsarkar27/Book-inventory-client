import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [product, setProsuct] = useState([]);
  console.log(product);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProsuct(data));
  }, []);
  return (
    <div>
      <h2 className="mt-5 mb-5 text-center">This is product</h2>
      <div className="row">
        {product.map((displayData) => (
          <Product key={displayData.id} displayData={displayData}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;

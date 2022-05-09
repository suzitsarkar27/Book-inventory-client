import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AllProduct from "../AllProducts/AllProduct";
import useProsuct from "../Hooks/useProduct";
import "./ManageItems.css";

const ManageItems = () => {
  const [product] = useProsuct();

  return (
    <div>
      <h2 className="text-center mt-5 text-primary">All Product Items</h2>
      <div className="row mb-5">
        {product.map((item) => (
          <AllProduct key={item._id} item={item}></AllProduct>
        ))}
      </div>
    </div>
  );
};

export default ManageItems;

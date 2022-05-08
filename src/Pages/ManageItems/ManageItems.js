import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AllProduct from "../AllProducts/AllProduct";
import "./ManageItems.css";

const ManageItems = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/data")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div>
      <h2 className="text-center mt-5 text-primary">All Product Items</h2>
      <div className="row mb-5">
        {items.map((item) => (
          <AllProduct key={item._id} item={item}></AllProduct>
        ))}
      </div>
    </div>
  );
};

export default ManageItems;

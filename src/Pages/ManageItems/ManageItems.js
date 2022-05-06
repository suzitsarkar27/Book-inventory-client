import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AllProduct from "../AllProducts/AllProduct";
import "./ManageItems.css";

const ManageItems = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div>
      <h2 className="text-center mt-5 text-primary">All Product Items</h2>
      <div className="row">
        {items.map((item) => (
          <AllProduct key={item.id} item={item}></AllProduct>
        ))}
      </div>
    </div>
  );
};

export default ManageItems;

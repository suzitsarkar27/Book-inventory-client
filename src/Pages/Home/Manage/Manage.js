import React from "react";
import { useParams } from "react-router-dom";

const Manage = () => {
  const { productId } = useParams();
  return (
    <div>
      <h2>This is paroduct manage:{productId}</h2>
    </div>
  );
};

export default Manage;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Manage = () => {
  const { productId } = useParams();
  const [service, setService] = useState({});
  console.log(service);
  useEffect(() => {
    const url = `http://localhost:5000/data/${productId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div className="d-flex w-50 mx-auto">
      <div className="col-md-6">
        <img src={service.image} alt="" />
      </div>
      <div className="col-md-6">
        <h4>{service.name}</h4>
      </div>
    </div>
  );
};

export default Manage;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Manage.css";

const Manage = () => {
  const { productId } = useParams();
  const [service, setService] = useState({});
  // const [quintity, setQuintity] = useState([]);

  // const incriseCount = () => {
  //   const newCount = quintity + 1;
  //   setQuintity(newCount);
  // };

  console.log(service);
  useEffect(() => {
    const url = `http://localhost:5000/data/${productId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <div className="row manage-product mx-auto mb-5">
      <div className="col-md-6">
        <img src={service.image} alt="" />
      </div>
      <div className="col-md-6 mt-4">
        <h5>Id:{productId}</h5>
        <h4>{service.name}</h4>
        <h4>Price:{service.price}</h4>
        <h4>Solid:{service.solid}</h4>
        <h4>Quintity:{service.quintity}</h4>
        <h4>Supplier:{service.supplyName}</h4>
        <div>
          <button className="ms-5 mt-2 mb-3">Deliverd</button>
          <div className="d-flex">
            <input type="number" placeholder="Update Quantity" />
            <button className="ms-4">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manage;

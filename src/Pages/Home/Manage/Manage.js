import userEvent from "@testing-library/user-event";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useUpdateData from "../../Hooks/useUpdateData";
import "./Manage.css";

const Manage = () => {
  const { productId } = useParams();
  const [service, setService] = useUpdateData(productId);
  const { quintity } = service;
  console.log(quintity);

  const existquintity = parseInt(quintity);

  const increasequintity = (e) => {
    e.preventDefault();
    const newStock = parseInt(e.target.newStockValue.value);
    console.log(newStock);
    const quintity = parseInt(newStock + existquintity);
    const newquintity = { ...service, quintity: quintity };
    setService(newquintity);

    console.log(productId, newquintity, quintity);
    const url = `https://blooming-peak-90984.herokuapp.com/data/${productId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newquintity),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  // decrease quintity

  const decreasequintity = () => {
    const quintity = parseInt(existquintity - 1);
    const newquintity = { ...service, quintity: quintity };
    setService(newquintity);

    const url = `https://blooming-peak-90984.herokuapp.com/data/${productId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newquintity),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

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
          <button
            className="ms-5 mt-2 mb-3 btn btn-danger"
            onClick={decreasequintity}
          >
            Delivered
          </button>

          <form onSubmit={increasequintity}>
            <div className="input-group">
              <input
                className="form-control w-50"
                name="newStockValue"
                type="number"
              />
              <input
                className="btn btn-info text-white ms-3 "
                type="submit"
                value={"Restock"}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Manage;

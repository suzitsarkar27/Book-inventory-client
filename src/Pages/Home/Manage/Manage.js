import userEvent from "@testing-library/user-event";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useUpdateData from "../../Hooks/useUpdateData";
import "./Manage.css";

const Manage = () => {
  const { productId } = useParams();
  const [service, setService] = useUpdateData(productId);
  const { quantity } = service;

  let existQuantity = parseInt(quantity);

  const increaseQuantity = (e) => {
    e.preventDefault();
    const newStock = parseInt(e.target.newStockValue.value);
    console.log(newStock);
    const Quantity = newStock + existQuantity;
    const newQuantity = { ...service, quantity: Quantity };
    setService(newQuantity);

    const url = `http://localhost:5000/data/${productId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newQuantity),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  // decrease quantity

  const decreaseQuantity = () => {
    const quantity = existQuantity - 1;
    const newQuantity = { ...service, quantity: quantity };
    setService(newQuantity);

    const url = `http://localhost:5000/data/${productId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newQuantity),
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
            onClick={decreaseQuantity}
          >
            Delivered
          </button>

          <form onSubmit={increaseQuantity}>
            <div className="input-group">
              <input
                className="form-control w-50"
                name="newStockValue"
                type="number"
              />
              <input
                className="btn btn-info text-white mt-4 "
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

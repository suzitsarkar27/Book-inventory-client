import React from "react";
import { useNavigate } from "react-router-dom";
import useProsuct from "../Hooks/useProduct";

const AllProduct = ({ item }) => {
  const [product, setProduct] = useProsuct();
  console.log(product.name);
  const { _id, name, price, image, quintity, discription } = item;

  const navigate = useNavigate();

  const handelNavigate = (id) => {
    navigate(`/product/${id}`);
  };

  const handelDelete = (id) => {
    const proceed = window.confirm("Are you Sure?");
    if (proceed) {
      const url = `https://blooming-peak-90984.herokuapp.com/data/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = product.filter((servic) => servic._id !== id);
          setProduct(remaining);
        });
    }
  };
  return (
    <div className="col-md-6 col-lg-4 g-5">
      <div className="product-container text-center">
        <img className="product-img mb-1" src={image} alt="" />
        <p className="Product-infro ">
          <h4>{name}</h4>
          <h4>Price:{price}</h4>
          <h5>Quintity:{quintity}</h5>
        </p>
        <p className=" fs-5">
          <small>{discription}</small>
        </p>
        <div className="d-flex justify-content-around">
          <button onClick={() => handelNavigate(_id)} className="manage-btn">
            Manag
          </button>
          <button className="delete-btn" onClick={() => handelDelete(_id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;

import { async } from "@firebase/util";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import auth from "../Firebase.init";
import "./MyItems.css";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [useItem, setUseItem] = useState([]);
  console.dir(useItem);

  useEffect(() => {
    const getItem = async () => {
      const email = user?.email;
      const url = `https://blooming-peak-90984.herokuapp.com/data`;
      console.log(email);
      const { data } = await axios.get(url);
      const remaining = data.filter((itm) => itm.email === email);
      console.log(remaining);
      setUseItem(remaining);
    };
    getItem();
  }, [user]);
  console.dir(user);

  const handelNavigate = (id) => {
    Navigate(`/product/${id}`);
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
          const remaining = useItem.filter((items) => items._id !== id);
          setUseItem(remaining);
        });
    }
  };

  return (
    <div className="row">
      <h2>This IS My Items component{useItem.length}</h2>

      {useItem.map((it) => (
        <div key={it._id} className=" col-md-6 col-lg-4 col-xl-3 mt-5">
          <div className="product-container  text-center mb-5">
            <img className="product-img mb-1" src={it.image} alt="" />
            <p className="Product-infro mt-2">
              <h4>{it.name}</h4>
              <h4>Price:{it.price}</h4>
              <h5>Quintity:{it.quintity}</h5>
            </p>
            <p className=" fs-5">
              <small>{it.discription}</small>
            </p>
            <div className="d-flex justify-content-around">
              <button
                className="manage-btn"
                onClick={() => handelNavigate(it._id)}
              >
                Manag
              </button>
              <button
                className="delete-btn"
                onClick={() => handelDelete(it._id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyItems;

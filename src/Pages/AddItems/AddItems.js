import React from "react";
import { useForm } from "react-hook-form";
import logo from "../../image/login.png";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../Firebase.init";
import "./AddItems.css";

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const [user, loading, error] = useAuthState(auth);

  if (user) {
    console.log(user.email);
  }

  const onSubmit = (data) => {
    console.log(data);
    const url = `https://blooming-peak-90984.herokuapp.com/data`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };
  return (
    <div className="react-from row mx-auto mt-5 mb-5 p-3">
      <h2 className="text-center mb-3 mt-2 text-primary">Add New Items</h2>
      <div className="col-md-6">
        <img className="logo-img pe-3" src={logo} alt="" />
      </div>
      <div className="col-md-6">
        <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
          <label for="name">Product Name:</label>
          <input type="name" {...register("name")} required />

          <label for="suplay">Supply Name:</label>
          <input type="name" {...register("supplyName")} required />

          <label for="email">Email:</label>
          <input type="email" {...register("email")} required />

          <label for="price">Price:</label>
          <input type="number" {...register("price")} required />

          <label for="quantity">Quantity:</label>
          <input type="number" {...register("quintity")} required />

          <label for="img">Image:</label>
          <input type="img" {...register("image")} required />

          <label for="description">Discription:</label>
          <textarea type="text" {...register("discription")} required />

          <input className="mt-4 bg-primary rounded text-white" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddItems;

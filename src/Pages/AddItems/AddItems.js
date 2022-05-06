import React from "react";
import { useForm } from "react-hook-form";
import logo from "../../image/login.png";
import "./AddItems.css";

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="react-from row mx-auto mt-5 mb-5 p-3">
      <h2 className="text-center mb-3 mt-2 text-primary">Add New Items</h2>
      <div className="col-md-6">
        <img className="logo-img pe-3" src={logo} alt="" />
      </div>
      <div className="col-md-6">
        <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
          <label for="prosuct name">Product Name:</label>
          <input {...register("text")} required />
          <label for="supply name">Supply Name:</label>
          <input {...register("text")} required />
          <label for="email">Email:</label>
          <input type="email" {...register("email")} required />
          <label for="Price">Price:</label>
          <input
            type="number"
            {...register("age", { min: 18, max: 99 })}
            required
          />
          <label for="quantity">QUANTIRY:</label>
          <input
            type="number"
            {...register("age", { min: 18, max: 99 })}
            required
          />
          <label for="img">Image:</label>
          <input type="img" {...register("img")} required />
          <label for="textarea">Discription:</label>
          <textarea className="py-3" type="textarea" {...register} required />
          <input className="mt-4 bg-primary rounded text-white" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddItems;

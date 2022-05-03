import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SingUp = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="Form-design mb-5 mt-5 mx-auto text-center">
      <h2 className="text-center">Reagister From</h2>
      <form
        className="d-flex flex-column input-filde"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input placeholder="Type Your Email" {...register("email")} required />
        <input
          placeholder="Type Your Email"
          {...register("password")}
          required
        />
        <input type="submit" />
      </form>
      <p>
        Plese
        <Link to={"/login"}>Reagister</Link>
      </p>
      <div className="sing-in mx-auto">
        <input type="button" value="Sing Google" />
      </div>
    </div>
  );
};

export default SingUp;

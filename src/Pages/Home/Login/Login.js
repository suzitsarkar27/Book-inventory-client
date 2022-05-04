import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="Form-design mb-5 mt-5 mx-auto text-center">
      <h2 className="text-center mt-2 mb-3">Login From</h2>
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
      <p className="infro">
        All ready have a account
        <Link className="text-decoration-none" to={"/singup"}>
          Reagister
        </Link>
      </p>
      <div className="d-flex align-items-center justify-content-center">
        <div className="login-border"></div>
        or
        <div className="login-border"></div>
      </div>
      <div className="sing-in mx-auto mt-5">
        <input type="button" value="Sing Google" />
      </div>
    </div>
  );
};

export default Login;

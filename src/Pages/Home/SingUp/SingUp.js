import React, { useState } from "react";
import {
  useSignInWithGoogle,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../Firebase.init";

const SingUp = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(
    auth,
    { sendEmailVerification: true }
  );

  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };

  if (user) {
    navigate("/home");
  }

  const handelSumbit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const Confrompassword = e.target.confromPassword.value;

    await createUserWithEmailAndPassword(email, password, Confrompassword);
    navigate("/home");
  };

  if (user) {
    console.log("user", user);
  }

  return (
    <div className="Form-design mb-5 mt-5 mx-auto text-center">
      <h2 className="text-center mt-3 mb-3">Reagister Now</h2>
      <form className="d-flex flex-column input-filde" onSubmit={handelSumbit}>
        <input
          type="email"
          name="email"
          placeholder="Type Your Email"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Type Your Password"
          required
        />
        <input
          type="confromPassword"
          name="confromPassword"
          placeholder="Type Your Confrom Password"
          required
        />

        <input className="bg-primary text-white" type="submit" />
      </form>
      <p className="infro">
        All ready have a account
        <Link
          className="text-decoration-none"
          to={"/login"}
          onClick={navigateLogin}
        >
          Login
        </Link>
      </p>
      <div className="sing-in mx-auto">
        <input
          className="bg-primary"
          onClick={() => signInWithGoogle()}
          type="button"
          value="Sing Google"
        />
      </div>
    </div>
  );
};

export default SingUp;

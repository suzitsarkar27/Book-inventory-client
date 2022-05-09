import { async } from "@firebase/util";
import React, { useRef } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../Firebase.init";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
import axios from "axios";
const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  let errorElement;

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  if (loading || sending) {
    return <loading></loading>;
  }

  if (user) {
    // navigate((from, { replace: true }));
    navigate("/home");
  }

  if (error) {
    errorElement = <p>Error:{error?.message}</p>;
  }

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  const handelSumbit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    await signInWithEmailAndPassword(email, password);
    const { data } = await axios.post("http://localhost:5000/login", { email });
    localStorage.setItem("accessToken", data.accessToken);
    console.log(email, password);
    navigate("/home");
  };

  const navigateRegister = (e) => {
    navigate("/singup");
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;

    if (email) {
      await sendPasswordResetEmail(email);
      toast("sent email");
    } else {
      toast("please enter your email address");
    }
  };

  return (
    <div className="Form-design mb-5 mt-5 mx-auto text-center">
      <h2 className="text-center mt-2 mb-3">Login From</h2>

      <form onSubmit={handelSumbit} className="d-flex flex-column input-filde">
        <input
          ref={emailRef}
          type="email"
          name="email"
          placeholder="Type Your Email"
        />
        <input
          ref={passwordRef}
          type="password"
          name="password"
          placeholder="Type Your Password"
        />
        <input
          className="bg-primary text-white"
          type="submit"
          placeholder="Type Your Password"
        />
      </form>

      {errorElement}

      <p className="infro">
        New Reagister a account
        <Link
          className="text-decoration-none"
          onClick={navigateRegister}
          to={"/singup"}
        >
          Reagister
        </Link>
      </p>
      <p>
        Forget Password?
        <button
          className="btn btn-link text-primary text-decoration-none"
          onClick={resetPassword}
        >
          Reset Password
        </button>
      </p>

      <div className="d-flex align-items-center justify-content-center">
        <div className="login-border"></div>
        or
        <div className="login-border"></div>
      </div>

      <div className="sing-in mx-auto mt-4">
        <input
          onClick={() => signInWithGoogle()}
          className="bg-primary text-white"
          type="button"
          value="SingGoogle"
        ></input>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;

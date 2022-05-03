import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { BiSupport, BiLoaderAlt } from "react-icons/bi";
import { GrSecure } from "react-icons/gr";
const Container = () => {
  return (
    <div className="text-center mt-5">
      <div className="row">
        <div className="col-md-3">
          <FaShippingFast className="fs-1 text-success"></FaShippingFast>
          <h2>Free Shipping</h2>
          <p>Order Over $100</p>
        </div>
        <div className="col-md-3">
          <GrSecure className="fs-1"></GrSecure>
          <h2>Secure Payment</h2>
          <p>100 Secure Payment</p>
        </div>
        <div className="col-md-3">
          <BiLoaderAlt className="fs-1 text-success"></BiLoaderAlt>
          <h2>Easy Returns</h2>
          <p>10 Days Returns</p>
        </div>
        <div className="col-md-3">
          <BiSupport className="fs-1 text-success"></BiSupport>
          <h2>24/7Support</h2>
          <p>Call Us Anytime</p>
        </div>
      </div>
    </div>
  );
};

export default Container;

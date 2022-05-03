import React from "react";
import { FaFacebookF, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="footer-bg text-white ">
      <div className="d-flex justify-content-center container">
        <div className="row">
          <div className="col-md-6">
            <h2 className="mt-2 mb-4">BOOK SHOP </h2>
            <h5>1203 Town Center</h5>
            <h5>Drive FL 33458 USA</h5>
            <h5>+0000 123 456 789</h5>
            <h6>info@example.com</h6>
          </div>
          <div className="col-md-6">
            <h2 className="mt-2 mb-4">Help</h2>
            <h5>Searth</h5>
            <h5>Help</h5>
            <h5>Information</h5>
            <h5>Privacy Policy</h5>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <h2 className="mt-2 mb-4">Support</h2>
            <h5>Search Terms</h5>
            <h5>Advance Search</h5>
            <h5>Helps & Faqs</h5>
            <h5>Store Location</h5>
            <h5>Orders & Returens</h5>
          </div>

          <div className="col-md-6">
            <h2 className="mt-2 mb-4">Information</h2>
            <h5>Contact</h5>
            <h5>About</h5>
            <h5>Carrers</h5>
            <h5>Refund & Returns</h5>
            <h5>Deliveries</h5>
          </div>
        </div>
      </div>
      <div>
        <div className="d-flex d-flex justify-content-center container mt-5 mb-5">
          <FaFacebookF className="ms-5"></FaFacebookF>
          <FaGoogle className="ms-5"></FaGoogle>
          <FaInstagram className="ms-5"></FaInstagram>
          <FaTwitter className="ms-5"></FaTwitter>
        </div>
        <hr />
      </div>
      <p className="text-center p-5">@ {year} Bookly-store coppy right</p>
    </footer>
  );
};

export default Footer;

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="d-flex container justify-content-center">
        <div className="row ">
          <div className="col-md-6">
            <h2>BOOK SHOP STORE</h2>
            <h5>1203 Town Center</h5>
            <h5>Drive FL 33458 USA</h5>
            <h5>+0000 123 456 789</h5>
            <h6>info@example.com</h6>
          </div>
          <div className="col-md-6">
            <h2>Help</h2>
            <h5>Searth</h5>
            <h5>Help</h5>
            <h5>Information</h5>
            <h5>Privacy Policy</h5>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <h2>Support</h2>
            <h5>Search Ter,s</h5>
            <h5>Advance Search</h5>
            <h5>Helps & Faqs</h5>
            <h5>Store Location</h5>
            <h5>Orders & rETURNS</h5>
          </div>

          <div className="col-md-6">
            <h2>Information</h2>
            <h5>Contact</h5>
            <h5>About</h5>
            <h5>Carrers</h5>
            <h5>Refund & Returns</h5>
            <h5>Deliveries</h5>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

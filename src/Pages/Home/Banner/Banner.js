import React from "react";
import "./Banner.css";
import logo from "../../../image/book-3.png";
import logo1 from "../../../image/book-2.png";
import logo2 from "../../../image/book-9.png";
import banner from "../../../image/stand.png";
import { Button } from "react-bootstrap";

const Banner = () => {
  return (
    <div className="banar ">
      <div className=" row ">
        <div className="content ">
          <div className="mb-4">Get You New</div>
          <h2>Book Collections</h2>
          <p>
            Ther are many variations of passages of lorem lpsum available ,but
            ,majority have sufferde alterastion in some formr
          </p>
          <Button className="bg-success py-2 px-4 rounded text-white border ">
            Shop Now
          </Button>
        </div>

        <div className="swiper mySwiper book-slider ">
          <div className="swiper-wrapper">
            <a href="#">
              <img src={logo} alt="" />
            </a>
            <a href="#">
              <img src={logo2} alt="" />
            </a>
          </div>
          <img className=" stand" src={banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;

import React from "react";
import "./Banner.css";
import logo from "../../../image/book-3.png";
import logo1 from "../../../image/book-1.png";
import logo2 from "../../../image/book-2.png";
import logo3 from "../../../image/book-9.png";
import logo4 from "../../../image/book3.png";
import logo5 from "../../../image/book5.png";
import logo6 from "../../../image/book7.png";
import banner from "../../../image/stand.png";
import { Button, Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <div className="banar ">
      <div className=" row align-items-center">
        <div className="content mb-5 col-md-6">
          <h2>Get You New</h2>
          <h2>Book Collections</h2>
          <p>
            Ther are many variations of passages of lorem lpsum available ,but
            ,majority have sufferde alterastion in some formr
          </p>
          <Button className="bg-success py-2 px-4 rounded text-white border ">
            Shop Now
          </Button>
        </div>

        <div className="swiper mySwiper book-slider col-md-6">
          <div className="swiper-wrapper"></div>
          <Carousel>
            <Carousel.Item>
              <a href="#">
                <img src={logo} alt="" />
              </a>
              <a href="#">
                <img src={logo1} alt="" />
              </a>
            </Carousel.Item>
            <Carousel.Item>
              <a href="#">
                <img src={logo2} alt="" />
              </a>
              <a href="#">
                <img src={logo3} alt="" />
              </a>
            </Carousel.Item>
            <Carousel.Item>
              <a href="#">
                <img src={logo4} alt="" />
              </a>
              <a href="#">
                <img src={logo5} alt="" />
              </a>
            </Carousel.Item>
          </Carousel>
          <img className=" stand" src={banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;

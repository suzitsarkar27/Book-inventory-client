import React from "react";
import "./Banner.css";
import logo from "../../../image/book-3.png";
import logo1 from "../../../image/book-2.png";
import logo2 from "../../../image/book-9.png";
import banner from "../../../image/stand.png";

const Banner = () => {
  return (
    <section class="banar ">
      <div class=" row ">
        <div class="content">
          <h3 class="mb-4">Get You New</h3>
          <h3>Book Collections</h3>
          <p>
            Ther are many variations of passages of lorem lpsum available ,but
            ,majority have sufferde alterastion in some formr
          </p>
          <button class="bg-success py-2 px-4 rounded text-white border ">
            Shop Now
          </button>
        </div>

        <div class="swiper mySwiper book-slider">
          <div class="swiper-wrapper">
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
    </section>
  );
};

export default Banner;

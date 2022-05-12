import React from "react";
import logo from "../../image/suzit.jpg";

const About = () => {
  return (
    <div className=" mx-auto mt-5 row">
      <div className="col-md-5 mt-5">
        <img className="mx-auto rounded mb-5" src={logo} alt="" />
      </div>
      <div className="col-md-7">
        <h2 className="text-center mb-5">About Myself</h2>
        <h2>Degine & Developer By : Suzit Sarkar </h2>
        <p>
          I was born in Hajigang district, Madhab Upazila. I have two sisters
          and my parents. I have completed Hse in 2021. Now I am studying in
          Uttara university at B.Sc. in computer science engineering. I’ve been
          working on web design and development since for helping people to
          build their website, manage and develop functionality. I’m Passionate
          at web design and development. I work a minimum of 13-14 hours every
          day, I love to do this, it’s my life- everything. I learn new things
          every day.
        </p>

        <div className="row mt-5 mb-5 ">
          <h2>Profesional Skills</h2>
          <div className="col-md-6 ">
            <ul>
              <li>HTML – HTML 5</li>
              <li> CSS – CSS 3</li>
              <li>JavaScript</li>
              <li>Bootstrap 5</li>
              <li>Tall Wind Css</li>
              <li>ReactJs</li>
              <li>MongoDb</li>
              <li>Node js</li>
              <li>Node Express</li>
              <li>My Squle</li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul>
              <li>Any kind of web design(Adobe XD, PSD)</li>
              <li>cPanel and server specialist</li>
              <li> Dynamic Development</li>
              <li>Shopify & Woocommerce</li>
              <li> Graphic Design</li>
              <li>On Page SEO</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

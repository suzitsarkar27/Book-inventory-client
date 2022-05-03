import React from "react";
import Banner from "../Banner/Banner";
import Container from "../Container/Container";
import FooterTop from "../FooterTop/FooterTop";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Container></Container>
      <Products></Products>
      <FooterTop></FooterTop>
    </div>
  );
};

export default Home;

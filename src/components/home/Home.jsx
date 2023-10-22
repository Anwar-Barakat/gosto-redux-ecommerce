import React from "react";
import Hero from "./hero/Hero";
import Card from "./hero/Card";
import Product from "./product/Product";
import Banner from "./banner/Banner";
import TopProduct from "./topProduct/TopProduct";
import Price from "./price/Price";
import Testimonials from "./testimonial/Testimonials";
import Blog from "./blog/Blog";

const Home = () => {
  return (
    <>
      <Hero />
      <Card />
      <Product />
      <Banner />
      <TopProduct />
      <Price />
      <Testimonials />
      <Blog />
    </>
  );
};

export default Home;

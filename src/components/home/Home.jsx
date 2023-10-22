import React from "react";
import Hero from "./hero/Hero";
import Card from "./hero/Card";
import Product from "./product/Product";
import Banner from "./banner/Banner";
import TopProduct from "./topProduct/TopProduct";

const Home = () => {
  return (
    <>
      <Hero />
      <Card />
      <Product />
      <Banner />
      <TopProduct />
    </>
  );
};

export default Home;

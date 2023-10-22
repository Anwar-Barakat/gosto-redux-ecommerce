import React from "react";
import Heading from "../../common/Heading";
import { products } from "../../assets/data/data";
import ProductItem from "./ProductItem";

const Product = () => {
  return (
    <section className="product">
      <div className="container">
        <Heading
          title="Trending Products"
          desc="Check the hottest designs of the week. These rising stars are worth your attention"
        />
        <ProductItem data={products} />
      </div>
    </section>
  );
};

export default Product;

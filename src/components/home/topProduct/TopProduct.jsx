import React, { useState } from "react";
import Heading from "../../common/Heading";
import ProductItem from "../product/ProductItem";
import { products } from "../../assets/data/data";

const TopProduct = () => {
  const [data, setData] = useState(products);
  const allCategories = [
    "all",
    ...new Set(data.map((product) => product.category)),
  ];
  const [category, setCategory] = useState(allCategories);

  const filteringHandler = (cat) => {
    const filtering = products.filter((product) => product.category === cat);
    setData(filtering);

    if (cat === "all") setData(products);
  };
  return (
    <section className="topproduct">
      <div className="container">
        <div className="head">
          <Heading
            title="Top Selling Products"
            desc="Meet our latest templates uploaded to the marketplace."
          />
          <div className="category">
            {category.map((cat, index) => {
              return (
                <button
                  className="button"
                  key={index}
                  onClick={() => filteringHandler(cat)}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
        <ProductItem data={data} />
      </div>
    </section>
  );
};

export default TopProduct;

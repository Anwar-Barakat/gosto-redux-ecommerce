import React, { useEffect, useState } from "react";
import { products } from "../../assets/data/data";
import ProductItem from "../product/ProductItem";

const SearchItems = ({ value, onSearch }) => {
  const [data, setData] = useState(products);
  const sliceProducts = () => {
    const filters = data
      .filter((product) => product.title.startsWith(value))
      .slice(0, 10);
    setData(filters);
  };
  useEffect(() => {
    sliceProducts();
  }, []);

  return (
    <section className="searchItems">
      <ProductItem data={data} />
    </section>
  );
};

export default SearchItems;

import React, { useState } from "react";
import { AiOutlineClose, AiOutlineHeart } from "react-icons/ai";
import { FiSearch, FiShoppingBag } from "react-icons/fi";

const ProductItem = ({ data }) => {
  const [openImage, setOpenImage] = useState(false);
  const [image, setImage] = useState("");
  console.log(data);

  const onOpenImage = (src) => {
    setImage(src);
    setOpenImage(true);
    console.log(image);
  };
  return (
    <>
      <div className="product_items">
        {data.map((product) => {
          return (
            <div className="box" key={product.id}>
              <div className="img duration-300 ease-in-out">
                <img
                  src={require("../../assets/images/product/" + product.cover)}
                  alt={product.name}
                />
                <div class="overlay transition duration-150">
                  <button class="button">
                    <FiShoppingBag />
                  </button>
                  <button class="button">
                    <AiOutlineHeart />
                  </button>
                  <button
                    class="button"
                    onClick={() => onOpenImage(product.cover)}
                  >
                    <FiSearch />
                  </button>
                </div>
              </div>
              <div className="details">
                <h3>{product.title}</h3>
                <p>{product.author}</p>
                <h4>Price: ${product.price}</h4>
              </div>
            </div>
          );
        })}
      </div>
      <div className={openImage ? "modalOpen" : "modalClose"}>
        <div className="onClickImage">
          {image && (
            <>
              <img
                src={require(`../../assets/images/product/${image}`)}
                alt="Open modal"
              />
              <button
                className="button"
                onClick={() => {
                  setOpenImage(false);
                }}
              >
                <AiOutlineClose />
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductItem;

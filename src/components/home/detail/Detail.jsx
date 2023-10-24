import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../assets/data/data";
import { MdStarRate } from "react-icons/md";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../../../features/slices/cartSlice";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = products.find((prod) => prod.id === parseInt(id));
  return (
    <article>
      <section className="details">
        <h2 className="details_title">Product Details</h2>
        <div className="details_content">
          <div className="details_content_img">
            <img
              src={require(`../../assets/images/product/${product.cover}`)}
              alt={product.title}
            />
          </div>
          <div className="details_content_detail">
            <h1>{product.title}</h1>
            <div className="rating">
              <span>
                <MdStarRate />
                <MdStarRate />
                <MdStarRate />
                <MdStarRate />
                <MdStarRate />
              </span>
              <label htmlFor="">(6 customers review)</label>
            </div>
            <h3>${product.price}</h3>
            <p>{product.author}</p>
            <div className="qty">
              <div className="count">
                <button
                  onClick={() => {
                    dispatch(increment(product));
                  }}
                >
                  <AiOutlinePlus />
                </button>
                <span>{product.qty}</span>
                <button
                  onClick={() => {
                    dispatch(decrement(product));
                  }}
                >
                  <AiOutlineMinus />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Detail;

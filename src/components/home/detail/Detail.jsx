import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../../assets/data/data";
import { MdStarRate } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../../features/slices/cartSlice";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Detail = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const { id } = useParams();
  const product = cart.find((prod) => prod.id === parseInt(id)) ?? "";
  return (
    <article>
      <section className="details">
        {product ? (
          <>
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
                        dispatch(addToCart(product));
                      }}
                    >
                      <AiOutlinePlus />
                    </button>
                    <span>{product.qty}</span>
                    <button
                      onClick={() => {
                        dispatch(removeFromCart(product));
                      }}
                    >
                      <AiOutlineMinus />
                    </button>
                  </div>
                  <button className="button">ADD TO CART</button>
                </div>
                <div className="desc">
                  <h4>PRODUCT DESCRIPTION</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid esse voluptate culpa necessitatibus sequi, dolores
                    facere aut modi quam delectus perspiciatis quod iste minus
                    facilis aspernatur, eius dicta veniam magni!
                  </p>
                  <h4>PRODUCT DETAILS</h4>
                  <ul>
                    <li>
                      <p>Material: Plastic, Wood</p>
                    </li>
                    <li>
                      <p>Dimension and Weight: Hight: 80 CM, Weight: 5.3 KG</p>
                    </li>
                    <li>
                      <p>Length: 48 CM</p>
                    </li>
                    <li>
                      <p>Depth: 52 CM</p>
                    </li>
                    <li>
                      <p>Seat Height: 44CM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        ) : (
          <h2 className="text-center">NOT FOUND YET</h2>
        )}
      </section>
    </article>
  );
};

export default Detail;

import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { navList } from "../assets/data/data";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { BsBagCheck } from "react-icons/bs";
import { RiUser3Line } from "react-icons/ri";
import {
  AiOutlineClose,
  AiOutlineDelete,
  AiOutlineHeart,
  AiOutlineMenu,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../features/slices/cartSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { cart, totalAmount, totalPrice } = useSelector((state) => state.cart);

  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 100);
  });

  const [mobile, setMobile] = useState(false);
  const [cartList, setCartList] = useState(false);

  return (
    <>
      <header className="header">
        <div className="container">
          <nav>
            <div className="toggle">
              <button
                onClick={() => {
                  setMobile(!mobile);
                }}
              >
                {mobile ? (
                  <AiOutlineClose className="close heIcon" />
                ) : (
                  <AiOutlineMenu className="open heIcon" />
                )}
              </button>
            </div>
            <div className="left">
              <img src={logo} alt="" />
            </div>
            <div className="center">
              <ul className={mobile ? "mobile-nav" : "menu"}>
                {navList.map((ele) => {
                  return (
                    <li key={ele.text}>
                      <Link to={ele.path}>{ele.text}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>
          <div className="right">
            <div className="right_search">
              <input type="text" placeholder="Search Products" />
              <BiSearch className="searchIcon heIcon" />
            </div>
            <div className="right_user">
              <RiUser3Line className="userIcon heIcon" />
              <AiOutlineHeart className="userIcon heIcon" />
            </div>
            <div className="right_cart">
              <button className="button" onClick={() => setCartList(!cartList)}>
                <BsBagCheck className="shop heIcon" />
                My Cart({cart.length})
              </button>
              <div className={cartList ? "showCart" : "hideCart"}>
                {cart.length ? (
                  <section className="details">
                    <div className="details_title">
                      <h3>Photo</h3>
                      <p>Product details</p>
                    </div>
                    {cart.map((item) => (
                      <div className="details_content" key={item.id}>
                        <div className="details_content_img">
                          <Link to={`/cart/${item.id}`}>
                            <img
                              src={require(`../assets/images/product/${item.cover}`)}
                              alt={item.title}
                            />
                          </Link>
                        </div>
                        <div className="details_content_detail">
                          <div className="details_content_detail_price">
                            <p>{item.title.slice(0, 20)}...</p>
                            <p>Price: ${item.price}</p>
                            <p>QTY: {item.qty}</p>
                          </div>
                        </div>
                        <div
                          className="details_content_detail_icon"
                          onClick={() => {
                            dispatch(removeFromCart(item));
                          }}
                        >
                          <i>
                            <AiOutlineDelete />
                          </i>
                        </div>
                      </div>
                    ))}
                    <hr />
                    <div className="details_total">
                      <h4>
                        <span>Total Amount: </span>
                        <span> {totalAmount}</span>
                      </h4>
                      <h4>
                        <span>Total Price: </span>
                        <span> ${totalPrice}</span>
                      </h4>
                    </div>
                  </section>
                ) : (
                  <section className="empty">
                    <p>Your cart is empty</p>
                    <img
                      src={require("../assets/images/cart.png")}
                      alt="empty cart"
                    />
                  </section>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

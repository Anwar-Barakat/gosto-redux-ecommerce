import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { navList } from "../assets/data/data";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { BsBagCheck } from "react-icons/bs";
import { RiUser3Line } from "react-icons/ri";
import { AiOutlineClose, AiOutlineHeart, AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 100);
  });

  const [mobile, setMobile] = useState(false);

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
                {navList.map((ele, index) => {
                  return (
                    <li key={index}>
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
              <button className="button">
                <BsBagCheck className="shop heIcon" />
                My Cart(0)
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

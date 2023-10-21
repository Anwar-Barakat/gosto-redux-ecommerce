import React from "react";
import logo from "../assets/images/logo.svg";
const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <div className="toggle">
              <button>menu</button>
            </div>
            <div className="left">
              <img src={logo} alt="" />
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;

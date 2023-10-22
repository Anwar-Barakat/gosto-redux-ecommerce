import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import SearchItems from "./SearchItems";

const Hero = () => {
  const [value, setValue] = useState("");
  const onChange = (e) => setValue(e.target.value);
  const onSearch = (value) => setValue(value);

  return (
    <section className="hero">
      <div className="container">
        <h1>
          <label>
            Over <span>3.200</span> Awesome Design
          </label>
          <br />
          <label>
            Resources, <span>Graphic & Website</span> Templates
          </label>
        </h1>
        <p>
          High-quality Design Themes for personal or commercial applications are
          available in 100 categories.
        </p>
        <div className="search">
          <span>All Categories</span>
          <hr />
          <input
            type="text"
            placeholder="Search Products"
            onChange={onChange}
            value={value}
          />
          <button
            onClick={() => {
              onSearch(value);
            }}
          >
            <BiSearch className="searchIcon heIcon" />
          </button>
        </div>
        {value && <SearchItems value={value} onSearch={onSearch} />}
        <p>Examples: Mockups PSD, Images, Theme Design...</p>
      </div>
    </section>
  );
};

export default Hero;

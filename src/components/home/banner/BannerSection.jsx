import React from "react";
import { banners } from "../../assets/data/data";

const BannerSection = () => {
  return (
    <section className="banner">
      <div className="posts">
        {banners.map((item) => {
          return (
            <div className="post" key={item.id}>
              <div className="content">
                <div className="img">
                  <img
                    src={require(`../../assets/images/banner/${item.cover}`)}
                    alt={item.title1}
                  />
                </div>
                <div className="text">
                  <h2>{item.title1}</h2>
                  <h2>{item.title2}</h2>
                  <p>{item.desc}</p>
                  <button className="button">Show now</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BannerSection;

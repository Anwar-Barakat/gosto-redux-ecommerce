import React from "react";
import Heading from "../../common/Heading";
import { prices } from "../../assets/data/data";

const Price = () => {
  return (
    <section className="price">
      <Heading
        title="Choose the plan"
        desc="Meet our latest templates uploaded to the marketplace."
      />
      <div className="container">
        <div className="content">
          {prices.map((plan) => {
            return (
              <div className="box">
                <h3>{plan.name}</h3>
                <h1>
                  <span>$</span>
                  {plan.price}
                  <label htmlFor="">/user per month</label>
                </h1>
                <p>{plan.desc}</p>
                <button className="">get start </button>
                <ul>
                  {plan.list.map((item) => (
                    <li>
                      <i>{item.icon}</i>
                      <span>{item.para}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Price;

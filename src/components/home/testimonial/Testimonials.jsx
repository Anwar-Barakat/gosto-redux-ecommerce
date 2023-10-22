import React from "react";
import Heading from "../../common/Heading";
import { customers } from "../../assets/data/data";
import { ImQuotesRight } from "react-icons/im";

const Testimonials = () => {
  return (
    <section className="customer">
      <Heading
        title="Customers feedbacks"
        desc="Meet our latest templates uploaded to the marketplace."
      />
      <div className="content">
        {customers.map((customer, index) => (
          <div className="card" key={index}>
            <button className="button">
              <ImQuotesRight />
            </button>
            <p>{customer.desc}</p>
            <h3>{customer.post}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

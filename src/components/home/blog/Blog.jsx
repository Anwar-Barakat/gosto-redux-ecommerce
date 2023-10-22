import React from "react";
import Heading from "../../common/Heading";
import { blogs } from "../../assets/data/data";

const Blog = () => {
  return (
    <section className="blog">
      <Heading
        title="latest blog posts"
        desc="latest marketplace news, success stories and tutorials"
      />
      <div className="posts">
        {blogs.slice(0, 3).map((blog) => (
          <div className="post" key={blog.id}>
            <div className="content">
              <div className="img">
                <img
                  src={require("../../assets/images/blog/" + blog.cover)}
                  alt={blog.title}
                />
              </div>
              <div className="text">
                <button className="button">{blog.category}</button>
                <p>
                  POST DATA: <span>{blog.date}</span>
                </p>
                <h3>{blog.title.slice(0, 35)} ...</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;

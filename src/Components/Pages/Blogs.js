import React from "react";
import ResponsiveDisplayImg from "../Utilities/mini-comps/ResponsiveDisplayImg";
import animationObserver from "../Utilities/library/animationObserver";
import { Link } from "react-router-dom";
import dataForBlogs from '../allData/data/dataForBlogs';

const Blogs = () => {
  React.useEffect(() => {
    animationObserver();
  }, []);

  

  // scroll to top
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="blogs-page">
      <div className="blogs-container blog-page-width">
        {dataForBlogs?.map(({ img, date, title, des, author, url }, index) => (
          <div className="blog-item" key={index}>
            <div className="featured-image">
              <Link to={url}>
                <ResponsiveDisplayImg data={{ img, delay: index }} />
              </Link>
            </div>

            <div
              data-animname="fade-in-up"
              data-onetime="true"
              data-delay={index / 8}
              className="content"
            >
              <p className="date">{date}</p>
              <Link to={url}>
                <p className="title primary-font">{title}</p>
              </Link>
              <p className="des">{des}</p>
              <div className="custom-hr"></div>
              <p className="author">
                by <span>{author}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;

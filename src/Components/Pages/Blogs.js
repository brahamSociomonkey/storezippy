import React from "react";
import ResponsiveDisplayImg from "../Utilities/mini-comps/ResponsiveDisplayImg";
import { Link } from "react-router-dom";
// import { HashLink as Link } from "react-router-hash-link";

const Blogs = () => {
  const dataForBlogs = [
    {
      img: "/assets/pages/blogs/difference-between-1PL-2PL-3PL-4PL/featured.png",
      date: "9th July 2021",
      title: "Difference between 1PL, 2PL, 3PL and 4PL",
      des: "Learn about the specifics of different types of logistics providers before choosing the right one for your needs in our latest blogpost.",
      author: "Garima Mehta",
      url: "/blogs/difference-between-1PL-2PL-3PL-4PL",
    },
    {
      img: "/assets/pages/blogs/covid-implications-on-fulfillment/featured-image.png",
      date: "2nd July 2021",
      title: "Covid-19 implications on fulfillment operations",
      des: "Gain insights into the challenges fulfillment operations are facing in the wake of Covid-19 pandemic.",
      author: "Garima Mehta",
      url: "/blogs/covid-implications-on-fulfillment",
    },
    {
      img: "/assets/pages/blogs/how-to-start-selling-online/featured-image.png",
      date: "23rd June 2021",
      title: "How to start selling online?",
      des: "Want to start an online business but don’t know where to start? Learn how to launch an online store and start selling even if you are a newbie.",
      author: "Garima Mehta",
      url: "/blogs/how-to-start-selling-online",
    },
  ];

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
                <ResponsiveDisplayImg data={{ img }} />
              </Link>
            </div>

            <div className="content">
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

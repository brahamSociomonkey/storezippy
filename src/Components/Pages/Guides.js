import React from "react";
import { Link } from "react-router-dom";
import ResponsiveDisplayImg from "../Utilities/mini-comps/ResponsiveDisplayImg";

const Guides = () => {
  const dataForGuides = [
    {
      img: "/assets/pages/guides/guide-2/feature.png",
      date: "13th July 2021",
      title: "The Ultimate Guide to Best Products to sell online 2021",
      des: "A definitive guide to choosing the best products to sell online in 2021.",
      url: "/guides/guide-2",
    },
    {
      img: "/assets/pages/guides/guide-1/feature.png",
      date: "2nd July 2021",
      title: "The Ultimate Guide to Order Fulfillment 2021",
      des: "Are you struggling with Order Fulfillment? Then you have come to the right place!",
      url: "/guides/guide-1",
    },
  ];

  // scroll to top
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="page-guides">
      <div className="guides-container blog-page-width">
        {dataForGuides?.map(({ img, date, title, des, author, url }, index) => (
          <div className="guide-item" key={index}>
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guides;

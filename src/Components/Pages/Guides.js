import React from "react";
import { Link } from "react-router-dom";
import ResponsiveDisplayImg from "../Utilities/mini-comps/ResponsiveDisplayImg";
import ReactHtmlParser from "react-html-parser";
import animationObserver from "../Utilities/library/animationObserver";
import dataForGuides from '../allData/data/dataForGuides';

const Guides = () => {
  

  // scroll to top
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  React.useEffect(() => {
    animationObserver();
  }, []);

  return (
    <div id="page-guides">
      <div className="guides-container blog-page-width">
        {dataForGuides?.map(({ img, date, title, des, author, url }, index) => (
          <div className="guide-item" key={index}>
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
                <p className="title primary-font">{ReactHtmlParser(title)}</p>
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

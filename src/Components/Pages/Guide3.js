import React from "react";
import ResponsiveDisplayImg from "../Utilities/mini-comps/ResponsiveDisplayImg";
import animationObserver from "../Utilities/library/animationObserver";

const Guide3 = () => {
  // scroll to top
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  React.useEffect(() => {
    animationObserver();
  }, []);

  return (
    <div id="guide-3">
      <div className="basic-grid-container hero">
        <div className="content">
          <h1 className="heading primary-font">
            The Ultimate Guide to choosing your{" "}
            <span style={{ display: "inline-block" }}>E-Commerce</span> Platform
          </h1>

          <p>
            Overwhelmed trying to choose the best ecommerce platform for selling
            your products? Building a successful online business starts with
            selecting the right platform to sell. Download our free guide to
            read about how to make the right choice because an eCommerce
            platform is the backbone of your business and you would definitely
            not like to ignore this crucial step.
          </p>

          <br />
          <br />

          <a
            href="/assets/pages/guides/guide-3/the-ultimate-guide-to-choose-ecom-platform.pdf"
            download
            className="btn"
          >
            Download
          </a>
        </div>

        <ResponsiveDisplayImg
          data={{
            img: "/assets/pages/guides/guide-3/hero.png",
            mobImg: "/assets/pages/guides/guide-3/hero-mob.png",
          }}
        />
      </div>
    </div>
  );
};

export default Guide3;

import React from "react";
import ResponsiveDisplayImg from "../Utilities/mini-comps/ResponsiveDisplayImg";

const Guide2 = () => {
  // scroll to top
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="guide-2">
      <div className="basic-grid-container hero">
        <div className="content">
          <h1 className="heading primary-font">
            The Ultimate Guide to Best Products to sell online 2021
          </h1>

          <p>
            Choosing the right product for online selling is an exhilarating yet
            challenging task. That's why we have created a free, downloadable
            guidebook on “Top 10 in-demand trending products” to help new
            <br />
            aspiring eCommerce sellers launch their online store.
          </p>

          <br />

          <h2 className="tertiary-font heading">
            This Order Fulfillment guide will help you learn:
          </h2>

          <ul>
            <li>What is order fulfillment and the steps involved.</li>
            <li>Different order fulfillment options.</li>
            <li>Why outsource?</li>
            <li>Important factors while choosing the right 3PL.</li>
            <li>Trending products for online selling</li>
            <li>Characteristics of best selling products</li>
            <li>The three step niche success validation process</li>
          </ul>

          <br />
          <br />

          <a
            href="/assets/pages/guides/guide-2/the-ultimate-guide.pdf"
            download
            className="btn"
          >
            Download
          </a>
        </div>

        <ResponsiveDisplayImg
          data={{
            img: "/assets/pages/guides/guide-2/hero.png",
            mobImg: "/assets/pages/guides/guide-2/hero-mob.png",
          }}
        />
      </div>
    </div>
  );
};

export default Guide2;

import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import ResponsiveDisplayImg from "./mini-comps/ResponsiveDisplayImg";

const DarkSection = ({ data }) => {
  const { img } = data;

  return (
    <section className="dark">
      <div
        data-animname="fade-in-up"
        data-onetime="true"
        data-delay=".1"
        className="basic-grid-container heading-with-line-grid-container"
      >
        <div className="heading-container">
          <div className="secondary-font">
            <Link className="btn" to="/">
              How it works ?
            </Link>
          </div>
        </div>

        <div
          data-animname="fade-in-up"
          data-onetime="true"
          data-delay=".2"
          className="line-container"
        >
          <div className="gradient-line"></div>
        </div>
      </div>

      <div
        data-animname="fade-in-up"
        data-onetime="true"
        data-delay=".3"
        className="basic-grid-container"
      >
        <div className="content-container">
          <h2 className="heading primary-color primary-font">
            Store Zippy won’t keep you in the dark!
          </h2>
          <p className="rte sub-text">Stay updated with the Live Dashboard</p>
          <p className="rte">
            Yes, in order to ensure that you exactly know what’s happening with
            your customer’s orders, we provide you with a live dashboard which
            keeps you updated.
          </p>

          <ul>
            <li>Greater Accuracy.</li>
            <li>Warehouse Tracking.</li>
            <li>Improved Productivity.</li>
            <li>Live Updates.</li>
          </ul>
        </div>

        <div className="img-container">
          <ResponsiveDisplayImg
            data={{
              img,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default DarkSection;
